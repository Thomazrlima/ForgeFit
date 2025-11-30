import { listarRanking, mapPeriodToBackend, type RankingItemResumo } from "../../services/rankingService";

/**
 * Interface Student utilizada pelos componentes de UI.
 * Os dados são mapeados a partir de RankingItemResumo do backend.
 */
export interface Student {
    id: number;
    name: string;
    score: number;
    avatar?: string;
    // Campos adicionais do backend para exibição detalhada
    matricula?: string;
    pontosFrequencia?: number;
    pontosGuilda?: number;
    pontosPerformance?: number;
    numeroDeAulasParticipadas?: number;
    mediaPerformance?: number;
}

/**
 * Verifica se o valor é uma URL válida de imagem.
 */
const isValidImageUrl = (url?: string): boolean => {
    if (!url) return false;
    // Verifica se começa com http:// ou https://
    return url.startsWith("http://") || url.startsWith("https://");
};

/**
 * Gera uma URL de avatar usando o serviço UI Avatars.
 * @param name Nome do usuário para gerar as iniciais
 * @returns URL do avatar gerado
 */
const generateAvatarUrl = (name: string): string => {
    const encodedName = encodeURIComponent(name);
    return `https://ui-avatars.com/api/?name=${encodedName}&background=random&color=fff&bold=true&size=128`;
};

/**
 * Converte RankingItemResumo do backend para Student usado nos componentes.
 */
const mapRankingItemToStudent = (item: RankingItemResumo): Student => ({
    id: item.posicao, // Usamos posição como ID já que é único no contexto do ranking
    name: item.alunoNome,
    score: item.pontuacaoTotal,
    // Se o avatar do backend não for uma URL válida, gera um avatar baseado no nome
    avatar: isValidImageUrl(item.alunoAvatar) ? item.alunoAvatar : generateAvatarUrl(item.alunoNome),
    matricula: item.alunoMatricula,
    pontosFrequencia: item.pontosFrequencia,
    pontosGuilda: item.pontosGuilda,
    pontosPerformance: item.pontosPerformance,
    numeroDeAulasParticipadas: item.numeroDeAulasParticipadas,
    mediaPerformance: item.mediaPerformance,
});

/**
 * Busca o ranking geral (ANUAL) do backend.
 */
export const fetchAllTimeRanking = async (): Promise<Student[]> => {
    try {
        const rankingItems = await listarRanking(mapPeriodToBackend("all-time"));
        return rankingItems.map(mapRankingItemToStudent);
    } catch (error) {
        console.error("Erro ao buscar ranking geral:", error);
        return [];
    }
};

/**
 * Busca o ranking mensal (MENSAL) do backend.
 */
export const fetchMonthlyRanking = async (): Promise<Student[]> => {
    try {
        const rankingItems = await listarRanking(mapPeriodToBackend("monthly"));
        return rankingItems.map(mapRankingItemToStudent);
    } catch (error) {
        console.error("Erro ao buscar ranking mensal:", error);
        return [];
    }
};
