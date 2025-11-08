#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
import time
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import Dict, List, Optional, Tuple

import requests
from bs4 import BeautifulSoup, Tag

BASE_URL = "https://pokemondb.net"
INDEX_URL = f"{BASE_URL}/location#tab=loc-unova"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/120.0.0.0 Safari/537.36"
}

# Known method names normalized for our app
METHOD_ALIASES = {
    "grass": "grass",
    "dark grass": "dark-grass",
    "tall grass": "grass",
    "walking": "grass",  # Heading used on location pages for standard grass encounters
    "shaking grass": "special",
    "rustling grass": "special",
    "cave": "cave",
    "surfing": "surfing",
    "rippling water": "surfing",
    "fishing": "fishing",
    "super rod": "super-rod",
    "special": "special",
    "dust cloud": "special",
    "bridge shadows": "special",
    "shadows": "special",
    "water": "surfing",
    "swarm": "special",
    "phenomenon": "special",
}

# Map subsection status labels inside tables to method overrides
STATUS_TO_METHOD = {
    "double grass": "dark-grass",
    "dark grass": "dark-grass",
    "shaking/bubbling spots": "special",
    "shaking spots": "special",
    "bubbling spots": "special",
    "shaking": "special",
    "swarm": "special",
}


@dataclass
class EncounterEntry:
    pokemon: str
    rate: Optional[int]  # percentage if present
    note: Optional[str] = None  # freeform note (level range etc.)


@dataclass
class LocationData:
    name: str
    url: str
    encounters: Dict[str, List[EncounterEntry]] = field(default_factory=dict)  # method -> entries


def make_session() -> requests.Session:
    s = requests.Session()
    s.headers.update(HEADERS)
    return s


def get_soup(session: requests.Session, url: str) -> BeautifulSoup:
    resp = session.get(url, timeout=30)
    resp.raise_for_status()
    return BeautifulSoup(resp.text, "lxml")


def find_unova_panel(soup: BeautifulSoup) -> Optional[Tag]:
    # Try the canonical id first
    panel = soup.select_one("#tab-loc-unova")
    if panel:
        return panel

    # Fallback: any element whose id contains 'loc-unova'
    panel = soup.find(id=lambda x: isinstance(x, str) and "loc-unova" in x)
    if panel:
        return panel

    # Last resort: find a tab panel whose heading text contains 'Unova'
    for div in soup.select("div"):
        if "Unova" in div.get_text(strip=True) and div.find("a", href=True):
            return div
    return None


def parse_unova_location_links(panel: Tag) -> List[Tuple[str, str]]:
    links: List[Tuple[str, str]] = []
    for a in panel.select("a[href]"):
        href = a["href"]
        # Only location pages
        if not href.startswith("/location/"):
            continue
        name = a.get_text(strip=True)
        # Filter out tiny links like map thumbnails without text
        if not name:
            continue
        abs_url = href if href.startswith("http") else BASE_URL + href
        links.append((name, abs_url))

    # Deduplicate by URL while preferring the longest, most descriptive name
    dedup: Dict[str, str] = {}
    for name, url in links:
        if url not in dedup or len(name) > len(dedup[url]):
            dedup[url] = name

    # Sort by name
    out = sorted([(n, u) for u, n in dedup.items()], key=lambda x: x[0].lower())
    return [(name, url) for name, url in out]


def normalize_method_name(raw: str) -> Optional[str]:
    key = raw.strip().lower()
    # Strip trailing qualifiers like (Shake), (Phenomenon)
    key = re.sub(r"\s*\(.*?\)\s*$", "", key).strip()
    return METHOD_ALIASES.get(key)


def next_element_table(start: Tag) -> Optional[Tag]:
    # Walk forward siblings until we find a table
    nxt = start
    for _ in range(20):
        nxt = nxt.find_next_sibling()
        if nxt is None:
            return None
        if isinstance(nxt, Tag):
            # Direct table sibling
            if nxt.name == "table":
                return nxt
            # Some pages wrap the table in a <div class="resp-scroll"> after a <p>
            table = nxt.find("table")
            if table:
                return table
    return None


