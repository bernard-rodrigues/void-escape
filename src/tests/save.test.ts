import { test, assert } from 'vitest';

// Mock localStorage globally before importing save.js
globalThis.localStorage = {
    _data: {} as Record<string, string>,
    length: 0,
    key(index: number) { return null; },
    setItem(key: string, val: string) { this._data[key] = String(val); this.length = Object.keys(this._data).length; },
    getItem(key: string) { return this._data[key] || null; },
    removeItem(key: string) { delete this._data[key]; this.length = Object.keys(this._data).length; },
    clear() { this._data = {}; this.length = 0; }
} as any;

// Import save manager functions
import { saveGame, loadSave, clearSave, hasSave, restoreMatrix, SAVE_KEY } from '../engine/save';
import { Engine } from '../engine/engine';
import { getTranslation } from '../engine/translations';

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
    
    saveGame(mockEngine as any);
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
    restoreMatrix(newMazeGen as any, snapshot.matrix);
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

test('SaveManager - Restore from save rebuilds allTeleports containing Jelly Portals', () => {
    // Mock DOM elements required by Engine
    const canvas = document.createElement('canvas');
    canvas.id = 'main-2d-canvas';
    document.body.appendChild(canvas);

    const mapContainer = document.createElement('div');
    mapContainer.id = 'map3d-container';
    document.body.appendChild(mapContainer);

    const originalInitThree = Engine.prototype.initThree;
    const originalLoop = Engine.prototype.loop;
    Engine.prototype.initThree = function() {
        this.scene = { children: [], remove: () => {}, add: () => {} } as any;
        this.camera = { aspect: 1, updateProjectionMatrix: () => {} } as any;
        this.renderer = { domElement: document.createElement('div'), setSize: () => {} } as any;
        this.controls = { update: () => {} } as any;
    };
    Engine.prototype.loop = function() {};

    try {
        const engine = new Engine(4, 0.2);
        engine.isStoryActive = false;
        engine.isIntroPlaying = false;
        
        // Place a JELLY_PORTAL at the player's position
        const px = Math.floor(engine.player.x);
        const py = Math.floor(engine.player.y);
        const pz = engine.player.z;
        engine.maze.set(px, py, pz, engine.mazeGen.TYPES.JELLY_PORTAL);

        // Mock UI showInfoBanner and triggerSave to trace their calls
        let bannerText = '';
        engine.ui.showInfoBanner = (text: string) => {
            bannerText = text;
        };

        let saveTriggered = false;
        engine.triggerSave = () => {
            saveTriggered = true;
        };

        // Move/update player cell logic to trigger the check
        engine.lastPlayerCell = { x: px + 1, y: py, z: pz };
        engine.update(0.016);

        // Assertions
        assert.ok(saveTriggered, 'Stepping on a Jelly Portal must trigger triggerSave');
        assert.strictEqual(bannerText, getTranslation('msgJellyPortalNotSafe'), 'Should show the warning banner that it is not safe');
    } finally {
        Engine.prototype.initThree = originalInitThree;
        Engine.prototype.loop = originalLoop;
        
        // Cleanup DOM
        canvas.remove();
        mapContainer.remove();
    }
});
