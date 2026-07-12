import { test } from 'node:test';
import assert from 'node:assert';
import { CONFIG } from '../config.js';

test('CONFIG - Teleport Count non-linear scaling constraints', () => {
    // 1. Lower degrees (linear scaling, min 2)
    assert.strictEqual(CONFIG.getTeleportCount(3), 2, 'Degree 3 should yield 2 teleports');
    assert.strictEqual(CONFIG.getTeleportCount(4), 2, 'Degree 4 should yield 2 teleports');
    assert.strictEqual(CONFIG.getTeleportCount(5), 2, 'Degree 5 should yield 2 teleports');
    assert.strictEqual(CONFIG.getTeleportCount(6), 3, 'Degree 6 should yield 3 teleports');
    assert.strictEqual(CONFIG.getTeleportCount(7), 3, 'Degree 7 should yield 3 teleports');
    
    // 2. Pivot boundary (exactly 4)
    assert.strictEqual(CONFIG.getTeleportCount(8), 4, 'Degree 8 should yield exactly 4 teleports');
    
    // 3. Smooth transition at D=9 (no sudden jump to 9, should be 4)
    assert.strictEqual(CONFIG.getTeleportCount(9), 4, 'Degree 9 should yield exactly 4 teleports (smooth transition)');
    
    // 4. Accelerating growth (non-linear scaling)
    assert.strictEqual(CONFIG.getTeleportCount(10), 5, 'Degree 10 should yield 5 teleports');
    assert.strictEqual(CONFIG.getTeleportCount(11), 6, 'Degree 11 should yield 6 teleports');
    assert.strictEqual(CONFIG.getTeleportCount(12), 8, 'Degree 12 should yield 8 teleports');
    assert.strictEqual(CONFIG.getTeleportCount(13), 9, 'Degree 13 should yield 9 teleports');
    assert.strictEqual(CONFIG.getTeleportCount(14), 11, 'Degree 14 should yield 11 teleports');
    assert.strictEqual(CONFIG.getTeleportCount(15), 13, 'Degree 15 should yield 13 teleports');
    
    // 5. High degree target (exactly 16)
    assert.strictEqual(CONFIG.getTeleportCount(16), 16, 'Degree 16 should yield exactly 16 teleports');
});
