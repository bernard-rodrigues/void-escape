import { CONFIG } from './config.js';
import { Engine } from './engine.js';
import { loadSave, hasSave, clearSave } from './save.js';

let currentGame = null;

/**
 * Start a brand-new game with the given parameters.
 */
const startNewGame = (degree) => {
    if (currentGame) currentGame.destroy();
    clearSave(); // Clear old saves when a fresh game is started
    document.getElementById('start-menu').classList.add('hidden');
    document.getElementById('victory-screen').classList.add('hidden');
    document.getElementById('game-over-screen').classList.add('hidden');
    currentGame = new Engine(degree, CONFIG.BRANCHING_FACTOR);
};

/**
 * Continue a saved game. Constructs the engine with the saved parameters, then
 * patches in the full game state from the snapshot.
 */
const continueGame = () => {
    const snapshot = loadSave();
    if (!snapshot) return;

    if (currentGame) currentGame.destroy();
    document.getElementById('start-menu').classList.add('hidden');
    document.getElementById('victory-screen').classList.add('hidden');
    document.getElementById('game-over-screen').classList.add('hidden');

    // Build engine with saved config so maze dimensions match stored matrix, passing the snapshot
    // to trigger the state restoration and specialized continue transition animation.
    currentGame = new Engine(snapshot.degree, snapshot.branchingFactor, snapshot);
};

const returnToMenu = () => {
    if (currentGame) currentGame.destroy();
    document.getElementById('victory-screen').classList.add('hidden');
    document.getElementById('game-over-screen').classList.add('hidden');

    // Show / hide the Continue button depending on whether a save exists
    const continueBtn = document.getElementById('continue-btn-menu');
    if (continueBtn) {
        continueBtn.style.display = hasSave() ? '' : 'none';
    }

    document.getElementById('start-menu').classList.remove('hidden');
};

window.onload = () => {
    const degreeSlider = document.getElementById('maze-degree');
    const degreeVal = document.getElementById('degree-val');
    const hunterCount = document.getElementById('hunter-count');
    const teleportCount = document.getElementById('teleport-count');
    const keysCount = document.getElementById('keys-count');
    const pathfinderCount = document.getElementById('pathfinder-count');

    const safeModeCheckbox = document.getElementById('safe-mode');

    if (degreeSlider && CONFIG.MAZE_DEGREE !== undefined) {
        degreeSlider.value = CONFIG.MAZE_DEGREE;
    }

    const updateHunterDisplay = (degree) => {
        const isSafe = safeModeCheckbox && safeModeCheckbox.checked;
        const count = isSafe ? 0 : CONFIG.getHunterCount(degree);
        hunterCount.innerText = count;
        hunterCount.style.color = count > 0 ? '#f00' : '#88ccff';
    };

    if (safeModeCheckbox) {
        safeModeCheckbox.onchange = () => {
            updateHunterDisplay(parseInt(degreeSlider.value));
        };
    }

    const updateTeleportDisplay = (degree) => {
        const count = CONFIG.getTeleportCount(degree);
        if (teleportCount) {
            teleportCount.innerText = count;
        }
    };

    const updateKeysDisplay = (degree) => {
        const count = CONFIG.getHunterCount(degree) * 2;
        if (keysCount) {
            keysCount.innerText = count;
        }
    };

    const updatePathfinderDisplay = (degree) => {
        const count = CONFIG.getPathfinderCount(degree);
        if (pathfinderCount) {
            pathfinderCount.innerText = count;
        }
    };

    degreeSlider.oninput = () => { 
        degreeVal.innerText = degreeSlider.value; 
        updateHunterDisplay(parseInt(degreeSlider.value)); 
        updateTeleportDisplay(parseInt(degreeSlider.value)); 
        updateKeysDisplay(parseInt(degreeSlider.value));
        updatePathfinderDisplay(parseInt(degreeSlider.value));
    };
    
    // Set initial text display values from sliders on load
    degreeVal.innerText = degreeSlider.value;
    
    updateHunterDisplay(parseInt(degreeSlider.value));
    updateTeleportDisplay(parseInt(degreeSlider.value));
    updateKeysDisplay(parseInt(degreeSlider.value));
    updatePathfinderDisplay(parseInt(degreeSlider.value));

    // Show / hide menu Continue button on first load
    const continueBtnMenu = document.getElementById('continue-btn-menu');
    if (continueBtnMenu) {
        continueBtnMenu.style.display = hasSave() ? '' : 'none';
        continueBtnMenu.onclick = continueGame;
    }

    document.getElementById('start-btn').onclick = () => {
        startNewGame(parseInt(degreeSlider.value));
    };

    // End-game button logic
    ['restart-btn-victory', 'retry-btn-death'].forEach(id => {
        document.getElementById(id).onclick = () => {
            startNewGame(currentGame.degree);
        };
    });

    ['menu-btn-victory', 'menu-btn-death', 'menu-btn-pause'].forEach(id => {
        document.getElementById(id).onclick = returnToMenu;
    });

    // Continue from death screen (go back to last teleport save point)
    const continueBtnDeath = document.getElementById('continue-btn-death');
    if (continueBtnDeath) {
        continueBtnDeath.onclick = continueGame;
    }

    // Resume from pause screen
    const resumeBtn = document.getElementById('resume-btn');
    if (resumeBtn) {
        resumeBtn.onclick = () => {
            if (currentGame) currentGame.togglePause();
        };
    }

    // Mobile pause button
    const mobilePauseBtn = document.getElementById('mobile-pause-btn');
    if (mobilePauseBtn) {
        mobilePauseBtn.onclick = (e) => {
            e.stopPropagation();
            if (currentGame) currentGame.togglePause();
        };
    }
};

