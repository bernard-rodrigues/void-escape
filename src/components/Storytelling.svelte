
<script lang="ts">
    import { gameState } from '../stores';
    // Engine actually manipulates the inner contents of story-screen manually still.
    // So we just render the container structure so document.getElementById doesn't fail!
</script>

<section id="story-screen" class:hidden={$gameState.currentScreen !== 'story'}>
    <div class="story-container">
        <div id="story-image-canvas" class="story-image-box">
            <div id="story-image-loader" class="story-loader hidden">
                <div class="spinner"></div>
                <span data-i18n="loading">LOADING...</span>
            </div>
            <img id="story-img" src="" alt="Story Image" style="display: none; max-width: 100%; max-height: 100%;">
        </div>
        <div id="story-dialogue" class="story-dialogue-box">
            <p id="story-text"></p>
            <div id="story-arrow" class="blinking-arrow hidden">▼</div>
        </div>
    </div>
    <button id="story-skip-btn" class="story-skip hidden">SKIP ⏭</button>
</section>
