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
        let count = 0;
        if (degree >= CONFIG.MAZE_DEGREE) count = 1;
        if (degree >= CONFIG.MAZE_DEGREE * 2) count = 2;
        if (degree >= CONFIG.MAZE_DEGREE * 3) count = 3;
        hunterCount.innerText = count;
        hunterCount.style.color = count > 0 ? '#f00' : '#a0f';
    };

    const updateTeleportDisplay = (degree) => {
        const count = Math.max(2, Math.floor(degree / 2));
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
    updateHunterDisplay(parseInt(degreeSlider.value));
    updateTeleportDisplay(parseInt(degreeSlider.value));

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