def extract_bw_rows_only(row: Tag) -> bool:
    """
    Include only rows that apply to Pokémon Black/White (BW), not BW2-only.
    PokémonDB uses per-game cells with classes:
      - cell-loc-game-B5 / cell-loc-game-W5 for BW
      - cell-loc-game-B25 / cell-loc-game-W25 for BW2
      - cell-loc-game-blank when that game does not apply
    We include a row if any BW cell is present (B5 or W5). If only BW2 cells are present, exclude.
    If the structure lacks game cells entirely, we keep the row (some tables may be generic).
    """
    cells = row.select('td.cell-loc-game')
    if not cells:
        return True  # no explicit per-game markup; keep

    def cls_has(td: Tag, key: str) -> bool:
        classes = td.get('class') or []
        return key in classes

    has_bw = any(cls_has(td, 'cell-loc-game-B5') or cls_has(td, 'cell-loc-game-W5') for td in cells)
    has_bw2 = any(cls_has(td, 'cell-loc-game-B25') or cls_has(td, 'cell-loc-game-W25') for td in cells)

    if has_bw:
        return True
    if has_bw2 and not has_bw:
        return False
    # If no explicit BW or BW2 markers found, be conservative and exclude
    return False


def parse_rate(text: str) -> Optional[int]:
    m = re.search(r"(\d+)\s*%", text)
    return int(m.group(1)) if m else None


def parse_row(row: Tag) -> Optional[EncounterEntry]:
    tds = row.find_all("td")
    if not tds:
        return None

    # Pokemon name: look for a link to /pokedex/<name> inside
    name_tag = row.select_one('a[href^="/pokedex/"]')
    if not name_tag:
        return None
    pokemon = name_tag.get_text(strip=True)

    # Rate: look for a td containing a percent
    rate = None
    for td in tds:
        txt = td.get_text(" ", strip=True)
        if "%" in txt:
            rate = parse_rate(txt)
            if rate is not None:
                break

    # Fallback: try to map rarity icons (Common/Uncommon/Rare) if percentage not provided
    rarity_note = None
    if rate is None:
        # Prefer explicit rarity icons; avoid season icons
        rarity_img = None
        for img in row.select('td img.icon-loc[alt], td img.icon-loc[title]'):
            alt = (img.get("alt") or img.get("title") or "").strip()
            if alt in {"Common", "Uncommon", "Rare", "Very rare"}:
                rarity_img = img
                break
        if rarity_img:
            rarity_note = (rarity_img.get("alt") or rarity_img.get("title")).strip()

    # Note: optional level range or special note (store first numeric-looking range)
    note = None
    for td in tds[::-1]:
        txt = td.get_text(" ", strip=True)
        if re.search(r"\bLv\.?\s*\d+(-\d+)?\b", txt, flags=re.I) or re.search(r"\b\d+\s*-\s*\d+\b", txt):
            note = txt
            break

    # Combine rarity into note if available
    if rarity_note:
        if note:
            note = f"{note} | Rarity: {rarity_note}"
        else:
            note = f"Rarity: {rarity_note}"

    return EncounterEntry(pokemon=pokemon, rate=rate, note=note)


