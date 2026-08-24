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
}

export const CHALLENGES: ChallengeStage[] = [
    {
        id: "challenge_jelly_trial",
        title: {
            en: "Trial of the Jelly God",
            ptBr: "Teste do Deus Geléia",
            ja: "ゼリー神の試練",
            es: "Prueba del Dios Gelatina"
        },
        layers: [
            // z = 0
            [
                "#########",
                "#########",
                "#########",
                "#########",
                "#########",
                "#########",
                "#########"
            ],
            // z = 1
            [
                "#########",
                "S....H..#",
                "###.###.#",
                "#K....#.#",
                "#.#####.#",
                "#.......E",
                "#########"
            ],
            // z = 2
            [
                "#########",
                "#########",
                "#########",
                "#########",
                "#########",
                "#########",
                "#########"
            ]
        ],
        pathfinders: 2,
        mana: 5,
        jellyPortals: 1,
        revealed: true,
        hunterBehavior: {
            static: false,
            respawn: false,
            fixed: true
        }
    }
];
