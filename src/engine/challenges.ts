export interface ChallengeStage {
    id: string;
    title: {
        en: string;
        ptBr: string;
        ja: string;
        es: string;
    };
    layers: string[][];
    pathfinders?: number;
    mana?: number;
    jellyPortals?: number;
    revealed?: boolean;
    hunterBehavior?: {
        static?: boolean;
        respawn?: boolean;
        fixed?: boolean;
    };
    type: 'time' | 'shots';
    time?: number;          // Tempo limite em segundos
    shots?: number;         // Quantidade de disparos
}

export const CHALLENGES: ChallengeStage[] = [
    {
        id: "challenge_jelly_survival",
        title: {
            en: "Legion Survival",
            ptBr: "Sobrevivência da Legião",
            ja: "レギオン生存試練",
            es: "Supervivencia de la Legión"
        },
        type: "time",
        time: 20, // 30 segundos
        layers: [
            // z = 0
            [
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
            ],
            // z = 1
            [
                "#############",
                "#H.........H#",
                "#.#.#.#.#.#.#",
                "#..H.....H..#",
                "#.#.#.#.#.#.#",
                "#H....S....H#",
                "#.#.#.#.#.#.#",
                "#H.........H#",
                "#.#.#.#.#.#.#",
                "#..H.....H..#",
                "#.#.#.#.#.#.#",
                "#H.........H#",
                "#############"
            ],
            // z = 2
            [
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
            ]
        ],
        pathfinders: 0,
        mana: 0,
        jellyPortals: 1,
        revealed: true,
        hunterBehavior: {
            static: false,
            respawn: true,
            fixed: true
        }
    },
    {
        id: "challenge_jelly_cannonade",
        title: {
            en: "Jelly Cannonade",
            ptBr: "Bombardeio Gelatinoso",
            ja: "ジェリーの砲撃",
            es: "Bombardeo de Gelatina"
        },
        type: "shots",
        shots: 7,
        layers: [
            // z = 0
            [
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
            ],
            // z = 1
            [
                "#############",
                "#...........#",
                "#.A.#.A.#.A.#",
                "#...........#",
                "#.A.#.A.#.A.#",
                "#.....S.....#",
                "#.A.#.#.#.A.#",
                "#...........#",
                "#.A.#.A.#.A.#",
                "#...........#",
                "#.A.#.A.#.A.#",
                "#...........#",
                "#############"
            ],
            // z = 2
            [
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
                "#############",
            ]
        ],
        pathfinders: 0,
        mana: 0,
        jellyPortals: 0,
        revealed: true,
        hunterBehavior: {
            static: true,
            respawn: false,
            fixed: true
        }
    }
];
