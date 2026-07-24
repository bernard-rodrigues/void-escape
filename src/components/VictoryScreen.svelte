
<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { gameState } from '../stores';
    const dispatch = createEventDispatcher();
</script>

<div id="victory-screen" class:hidden={$gameState.currentScreen !== 'victory'}>
    <h1 class="glitch" data-text="ESCAPE SUCCESSFUL" data-i18n="escapeSuccessful">ESCAPE SUCCESSFUL</h1>
    <p data-i18n="mazeCompleted">You have successfully navigated the maze.</p>
    <p><span data-i18n="mapExplored">Map Explored:</span> <span id="victory-percent">{$gameState.visitedPercent}</span>%</p>
    <div class="menu-buttons">
        <button id="restart-btn-victory" on:click={() => dispatch('retry')} data-i18n="restartSystem">RESTART SYSTEM</button>
        <button id="menu-btn-victory" on:click={() => dispatch('menu')} data-i18n="returnMenu">RETURN TO MENU</button>
    </div>
</div>
