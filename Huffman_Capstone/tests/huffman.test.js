const test = require('node:test');
const assert = require('node:assert/strict');
const { TextEncoder } = require('node:util');
const Huffman = require('../src/huffman-core.js');

const enc = new TextEncoder();

test('compresses and restores ordinary text exactly', () => {
  const input = enc.encode('this is an example of a huffman tree');
  const packed = Huffman.compressBytes(input);
  assert.deepEqual(Huffman.decompressBytes(packed.data), input);
  assert.ok(packed.stats.compressedBytes > 0);
});

test('handles an empty file', () => {
  const input = new Uint8Array(0);
  const packed = Huffman.compressBytes(input);
  assert.deepEqual(Huffman.decompressBytes(packed.data), input);
});

test('handles a file with one repeated symbol', () => {
  const input = enc.encode('aaaaaaaaaaaaaaaaaaaaaaaa');
  const packed = Huffman.compressBytes(input);
  assert.deepEqual(Huffman.decompressBytes(packed.data), input);
  assert.equal(packed.analysis.codes.get(97), '0');
});

test('handles all 256 possible byte values', () => {
  const input = Uint8Array.from({ length: 256 }, (_, i) => i);
  const packed = Huffman.compressBytes(input);
  assert.deepEqual(Huffman.decompressBytes(packed.data), input);
});

test('handles UTF-8 text', () => {
  const input = enc.encode('Namaste, Navraj! नमस्ते 🌏');
  const packed = Huffman.compressBytes(input);
  assert.deepEqual(Huffman.decompressBytes(packed.data), input);
});

test('rejects an invalid file signature', () => {
  assert.throws(() => Huffman.decompressBytes(enc.encode('not a HUF1 file')), /signature/);
});

test('rejects a truncated metadata header', () => {
  assert.throws(() => Huffman.decompressBytes(Uint8Array.from([0x48,0x55,0x46,0x31,0,0,0,20,123])), /incomplete metadata/);
});
