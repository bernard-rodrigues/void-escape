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
            en: "Collect all available keys to unlock the exit portal.{img}The number of remaining keys is displayed in the game info panel.{img}Once all keys are collected, the exit portal will be unlocked.{img}",
            ptBr: "Capture todas as chaves disponíveis para liberar a saída.{img}O número de chaves restantes é exibido no painel de informações do jogo.{img}Ao coletar todas as chaves, o portal de saída será liberado.{img}",
            ja: "すべての鍵を集めて、出口ポータルを開放しよう。{img}残りの鍵の数は、ゲームの情報パネルに表示される。{img}すべての鍵を集めると、出口ポータルが開放される。{img}",
            es: "Recoge todas las llaves disponibles para liberar la salida.{img}El número de llaves restantes se muestra en el panel de información del juego.{img}Una vez recogidas todas las llaves, se liberará el portal de salida.{img}"
        },
        images: ["assets/images/tutorials/tutorial1-1.png", "assets/images/tutorials/tutorial1-2.png", "assets/images/tutorials/tutorial1-3.png"],
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
            en: "Use the elevators to reach the floors above and below.{img}{img}{img}Press E (desktop)/Y (gamepad) to go up and Q (desktop)/A (gamepad) to go down.\nOn mobile devices, use the panel at the bottom of the screen.{img}",
            ptBr: "Utilize os elevadores para visitar os andares adjacentes.{img}{img}{img}Utilize E (desktop)/Y (gamepad) para subir e Q (desktop)/A (gamepad) para descer.\nEm dispositivos móveis, use o painel da parte inferior da tela.{img}",
            ja: "エレベーターを使って、上下の階を移動しよう。{img}{img}{img}E(デスクトップ)/Y(ゲームパッド)で上昇、Q(デスクトップ)/A(ゲームパッド)で下降できる。\nモバイル端末では、画面下部のパネルを使おう。{img}",
            es: "Utiliza los ascensores para visitar los pisos adyacentes.{img}{img}{img}Presiona E (escritorio)/Y (mando) para subir y Q (escritorio)/A (mando) para bajar.\nEn dispositivos móviles, usa el panel en la parte inferior de la pantalla.{img}"
        },
        images: ["assets/images/tutorials/tutorial2-1.png", "assets/images/tutorials/tutorial2-2.png", "assets/images/tutorials/tutorial2-3.png", "assets/images/tutorials/tutorial2-4.png"],
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
            ptBr: "Teleporte",
            ja: "テレポート",
            es: "Teletransporte"
        },
        description: {
            en: "Use the teleporters to move between different areas of the level.{img}{img}{img} Step onto a teleporter block, activate it with an action button, then select another available teleporter to warp there.{img}Teleporters are noisy and draw the hunters' attention.{img}Once activated, all hunters will converge on the newly chosen position for a period of time. Keep an eye on the hunters' status panel.{img}After a trip, teleporters will become temporarily unavailable and will no longer be safe points.{img}",
            ptBr: "Utilize os teleportes para se mover entre diferentes áreas do nível.{img}{img}{img} Ao pisar sobre um bloco de teleporte, acione-o com um dos botões de ação e selecione outro teleporte disponível para se mover para ele.{img}Teleportes são barulhentos e chamam a atenção dos hunters.{img}Uma vez ativados, todos os caçadores irão convergir para a nova posição escolhida durante um período de tempo. Acompanhe o painel de status dos caçadores.{img}Após uma viagem, os teleportes ficarão temporariamente indisponíveis e deixarão de ser pontos seguros.{img}",
            ja: "テレポーターを使えば、レベル内の離れたエリアへ移動できる。{img}{img}{img}テレポートブロックの上に乗ってアクションボタンで起動し、行き先のテレポーターを選ぼう。{img}テレポーターは音を立てるため、ハンターに気づかれてしまう。{img}起動すると、しばらくの間すべてのハンターが選択した新しい地点に集まってくる。ハンターのステータスパネルを確認しよう。{img}移動した後、そのテレポーターは一時的に使用できなくなり、安全地帯ではなくなる。{img}",
            es: "Utiliza los teletransportes para moverte entre diferentes áreas del nivel.{img}{img}{img} Párate en un bloque de teletransporte, actívalo con uno de los botones de acción y selecciona otro teletransportador disponible para moverte a él.{img}Los teletransportadores son ruidosos y llaman la atención de los cazadores.{img}Una vez activados, todos los cazadores convergerán hacia la nueva posición elegida durante un período de tiempo. Presta atención al panel de estado de los cazadores.{img}Tras un viaje, los teletransportadores quedarán temporalmente inhabilitados y dejarán de ser puntos seguros.{img}",
        },
        images: ["assets/images/tutorials/tutorial3-1.png", "assets/images/tutorials/tutorial3-2.png", "assets/images/tutorials/tutorial3-3.png", "assets/images/tutorials/tutorial3-4.png", "assets/images/tutorials/tutorial3-5.png", "assets/images/tutorials/tutorial3-6.png", "assets/images/tutorials/tutorial3-7.png"],
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
            en: "Avoid the hunters or use the environment to your advantage.{img}The entrance and teleporters are safe points.{img}If you die, your character will drop a key at the location of death.{img}They will be sent back to the last safe point visited.\nKeep an eye on the Proximity Detector!{img}",
            ptBr: "Evite os caçadores ou use o ambiente a seu favor.{img}A entrada e teleportes são pontos seguros.{img}Se você morrer, seu personagem irá deixar uma chave no local da morte.{img}Ele será transportado para o último ponto seguro visitado.\nFique atento ao Detector de Proximidade!{img}",
            ja: "ハンターを避けるか、周囲の地形をうまく利用しよう。{img}入り口とテレポーターは安全地帯だ。{img}死亡すると、キャラクターはその場所に鍵を落としてしまう。{img}そして、最後に訪れた安全地帯へ送り返される。\n近接検知機に注意しよう!{img}",
            es: "Evita a los cazadores o utiliza el entorno a tu favor.{img}La entrada y los teletransportadores son puntos seguros.{img}Si mueres, tu personaje dejará una llave en el lugar de la muerte.{img}Será transportado de vuelta al último punto seguro visitado.\n¡Presta atención al Detector de Proximidad!{img}"
        },
        images: ["assets/images/tutorials/tutorial4-1.png", "assets/images/tutorials/tutorial4-2.png", "assets/images/tutorials/tutorial4-3.png", "assets/images/tutorials/tutorial4-4.png"],
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
            en: "Some maps may be too large to fit on the screen.{img}Use the map and zoom to navigate.\nThe map can be toggled with the Z key (desktop) or the SELECT button (gamepad).\nOn mobile devices, use the panel at the bottom of the screen.{img}{img}Zoom can be toggled with the Z key (desktop) or the B button (gamepad).\nOn mobile devices, use the magnifying glass at the bottom right of the screen.{img}",
            ptBr: "Alguns mapas podem ser grandes demais para caber na tela.{img}Use o mapa e o zoom para se localizar.\nO mapa pode ser ativado através da tela Z (desktop) ou do botão SELECT (gamepad).\nEm dispositivos móveis, use o painel na parte inferior da tela.{img}{img}O zoom pode ser alternado utilizando a tecla Z (desktop) ou o botão B (gamepad).\nEm dispositivos móveis, use a lupa na parte inferior direita da tela.{img}",
            ja: "マップによっては画面に収まらないほど広い場合がある。{img}マップとズーム機能を使って移動しよう。\nマップはZキー(デスクトップ)またはSELECTボタン(ゲームパッド)で切り替えられる。\nモバイル端末では、画面下部のパネルを使おう。{img}{img}ズームはZキー(デスクトップ)またはBボタン(ゲームパッド)で切り替えられる。\nモバイル端末では、画面右下の虫眼鏡アイコンを使おう。{img}",
            es: "Algunos mapas pueden ser demasiado grandes para caber en la pantalla.{img}Utiliza el mapa y el zoom para navegar.\nEl mapa se puede activar con la tecla Z (escritorio) o el botón SELECT (mando).\nEn dispositivos móviles, usa el panel en la parte inferior de la pantalla.{img}{img}El zoom se puede alternar con la tecla Z (escritorio) o el botón B (mando).\nEn dispositivos móviles, usa la lupa en la parte inferior derecha de la pantalla.{img}"
        },
        images: ["assets/images/tutorials/tutorial5-1.png", "assets/images/tutorials/tutorial5-2.png", "assets/images/tutorials/tutorial5-3.png", "assets/images/tutorials/tutorial5-4.png"],
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
                "S.............T..............E",
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
            en: "Collect mana as you explore the maze.{img}For every 10 mana collected, you gain one charge of power.{img}These charges can be used to activate your secret ability: the Portal of the Jelly God!{img}This ability adds a teleport portal at the player's current position (a save point, but not a safe one).{img}It also destroys all void hunters in the area of effect.{img}Previously visited points will be forgotten.{img}{img}The Portal of the Jelly God's area of effect reaches 5 tiles away (Manhattan distance; diagonals are not taken into account).{img}",
            ptBr: "Colete mana durante sua exploração do loabirinto.{img}A cada 10 mana coletado, você ganha uma carga de poderzinho.{img}Essas cargas podem ser utilizadas para ativar sua habilidade secreta: o Portal do Deus Geleia!{img}Essa habilidade adiciona um portal de teleporte na posição atual do jogador (um ponto de salvamento, mas não seguro).{img}Além disso, destrói todos os void hunters na área de efeito.{img}Pontos visitados anteriormente serão esquecidos.{img}{img}A área de atuação do Portal do Deus Geleia é de 5 quadros de distância (distância de Manhattan; diagonais não são levadas em consideração).{img}",
            ja: "迷路を探索しながらマナを集めよう。{img}マナを10集めるごとに、パワーのチャージが1つ手に入る。{img}このチャージを使えば、秘密の能力——ジェリーの神のポータル——を発動できる!{img}この能力は、プレイヤーの現在地にテレポートポータルを追加する(セーブポイントだが安全とは限らない)。{img}さらに、効果範囲内のボイドハンターをすべて消し去る。{img}一度訪れたポイントは忘れられてしまう。{img}{img}ジェリーの神のポータルの効果範囲は、5マス以内だ(マンハッタン距離。斜め方向は考慮されない)。{img}",
            es: "Recoge mana mientras exploras el laberinto.{img}Por cada 10 de mana recogido, obtienes una carga de poder.{img}Estas cargas pueden usarse para activar tu habilidad secreta: ¡el Portal del Dios de la Gelatina!{img}Esta habilidad añade un portal de teletransporte en la posición actual del jugador (un punto de guardado, pero no seguro).{img}Además, destruye a todos los cazadores del vacío en el área de efecto.{img}Los puntos visitados anteriormente se olvidarán.{img}{img}El área de efecto del Portal del Dios de la Gelatina alcanza 5 casillas de distancia (distancia de Manhattan; las diagonales no se toman en cuenta).{img}"
        },
        images: ["assets/images/tutorials/tutorial6-1.png", "assets/images/tutorials/tutorial6-2.png", "assets/images/tutorials/tutorial6-3.png", "assets/images/tutorials/tutorial6-4.png", "assets/images/tutorials/tutorial6-5.png", "assets/images/tutorials/tutorial6-6.png", "assets/images/tutorials/tutorial6-7.png", "assets/images/tutorials/tutorial6-8.png"],
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
            en: "Use pathfinders to find the shortest route to teleporters, unvisited adjacent blocks, or the maze exit.{img}The shortest path to the destination will be highlighted on both the maze and the map.{img}To activate a pathfinder, simply click on the point of interest, or navigate to it and press space or enter (desktop) or X (gamepad).\nA confirmation message will be shown.{img}The number of available pathfinders will be displayed on the game's info panel.{img}",
            ptBr: "Use localizadores para encontrar a rota mais curta até teleportes, blocos adjacentes não visitados ou a saída do labirinto.{img}O caminho mais curto até o destino será destacado no labirinto e no mapa.{img}Para ativar um localizador, basta clicar sobre o ponto de interesse ou navegar e pressionar espaço ou enter (desktop) ou X (gamepad).\nUma mensagem de confirmação será exibida.{img}O número de localizadores disponíveis será exibido no painel de informações do jogo.{img}",
            ja: "パスファインダーを使って、テレポーター、まだ訪れていない隣接ブロック、または迷路の出口までの最短ルートを見つけよう。{img}目的地までの最短経路は、迷路とマップの両方でハイライト表示される。{img}パスファインダーを起動するには、対象の地点をクリックするか、そこまで移動してスペースキーかEnterキー(デスクトップ)、またはXボタン(ゲームパッド)を押そう。\n確認メッセージが表示される。{img}利用可能なパスファインダーの数は、ゲームの情報パネルに表示される。{img}",
            es: "Utiliza los localizadores para encontrar la ruta más corta hacia teletransportadores, bloques adyacentes no visitados o la salida del laberinto.{img}El camino más corto hasta el destino se resaltará tanto en el laberinto como en el mapa.{img}Para activar un localizador, simplemente haz clic sobre el punto de interés, o navega hasta él y presiona espacio o intro (escritorio) o X (mando).\nSe mostrará un mensaje de confirmación.{img}El número de localizadores disponibles se mostrará en el panel de información del juego.{img}"
        },
        images: ["assets/images/tutorials/tutorial7-1.png", "assets/images/tutorials/tutorial7-2.png", "assets/images/tutorials/tutorial7-3.png", "assets/images/tutorials/tutorial7-4.png"],
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