// Prevent browser page zoom via Ctrl + Wheel shortcut
window.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

// Prevent pinch zoom gestures on mobile and trackpads,
// except when directly interacting with the 3D holographic map canvas.
window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 1) {
        if (!e.target.closest('#map3d-container canvas')) {
            e.preventDefault();
        }
    }
}, { passive: false });



// Unified Menu Keyboard & Gamepad Navigation System
let menuFocusIndex = 0;
let lastActiveScreen = null;
let hasMenuNavigated = false;

function getActiveMenuElements() {
    const startMenu = document.getElementById('start-menu');
    const pauseScreen = document.getElementById('pause-screen');
    const victoryScreen = document.getElementById('victory-screen');
    const gameOverScreen = document.getElementById('game-over-screen');

    if (startMenu && !startMenu.classList.contains('hidden') && startMenu.style.display !== 'none') {
        const list = [];
        const degreeInput = document.getElementById('maze-degree');
        const safeModeCheckbox = document.getElementById('safe-mode');
        const startBtn = document.getElementById('start-btn');
        const continueBtn = document.getElementById('continue-btn-menu');

        if (degreeInput) list.push(degreeInput);
        if (safeModeCheckbox) list.push(safeModeCheckbox);
        if (startBtn) list.push(startBtn);
        if (continueBtn && continueBtn.style.display !== 'none') list.push(continueBtn);

        return list;
    }

    if (pauseScreen && !pauseScreen.classList.contains('hidden')) {
        const list = [];
        const resumeBtn = document.getElementById('resume-btn');
        const menuBtn = document.getElementById('menu-btn-pause');
        if (resumeBtn) list.push(resumeBtn);
        if (menuBtn) list.push(menuBtn);
        return list;
    }

    if (victoryScreen && !victoryScreen.classList.contains('hidden')) {
        const list = [];
        const restartBtn = document.getElementById('restart-btn-victory');
        const menuBtn = document.getElementById('menu-btn-victory');
        if (restartBtn) list.push(restartBtn);
        if (menuBtn) list.push(menuBtn);
        return list;
    }

    if (gameOverScreen && !gameOverScreen.classList.contains('hidden')) {
        const list = [];
        const continueBtn = document.getElementById('continue-btn-death');
        const retryBtn = document.getElementById('retry-btn-death');
        const menuBtn = document.getElementById('menu-btn-death');
        if (continueBtn && continueBtn.style.display !== 'none') list.push(continueBtn);
        if (retryBtn) list.push(retryBtn);
        if (menuBtn) list.push(menuBtn);
        return list;
    }

    return [];
}

