# Proposta de Refatoração: Representação de Labirinto por Array Unidimensional (Flat Array)

Este documento apresenta a proposta de refatoração para substituir a estrutura de array tridimensional de arrays (`Array(Array(Int8Array))`) por um único array unidimensional contíguo (`Int8Array` flat) no projeto **Void Escape**.

---

## 1. Resumo das Alterações

O labirinto 3D do jogo é atualmente representado por uma matriz tridimensional em `this.maze`, consumindo memória e exigindo navegação múltipla de ponteiros. Propõe-se linearizar esta representação em um `Int8Array` de tamanho $S \times S \times S$ (onde $S = \text{this.size}$).

A fórmula de linearização de coordenadas tridimensionais $(x, y, z)$ para um índice unidimensional único é:
$$\text{index}(x, y, z) = x \cdot S^2 + y \cdot S + z$$

Para manter o código legível e ao mesmo mesmo tempo performático, o array unidimensional retornado pelo gerador de labirinto será enriquecido com métodos de conveniência:
*   `maze.size`: tamanho da dimensão da grade ($S$).
*   `maze.get(x, y, z)`: método para recuperar o valor de uma célula.
*   `maze.set(x, y, z, val)`: método para alterar o valor de uma célula.

---

## 2. Justificativa Técnica

*   **Eficiência de Cache e Localidade:** Um TypedArray unidimensional é alocado como um bloco físico contíguo de memória. A CPU consegue pré-carregar os dados de forma extremamente otimizada, reduzindo *cache misses*.
*   **Redução de Overhead do Garbage Collector:** Alocar e desalocar um único array plano em vez de centenas de sub-arrays reduz o tempo de ciclo do Garbage Collector, eliminando travamentos de frame (stutters) durante a geração de novos labirintos.
*   **Otimização de Pathfinder:** Loops críticos em `pathfinder.js` (como A* e 0-1 BFS do proximeter) terão acessos diretos por índice numérico plano, acelerando a busca de caminhos a cada frame.

---

## 3. Plano de Implementação por Módulo

### A. Modificações em `maze3d.js`
*   Reescrever `initMatrix()` para retornar um `Int8Array` de tamanho $\text{size}^3$.
*   Implementar o método auxiliar privado `_idx(x, y, z)` para mapeamento interno de índices.
*   Ajustar todos os acessos de escrita/leitura na geração do labirinto para utilizar `this.matrix[this._idx(x, y, z)]`.
*   Anexar os helpers `.get(x, y, z)` e `.set(x, y, z, val)` ao objeto retornado.

### B. Modificações em `pathfinder.js`
*   Substituir acessos `maze[x][y][z]` por indexação linear direta $x \cdot S^2 + y \cdot S + z$ para máxima performance de CPU nas rotinas críticas:
    *   `aStarPath`
    *   `aStarDistance`
    *   `proximeterDistance`
    *   `bfsNearestUnvisited`

### C. Modificações em `hunter.js`
*   Ajustar o método `getValidNeighbors` e a navegação do caçador para usar `matrix.get(x, y, z)`.

### D. Modificações em `engine.js`
*   Substituir todas as leituras e escritas de `this.maze[x][y][z]` por `this.maze.get(x, y, z)` e `this.maze.set(x, y, z, val)`.
*   Ajustar as funções de renderização 2D/3D e física de colisão para a nova interface do labirinto.

---

## 4. Análise de Risco e Garantia de Correção

*   **Risco de Regressão:** Alterar a estrutura de dados principal do jogo pode quebrar a física ou a renderização caso algum acesso passe despercebido.
*   **Mitigação:** Faremos uma revisão cirúrgica em cada arquivo e validaremos o comportamento do jogo abrindo o servidor de desenvolvimento.
