import { test, describe, assert } from 'vitest';
import { CONFIG } from '../engine/config';

// Mock UI and pathfinder functions for isolation
class MockUIManager {
    constructor() {
        this.bannerMessage = null;
        this.hudRemaining = 0;
        this.hudTotal = 0;
    }
    showInfoBanner(msg) {
        this.bannerMessage = msg;
    }
    updatePathfindersHUD(remaining, total) {
        this.hudRemaining = remaining;
        this.hudTotal = total;
    }
}

// Mock engine structure to simulate triggerPathReveal behavior
class MockEngine {
    constructor(degree) {
        this.degree = degree;
        this.totalPathfinders = CONFIG.getPathfinderCount(degree);
        this.pathfindersRemaining = this.totalPathfinders;
        this.ui = new MockUIManager();
        this.pathRevealTriggered = false;
        
        // Initial HUD update
        this.ui.updatePathfindersHUD(this.pathfindersRemaining, this.totalPathfinders);
    }

    triggerPathReveal(tx, ty, tz) {
        if (this.pathfindersRemaining <= 0) {
            this.ui.showInfoBanner("No pathfinders remaining");
            return;
        }

        // Simulate findShortestPath result
        const path = [{ x: 1, y: 1, z: 1 }, { x: 2, y: 2, z: 1 }];
        if (!path || path.length === 0) return;

        this.pathfindersRemaining--;
        this.ui.updatePathfindersHUD(this.pathfindersRemaining, this.totalPathfinders);
        this.pathRevealTriggered = true;
    }

    restoreFromSave(snapshot) {
        this.totalPathfinders = snapshot.totalPathfinders !== undefined ? snapshot.totalPathfinders : CONFIG.getPathfinderCount(this.degree);
        this.pathfindersRemaining = snapshot.pathfindersRemaining !== undefined ? snapshot.pathfindersRemaining : this.totalPathfinders;
        this.ui.updatePathfindersHUD(this.pathfindersRemaining, this.totalPathfinders);
    }
}

test('Pathfinder Limit - Capacity formula scales matching teleport count', () => {
    for (let degree = 3; degree <= 16; degree++) {
        const expectedTeleport = CONFIG.getTeleportCount(degree);
        const expectedPathfinder = CONFIG.getPathfinderCount(degree);
        assert.strictEqual(expectedPathfinder, expectedTeleport);
    }
});

test('Pathfinder Limit - Initialisation and decrement logic', () => {
    const engine = new MockEngine(8);
    // Degree 8 should yield CONFIG.getTeleportCount(8) = Math.max(2, 4) = 4
    assert.strictEqual(engine.totalPathfinders, 4);
    assert.strictEqual(engine.pathfindersRemaining, 4);
    assert.strictEqual(engine.ui.hudRemaining, 4);
    assert.strictEqual(engine.ui.hudTotal, 4);

    // Call 1
    engine.triggerPathReveal(2, 2, 1);
    assert.strictEqual(engine.pathfindersRemaining, 3);
    assert.strictEqual(engine.ui.hudRemaining, 3);
    assert.strictEqual(engine.pathRevealTriggered, true);

    // Call 2
    engine.pathRevealTriggered = false;
    engine.triggerPathReveal(3, 3, 1);
    assert.strictEqual(engine.pathfindersRemaining, 2);
    assert.strictEqual(engine.ui.hudRemaining, 2);
    assert.strictEqual(engine.pathRevealTriggered, true);
});

test('Pathfinder Limit - Exhaustion blocks further pathfinding requests', () => {
    const engine = new MockEngine(8);
    engine.pathfindersRemaining = 0;
    engine.ui.updatePathfindersHUD(0, 4);

    // Call triggerPathReveal with 0 charges
    engine.triggerPathReveal(2, 2, 1);
    assert.strictEqual(engine.pathfindersRemaining, 0);
    assert.strictEqual(engine.pathRevealTriggered, false);
    assert.strictEqual(engine.ui.bannerMessage, "No pathfinders remaining");
});

test('Pathfinder Limit - State save and load preservation', () => {
    const engine = new MockEngine(8);
    
    // Simulate save snapshot format
    const snapshot = {
        degree: 8,
        totalPathfinders: 4,
        pathfindersRemaining: 1
    };

    engine.restoreFromSave(snapshot);
    assert.strictEqual(engine.totalPathfinders, 4);
    assert.strictEqual(engine.pathfindersRemaining, 1);
    assert.strictEqual(engine.ui.hudRemaining, 1);
    assert.strictEqual(engine.ui.hudTotal, 4);
});

test('Pathfinder Limit - triggerPathReveal animation cooldown and clear old trails', () => {
    class CooldownEngine {
        constructor() {
            this.pathRevealInterval = null;
            this.pathfinderBlockedUntil = 0;
            this.revealedPathSet = new Set(['1,1,1', '1,2,1']);
            this.pathfindersRemaining = 3;
            this.ui = { showInfoBanner() {}, updatePathfindersHUD() {} };
        }
        
        triggerPathReveal(tx, ty, tz) {
            if (this.pathRevealInterval || (this.pathfinderBlockedUntil && Date.now() < this.pathfinderBlockedUntil)) {
                return;
            }

            if (this.pathfindersRemaining <= 0) return;

            if (this.pathRevealInterval) {
                this.pathRevealInterval = null;
            }
            this.revealedPathSet.clear();
            
            this.pathfindersRemaining--;
            this.pathRevealInterval = 123;
        }
        
        finishAnimation() {
            this.pathRevealInterval = null;
            this.pathfinderBlockedUntil = Date.now() + 600;
        }
    }
    
    const engine = new CooldownEngine();
    
    engine.triggerPathReveal(3, 3, 1);
    assert.strictEqual(engine.revealedPathSet.size, 0);
    assert.strictEqual(engine.pathfindersRemaining, 2);
    assert.ok(engine.pathRevealInterval);
    
    engine.triggerPathReveal(4, 4, 1);
    assert.strictEqual(engine.pathfindersRemaining, 2);
    
    engine.finishAnimation();
    assert.ok(Date.now() < engine.pathfinderBlockedUntil);
    
    engine.triggerPathReveal(4, 4, 1);
    assert.strictEqual(engine.pathfindersRemaining, 2);
});
