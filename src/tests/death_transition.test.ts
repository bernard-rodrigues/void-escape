import { test, describe, assert } from 'vitest';
import { Engine } from '../engine/engine';
import { CONFIG } from '../engine/config';

test('Death Transition - Collision triggers non-blocking death loop', () => {
    // Mock DOM elements required by Engine and UIManager
    const canvas = document.createElement('canvas');
    canvas.id = 'main-2d-canvas';
    document.body.appendChild(canvas);

    const mapContainer = document.createElement('div');
    mapContainer.id = 'map3d-container';
    document.body.appendChild(mapContainer);

    // Mock WebGL and loop to prevent context errors in headless environment
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
        // Instantiate Engine
        const engine = new Engine(4, 0.2);

        // Mock 2D context to avoid context property errors in happy-dom
        const mockCtx = {
            canvas: canvas,
            clearRect: () => {},
            fillRect: () => {},
            save: () => {},
            restore: () => {},
            beginPath: () => {},
            arc: () => {},
            clip: () => {},
            drawImage: () => {},
            strokeRect: () => {},
            fillText: () => {},
            createLinearGradient: () => ({ addColorStop: () => {} }),
            createRadialGradient: () => ({ addColorStop: () => {} }),
            stroke: () => {},
            fill: () => {},
            moveTo: () => {},
            lineTo: () => {},
            closePath: () => {},
            scale: () => {},
            translate: () => {},
            rotate: () => {},
            ellipse: () => {},
            measureText: (text: string) => ({ width: text.length * 10 })
        } as any;

        engine.ctx = mockCtx;
        engine.staticMapCacheCtx = mockCtx;
        
        // Simulate player at some coordinate (not start point)
        engine.player.x = 2.5;
        engine.player.y = 1.5;
        engine.player.z = 1;
        
        // Place a hunter at player's cell
        engine.hunters = [{
            id: 0,
            x: 2,
            y: 1,
            z: 1,
            visualX: 2,
            visualY: 1,
            visualZ: 1,
            state: 'WANDERING'
        } as any];
        
        // Verify initial state
        assert.strictEqual(engine.isGameOver, false);
        assert.strictEqual(engine.deathAnimation, null);
        assert.strictEqual(engine.suppressWakeHuntersBanner, false);
        
        // Run collision check
        engine.checkHunterCollision();
        
        // Verify death transition started
        assert.strictEqual(engine.isGameOver, true, 'isGameOver must be true to lock gameplay');
        assert.ok(engine.deathAnimation, 'deathAnimation object must be created');
        assert.strictEqual(engine.deathAnimation.active, true);
        assert.strictEqual(engine.deathAnimation.screenFilled, false);
        assert.strictEqual(engine.deathAnimation.reversing, false);
        
        // Phase 0: Freeze delay of 1.5 seconds.
        // Let's advance by 1.0s and verify delay is active and corruption hasn't started.
        engine.draw2DMap(1.0);
        assert.strictEqual(engine.deathAnimation.delayElapsed, 1.0);
        assert.strictEqual(engine.deathAnimation.elapsed, 0, 'Corruption progress should remain zero during delay');
        
        // Complete the delay phase (another 0.6s)
        engine.draw2DMap(0.6);
        assert.ok(engine.deathAnimation.delayElapsed >= 1.5);
        
        const initialTotalKeys = engine.totalKeys;
        
        // Phase 1: Corruption growing (advance by 1.0s)
        engine.draw2DMap(1.0);
        assert.strictEqual(engine.deathAnimation.screenFilled, false);
        assert.strictEqual(engine.deathAnimation.reversing, false);
        assert.ok(engine.deathAnimation.elapsed > 0);
        
        // Trigger Phase 2 blackout transition (another 0.9s)
        engine.draw2DMap(0.9);
        
        // Verify Phase 2 transition took place
        assert.strictEqual(engine.deathAnimation.screenFilled, true, 'screenFilled must be true');
        assert.strictEqual(engine.deathAnimation.reversing, true, 'reversing must be true');
        assert.strictEqual(engine.suppressWakeHuntersBanner, true, 'suppressWakeHuntersBanner must be true to avoid alert spam');
        
        // Verify key was dropped at player's death position (2, 1, 1)
        const valAtDeathCell = engine.maze.get(2, 1, 1);
        assert.strictEqual(valAtDeathCell, engine.mazeGen.TYPES.KEY, 'Key must be dropped at death coordinates');
        assert.strictEqual(engine.totalKeys, initialTotalKeys + 1, 'totalKeys must increment by 1');
        
        // Verify player was repositioned back to start position (since no savepoint visited)
        const expectedStartX = engine.mazeGen.startPos.x;
        const expectedStartY = engine.mazeGen.startPos.y;
        const expectedStartZ = engine.mazeGen.startPos.z;
        assert.strictEqual(engine.player.x, expectedStartX, 'Player X must reset');
        assert.strictEqual(engine.player.y, expectedStartY, 'Player Y must reset');
        assert.strictEqual(engine.player.z, expectedStartZ, 'Player Z must reset');
        
        // Simulate Phase 3 (reversing, shrinking corruption)
        engine.draw2DMap(1.0); // 1.0s passes
        assert.ok(engine.deathAnimation, 'Animation still active');
        
        engine.draw2DMap(0.9); // another 0.9s passes (total elapsed back to <= 0)
        
        // Verify game resumed
        assert.strictEqual(engine.deathAnimation, null, 'deathAnimation must be cleaned up');
        assert.strictEqual(engine.isGameOver, false, 'isGameOver must be restored to false');

    } finally {
        // Restore mocks
        Engine.prototype.initThree = originalInitThree;
        Engine.prototype.loop = originalLoop;

        // Cleanup mock elements
        document.body.removeChild(canvas);
        document.body.removeChild(mapContainer);
    }
});
