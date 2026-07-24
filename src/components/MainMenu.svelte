
<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
    import { gameState } from '../stores';
    import { CONFIG } from '../engine/config';
    import { hasSave } from '../engine/save';
    import { localizeDOM } from '../engine/translations';

    const dispatch = createEventDispatcher();

    let safeMode = false;
    let degree = 8;
    
    $: canContinue = hasSave();
    $: hunterCount = safeMode ? 0 : CONFIG.getHunterCount(degree);
    $: teleportCount = CONFIG.getTeleportCount(degree);
    $: keysCount = hunterCount * 2;
    $: pathfinderCount = CONFIG.getPathfinderCount(degree);

    function handleStart() {
        dispatch('start', { degree, safeMode });
    }
    
    function handleContinue() {
        dispatch('continue');
    }

    onMount(() => {
        try { localizeDOM(); } catch(e){}
    });
</script>

<div id="start-menu" class:hidden={$gameState.currentScreen !== 'menu'}>
    <h1 class="glitch" data-text="VOID ESCAPE">VOID ESCAPE</h1>
    
    <div class="menu-options">
        <label for="maze-degree" data-i18n="mazeComplexity">MAZE COMPLEXITY (DEGREE): <span id="degree-val">{degree}</span></label>
        <input type="range" id="maze-degree" bind:value={degree} min="3" max="16" step="1">
        
        <div class="checkbox-wrapper">
            <input type="checkbox" id="safe-mode" bind:checked={safeMode}>
            <label for="safe-mode" data-i18n="safeMode">SAFE MODE (NO HUNTERS)</label>
        </div>

        <div class="stats-preview">
            <p><span data-i18n="hunters">HUNTERS:</span> <span id="hunter-count" style="color: {hunterCount > 0 ? '#f00' : '#88ccff'}">{hunterCount}</span></p>
            <p><span data-i18n="teleports">TELEPORTS:</span> <span id="teleport-count">{teleportCount}</span></p>
            <p><span data-i18n="keysLabel">KEYS:</span> <span id="keys-count">{keysCount}</span></p>
            <p><span data-i18n="pathfindersLabel">PATHFINDERS:</span> <span id="pathfinder-count">{pathfinderCount}</span></p>
        </div>
    </div>

    <div class="menu-buttons">
        <button id="start-btn" on:click={handleStart} data-i18n="startSystem">START SYSTEM</button>
        {#if canContinue}
            <button id="continue-btn-menu" on:click={handleContinue} data-i18n="continue">CONTINUE</button>
        {/if}
    </div>
</div>
