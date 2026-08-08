import { test, assert } from 'vitest';
import { Engine } from '../engine/engine';

test('Teleport Animation - OUT and IN phases with scale/opacity/aura updates', () => {
    // Mock DOM elements required by Engine and UIManager
    const canvas = document.createElement('canvas');
    canvas.id = 'main-2d-canvas';
    document.body.appendChild(canvas);

    const mapContainer = document.createElement('div');
    mapContainer.id = 'map3d-container';
    document.body.appendChild(mapContainer);

    // Mock WebGL and loop
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

        // Mock 2D context
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

        // Force a start position
        engine.mazeGen.startPos = { x: 1.5, y: 1.5, z: 1 };
        engine.player.x = 1.5;
        engine.player.y = 1.5;
        engine.player.z = 1;
        engine.isIntroPlaying = false;
        engine.isPaused = false;
        engine.isStoryActive = false;

        // Initially no teleport animation is running
        assert.strictEqual(engine.teleportAnim, null);
        
        // Advance update to let the auraHeight grow (player is at start position which is a teleport)
        engine.update(0.5);
        assert.strictEqual(engine.auraHeight, 1.0); // Standing on START teleport initially

        // Trigger teleportTo to target (3, 3, 3)
        engine.teleportTo(3, 3, 3);

        // Verify teleport animation started
        assert.ok(engine.teleportAnim);
        assert.strictEqual(engine.teleportAnim.active, true);
        assert.strictEqual(engine.teleportAnim.stage, 'OUT');
        assert.strictEqual(engine.teleportAnim.startX, 1.5);
        assert.strictEqual(engine.teleportAnim.targetZ, 3);

        // Advance update by 0.2s (half of OUT phase duration, which is 0.4s)
        engine.update(0.2);
        assert.strictEqual(engine.teleportAnim.stage, 'OUT');
        assert.strictEqual(engine.teleportAnim.elapsed, 0.2);
        // Player coordinates shouldn't have changed yet
        assert.strictEqual(engine.player.x, 1.5);
        assert.strictEqual(engine.player.z, 1);

        // Advance by another 0.21s (total 0.41s, OUT phase completes, updates player pos, switches to IN stage)
        engine.update(0.21);
        assert.ok(engine.teleportAnim);
        assert.strictEqual(engine.teleportAnim.stage, 'IN');
        assert.strictEqual(engine.teleportAnim.elapsed, 0);
        // Player should be at the target coordinates now
        assert.strictEqual(engine.player.z, 3);

        // Advance by another 0.4s (total elapsed in IN stage reaches >= 0.4, finishes animation)
        engine.update(0.4);
        assert.strictEqual(engine.teleportAnim, null);

        // Aura height checks:
        // Stepping off the teleport onto a path cell (e.g. mock current cell to path block)
        engine.player.x = 2.5; // Suppose (2, 1, 3) is a path cell (value 1)
        engine.player.y = 1.5;
        engine.maze.set(2, 1, 3, 1); // 1 = PATH

        // Update should shrink auraHeight towards 0.0
        engine.update(0.1);
        assert.ok(engine.auraHeight < 1.0);
        
        engine.update(0.5);
        assert.strictEqual(engine.auraHeight, 0.0);

    } finally {
        Engine.prototype.initThree = originalInitThree;
        Engine.prototype.loop = originalLoop;

        document.body.removeChild(canvas);
        document.body.removeChild(mapContainer);
    }
});
