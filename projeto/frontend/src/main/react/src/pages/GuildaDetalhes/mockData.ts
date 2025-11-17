export interface GuildData {
    name: string;
    imageUrl: string;
    code: string;
    memberCount: number;
}

export interface GuildMember {
    id: number;
    name: string;
    avatar?: string;
    score: number;
}

export interface CheckinMessage {
    id: number;
    userId: number;
    userName: string;
    userAvatar?: string;
    workoutName: string;
    description?: string;
    imageUrl?: string;
    timestamp: Date;
}

// Simula delay de API
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchGuildData = async (): Promise<GuildData> => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
        name: "Guerreiros do Código",
        imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=guild-warriors",
        code: "FORGE2024",
        memberCount: 7,
    };
};

export const fetchGuildMembers = async (): Promise<GuildMember[]> => {
    await delay(1000);
    return [
        { id: 1, name: "Paulo Rosado", avatar: "https://avatars.githubusercontent.com/u/117609505?v=4", score: 12500 },
        { id: 2, name: "Gustavo Mourato", avatar: "https://avatars.githubusercontent.com/u/142419362?v=4", score: 11800 },
        { id: 3, name: "Vinícius Jordão", avatar: "https://avatars.githubusercontent.com/u/142420325?v=4", score: 10200 },
        { id: 4, name: "Thomaz Lima", avatar: "https://avatars.githubusercontent.com/u/126795323?v=4", score: 9500 },
        { id: 5, name: "João Marcelo", avatar: "https://avatars.githubusercontent.com/u/142419624?v=4", score: 8900 },
        { id: 6, name: "Gabriel Albuquerque", avatar: "https://avatars.githubusercontent.com/u/142417669?v=4", score: 8200 },
        { id: 7, name: "Evaldo Galdino", avatar: "https://avatars.githubusercontent.com/u/97982032?v=4", score: 7600 },
    ];
};

export const fetchGuildCheckins = async (): Promise<CheckinMessage[]> => {
    await delay(900);
    return [
        {
            id: 1,
            userId: 1,
            userName: "Paulo Rosado",
            userAvatar: "https://avatars.githubusercontent.com/u/117609505?v=4",
            workoutName: "Peito e Tríceps",
            description: "Treino pesado hoje! Consegui bater meu recorde no supino 💪",
            imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
            timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        },
        {
            id: 2,
            userId: 2,
            userName: "Gustavo Mourato",
            userAvatar: "https://avatars.githubusercontent.com/u/142419362?v=4",
            workoutName: "Cardio Matinal",
            description: "Melhor forma de começar o dia!",
            imageUrl: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&q=80",
            timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
        },
        {
            id: 3,
            userId: 3,
            userName: "Vinícius Jordão",
            userAvatar: "https://avatars.githubusercontent.com/u/142420325?v=4",
            workoutName: "Pernas",
            timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
        },
    ];
};

export const fetchAvailableWorkouts = async (): Promise<{ id: string; name: string }[]> => {
    await delay(300);
    return [
        { id: "1", name: "Peito e Tríceps" },
        { id: "2", name: "Costas e Bíceps" },
        { id: "3", name: "Pernas" },
        { id: "4", name: "Ombros e Abdômen" },
        { id: "5", name: "Cardio Matinal" },
        { id: "6", name: "Treino Funcional" },
    ];
};
