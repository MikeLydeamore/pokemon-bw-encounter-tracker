# BW Encounter Tracker (Archipelago)

A tiny Node.js utility that connects to an Archipelago server via WebSocket and prints everything "sent by" a given slot (player name). Handy for tracking item sends/events from a specific slot in a Pokémon BW Archipelago.

## Features
- Connects to an Archipelago WebSocket (e.g., `archipelago:53601` or a full `ws://host:port`).
- Resolves the provided slot name to a slot ID using RoomInfo.
- Prints any packets that appear to be sent by that slot (e.g., `sending_player`, `PrintJSON` with player IDs, `ReceivedItems` with `player` equal to the sender).
- Optional raw logging of all packets.

## Requirements
- Node.js 18+ recommended.

## Install

```powershell
# From the project folder
npm install
```

## Usage

```powershell
# Basic
node src/tracker.js --address archipelago:53601 --slot "Your Slot Name"

# With server password (if the room requires it)
node src/tracker.js --address archipelago:53601 --slot "Your Slot Name" --password "roompassword"

# Show all packets (raw) and highlight matches
node src/tracker.js --address archipelago:53601 --slot "Your Slot Name" --raw
```

Notes:
- If you provide just `host:port` (like `archipelago:53601`), the tool automatically prefixes `ws://`.
- The tool connects with tags `["Tracker"]`. Some servers may restrict spectators/trackers; if so, provide the room password or ask the host to allow tracker connections.

## How it works
- On connect, the server typically sends a `RoomInfo` packet. We use it to find the slot ID for the provided slot name.
- We then send a `Connect` command with tracker tags to receive global messages such as `PrintJSON`.
- We flag and print packets where the sender ("sending_player" or equivalent) matches your target slot ID.

## Test the filter locally
You can run a tiny test that checks the filtering logic against sample packets:

```powershell
npm test
```

## Roadmap / Next steps
- Web UI overlay to show a clean encounter feed.
- Persistence (save to file) and filters for encounter-specific events.
- More protocol-specific parsing once we lock down the exact Archipelago packet types you care about.
