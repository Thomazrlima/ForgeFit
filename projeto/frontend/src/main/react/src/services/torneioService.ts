import api from "./api";

export interface TournamentData {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    status: "active" | "scheduled" | "none";
}

export interface CreateTournamentDTO {
    name: string;
    startDate: string;
    endDate: string;
}

export interface UpdateTournamentDTO {
    name?: string;
    startDate?: string;
    endDate?: string;
}

export interface PrizeData {
    id: number;
    position: number;
    name: string;
    imageUrl: string;
}

export interface CreatePrizeDTO {
    position: number;
    name: string;
    imageUrl: string;
}

export interface TournamentResponse {
    sucesso: boolean;
    mensagem?: string;
    data?: TournamentData;
}

export interface PrizesResponse {
    sucesso: boolean;
    mensagem?: string;
    data?: PrizeData[];
}

export interface GuildRanking {
    id: number;
    name: string;
    imageUrl?: string;
    score: number;
    memberCount: number;
}

export const torneioService = {
    /**
     * Busca o torneio atual (ativo ou agendado)
     */
    getCurrentTournament: async (): Promise<TournamentResponse> => {
        try {
            const response = await api.get<{ data: TournamentData | null; status: string }>("/torneios/atual");
            if (response.data.data) {
                return {
                    sucesso: true,
                    data: response.data.data,
                };
            }
            return {
                sucesso: true,
                data: undefined,
            };
        } catch (error: any) {
            console.error("Erro ao buscar torneio atual:", error);
            const mensagem = error.response?.data?.mensagem || "Erro ao buscar torneio atual";
            return {
                sucesso: false,
                mensagem,
            };
        }
    },

    /**
     * Cria um novo torneio
     */
    createTournament: async (data: CreateTournamentDTO): Promise<TournamentResponse> => {
        try {
            const response = await api.post<{ sucesso: boolean; mensagem: string; data?: any }>("/torneios", {
                nome: data.name,
                dataInicio: data.startDate,
                dataFim: data.endDate,
            });
            
            if (response.data.sucesso && response.data.data) {
                return {
                    sucesso: true,
                    mensagem: response.data.mensagem || "Torneio criado com sucesso",
                    data: {
                        id: response.data.data.id,
                        name: response.data.data.nome || data.name,
                        startDate: response.data.data.dataInicio || data.startDate,
                        endDate: response.data.data.dataFim || data.endDate,
                        status: response.data.data.status || "scheduled",
                    },
                };
            }
            
            return {
                sucesso: response.data.sucesso,
                mensagem: response.data.mensagem || "Torneio criado com sucesso",
            };
        } catch (error: any) {
            console.error("Erro ao criar torneio:", error);
            const mensagem = error.response?.data?.mensagem || "Erro ao criar torneio";
            return {
                sucesso: false,
                mensagem,
            };
        }
    },

    /**
     * Atualiza um torneio existente
     */
    updateTournament: async (id: number, data: UpdateTournamentDTO): Promise<TournamentResponse> => {
        try {
            const response = await api.put<{ sucesso: boolean; mensagem: string }>(`/torneios/${id}`, {
                nome: data.name,
                dataInicio: data.startDate,
                dataFim: data.endDate,
            });
            return {
                sucesso: response.data.sucesso,
                mensagem: response.data.mensagem,
            };
        } catch (error: any) {
            console.error("Erro ao atualizar torneio:", error);
            const mensagem = error.response?.data?.mensagem || "Erro ao atualizar torneio";
            return {
                sucesso: false,
                mensagem,
            };
        }
    },

    /**
     * Cancela um torneio
     */
    cancelTournament: async (id: number): Promise<TournamentResponse> => {
        try {
            const response = await api.delete<{ sucesso: boolean; mensagem: string }>(`/torneios/${id}`);
            return {
                sucesso: response.data.sucesso,
                mensagem: response.data.mensagem,
            };
        } catch (error: any) {
            console.error("Erro ao cancelar torneio:", error);
            const mensagem = error.response?.data?.mensagem || "Erro ao cancelar torneio";
            return {
                sucesso: false,
                mensagem,
            };
        }
    },

    /**
     * Busca as premiações de um torneio
     */
    getPrizes: async (tournamentId: number): Promise<PrizesResponse> => {
        try {
            const response = await api.get<Array<{ id: number; position: number; name: string; imageUrl: string }>>(`/torneios/${tournamentId}/premios`);
            return {
                sucesso: true,
                data: response.data.map((p) => ({
                    id: p.id,
                    position: p.position,
                    name: p.name,
                    imageUrl: p.imageUrl,
                })),
            };
        } catch (error: any) {
            console.error("Erro ao buscar premiações:", error);
            const mensagem = error.response?.data?.mensagem || "Erro ao buscar premiações";
            return {
                sucesso: false,
                mensagem,
            };
        }
    },

    /**
     * Salva ou atualiza as premiações de um torneio
     */
    savePrizes: async (tournamentId: number, prizes: CreatePrizeDTO[]): Promise<PrizesResponse> => {
        try {
            const response = await api.put<{ sucesso: boolean; mensagem: string; data: Array<{ id: number; position: number; name: string; imageUrl: string }> }>(
                `/torneios/${tournamentId}/premios`,
                {
                    prizes: prizes.map((p) => ({
                        position: p.position,
                        nome: p.name,
                        imageUrl: p.imageUrl,
                    })),
                }
            );
            return {
                sucesso: response.data.sucesso,
                mensagem: response.data.mensagem,
                data: response.data.data?.map((p) => ({
                    id: p.id,
                    position: p.position,
                    name: p.name,
                    imageUrl: p.imageUrl,
                })),
            };
        } catch (error: any) {
            console.error("Erro ao salvar premiações:", error);
            const mensagem = error.response?.data?.mensagem || "Erro ao salvar premiações";
            return {
                sucesso: false,
                mensagem,
            };
        }
    },

    /**
     * Busca o ranking de guildas de um torneio
     */
    getGuildRanking: async (tournamentId: number): Promise<GuildRanking[]> => {
        try {
            const response = await api.get<Array<{ id: number; name: string; imageUrl?: string; score: number; memberCount: number }>>(
                `/torneios/${tournamentId}/ranking`
            );
            return response.data.map((g) => ({
                id: g.id,
                name: g.name,
                imageUrl: g.imageUrl,
                score: g.score,
                memberCount: g.memberCount,
            }));
        } catch (error: any) {
            console.error("Erro ao buscar ranking de guildas:", error);
            return [];
        }
    },

    /**
     * Busca o último pódio (top 3) do torneio finalizado mais recente
     */
    getLastPodium: async (): Promise<GuildRanking[]> => {
        try {
            const response = await api.get<Array<{ id: number; name: string; imageUrl?: string; score: number; memberCount: number }>>(
                "/torneios/finalizados/ultimo-podio"
            );
            return response.data.map((g) => ({
                id: g.id,
                name: g.name,
                imageUrl: g.imageUrl,
                score: g.score,
                memberCount: g.memberCount,
            }));
        } catch (error: any) {
            console.error("Erro ao buscar último pódio:", error);
            return [];
        }
    },
};

export default torneioService;
