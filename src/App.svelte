<script lang="ts">
    import { onMount } from 'svelte';
    import { Engine } from './engine/engine';
    import { loadSave, hasSave, clearSave } from './engine/save';
    import { localizeDOM, getCurrentLanguage } from './engine/translations';
    import { CONFIG } from './engine/config';
    import { TUTORIALS } from './engine/tutorials';

    let currentGame: any = null;
    let currentLang: string = 'en';

    function startNewGame(degree: number) {
        if (currentGame) currentGame.destroy();
        clearSave();
        document.getElementById('start-menu')?.classList.add('hidden');
        document.getElementById('victory-screen')?.classList.add('hidden');
        document.getElementById('game-over-screen')?.classList.add('hidden');

        const loader = document.getElementById('loading-screen');
        if (loader) {
            loader.classList.remove('hidden');
            localizeDOM();
        }

        setTimeout(() => {
            try {
                currentGame = new Engine(degree, CONFIG.BRANCHING_FACTOR);
            } finally {
                if (loader) loader.classList.add('hidden');
            }
        }, 50);
    }

    let selectedTutorialStage: any = null;

    function selectTutorial(stage: any) {
        selectedTutorialStage = stage;
        const lang = getCurrentLanguage();
        
        const titleEl = document.getElementById('tut-modal-title');
        const descEl = document.getElementById('tut-modal-description');
        if (titleEl) titleEl.innerText = stage.title[lang] || stage.title['en'];
        if (descEl) descEl.innerText = stage.description[lang] || stage.description['en'];
        
        document.getElementById('tutorial-instructions-modal')?.classList.remove('hidden');
    }

    function runTutorial(stage: any) {
        if (currentGame) currentGame.destroy();
        
        document.getElementById('tutorial-instructions-modal')?.classList.add('hidden');
        document.getElementById('tutorials-menu')?.classList.add('hidden');
        document.getElementById('victory-screen')?.classList.add('hidden');
        document.getElementById('game-over-screen')?.classList.add('hidden');
        
        const loader = document.getElementById('loading-screen');
        if (loader) {
            loader.classList.remove('hidden');
            localizeDOM();
        }
        
        setTimeout(() => {
            try {
                currentGame = new Engine(stage.degree || 3, CONFIG.BRANCHING_FACTOR, null, stage);
            } finally {
                if (loader) loader.classList.add('hidden');
            }
        }, 50);
    }

    function continueGame() {
        const snapshot = loadSave();
        if (!snapshot) return;

        if (currentGame) currentGame.destroy();
        document.getElementById('start-menu')?.classList.add('hidden');
        document.getElementById('victory-screen')?.classList.add('hidden');
        document.getElementById('game-over-screen')?.classList.add('hidden');

        const loader = document.getElementById('loading-screen');
        if (loader) {
            loader.classList.remove('hidden');
            localizeDOM();
        }

        setTimeout(() => {
            try {
                currentGame = new Engine(snapshot.degree, snapshot.branchingFactor, snapshot);
            } finally {
                if (loader) loader.classList.add('hidden');
            }
        }, 50);
    }

    function returnToMenu() {
        if (currentGame) currentGame.destroy();
        document.getElementById('victory-screen')?.classList.add('hidden');
        document.getElementById('game-over-screen')?.classList.add('hidden');

        const continueBtn = document.getElementById('continue-btn-menu');
        if (continueBtn) {
            continueBtn.style.display = hasSave() ? '' : 'none';
        }

        document.getElementById('start-menu')?.classList.remove('hidden');
    }

    onMount(() => {
        localizeDOM();
        const degreeSlider = document.getElementById('maze-degree') as HTMLInputElement;
        const degreeVal = document.getElementById('degree-val');
        const hunterCount = document.getElementById('hunter-count');
        const teleportCount = document.getElementById('teleport-count');
        const keysCount = document.getElementById('keys-count');
        const pathfinderCount = document.getElementById('pathfinder-count');
        const safeModeCheckbox = document.getElementById('safe-mode') as HTMLInputElement;

        const updateHunterDisplay = (degree: number) => {
            const isSafe = safeModeCheckbox && safeModeCheckbox.checked;
            const count = isSafe ? 0 : CONFIG.getHunterCount(degree);
            if (hunterCount) {
                hunterCount.innerText = String(count);
                hunterCount.style.color = count > 0 ? '#f00' : '#88ccff';
            }
        };

        if (safeModeCheckbox && degreeSlider) {
            safeModeCheckbox.onchange = () => {
                updateHunterDisplay(parseInt(degreeSlider.value));
            };
        }

        const updateTeleportDisplay = (degree: number) => {
            const count = CONFIG.getTeleportCount(degree);
            if (teleportCount) {
                teleportCount.innerText = String(count);
            }
        };

        const updateKeysDisplay = (degree: number) => {
            const count = CONFIG.getHunterCount(degree) * 2;
            if (keysCount) {
                keysCount.innerText = String(count);
            }
        };

        const updatePathfinderDisplay = (degree: number) => {
            const count = CONFIG.getPathfinderCount(degree);
            if (pathfinderCount) {
                pathfinderCount.innerText = String(count);
            }
        };

        if (degreeSlider) {
            if (CONFIG.MIN_MAZE_DEGREE !== undefined) {
                degreeSlider.min = String(CONFIG.MIN_MAZE_DEGREE);
            }
            if (CONFIG.MAX_MAZE_DEGREE !== undefined) {
                degreeSlider.max = String(CONFIG.MAX_MAZE_DEGREE);
            }
            if (CONFIG.MAZE_DEGREE !== undefined) {
                degreeSlider.value = String(CONFIG.MAZE_DEGREE);
            }

            degreeSlider.oninput = () => {
                const degree = parseInt(degreeSlider.value);
                if (degreeVal) degreeVal.innerText = String(degree);
                updateHunterDisplay(degree);
                updateTeleportDisplay(degree);
                updateKeysDisplay(degree);
                updatePathfinderDisplay(degree);
            };

            const initialDegree = parseInt(degreeSlider.value);
            if (degreeVal) degreeVal.innerText = String(initialDegree);
            updateHunterDisplay(initialDegree);
            updateTeleportDisplay(initialDegree);
            updateKeysDisplay(initialDegree);
            updatePathfinderDisplay(initialDegree);
        }

        // Show/hide menu Continue button on load
        const continueBtnMenu = document.getElementById('continue-btn-menu');
        if (continueBtnMenu) {
            continueBtnMenu.style.display = hasSave() ? '' : 'none';
        }

        const mobilePauseBtn = document.getElementById('mobile-pause-btn');
        if (mobilePauseBtn) {
            mobilePauseBtn.onclick = (e) => {
                e.stopPropagation();
                if (currentGame) currentGame.togglePause();
            };
        }

        const mobileTeleportExitBtn = document.getElementById('mobile-teleport-exit-btn');
        if (mobileTeleportExitBtn) {
            mobileTeleportExitBtn.onclick = (e) => {
                e.stopPropagation();
                if (currentGame && currentGame.isTeleportMode) {
                    currentGame.toggleTeleportMap(false);
                }
            };
        }

        const mobileJellyPortalBtn = document.getElementById('mobile-jelly-portal-btn');
        if (mobileJellyPortalBtn) {
            mobileJellyPortalBtn.onclick = (e) => {
                e.stopPropagation();
                if (currentGame) currentGame.tryActivateJellyPortal();
            };
        }

        // Bind clicks for the start menu
        const startBtn = document.getElementById('start-btn');
        if (startBtn && degreeSlider) {
            startBtn.onclick = () => {
                startNewGame(parseInt(degreeSlider.value));
            };
        }

        // Victory screen actions (handles Tutorial restart)
        const restartBtnVictory = document.getElementById('restart-btn-victory');
        if (restartBtnVictory && degreeSlider) {
            restartBtnVictory.onclick = () => {
                if (currentGame && currentGame.isTutorialMode && currentGame.currentTutorialStage) {
                    runTutorial(currentGame.currentTutorialStage);
                } else {
                    startNewGame(parseInt(degreeSlider.value));
                }
            };
        }

        const continueBtn = document.getElementById('continue-btn-menu');
        if (continueBtn) {
            continueBtn.onclick = () => {
                continueGame();
            };
        }

        const menuBtnVictory = document.getElementById('menu-btn-victory');
        if (menuBtnVictory) {
            menuBtnVictory.onclick = () => {
                if (currentGame && currentGame.isTutorialMode) {
                    document.getElementById('victory-screen')?.classList.add('hidden');
                    document.getElementById('tutorials-menu')?.classList.remove('hidden');
                } else {
                    returnToMenu();
                }
            };
        }

        const nextTutBtnVictory = document.getElementById('next-tut-btn-victory');
        if (nextTutBtnVictory) {
            nextTutBtnVictory.onclick = () => {
                if (currentGame && currentGame.isTutorialMode && currentGame.currentTutorialId) {
                    const currentIndex = TUTORIALS.findIndex(t => t.id === currentGame.currentTutorialId);
                    if (currentIndex !== -1 && currentIndex + 1 < TUTORIALS.length) {
                        const nextStage = TUTORIALS[currentIndex + 1];
                        runTutorial(nextStage);
                    }
                }
            };
        }

        // Death screen actions
        const continueBtnDeath = document.getElementById('continue-btn-death');
        if (continueBtnDeath) {
            continueBtnDeath.onclick = () => {
                continueGame();
            };
        }

        const retryBtnDeath = document.getElementById('retry-btn-death');
        if (retryBtnDeath && degreeSlider) {
            retryBtnDeath.onclick = () => {
                if (currentGame && currentGame.isTutorialMode && currentGame.currentTutorialStage) {
                    runTutorial(currentGame.currentTutorialStage);
                } else {
                    startNewGame(parseInt(degreeSlider.value));
                }
            };
        }

        const menuBtnDeath = document.getElementById('menu-btn-death');
        if (menuBtnDeath) {
            menuBtnDeath.onclick = () => {
                returnToMenu();
            };
        }

        // Pause screen actions
        const resumeBtn = document.getElementById('resume-btn');
        if (resumeBtn) {
            resumeBtn.onclick = () => {
                if (currentGame) currentGame.togglePause();
            };
        }

        const menuBtnPause = document.getElementById('menu-btn-pause');
        if (menuBtnPause) {
            menuBtnPause.onclick = () => {
                returnToMenu();
            };
        }

        // Tutorials menu bindings
        const tutorialsBtnMenu = document.getElementById('tutorials-btn-menu');
        const tutorialsMenu = document.getElementById('tutorials-menu');
        const startMenu = document.getElementById('start-menu');
        const backToMenuBtn = document.getElementById('back-to-menu-btn');
        
        if (tutorialsBtnMenu) {
            tutorialsBtnMenu.onclick = () => {
                currentLang = getCurrentLanguage();
                startMenu?.classList.add('hidden');
                tutorialsMenu?.classList.remove('hidden');
            };
        }
        
        if (backToMenuBtn) {
            backToMenuBtn.onclick = () => {
                tutorialsMenu?.classList.add('hidden');
                startMenu?.classList.remove('hidden');
            };
        }
        
        // Modal button actions
        const modalStartBtn = document.getElementById('tut-modal-start-btn');
        const modalCancelBtn = document.getElementById('tut-modal-cancel-btn');
        
        if (modalStartBtn) {
            modalStartBtn.onclick = () => {
                if (selectedTutorialStage) {
                    runTutorial(selectedTutorialStage);
                }
            };
        }
        
        if (modalCancelBtn) {
            modalCancelBtn.onclick = () => {
                document.getElementById('tutorial-instructions-modal')?.classList.add('hidden');
                selectedTutorialStage = null;
            };
        }
        
    });
