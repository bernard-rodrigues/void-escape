
<script lang="ts">
    import { onMount } from 'svelte';
    import { Engine } from './engine/engine';
    import { loadSave, clearSave } from './engine/save';
    import { gameState, engineStore } from './stores';
    import { localizeDOM } from './engine/translations';
    
    import MainMenu from './components/MainMenu.svelte';
    import PauseMenu from './components/PauseMenu.svelte';
    import GameOverScreen from './components/GameOverScreen.svelte';
    import VictoryScreen from './components/VictoryScreen.svelte';
    import Storytelling from './components/Storytelling.svelte';
    import GameHUD from './components/GameHUD.svelte';

    let currentGame: any = null;

    function startNewGame(event: any) {
        if (currentGame) currentGame.destroy();
        clearSave();
        gameState.update(s => ({ ...s, currentScreen: 'game', degree: event.detail.degree }));
        
        // Wait a tick for DOM elements to mount since Engine uses document.getElementById
        setTimeout(() => {
            currentGame = new Engine(event.detail.degree, 0.45);
            engineStore.set(currentGame);
        }, 10);
    }

    function continueGame() {
        const snapshot = loadSave();
        if (!snapshot) return;
        if (currentGame) currentGame.destroy();
        gameState.update(s => ({ ...s, currentScreen: 'game' }));
        setTimeout(() => {
            currentGame = new Engine(snapshot.degree, snapshot.branchingFactor, snapshot);
            engineStore.set(currentGame);
        }, 10);
    }

    function returnToMenu() {
        if (currentGame) currentGame.destroy();
        gameState.update(s => ({ ...s, currentScreen: 'menu' }));
    }

    function resumeGame() {
        if (currentGame) currentGame.togglePause();
    }
    
    function retryGame() {
        if (currentGame) {
            const deg = currentGame.degree;
            currentGame.destroy();
            gameState.update(s => ({ ...s, currentScreen: 'game' }));
            setTimeout(() => {
                currentGame = new Engine(deg, 0.45);
                engineStore.set(currentGame);
            }, 10);
        }
    }
</script>

<MainMenu on:start={startNewGame} on:continue={continueGame} />
<PauseMenu on:resume={resumeGame} on:menu={returnToMenu} />
<GameOverScreen on:continue={continueGame} on:retry={retryGame} on:menu={returnToMenu} />
<VictoryScreen on:retry={retryGame} on:menu={returnToMenu} />
<Storytelling />
<GameHUD />
