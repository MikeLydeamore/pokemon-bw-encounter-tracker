#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from typing import Any, Dict, List

METHOD_ORDER = [
    "grass",
    "dark-grass",
    "cave",
    "surfing",
    "fishing",
    "super-rod",
    "special",
]

KNOWN_METHODS = set(METHOD_ORDER)


def slugify(text: str) -> str:
    text = text.strip().lower()
    text = re.sub(r"&", " and ", text)
    text = re.sub(r"[^a-z0-9]+", "-", text)
    text = re.sub(r"-+", "-", text)
    return text.strip("-")


def to_ts_string(value: Any) -> str:
    # Use JSON to serialize safely, then return the JSON string
    return json.dumps(value, ensure_ascii=False, indent=2)


def transform(input_json: Path) -> Dict[str, Any]:
    data = json.loads(input_json.read_text(encoding="utf-8"))
    out_locations: List[Dict[str, Any]] = []

    for loc in data:
        name = loc.get("name", "").strip()
        if not name:
            continue
        loc_id = slugify(name)
        encs: Dict[str, List[Dict[str, Any]]] = loc.get("encounters", {}) or {}

        methods: List[Dict[str, Any]] = []
        for method_name in METHOD_ORDER:
            entries = encs.get(method_name) or []
            if not entries:
                continue

            # Normalize entries and drop exact duplicates
            norm_entries: List[Dict[str, Any]] = []
            seen = set()
            for e in entries:
                pokemon = (e.get("pokemon") or "").strip()
                rate = e.get("rate")
                note = (e.get("note") or "").strip() or None
                key = (pokemon, rate, note)
                if key in seen:
                    continue
                seen.add(key)
                row: Dict[str, Any] = {"name": pokemon}
                if isinstance(rate, int):
                    row["rate"] = rate
                if note:
                    row["note"] = note
                norm_entries.append(row)

            if norm_entries:
                methods.append({
                    "type": method_name,
                    "entries": norm_entries,
                })

        if methods:
            out_locations.append({
                "id": loc_id,
                "name": name,
                "encounters": methods,
            })

    return {
        "locations": out_locations
    }


def write_ts(output_ts: Path, transformed: Dict[str, Any]) -> None:
    # TypeScript types
    ts_types = """
// AUTO-GENERATED FILE. Do not edit by hand.
// Source: scripts/transform_unova_to_ts.py from unova_bw_only.json

export type EncounterType =
  | 'grass'
  | 'dark-grass'
  | 'cave'
  | 'surfing'
  | 'fishing'
  | 'super-rod'
  | 'special';

export interface EncounterEntry {
  name: string;
  rate?: number; // percent if available
  note?: string; // levels/rarity or extra notes
}

export interface EncounterMethod {
  type: EncounterType;
  entries: EncounterEntry[];
}

export interface Location {
  id: string; // slug of name
  name: string;
  encounters: EncounterMethod[];
}
""".strip()

    # Data payload as TS
    ts_data_obj = {
        "locations": transformed["locations"],
    }
    ts_json = to_ts_string(ts_data_obj)
    ts_export = f"\nexport const data = {ts_json} as const;\n\nexport const locations: ReadonlyArray<Location> = data.locations as unknown as Location[];\nexport default locations;\n"

    content = ts_types + "\n\n" + ts_export
    output_ts.parent.mkdir(parents=True, exist_ok=True)
    output_ts.write_text(content, encoding="utf-8")


def main():
    parser = argparse.ArgumentParser(description="Transform scraped Unova JSON into TypeScript data for the web app.")
    parser.add_argument("--in", dest="input", type=Path, default=Path("unova_bw_only.json"), help="Input JSON file from scraper.")
    parser.add_argument("--out", dest="output", type=Path, default=Path("src/data/locations.ts"), help="Output TypeScript file path.")
    args = parser.parse_args()

    transformed = transform(args.input)
    write_ts(args.output, transformed)
    print(f"Wrote TypeScript locations: {args.output} ({len(transformed['locations'])} locations)")


if __name__ == "__main__":
    main()
