import { getTranslation, CURRENT_LANG, localizeDOM } from './translations';

/**
 * UIManager - Manages DOM interactions, HUD overlay, notifications, and menus.
 */
export class UIManager {
    uiFloorSpan: HTMLElement | null;
    uiMap3dContainer: HTMLElement | null;
    uiMobileControls: HTMLElement | null;
    uiProximeterContainer: HTMLElement | null;
    uiProximeterCells: NodeListOf<HTMLElement>;
    uiProximeterBar: HTMLElement | null;
    uiVictoryScreen: HTMLElement | null;
    uiGameOverScreen: HTMLElement | null;
    uiMobileUp: HTMLButtonElement | null;
    uiMobileDown: HTMLButtonElement | null;
    uiMobileMap: HTMLButtonElement | null;
    uiSavingIndicator: HTMLElement | null;
    savingIndicatorTimeout: number | null;
    uiVisitedPercent: HTMLElement | null;
    uiHunterStatusVal: HTMLElement | null;
    uiStatusLabel: HTMLElement | null;
    uiMarqueeContainer: HTMLElement | null;
    uiLegendHunter: HTMLElement | null;
    uiCanvas: HTMLCanvasElement | null;
    uiKeysCollected: HTMLElement | null;
    uiKeysTotal: HTMLElement | null;
    uiKeysList: HTMLElement | null;
    uiPauseScreen: HTMLElement | null;
    uiMobilePauseBtn: HTMLElement | null;
    uiPathfindersRemaining: HTMLElement | null;
    uiPathfindersTotal: HTMLElement | null;
    uiControlsHintContent: HTMLElement | null;
    uiManaCollectedDesktop: HTMLElement | null;
    uiManaTotalDesktop: HTMLElement | null;
    uiManaCollectedMobile: HTMLElement | null;
    uiManaTotalMobile: HTMLElement | null;
    uiJellyPortalCountDesktop: HTMLElement | null;
    uiJellyPortalCountMobile: HTMLElement | null;
    uiMobileJellyPortalBtn: HTMLElement | null;
    onInfoBanner?: (message: string) => void;
    bannerMessage: string = "";

    constructor() {
        this.uiFloorSpan = document.getElementById('current-floor');
        this.uiMap3dContainer = document.getElementById('map3d-container');
        this.uiMobileControls = document.getElementById('mobile-controls');
        this.uiProximeterContainer = document.getElementById('proximeter-container');
        this.uiProximeterCells = document.querySelectorAll('.proximeter-cell');
        this.uiProximeterBar = document.querySelector('.proximeter-bar');
        this.uiVictoryScreen = document.getElementById('victory-screen');
        this.uiGameOverScreen = document.getElementById('game-over-screen');
        this.uiMobileUp = document.getElementById('mobile-up') as HTMLButtonElement;
        this.uiMobileDown = document.getElementById('mobile-down') as HTMLButtonElement;
        this.uiMobileMap = document.getElementById('mobile-map') as HTMLButtonElement;

        this.uiSavingIndicator = document.getElementById('saving-indicator');
        this.savingIndicatorTimeout = null;

        this.uiVisitedPercent = document.getElementById('visited-percent');
        
        // Hunter status letreiro
        this.uiHunterStatusVal = document.getElementById('hunter-status-val');
        this.uiStatusLabel = document.querySelector('#hunter-status-panel .status-label');
        this.uiMarqueeContainer = document.querySelector('.status-marquee-container');
        this.uiLegendHunter = document.getElementById('legend-hunter');
        this.uiCanvas = document.getElementById('main-2d-canvas') as HTMLCanvasElement;

        // Keys HUD DOM bindings
        this.uiKeysCollected = document.getElementById('keys-collected-count');
        this.uiKeysTotal = document.getElementById('keys-total-count');
        this.uiKeysList = document.getElementById('keys-list-container');

        // Pause Menu DOM bindings
        this.uiPauseScreen = document.getElementById('pause-screen');
        this.uiMobilePauseBtn = document.getElementById('mobile-pause-btn');

        // Pathfinders HUD DOM bindings
        this.uiPathfindersRemaining = document.getElementById('pathfinders-remaining-count');
        this.uiPathfindersTotal = document.getElementById('pathfinders-total-count');

        // Controls Hint DOM bindings
        this.uiControlsHintContent = document.getElementById('controls-hint-content');

        this.uiManaCollectedDesktop = document.getElementById('mana-collected-count-desktop');
        this.uiManaTotalDesktop = document.getElementById('mana-total-count-desktop');
        this.uiManaCollectedMobile = document.getElementById('mana-collected-count-mobile');
        this.uiManaTotalMobile = document.getElementById('mana-total-count-mobile');
        this.uiJellyPortalCountDesktop = document.getElementById('jelly-portal-count-desktop');
        this.uiJellyPortalCountMobile = document.getElementById('jelly-portal-count-mobile');
        this.uiMobileJellyPortalBtn = document.getElementById('mobile-jelly-portal-btn');

        this.localizeDOM();
    }

