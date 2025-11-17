export type TournamentStatus = "active" | "scheduled" | "none";

export interface TournamentData {
    id: number;
    name: string;
    endDate: Date;
    startDate: Date;
    status: TournamentStatus;
}

export interface GuildRanking {
    id: number;
    name: string;
    imageUrl?: string;
    score: number;
    memberCount: number;
}

export interface Prize {
    id: number;
    position: number;
    name: string;
    imageUrl: string;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const calculateStatus = (startDate: Date, endDate: Date): TournamentStatus => {
    const now = new Date();
    
    if (startDate > now) {
        return "scheduled";
    }
    
    if (startDate <= now && endDate >= now) {
        return "active";
    }
    
    return "active";
};

export const fetchTournamentData = async (tournamentId: number): Promise<TournamentData | null> => {
    await delay(800);

    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 3);

    const status = calculateStatus(startDate, endDate);

    return {
        id: tournamentId,
        name: "Torneio de Verão 2024",
        endDate,
        startDate,
        status,
    };
};

export const fetchGuildRanking = async (_: number): Promise<GuildRanking[]> => {
    await delay(1000);
    return [
        {
            id: 1,
            name: "Guerreiros do Código",
            imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=guild-warriors",
            score: 125000,
            memberCount: 7,
        },
        {
            id: 2,
            name: "Dragões de Fogo",
            imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=guild-dragons",
            score: 118000,
            memberCount: 8,
        },
        {
            id: 3,
            name: "Titãs do Aço",
            imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=guild-titans",
            score: 102000,
            memberCount: 6,
        },
        {
            id: 4,
            name: "Lobos Solitários",
            imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=guild-wolves",
            score: 95000,
            memberCount: 5,
        },
        {
            id: 5,
            name: "Fênix Renascida",
            imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=guild-phoenix",
            score: 89000,
            memberCount: 7,
        },
        {
            id: 6,
            name: "Leões da Savana",
            imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=guild-lions",
            score: 82000,
            memberCount: 6,
        },
        {
            id: 7,
            name: "Águias Voadoras",
            imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=guild-eagles",
            score: 76000,
            memberCount: 5,
        },
    ];
};

export const fetchTournamentPrizes = async (_: number): Promise<Prize[]> => {
    await delay(600);
    return [
        {
            id: 1,
            position: 1,
            name: "Tênis Air Jordan 1 Low",
            imageUrl: "https://artwalk.vtexassets.com/arquivos/ids/471003/55355-8-161-1.jpg?v=638373804812600000",
        },
        {
            id: 2,
            position: 2,
            name: "Kit Fusion Whey Protein + Bcaa + Creatina",
            imageUrl: "https://cdn.dooca.store/246/products/srybt6gfnzv3gebzl1stcskrbxp1y4qhqtpg.jpg?v=1628278164",
        },
        {
            id: 3,
            position: 3,
            name: "Kit Whey 100% + Creatina Max Titanium",
            imageUrl: "https://images.tcdn.com.br/img/img_prod/632109/kit_whey_100_900g_creatina_300g_max_titanium_3188_1_f37b70466255a1e6f2ca0b0c171f57b5.jpg",
        },
    ];
};

export const fetchLastPodium = async (): Promise<GuildRanking[] | null> => {
    await delay(800);

    return [
        {
            id: 1,
            name: "Guerreiros do Código",
            imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=guild-warriors",
            score: 125000,
            memberCount: 7,
        },
        {
            id: 2,
            name: "Dragões de Fogo",
            imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=guild-dragons",
            score: 118000,
            memberCount: 8,
        },
        {
            id: 3,
            name: "Titãs do Aço",
            imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=guild-titans",
            score: 102000,
            memberCount: 6,
        },
    ];
};
