// Mock de alunos e histórico de bioimpedância por aluno (visão do professor)

import type { Aluno, BioimpedanceData } from "./types";

// Lista de alunos (reutilizando estrutura similar a Treinos)
export const alunosMock: Aluno[] = [
    { id: 1, nome: "Ana Silva", matricula: "2024001", avatar: "https://i.pravatar.cc/150?img=1" },
    { id: 2, nome: "Carlos Souza", matricula: "2024002", avatar: "https://i.pravatar.cc/150?img=3" },
    { id: 3, nome: "Mariana Costa", matricula: "2024003", avatar: "https://i.pravatar.cc/150?img=5" },
    { id: 4, nome: "João Pedro", matricula: "2024004", avatar: "https://i.pravatar.cc/150?img=7" },
    { id: 5, nome: "Fernanda Lima", matricula: "2024005", avatar: "https://i.pravatar.cc/150?img=9" },
    { id: 6, nome: "Ricardo Santos", matricula: "2024006", avatar: "https://i.pravatar.cc/150?img=11" },
    { id: 7, nome: "Juliana Alves", matricula: "2024007", avatar: "https://i.pravatar.cc/150?img=13" },
    { id: 8, nome: "Pedro Henrique", matricula: "2024008", avatar: "https://i.pravatar.cc/150?img=15" },
];

// Histórico de bioimpedância por aluno
const bioimpedanciasPorAluno: Map<number, BioimpedanceData[]> = new Map([
    [
        1, // Ana Silva
        [
            {
                id: 101,
                dataDaAvaliacao: new Date("2024-11-14"),
                professorResponsavel: "Prof. Maria Santos",
                massaGordaPercentual: 19.2,
                massaGordaKg: 12.0,
                massaMagraKg: 50.5,
                massaMuscularEsqueleticaKg: 28.8,
                aguaCorporalTotalPercentual: 58.5,
                gorduraVisceralNivel: 4,
                taxaMetabolicaBasalKcal: 1410,
                massaOsseaKg: 2.8,
                indiceDeMassaCorporal: 22.1,
                bracoRelaxadoCm: 26.5,
                bracoContraidoCm: 28.2,
                antebracoCm: 22.3,
                toraxPeitoralCm: 85.0,
                cinturaCm: 68.2,
                abdomenCm: 72.5,
                quadrilCm: 96.0,
                coxaCm: 54.2,
                panturrilhaCm: 35.8,
            },
            {
                id: 100,
                dataDaAvaliacao: new Date("2024-10-01"),
                professorResponsavel: "Prof. João Silva",
                massaGordaPercentual: 21.5,
                massaGordaKg: 13.8,
                massaMagraKg: 50.2,
                massaMuscularEsqueleticaKg: 27.5,
                aguaCorporalTotalPercentual: 56.2,
                gorduraVisceralNivel: 5,
                taxaMetabolicaBasalKcal: 1380,
                massaOsseaKg: 2.7,
                indiceDeMassaCorporal: 22.6,
                bracoRelaxadoCm: 26.0,
                bracoContraidoCm: 27.5,
                antebracoCm: 22.0,
                toraxPeitoralCm: 84.5,
                cinturaCm: 70.0,
                abdomenCm: 74.8,
                quadrilCm: 97.5,
                coxaCm: 53.8,
                panturrilhaCm: 35.2,
            },
        ],
    ],
    [
        2, // Carlos Souza
        [
            {
                id: 201,
                dataDaAvaliacao: new Date("2024-11-10"),
                professorResponsavel: "Prof. João Silva",
                massaGordaPercentual: 18.5,
                massaGordaKg: 15.2,
                massaMagraKg: 66.8,
                massaMuscularEsqueleticaKg: 38.5,
                aguaCorporalTotalPercentual: 57.8,
                gorduraVisceralNivel: 7,
                taxaMetabolicaBasalKcal: 1780,
                massaOsseaKg: 3.5,
                indiceDeMassaCorporal: 25.2,
                bracoRelaxadoCm: 34.0,
                bracoContraidoCm: 36.5,
                antebracoCm: 28.5,
                toraxPeitoralCm: 102.0,
                cinturaCm: 84.5,
                abdomenCm: 88.0,
                quadrilCm: 100.0,
                coxaCm: 60.5,
                panturrilhaCm: 40.2,
            },
        ],
    ],
    [
        3, // Mariana Costa - sem avaliações ainda
        [],
    ],
]);

// Funções de acesso aos dados mockados
export const fetchAlunos = (): Promise<Aluno[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([...alunosMock]);
        }, 800);
    });
};

export const fetchBioimpedanciasPorAluno = (alunoId: number): Promise<BioimpedanceData[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const historico = bioimpedanciasPorAluno.get(alunoId) || [];
            // Ordena por data decrescente
            const sorted = [...historico].sort(
                (a, b) => new Date(b.dataDaAvaliacao).getTime() - new Date(a.dataDaAvaliacao).getTime()
            );
            resolve(sorted);
        }, 500);
    });
};

// Função para adicionar nova bioimpedância (mock - apenas em memória)
export const adicionarBioimpedancia = (
    alunoId: number,
    dados: Omit<BioimpedanceData, "id">
): Promise<BioimpedanceData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const novoId = Date.now();
            const novaBioimpedancia: BioimpedanceData = {
                ...dados,
                id: novoId,
            };

            const historico = bioimpedanciasPorAluno.get(alunoId) || [];
            historico.unshift(novaBioimpedancia);
            bioimpedanciasPorAluno.set(alunoId, historico);

            resolve(novaBioimpedancia);
        }, 500);
    });
};
