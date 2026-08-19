import { test, assert } from 'vitest';
import { Engine } from '../engine/engine';
import { getTranslation } from '../engine/translations';

// Mock localStorage globally
globalThis.localStorage = {
    _data: {} as Record<string, string>,
    length: 0,
    key(index: number) { return null; },
    setItem(key: string, val: string) { this._data[key] = String(val); this.length = Object.keys(this._data).length; },
    getItem(key: string) { return this._data[key] || null; },
    removeItem(key: string) { delete this._data[key]; this.length = Object.keys(this._data).length; },
    clear() { this._data = {}; this.length = 0; }
} as any;

test('Floor Challenge Activation - Triggers on 2x2 area', () => {
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
        engine.isSafeMode = false;

        const size = engine.mazeGen.size;
        const TYPES = engine.mazeGen.TYPES;
        const z = 1;

        // Reset all cells on floor z to WALL
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                engine.maze.set(x, y, z, TYPES.WALL);
            }
        }

        // Set up a 2x2 walkable area at (1,1)-(2,2)
        engine.maze.set(1, 1, z, TYPES.VISITED);
        engine.maze.set(1, 2, z, TYPES.VISITED);
        engine.maze.set(2, 1, z, TYPES.VISITED);
        engine.maze.set(2, 2, z, TYPES.VISITED);

        // Place a statue at (3,3) on floor z
        engine.maze.set(3, 3, z, TYPES.STATUE);

        // Put player at (1.5, 1.5, z)
        engine.player.x = 1.5;
        engine.player.y = 1.5;
        engine.player.z = z;

        let bannerText = '';
        engine.ui.showInfoBanner = (text: string) => {
            bannerText = text;
        };

        engine.triggerFloorCompletion(z);

        assert.strictEqual(engine.isJellyChallengeActive, true, 'Floor challenge should activate for a 2x2 walkable area');
        assert.strictEqual(bannerText, getTranslation('msgLockedIn'), 'Should display the locked-in banner message');
    } finally {
        Engine.prototype.initThree = originalInitThree;
        Engine.prototype.loop = originalLoop;
        canvas.remove();
        mapContainer.remove();
    }
});

test('Floor Challenge Activation - Bypassed for 1x4 horizontal corridor', () => {
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
        engine.isSafeMode = false;

        const size = engine.mazeGen.size;
        const TYPES = engine.mazeGen.TYPES;
        const z = 1;

        // Reset all cells on floor z to WALL
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                engine.maze.set(x, y, z, TYPES.WALL);
            }
        }

        // Set up a 1x4 horizontal walkable corridor at y=1, x=1..4
        engine.maze.set(1, 1, z, TYPES.VISITED);
        engine.maze.set(2, 1, z, TYPES.VISITED);
        engine.maze.set(3, 1, z, TYPES.VISITED);
        engine.maze.set(4, 1, z, TYPES.VISITED);

        // Place a statue at (5, 5) on floor z
        engine.maze.set(5, 5, z, TYPES.STATUE);

        // Put player at (1.5, 1.5, z)
        engine.player.x = 1.5;
        engine.player.y = 1.5;
        engine.player.z = z;

        let bannerText = '';
        engine.ui.showInfoBanner = (text: string) => {
            bannerText = text;
        };

        engine.triggerFloorCompletion(z);

        assert.strictEqual(engine.isJellyChallengeActive, false, 'Floor challenge should not activate in a horizontal corridor of height 1');
        assert.strictEqual(bannerText, getTranslation('msgFloorComplete'), 'Should display the floor complete banner message');
    } finally {
        Engine.prototype.initThree = originalInitThree;
        Engine.prototype.loop = originalLoop;
        canvas.remove();
        mapContainer.remove();
    }
});

test('Floor Challenge Activation - Bypassed for 4x1 vertical corridor', () => {
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
        engine.isSafeMode = false;

        const size = engine.mazeGen.size;
        const TYPES = engine.mazeGen.TYPES;
        const z = 1;

        // Reset all cells on floor z to WALL
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                engine.maze.set(x, y, z, TYPES.WALL);
            }
        }

        // Set up a 4x1 vertical walkable corridor at x=1, y=1..4
        engine.maze.set(1, 1, z, TYPES.VISITED);
        engine.maze.set(1, 2, z, TYPES.VISITED);
        engine.maze.set(1, 3, z, TYPES.VISITED);
        engine.maze.set(1, 4, z, TYPES.VISITED);

        // Place a statue at (5, 5) on floor z
        engine.maze.set(5, 5, z, TYPES.STATUE);

        // Put player at (1.5, 1.5, z)
        engine.player.x = 1.5;
        engine.player.y = 1.5;
        engine.player.z = z;

        let bannerText = '';
        engine.ui.showInfoBanner = (text: string) => {
            bannerText = text;
        };

        engine.triggerFloorCompletion(z);

        assert.strictEqual(engine.isJellyChallengeActive, false, 'Floor challenge should not activate in a vertical corridor of width 1');
        assert.strictEqual(bannerText, getTranslation('msgFloorComplete'), 'Should display the floor complete banner message');
    } finally {
        Engine.prototype.initThree = originalInitThree;
        Engine.prototype.loop = originalLoop;
        canvas.remove();
        mapContainer.remove();
    }
});

test('Floor Challenge Death - Hit by statue projectile triggers key-drop and respawn animation', () => {
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
        engine.isSafeMode = false;

        let bannerText = '';
        engine.ui.showInfoBanner = (text: string) => {
            bannerText = text;
        };

        engine.triggerDeath();

        assert.strictEqual(engine.isGameOver, true, 'isGameOver must be set to true');
        assert.ok(engine.deathAnimation, 'deathAnimation must be initialized');
        assert.strictEqual(engine.deathAnimation.hunter, null, 'deathAnimation hunter must be null');
        assert.strictEqual(bannerText, getTranslation('msgKeyDropped'), 'Should show key dropped banner');
    } finally {
        Engine.prototype.initThree = originalInitThree;
        Engine.prototype.loop = originalLoop;
        canvas.remove();
        mapContainer.remove();
    }
});

