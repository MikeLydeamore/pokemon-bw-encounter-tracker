#!/usr/bin/env python3
from __future__ import annotations

import json
from pathlib import Path
from typing import List, Iterable

import requests

API_BASE = "https://pokeapi.co/api/v2"
HEADERS = {"User-Agent": "bw-encounter-tracker/1.0"}

# Known special display name fixes for Gen 1-5
SPECIAL_NAMES = {
    "mr-mime": "Mr. Mime",
    "mime-jr": "Mime Jr.",
    "farfetchd": "Farfetch'd",
    "ho-oh": "Ho-Oh",
    "porygon-z": "Porygon-Z",
    "nidoran-f": "Nidoran♀",
    "nidoran-m": "Nidoran♂",
}


def titleize(name: str) -> str:
    # Convert hyphenated API name to Title Case, then apply overrides
    if name in SPECIAL_NAMES:
        return SPECIAL_NAMES[name]
    parts = name.replace("-male", "♂").replace("-female", "♀").split("-")
    titled = " ".join(p.capitalize() for p in parts)
    return titled


def fetch_species_names(limit: int = 649) -> List[str]:
    resp = requests.get(f"{API_BASE}/pokemon-species?limit={limit}&offset=0", headers=HEADERS, timeout=30)
    resp.raise_for_status()
    data = resp.json()
    results = data.get("results", [])
    return [r["name"] for r in results]


def write_ts(names: Iterable[str], out_path: Path) -> None:
    names_list = list(names)  # ensure we can iterate multiple times
    display_names = [titleize(n) for n in names_list]
    # Ensure uniqueness and preserve order
    seen = set()
    uniq: List[str] = []
    for n in display_names:
        if n not in seen:
            uniq.append(n)
            seen.add(n)

    payload = {
        "allPokemon": uniq
    }
    ts = (
        "// AUTO-GENERATED. Run scripts/generate_pokemon_list.py\n"
        "export const allPokemon = " + json.dumps(payload["allPokemon"], ensure_ascii=False, indent=2) + " as const;\n"
        "export type PokemonName = typeof allPokemon[number];\n"
    )
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(ts, encoding="utf-8")


def main():
    names = fetch_species_names(649)
    write_ts(names, Path("src/data/pokemon.ts"))
    print(f"Wrote src/data/pokemon.ts with {len(names)} names")


if __name__ == "__main__":
    main()