    /**
     * Localize all elements with [data-i18n] attributes using translations.js.
     */
    localizeDOM(lang = CURRENT_LANG) {
        localizeDOM(lang);
    }

    /**
     * Show pause overlay.
     */
    showPause() {
        if (this.uiPauseScreen) {
            this.uiPauseScreen.classList.remove('hidden');
        }
    }

    /**
     * Hide pause overlay.
     */
    hidePause() {
        if (this.uiPauseScreen) {
            this.uiPauseScreen.classList.add('hidden');
        }
    }

    /**
     * Show victory overlay and hide game controls.
     */
    showVictory(mapCompletionPercent = 0, deathsCount = 0, degree = 8, elapsedTime = 0, manaCollected = 0, totalMana = 0) {
        this.hideGameUI();
        if (this.uiVictoryScreen) {
            this.uiVictoryScreen.classList.remove('hidden');
        }
        const manaEl = document.getElementById('victory-mana-count');
        if (manaEl) {
            manaEl.innerText = `${manaCollected}/${totalMana}`;
        }
        const completionEl = document.getElementById('victory-completion-rate');
        if (completionEl) {
            completionEl.innerText = `${mapCompletionPercent}%`;
        }
        const deathsEl = document.getElementById('victory-deaths-count');
        if (deathsEl) {
            deathsEl.innerText = String(deathsCount);
        }
        const degreeEl = document.getElementById('victory-maze-degree');
        if (degreeEl) {
            degreeEl.innerText = String(degree);
        }
        const timeEl = document.getElementById('victory-completion-time');
        if (timeEl) {
            const hrs = Math.floor(elapsedTime / 3600);
            const mins = Math.floor((elapsedTime % 3600) / 60);
            const secs = Math.floor(elapsedTime % 60);
            const pad = (n: number) => String(n).padStart(2, '0');
            const formatted = hrs > 0 ? `${pad(hrs)}:${pad(mins)}:${pad(secs)}` : `${pad(mins)}:${pad(secs)}`;
            timeEl.innerText = formatted;
        }
    }

    /**
     * Show game over overlay and hide game controls.
     * @param {boolean} hasSavePoint - Whether to show the Continue button.
     */
    showDeath(hasSavePoint = false) {
        this.hideGameUI();
        if (this.uiGameOverScreen) {
            this.uiGameOverScreen.classList.remove('hidden');
        }
        const continueBtn = document.getElementById('continue-btn-death');
        if (continueBtn) {
            continueBtn.style.display = hasSavePoint ? '' : 'none';
        }
    }

    /**
     * Hide all HUD elements and mobile interfaces.
     */
    hideGameUI() {
        if (this.uiMobileControls) this.uiMobileControls.classList.add('hidden');
        if (this.uiMobilePauseBtn) this.uiMobilePauseBtn.classList.add('hidden');
        if (this.uiMap3dContainer) this.uiMap3dContainer.classList.add('hidden');
        if (this.uiProximeterContainer) this.uiProximeterContainer.classList.add('hidden');
        if (this.uiProximeterBar) this.uiProximeterBar.classList.remove('critical-alert');
        this.uiProximeterCells.forEach(cell => cell.classList.remove('active'));

        // Clear canvas border alert classes
        if (this.uiCanvas) {
            this.uiCanvas.classList.remove('hunted-map-effect', 'nearby-map-effect');
        }
    }

    /**
     * Setup initial state of HUD when game starts.
     */
    initGameUI(isSafeMode = false) {
        if (this.uiMobileControls) {
            this.uiMobileControls.classList.remove('hidden');
        }
        if (this.uiMobilePauseBtn) {
            this.uiMobilePauseBtn.classList.remove('hidden');
        }
        if (this.uiMobileMap) {
            this.uiMobileMap.disabled = true;
        }

        // Toggle Safe Mode UI text and layout visibility
        if (isSafeMode) {
            if (this.uiStatusLabel) this.uiStatusLabel.innerText = "SAFE MODE:";
            if (this.uiHunterStatusVal) {
                this.uiHunterStatusVal.innerText = "ACTIVE";
                this.uiHunterStatusVal.className = "status-marquee-text status--scanning";
            }
            if (this.uiLegendHunter) this.uiLegendHunter.classList.add('hidden');
        } else {
            if (this.uiStatusLabel) this.uiStatusLabel.innerText = "HUNTER STATUS:";
            if (this.uiLegendHunter) this.uiLegendHunter.classList.remove('hidden');
        }
    }