def parse_location_page(session: requests.Session, name: str, url: str, verbose: bool = False) -> LocationData:
    if verbose:
        print(f"Parsing: {name} -> {url}")
    soup = get_soup(session, url)

    # Strategy:
    # - Find headings that represent encounter methods (h3/h4 with known names)
    # - For each heading, take the next table and parse rows
    encounters: Dict[str, List[EncounterEntry]] = {}

    # Prefer the Generation 5 section if present; else fallback to the whole page
    headings: List[Tag] = []
    gen5_h2 = soup.select_one("h2#gen5") or soup.find("h2", id=lambda x: isinstance(x, str) and x.lower() == "gen5")
    if gen5_h2:
        sib = gen5_h2
        while True:
            sib = sib.find_next_sibling()
            if sib is None:
                break
            if isinstance(sib, Tag) and sib.name == "h2":
                break  # stop at next generation
            if isinstance(sib, Tag) and sib.name in ("h3", "h4"):
                headings.append(sib)
    else:
        # Fallback: within a generic Wild Pokémon section if present
        container = None
        for h2 in soup.select("h2"):
            if "wild" in h2.get_text(strip=True).lower() or "pokémon" in h2.get_text(strip=True).lower():
                container = h2.parent
                break
        if container is None:
            container = soup
        headings = list(container.select("h3, h4"))
    for heading in headings:
        raw_title = heading.get_text(" ", strip=True)
        norm = normalize_method_name(raw_title)
        if not norm:
            continue

        table = next_element_table(heading)
        if not table:
            if verbose:
                print(f"[DEBUG] No table found for heading '{raw_title}' at {url}")
            continue

        tbodies = table.find_all("tbody")
        if not tbodies:
            tbodies = [table]

        for tbody in tbodies:
            # Determine if this tbody declares a subsection status like "Double Grass"
            sub_status = None
            status_th = tbody.select_one("th.cell-loc-status")
            if status_th:
                sub_status = status_th.get_text(" ", strip=True).lower()
            method_for_tbody = STATUS_TO_METHOD.get(sub_status, norm)

            for row in tbody.find_all("tr"):
                # Skip spacer/status header rows
                th = row.find("th")
                if th is not None:
                    continue
                if not extract_bw_rows_only(row):
                    continue
                entry = parse_row(row)
                if not entry:
                    continue
                encounters.setdefault(method_for_tbody, []).append(entry)

    # Light cleanup: sort each method by descending rate then name
    for method, entries in encounters.items():
        encounters[method] = sorted(
            entries,
            key=lambda e: (-(e.rate or -1), e.pokemon.lower())
        )

    return LocationData(name=name, url=url, encounters=encounters)


def main():
    parser = argparse.ArgumentParser(description="Scrape Unova locations (and optionally encounters) from Pokémon Database.")
    parser.add_argument("--deep", action="store_true", help="Also visit each location page and extract BW wild encounters.")
    parser.add_argument("--limit", type=int, default=0, help="Limit number of locations to process (for testing).")
    parser.add_argument("--delay", type=float, default=1.0, help="Delay (seconds) between requests.")
    parser.add_argument("--out", type=Path, default=Path("unova_locations.json"), help="Output JSON path.")
    parser.add_argument("--verbose", action="store_true", help="Print progress.")
    args = parser.parse_args()

    session = make_session()
    index_soup = get_soup(session, INDEX_URL)
    panel = find_unova_panel(index_soup)
    if not panel:
        raise RuntimeError("Could not locate the Unova tab/panel in the index page.")

    links = parse_unova_location_links(panel)
    if args.limit and args.limit > 0:
        links = links[: args.limit]

    results: List[Dict] = []

    if not args.deep:
        # Just the list of locations
        for name, url in links:
            results.append({"name": name, "url": url})
        args.out.write_text(json.dumps(results, indent=2, ensure_ascii=False), encoding="utf-8")
        print(f"Wrote {len(results)} locations -> {args.out}")
        return

    # Deep mode: fetch each page and parse encounter methods
    for idx, (name, url) in enumerate(links, start=1):
        try:
            loc = parse_location_page(session, name, url, verbose=args.verbose)
            results.append({
                "name": loc.name,
                "url": loc.url,
                "encounters": {
                    method: [asdict(e) for e in entries]
                    for method, entries in loc.encounters.items()
                }
            })
        except Exception as ex:
            # Log and continue
            print(f"[WARN] Failed to parse {name}: {ex}")
        time.sleep(args.delay)

    args.out.write_text(json.dumps(results, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Wrote {len(results)} locations (deep={args.deep}) -> {args.out}")


if __name__ == "__main__":
    main()