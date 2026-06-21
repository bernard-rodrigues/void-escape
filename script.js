import { CONFIG } from './config.js';
import { Engine } from './engine.js';

let currentGame = null;

const startNewGame = (degree, branching, movementMode) => {
    if (currentGame) currentGame.destroy();
    document.getElementById('start-menu').classList.add('hidden');
    document.getElementById('victory-screen').classList.add('hidden');
    document.getElementById('game-over-screen').classList.add('hidden');
    currentGame = new Engine(degree, branching, movementMode);
};

const returnToMenu = () => {
    if (currentGame) currentGame.destroy();
    document.getElementById('victory-screen').classList.add('hidden');
    document.getElementById('game-over-screen').classList.add('hidden');
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

    const updateHelperDisplay = (degree) => {
        const hunters = CONFIG.getHunterCount(degree);
        const charges = CONFIG.getPathfinderCharges(hunters);
        const helperCountStart = document.getElementById('helper-count-start');
        if (helperCountStart) {
            helperCountStart.innerText = charges;
        }
    };

    degreeSlider.oninput = () => { 
        degreeVal.innerText = degreeSlider.value; 
        updateHunterDisplay(parseInt(degreeSlider.value)); 
        updateTeleportDisplay(parseInt(degreeSlider.value)); 
        updateHelperDisplay(parseInt(degreeSlider.value));
    };
    branchSlider.oninput = () => branchVal.innerText = parseFloat(branchSlider.value).toFixed(2);
    updateHunterDisplay(parseInt(degreeSlider.value));
    updateTeleportDisplay(parseInt(degreeSlider.value));
    updateHelperDisplay(parseInt(degreeSlider.value));

    document.getElementById('start-btn').onclick = () => {
        startNewGame(parseInt(degreeSlider.value), parseFloat(branchSlider.value), document.getElementById('movement-mode').value);
    };

    // End game button logic
    ['restart-btn-victory', 'retry-btn-death'].forEach(id => {
        document.getElementById(id).onclick = () => {
            startNewGame(currentGame.degree, currentGame.branchingFactor, currentGame.movementMode);
        };
    });

    ['menu-btn-victory', 'menu-btn-death'].forEach(id => {
        document.getElementById(id).onclick = returnToMenu;
    });
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