function updateMenuFocus() {
    const elements = getActiveMenuElements();
    
    // Reset index if active screen changed
    let activeScreen = null;
    if (elements.length > 0) {
        activeScreen = elements[0].closest('section');
    }
    if (activeScreen !== lastActiveScreen) {
        lastActiveScreen = activeScreen;
        menuFocusIndex = 0;
        hasMenuNavigated = false;
    }

    const allIds = [
        'maze-degree', 'safe-mode', 'start-btn', 'continue-btn-menu',
        'resume-btn', 'menu-btn-pause',
        'restart-btn-victory', 'menu-btn-victory',
        'continue-btn-death', 'retry-btn-death', 'menu-btn-death'
    ];
    allIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('menu-focused');
    });

    if (elements.length === 0) return;

    if (menuFocusIndex < 0) menuFocusIndex = elements.length - 1;
    if (menuFocusIndex >= elements.length) menuFocusIndex = 0;

    const activeEl = elements[menuFocusIndex];
    if (activeEl && hasMenuNavigated) {
        activeEl.classList.add('menu-focused');
        activeEl.focus();
    }
}

// Keyboard events
window.addEventListener('keydown', (e) => {
    const elements = getActiveMenuElements();
    if (elements.length === 0) return;

    const key = e.key.toLowerCase();
    const isDirectional = ['arrowup', 'w', 'arrowdown', 's', 'arrowleft', 'a', 'arrowright', 'd'].includes(key);

    if (isDirectional && !hasMenuNavigated) {
        hasMenuNavigated = true;
        updateMenuFocus();
        e.preventDefault();
        return;
    }

    if (!hasMenuNavigated) return;

    const activeEl = elements[menuFocusIndex];
    const isStartMenu = activeEl && activeEl.closest('#start-menu');

    if (isStartMenu) {
        if (key === 'arrowup' || key === 'w') {
            if (activeEl.id === 'start-btn' || activeEl.id === 'continue-btn-menu') {
                const target = elements.find(el => el.id === 'safe-mode');
                if (target) menuFocusIndex = elements.indexOf(target);
            } else if (activeEl.id === 'safe-mode') {
                const target = elements.find(el => el.id === 'maze-degree');
                if (target) menuFocusIndex = elements.indexOf(target);
            } else if (activeEl.id === 'maze-degree') {
                const target = elements.find(el => el.id === 'start-btn');
                if (target) menuFocusIndex = elements.indexOf(target);
            }
            updateMenuFocus();
            e.preventDefault();
        } else if (key === 'arrowdown' || key === 's') {
            if (activeEl.id === 'maze-degree') {
                const target = elements.find(el => el.id === 'safe-mode');
                if (target) menuFocusIndex = elements.indexOf(target);
            } else if (activeEl.id === 'safe-mode') {
                const target = elements.find(el => el.id === 'start-btn');
                if (target) menuFocusIndex = elements.indexOf(target);
            } else if (activeEl.id === 'start-btn' || activeEl.id === 'continue-btn-menu') {
                const target = elements.find(el => el.id === 'maze-degree');
                if (target) menuFocusIndex = elements.indexOf(target);
            }
            updateMenuFocus();
            e.preventDefault();
        } else if (key === 'arrowleft' || key === 'a') {
            if (activeEl.id === 'continue-btn-menu') {
                const target = elements.find(el => el.id === 'start-btn');
                if (target) menuFocusIndex = elements.indexOf(target);
                updateMenuFocus();
                e.preventDefault();
            } else if (activeEl.id === 'start-btn') {
                const target = elements.find(el => el.id === 'continue-btn-menu');
                if (target) {
                    menuFocusIndex = elements.indexOf(target);
                    updateMenuFocus();
                }
                e.preventDefault();
            } else if (activeEl.id === 'maze-degree') {
                let val = parseInt(activeEl.value);
                activeEl.value = Math.max(3, val - 1);
                activeEl.dispatchEvent(new Event('input'));
                activeEl.dispatchEvent(new Event('change'));
                e.preventDefault();
            } else if (activeEl.id === 'safe-mode') {
                activeEl.checked = !activeEl.checked;
                activeEl.dispatchEvent(new Event('change'));
                e.preventDefault();
            }
        } else if (key === 'arrowright' || key === 'd') {
            if (activeEl.id === 'start-btn') {
                const target = elements.find(el => el.id === 'continue-btn-menu');
                if (target) {
                    menuFocusIndex = elements.indexOf(target);
                    updateMenuFocus();
                }
                e.preventDefault();
            } else if (activeEl.id === 'continue-btn-menu') {
                const target = elements.find(el => el.id === 'start-btn');
                if (target) {
                    menuFocusIndex = elements.indexOf(target);
                    updateMenuFocus();
                }
                e.preventDefault();
            } else if (activeEl.id === 'maze-degree') {
                let val = parseInt(activeEl.value);
                activeEl.value = Math.min(16, val + 1);
                activeEl.dispatchEvent(new Event('input'));
                activeEl.dispatchEvent(new Event('change'));
                e.preventDefault();
            } else if (activeEl.id === 'safe-mode') {
                activeEl.checked = !activeEl.checked;
                activeEl.dispatchEvent(new Event('change'));
                e.preventDefault();
            }
        }
    } else {
        // In popup menus, buttons are horizontal side-by-side, so horizontal/vertical keys cycle left/right
        if (key === 'arrowup' || key === 'w' || key === 'arrowleft' || key === 'a') {
            menuFocusIndex--;
            updateMenuFocus();
            e.preventDefault();
        } else if (key === 'arrowdown' || key === 's' || key === 'arrowright' || key === 'd') {
            menuFocusIndex++;
            updateMenuFocus();
            e.preventDefault();
        }
    }

    if (key === 'enter' || key === ' ') {
        if (activeEl) {
            if (activeEl.id === 'safe-mode' && key === ' ') {
                // let browser handle space naturally
            } else {
                activeEl.click();
                e.preventDefault();
            }
        }
    }
});