    /**
     * Update map visited percentage display.
     */
    updateVisitedPercent(percent: number) {
        if (this.uiVisitedPercent) {
            this.uiVisitedPercent.innerText = String(percent);
        }
    }

    /**
     * Update mana counter display.
     */
    updateManaHUD(collected: number, total: number) {
        if (this.uiManaCollectedDesktop) this.uiManaCollectedDesktop.innerText = String(collected);
        if (this.uiManaTotalDesktop) this.uiManaTotalDesktop.innerText = String(total);
        if (this.uiManaCollectedMobile) this.uiManaCollectedMobile.innerText = String(collected);
        if (this.uiManaTotalMobile) this.uiManaTotalMobile.innerText = String(total);
    }

    /**
     * Update jelly portal counter display and mobile activation button status.
     */
    updateJellyPortalHUD(count: number) {
        if (this.uiJellyPortalCountDesktop) this.uiJellyPortalCountDesktop.innerText = String(count);
        if (this.uiJellyPortalCountMobile) this.uiJellyPortalCountMobile.innerText = String(count);
        
        if (this.uiMobileJellyPortalBtn) {
            if (count > 0) {
                this.uiMobileJellyPortalBtn.classList.add('jelly-portal-btn--active');
            } else {
                this.uiMobileJellyPortalBtn.classList.remove('jelly-portal-btn--active');
            }
        }
    }

    /**
     * Update floor level display.
     */
    updateFloor(z: number, hasUp: boolean, hasDown: boolean) {
        if (this.uiFloorSpan) {
            const normalizedFloor = (z + 1) / 2;
            this.uiFloorSpan.innerText = String(normalizedFloor);
        }
        if (this.uiMobileUp) {
            this.uiMobileUp.disabled = !hasUp;
        }
        if (this.uiMobileDown) {
            this.uiMobileDown.disabled = !hasDown;
        }
    }

    /**
     * Update keys counter display and indicator dots.
     */
    updateKeysHUD(collected: number, total: number) {
        if (this.uiKeysCollected) this.uiKeysCollected.innerText = String(collected);
        if (this.uiKeysTotal) this.uiKeysTotal.innerText = String(total);

        if (this.uiKeysList) {
            this.uiKeysList.innerHTML = '';
            for (let i = 0; i < total; i++) {
                const dot = document.createElement('span');
                dot.className = 'key-dot' + (i < collected ? ' key-dot--collected' : '');
                this.uiKeysList.appendChild(dot);
            }
        }
    }

    /**
     * Update pathfinders counter display.
     */
    updatePathfindersHUD(remaining: number, total: number) {
        if (this.uiPathfindersRemaining) this.uiPathfindersRemaining.innerText = String(remaining);
        if (this.uiPathfindersTotal) this.uiPathfindersTotal.innerText = String(total);
    }

    /**
     * Show saving indicator pulse.
     */
    showSavingIndicator() {
        if (!this.uiSavingIndicator) return;
        if (this.savingIndicatorTimeout) {
            clearTimeout(this.savingIndicatorTimeout);
        }
        this.uiSavingIndicator.classList.remove('hidden');
        this.uiSavingIndicator.classList.add('saving-pulse');
        this.savingIndicatorTimeout = window.setTimeout(() => {
            if (this.uiSavingIndicator) {
                this.uiSavingIndicator.classList.add('hidden');
                this.uiSavingIndicator.classList.remove('saving-pulse');
            }
        }, 2000);
    }

    /**
     * Show custom warning banner for a short duration.
     */
    showInfoBanner(message: string) {
        this.bannerMessage = message;
        if (this.onInfoBanner) {
            this.onInfoBanner(message);
        }
    }

    /**
     * Toggle visibility of 3D Map canvas container.
     */
    setMap3DVisible(visible: boolean) {
        if (this.uiMap3dContainer) {
            if (visible) {
                this.uiMap3dContainer.classList.remove('hidden');
            } else {
                this.uiMap3dContainer.classList.add('hidden');
            }
        }
    }

    /**
     * Update hazardous warning status (hunters converging or tracking player).
     */
    updateHazardWarning(isTracking: boolean, cooldownTicks: number, isSafeMode = false, isSleeping = false) {
        if (!this.uiHunterStatusVal) return;

        let statusText = getTranslation('statusScanning');
        let statusClass = "status--scanning";
        let isHunted = false;

        if (isSafeMode) {
            statusText = getTranslation('statusActive');
            statusClass = "status--scanning";
        } else if (isSleeping) {
            statusText = getTranslation('statusSleeping');
            statusClass = "status--sleeping";
        } else if (cooldownTicks > 0) {
            statusText = getTranslation('statusConverging', { ticks: cooldownTicks });
            statusClass = "status--converging";
            isHunted = true;
        } else if (isTracking) {
            statusText = getTranslation('statusTracking');
            statusClass = "status--tracking";
            isHunted = true;
        }

        if (this.uiHunterStatusVal.innerText !== statusText) {
            this.uiHunterStatusVal.innerText = statusText;
            this.uiHunterStatusVal.className = "status-marquee-text " + statusClass;
        }

        if (this.uiCanvas) {
            if (isHunted) {
                this.uiCanvas.classList.add('hunted-map-effect');
            } else {
                this.uiCanvas.classList.remove('hunted-map-effect');
            }
        }
    }