</script>

<section id="start-menu">
    <div class="menu-content">
        <header>
            <h1 class="game-title" data-i18n="gameTitle">VOID ESCAPE</h1>
        </header>

        <!-- Grid 2x2 for isolated info containers -->
        <div class="menu-stats-grid">
            <div class="stat-container hunter">
                <div class="stat-label" data-i18n="activeHunters">Active Hunters</div>
                <div class="stat-value" id="hunter-count">-</div>
            </div>
            <div class="stat-container teleport">
                <div class="stat-label" data-i18n="activeTeleports">Active Teleports</div>
                <div class="stat-value" id="teleport-count">-</div>
            </div>
            <div class="stat-container keys">
                <div class="stat-label" data-i18n="activeKeys">Active Keys</div>
                <div class="stat-value" id="keys-count">-</div>
            </div>
            <div class="stat-container pathfinder">
                <div class="stat-label" data-i18n="availablePathfinders">Available Pathfinders</div>
                <div class="stat-value" id="pathfinder-count">-</div>
            </div>
        </div>

        <!-- Maze Degree control group -->
        <div class="control-group">
            <div class="degree-full-row">
                <span class="degree-label" data-i18n="mazeDegree">Maze Degree</span>
                <span class="degree-value" id="degree-val">-</span>
            </div>
            <input type="range" id="maze-degree" aria-label="Ajustar Grau do Labirinto">
            <p class="hint" data-i18n="degreeHint">Controls the grid size. Higher values create larger, more complex mazes.</p>
        </div>

        <div class="control-group switch-group">
            <div class="switch-container">
                <span class="switch-label" data-i18n="safeMode">Safe Mode</span>
                <label class="switch" for="safe-mode">
                    <input type="checkbox" id="safe-mode" aria-label="Safe Mode">
                    <span class="slider"></span>
                </label>
            </div>
            <p class="hint" data-i18n="safeModeHint">When active, no hunters will spawn in the maze.</p>
        </div>

        <div class="menu-tutorials-row">
            <button id="tutorials-btn-menu" class="tutorials-btn" data-i18n="tutorialsMenu">TUTORIALS</button>
        </div>
        <div class="menu-action-btns">
            <button id="start-btn" data-i18n="generateMaze">NEW GAME</button>
            <button id="continue-btn-menu" class="continue-btn" style="display:none" data-i18n="continue">CONTINUE</button>
        </div>
        
        <p class="game-credits" data-i18n="gameCredits">a game by Bernard Rodrigues</p>
    </div>
