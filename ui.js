import { CONFIG } from './config.js';

/**
 * UIManager - Manages DOM interactions, HUD overlay, notifications, and menus.
 */
export class UIManager {
    constructor() {
        this.uiFloorSpan = document.getElementById('current-floor');
        this.uiMap3dContainer = document.getElementById('map3d-container');
        this.uiHazardWarning = document.getElementById('hazard-warning');
        this.uiNearbyWarning = document.getElementById('nearby-warning');
        this.uiMobileControls = document.getElementById('mobile-controls');
        this.uiHelperUses = document.getElementById('helper-uses');
        this.uiHelperMaxUses = document.getElementById('helper-max-uses');
        this.uiProximeterContainer = document.getElementById('proximeter-container');
        this.uiProximeterCells = document.querySelectorAll('.proximeter-cell');
        this.uiProximeterBar = document.querySelector('.proximeter-bar');
        this.uiCooldownTimer = document.getElementById('teleport-cooldown-timer');
        this.uiCooldownTicks = document.getElementById('cooldown-ticks');
        this.uiTeleportWarning = document.getElementById('teleport-warning');
        this.uiTeleportInfo = document.getElementById('teleport-info');
        this.uiVictoryScreen = document.getElementById('victory-screen');
        this.uiGameOverScreen = document.getElementById('game-over-screen');
        this.uiMobileUp = document.getElementById('mobile-up');
        this.uiMobileDown = document.getElementById('mobile-down');
        this.uiMobileMap = document.getElementById('mobile-map');

        this.teleportInfoTimeout = null;
    }

    /**
     * Show victory overlay and hide game controls.
     */
    showVictory() {
        this.hideGameUI();
        if (this.uiVictoryScreen) {
            this.uiVictoryScreen.classList.remove('hidden');
        }
    }

    /**
     * Show game over overlay and hide game controls.
     */
    showDeath() {
        this.hideGameUI();
        if (this.uiGameOverScreen) {
            this.uiGameOverScreen.classList.remove('hidden');
        }
    }

    /**
     * Hide all HUD elements and mobile interfaces.
     */
    hideGameUI() {
        if (this.uiMobileControls) this.uiMobileControls.classList.add('hidden');
        if (this.uiHazardWarning) this.uiHazardWarning.classList.add('hidden');
        if (this.uiNearbyWarning) this.uiNearbyWarning.classList.add('hidden');
        if (this.uiCooldownTimer) this.uiCooldownTimer.classList.add('hidden');
        if (this.uiMap3dContainer) this.uiMap3dContainer.classList.add('hidden');
        if (this.uiTeleportWarning) this.uiTeleportWarning.classList.add('hidden');
        if (this.uiProximeterContainer) this.uiProximeterContainer.classList.add('hidden');
        if (this.uiProximeterBar) this.uiProximeterBar.classList.remove('critical-alert');
        this.uiProximeterCells.forEach(cell => cell.classList.remove('active'));
    }

    /**
     * Setup initial state of HUD when game starts.
     */
    initGameUI(maxUses) {
        if (this.uiMobileControls) {
            this.uiMobileControls.classList.remove('hidden');
        }
        this.updatePathfinderUses(maxUses, maxUses);
    }

    /**
     * Update pathfinder charges display.
     */
    updatePathfinderUses(left, max) {
        if (this.uiHelperUses) this.uiHelperUses.innerText = left;
        if (this.uiHelperMaxUses) this.uiHelperMaxUses.innerText = max;
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
     * Show custom warning banner for a short duration.
     */
    showInfoBanner(message) {
        if (this.uiTeleportInfo) {
            this.uiTeleportInfo.innerText = message;
            this.uiTeleportInfo.classList.remove('hidden');
            if (this.teleportInfoTimeout) {
                clearTimeout(this.teleportInfoTimeout);
            }
            this.teleportInfoTimeout = setTimeout(() => {
                this.uiTeleportInfo.classList.add('hidden');
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
    updateHazardWarning(isTracking, cooldownTicks) {
        if (!this.uiHazardWarning) return;

        if (isTracking) {
            this.uiHazardWarning.classList.remove('hidden');
            if (cooldownTicks > 0) {
                this.uiHazardWarning.innerText = "TELEPORT SIGNAL ACTIVE - HUNTERS CONVERGING";
            } else {
                this.uiHazardWarning.innerText = "ENEMY IS HUNTING YOU";
            }
        } else {
            this.uiHazardWarning.classList.add('hidden');
        }
    }

    /**
     * Toggle hunter nearby warnings.
     */
    setNearbyWarning(visible) {
        if (this.uiNearbyWarning) {
            if (visible) {
                this.uiNearbyWarning.classList.remove('hidden');
            } else {
                this.uiNearbyWarning.classList.add('hidden');
            }
        }
    }

    /**
     * Update the teleport cooldown anomaly counter.
     */
    updateCooldownTimer(ticks) {
        if (ticks > 0) {
            if (this.uiCooldownTimer) this.uiCooldownTimer.classList.remove('hidden');
            if (this.uiCooldownTicks) this.uiCooldownTicks.innerText = ticks;
        } else {
            if (this.uiCooldownTimer) this.uiCooldownTimer.classList.add('hidden');
        }
    }

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
                this.uiMobileMap.innerText = "TELEPORT";
                this.uiMobileMap.style.borderColor = "var(--clr-teleport, #ff8c00)";
                this.uiMobileMap.style.color = "var(--clr-teleport, #ff8c00)";
                this.uiMobileMap.style.background = "rgba(255, 140, 0, 0.2)";
            } else {
                this.uiMobileMap.innerText = "MAP";
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
        if (this.teleportInfoTimeout) {
            clearTimeout(this.teleportInfoTimeout);
        }
    }
}
