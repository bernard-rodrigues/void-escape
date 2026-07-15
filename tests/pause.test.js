import { test } from 'node:test';
import assert from 'node:assert';

// Mock UIManager and engine structures for Pause test
class MockUIManager {
    constructor() {
        this.pauseShown = false;
        this.uiMobilePauseBtn = {
            classList: {
                add(cls) { this[cls] = true; },
                remove(cls) { this[cls] = false; }
            }
        };
        this.uiMobileControls = {
            classList: {
                contains(cls) { return false; }
            }
        };
    }
    showPause() { this.pauseShown = true; }
    hidePause() { this.pauseShown = false; }
}

// Function copies to test keyboard/gamepad pause toggling in isolation
function handleKeyDownExtra(engine, e) {
    const key = e.key.toLowerCase();
    if (key === 'escape') {
        engine.togglePause();
        return;
    }
    if (engine.isPaused) return;
    if (key === 'm') {
        engine.mPressed = true;
    }
}

function updateGamepad(engine, dt) {
    const gamepads = [{
        axes: [0, 0, 0, 0],
        buttons: Array.from({ length: 16 }, (_, i) => ({
            pressed: engine.mockPressedButtons.includes(i)
        }))
    }];
    const gp = gamepads[0];

    if (!engine.prevGamepadButtons) {
        engine.prevGamepadButtons = gp.buttons.map(b => b.pressed);
        return;
    }

    const wasPressed = (btnIdx) => engine.prevGamepadButtons[btnIdx];
    const isPressed = (btnIdx) => gp.buttons[btnIdx] && gp.buttons[btnIdx].pressed;
    const justPressed = (btnIdx) => isPressed(btnIdx) && !wasPressed(btnIdx);

    if (justPressed(9)) {
        engine.togglePause();
        engine.prevGamepadButtons = gp.buttons.map(b => b.pressed);
        return;
    }

    if (engine.isPaused) {
        engine.prevGamepadButtons = gp.buttons.map(b => b.pressed);
        return;
    }

    if (justPressed(0)) {
        engine.aPressed = true;
    }

    engine.prevGamepadButtons = gp.buttons.map(b => b.pressed);
}

class MockEngine {
    constructor() {
        this.isGameOver = false;
        this.isDestroyed = false;
        this.isIntroPlaying = false;
        this.isPaused = false;
        this.ui = new MockUIManager();
        this.mPressed = false;
        this.aPressed = false;
        this.mockPressedButtons = [];
        this.prevGamepadButtons = null;
    }

    togglePause() {
        if (this.isGameOver || this.isDestroyed || this.isIntroPlaying) return;

        this.isPaused = !this.isPaused;
        if (this.isPaused) {
            this.ui.showPause();
            if (this.ui.uiMobilePauseBtn) {
                this.ui.uiMobilePauseBtn.classList.add('hidden');
            }
        } else {
            this.ui.hidePause();
            if (this.ui.uiMobilePauseBtn && !this.ui.uiMobileControls.classList.contains('hidden')) {
                this.ui.uiMobilePauseBtn.classList.remove('hidden');
            }
        }
    }
}

test('Pause Screen - Initialization and mobile/toggle states', () => {
    const engine = new MockEngine();
    assert.strictEqual(engine.isPaused, false);
    assert.strictEqual(engine.ui.pauseShown, false);

    // Toggle pause on
    engine.togglePause();
    assert.strictEqual(engine.isPaused, true);
    assert.strictEqual(engine.ui.pauseShown, true);

    // Toggle pause off
    engine.togglePause();
    assert.strictEqual(engine.isPaused, false);
    assert.strictEqual(engine.ui.pauseShown, false);
});

test('Pause Screen - Keyboard ESC key toggles pause and blocks other keys', () => {
    const engine = new MockEngine();

    // ESC key press toggles pause on
    handleKeyDownExtra(engine, { key: 'escape' });
    assert.strictEqual(engine.isPaused, true);
    assert.strictEqual(engine.ui.pauseShown, true);

    // Attempting to press 'm' when paused is ignored
    handleKeyDownExtra(engine, { key: 'm' });
    assert.strictEqual(engine.mPressed, false);

    // ESC key press toggles pause off
    handleKeyDownExtra(engine, { key: 'escape' });
    assert.strictEqual(engine.isPaused, false);
    assert.strictEqual(engine.ui.pauseShown, false);

    // 'm' key press now works when unpaused
    handleKeyDownExtra(engine, { key: 'm' });
    assert.strictEqual(engine.mPressed, true);
});

test('Pause Screen - Gamepad Start button (button 9) toggles pause and blocks other inputs', () => {
    const engine = new MockEngine();

    // Frame 1: Controller connected, no buttons pressed
    updateGamepad(engine, 0.016);

    // Frame 2: Press Start (button 9) to pause
    engine.mockPressedButtons = [9];
    updateGamepad(engine, 0.016);
    assert.strictEqual(engine.isPaused, true);
    assert.strictEqual(engine.ui.pauseShown, true);

    // Frame 3: Keep Start pressed, also press A (button 0)
    engine.mockPressedButtons = [9, 0];
    updateGamepad(engine, 0.016);
    assert.strictEqual(engine.aPressed, false); // A press ignored while paused
    assert.strictEqual(engine.isPaused, true); // Still paused

    // Frame 4: Release Start, keep A pressed (still ignored because we are still paused)
    engine.mockPressedButtons = [0];
    updateGamepad(engine, 0.016);
    assert.strictEqual(engine.aPressed, false);

    // Frame 5: Release all buttons
    engine.mockPressedButtons = [];
    updateGamepad(engine, 0.016);

    // Frame 6: Press Start again to unpause
    engine.mockPressedButtons = [9];
    updateGamepad(engine, 0.016);
    assert.strictEqual(engine.isPaused, false);
    assert.strictEqual(engine.ui.pauseShown, false);

    // Frame 7: Release Start, press A (now processed when unpaused)
    engine.mockPressedButtons = [0];
    updateGamepad(engine, 0.016);
    assert.strictEqual(engine.aPressed, true);
});