</section>

<!-- Seção de Seleção de Tutoriais -->
<section id="tutorials-menu" class="hidden">
    <div class="menu-content">
        <header>
            <h1 class="game-title" data-i18n="tutorialsTitle">TUTORIALS</h1>
        </header>
        
        <div class="tutorials-list">
            {#each TUTORIALS as stage, index}
                <button class="tutorial-item-btn" data-stage-id={stage.id} on:click={() => selectTutorial(stage)}>
                    <span class="tut-num">{index + 1}.</span>
                    <span class="tut-title">{stage.title[currentLang] || stage.title['en']}</span>
                </button>
            {/each}
        </div>
        
        <div class="menu-action-btns">
            <button id="back-to-menu-btn" data-i18n="back">BACK</button>
        </div>
    </div>
</section>

<!-- Modal de Instruções do Tutorial -->
<div id="tutorial-instructions-modal" class="hidden">
    <div class="modal-overlay"></div>
    <div class="modal-container">
        <h2 id="tut-modal-title">-</h2>
        <p id="tut-modal-description">-</p>
        <div class="modal-buttons">
            <button id="tut-modal-start-btn" class="modal-confirm-btn" data-i18n="start">START</button>
            <button id="tut-modal-cancel-btn" class="modal-cancel-btn" data-i18n="cancel">CANCEL</button>
        </div>
    </div>
</div>

<section id="story-screen" class="hidden">
    <div class="story-container">
        <div id="story-image-canvas" class="story-image-box">
            <div id="story-image-loader" class="story-loader hidden">
                <div class="spinner"></div>
                <span data-i18n="loading">LOADING...</span>
            </div>
            <img id="story-img" src="" alt="Story Image" style="display: none; max-width: 100%; max-height: 100%;">
        </div>
        <div id="story-dialogue" class="story-dialogue-box">
            <span id="story-text"></span>
            <span id="story-arrow" class="story-arrow hidden">▼</span>
        </div>
        <div class="story-actions">
            <button id="story-skip-btn">SKIP</button>
        </div>
    </div>
</section>

<section id="victory-screen" class="hidden">
    <div class="popup-container victory">
        <h1 data-i18n="victoryTitle">Mission Accomplished</h1>
        <p data-i18n="victoryText">You have successfully navigated the 3D void.</p>
        <p class="victory-stats"><span data-i18n="mapCompletion">MAP COMPLETION</span>: <span id="victory-completion-rate">0%</span></p>
        <p class="victory-stats"><span data-i18n="victoryDeaths">DEATHS</span>: <span id="victory-deaths-count">0</span></p>
        <p class="victory-stats"><span data-i18n="victoryDegree">MAZE DEGREE</span>: <span id="victory-maze-degree">0</span></p>
        <p class="victory-stats"><span data-i18n="victoryTime">COMPLETION TIME</span>: <span id="victory-completion-time">00:00</span></p>
        <p class="victory-stats"><span data-i18n="victoryMana">MANA COLLECTED</span>: <span id="victory-mana-count">0/0</span></p>
        <div class="end-game-btns">
            <button id="next-tut-btn-victory" class="end-btn hidden" data-i18n="nextTutorial">NEXT TUTORIAL</button>
            <button id="restart-btn-victory" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button>
            <button id="menu-btn-victory" class="end-btn" data-i18n="mainMenu">MAIN MENU</button>
        </div>
    </div>
</section>

<section id="game-over-screen" class="hidden">
    <div class="popup-container death">
        <h1 data-i18n="gameOverTitle">Terminated</h1>
        <p data-i18n="gameOverText">You were caught by the void hunters.</p>
        <div class="end-game-btns">
            <button id="continue-btn-death" class="end-btn continue-highlight" data-i18n="continue">CONTINUE</button>
            <button id="retry-btn-death" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button>
            <button id="menu-btn-death" class="end-btn" data-i18n="mainMenu">MAIN MENU</button>
        </div>
    </div>
</section>

<section id="pause-screen" class="hidden">
    <div class="popup-container pause">
        <h1 data-i18n="pauseTitle">PAUSED</h1>
        <div class="end-game-btns">
            <button id="resume-btn" class="end-btn continue-highlight" data-i18n="resume">RESUME</button>
            <button id="menu-btn-pause" class="end-btn" data-i18n="mainMenu">MAIN MENU</button>
        </div>
    </div>
</section>

<div id="saving-indicator" class="hidden"><span class="saving-icon">💾</span> <span data-i18n="saving">SAVING...</span></div>

<main id="game-container">
    <!-- Mobile Pause Button -->
    <button id="mobile-pause-btn" class="hidden" aria-label="Pause Game">✕</button>
    <!-- Mobile Teleport Exit Button -->
    <button id="mobile-teleport-exit-btn" class="hidden" aria-label="Exit Teleport Map">✕</button>

    <!-- Left HUD Panel (Keys & Pathfinders) -->
    <div id="left-hud-panel" class="intro-hidden">
        <div class="hud-item-group">
            <div class="keys-title" data-i18n="hudKeys">KEYS</div>
            <div class="keys-counter">
                <span id="keys-collected-count">0</span> / <span id="keys-total-count">0</span>
            </div>
            <div id="keys-list-container">
                <!-- Dynamically populated key indicator dots -->
            </div>
        </div>
        <div class="hud-item-group" id="pathfinder-hud-group">
            <div class="pathfinders-title" data-i18n="hudPathfinders">PATHFINDERS</div>
            <div class="pathfinders-counter">
                <span id="pathfinders-remaining-count">0</span> / <span id="pathfinders-total-count">0</span>
            </div>
        </div>
    </div>

    <!-- 2D Map Container and its Top Marquee -->
    <div id="map-area-container" class="intro-hidden">
        <!-- Row for desktop HUD: contains Mana and Hunter Status -->
        <div id="desktop-hud-row">
            <div id="mana-counter-desktop" class="mana-panel-hud">
                <span class="mana-icon">✨</span> <span class="mana-label" data-i18n="hudMana">MANA:</span> <span id="mana-collected-count-desktop">0</span>/<span id="mana-total-count-desktop">0</span>
            </div>
            <!-- Hunter Status Marquee Panel (centered above the 2D map) -->
            <div id="hunter-status-panel">
                <span class="status-label" data-i18n="statusLabel">HUNTER STATUS:</span>
                <div class="status-marquee-container">
                    <span id="hunter-status-val" class="status-marquee-text status--scanning" data-i18n="statusScanning">SCANNING</span>
                </div>
            </div>
            <div id="jelly-portal-counter-desktop" class="jelly-portal-panel-hud">
                <div class="jelly-balls-container">
                    <span class="jelly-ball gold-ball-1"></span>
                    <span class="jelly-ball gold-ball-2"></span>
                </div>
                <span class="jelly-portal-count-label">x<span id="jelly-portal-count-desktop">0</span></span>
            </div>
        </div>
        <!-- Primary 2D Navigation Map -->
        <div style="position: relative; display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 90vw; margin-bottom: calc(var(--h-unit) * 2); margin-bottom: calc(var(--d-h-unit) * 2);">
            <canvas id="main-2d-canvas" aria-label="2D Navigation Map" style="margin-bottom: 0;"></canvas>
            <button id="mobile-jelly-portal-btn" aria-label="Jelly God Portal">
                <svg class="jelly-portal-spiral" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round">
                    <path d="M12 12a1 1 0 0 1 1 1c0 1.1-.9 2-2 2a3 3 0 0 1-3-3c0-2.2 1.8-4 4-4a5 5 0 0 1 5 5c0 3.3-2.7 6-6 6a7 7 0 0 1-7-7c0-4.4 3.6-8 8-8a9 9 0 0 1 9 9" />
                </svg>
            </button>
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
        
        <!-- Row for mobile HUD: contains Mana (aligned left) and Proximeter -->
        <div id="mobile-proximeter-row">
            <div id="mana-counter-mobile" class="mana-panel-hud">
                <span class="mana-icon">✨</span> <span class="mana-label" data-i18n="hudMana">MANA:</span> <span id="mana-collected-count-mobile">0</span>/<span id="mana-total-count-mobile">0</span>
            </div>
            <!-- Proximeter Container -->
            <div id="proximeter-container" class="hidden">
                <div class="proximeter-label" data-i18n="proximityDetector">PROXIMITY DETECTOR</div>
                <div class="proximeter-bar">
                    <span class="proximeter-cell" data-index="1"></span>
                    <span class="proximeter-cell" data-index="2"></span>
                    <span class="proximeter-cell" data-index="3"></span>
                    <span class="proximeter-cell" data-index="4"></span>
                    <span class="proximeter-cell" data-index="5"></span>
                    <span class="proximeter-cell" data-index="6"></span>
                    <span class="proximeter-cell" data-index="7"></span>
                    <span class="proximeter-cell" data-index="8"></span>
                    <span class="proximeter-cell" data-index="9"></span>
                    <span class="proximeter-cell" data-index="10"></span>
                </div>
            </div>
            <div id="jelly-portal-counter-mobile" class="jelly-portal-panel-hud">
                <div class="jelly-balls-container">
                    <span class="jelly-ball gold-ball-1"></span>
                    <span class="jelly-ball gold-ball-2"></span>
                </div>
                <span class="jelly-portal-count-label">x<span id="jelly-portal-count-mobile">0</span></span>
            </div>
        </div>

        <!-- Bottom HUD Container -->
        <div id="bottom-hud-container" class="intro-hidden">
            <div id="floor-display" aria-live="polite"><span class="hud-label" data-i18n="hudFloor">Floor</span> <span id="current-floor">0</span></div>
            <div id="visited-display" aria-live="polite"><span class="hud-label" data-i18n="hudVisited">Visited</span> <span class="visited-value"><span id="visited-percent">0</span>%</span></div>
        </div>
    </div>

    <!-- Right HUD Panel (Legend & Controls) -->
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
    
    <!-- Mobile Controls Panel -->
    <nav id="mobile-controls" class="hidden">
        <button id="mobile-down" class="mobile-btn" disabled aria-label="Go Down">▼</button>
        <button id="mobile-map" class="mobile-btn" disabled aria-label="Open Map" data-i18n="map">MAP</button>
        <button id="mobile-up" class="mobile-btn" disabled aria-label="Go Up">▲</button>
    </nav>
    
    <!-- 3D Holographic Map Container -->
    <div id="map3d-container" class="hidden"></div>
</main>

<section id="loading-screen" class="hidden">
    <div class="story-loader">
        <div class="spinner"></div>
        <span data-i18n="generatingMaze">GENERATING MAZE...</span>
    </div>
</section>