function escapeHTML(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

interface DescriptionBlock {
    type: 'text' | 'image-group';
    content: string;
    images?: string[];
}

export function formatTutorialDescription(descriptionText: string, images?: string[]): string {
    if (!images || images.length === 0 || !descriptionText.includes('{img}')) {
        return escapeHTML(descriptionText);
    }

    const rawParts = descriptionText.split('{img}');
    const blocks: DescriptionBlock[] = [];
    let imgIndex = 0;

    if (rawParts[0]) {
        blocks.push({ type: 'text', content: rawParts[0] });
    }

    let currentImgGroup: string[] = [];

    for (let i = 1; i < rawParts.length; i++) {
        if (imgIndex < images.length) {
            currentImgGroup.push(images[imgIndex++]);
        }

        const part = rawParts[i];
        if (part.trim() === '') {
            // Se o texto intermediário for vazio, acumula as imagens no mesmo grupo para renderizar lado a lado
        } else {
            if (currentImgGroup.length > 0) {
                blocks.push({ type: 'image-group', content: '', images: currentImgGroup });
                currentImgGroup = [];
            }
            blocks.push({ type: 'text', content: part });
        }
    }

    if (currentImgGroup.length > 0) {
        blocks.push({ type: 'image-group', content: '', images: currentImgGroup });
    }

    let html = '';
    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        if (block.type === 'text') {
            html += `<span>${escapeHTML(block.content)}</span>`;
        } else if (block.type === 'image-group' && block.images && block.images.length > 0) {
            const hasTextBefore = i > 0 && blocks[i - 1].type === 'text';
            const hasTextAfter = i + 1 < blocks.length && blocks[i + 1].type === 'text';

            const breakBefore = hasTextBefore ? '<br/>' : '';
            const breakAfter = hasTextAfter ? '<br/>' : '';

            if (block.images.length === 1) {
                html += `${breakBefore}<img src="${block.images[0]}" class="tutorial-desc-image" alt="Tutorial Screenshot" />${breakAfter}`;
            } else {
                let imagesHtml = '';
                for (const imgUrl of block.images) {
                    imagesHtml += `<img src="${imgUrl}" class="tutorial-desc-image-in-group" alt="Tutorial Screenshot" />`;
                }
                html += `${breakBefore}<div class="tutorial-desc-image-group">${imagesHtml}</div>${breakAfter}`;
            }
        }
    }

    return html;
}