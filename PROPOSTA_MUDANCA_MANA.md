# Proposta de Mudança - Coleta de Mana, Sprites de Chave/Mana e Ajustes HUD

Este documento descreve as alterações significativas na mecânica de Void Escape para incluir um novo item coletável, a **Mana**, atualizar os ícones visuais para arquivos PNG reais em alta resolução e criar contadores HUD responsivos adaptados para mobile e desktop.

---

## 1. Resumo das Alterações
* **Mecânica de Geração de Mana ([src/engine/maze3d.ts](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/src/engine/maze3d.ts)):**
  * Registro de um novo tipo de bloco `this.TYPES.MANA = 9`.
  * Criação do método `placeManas()` para identificar todos os becos sem saída (*deadends*) do labirinto que não foram preenchidos por chaves, teleportes, estátuas, início, saída ou elevadores, preenchendo-os com Mana.
* **Classe Engine ([src/engine/engine.ts](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/src/engine/engine.ts)):**
  * **Carregamento de Sprites:** Alteração do sprite da chave para `assets/images/key.png` e carregamento de `assets/images/mana.png`.
  * **Controle de Estado:** Adição de variáveis `manaCollected` e `totalMana`. O total é calculado no construtor percorrendo o labirinto 3D gerado.
  * **Renderização no Mapa 2D:** Exibição da Mana nos becos sem saída em fundo escuro `#111111` desde o início do jogo (assim como as chaves), flutuando com efeito senoidal de bobbing. Ao ser coletada, a célula passa para o estado `VISITED`.
  * **Renderização no Mapa Isométrico:**
    * Atualização de `drawKey` e criação de `drawMana` para utilizar os respectivos sprites (`this.keyImage` e `this.manaImage`) escalados e flutuantes em perspectiva.
    * Inclusão do tipo Mana na visibilidade global inicial e renderização do bloco de fundo escuro no mapa isométrico.
  * **Renderização 3D:** Criação de geometrias 3D (`THREE.IcosahedronGeometry`) e materiais específicos de cor ciano/azul neon pulsantes para as manas no mapa holográfico 3D.
  * **Mecânica de Coleta:** Integração do tipo Mana na colisão de movimentação do jogador (`markOrCollect`), adicionando a lógica de incremento, baner informativo e persistência de savegame.
* **Savegame ([src/engine/save.ts](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/src/engine/save.ts)):**
  * Inclusão de `manaCollected` e `totalMana` no snapshot serializado e desserializado do savegame do localStorage.
* **Interface Gráfica ([src/engine/ui.ts](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/src/engine/ui.ts) & [src/App.svelte](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/src/App.svelte)):**
  * **DOM e Layout Responsivo:** Criação de duas linhas HUD distintas (`#desktop-hud-row` e `#mobile-proximeter-row`) contendo os seletores do contador de mana.
  * Ocultação e exibição inteligente via CSS (Media Queries) para que a Mana fique à esquerda do detector de proximidade no mobile e à esquerda do Hunter Status no desktop.
  * **Traduções ([src/engine/translations.ts](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/src/engine/translations.ts)):** Adição das chaves de texto localizadas de Mana para `en`, `pt`, `ja` e `es`.
  * **Tela de Vitória:** Exibição da contagem total de manas coletadas na tela de missão cumprida.

---

## 2. Justificativa
* **Design Premium e Alta Resolução:** Substituir a chave em SVG antigo (vetor simples) por um PNG em alta definição de cor brilhante e adicionar a mana como cristal azul dá ao jogo um visual gráfico profissional e polido.
* **Fidelidade à Estrutura e Exploração do Labirinto:** Preencher os becos sem saída com manas dá propósito às rotas erradas e becos sem saída do labirinto, recompensando o jogador por explorar todas as ramificações e aumentando a profundidade estratégica.
* **Layout Responsivo Excelente:** Posicionar o contador de mana em locais diferentes (esquerda do proximeter no mobile e esquerda do hunter status no desktop) previne sobreposição de elementos na tela e mantém a interface limpa e perfeitamente equilibrada em todas as resoluções.
* **Consistência de Estado e Savegame:** Integrar no localStorage garante que o progresso da coleta de manas sobreviva a recarregamentos de página, mantendo a integridade da experiência.
