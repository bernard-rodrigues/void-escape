import { CONFIG } from './config.js';
import { getTranslation } from './translations.js';

/**
 * UIManager - Manages DOM interactions, HUD overlay, notifications, and menus.
 */
export class UIManager {
    constructor() {
        this.uiFloorSpan = document.getElementById('current-floor');
        this.uiMap3dContainer = document.getElementById('map3d-container');
        this.uiMobileControls = document.getElementById('mobile-controls');
        this.uiProximeterContainer = document.getElementById('proximeter-container');
        this.uiProximeterCells = document.querySelectorAll('.proximeter-cell');
        this.uiProximeterBar = document.querySelector('.proximeter-bar');
        this.uiTeleportWarning = document.getElementById('teleport-warning');
        this.uiVictoryScreen = document.getElementById('victory-screen');
        this.uiGameOverScreen = document.getElementById('game-over-screen');
        this.uiMobileUp = document.getElementById('mobile-up');
        this.uiMobileDown = document.getElementById('mobile-down');
        this.uiMobileMap = document.getElementById('mobile-map');

        this.uiSavingIndicator = document.getElementById('saving-indicator');
        this.savingIndicatorTimeout = null;

        this.uiVisitedPercent = document.getElementById('visited-percent');
        
        // Hunter status letreiro and unifed info-banner
        this.uiHunterStatusVal = document.getElementById('hunter-status-val');
        this.uiStatusLabel = document.querySelector('#hunter-status-panel .status-label');
        this.uiMarqueeContainer = document.querySelector('.status-marquee-container');
        this.uiLegendHunter = document.getElementById('legend-hunter');
        this.uiInfoBanner = document.getElementById('info-banner');
        this.uiCanvas = document.getElementById('main-2d-canvas');
        this.infoBannerTimeout = null;

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

        this.localizeDOM();
    }

    /**
     * Localize all elements with [data-i18n] attributes using translations.js.
     */
    localizeDOM(lang = 'en') {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = getTranslation(key, {}, lang);
            if (translation !== key) {
                if (el.tagName === 'INPUT' && el.type === 'button') {
                    el.value = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });
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
    showVictory(mapCompletionPercent = 0) {
        this.hideGameUI();
        if (this.uiVictoryScreen) {
            this.uiVictoryScreen.classList.remove('hidden');
        }
        const completionEl = document.getElementById('victory-completion-rate');
        if (completionEl) {
            completionEl.innerText = `${mapCompletionPercent}%`;
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
        if (this.uiTeleportWarning) this.uiTeleportWarning.classList.add('hidden');
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
    updateVisitedPercent(percent) {
        if (this.uiVisitedPercent) {
            this.uiVisitedPercent.innerText = percent;
        }
    }

    /**
     * Update current floor label and status of up/down mobile buttons.
     */
    updateFloor(z, hasUp, hasDown) {
        if (this.uiFloorSpan) {
            this.uiFloorSpan.innerText = (z + 1) / 2;
        }
        if (this.uiMobileUp) this.uiMobileUp.disabled = !hasUp;
        if (this.uiMobileDown) this.uiMobileDown.disabled = !hasDown;
    }

    /**
     * Update the keys HUD elements (collected count, total count, list indicators).
     */
    updateKeysHUD(collected, total) {
        if (this.uiKeysCollected) this.uiKeysCollected.innerText = collected;
        if (this.uiKeysTotal) this.uiKeysTotal.innerText = total;

        if (this.uiKeysList) {
            this.uiKeysList.innerHTML = '';
            for (let i = 0; i < total; i++) {
                const dot = document.createElement('div');
                dot.className = 'key-indicator-dot';
                if (i < collected) {
                    dot.classList.add('collected');
                }
                this.uiKeysList.appendChild(dot);
            }
        }
    }

    /**
     * Update the pathfinders HUD elements (remaining count, total count).
     */
    updatePathfindersHUD(remaining, total) {
        if (this.uiPathfindersRemaining) this.uiPathfindersRemaining.innerText = remaining;
        if (this.uiPathfindersTotal) this.uiPathfindersTotal.innerText = total;
    }

    /**
     * Show a brief animated "SAVING..." indicator (auto-hides after 2 s).
     */
    showSavingIndicator() {
        if (!this.uiSavingIndicator) return;
        if (this.savingIndicatorTimeout) clearTimeout(this.savingIndicatorTimeout);
        this.uiSavingIndicator.classList.remove('hidden');
        this.uiSavingIndicator.classList.add('saving-pulse');
        this.savingIndicatorTimeout = setTimeout(() => {
            this.uiSavingIndicator.classList.add('hidden');
            this.uiSavingIndicator.classList.remove('saving-pulse');
        }, 2000);
    }

    /**
     * Show custom warning banner for a short duration.
     */
    showInfoBanner(message) {
        this.bannerMessage = message; // Salva para compatibilidade de asserções nos testes unitários
        if (this.onInfoBanner) {
            this.onInfoBanner(message);
            return;
        }
        if (this.uiInfoBanner) {
            this.uiInfoBanner.innerText = message;
            this.uiInfoBanner.classList.remove('hidden');
            if (this.infoBannerTimeout) {
                clearTimeout(this.infoBannerTimeout);
            }
            this.infoBannerTimeout = setTimeout(() => {
                if (this.uiInfoBanner) this.uiInfoBanner.classList.add('hidden');
            }, 3000);
        }
    }

    /**
     * Toggle visibility of 3D Map canvas container.
     */
    setMap3DVisible(visible) {
        if (this.uiMap3dContainer) {
            if (visible) {
                this.uiMap3dContainer.classList.remove('hidden');
            } else {
                this.uiMap3dContainer.classList.add('hidden');
            }
        }
    }

    /**
     * Toggle visibility of instruction to click on a teleport destination.
     */
    setTeleportWarning(visible) {
        if (this.uiTeleportWarning) {
            if (visible) {
                this.uiTeleportWarning.classList.remove('hidden');
            } else {
                this.uiTeleportWarning.classList.add('hidden');
            }
        }
    }

    /**
     * Update hazardous warning status (hunters converging or tracking player).
     */
    updateHazardWarning(isTracking, cooldownTicks, isSafeMode = false, isSleeping = false) {
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
    setNearbyWarning(visible) {
        if (this.uiCanvas) {
            if (visible) {
                this.uiCanvas.classList.add('nearby-map-effect');
            } else {
                this.uiCanvas.classList.remove('nearby-map-effect');
            }
        }
    }

    /**
     * Obsolete - Cooldown is unified in updateHazardWarning marquee.
     */
    updateCooldownTimer(ticks) {}

    /**
     * Update proximeter HUD based on distance.
     */
    updateProximeter(minDistance, activeHunters, isGameOver) {
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
            const index = parseInt(cell.getAttribute('data-index'));
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
    updateMobileMapButton(isOnTeleport, isInactive, isPortrait) {
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
     * Clean up timers on game destroy.
     */
    destroy() {
        if (this.infoBannerTimeout) {
            clearTimeout(this.infoBannerTimeout);
        }
        if (this.savingIndicatorTimeout) {
            clearTimeout(this.savingIndicatorTimeout);
        }
    }
}