// Gamepad polling loop for menus
let prevGamepadMenuButtons = [];
let prevGamepadMenuAxes = { x: 0, y: 0 };

function pollGamepadMenu() {
    const elements = getActiveMenuElements();
    if (elements.length > 0) {
        const activeScreen = elements[0].closest('section');
        if (activeScreen !== lastActiveScreen) {
            lastActiveScreen = activeScreen;
            menuFocusIndex = 0;
            hasMenuNavigated = false;
            updateMenuFocus();
        }
    } else {
        lastActiveScreen = null;
    }

    const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
    const gp = gamepads[0] || gamepads[1] || gamepads[2] || gamepads[3];
    if (!gp) {
        requestAnimationFrame(pollGamepadMenu);
        return;
    }

    const deadzone = 0.4;
    const axisX = gp.axes[0];
    const axisY = gp.axes[1];
    let up = axisY < -deadzone;
    let down = axisY > deadzone;
    let left = axisX < -deadzone;
    let right = axisX > deadzone;

    if (gp.buttons[12] && gp.buttons[12].pressed) up = true;
    if (gp.buttons[13] && gp.buttons[13].pressed) down = true;
    if (gp.buttons[14] && gp.buttons[14].pressed) left = true;
    if (gp.buttons[15] && gp.buttons[15].pressed) right = true;

    const justUp = up && prevGamepadMenuAxes.y >= -deadzone;
    const justDown = down && prevGamepadMenuAxes.y <= deadzone;
    const justLeft = left && prevGamepadMenuAxes.x >= -deadzone;
    const justRight = right && prevGamepadMenuAxes.x <= deadzone;

    prevGamepadMenuAxes = {
        x: left ? -1 : (right ? 1 : 0),
        y: up ? -1 : (down ? 1 : 0)
    };

    if (elements.length > 0) {
        const isDirectional = justUp || justDown || justLeft || justRight;

        if (isDirectional && !hasMenuNavigated) {
            hasMenuNavigated = true;
            updateMenuFocus();
        } else if (hasMenuNavigated) {
            const activeEl = elements[menuFocusIndex];
            const isStartMenu = activeEl && activeEl.closest('#start-menu');

            if (isStartMenu) {
                if (justUp) {
                    if (activeEl.id === 'start-btn' || activeEl.id === 'continue-btn-menu') {
                        const target = elements.find(el => el.id === 'safe-mode');
                        if (target) menuFocusIndex = elements.indexOf(target);
                    } else if (activeEl.id === 'safe-mode') {
                        const target = elements.find(el => el.id === 'maze-degree');
                        if (target) menuFocusIndex = elements.indexOf(target);
                    } else if (activeEl.id === 'maze-degree') {
                        const target = elements.find(el => el.id === 'start-btn');
                        if (target) menuFocusIndex = elements.indexOf(target);
                    }
                    updateMenuFocus();
                } else if (justDown) {
                    if (activeEl.id === 'maze-degree') {
                        const target = elements.find(el => el.id === 'safe-mode');
                        if (target) menuFocusIndex = elements.indexOf(target);
                    } else if (activeEl.id === 'safe-mode') {
                        const target = elements.find(el => el.id === 'start-btn');
                        if (target) menuFocusIndex = elements.indexOf(target);
                    } else if (activeEl.id === 'start-btn' || activeEl.id === 'continue-btn-menu') {
                        const target = elements.find(el => el.id === 'maze-degree');
                        if (target) menuFocusIndex = elements.indexOf(target);
                    }
                    updateMenuFocus();
                } else if (justLeft) {
                    if (activeEl.id === 'continue-btn-menu') {
                        const target = elements.find(el => el.id === 'start-btn');
                        if (target) menuFocusIndex = elements.indexOf(target);
                        updateMenuFocus();
                    } else if (activeEl.id === 'start-btn') {
                        const target = elements.find(el => el.id === 'continue-btn-menu');
                        if (target) {
                            menuFocusIndex = elements.indexOf(target);
                            updateMenuFocus();
                        }
                    } else if (activeEl.id === 'maze-degree') {
                        let val = parseInt(activeEl.value);
                        activeEl.value = Math.max(3, val - 1);
                        activeEl.dispatchEvent(new Event('input'));
                        activeEl.dispatchEvent(new Event('change'));
                    } else if (activeEl.id === 'safe-mode') {
                        activeEl.checked = !activeEl.checked;
                        activeEl.dispatchEvent(new Event('change'));
                    }
                } else if (justRight) {
                    if (activeEl.id === 'start-btn') {
                        const target = elements.find(el => el.id === 'continue-btn-menu');
                        if (target) {
                            menuFocusIndex = elements.indexOf(target);
                            updateMenuFocus();
                        }
                    } else if (activeEl.id === 'continue-btn-menu') {
                        const target = elements.find(el => el.id === 'start-btn');
                        if (target) {
                            menuFocusIndex = elements.indexOf(target);
                            updateMenuFocus();
                        }
                    } else if (activeEl.id === 'maze-degree') {
                        let val = parseInt(activeEl.value);
                        activeEl.value = Math.min(16, val + 1);
                        activeEl.dispatchEvent(new Event('input'));
                        activeEl.dispatchEvent(new Event('change'));
                    } else if (activeEl.id === 'safe-mode') {
                        activeEl.checked = !activeEl.checked;
                        activeEl.dispatchEvent(new Event('change'));
                    }
                }
            } else {
                // Popup screens
                if (justUp || justLeft) {
                    menuFocusIndex--;
                    updateMenuFocus();
                } else if (justDown || justRight) {
                    menuFocusIndex++;
                    updateMenuFocus();
                }
            }

            const isPressed = (btnIdx) => gp.buttons[btnIdx] && gp.buttons[btnIdx].pressed;
            const justPressed = (btnIdx) => isPressed(btnIdx) && !prevGamepadMenuButtons[btnIdx];

            if (justPressed(0) || justPressed(3) || justPressed(9)) {
                if (activeEl) {
                    activeEl.click();
                }
            }
        }
    }

    prevGamepadMenuButtons = gp.buttons.map(b => b.pressed);
    requestAnimationFrame(pollGamepadMenu);
}

// Start Gamepad Polling
requestAnimationFrame(pollGamepadMenu);
