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


export const data = {
  "locations": [
    {
      "id": "abundant-shrine",
      "name": "Abundant Shrine",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Bronzong",
              "note": "48-50 | Rarity: Uncommon"
            },
            {
              "name": "Chimecho",
              "note": "47-49 | Rarity: Common"
            },
            {
              "name": "Cottonee",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Misdreavus",
              "note": "Rarity: Rare"
            },
            {
              "name": "Murkrow",
              "note": "Rarity: Rare"
            },
            {
              "name": "Noctowl",
              "note": "48-50 | Rarity: Uncommon"
            },
            {
              "name": "Petilil",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Stantler",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Vulpix",
              "note": "Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Bronzong",
              "note": "58-60 | Rarity: Uncommon"
            },
            {
              "name": "Chimecho",
              "note": "57-59 | Rarity: Common"
            },
            {
              "name": "Cottonee",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Misdreavus",
              "note": "Rarity: Rare"
            },
            {
              "name": "Murkrow",
              "note": "Rarity: Rare"
            },
            {
              "name": "Noctowl",
              "note": "58-60 | Rarity: Uncommon"
            },
            {
              "name": "Petilil",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Stantler",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Vulpix",
              "note": "Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Basculin",
              "note": "25-55 | Rarity: Common"
            },
            {
              "name": "Slowpoke",
              "note": "25-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Basculin",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Goldeen",
              "note": "35-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "47-50 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "25-60 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Emolga",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Goldeen",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Honchkrow",
              "note": "Rarity: Rare"
            },
            {
              "name": "Lilligant",
              "note": "Rarity: Rare"
            },
            {
              "name": "Mismagius",
              "note": "Rarity: Rare"
            },
            {
              "name": "Ninetales",
              "note": "Rarity: Rare"
            },
            {
              "name": "Seaking",
              "note": "35-70 | Rarity: Uncommon"
            },
            {
              "name": "Slowbro",
              "note": "35-70 | Rarity: Rare"
            },
            {
              "name": "Slowking",
              "note": "35-70 | Rarity: Rare"
            },
            {
              "name": "Slowpoke",
              "note": "25-60 | Rarity: Common"
            },
            {
              "name": "Whimsicott",
              "note": "Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "celestial-tower",
      "name": "Celestial Tower",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Elgyem",
              "note": "26-27 | Rarity: Uncommon"
            },
            {
              "name": "Elgyem",
              "note": "26-29 | Rarity: Common"
            },
            {
              "name": "Litwick",
              "note": "26-29 | Rarity: Common"
            }
          ]
        }
      ]
    },
    {
      "id": "challenger-s-cave",
      "name": "Challenger's Cave",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Boldore",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Graveler",
              "note": "47-49 | Rarity: Uncommon"
            },
            {
              "name": "Lickitung",
              "note": "49-50 | Rarity: Uncommon"
            },
            {
              "name": "Mawile",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Riolu",
              "note": "49-50 | Rarity: Rare"
            },
            {
              "name": "Sableye",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Woobat",
              "note": "Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Basculin",
              "note": "25-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Basculin",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Poliwag",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Poliwhirl",
              "note": "35-55 | Rarity: Rare"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Basculin",
              "note": "25-70 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Excadrill",
              "note": "47-50 | Rarity: Common"
            },
            {
              "name": "Poliwhirl",
              "note": "35-70 | Rarity: Common"
            },
            {
              "name": "Poliwrath",
              "note": "45-70 | Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "chargestone-cave",
      "name": "Chargestone Cave",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Boldore",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Ferroseed",
              "note": "24-25 | Rarity: Uncommon"
            },
            {
              "name": "Ferroseed",
              "note": "25-26 | Rarity: Uncommon"
            },
            {
              "name": "Ferroseed",
              "note": "26-27 | Rarity: Uncommon"
            },
            {
              "name": "Joltik",
              "note": "24-27 | Rarity: Common"
            },
            {
              "name": "Klink",
              "note": "25-27 | Rarity: Common"
            },
            {
              "name": "Tynamo",
              "note": "Rarity: Rare"
            },
            {
              "name": "Tynamo",
              "note": "Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Drilbur",
              "note": "24-27 | Rarity: Common"
            }
          ]
        }
      ]
    },
    {
      "id": "cold-storage",
      "name": "Cold Storage",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Herdier",
              "note": "21-23 | Rarity: Common"
            },
            {
              "name": "Minccino",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Timburr",
              "note": "21-22 | Rarity: Uncommon"
            },
            {
              "name": "Vanillite",
              "note": "20-23 | Rarity: Common"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Herdier",
              "note": "25-27 | Rarity: Common"
            },
            {
              "name": "Minccino",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Timburr",
              "note": "25-26 | Rarity: Uncommon"
            },
            {
              "name": "Vanillite",
              "note": "24-27 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "20-23 | Rarity: Common"
            },
            {
              "name": "Cinccino",
              "note": "Rarity: Rare"
            },
            {
              "name": "Stoutland",
              "note": "Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "desert-resort",
      "name": "Desert Resort",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Darumaka",
              "note": "19-20 | Rarity: Common"
            },
            {
              "name": "Dwebble",
              "note": "20-22 | Rarity: Uncommon"
            },
            {
              "name": "Maractus",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Sandile",
              "note": "19-22 | Rarity: Common"
            },
            {
              "name": "Scraggy",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Sigilyph",
              "note": "Rarity: Uncommon"
            }
          ]
        }
      ]
    },
    {
      "id": "dragonspiral-tower",
      "name": "Dragonspiral Tower",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Cubchoo",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Deerling",
              "note": "30-32 | Rarity: Common"
            },
            {
              "name": "Deerling",
              "note": "31-32 | Rarity: Common"
            },
            {
              "name": "Druddigon",
              "note": "30-33 | Rarity: Common"
            },
            {
              "name": "Druddigon",
              "note": "31-33 | Rarity: Uncommon"
            },
            {
              "name": "Golett",
              "note": "30-33 | Rarity: Common"
            },
            {
              "name": "Mienfoo",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Mienfoo",
              "note": "30-33 | Rarity: Common"
            },
            {
              "name": "Mienfoo",
              "note": "31-33 | Rarity: Common"
            },
            {
              "name": "Tranquill",
              "note": "31-32 | Rarity: Common"
            },
            {
              "name": "Vanillite",
              "note": "31-33 | Rarity: Common"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Beartic",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Druddigon",
              "note": "35-37 | Rarity: Uncommon"
            },
            {
              "name": "Mienfoo",
              "note": "30-33 | Rarity: Common"
            },
            {
              "name": "Mienfoo",
              "note": "34-37 | Rarity: Common"
            },
            {
              "name": "Sawsbuck",
              "note": "30-32 | Rarity: Common"
            },
            {
              "name": "Sawsbuck",
              "note": "34-36 | Rarity: Common"
            },
            {
              "name": "Tranquill",
              "note": "35-36 | Rarity: Common"
            },
            {
              "name": "Vanillish",
              "note": "31-33 | Rarity: Common"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Basculin",
              "note": "15-35 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Basculin",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Dragonair",
              "note": "35-55 | Rarity: Rare"
            },
            {
              "name": "Dratini",
              "note": "35-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "30-33 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "15-40 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Dragonair",
              "note": "35-70 | Rarity: Uncommon"
            },
            {
              "name": "Dragonite",
              "note": "50-70 | Rarity: Rare"
            },
            {
              "name": "Dratini",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Emolga",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Unfezant",
              "note": "Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "dreamyard",
      "name": "Dreamyard",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Ariados",
              "note": "Rarity: Rare"
            },
            {
              "name": "Kricketune",
              "note": "47-50 | Rarity: Common"
            },
            {
              "name": "Ledian",
              "note": "Rarity: Rare"
            },
            {
              "name": "Munna",
              "note": "48-49 | Rarity: Uncommon"
            },
            {
              "name": "Munna",
              "note": "8-10 | Rarity: Uncommon"
            },
            {
              "name": "Patrat",
              "note": "8-11 | Rarity: Common"
            },
            {
              "name": "Purrloin",
              "note": "8-11 | Rarity: Common"
            },
            {
              "name": "Raticate",
              "note": "47-50 | Rarity: Common"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Ariados",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Kricketune",
              "note": "48-50 | Rarity: Uncommon"
            },
            {
              "name": "Ledian",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Liepard",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Munna",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Raticate",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Venomoth",
              "note": "48-50 | Rarity: Uncommon"
            },
            {
              "name": "Watchog",
              "note": "Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "8-11 | Rarity: Common"
            },
            {
              "name": "Musharna",
              "note": "Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "driftveil-city",
      "name": "Driftveil City",
      "encounters": [
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Frillish",
              "note": "10-25 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Chinchou",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Krabby",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Luvdisc",
              "note": "35-55 | Rarity: Rare"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Alomomola",
              "note": "10-30 | Rarity: Common"
            },
            {
              "name": "Chinchou",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Jellicent",
              "note": "10-30 | Rarity: Rare"
            },
            {
              "name": "Kingler",
              "note": "35-70 | Rarity: Rare"
            },
            {
              "name": "Lanturn",
              "note": "45-70 | Rarity: Rare"
            },
            {
              "name": "Luvdisc",
              "note": "35-60 | Rarity: Common"
            }
          ]
        }
      ]
    },
    {
      "id": "driftveil-drawbridge",
      "name": "Driftveil Drawbridge",
      "encounters": [
        {
          "type": "special",
          "entries": [
            {
              "name": "Ducklett",
              "note": "22-25 | Rarity: Common"
            }
          ]
        }
      ]
    },
    {
      "id": "giant-chasm",
      "name": "Giant Chasm",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Absol",
              "note": "48-50 | Rarity: Uncommon"
            },
            {
              "name": "Boldore",
              "note": "Rarity: Rare"
            },
            {
              "name": "Clefairy",
              "note": "52-54 | Rarity: Common"
            },
            {
              "name": "Delibird",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Ditto",
              "note": "53-55 | Rarity: Uncommon"
            },
            {
              "name": "Drifblim",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Golbat",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Golbat",
              "note": "48-50 | Rarity: Uncommon"
            },
            {
              "name": "Jynx",
              "note": "48-50 | Rarity: Uncommon"
            },
            {
              "name": "Jynx",
              "note": "58-60 | Rarity: Uncommon"
            },
            {
              "name": "Lunatone",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Metang",
              "note": "53-55 | Rarity: Uncommon"
            },
            {
              "name": "Piloswine",
              "note": "47-49 | Rarity: Common"
            },
            {
              "name": "Piloswine",
              "note": "57-59 | Rarity: Common"
            },
            {
              "name": "Piloswine",
              "note": "52-54 | Rarity: Common"
            },
            {
              "name": "Sneasel",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Solrock",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Swellow",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Tangela",
              "note": "47-49 | Rarity: Common"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Absol",
              "note": "58-60 | Rarity: Uncommon"
            },
            {
              "name": "Clefairy",
              "note": "62-64 | Rarity: Common"
            },
            {
              "name": "Ditto",
              "note": "63-65 | Rarity: Uncommon"
            },
            {
              "name": "Drifblim",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Golbat",
              "note": "58-60 | Rarity: Uncommon"
            },
            {
              "name": "Lunatone",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Metang",
              "note": "63-65 | Rarity: Uncommon"
            },
            {
              "name": "Piloswine",
              "note": "62-64 | Rarity: Common"
            },
            {
              "name": "Solrock",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Swellow",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Tangela",
              "note": "57-59 | Rarity: Common"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Basculin",
              "note": "25-55 | Rarity: Common"
            },
            {
              "name": "Seel",
              "note": "25-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Basculin",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Poliwag",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Poliwhirl",
              "note": "35-55 | Rarity: Rare"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "47-50 | Rarity: Common"
            },
            {
              "name": "Audino",
              "note": "52-55 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "25-60 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Clefable",
              "note": "Rarity: Rare"
            },
            {
              "name": "Crobat",
              "note": "Rarity: Rare"
            },
            {
              "name": "Dewgong",
              "note": "35-70 | Rarity: Uncommon"
            },
            {
              "name": "Excadrill",
              "note": "47-50 | Rarity: Common"
            },
            {
              "name": "Excadrill",
              "note": "57-60 | Rarity: Common"
            },
            {
              "name": "Mamoswine",
              "note": "Rarity: Rare"
            },
            {
              "name": "Metagross",
              "note": "Rarity: Rare"
            },
            {
              "name": "Poliwhirl",
              "note": "35-70 | Rarity: Common"
            },
            {
              "name": "Poliwrath",
              "note": "45-70 | Rarity: Rare"
            },
            {
              "name": "Seel",
              "note": "25-60 | Rarity: Common"
            },
            {
              "name": "Tangrowth",
              "note": "Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "icirrus-city",
      "name": "Icirrus City",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Palpitoad",
              "note": "30-33 | Rarity: Common"
            },
            {
              "name": "Shelmet",
              "note": "30-33 | Rarity: Common"
            },
            {
              "name": "Stunfisk",
              "note": "31-32 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Stunfisk",
              "note": "15-35 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Barboach",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Stunfisk",
              "note": "35-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Barboach",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Seismitoad",
              "note": "15-40 | Rarity: Rare"
            },
            {
              "name": "Stunfisk",
              "note": "15-40 | Rarity: Common"
            },
            {
              "name": "Stunfisk",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Whiscash",
              "note": "35-70 | Rarity: Uncommon"
            }
          ]
        }
      ]
    },
    {
      "id": "lostlorn-forest",
      "name": "Lostlorn Forest",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Cottonee",
              "note": "19-22 | Rarity: Common"
            },
            {
              "name": "Petilil",
              "note": "19-22 | Rarity: Common"
            },
            {
              "name": "Swadloon",
              "note": "19-22 | Rarity: Common"
            },
            {
              "name": "Tranquill",
              "note": "21-22 | Rarity: Uncommon"
            },
            {
              "name": "Venipede",
              "note": "20-21 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Cottonee",
              "note": "19-22 | Rarity: Common"
            },
            {
              "name": "Petilil",
              "note": "19-22 | Rarity: Common"
            },
            {
              "name": "Swadloon",
              "note": "19-22 | Rarity: Common"
            },
            {
              "name": "Tranquill",
              "note": "21-22 | Rarity: Uncommon"
            },
            {
              "name": "Venipede",
              "note": "20-21 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Basculin",
              "note": "5-20 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Basculin",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Goldeen",
              "note": "35-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "19-21 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "5-20 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Emolga",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Goldeen",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Leavanny",
              "note": "Rarity: Rare"
            },
            {
              "name": "Lilligant",
              "note": "Rarity: Rare"
            },
            {
              "name": "Panpour",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Pansage",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Pansear",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Seaking",
              "note": "35-70 | Rarity: Uncommon"
            },
            {
              "name": "Unfezant",
              "note": "Rarity: Rare"
            },
            {
              "name": "Whimsicott",
              "note": "Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "marvelous-bridge",
      "name": "Marvelous Bridge",
      "encounters": [
        {
          "type": "special",
          "entries": [
            {
              "name": "Swanna",
              "note": "48-50 | Rarity: Common"
            }
          ]
        }
      ]
    },
    {
      "id": "mistralton-cave",
      "name": "Mistralton Cave",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Axew",
              "note": "30-31 | Rarity: Uncommon"
            },
            {
              "name": "Boldore",
              "note": "28-31 | Rarity: Common"
            },
            {
              "name": "Woobat",
              "note": "28-30 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Drilbur",
              "note": "28-31 | Rarity: Common"
            }
          ]
        }
      ]
    },
    {
      "id": "moor-of-icirrus",
      "name": "Moor of Icirrus",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Palpitoad",
              "note": "30-33 | Rarity: Common"
            },
            {
              "name": "Shelmet",
              "note": "30-33 | Rarity: Common"
            },
            {
              "name": "Stunfisk",
              "note": "31-32 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Stunfisk",
              "note": "15-35 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Barboach",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Stunfisk",
              "note": "35-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Barboach",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Seismitoad",
              "note": "15-40 | Rarity: Rare"
            },
            {
              "name": "Stunfisk",
              "note": "15-40 | Rarity: Common"
            },
            {
              "name": "Stunfisk",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Whiscash",
              "note": "35-70 | Rarity: Uncommon"
            }
          ]
        }
      ]
    },
    {
      "id": "p2-laboratory",
      "name": "P2 Laboratory",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Herdier",
              "note": "28-31 | Rarity: Common"
            },
            {
              "name": "Klink",
              "note": "29-31 | Rarity: Uncommon"
            },
            {
              "name": "Scraggy",
              "note": "29-31 | Rarity: Uncommon"
            },
            {
              "name": "Watchog",
              "note": "28-31 | Rarity: Common"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Frillish",
              "note": "5-15 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Finneon",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Horsea",
              "note": "35-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Alomomola",
              "note": "5-20 | Rarity: Common"
            },
            {
              "name": "Jellicent",
              "note": "5-20 | Rarity: Rare"
            },
            {
              "name": "Kingdra",
              "note": "45-70 | Rarity: Rare"
            },
            {
              "name": "Lumineon",
              "note": "35-70 | Rarity: Rare"
            },
            {
              "name": "Qwilfish",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Seadra",
              "note": "35-60 | Rarity: Common"
            }
          ]
        }
      ]
    },
    {
      "id": "pinwheel-forest",
      "name": "Pinwheel Forest",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Cottonee",
              "note": "14-17 | Rarity: Common"
            },
            {
              "name": "Petilil",
              "note": "14-17 | Rarity: Common"
            },
            {
              "name": "Pidove",
              "note": "15-16 | Rarity: Uncommon"
            },
            {
              "name": "Pidove",
              "note": "12-15 | Rarity: Common"
            },
            {
              "name": "Sawk",
              "note": "12-17 | Rarity: Uncommon"
            },
            {
              "name": "Sewaddle",
              "note": "14-17 | Rarity: Common"
            },
            {
              "name": "Throh",
              "note": "12-17 | Rarity: Uncommon"
            },
            {
              "name": "Timburr",
              "note": "13-16 | Rarity: Uncommon"
            },
            {
              "name": "Tympole",
              "note": "12-17 | Rarity: Common"
            },
            {
              "name": "Venipede",
              "note": "15-16 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Cottonee",
              "note": "22-25 | Rarity: Common"
            },
            {
              "name": "Petilil",
              "note": "22-25 | Rarity: Common"
            },
            {
              "name": "Swadloon",
              "note": "22-25 | Rarity: Common"
            },
            {
              "name": "Tranquill",
              "note": "23-24 | Rarity: Uncommon"
            },
            {
              "name": "Whirlipede",
              "note": "23-24 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Basculin",
              "note": "5-20 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Basculin",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Goldeen",
              "note": "35-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "14-17 | Rarity: Common"
            },
            {
              "name": "Audino",
              "note": "12-15 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "5-20 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Goldeen",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Lilligant",
              "note": "Rarity: Rare"
            },
            {
              "name": "Panpour",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Pansage",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Pansear",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Sawk",
              "note": "Rarity: Rare"
            },
            {
              "name": "Seaking",
              "note": "35-70 | Rarity: Uncommon"
            },
            {
              "name": "Throh",
              "note": "Rarity: Rare"
            },
            {
              "name": "Whimsicott",
              "note": "Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "relic-castle",
      "name": "Relic Castle",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Claydol",
              "note": "47-50 | Rarity: Common"
            },
            {
              "name": "Cofagrigus",
              "note": "34-37 | Rarity: Common"
            },
            {
              "name": "Cofagrigus",
              "note": "48-50 | Rarity: Uncommon"
            },
            {
              "name": "Krokorok",
              "note": "34-37 | Rarity: Common"
            },
            {
              "name": "Krokorok",
              "note": "47-50 | Rarity: Common"
            },
            {
              "name": "Onix",
              "note": "48-49 | Rarity: Uncommon"
            },
            {
              "name": "Sandile",
              "note": "19-22 | Rarity: Common"
            },
            {
              "name": "Sandslash",
              "note": "47-49 | Rarity: Common"
            },
            {
              "name": "Yamask",
              "note": "19-22 | Rarity: Common"
            }
          ]
        }
      ]
    },
    {
      "id": "roaming-unova",
      "name": "Roaming Unova",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Thundurus"
            },
            {
              "name": "Tornadus"
            }
          ]
        }
      ]
    },
    {
      "id": "route-1",
      "name": "Route 1",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Lillipup",
              "note": "2-4 | Rarity: Common"
            },
            {
              "name": "Patrat",
              "note": "2-4 | Rarity: Common"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Herdier",
              "note": "32-34 | Rarity: Common"
            },
            {
              "name": "Scraggy",
              "note": "33-35 | Rarity: Common"
            },
            {
              "name": "Watchog",
              "note": "32-35 | Rarity: Common"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Basculin",
              "note": "5-15 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Basculin",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Feebas",
              "note": "35-55 | Rarity: Rare"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "2-4 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "5-20 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "35-70 | Rarity: Common"
            },
            {
              "name": "Farfetch'd",
              "note": "Rarity: Common"
            },
            {
              "name": "Feebas",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Milotic",
              "note": "45-70 | Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "route-10",
      "name": "Route 10",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Bouffalant",
              "note": "34-35 | Rarity: Uncommon"
            },
            {
              "name": "Foongus",
              "note": "34-35 | Rarity: Uncommon"
            },
            {
              "name": "Herdier",
              "note": "33-34 | Rarity: Common"
            },
            {
              "name": "Rufflet",
              "note": "34-36 | Rarity: Common"
            },
            {
              "name": "Sawk",
              "note": "33-36 | Rarity: Uncommon"
            },
            {
              "name": "Throh",
              "note": "33-36 | Rarity: Uncommon"
            },
            {
              "name": "Vullaby",
              "note": "34-36 | Rarity: Common"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Amoonguss",
              "note": "39-40 | Rarity: Uncommon"
            },
            {
              "name": "Bouffalant",
              "note": "39-40 | Rarity: Uncommon"
            },
            {
              "name": "Herdier",
              "note": "38-39 | Rarity: Common"
            },
            {
              "name": "Rufflet",
              "note": "39-41 | Rarity: Common"
            },
            {
              "name": "Sawk",
              "note": "38-41 | Rarity: Uncommon"
            },
            {
              "name": "Throh",
              "note": "38-41 | Rarity: Uncommon"
            },
            {
              "name": "Vullaby",
              "note": "39-41 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "33-36 | Rarity: Common"
            },
            {
              "name": "Emolga",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Sawk",
              "note": "Rarity: Rare"
            },
            {
              "name": "Stoutland",
              "note": "Rarity: Rare"
            },
            {
              "name": "Throh",
              "note": "Rarity: Rare"
            },
            {
              "name": "Tyrogue",
              "note": "33-34 | Rarity: Common"
            }
          ]
        }
      ]
    },
    {
      "id": "route-11",
      "name": "Route 11",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Amoonguss",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Gligar",
              "note": "47-50 | Rarity: Uncommon"
            },
            {
              "name": "Golduck",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Karrablast",
              "note": "Rarity: Rare"
            },
            {
              "name": "Pawniard",
              "note": "Rarity: Rare"
            },
            {
              "name": "Rufflet",
              "note": "48-50 | Rarity: Common"
            },
            {
              "name": "Seviper",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Vullaby",
              "note": "48-50 | Rarity: Common"
            },
            {
              "name": "Zangoose",
              "note": "Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Amoonguss",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Bisharp",
              "note": "Rarity: Rare"
            },
            {
              "name": "Braviary",
              "note": "58-60 | Rarity: Common"
            },
            {
              "name": "Gligar",
              "note": "57-60 | Rarity: Uncommon"
            },
            {
              "name": "Golduck",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Karrablast",
              "note": "Rarity: Rare"
            },
            {
              "name": "Mandibuzz",
              "note": "58-60 | Rarity: Common"
            },
            {
              "name": "Seviper",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Zangoose",
              "note": "Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Basculin",
              "note": "25-55 | Rarity: Common"
            },
            {
              "name": "Buizel",
              "note": "25-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Basculin",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Goldeen",
              "note": "35-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "47-50 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "25-60 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Buizel",
              "note": "25-60 | Rarity: Common"
            },
            {
              "name": "Emolga",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Floatzel",
              "note": "35-70 | Rarity: Uncommon"
            },
            {
              "name": "Gliscor",
              "note": "Rarity: Rare"
            },
            {
              "name": "Goldeen",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Paras",
              "note": "47-48 | Rarity: Common"
            },
            {
              "name": "Seaking",
              "note": "35-70 | Rarity: Uncommon"
            },
            {
              "name": "Shroomish",
              "note": "47-48 | Rarity: Common"
            }
          ]
        }
      ]
    },
    {
      "id": "route-12",
      "name": "Route 12",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Cherrim",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Combee",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Dunsparce",
              "note": "Rarity: Rare"
            },
            {
              "name": "Heracross",
              "note": "Rarity: Rare"
            },
            {
              "name": "Kakuna",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Metapod",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Pinsir",
              "note": "Rarity: Rare"
            },
            {
              "name": "Rapidash",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Sunkern",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Tranquill",
              "note": "48-50 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Cherrim",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Combee",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Dunsparce",
              "note": "Rarity: Rare"
            },
            {
              "name": "Heracross",
              "note": "Rarity: Rare"
            },
            {
              "name": "Kakuna",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Metapod",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Pinsir",
              "note": "Rarity: Rare"
            },
            {
              "name": "Rapidash",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Sunkern",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Tranquill",
              "note": "58-60 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "47-50 | Rarity: Common"
            },
            {
              "name": "Beedrill",
              "note": "Rarity: Rare"
            },
            {
              "name": "Butterfree",
              "note": "Rarity: Rare"
            },
            {
              "name": "Doduo",
              "note": "Rarity: Common"
            },
            {
              "name": "Emolga",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Sunflora",
              "note": "Rarity: Rare"
            },
            {
              "name": "Unfezant",
              "note": "Rarity: Rare"
            },
            {
              "name": "Vespiquen",
              "note": "Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "route-13",
      "name": "Route 13",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Absol",
              "note": "48-50 | Rarity: Uncommon"
            },
            {
              "name": "Drifblim",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Golbat",
              "note": "48-50 | Rarity: Uncommon"
            },
            {
              "name": "Lunatone",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Solrock",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Swellow",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Tangela",
              "note": "47-49 | Rarity: Common"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Absol",
              "note": "58-60 | Rarity: Uncommon"
            },
            {
              "name": "Drifblim",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Golbat",
              "note": "58-60 | Rarity: Uncommon"
            },
            {
              "name": "Lunatone",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Solrock",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Swellow",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Tangela",
              "note": "57-59 | Rarity: Common"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Pelipper",
              "note": "25-55 | Rarity: Uncommon"
            },
            {
              "name": "Staryu",
              "note": "25-55 | Rarity: Common"
            },
            {
              "name": "Wingull",
              "note": "25-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Krabby",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Luvdisc",
              "note": "35-55 | Rarity: Uncommon"
            },
            {
              "name": "Shellder",
              "note": "35-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "47-50 | Rarity: Common"
            },
            {
              "name": "Cloyster",
              "note": "45-70 | Rarity: Rare"
            },
            {
              "name": "Corsola",
              "note": "25-60 | Rarity: Common"
            },
            {
              "name": "Crobat",
              "note": "Rarity: Rare"
            },
            {
              "name": "Kingler",
              "note": "35-70 | Rarity: Rare"
            },
            {
              "name": "Luvdisc",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Shellder",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Shuppet",
              "note": "Rarity: Common"
            },
            {
              "name": "Starmie",
              "note": "35-70 | Rarity: Uncommon"
            },
            {
              "name": "Staryu",
              "note": "25-60 | Rarity: Common"
            },
            {
              "name": "Tangrowth",
              "note": "Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "route-14",
      "name": "Route 14",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Altaria",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Beheeyem",
              "note": "48-50 | Rarity: Uncommon"
            },
            {
              "name": "Drifblim",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Golduck",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Jigglypuff",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Mienfoo",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Shuckle",
              "note": "Rarity: Rare"
            },
            {
              "name": "Tropius",
              "note": "48-50 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Altaria",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Beheeyem",
              "note": "58-60 | Rarity: Uncommon"
            },
            {
              "name": "Drifblim",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Golduck",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Jigglypuff",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Mienshao",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Shuckle",
              "note": "Rarity: Rare"
            },
            {
              "name": "Tropius",
              "note": "58-60 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Basculin",
              "note": "25-55 | Rarity: Common"
            },
            {
              "name": "Buizel",
              "note": "25-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Basculin",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "35-55 | Rarity: Rare"
            },
            {
              "name": "Goldeen",
              "note": "35-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "47-50 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "25-60 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Buizel",
              "note": "25-60 | Rarity: Common"
            },
            {
              "name": "Floatzel",
              "note": "35-70 | Rarity: Uncommon"
            },
            {
              "name": "Goldeen",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Seaking",
              "note": "35-70 | Rarity: Uncommon"
            },
            {
              "name": "Wigglytuff",
              "note": "Rarity: Rare"
            },
            {
              "name": "Yanma",
              "note": "Rarity: Common"
            }
          ]
        }
      ]
    },
    {
      "id": "route-15",
      "name": "Route 15",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Fearow",
              "note": "48-50 | Rarity: Common"
            },
            {
              "name": "Gligar",
              "note": "47-49 | Rarity: Uncommon"
            },
            {
              "name": "Kangaskhan",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Marowak",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Pupitar",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Sawk",
              "note": "48-49 | Rarity: Uncommon"
            },
            {
              "name": "Throh",
              "note": "48-49 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Fearow",
              "note": "58-60 | Rarity: Common"
            },
            {
              "name": "Gligar",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Kangaskhan",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Marowak",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Pupitar",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Sawk",
              "note": "58-59 | Rarity: Uncommon"
            },
            {
              "name": "Throh",
              "note": "58-59 | Rarity: Uncommon"
            },
            {
              "name": "Watchog",
              "note": "Rarity: Rare"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "47-50 | Rarity: Common"
            },
            {
              "name": "Emolga",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Gliscor",
              "note": "Rarity: Rare"
            },
            {
              "name": "Mankey",
              "note": "47-48 | Rarity: Common"
            },
            {
              "name": "Sawk",
              "note": "Rarity: Rare"
            },
            {
              "name": "Throh",
              "note": "Rarity: Rare"
            },
            {
              "name": "Tyranitar",
              "note": "Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "route-16",
      "name": "Route 16",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Gothita",
              "note": "19-22 | Rarity: Common"
            },
            {
              "name": "Liepard",
              "note": "20-22 | Rarity: Uncommon"
            },
            {
              "name": "Minccino",
              "note": "19-22 | Rarity: Common"
            },
            {
              "name": "Solosis",
              "note": "19-22 | Rarity: Common"
            },
            {
              "name": "Trubbish",
              "note": "19-21 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Gothita",
              "note": "22-25 | Rarity: Common"
            },
            {
              "name": "Liepard",
              "note": "24-25 | Rarity: Uncommon"
            },
            {
              "name": "Minccino",
              "note": "22-25 | Rarity: Common"
            },
            {
              "name": "Solosis",
              "note": "22-25 | Rarity: Common"
            },
            {
              "name": "Trubbish",
              "note": "22-24 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "19-22 | Rarity: Common"
            },
            {
              "name": "Cinccino",
              "note": "Rarity: Rare"
            },
            {
              "name": "Emolga",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Pineco",
              "note": "Rarity: Common"
            }
          ]
        }
      ]
    },
    {
      "id": "route-17",
      "name": "Route 17",
      "encounters": [
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Frillish",
              "note": "5-15 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Finneon",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Horsea",
              "note": "35-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Alomomola",
              "note": "5-20 | Rarity: Common"
            },
            {
              "name": "Jellicent",
              "note": "5-20 | Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "route-18",
      "name": "Route 18",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Dwebble",
              "note": "30-31 | Rarity: Common"
            },
            {
              "name": "Sawk",
              "note": "29-31 | Rarity: Uncommon"
            },
            {
              "name": "Scraggy",
              "note": "28-31 | Rarity: Common"
            },
            {
              "name": "Throh",
              "note": "29-31 | Rarity: Uncommon"
            },
            {
              "name": "Watchog",
              "note": "28-30 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Crustle",
              "note": "34-35 | Rarity: Common"
            },
            {
              "name": "Sawk",
              "note": "33-35 | Rarity: Uncommon"
            },
            {
              "name": "Scraggy",
              "note": "32-35 | Rarity: Common"
            },
            {
              "name": "Throh",
              "note": "33-35 | Rarity: Uncommon"
            },
            {
              "name": "Watchog",
              "note": "32-34 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Frillish",
              "note": "5-15 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Chinchou",
              "note": "35-55 | Rarity: Rare"
            },
            {
              "name": "Finneon",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Horsea",
              "note": "35-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Alomomola",
              "note": "5-20 | Rarity: Common"
            },
            {
              "name": "Audino",
              "note": "28-31 | Rarity: Common"
            },
            {
              "name": "Exeggcute",
              "note": "28-30 | Rarity: Common"
            },
            {
              "name": "Jellicent",
              "note": "5-20 | Rarity: Rare"
            },
            {
              "name": "Sawk",
              "note": "Rarity: Rare"
            },
            {
              "name": "Throh",
              "note": "Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "route-2",
      "name": "Route 2",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Lillipup",
              "note": "4-7 | Rarity: Common"
            },
            {
              "name": "Patrat",
              "note": "4-7 | Rarity: Common"
            },
            {
              "name": "Purrloin",
              "note": "4-5 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "4-7 | Rarity: Common"
            },
            {
              "name": "Wynaut",
              "note": "Rarity: Common"
            }
          ]
        }
      ]
    },
    {
      "id": "route-3",
      "name": "Route 3",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Blitzle",
              "note": "8-11 | Rarity: Uncommon"
            },
            {
              "name": "Lillipup",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Patrat",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Pidove",
              "note": "8-11 | Rarity: Common"
            },
            {
              "name": "Purrloin",
              "note": "Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Blitzle",
              "note": "10-13 | Rarity: Uncommon"
            },
            {
              "name": "Lillipup",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Patrat",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Pidove",
              "note": "10-13 | Rarity: Common"
            },
            {
              "name": "Purrloin",
              "note": "Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Basculin",
              "note": "5-15 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Basculin",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Goldeen",
              "note": "35-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "8-11 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "5-20 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Goldeen",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Illumise",
              "note": "Rarity: Common"
            },
            {
              "name": "Seaking",
              "note": "35-70 | Rarity: Uncommon"
            },
            {
              "name": "Volbeat",
              "note": "Rarity: Common"
            }
          ]
        }
      ]
    },
    {
      "id": "route-4",
      "name": "Route 4",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Darumaka",
              "note": "15-18 | Rarity: Common"
            },
            {
              "name": "Sandile",
              "note": "15-18 | Rarity: Common"
            },
            {
              "name": "Scraggy",
              "note": "16-17 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Frillish",
              "note": "5-15 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Clamperl",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Krabby",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Luvdisc",
              "note": "35-55 | Rarity: Rare"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Alomomola",
              "note": "5-20 | Rarity: Common"
            },
            {
              "name": "Gorebyss",
              "note": "45-70 | Rarity: Rare"
            },
            {
              "name": "Hippopotas",
              "note": "Rarity: Common"
            },
            {
              "name": "Huntail",
              "note": "45-70 | Rarity: Rare"
            },
            {
              "name": "Jellicent",
              "note": "5-20 | Rarity: Rare"
            },
            {
              "name": "Kingler",
              "note": "35-70 | Rarity: Rare"
            },
            {
              "name": "Luvdisc",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Relicanth",
              "note": "35-60 | Rarity: Common"
            }
          ]
        }
      ]
    },
    {
      "id": "route-5",
      "name": "Route 5",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Gothita",
              "note": "19-22 | Rarity: Common"
            },
            {
              "name": "Liepard",
              "note": "20-22 | Rarity: Uncommon"
            },
            {
              "name": "Minccino",
              "note": "19-22 | Rarity: Common"
            },
            {
              "name": "Solosis",
              "note": "19-22 | Rarity: Common"
            },
            {
              "name": "Trubbish",
              "note": "19-21 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Gothita",
              "note": "22-25 | Rarity: Common"
            },
            {
              "name": "Liepard",
              "note": "23-25 | Rarity: Uncommon"
            },
            {
              "name": "Minccino",
              "note": "22-25 | Rarity: Common"
            },
            {
              "name": "Solosis",
              "note": "22-25 | Rarity: Common"
            },
            {
              "name": "Trubbish",
              "note": "22-24 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "19-22 | Rarity: Common"
            },
            {
              "name": "Cinccino",
              "note": "Rarity: Rare"
            },
            {
              "name": "Emolga",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Smeargle",
              "note": "Rarity: Common"
            }
          ]
        }
      ]
    },
    {
      "id": "route-6",
      "name": "Route 6",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Deerling",
              "note": "22-24 | Rarity: Common"
            },
            {
              "name": "Foongus",
              "note": "23-25 | Rarity: Uncommon"
            },
            {
              "name": "Karrablast",
              "note": "22-24 | Rarity: Common"
            },
            {
              "name": "Swadloon",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Tranquill",
              "note": "23-25 | Rarity: Uncommon"
            },
            {
              "name": "Vanillite",
              "note": "23-25 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Deerling",
              "note": "26-28 | Rarity: Common"
            },
            {
              "name": "Foongus",
              "note": "27-29 | Rarity: Uncommon"
            },
            {
              "name": "Karrablast",
              "note": "26-28 | Rarity: Common"
            },
            {
              "name": "Swadloon",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Tranquill",
              "note": "27-29 | Rarity: Uncommon"
            },
            {
              "name": "Vanillite",
              "note": "27-29 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Basculin",
              "note": "10-25 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Basculin",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Poliwag",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Poliwhirl",
              "note": "35-55 | Rarity: Rare"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "22-25 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "10-30 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Emolga",
              "note": "23-25 | Rarity: Uncommon"
            },
            {
              "name": "Leavanny",
              "note": "Rarity: Rare"
            },
            {
              "name": "Minun",
              "note": "Rarity: Common"
            },
            {
              "name": "Plusle",
              "note": "Rarity: Common"
            },
            {
              "name": "Politoed",
              "note": "45-70 | Rarity: Rare"
            },
            {
              "name": "Poliwhirl",
              "note": "35-70 | Rarity: Common"
            },
            {
              "name": "Unfezant",
              "note": "Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "route-7",
      "name": "Route 7",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Cubchoo",
              "note": "26-28 | Rarity: Common"
            },
            {
              "name": "Deerling",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Foongus",
              "note": "27-29 | Rarity: Uncommon"
            },
            {
              "name": "Tranquill",
              "note": "26-28 | Rarity: Common"
            },
            {
              "name": "Watchog",
              "note": "27-29 | Rarity: Uncommon"
            },
            {
              "name": "Zebstrika",
              "note": "27-29 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Cubchoo",
              "note": "30-32 | Rarity: Common"
            },
            {
              "name": "Deerling",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Foongus",
              "note": "31-33 | Rarity: Uncommon"
            },
            {
              "name": "Tranquill",
              "note": "30-32 | Rarity: Common"
            },
            {
              "name": "Watchog",
              "note": "31-33 | Rarity: Uncommon"
            },
            {
              "name": "Zebstrika",
              "note": "31-33 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "26-29 | Rarity: Common"
            },
            {
              "name": "Emolga",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Emolga",
              "note": "27-29 | Rarity: Uncommon"
            },
            {
              "name": "Sentret",
              "note": "Rarity: Common"
            },
            {
              "name": "Unfezant",
              "note": "Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "route-8",
      "name": "Route 8",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Palpitoad",
              "note": "30-33 | Rarity: Common"
            },
            {
              "name": "Shelmet",
              "note": "30-33 | Rarity: Common"
            },
            {
              "name": "Stunfisk",
              "note": "31-32 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Stunfisk",
              "note": "15-35 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Barboach",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Stunfisk",
              "note": "35-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Barboach",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Croagunk",
              "note": "Rarity: Common"
            },
            {
              "name": "Seismitoad",
              "note": "15-40 | Rarity: Rare"
            },
            {
              "name": "Stunfisk",
              "note": "15-40 | Rarity: Common"
            },
            {
              "name": "Stunfisk",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Whiscash",
              "note": "35-70 | Rarity: Uncommon"
            }
          ]
        }
      ]
    },
    {
      "id": "route-9",
      "name": "Route 9",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Duosion",
              "note": "31-34 | Rarity: Common"
            },
            {
              "name": "Garbodor",
              "note": "31-33 | Rarity: Uncommon"
            },
            {
              "name": "Gothorita",
              "note": "31-34 | Rarity: Common"
            },
            {
              "name": "Liepard",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Minccino",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Pawniard",
              "note": "31-34 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Duosion",
              "note": "36-39 | Rarity: Common"
            },
            {
              "name": "Garbodor",
              "note": "36-38 | Rarity: Uncommon"
            },
            {
              "name": "Gothorita",
              "note": "36-39 | Rarity: Common"
            },
            {
              "name": "Liepard",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Minccino",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Pawniard",
              "note": "36-39 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "31-34 | Rarity: Common"
            },
            {
              "name": "Cinccino",
              "note": "Rarity: Rare"
            },
            {
              "name": "Emolga",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Gothitelle",
              "note": "Rarity: Rare"
            },
            {
              "name": "Houndour",
              "note": "31-32 | Rarity: Common"
            },
            {
              "name": "Poochyena",
              "note": "31-32 | Rarity: Common"
            },
            {
              "name": "Reuniclus",
              "note": "Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "striaton-city",
      "name": "Striaton City",
      "encounters": [
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Basculin",
              "note": "5-15 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Basculin",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Goldeen",
              "note": "35-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Basculin",
              "note": "5-20 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Goldeen",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Seaking",
              "note": "45-70 | Rarity: Uncommon"
            }
          ]
        }
      ]
    },
    {
      "id": "twist-mountain",
      "name": "Twist Mountain",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Boldore",
              "note": "28-31 | Rarity: Common"
            },
            {
              "name": "Boldore",
              "note": "29-30 | Rarity: Common"
            },
            {
              "name": "Cryogonal",
              "note": "Rarity: Rare"
            },
            {
              "name": "Cubchoo",
              "note": "28-31 | Rarity: Common"
            },
            {
              "name": "Cubchoo",
              "note": "Rarity: Rare"
            },
            {
              "name": "Cubchoo",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Gurdurr",
              "note": "28-30 | Rarity: Common"
            },
            {
              "name": "Gurdurr",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Woobat",
              "note": "28-31 | Rarity: Uncommon"
            },
            {
              "name": "Woobat",
              "note": "28-30 | Rarity: Uncommon"
            },
            {
              "name": "Woobat",
              "note": "29-31 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Drilbur",
              "note": "28-31 | Rarity: Common"
            }
          ]
        }
      ]
    },
    {
      "id": "undella-bay",
      "name": "Undella Bay",
      "encounters": [
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Mantyke",
              "note": "25-55 | Rarity: Common"
            },
            {
              "name": "Pelipper",
              "note": "25-55 | Rarity: Uncommon"
            },
            {
              "name": "Spheal",
              "note": "25-55 | Rarity: Common"
            },
            {
              "name": "Wingull",
              "note": "25-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Luvdisc",
              "note": "35-55 | Rarity: Rare"
            },
            {
              "name": "Remoraid",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Shellder",
              "note": "35-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Cloyster",
              "note": "45-70 | Rarity: Rare"
            },
            {
              "name": "Luvdisc",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Mantine",
              "note": "35-70 | Rarity: Rare"
            },
            {
              "name": "Octillery",
              "note": "35-70 | Rarity: Rare"
            },
            {
              "name": "Sealeo",
              "note": "25-60 | Rarity: Common"
            },
            {
              "name": "Shellder",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Wailmer",
              "note": "25-60 | Rarity: Common"
            },
            {
              "name": "Wailord",
              "note": "35-70 | Rarity: Rare"
            },
            {
              "name": "Walrein",
              "note": "35-70 | Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "undella-town",
      "name": "Undella Town",
      "encounters": [
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Mantyke",
              "note": "25-55 | Rarity: Common"
            },
            {
              "name": "Pelipper",
              "note": "25-55 | Rarity: Uncommon"
            },
            {
              "name": "Wingull",
              "note": "25-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Luvdisc",
              "note": "35-55 | Rarity: Rare"
            },
            {
              "name": "Remoraid",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Shellder",
              "note": "35-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Cloyster",
              "note": "45-70 | Rarity: Rare"
            },
            {
              "name": "Corsola",
              "note": "25-60 | Rarity: Common"
            },
            {
              "name": "Luvdisc",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Mantine",
              "note": "35-70 | Rarity: Uncommon"
            },
            {
              "name": "Octillery",
              "note": "35-70 | Rarity: Rare"
            },
            {
              "name": "Shellder",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Wailmer",
              "note": "25-60 | Rarity: Common"
            }
          ]
        }
      ]
    },
    {
      "id": "victory-road",
      "name": "Victory Road",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Boldore",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Boldore",
              "note": "37-39 | Rarity: Common"
            },
            {
              "name": "Boldore",
              "note": "39-41 | Rarity: Common"
            },
            {
              "name": "Deino",
              "note": "38-39 | Rarity: Uncommon"
            },
            {
              "name": "Durant",
              "note": "37-40 | Rarity: Common"
            },
            {
              "name": "Durant",
              "note": "39-42 | Rarity: Common"
            },
            {
              "name": "Fraxure",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Heatmor",
              "note": "37-40 | Rarity: Common"
            },
            {
              "name": "Mienfoo",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Rufflet",
              "note": "38-39 | Rarity: Common"
            },
            {
              "name": "Vullaby",
              "note": "38-39 | Rarity: Common"
            },
            {
              "name": "Woobat",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Woobat",
              "note": "37-40 | Rarity: Uncommon"
            },
            {
              "name": "Woobat",
              "note": "39-42 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Basculin",
              "note": "20-45 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Basculin",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Poliwag",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Poliwhirl",
              "note": "35-55 | Rarity: Rare"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Basculin",
              "note": "20-50 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Excadrill",
              "note": "37-40 | Rarity: Common"
            },
            {
              "name": "Excadrill",
              "note": "39-42 | Rarity: Common"
            },
            {
              "name": "Poliwhirl",
              "note": "35-70 | Rarity: Common"
            },
            {
              "name": "Poliwrath",
              "note": "45-70 | Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "village-bridge",
      "name": "Village Bridge",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Bibarel",
              "note": "47-49 | Rarity: Common"
            },
            {
              "name": "Golduck",
              "note": "47-49 | Rarity: Common"
            },
            {
              "name": "Rufflet",
              "note": "48-50 | Rarity: Uncommon"
            },
            {
              "name": "Seviper",
              "note": "48-50 | Rarity: Uncommon"
            },
            {
              "name": "Vullaby",
              "note": "48-50 | Rarity: Uncommon"
            },
            {
              "name": "Zangoose",
              "note": "48-50 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "dark-grass",
          "entries": [
            {
              "name": "Bibarel",
              "note": "57-59 | Rarity: Common"
            },
            {
              "name": "Braviary",
              "note": "58-60 | Rarity: Uncommon"
            },
            {
              "name": "Golduck",
              "note": "57-59 | Rarity: Common"
            },
            {
              "name": "Mandibuzz",
              "note": "58-60 | Rarity: Uncommon"
            },
            {
              "name": "Seviper",
              "note": "58-60 | Rarity: Uncommon"
            },
            {
              "name": "Zangoose",
              "note": "58-60 | Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Basculin",
              "note": "25-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Basculin",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Carvanha",
              "note": "35-55 | Rarity: Common"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Audino",
              "note": "47-50 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "25-70 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Carvanha",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Emolga",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Lapras",
              "note": "35-70 | Rarity: Rare"
            },
            {
              "name": "Sharpedo",
              "note": "35-70 | Rarity: Uncommon"
            }
          ]
        }
      ]
    },
    {
      "id": "wellspring-cave",
      "name": "Wellspring Cave",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Roggenrola",
              "note": "10-13 | Rarity: Common"
            },
            {
              "name": "Woobat",
              "note": "10-13 | Rarity: Common"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Basculin",
              "note": "5-15 | Rarity: Common"
            }
          ]
        },
        {
          "type": "super-rod",
          "entries": [
            {
              "name": "Basculin",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Poliwag",
              "note": "35-55 | Rarity: Common"
            },
            {
              "name": "Poliwhirl",
              "note": "35-55 | Rarity: Rare"
            }
          ]
        },
        {
          "type": "special",
          "entries": [
            {
              "name": "Basculin",
              "note": "5-20 | Rarity: Common"
            },
            {
              "name": "Basculin",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Drilbur",
              "note": "10-13 | Rarity: Common"
            },
            {
              "name": "Poliwhirl",
              "note": "35-60 | Rarity: Common"
            },
            {
              "name": "Poliwrath",
              "note": "35-60 | Rarity: Rare"
            }
          ]
        }
      ]
    },
    {
      "id": "white-forest",
      "name": "White Forest",
      "encounters": [
        {
          "type": "grass",
          "entries": [
            {
              "name": "Abra",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Aron",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Azurill",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Bagon",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Bellsprout",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Budew",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Elekid",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Gastly",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Happiny",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Hoppip",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Machop",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Magby",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Magnemite",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Mareep",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Nidoran♀",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Nidoran♂",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Oddish",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Pidgey",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Porygon",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Ralts",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Rhyhorn",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Seedot",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Shinx",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Slakoth",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Starly",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Togepi",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Trapinch",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Whismur",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Wurmple",
              "note": "Rarity: Uncommon"
            }
          ]
        },
        {
          "type": "surfing",
          "entries": [
            {
              "name": "Corphish",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Lotad",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Surskit",
              "note": "Rarity: Uncommon"
            },
            {
              "name": "Wooper",
              "note": "Rarity: Uncommon"
            }
          ]
        }
      ]
    }
  ]
} as const;

export const locations: ReadonlyArray<Location> = data.locations as unknown as Location[];
export default locations;
// Legacy alias for earlier import style
export const locationsData = locations;
