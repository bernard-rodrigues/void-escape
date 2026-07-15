import { test } from 'node:test';
import assert from 'node:assert';
import { Hunter } from '../hunter.js';

test('Hunter Jelly Glitch - State initialization', () => {
    const mazeGen = {
        startPos: { x: 0, y: 0, z: 1 }
    };
    const startPos = { x: 2, y: 2, z: 1 };
    const hunter = new Hunter(mazeGen, startPos, 0);

    // Verify Jelly Glitch initialization properties
    assert.strictEqual(hunter.jellyTime, 0);
});

test('Hunter Jelly Glitch - Timeline updates', () => {
    const mazeGen = {
        startPos: { x: 0, y: 0, z: 1 }
    };
    const startPos = { x: 2, y: 2, z: 1 };
    const hunter = new Hunter(mazeGen, startPos, 0);

    // Call generateCloudTexture with dt=0.5s
    hunter.generateCloudTexture(0.5);
    assert.strictEqual(hunter.jellyTime, 0.5);
    // In Node.js environment, document is undefined, so it updates states but returns early before canvas drawing
    assert.strictEqual(hunter.lowCanvas, undefined);
});
