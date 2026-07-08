import { CONFIG } from './config.js';
import { Engine } from './engine.js';
import { loadSave, hasSave, clearSave } from './save.js';

let currentGame = null;

/**
 * Start a brand-new game with the given parameters.
 */
const startNewGame = (degree, branching, movementMode) => {
    if (currentGame) currentGame.destroy();
    clearSave(); // Clear old saves when a fresh game is started
    document.getElementById('start-menu').classList.add('hidden');
    document.getElementById('victory-screen').classList.add('hidden');
    document.getElementById('game-over-screen').classList.add('hidden');
    currentGame = new Engine(degree, branching, movementMode);
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
    currentGame = new Engine(snapshot.degree, snapshot.branchingFactor, snapshot.movementMode, snapshot);
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
    const branchSlider = document.getElementById('branching-factor');
    const degreeVal = document.getElementById('degree-val');
    const branchVal = document.getElementById('branch-val');
    const hunterCount = document.getElementById('hunter-count');
    const teleportCount = document.getElementById('teleport-count');

    const updateHunterDisplay = (degree) => {
        const count = CONFIG.getHunterCount(degree);
        hunterCount.innerText = count;
        hunterCount.style.color = count > 0 ? '#f00' : '#a0f';
    };

    const updateTeleportDisplay = (degree) => {
        const count = CONFIG.getTeleportCount(degree);
        if (teleportCount) {
            teleportCount.innerText = count;
        }
    };

    degreeSlider.oninput = () => { 
        degreeVal.innerText = degreeSlider.value; 
        updateHunterDisplay(parseInt(degreeSlider.value)); 
        updateTeleportDisplay(parseInt(degreeSlider.value)); 
    };
    branchSlider.oninput = () => branchVal.innerText = parseFloat(branchSlider.value).toFixed(2);
    
    // Set initial text display values from sliders on load
    degreeVal.innerText = degreeSlider.value;
    branchVal.innerText = parseFloat(branchSlider.value).toFixed(2);
    
    updateHunterDisplay(parseInt(degreeSlider.value));
    updateTeleportDisplay(parseInt(degreeSlider.value));

    // Show / hide menu Continue button on first load
    const continueBtnMenu = document.getElementById('continue-btn-menu');
    if (continueBtnMenu) {
        continueBtnMenu.style.display = hasSave() ? '' : 'none';
        continueBtnMenu.onclick = continueGame;
    }

    document.getElementById('start-btn').onclick = () => {
        startNewGame(parseInt(degreeSlider.value), parseFloat(branchSlider.value), document.getElementById('movement-mode').value);
    };

    // End-game button logic
    ['restart-btn-victory', 'retry-btn-death'].forEach(id => {
        document.getElementById(id).onclick = () => {
            startNewGame(currentGame.degree, currentGame.branchingFactor, currentGame.movementMode);
        };
    });

    ['menu-btn-victory', 'menu-btn-death'].forEach(id => {
        document.getElementById(id).onclick = returnToMenu;
    });

    // Continue from death screen (go back to last teleport save point)
    const continueBtnDeath = document.getElementById('continue-btn-death');
    if (continueBtnDeath) {
        continueBtnDeath.onclick = continueGame;
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
