#!/usr/bin/env node
import WebSocket from 'ws';
import { v4 as uuidv4 } from 'uuid';
import { findTargetSlotIdFromRoomInfo, packetFromSlot } from './filter.js';

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--address' || a === '-a') { args.address = argv[++i]; continue; }
    if (a === '--slot' || a === '-s') { args.slot = argv[++i]; continue; }
    if (a === '--password' || a === '-p') { args.password = argv[++i]; continue; }
    if (a === '--raw') { args.raw = true; continue; }
    if (a === '--tags' || a === '-t') { args.tags = argv[++i]; continue; }
    if (a === '--client-name' || a === '--name' || a === '-n') { args.clientName = argv[++i]; continue; }
    if (a === '--game' || a === '-g') { args.game = argv[++i]; continue; }
    if (a === '--no-text') { args.noText = true; continue; }
    if (a === '--items-handling' || a === '--ih') { args.itemsHandling = parseInt(argv[++i], 10); continue; }
    if (a === '--version' || a === '-v') {
      const ver = (argv[++i] || '').split('.');
      args.versionOverride = {
        major: parseInt(ver[0] || '0', 10) || 0,
        minor: parseInt(ver[1] || '0', 10) || 0,
        build: parseInt(ver[2] || '0', 10) || 0
      };
      continue;
    }
    if (a === '--help' || a === '-h') { args.help = true; }
  }
  return args;
}

function printHelp() {
  console.log('Usage: node src/tracker.js --address <host:port|ws://...> --slot "<slot name>" [--password <room password>] [--raw] [--tags tag1,tag2]');
  console.log('       [--raw] [--tags tag1,tag2] [--client-name NameForServer] [--game "Game Name"]');
  console.log('Examples:');
  console.log('  node src/tracker.js --address archipelago:53601 --slot "Red"');
  console.log('  node src/tracker.js --address archipelago:53601 --slot "Red" --client-name "BW-Encounter-Tracker"');
  console.log('  node src/tracker.js --address archipelago:53601 --slot "Red" --tags Tracker --game "Pokemon Black and White"');
}

function buildWsUrl(address) {
  if (!address) return null;
  if (address.startsWith('ws://') || address.startsWith('wss://')) return address;
  // Default to insecure ws:// unless explicitly given wss://
  return `ws://${address}`;
}

const args = parseArgs(process.argv);
if (args.help || !args.address || !args.slot) {
  printHelp();
  process.exit(args.help ? 0 : 1);
}

const url = buildWsUrl(args.address);
const slotName = args.slot;
const roomState = { slotInfo: null, targetSlotId: null };
// Store server version to echo back in Connect for compatibility
let serverVersion = null;
let targetGame = null; // game string for the slot we are tracking
let connectAttempts = 0;

console.log(`Connecting to ${url} and tracking sends from slot "${slotName}"...`);
const ws = new WebSocket(url);

let connectSent = false;
let roomInfoTimeout = null;

ws.on('open', () => {
  // Wait for RoomInfo per protocol; only fallback-connect if RoomInfo doesn't arrive
  roomInfoTimeout = setTimeout(() => {
    if (!connectSent) {
      console.warn('RoomInfo not received within 3s; attempting Connect anyway.');
      sendConnect(ws, args.password, { spectatorMode: true });
    }
  }, 3000);
});

ws.on('message', (data) => {
  const text = data.toString();
  try {
    const parsed = JSON.parse(text);
    const list = Array.isArray(parsed) ? parsed : [parsed];
    for (const packet of list) handlePacket(packet);
  } catch (e) {
    // Some servers may send multiple JSON arrays back-to-back; attempt recovery.
    for (const pkt of safeParseMulti(text)) handlePacket(pkt);
  }
});

ws.on('close', (code, reason) => {
  console.error(`Connection closed: ${code} ${reason?.toString?.() || ''}`);
  process.exit(1);
});

ws.on('error', (err) => {
  console.error('WebSocket error:', err?.message || err);
});

