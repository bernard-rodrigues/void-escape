# Proposta de Refatoração: Modularização de `engine.js`

Este documento apresenta a proposta para refatoração e modularização do arquivo [engine.js](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/engine.js), reduzindo o acoplamento do código de mecânica do jogo com a interface de usuário (DOM) e eventos de entrada.

---

## 1. Resumo das Alterações

O arquivo [engine.js](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/engine.js) atua hoje como uma "Classe Deus" (God Class), acumulando lógica de física, renderização 2D/3D, controle de eventos (touch/keys) e manipulação direta de mais de 15 elementos HTML (UI). 

Propõe-se dividir essas responsabilidades em três módulos altamente coesos e fracamente acoplados:

1. **`ui.js` (Classe `UIManager`):** Responsável exclusiva por acessar e gerenciar a interface com o usuário (DOM), ocultando e exibindo telas (vitória/morte), atualizando o indicador de andares, proximeter, contadores de cooldown, uses do pathfinder e banners.
2. **`input.js` (Classe `InputHandler`):** Responsável por escutar e armazenar os inputs do usuário (teclado, touch e botões do celular) de forma limpa e centralizada.
3. **`engine.js` (Classe `Engine`):** Permanecerá focada estritamente no loop de jogo principal, física de colisões, movimentação e renderização de mapas 2D/3D.

---

## 2. Justificativa Técnica

* **Separação de Conceitos (Separation of Concerns):** A lógica principal do jogo não deve conter acessos estáticos a elementos DOM (`document.getElementById`). Isso torna o código poluído e difícil de testar.
* **Redução do Arquivo Principal:** A remoção do gerenciamento visual direto e listeners de entrada reduzirá o tamanho do [engine.js](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/engine.js) em aproximadamente 250 a 300 linhas de código redundante.
* **Manutenibilidade (DRY):** Se decidirmos alterar a estrutura visual do jogo ou adicionar novas interfaces (ex: menu de configurações), precisaremos alterar apenas o módulo de UI, sem risco de corromper a física de colisões ou renderização do labirinto.

---

## 3. Estrutura dos Novos Módulos

### Módulo A: `ui.js` (UIManager)
Esta classe concentrará toda a gerência de DOM. 
```javascript
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
        
        this.infoTimeout = null;
        this.teleportInfoTimeout = null;
    }

    updateFloorUI(z, hasUp, hasDown) {
        if (this.uiFloorSpan) this.uiFloorSpan.innerText = z;
        const upBtn = document.getElementById('mobile-up');
        const downBtn = document.getElementById('mobile-down');
        if (upBtn) upBtn.disabled = !hasUp;
        if (downBtn) downBtn.disabled = !hasDown;
    }

    updateProximeterUI(dist, maxVal) {
        if (!this.uiProximeterContainer) return;
        this.uiProximeterContainer.classList.remove('hidden');
        this.uiProximeterCells.forEach(cell => {
            const idx = parseInt(cell.getAttribute('data-index'));
            if (maxVal - dist >= idx) {
                cell.classList.add('active');
            } else {
                cell.classList.remove('active');
            }
        });
        if (this.uiProximeterBar) {
            if (dist === 1) {
                this.uiProximeterBar.classList.add('critical-alert');
            } else {
                this.uiProximeterBar.classList.remove('critical-alert');
            }
        }
    }

    // ... outros métodos: showVictory(), showDeath(), toggleTeleportWarning(), showInfoBanner()
}
```

### Módulo B: `input.js` (InputHandler)
Esta classe encapsulará o tratamento de teclado e touch do dispositivo.
```javascript
export class InputHandler {
    constructor() {
        this.keys = {};
        this.touchStart = null;
        this.touchMoveVector = null;
        this.preventScroll = ['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' ', 'pageup', 'pagedown'];
        this.init();
    }

    init() {
        this.handleKeyDown = e => {
            const key = e.key.toLowerCase();
            this.keys[key] = true;
            if (this.preventScroll.includes(key)) e.preventDefault();
        };
        this.handleKeyUp = e => {
            this.keys[e.key.toLowerCase()] = false;
        };

        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    setupTouch(canvas3DActiveCheck, isGameOverCheck) {
        this.handleTouchStart = e => {
            if (canvas3DActiveCheck() || isGameOverCheck() || e.target.closest('button')) return;
            if (e.cancelable) e.preventDefault();
            this.touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        };

        this.handleTouchMove = e => {
            if (!this.touchStart || canvas3DActiveCheck() || isGameOverCheck()) return;
            if (e.cancelable) e.preventDefault();
            const dx = e.touches[0].clientX - this.touchStart.x;
            const dy = e.touches[0].clientY - this.touchStart.y;
            const mag = Math.sqrt(dx * dx + dy * dy);
            if (mag > 10) this.touchMoveVector = { x: dx / mag, y: dy / mag };
        };

        this.handleTouchEnd = () => {
            this.touchStart = null;
            this.touchMoveVector = null;
        };

        window.addEventListener('touchstart', this.handleTouchStart, { passive: false });
        window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
        window.addEventListener('touchend', this.handleTouchEnd);
    }

    destroy() {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('keyup', this.handleKeyUp);
        if (this.handleTouchStart) {
            window.removeEventListener('touchstart', this.handleTouchStart);
            window.removeEventListener('touchmove', this.handleTouchMove);
            window.removeEventListener('touchend', this.handleTouchEnd);
        }
    }
}
```

---

## 4. Integração no `Engine`

Com os novos módulos, o construtor e métodos associados em `Engine` serão drasticamente simplificados:

```diff
-        this.canvas = document.getElementById('main-2d-canvas');
-        this.ctx = this.canvas.getContext('2d');
-        this.uiFloorSpan = document.getElementById('current-floor');
-        // ... mais 15 seletores de DOM ...
-        this.keys = {};
-        this.touchStart = null;
+        // Instancia os novos gerenciadores modulares
+        this.ui = new UIManager(this);
+        this.input = new InputHandler();
+        this.canvas = this.ui.canvas;
+        this.ctx = this.canvas.getContext('2d');
```

E a lógica de loops de movimentação acessará `this.input.keys` e `this.input.touchMoveVector`.
