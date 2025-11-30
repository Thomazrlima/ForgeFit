import api from "./api";

/**
 * Interface que representa um item do ranking retornado pelo backend.
 * Corresponde ao RankingItemResumo.java
 */
export interface RankingItemResumo {
    posicao: number;
    alunoMatricula: string;
    alunoNome: string;
    alunoAvatar?: string;
    pontuacaoTotal: number;
    pontosFrequencia: number;
    pontosGuilda: number;
    pontosPerformance: number;
    numeroDeAulasParticipadas: number;
    mediaPerformance: number;
}

/**
 * Períodos disponíveis para consulta de ranking.
 * Corresponde ao PeriodoRanking enum no backend.
 */
export type PeriodoRanking = "SEMANAL" | "MENSAL" | "GERAL";

/**
 * Mapeamento do frontend para o backend.
 * O frontend usa "monthly" e "all-time", o backend usa "MENSAL" e "GERAL".
 */
export const mapPeriodToBackend = (period: "monthly" | "all-time"): PeriodoRanking => {
    return period === "monthly" ? "MENSAL" : "GERAL";
};

/**
 * Lista o ranking completo de um período específico.
 * GET /api/ranking?periodo=MENSAL
 * 
 * @param periodo Período do ranking (SEMANAL, MENSAL, ANUAL)
 * @returns Lista ordenada de itens do ranking
 */
export const listarRanking = async (periodo: PeriodoRanking = "MENSAL"): Promise<RankingItemResumo[]> => {
    try {
        const response = await api.get<RankingItemResumo[]>("/ranking", {
            params: { periodo }
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar ranking:", error);
        throw new Error("Erro ao carregar o ranking. Tente novamente.");
    }
};

/**
 * Lista o pódio (top 3) do ranking.
 * GET /api/ranking/podio?periodo=MENSAL
 * 
 * @param periodo Período do ranking (SEMANAL, MENSAL, ANUAL)
 * @returns Lista com os 3 primeiros colocados
 */
export const listarPodio = async (periodo: PeriodoRanking = "MENSAL"): Promise<RankingItemResumo[]> => {
    try {
        const response = await api.get<RankingItemResumo[]>("/ranking/podio", {
            params: { periodo }
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar pódio:", error);
        throw new Error("Erro ao carregar o pódio. Tente novamente.");
    }
};

/**
 * Lista os top N alunos do ranking.
 * GET /api/ranking/top/{limite}?periodo=MENSAL
 * 
 * @param limite Número de alunos a retornar
 * @param periodo Período do ranking (SEMANAL, MENSAL, ANUAL)
 * @returns Lista com os N primeiros colocados
 */
export const listarTopN = async (limite: number, periodo: PeriodoRanking = "MENSAL"): Promise<RankingItemResumo[]> => {
    try {
        const response = await api.get<RankingItemResumo[]>(`/ranking/top/${limite}`, {
            params: { periodo }
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar top N:", error);
        throw new Error(`Erro ao carregar os top ${limite}. Tente novamente.`);
    }
};

/**
 * Busca a posição de um aluno específico no ranking.
 * GET /api/ranking/aluno/{matricula}?periodo=MENSAL
 * 
 * @param matricula Matrícula do aluno
 * @param periodo Período do ranking (SEMANAL, MENSAL, ANUAL)
 * @returns Item do ranking do aluno ou null se não encontrado
 */
export const buscarPosicaoAluno = async (matricula: string, periodo: PeriodoRanking = "MENSAL"): Promise<RankingItemResumo | null> => {
    try {
        const response = await api.get<RankingItemResumo>(`/ranking/aluno/${matricula}`, {
            params: { periodo }
        });
        return response.data;
    } catch (error: unknown) {
        // Se o aluno não foi encontrado, retorna null
        if (error && typeof error === 'object' && 'response' in error) {
            const axiosError = error as { response?: { status?: number } };
            if (axiosError.response?.status === 404) {
                return null;
            }
        }
        console.error("Erro ao buscar posição do aluno:", error);
        throw new Error("Erro ao buscar posição do aluno. Tente novamente.");
    }
};

/**
 * Lista os períodos disponíveis para consulta.
 * GET /api/ranking/periodos
 * 
 * @returns Lista de períodos disponíveis
 */
export const listarPeriodos = async (): Promise<string[]> => {
    try {
        const response = await api.get<string[]>("/ranking/periodos");
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar períodos:", error);
        throw new Error("Erro ao carregar períodos disponíveis. Tente novamente.");
    }
};

/**
 * Funções auxiliares para conversão de dados do backend para o formato do frontend.
 */
export const rankingService = {
    listarRanking,
    listarPodio,
    listarTopN,
    buscarPosicaoAluno,
    listarPeriodos,
    mapPeriodToBackend,
};

export default rankingService;
