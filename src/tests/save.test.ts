import { test, beforeAll as before, assert } from 'vitest';

// Mock localStorage globally before importing save.js
globalThis.localStorage = {
    _data: {},
    setItem(key, val) { this._data[key] = String(val); },
    getItem(key) { return this._data[key] || null; },
    removeItem(key) { delete this._data[key]; },
    clear() { this._data = {}; }
};

// Import save manager functions
import { saveGame, loadSave, clearSave, hasSave, restoreHunter, restoreMatrix, SAVE_KEY } from '../engine/save';

test('SaveManager - Base64 Matrix serialization and deserialization', () => {
    // Save manager uses encodeMatrix/decodeMatrix inside.
    // We can verify this via saveGame/loadSave snapshot matrix content.
    const matrix = new Int8Array(10);
    matrix[0] = 3;
    matrix[1] = 0;
    matrix[2] = 2;
    matrix[9] = 4;
    
    const mockEngine = {
        degree: 8,
        branchingFactor: 0.15,
        isSafeMode: false,
        seed: 'test-seed',
        mazeGen: {
            size: 17,
            startPos: { x: 1.5, y: 1.5, z: 1 },
            matrix: matrix
        },
        player: { x: 1.5, y: 1.5, z: 1, dir: 1.2 },
        hunters: [
            {
                x: 3, y: 3, z: 1, id: 0, state: 'WANDERING',
                lastPos: { x: 3, y: 4, z: 1 },
                history: [{ x: 3, y: 5, z: 1 }],
                visitedNodes: new Set(['3,3,1']),
                pathToTarget: []
            }
        ],
        discoveredTeleports: new Set(['0,1,1']),
        inactiveTeleportPos: { x: 0, y: 1, z: 1 },
        teleportCooldownTicks: 5,
        revealedPathSet: new Set(['2,2,1'])
    };
    
    saveGame(mockEngine);
    assert.ok(hasSave(), 'Save should be successfully stored');
    
    const snapshot = loadSave();
    assert.ok(snapshot);
    assert.strictEqual(snapshot.degree, 8);
    assert.strictEqual(snapshot.branchingFactor, 0.15);
    assert.strictEqual(snapshot.seed, 'test-seed');
    assert.deepStrictEqual(snapshot.player, { x: 1.5, y: 1.5, z: 1, dir: 1.2 });
    assert.deepStrictEqual(snapshot.discoveredTeleports, ['0,1,1']);
    assert.deepStrictEqual(snapshot.inactiveTeleportPos, { x: 0, y: 1, z: 1 });
    assert.strictEqual(snapshot.teleportCooldownTicks, 5);
    assert.deepStrictEqual(snapshot.revealedPathSet, ['2,2,1']);
    
    // Hunter deserialization check
    assert.strictEqual(snapshot.hunters.length, 1);
    const h = snapshot.hunters[0];
    assert.strictEqual(h.x, 3);
    assert.strictEqual(h.state, 'WANDERING');
    assert.deepStrictEqual(h.visitedNodes, ['3,3,1']);
    
    // Matrix contents check
    const newMazeGen = {
        matrix: new Int8Array(10)
    };
    restoreMatrix(newMazeGen, snapshot.matrix);
    assert.strictEqual(newMazeGen.matrix[0], 3);
    assert.strictEqual(newMazeGen.matrix[1], 0);
    assert.strictEqual(newMazeGen.matrix[2], 2);
    assert.strictEqual(newMazeGen.matrix[9], 4);
});

test('SaveManager - Clear save storage', () => {
    localStorage.clear();
    assert.strictEqual(hasSave(), false);
    
    localStorage.setItem(SAVE_KEY, JSON.stringify({ version: 1, data: {} }));
    assert.strictEqual(hasSave(), true);
    
    clearSave();
    assert.strictEqual(hasSave(), false);
});
