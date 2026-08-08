/**
 * Documentação dos Caracteres suportados nos layouts de Tutoriais (layers):
 * 
 * '#' - Parede (WALL). Bloqueia a passagem do jogador e dos caçadores.
 * '.' - Caminho normal (PATH). Espaço vazio por onde o jogador e inimigos transitam.
 * 'S' - Portal de Entrada / Ponto de Início (START/TELEPORT). Posição onde o jogador surge.
 *       Funciona também como portal de teletransporte.
 * 'E' - Portal de Saída (EXIT). O objetivo final do jogador após coletar as chaves.
 * 'T' - Portal de Teletransporte (TELEPORT). Permite transição para outros portais descobertos.
 * 'K' - Chave (KEY). Item essencial para abrir a saída.
 * 'M' - Mana (MANA). Carga que permite criar portais de gelatina.
 * 'A' - Estátua (STATUE). Estátuas do deus jeléia.
 * 'H' - Caçador (HUNTER). Spawn de um caçador inimigo ativo em estado de patrulha ('WANDERING').
 *       Internamente gera um caminho normal ('.') e inicia um caçador sobre ele.
 */
export interface HunterBehavior {
    static?: boolean;   // Se true, o hunter ficará imóvel no mapa
    respawn?: boolean;  // Se true, o hunter será respawnado depois que for abatido (default true)
    fixed?: boolean;    // Se true, ao morrer para este hunter, ele irá aparecer na mesma posição inicial
}

export interface TutorialStage {
    id: string;
    title: {
        en: string;
        ptBr: string;
        ja: string;
        es: string;
    };
    description: {
        en: string;
        ptBr: string;
        ja: string;
        es: string;
    };
    layers: string[][]; // layers[z][y] contendo caracteres do eixo X (qualquer dimensão)
    pathfinders?: number; // Cargas de localizadores disponíveis no tutorial (padrão 0)
    mana?: number; // Mana inicial disponível no tutorial (padrão 0)
    jellyPortals?: number; // Portais de gelatina iniciais disponíveis no tutorial (padrão 0)
    revealed?: boolean; // Se true, o mapa e caminhos já vêm visíveis
    hunterBehavior?: HunterBehavior; // Comportamento customizado dos caçadores no tutorial
    images?: string[]; // Array de URLs de imagens armazenadas na pasta tutorials
}

