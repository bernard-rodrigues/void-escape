
<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { gameState } from '../stores';
    const dispatch = createEventDispatcher();
</script>

<div id="pause-screen" class:hidden={$gameState.currentScreen !== 'pause'}>
    <h1 data-i18n="systemPaused">SYSTEM PAUSED</h1>
    <div class="menu-buttons">
        <button id="resume-btn" on:click={() => dispatch('resume')} data-i18n="resume">RESUME</button>
        <button id="menu-btn-pause" on:click={() => dispatch('menu')} data-i18n="returnMenu">RETURN TO MENU</button>
    </div>
</div>
