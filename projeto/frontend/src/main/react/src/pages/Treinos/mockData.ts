import { type Aluno, type TreinoVigente, TipoDoTreino, Exercicio } from "./types";

// Lista mockada de alunos cadastrados
export const alunosMock: Aluno[] = [
    {
        id: 1,
        nome: "Ana Silva",
        matricula: "2024001",
        avatar: "https://i.pravatar.cc/150?img=1",
        pontuacao: 850,
    },
    {
        id: 2,
        nome: "Carlos Souza",
        matricula: "2024002",
        avatar: "https://i.pravatar.cc/150?img=3",
        pontuacao: 720,
    },
    {
        id: 3,
        nome: "Mariana Costa",
        matricula: "2024003",
        avatar: "https://i.pravatar.cc/150?img=5",
        pontuacao: 940,
    },
    {
        id: 4,
        nome: "João Pedro",
        matricula: "2024004",
        avatar: "https://i.pravatar.cc/150?img=7",
        pontuacao: 560,
    },
    {
        id: 5,
        nome: "Fernanda Lima",
        matricula: "2024005",
        avatar: "https://i.pravatar.cc/150?img=9",
        pontuacao: 1020,
    },
    {
        id: 6,
        nome: "Ricardo Santos",
        matricula: "2024006",
        avatar: "https://i.pravatar.cc/150?img=11",
        pontuacao: 680,
    },
    {
        id: 7,
        nome: "Juliana Alves",
        matricula: "2024007",
        avatar: "https://i.pravatar.cc/150?img=13",
        pontuacao: 790,
    },
    {
        id: 8,
        nome: "Pedro Henrique",
        matricula: "2024008",
        avatar: "https://i.pravatar.cc/150?img=15",
        pontuacao: 620,
    },
];

// Treinos vigentes por aluno (Map<alunoId, TreinoVigente | null>)
// Apenas alguns alunos já possuem treino mockado para demonstração
export const treinosVigentesMock: Map<number, TreinoVigente | null> = new Map([
    [
        1, // Ana Silva já tem treino
        {
            id: 101,
            professorId: 999, // Mock do professor
            alunoId: 1,
            validadeSugerida: "2025-03-10",
            dataCriacao: "2024-12-01T10:00:00Z",
            treinosDiarios: [
                {
                    letra: "A",
                    tipo: TipoDoTreino.PEITO_E_TRICEPS,
                    exercicios: [
                        {
                            exercicio: Exercicio.SUPINO_RETO,
                            repeticao: { series: 4, contagem: "10-12 reps" },
                        },
                        {
                            exercicio: Exercicio.SUPINO_INCLINADO,
                            repeticao: { series: 3, contagem: "12 reps" },
                        },
                        {
                            exercicio: Exercicio.CRUCIFIXO_COM_HALTERES,
                            repeticao: { series: 3, contagem: "15 reps" },
                        },
                        {
                            exercicio: Exercicio.TRICEPS_PULLEY_COM_CORDA,
                            repeticao: { series: 3, contagem: "12-15 reps" },
                        },
                        {
                            exercicio: Exercicio.TRICEPS_TESTA,
                            repeticao: { series: 3, contagem: "10 reps" },
                        },
                    ],
                },
                {
                    letra: "B",
                    tipo: TipoDoTreino.COSTAS_E_BICEPS,
                    exercicios: [
                        {
                            exercicio: Exercicio.BARRA_FIXA,
                            repeticao: { series: 4, contagem: "até a falha" },
                        },
                        {
                            exercicio: Exercicio.PUXADA_ALTA_PULLEY_FRENTE,
                            repeticao: { series: 3, contagem: "12 reps" },
                        },
                        {
                            exercicio: Exercicio.REMADA_CURVADA_COM_BARRA,
                            repeticao: { series: 4, contagem: "10 reps" },
                        },
                        {
                            exercicio: Exercicio.ROSCA_DIRETA_COM_BARRA,
                            repeticao: { series: 3, contagem: "10-12 reps" },
                        },
                        {
                            exercicio: Exercicio.ROSCA_MARTELO,
                            repeticao: { series: 3, contagem: "12 reps" },
                        },
                    ],
                },
                {
                    letra: "C",
                    tipo: TipoDoTreino.PERNAS,
                    exercicios: [
                        {
                            exercicio: Exercicio.AGACHAMENTO_LIVRE_COM_BARRA,
                            repeticao: { series: 4, contagem: "8-10 reps" },
                        },
                        {
                            exercicio: Exercicio.LEG_PRESS_45,
                            repeticao: { series: 4, contagem: "12 reps" },
                        },
                        {
                            exercicio: Exercicio.CADEIRA_EXTENSORA,
                            repeticao: { series: 3, contagem: "15 reps" },
                        },
                        {
                            exercicio: Exercicio.MESA_FLEXORA,
                            repeticao: { series: 3, contagem: "12 reps" },
                        },
                        {
                            exercicio: Exercicio.PANTURRILHA_EM_PE_GEMEOS,
                            repeticao: { series: 4, contagem: "15-20 reps" },
                        },
                    ],
                },
            ],
        },
    ],
    [
        3, // Mariana Costa já tem treino
        {
            id: 102,
            professorId: 999,
            alunoId: 3,
            validadeSugerida: "2025-02-28",
            dataCriacao: "2024-11-15T14:30:00Z",
            treinosDiarios: [
                {
                    letra: "A",
                    tipo: TipoDoTreino.SUPERIORES,
                    exercicios: [
                        {
                            exercicio: Exercicio.SUPINO_INCLINADO,
                            repeticao: { series: 4, contagem: "10 reps" },
                        },
                        {
                            exercicio: Exercicio.DESENVOLVIMENTO_COM_HALTERES,
                            repeticao: { series: 3, contagem: "12 reps" },
                        },
                        {
                            exercicio: Exercicio.ELEVACAO_LATERAL_COM_HALTERES,
                            repeticao: { series: 3, contagem: "15 reps" },
                        },
                    ],
                },
                {
                    letra: "B",
                    tipo: TipoDoTreino.INFERIORES,
                    exercicios: [
                        {
                            exercicio: Exercicio.AGACHAMENTO_LIVRE_COM_BARRA,
                            repeticao: { series: 4, contagem: "10 reps" },
                        },
                        {
                            exercicio: Exercicio.STIFF_COM_BARRA,
                            repeticao: { series: 4, contagem: "12 reps" },
                        },
                        {
                            exercicio: Exercicio.ELEVACAO_PELVICA,
                            repeticao: { series: 3, contagem: "15 reps" },
                        },
                    ],
                },
            ],
        },
    ],
    // Demais alunos ainda não possuem treino
    [2, null],
    [4, null],
    [5, null],
    [6, null],
    [7, null],
    [8, null],
]);
