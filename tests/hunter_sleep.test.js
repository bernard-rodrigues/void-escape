import { test } from 'node:test';
import assert from 'node:assert';
import { Hunter } from '../hunter.js';
import { Maze3D } from '../maze3d.js';
import { CONFIG } from '../config.js';
import { saveGame, loadSave, clearSave, hasSave, restoreHunter } from '../save.js';

// Mock localStorage globally for save/restore tests
globalThis.localStorage = {
    _data: {},
    setItem(key, val) { this._data[key] = String(val); },
    getItem(key) { return this._data[key] || null; },
    removeItem(key) { delete this._data[key]; },
    clear() { this._data = {}; }
};

test('Hunter Sleep - Initialization in SLEEP state', () => {
    const mockMaze = { startPos: { x: 1, y: 1, z: 1 } };
    const hunter = new Hunter(mockMaze, null, 1);

    assert.strictEqual(hunter.id, 1);
    assert.strictEqual(hunter.state, 'SLEEP');
    assert.strictEqual(hunter.x, null);
    assert.strictEqual(hunter.y, null);
    assert.strictEqual(hunter.z, null);
    assert.strictEqual(hunter.visualX, null);
    assert.strictEqual(hunter.visualY, null);
    assert.strictEqual(hunter.visualZ, null);
    assert.strictEqual(hunter.lastPos, null);
});

test('Hunter Sleep - Sleeping hunter does not move', () => {
    const mockMaze = { startPos: { x: 1, y: 1, z: 1 } };
    const hunter = new Hunter(mockMaze, null, 1);

    const size = 5;
    const matrix = new Int8Array(size * size * size);
    matrix.size = size;
    matrix.get = (x, y, z) => matrix[(x * size * size) + (y * size) + z];
    matrix.set = (x, y, z, val) => { matrix[(x * size * size) + (y * size) + z] = val; };

    const TYPES = { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4 };
    matrix.set(1, 2, 1, TYPES.PATH);

    // Call move — should return immediately and keep coordinates null
    hunter.move({ x: 1.5, y: 1.5, z: 1 }, matrix, TYPES);

    assert.strictEqual(hunter.state, 'SLEEP');
    assert.strictEqual(hunter.x, null);
    assert.strictEqual(hunter.y, null);
    assert.strictEqual(hunter.z, null);
});

test('Hunter Sleep - Spawning / Wake-up placement algorithm simulation', () => {
    const degree = 3;
    const mazeGen = new Maze3D(degree, 0.2, 'sleep-test-seed');
    const matrix = mazeGen.generate();
    const size = mazeGen.size;

    // Simulate player position at starting position
    const px = Math.floor(mazeGen.startPos.x);
    const py = Math.floor(mazeGen.startPos.y);
    const pz = mazeGen.startPos.z;

    const candidates = [];
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            for (let z = 0; z < size; z++) {
                if (matrix.get(x, y, z) === mazeGen.TYPES.PATH) {
                    candidates.push({ x, y, z });
                }
            }
        }
    }

    assert.ok(candidates.length > 0, 'There should be eligible path cells');

    const getDist = (p1, p2) => Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y) + Math.abs(p1.z - p2.z);

    // Run the placement algorithm simulation
    const spawnedPos = [];
    const hunterCount = CONFIG.getHunterCount(degree); // 1 hunter for degree 3
    const sleepingHunters = Array.from({ length: hunterCount }, (_, i) => new Hunter(mazeGen, null, i + 1));

    let minPlayerDist = Math.max(3, Math.floor(size * 0.45));
    let minInterHunterDist = 4;

    while (spawnedPos.length < sleepingHunters.length && minPlayerDist > 0) {
        spawnedPos.length = 0;

        const filteredCandidates = candidates.filter(c => {
            const distToPlayer = getDist(c, { x: px, y: py, z: pz });
            return distToPlayer >= minPlayerDist;
        });

        for (let i = 0; i < sleepingHunters.length; i++) {
            let bestCand = null;
            for (const c of filteredCandidates) {
                if (spawnedPos.some(s => s.x === c.x && s.y === c.y && s.z === c.z)) continue;

                let validInterHunter = true;
                for (const s of spawnedPos) {
                    if (getDist(c, s) < minInterHunterDist) {
                        validInterHunter = false;
                        break;
                    }
                }

                if (validInterHunter) {
                    bestCand = c;
                    break;
                }
            }

            if (bestCand) {
                spawnedPos.push(bestCand);
            } else {
                break;
            }
        }

        if (spawnedPos.length < sleepingHunters.length) {
            if (minInterHunterDist > 1) {
                minInterHunterDist--;
            } else {
                minPlayerDist--;
            }
        }
    }

    // Verify correct number of spawned positions
    assert.strictEqual(spawnedPos.length, hunterCount);

    // Apply and verify
    for (let i = 0; i < sleepingHunters.length; i++) {
        const h = sleepingHunters[i];
        const pos = spawnedPos[i];
        h.x = pos.x;
        h.y = pos.y;
        h.z = pos.z;
        h.state = 'WANDERING';

        // Check chosen cell is indeed a PATH cell
        assert.strictEqual(matrix.get(h.x, h.y, h.z), mazeGen.TYPES.PATH);
        // Check player distance threshold
        const dist = getDist(h, { x: px, y: py, z: pz });
        assert.ok(dist >= minPlayerDist, `Spawning position should be at least ${minPlayerDist} steps from player`);
    }
});

test('Hunter Sleep - State serialization and restoration', () => {
    clearSave();

    const mockMaze = { startPos: { x: 1, y: 1, z: 1 }, size: 5 };
    const hunter = new Hunter(mockMaze, null, 1);

    const mockEngine = {
        degree: 3,
        branchingFactor: 0.2,
        isSafeMode: false,
        seed: 'sleep-save-seed',
        mazeGen: {
            size: 5,
            startPos: { x: 1, y: 1, z: 1 },
            matrix: new Int8Array(125)
        },
        player: { x: 1.5, y: 1.5, z: 1, dir: 0 },
        hunters: [hunter],
        discoveredTeleports: new Set(),
        inactiveTeleportPos: null,
        teleportCooldownTicks: 0,
        revealedPathSet: new Set(),
        keysCollected: 0,
        totalKeys: 2
    };

    saveGame(mockEngine);
    assert.ok(hasSave());

    const snapshot = loadSave();
    assert.ok(snapshot);
    assert.strictEqual(snapshot.hunters[0].state, 'SLEEP');
    assert.strictEqual(snapshot.hunters[0].x, null);
    assert.strictEqual(snapshot.hunters[0].lastPos, null);

    // Restore state
    const liveHunter = new Hunter(mockMaze, { x: 3, y: 3, z: 1 }, 1);
    restoreHunter(liveHunter, snapshot.hunters[0]);

    assert.strictEqual(liveHunter.state, 'SLEEP');
    assert.strictEqual(liveHunter.x, null);
    assert.strictEqual(liveHunter.lastPos, null);
});
