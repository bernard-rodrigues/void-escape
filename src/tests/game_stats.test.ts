import { test, assert } from 'vitest';
import { saveGame, loadSave, clearSave } from '../engine/save';

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

class MockEngineForStats {
    degree: number;
    branchingFactor: number;
    isSafeMode: boolean;
    seed: string;
    mazeGen: {
        size: number;
        startPos: { x: number; y: number; z: number };
        matrix: Int8Array;
    };
    player: { x: number; y: number; z: number; dir: number };
    hunters: any[];
    discoveredTeleports: Set<string>;
    inactiveTeleportPos: { x: number; y: number; z: number } | null;
    teleportCooldownTicks: number;
    revealedPathSet: Set<string>;
    keysCollected: number;
    totalKeys: number;
    totalPathfinders: number;
    pathfindersRemaining: number;
    
    // Stats properties
    deathsCount: number;
    elapsedTime: number;

    // State properties for game loop
    isGameOver: boolean;
    isDestroyed: boolean;
    isPaused: boolean;
    isIntroPlaying: boolean;
    isStoryActive: boolean;

    ui: {
        victoryShown: boolean;
        victoryPercent: number;
        victoryDeaths: number;
        victoryDegree: number;
        victoryTime: number;
        showVictory(percent: number, deaths: number, degree: number, time: number): void;
    };

    constructor(degree = 8) {
        this.degree = degree;
        this.branchingFactor = 0.2;
        this.isSafeMode = false;
        this.seed = 'test-stats-seed';
        this.mazeGen = {
            size: 17,
            startPos: { x: 1.5, y: 1.5, z: 1 },
            matrix: new Int8Array(17 * 17 * 17)
        };
        this.player = { x: 1.5, y: 1.5, z: 1, dir: 0 };
        this.hunters = [];
        this.discoveredTeleports = new Set();
        this.inactiveTeleportPos = null;
        this.teleportCooldownTicks = 0;
        this.revealedPathSet = new Set();
        this.keysCollected = 0;
        this.totalKeys = 4;
        this.totalPathfinders = 4;
        this.pathfindersRemaining = 4;

        this.deathsCount = 0;
        this.elapsedTime = 0;

        this.isGameOver = false;
        this.isDestroyed = false;
        this.isPaused = false;
        this.isIntroPlaying = false;
        this.isStoryActive = false;

        const self = this;
        this.ui = {
            victoryShown: false,
            victoryPercent: 0,
            victoryDeaths: 0,
            victoryDegree: 0,
            victoryTime: 0,
            showVictory(percent: number, deaths: number, degree: number, time: number) {
                self.ui.victoryShown = true;
                self.ui.victoryPercent = percent;
                self.ui.victoryDeaths = deaths;
                self.ui.victoryDegree = degree;
                self.ui.victoryTime = time;
            }
        };
    }

    update(dt: number) {
        if (this.isGameOver || this.isDestroyed || !dt) return;

        if (!this.isPaused && !this.isIntroPlaying && !this.isStoryActive) {
            this.elapsedTime += dt;
        }
    }

    triggerVictory() {
        this.isGameOver = true;
        clearSave();
        const percent = 50; // mock completion percent
        this.ui.showVictory(percent, this.deathsCount, this.degree, this.elapsedTime);
    }
}

test('Game Stats - Timer updates correctly under various gameplay states', () => {
    const engine = new MockEngineForStats();
    
    // Normal gameplay: timer increments
    engine.update(1.5);
    assert.strictEqual(engine.elapsedTime, 1.5);

    // Paused: timer does NOT increment
    engine.isPaused = true;
    engine.update(1.0);
    assert.strictEqual(engine.elapsedTime, 1.5);

    // Unpaused: timer increments again
    engine.isPaused = false;
    engine.update(0.5);
    assert.strictEqual(engine.elapsedTime, 2.0);

    // Intro playing: timer does NOT increment
    engine.isIntroPlaying = true;
    engine.update(1.0);
    assert.strictEqual(engine.elapsedTime, 2.0);

    // Intro finished: timer increments again
    engine.isIntroPlaying = false;
    engine.update(0.8);
    assert.strictEqual(engine.elapsedTime, 2.8);

    // Story cinematic active: timer does NOT increment
    engine.isStoryActive = true;
    engine.update(1.0);
    assert.strictEqual(engine.elapsedTime, 2.8);
});

test('Game Stats - Save and load state preserves deathsCount and elapsedTime', () => {
    clearSave();
    const engine = new MockEngineForStats(12);
    engine.deathsCount = 5;
    engine.elapsedTime = 345.5;

    saveGame(engine as any);
    assert.ok(loadSave(), 'Game should be saved successfully');

    const snapshot = loadSave();
    assert.strictEqual(snapshot.deathsCount, 5);
    assert.strictEqual(snapshot.elapsedTime, 345.5);
});

test('Game Stats - Victory triggers results panel with correct statistics', () => {
    const engine = new MockEngineForStats(10);
    engine.deathsCount = 3;
    engine.elapsedTime = 120.5;

    engine.triggerVictory();

    assert.ok(engine.isGameOver);
    assert.ok(engine.ui.victoryShown);
    assert.strictEqual(engine.ui.victoryPercent, 50);
    assert.strictEqual(engine.ui.victoryDeaths, 3);
    assert.strictEqual(engine.ui.victoryDegree, 10);
    assert.strictEqual(engine.ui.victoryTime, 120.5);
});
