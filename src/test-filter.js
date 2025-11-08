import assert from 'assert';
import { packetFromSlot } from './filter.js';

const slotId = 3;
const p1 = { cmd: 'PrintJSON', data: [ { type: 'player_id', player: 3 }, { text: 'sent an item' } ] };
const p2 = { cmd: 'ReceivedItems', items: [ { player: 2, item: 1 }, { player: 3, item: 5 } ] };
const p3 = { cmd: 'Anything', sending_player: 3, foo: 'bar' };
const p4 = { cmd: 'NoMatch', data: [] };

assert.strictEqual(packetFromSlot(p1, slotId), true, 'PrintJSON should match player_id');
assert.strictEqual(packetFromSlot(p2, slotId), true, 'ReceivedItems should match when any item has player == slotId');
assert.strictEqual(packetFromSlot(p3, slotId), true, 'Direct sending_player should match');
assert.strictEqual(packetFromSlot(p4, slotId), false, 'Non-matching packet should not match');

console.log('filter tests passed');