function handlePacket(packet) {
  if (!packet || typeof packet !== 'object') return;

  if (packet.cmd === 'RoomInfo') {
    roomState.slotInfo = packet.slot_info || packet.slotInfo || null;
    if (packet.version) serverVersion = packet.version;
    // Try resolving slot before sending Connect so we can include correct game/name
    if (roomState.slotInfo && !roomState.targetSlotId) {
      const id = findTargetSlotIdFromRoomInfo(packet, slotName);
      if (id) {
        roomState.targetSlotId = id;
        // slot_info may be keyed by id as string
        const slotEntry = roomState.slotInfo[id] || roomState.slotInfo[id.toString()];
        if (slotEntry && slotEntry.game) {
          targetGame = slotEntry.game;
        }
        console.log(`Resolved "${slotName}" to slot id ${id}${targetGame ? ` (game: ${targetGame})` : ''}.`);
      } else {
        console.warn(`Could not resolve slot id for "${slotName}" in RoomInfo. Check spelling/case.`);
      }
    }
    if (!connectSent) {
      if (roomInfoTimeout) { clearTimeout(roomInfoTimeout); roomInfoTimeout = null; }
      sendConnect(ws, args.password);
    }
  } else if (packet.cmd === 'Connected') {
    if (!roomState.targetSlotId && roomState.slotInfo) {
      const id = findTargetSlotIdFromRoomInfo({ slot_info: roomState.slotInfo }, slotName);
      if (id) {
        roomState.targetSlotId = id;
        console.log(`Resolved "${slotName}" to slot id ${id}.`);
      }
    }
    console.log('Connected as tracker.');
  } else if (packet.cmd === 'InvalidPacket') {
    console.error('InvalidPacket from server:', JSON.stringify(packet));
    // Provide hints about what might be wrong
    console.error('Possible causes: (1) name matches a slot but game/version/items_handling mismatch; (2) missing required game; (3) malformed version object.');
    if (connectAttempts < 2) {
      console.error('Retrying Connect with minimal tracker parameters in 2s...');
      setTimeout(() => {
        connectSent = false; // allow resend
        sendConnect(ws, args.password, { minimal: true });
      }, 2000);
    } else {
      console.error('Max Connect retries reached. Please run with --client-name DifferentName --game "Exact Game Name" or omit --game to use Tracker spectator.');
    }
  }

  // Print matches
  if (roomState.targetSlotId && packetFromSlot(packet, roomState.targetSlotId)) {
    const ts = new Date().toISOString();
    // Pretty-print unless --raw was requested
    console.log(`[${ts}] MATCH:`, args.raw ? JSON.stringify(packet) : JSON.stringify(packet, null, 2));
  } else if (args.raw) {
    console.log('RAW:', JSON.stringify(packet));
  }
}

function sendConnect(ws, password, opts = {}) {
  if (connectSent) return; // avoid duplicate rapid sends
  connectSent = true;
  connectAttempts++;
  const minimal = !!opts.minimal;
  // Tags: follow working old tracker by default; in minimal mode use only Tracker
  let tags = minimal ? ['Tracker'] : ['AP', 'Tracker'];
  if (args.noText) tags.push('NoText');
  if (args.tags) {
    const extra = args.tags.split(',').map(s => s.trim()).filter(Boolean);
    tags = Array.from(new Set([...tags, ...extra]));
  }
  // Version: prefer explicit override, else server version, else default to 0.6.3. Always include class: 'Version'
  let versionObj = args.versionOverride || (serverVersion && Number.isFinite(serverVersion.major)
    ? { major: Number(serverVersion.major)||0, minor: Number(serverVersion.minor)||0, build: Number(serverVersion.build)||0 }
    : { major: 0, minor: 6, build: 3 });
  versionObj = { ...versionObj, class: 'Version' };
  // Default to authenticating as the provided slot name (common AP behavior); allow override via --client-name
  const nameForConnect = args.clientName || slotName;
  // Determine game: in minimal mode omit game; otherwise prefer explicit --game, else resolved slot game, else fallback to Pokemon BW name
  const gameForConnect = minimal ? null : (args.game !== undefined ? args.game : (targetGame || 'Pokemon Black and White'));
  // items_handling: in minimal mode omit; otherwise default to 0b111 unless overridden
  const itemsHandling = minimal ? null : ((typeof args.itemsHandling === 'number' && !Number.isNaN(args.itemsHandling)) ? args.itemsHandling : 0b111);
  const connect = {
    cmd: 'Connect',
    tags,
    name: nameForConnect,
    uuid: uuidv4(),
    version: versionObj,
    password: (password !== undefined ? password : ''),
    slot_data: !minimal
  };
  if (gameForConnect) connect.game = gameForConnect;
  if (itemsHandling !== null) connect.items_handling = itemsHandling;
  console.log(`Sending Connect attempt #${connectAttempts} packet:`, JSON.stringify(connect));
  ws.send(JSON.stringify([connect]));
}

function safeParseMulti(text) {
  // Try to split concatenated JSON arrays
  const results = [];
  let buf = '';
  let depth = 0;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    buf += ch;
    if (ch === '[') depth++;
    if (ch === ']') depth--;
    if (depth === 0 && buf.trim()) {
      try {
        const parsed = JSON.parse(buf);
        const list = Array.isArray(parsed) ? parsed : [parsed];
        results.push(...list);
        buf = '';
      } catch (_) {
        // keep accumulating
      }
    }
  }
  return results;
}
