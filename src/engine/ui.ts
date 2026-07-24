import { get } from 'svelte/store';
import { gameState } from '../stores';
import { localizeDOM } from './translations';

export class UIManager {
    constructor() {
        this.localizeDOM();
    }

    localizeDOM(lang?: string) {
        // Will be handled mostly by Svelte, but we can call it just in case
        try { localizeDOM(lang); } catch (e) {}
    }

    showPause() {
        gameState.update(s => ({ ...s, isPaused: true, currentScreen: 'pause' }));
    }

    hidePause() {
        gameState.update(s => ({ ...s, isPaused: false, currentScreen: 'game' }));
    }

    showVictory(mapCompletionPercent = 0) {
        gameState.update(s => ({ ...s, currentScreen: 'victory', visitedPercent: mapCompletionPercent }));
    }

    showDeath(hasSavePoint = false) {
        gameState.update(s => ({ ...s, currentScreen: 'gameover', hasSave: hasSavePoint }));
    }

    hideGameUI() {
        gameState.update(s => ({ ...s, currentScreen: 'story' })); // or hidden
    }

    initGameUI(isSafeMode = false) {
        gameState.update(s => ({ ...s, currentScreen: 'game', isSafeMode }));
    }

    updateVisitedPercent(percent: number) {
        gameState.update(s => ({ ...s, visitedPercent: percent }));
    }

    updateFloor(z: number, hasUp: boolean, hasDown: boolean) {
        gameState.update(s => ({ ...s, floor: z }));
    }

    updateKeysHUD(collected: number, total: number) {
        gameState.update(s => ({ ...s, keysCollected: collected, keysTotal: total }));
    }

    updatePathfindersHUD(remaining: number, total: number) {
        gameState.update(s => ({ ...s, pathfindersRemaining: remaining, pathfindersTotal: total }));
    }

    showSavingIndicator() {
        gameState.update(s => ({ ...s, saving: true }));
        setTimeout(() => {
            gameState.update(s => ({ ...s, saving: false }));
        }, 2000);
    }

    showInfoBanner(message: string) {
        gameState.update(s => ({ ...s, infoBanner: message }));
        setTimeout(() => {
            gameState.update(s => {
                if (s.infoBanner === message) return { ...s, infoBanner: '' };
                return s;
            });
        }, 3000);
    }

    setMap3DVisible(visible: boolean) {
        gameState.update(s => ({ ...s, showMap3D: visible }));
        const m = document.getElementById('map3d-container');
        if (m) {
            if (visible) m.classList.remove('hidden');
            else m.classList.add('hidden');
        }
    }

    updateHazardWarning(isTracking: boolean, cooldownTicks: number, isSafeMode = false, isSleeping = false) {
        if (isSafeMode) {
            gameState.update(s => ({ ...s, hunterStatus: 'SAFE MODE', hunterStatusClass: 'status--safe' }));
            return;
        }
        if (isSleeping) {
            gameState.update(s => ({ ...s, hunterStatus: 'SLEEPING', hunterStatusClass: 'status--sleeping' }));
            return;
        }
        if (isTracking) {
            gameState.update(s => ({ ...s, hunterStatus: 'TRACKING', hunterStatusClass: 'status--tracking' }));
        } else if (cooldownTicks > 0) {
            gameState.update(s => ({ ...s, hunterStatus: 'COOLDOWN', hunterStatusClass: 'status--cooldown' }));
        } else {
            gameState.update(s => ({ ...s, hunterStatus: 'SCANNING', hunterStatusClass: 'status--scanning' }));
        }
    }

    setNearbyWarning(visible: boolean) {
        gameState.update(s => ({ ...s, proximeterVisible: visible }));
    }

    updateProximeter(minDistance: number, activeHunters: number, isGameOver: boolean) {
        const cells = Array(10).fill(false);
        if (!isGameOver && activeHunters > 0 && minDistance <= 10) {
            const litCount = 11 - minDistance;
            for (let i = 0; i < litCount; i++) {
                cells[i] = true;
            }
        }
        gameState.update(s => ({ ...s, proximeterCells: cells }));
    }

    updateMobileMapButton(isOnTeleport: boolean, isInactive: boolean, isPortrait: boolean) {
        gameState.update(s => ({ ...s, mobileMapOnTeleport: isOnTeleport, mobileMapInactive: isInactive }));
    }

    updateControlsHint(device: string, hasZoom = true) {}

    destroy() {}
}
