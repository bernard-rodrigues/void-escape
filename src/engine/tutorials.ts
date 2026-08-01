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
 * 'A' - Estátua (STATUE). Obstáculo que bloqueia a visão dos caçadores.
 * 'H' - Caçador (HUNTER). Spawn de um caçador inimigo estático em estado de sono ('SLEEP').
 *       Internamente gera um caminho normal ('.') e inicia um caçador sobre ele.
 */
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
    revealed?: boolean; // Se true, o mapa e caminhos já vêm visíveis
}

export const TUTORIALS: TutorialStage[] = [
    {
        id: "tutorial_keys",
        title: {
            en: "Tutorial 1: Key Collection",
            ptBr: "Tutorial 1: Coleta de Chaves",
            ja: "チュートリアル1：鍵の収集",
            es: "Tutorial 1: Recolección de Llaves"
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
                "#K...HE",
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
        mana: 0
    },
    {
        id: "tutorial_elevators",
        title: {
            en: "Tutorial 2: Elevators",
            ptBr: "Tutorial 2: Elevadores",
            ja: "チュートリアル2：エレベーター",
            es: "Tutorial 2: Ascensores"
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
        mana: 0
    },
    {
        id: "tutorial_teleport",
        title: {
            en: "Tutorial 3: Teleportation",
            ptBr: "Tutorial 3: Teletransporte",
            ja: "チュートリアル3：テレポート",
            es: "Tutorial 3: Teletransporte"
        },
        description: {
            en: "Use the teleporters to move between different areas of the level.",
            ptBr: "Utilize os teletransportadores para se mover entre diferentes áreas do nível.",
            ja: "テレポートを使用して、レベルの異なるエリア間を移動します。",
            es: "Utiliza los teletransportadores para moverte entre diferentes áreas del nivel."
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
        revealed: true
    }
];
