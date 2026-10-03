import test from 'node:test';
import assert from 'node:assert/strict';

import { resolveTheme, contrast, baseTokens } from '../public/core.js';
test('partial theme falls back to complete base tokens', () => {
  const tokens = resolveTheme('partial'); assert.equal(tokens.accent, '#245e45'); assert.equal(tokens.surface, '#ffffff');
  assert.equal(tokens.space, '16px'); assert.equal(resolveTheme('night').space, '20px');
  tokens.accent = '#000000'; assert.equal(baseTokens.accent, '#245e45');
});
test('contrast has known black/white and identical-color results', () => {
  assert.equal(contrast('#000000', '#ffffff'), 21); assert.equal(contrast('#123456', '#123456'), 1);
  assert.equal(contrast('#ffffff', '#000000'), 21);
});
test('both displayed text pairs exceed 4.5 in each supplied theme', () => {
  for (const name of ['paper', 'night', 'partial']) {
    const t = resolveTheme(name); assert.ok(contrast(t.text, t.surface) >= 4.5); assert.ok(contrast(t['on-accent'], t.accent) >= 4.5);
  }
});
test('invalid theme and color requests fail explicitly', () => {
  assert.throws(() => resolveTheme('constructor')); assert.throws(() => contrast('red', '#ffffff'));
});
