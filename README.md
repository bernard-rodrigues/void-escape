# VOID ESCAPE

Um simulador de exploração de labirinto 3D com temática cyberpunk, desafios de navegação vertical e entidades hostis.

## 🚀 Sobre o Projeto

**Void Escape** é uma experiência interativa onde o jogador deve navegar por um labirinto gerado proceduralmente em três dimensões. O jogo combina a simplicidade da visualização 2D com a profundidade estratégica de um mapa holográfico 3D para superar os "Caçadores do Vazio".

### Principais Funcionalidades

- **Geração Procedural:** Configure o tamanho (`Maze Degree`) e a complexidade (`Branching Factor`) do labirinto.
- **Múltiplos Inimigos:** Caçadores que escalam com a dificuldade e rastreiam seus passos assim que encontram seu rastro.
- **Sistema de Mapas Dual:**
  - **Mapa 2D:** Navegação tática andar por andar.
  - **Holograma 3D:** Visão espacial completa com indicação de elevadores e corredores conhecidos.
- **Física de Movimento:** Suporte a controles "Tanque" (clássico) e "Direto" (moderno), com sistema de deslizamento por paredes.
- **Alertas de Risco:** Interface dinâmica que sinaliza quando você está sendo caçado.

## 🎮 Como Jogar

1.  **Configuração:** No menu inicial, escolha o tamanho do mapa e o modo de controle.
2.  **Objetivo:** Encontre o **bloco verde** (Saída) enquanto evita os **pontos roxos** (Inimigos).
3.  **Exploração:** Use os elevadores (▲/▼) para transitar entre os andares do labirinto.

### Controles
- **WASD / Setas:** Mover e Girar.
- **Q / E ou PgUp / PgDn:** Subir ou Descer andares.
- **M:** Ativar/Desativar Mapa Holográfico 3D.

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6+):** Lógica de jogo e IA.
- **Three.js:** Renderização do mapa holográfico 3D.
- **HTML5 Canvas:** Motor de renderização do mapa 2D.
- **CSS3:** Interface futurista com efeitos de *glassmorphism* e neon.

## 📐 Estrutura de Arquivos

- `index.html`: Estrutura da UI e containers de renderização.
- `style.css`: Estilização cyberpunk e animações de alerta.
- `script.js`: Engine principal, gerador de labirinto e lógica dos Caçadores.

---
Desenvolvido como um protótipo de alta fidelidade para exploração procedural.
