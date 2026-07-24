
<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { gameState } from '../stores';
    const dispatch = createEventDispatcher();
</script>

<div id="game-over-screen" class:hidden={$gameState.currentScreen !== 'gameover'}>
    <h1 class="glitch" data-text="SIGNAL LOST" data-i18n="signalLost">SIGNAL LOST</h1>
    <p data-i18n="hunterCaught">You were caught by the Void Hunter.</p>
    <div class="menu-buttons">
        {#if $gameState.hasSave}
            <button id="continue-btn-death" on:click={() => dispatch('continue')} data-i18n="continue">CONTINUE</button>
        {/if}
        <button id="retry-btn-death" on:click={() => dispatch('retry')} data-i18n="retry">RETRY</button>
        <button id="menu-btn-death" on:click={() => dispatch('menu')} data-i18n="returnMenu">RETURN TO MENU</button>
    </div>
</div>
