import { writable } from 'svelte/store';

export const gameState = writable({
    currentScreen: 'menu', // menu, story, game, victory, gameover
    floor: 0,
    visitedPercent: 0,
    keysCollected: 0,
    keysTotal: 0,
    pathfindersRemaining: 0,
    pathfindersTotal: 0,
    hunterStatus: 'SCANNING',
    hunterStatusClass: 'status--scanning',
    isPaused: false,
    isSafeMode: false,
    saving: false,
    infoBanner: '',
    showMap3D: false,
    proximeterVisible: false,
    proximeterCells: Array(10).fill(false),
    mobileMapOnTeleport: false,
    mobileMapInactive: false,
    hasSave: false,
    degree: 8
});

export const engineStore = writable<any>(null);
