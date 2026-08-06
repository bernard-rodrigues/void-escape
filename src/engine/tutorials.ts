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
}

export const TUTORIALS: TutorialStage[] = [
    {
        id: "tutorial_keys",
        title: {
            en: "Key Collection",
            ptBr: "Coleta de Chaves",
            ja: "鍵の収集",
            es: "Recolección de Llaves"
        },
        description: {
            en: "Collect all available keys to unlock the exit portal.",
            ptBr: "Capture todas as chaves disponíveis para liberar a saída.",
            ja: "出口ポータルを解放するために、利用可能なすべての鍵を収集します。",
            es: "Recoge todas las llaves disponibles para liberar la salida."
        },
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
            en: "Use the elevators to visit the adjacent floors.",
            ptBr: "Utilize os elevadores para visitar os andares adjacentes.",
            ja: "エレベーターを使用して、隣接するフロアを訪問します。",
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
            en: "Use the teleporters to move between different areas of the level. Step on a teleport block, activate it with one of the action screens, and select another available teleporter to move to it.",
            ptBr: "Utilize os teletransportadores para se mover entre diferentes áreas do nível. Ao pisar sobre um bloco de teleporte, acione-o com um dos botões de ação e selecione outro teleporte disponível para se mover para ele.",
            ja: "レベルの異なるエリア間を移動するには、テレポーターを使用します。テレポートブロックに乗り、アクション画面の1つでそれをアクティブにし、別の利用可能なテレポーターを選択して移動します。",
            es: "Utiliza los teletransportadores para moverte entre diferentes áreas del nivel. Párate en un bloque de teletransporte, actívalo con una de las pantallas de acción y selecciona otro teletransportador disponible para moverte a él."
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
            ja: "ハンターを避けたり、環境を有利に利用したりします。入り口とテレポーターは安全なポイントです。",
            es: "Evita a los cazadores o utiliza el entorno a tu favor. La entrada y los teletransportadores son puntos seguros."
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
                "S..H..E",
                "###.###",
                "#K...T#",
                "#######"
            ],
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
            ja: "一部のマップは画面に収まらないほど大きい場合があります。マップとズームを使用してナビゲートします。",
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
            en: "Collect mana to unlock your secret ability and activate jelly portals to traverse the level. The jelly god portal adds a jelly portal at the player's position (save point, but not safe) and destroys all void hunters in the action area. Visited points will be forgotten.",
            ptBr: "Colete mana para obter sua habilidade secreta e destrave os portais de geléia para atravessar o nível. O portal do deus geleia adiciona um portal de geleia na posição do jogador (save point, mas não seguro) e destrói todos os void hunters na área de ação. Os pontos visitados serão esquecidos.",
            ja: "マナを収集して秘密の能力をアンロックし、ジェリーのポータルをアクティブにしてレベルを移動します。ジェリーの神のポータルは、プレイヤーの位置にジェリーポータルを追加し（セーブポイントですが安全ではありません）、アクションエリア内のすべてのボイドハンターを破壊します。 訪問したポイントは忘れられます。",
            es: "Recoge mana para desbloquear tu habilidad secreta y activa los portales de gelatina para atravesar el nivel. El portal del dios de la gelatina agrega un portal de gelatina en la posición del jugador (punto de guardado, pero no seguro) y destruye a todos los cazadores del vacío en el área de acción. Los puntos visitados serán olvidados."
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
            ja: "パスファインディング",
            es: "Localizador de Caminos"
        },
        description: {
            en: "Use the pathfinder to reveal the shortest route to the exit portal. Some levels can be extremely complex. To activate, open the map and click on teleporters, adjacent blocks, or the maze exit if discovered.",
            ptBr: "Use o localizador de caminhos para revelar a rota mais curta até o portal de saída. Algumas fases podem ser extremamente complexas. Para ativar, abra o mapa e clique sobre teleportes, blocos vizinhos ou a saída do labirinto, se descoberta.",
            ja: "パスファインダーを使用して、出口ポータルへの最短ルートを明らかにします。一部のレベルは非常に複雑な場合があります。有効にするには、マップを開き、テレポーター、隣接するブロック、または迷路の出口（発見された場合）をクリックします。",
            es: "Utiliza el localizador de caminos para revelar la rota más corta al portal de salida. Algunos niveles pueden ser extremadamente complejos. Para activarlo, abre el mapa y haz clic en los teletransportadores, bloques adyacentes o la salida del laberinto si se ha descubierto."
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
        revealed: true
    }
];
