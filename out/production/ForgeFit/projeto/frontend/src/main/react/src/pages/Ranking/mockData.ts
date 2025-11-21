export interface Student {
    id: number;
    name: string;
    score: number;
    avatar?: string;
}

const studentsData: Student[] = [
    {
        id: 1,
        name: "Paulo Rosado",
        score: 12500,
        avatar: "https://avatars.githubusercontent.com/u/117609505?v=4",
    },
    {
        id: 2,
        name: "Gustavo Mourato",
        score: 11800,
        avatar: "https://avatars.githubusercontent.com/u/142419362?v=4",
    },
    {
        id: 3,
        name: "Vinícius Jordão",
        score: 10200,
        avatar: "https://avatars.githubusercontent.com/u/142420325?v=4",
    },
    {
        id: 4,
        name: "Thomaz Lima",
        score: 9500,
        avatar: "https://avatars.githubusercontent.com/u/126795323?v=4",
    },
    {
        id: 5,
        name: "João Marcelo",
        score: 8900,
        avatar: "https://avatars.githubusercontent.com/u/142419624?v=4",
    },
    {
        id: 6,
        name: "Gabriel Albuquerque",
        score: 8200,
        avatar: "https://avatars.githubusercontent.com/u/142417669?v=4",
    },
    {
        id: 7,
        name: "Evaldo Galdino",
        score: 7600,
        avatar: "https://avatars.githubusercontent.com/u/97982032?v=4",
    },
    {
        id: 8,
        name: "Luan Kato",
        score: 7100,
        avatar: "https://avatars.githubusercontent.com/u/142417782?v=4",
    },
    {
        id: 9,
        name: "Ana Clara",
        score: 6500,
        avatar: "https://avatars.githubusercontent.com/u/142419823?v=4",
    },
    {
        id: 10,
        name: "Sophia Gallindo",
        score: 6200,
        avatar: "https://avatars.githubusercontent.com/u/67246528?v=4",
    },
];

// Simula requisição para ranking geral
export const fetchAllTimeRanking = (): Promise<Student[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(studentsData);
        }, 1500);
    });
};

// Simula requisição para ranking mensal
export const fetchMonthlyRanking = (): Promise<Student[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(studentsData);
        }, 1500);
    });
};
