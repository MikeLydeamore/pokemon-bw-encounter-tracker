export function findTargetSlotIdFromRoomInfo(roomInfo, slotName) {
  if (!roomInfo || !roomInfo.slot_info) return null;
  const entries = Object.entries(roomInfo.slot_info);
  // Primary: slot_info keyed by numeric id -> { name: "..." }
  for (const [key, info] of entries) {
    if (info && typeof info === 'object') {
      const name = (info.name ?? key).toString();
      if (name.toLowerCase() === slotName.toLowerCase()) {
        const id = Number.isFinite(info.slot) ? info.slot : parseInt(key, 10);
        return Number.isFinite(id) ? id : null;
      }
    }
  }
  // Fallback: slot_info keyed by name -> { slot: N }
  for (const [key, info] of entries) {
    if (key.toLowerCase() === slotName.toLowerCase()) {
      const id = info && (info.slot ?? info.slot_id);
      return Number.isFinite(id) ? id : null;
    }
  }
  return null;
}

export function packetFromSlot(packet, slotId) {
  if (!packet || typeof packet !== 'object') return false;
  if (packet.sending_player === slotId) return true;
  if (packet.player === slotId) return true;
  if (packet.from === slotId) return true;

  if (packet.cmd === 'PrintJSON' && Array.isArray(packet.data)) {
    return packet.data.some((node) => containsSlot(node, slotId));
  }

  if ((packet.cmd === 'Bounce' || packet.cmd === 'Bounced')) {
    if (packet.tags && packet.tags.includes('ItemSend')) {
      if (packet.sending_player === slotId) return true;
      if (packet.data && packet.data.sending_player === slotId) return true;
    }
  }

  if (packet.cmd === 'ReceivedItems' && Array.isArray(packet.items)) {
    return packet.items.some((it) => it && it.player === slotId);
  }

  return false;
}

function containsSlot(obj, slotId) {
  if (obj == null) return false;
  if (Array.isArray(obj)) {
    for (const v of obj) if (containsSlot(v, slotId)) return true;
    return false;
  }
  if (typeof obj === 'object') {
    // Typed nodes used in PrintJSON often include { type: 'player_id', player: N }
    if (obj.sending_player === slotId) return true;
    if ((obj.type === 'player_id' || obj.type === 'player') && obj.player === slotId) return true;
    if (obj.player === slotId && (obj.type === undefined || obj.type === '')) return true;
    for (const v of Object.values(obj)) {
      if (containsSlot(v, slotId)) return true;
    }
  }
  return false;
}