export const TUTORIALS: TutorialStage[] = [
    {
        id: "tutorial_keys",
        title: {
            en: "Key Collection",
            ptBr: "Coleta de Chaves",
            ja: "鍵集め",
            es: "Recolección de Llaves"
        },
        description: {
            en: "Collect all available keys to unlock the exit portal.{img}The number of remaining keys is displayed in the game info panel.{img}Once all keys are collected, the exit portal will be unlocked.",
            ptBr: "Capture todas as chaves disponíveis para liberar a saída.{img}O número de chaves restantes é exibido no painel de informações do jogo.{img}Ao coletar todas as chaves, o portal de saída será liberado.{img}",
            ja: "すべての鍵を集めて、出口ポータルを開放しよう。",
            es: "Recoge todas las llaves disponibles para liberar la salida."
        },
        images: ["/assets/images/tutorials/tutorial1-1.png", "/assets/images/tutorials/tutorial1-2.png", "/assets/images/tutorials/tutorial1-3.png"],
        layers: [
            // z = 0 (Andar de transição - paredes sólidas)
            [
                "#######",
                "#######",
                "#######",
                "#######",
                "#######"
            ],
            // z = 1 (Único andar jogável)
            [
                "#######",
                "S....K#",
                "###.###",
                "#K....E",
                "#######"
            ],
            // z = 2 (Andar de transição superior - paredes sólidas)
            [
                "#######",
                "#######",
                "#######",
                "#######",
                "#######"
            ]
        ],
        pathfinders: 0,
        mana: 0,
        jellyPortals: 0
    },
    {
        id: "tutorial_elevators",
        title: {
            en: "Elevators",
            ptBr: "Elevadores",
            ja: "エレベーター",
            es: "Ascensores"
        },
        description: {
            en: "Use the elevators to reach the floors above and below.",
            ptBr: "Utilize os elevadores para visitar os andares adjacentes.",
            ja: "エレベーターを使って、上下の階を移動しよう。",
            es: "Utiliza los ascensores para visitar los pisos adyacentes."
        },
        layers: [
            [
                "#######",
                "#######",
                "#######",
                "#######",
                "#######"
            ],
            [
                "#######",
                "S.....E",
                "#######",
                "#######",
                "#######"
            ],
            [
                "#######",
                "###.###",
                "#######",
                "#######",
                "#######"
            ],
            [
                "#######",
                "#K...K#",
                "#######",
                "#######",
                "#######"
            ],
            [
                "#######",
                "###.###",
                "#######",
                "#######",
                "#######"
            ],
            [
                "#######",
                "###.###",
                "###.###",
                "###K###",
                "#######"
            ]
        ],
        pathfinders: 0,
        mana: 0,
        jellyPortals: 0
    },
    {
        id: "tutorial_teleport",
        title: {
            en: "Teleportation",
            ptBr: "Teletransporte",
            ja: "テレポート",
            es: "Teletransporte"
        },
        description: {
            en: "Use the teleporters to move between different areas of the level. Step onto a teleporter block, activate it with an action button, then select another available teleporter to warp there.",
            ptBr: "Utilize os teleportes para se mover entre diferentes áreas do nível. Ao pisar sobre um bloco de teleporte, acione-o com um dos botões de ação e selecione outro teleporte disponível para se mover para ele.",
            ja: "テレポーターを使えば、レベル内の離れたエリアへ移動できる。テレポートブロックの上に乗ってアクションボタンで起動し、行き先のテレポーターを選ぼう。",
            es: "Utiliza los teletransportes para moverte entre diferentes áreas del nivel. Párate en un bloque de teletransporte, actívalo con uno de los botones de acción y selecciona otro teletransportador disponible para moverte a él."
        },
        layers: [
            [
                "#######",
                "#######",
                "#######",
                "#######",
                "#######"
            ],
            [
                "#######",
                "S..#.T#",
                "##.#.##",
                "#K.#..E",
                "#######"
            ],
            [
                "#######",
                "###.###",
                "#######",
                "#######",
                "#######"
            ]
        ],
        pathfinders: 0,
        mana: 0,
        jellyPortals: 0,
        revealed: true
    },
    {
        id: "tutorial_hunters",
        title: {
            en: "Hunters",
            ptBr: "Caçadores",
            ja: "ハンター",
            es: "Cazadores"
        },
        description: {
            en: "Avoid the hunters or use the environment to your advantage. The entrance and teleporters are safe points.",
            ptBr: "Evite os caçadores ou use o ambiente a seu favor. A entrada e teleportes são pontos seguros.",
            ja: "ハンターを避けるか、周囲の地形をうまく利用しよう。入り口とテレポーターは安全地帯だ。",
            es: "Evita a los cazadores o utiliza el entorno a tu favor. La entrada y los teletransportadores son puntos seguros."
        },
        layers: [
            [
                "#######",
                "#######",
                "#######",
                "#######",
                "#######",
                "#######",
                "#######"
            ],
            [
                "#######",
                "S..H..E",
                "###.###",
                "#K...T#",
                "###.###",
                "#T...K#",
                "#######",
            ],
            [
                "#######",
                "#######",
                "#######",
                "#######",
                "#######",
                "#######",
                "#######",
            ]
        ],
        pathfinders: 0,
        mana: 0,
        jellyPortals: 0,
        revealed: true,
        hunterBehavior: {
            static: false,
            respawn: true,
            fixed: true
        }
    },
    {
        id: "tutorial_map_and_zoom",
        title: {
            en: "Map and Zoom",
            ptBr: "Mapa e Zoom",
            ja: "マップとズーム",
            es: "Mapa y Zoom"
        },
        description: {
            en: "Some maps may be too large to fit on the screen. Use the map and zoom to navigate.",
            ptBr: "Alguns mapas podem ser grandes demais para caber na tela. Use o mapa e o zoom para se localizar.",
            ja: "マップによっては画面に収まらないほど広い場合がある。マップとズーム機能を使って移動しよう。",
            es: "Algunos mapas pueden ser demasiado grandes para caber en la pantalla. Utiliza el mapa y el zoom para navegar."
        },
        layers: [
            [
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
            ],
            [
                "##############################",
                "S............................E",
                "##############.###############",
                "############A#.#A#############",
                "##############.###############",
                "##############.###############",
                "##############.###############",
                "############A#.#A#############",
                "##############.###############",
                "##############.###############",
                "##############.###############",
                "############A#.#A#############",
                "##############.###############",
                "##############.###############",
                "##############.###############",
                "############A#.#A#############",
                "##############.###############",
                "##############.###############",
                "##############.###############",
                "############A#.#A#############",
                "##############.###############",
                "##############.###############",
                "##############.###############",
                "############A#.#A#############",
                "##############.###############",
                "##############.###############",
                "####A###A###A#.#A###A###A#####",
                "##############.###############",
                "#K............T.............K#",
                "##############################",
            ],
            [
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
                "##############################",
            ]
        ],
        pathfinders: 0,
        mana: 0,
        jellyPortals: 0
    },
    {
        id: "tutorial_mana_and_jelly_portals",
        title: {
            en: "Mana and Jelly Portals",
            ptBr: "Mana e Portais de Geleia",
            ja: "マナとジェリーのポータル",
            es: "Mana y Portales de Gelatina"
        },
        description: {
            en: "Collect mana to unlock your secret ability and place jelly portals to traverse the level. Summoning the jelly god adds a portal at your current position (a save point, but not a safe one) and destroys all void hunters in the area of effect. Previously visited points will be forgotten.",
            ptBr: "Colete mana para obter sua habilidade secreta e destrave os portais de geléia para atravessar o nível. O portal do deus geleia adiciona um portal de geleia na posição do jogador (save point, mas não seguro) e destrói todos os void hunters na área de ação. Os pontos visitados serão esquecidos.",
            ja: "マナを集めて秘密の能力を解放し、ジェリーのポータルを使ってレベルを移動しよう。ジェリーの神を呼び出すとプレイヤーの現在地にポータルが追加され（セーブポイントだが安全とは限らない）、効果範囲内のボイドハンターをすべて消し去る。一度訪れたポイントは忘れられてしまう。",
            es: "Recoge mana para desbloquear tu habilidad secreta y coloca portales de gelatina para atravesar el nivel. Invocar al dios de la gelatina añade un portal en la posición del jugador (un punto de guardado, pero no seguro) y destruye a todos los cazadores del vacío en el área de efecto. Los puntos visitados anteriormente se olvidarán."
        },
        layers: [
            [
                "######",
                "######",
                "######",
                "######",
                "######"
            ],
            [
                "######",
                "S...M#",
                "##.###",
                "#M..HE",
                "######"
            ],
            [
                "######",
                "######",
                "######",
                "######",
                "######"
            ]
        ],
        pathfinders: 0,
        mana: 8,
        jellyPortals: 0,
        hunterBehavior: {
            static: true,
            respawn: false,
            fixed: true
        }
    },
    {
        id: "tutorial_pathfinder",
        title: {
            en: "Pathfinding",
            ptBr: "Localizador de Caminhos",
            ja: "経路探索",
            es: "Localizador de Caminos"
        },
        description: {
            en: "Use the pathfinder to reveal the shortest route to the exit portal. Some levels can be extremely complex. To activate, open the map and click on teleporters, adjacent blocks, or the maze exit if discovered.",
            ptBr: "Use o localizador de caminhos para revelar a rota mais curta até o portal de saída. Algumas fases podem ser extremamente complexas. Para ativar, abra o mapa e clique sobre teleportes, blocos vizinhos ou a saída do labirinto, se descoberta.",
            ja: "パスファインダーを使えば、出口ポータルまでの最短ルートが分かる。レベルによっては非常に複雑になることもある。使うにはマップを開き、テレポーター、隣接するブロック、または（発見済みなら）迷路の出口をクリックしよう。",
            es: "Utiliza el localizador de caminos para revelar la ruta más corta al portal de salida. Algunos niveles pueden ser extremadamente complejos. Para activarlo, abre el mapa y haz clic en los teletransportadores, bloques adyacentes o la salida del laberinto si ya ha sido descubierta."
        },
        layers: [
            [
                "###########",
                "###########",
                "###########",
                "###########",
                "###########",
                "###########",
                "###########",
            ],
            [
                "###########",
                "#...#.....#",
                "#.#######.#",
                "#.#...#.#.#",
                "#.#.#.#.#.#",
                "#.#.#.#.#.E",
                "###########",
            ],
            [
                "###########",
                "###.#.#####",
                "###########",
                "#######.###",
                "###########",
                "###.#######",
                "###########",
            ],
            [
                "###########",
                "#.#.#.###.#",
                "#.#.#.###.#",
                "#...#.#...#",
                "#.#.#.###.#",
                "#.#.#.###.#",
                "###########",
            ],
            [
                "###########",
                "#.#######.#",
                "###########",
                "###########",
                "###########",
                "#####.###.#",
                "###########",
            ],
            [
                "###########",
                "#.........#",
                "#.###.###.#",
                "#.#A#.#A#.#",
                "#.#A#.#A#.#",
                "S.###.###.#",
                "###########",
            ],
            [
                "###########",
                "###########",
                "###########",
                "###########",
                "###########",
                "###########",
                "###########",
            ],
        ],
        pathfinders: 5,
        mana: 0,
        jellyPortals: 0,
    }
];

function escapeHTML(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

export function formatTutorialDescription(descriptionText: string, images?: string[]): string {
    if (!images || images.length === 0 || !descriptionText.includes('{img}')) {
        return escapeHTML(descriptionText);
    }

    const parts = descriptionText.split('{img}');
    let html = '';
    let imgIndex = 0;

    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (part) {
            html += `<span>${escapeHTML(part)}</span>`;
        }

        if (i < parts.length - 1 && imgIndex < images.length) {
            const imgSrc = images[imgIndex++];
            const breakBefore = i > 0 || part ? '<br/>' : '';
            const hasMoreText = i + 1 < parts.length && parts[i + 1].trim().length > 0;
            const breakAfter = hasMoreText ? '<br/>' : '';
            html += `${breakBefore}<img src="${imgSrc}" class="tutorial-desc-image" alt="Tutorial Screenshot" />${breakAfter}`;
        }
    }

    return html;
}