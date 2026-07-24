
<script lang="ts">
    import { gameState } from '../stores';
</script>

<div id="saving-indicator" class:hidden={!$gameState.saving}><span class="saving-icon">💾</span> <span data-i18n="saving">SAVING...</span></div>

<main id="game-container" style="display: {$gameState.currentScreen === 'game' || $gameState.currentScreen === 'story' ? 'flex' : 'none'};">
    <button id="mobile-pause-btn" class="hidden" aria-label="Pause Game">✕</button>
    <button id="mobile-teleport-exit-btn" class="hidden" aria-label="Exit Teleport Map">✕</button>

    <div id="left-hud-panel" class="intro-hidden">
        <div class="hud-item-group">
            <div class="keys-title" data-i18n="hudKeys">KEYS</div>
            <div class="keys-counter">
                <span id="keys-collected-count">{$gameState.keysCollected}</span> / <span id="keys-total-count">{$gameState.keysTotal}</span>
            </div>
            <div id="keys-list-container"></div>
        </div>
        <div class="hud-item-group" id="pathfinder-hud-group">
            <div class="pathfinders-title" data-i18n="hudPathfinders">PATHFINDERS</div>
            <div class="pathfinders-counter">
                <span id="pathfinders-remaining-count">{$gameState.pathfindersRemaining}</span> / <span id="pathfinders-total-count">{$gameState.pathfindersTotal}</span>
            </div>
        </div>
    </div>

    <div id="map-area-container" class="intro-hidden">
        <div id="hunter-status-panel">
            <span class="status-label" data-i18n="statusLabel">HUNTER STATUS:</span>
            <div class="status-marquee-container">
                <span id="hunter-status-val" class="status-marquee-text {$gameState.hunterStatusClass}">{$gameState.hunterStatus}</span>
            </div>
        </div>
        <div style="position: relative; display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 90vw; margin-bottom: calc(var(--h-unit) * 2);">
            <!-- Canvas is mounted by Svelte bindings or by engine finding it by ID -->
            <canvas id="main-2d-canvas" aria-label="2D Navigation Map" style="margin-bottom: 0;"></canvas>
            
            <button id="mobile-zoom-btn" aria-label="Toggle Zoom">
                <svg id="zoom-out-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;">
                    <circle cx="11" cy="11" r="6"></circle>
                    <line x1="21" y1="21" x2="15.5" y2="15.5"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                <svg id="zoom-in-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;" class="hidden">
                    <circle cx="11" cy="11" r="6"></circle>
                    <line x1="21" y1="21" x2="15.5" y2="15.5"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
            </button>
        </div>
        
        <div id="proximeter-container" class:hidden={!$gameState.proximeterVisible}>
            <div class="proximeter-label" data-i18n="proximityDetector">PROXIMITY DETECTOR</div>
            <div class="proximeter-bar">
                {#each Array(10) as _, i}
                    <span class="proximeter-cell" data-index={i+1} class:active={$gameState.proximeterCells[i]}></span>
                {/each}
            </div>
        </div>

        <div id="bottom-hud-container" class="intro-hidden">
            <div id="floor-display" aria-live="polite"><span class="hud-label" data-i18n="hudFloor">Floor</span> <span id="current-floor">{$gameState.floor}</span></div>
            <div id="visited-display" aria-live="polite"><span class="hud-label" data-i18n="hudVisited">Visited</span> <span class="visited-value"><span id="visited-percent">{$gameState.visitedPercent}</span>%</span></div>
        </div>
    </div>

    <div id="right-hud-panel" class="intro-hidden">
        <aside id="map-legend">
            <h3 data-i18n="mapLegendTitle">MAP LEGEND</h3>
            <div class="legend-item"><span class="color-box color-box--visited"></span> <span data-i18n="legendVisited">Visited Path</span></div>
            <div class="legend-item"><span class="color-box color-box--known"></span> <span data-i18n="legendKnown">Known Path</span></div>
            <div class="legend-item"><span class="color-box color-box--start"></span> <span data-i18n="legendStart">Starting Point</span></div>
            <div class="legend-item"><span class="color-box color-box--exit"></span> <span data-i18n="legendExit">Maze Exit</span></div>
            <div id="legend-hunter" class="legend-item"><span class="color-box color-box--hunter"></span> <span data-i18n="legendHunter">Void Hunter</span></div>
            <div class="legend-item"><span class="color-box color-box--teleport"></span> <span data-i18n="legendTeleport">Teleport</span></div>
            <div class="legend-item">
                <span class="symbol-box">
                    <svg viewBox="0 0 24 24" fill="none" style="width: 100%; height: 100%;">
                        <path d="M12 2L5 9H9V11H15V9H19L12 2Z" fill="#00ffff" />
                        <path d="M12 22L19 15H15V13H9V15H5L12 22Z" fill="#ff00ff" />
                    </svg>
                </span>
                <span data-i18n="legendElevator">Elevator</span>
            </div>
        </aside>

        <aside id="controls-hint">
            <h3 data-i18n="controlsHintTitle">CONTROLS HINT</h3>
            <div id="controls-hint-content"></div>
        </aside>
    </div>
    
    <nav id="mobile-controls" class="hidden">
        <button id="mobile-down" class="mobile-btn" disabled aria-label="Go Down">▼</button>
        <button id="mobile-map" class="mobile-btn" disabled aria-label="Open Map" data-i18n="map">MAP</button>
        <button id="mobile-up" class="mobile-btn" disabled aria-label="Go Up">▲</button>
    </nav>
    
    <div id="map3d-container" class:hidden={!$gameState.showMap3D}>
        <div id="map3d-instructions" class="hidden"></div>
    </div>
</main>