    /**
     * Toggle hunter nearby warnings (border-color effect).
     */
    setNearbyWarning(visible: boolean) {
        if (this.uiCanvas) {
            if (visible) {
                this.uiCanvas.classList.add('nearby-map-effect');
            } else {
                this.uiCanvas.classList.remove('nearby-map-effect');
            }
        }
    }

    /**
     * Update proximeter HUD based on distance.
     */
    updateProximeter(minDistance: number, activeHunters: number, isGameOver: boolean) {
        if (!this.uiProximeterContainer) return;

        if (activeHunters > 0 && !isGameOver) {
            this.uiProximeterContainer.classList.remove('hidden');
        } else {
            this.uiProximeterContainer.classList.add('hidden');
            return;
        }

        let activeCellsCount = 0;
        if (minDistance <= 10) {
            activeCellsCount = 11 - minDistance;
        }

        this.uiProximeterCells.forEach((cell) => {
            const index = parseInt(cell.getAttribute('data-index') || '0');
            if (index <= activeCellsCount) {
                cell.classList.add('active');
            } else {
                cell.classList.remove('active');
            }
        });

        if (this.uiProximeterBar) {
            if (activeCellsCount === 10) {
                this.uiProximeterBar.classList.add('critical-alert');
            } else {
                this.uiProximeterBar.classList.remove('critical-alert');
            }
        }
    }

    /**
     * Update the action text / visual style of the Map button on mobile HUD.
     */
    updateMobileMapButton(isOnTeleport: boolean, isInactive: boolean, isPortrait: boolean) {
        if (!this.uiMobileMap) return;

        if (isPortrait) {
            if (isOnTeleport && !isInactive) {
                this.uiMobileMap.innerText = getTranslation('teleport');
                this.uiMobileMap.style.borderColor = "var(--clr-teleport, #ff8c00)";
                this.uiMobileMap.style.color = "var(--clr-teleport, #ff8c00)";
                this.uiMobileMap.style.background = "rgba(255, 140, 0, 0.2)";
            } else {
                this.uiMobileMap.innerText = getTranslation('map');
                this.uiMobileMap.style.borderColor = "";
                this.uiMobileMap.style.color = "";
                this.uiMobileMap.style.background = "";
            }
        }
    }

    /**
     * Dynamically update the controls hint box layout with styled keycaps
     * depending on the active input device (keyboard vs gamepad).
     */
    updateControlsHint(device: string, hasZoom = true) {
        if (!this.uiControlsHintContent) return;

        if (device === 'gamepad') {
            this.uiControlsHintContent.innerHTML = `
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-dark">LS</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">or</span>
                        <kbd class="kbd-dark">D-Pad</kbd>
                    </div>
                    <span class="hint-action">${getTranslation('actionMove')}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-a">A</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">/</span>
                        <kbd class="kbd-round kbd-y">Y</kbd>
                    </div>
                    <span class="hint-action">${getTranslation('actionElevator')}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-dark" style="min-width: calc(var(--h-unit) * 3); min-width: calc(var(--d-h-unit) * 3);">Back</kbd>
                    </div>
                    <span class="hint-action">${getTranslation('actionMap')}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-b">B</kbd>
                    </div>
                    <span class="hint-action">${getTranslation('actionZoom')}</span>
                </div>
            `;
        } else {
            this.uiControlsHintContent.innerHTML = `
                <div class="hint-row">
                    <div class="wasd-container">
                        <div class="wasd-row"><kbd>W</kbd></div>
                        <div class="wasd-row"><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></div>
                    </div>
                    <span class="hint-action">${getTranslation('actionMove')}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>Q</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">/</span>
                        <kbd>E</kbd>
                    </div>
                    <span class="hint-action">${getTranslation('actionElevator')}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>M</kbd>
                    </div>
                    <span class="hint-action">${getTranslation('actionMap')}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>Z</kbd>
                    </div>
                    <span class="hint-action">${getTranslation('actionZoom')}</span>
                </div>
            `;
        }
    }

    /**
     * Clean up timers on game destroy.
     */
    destroy() {
        if (this.savingIndicatorTimeout) {
            clearTimeout(this.savingIndicatorTimeout);
        }
    }
}
