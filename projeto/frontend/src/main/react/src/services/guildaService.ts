import api from "./api";

/**
 * Interface para criar uma nova guilda.
 */
export interface CriarGuildaRequest {
    nome: string;
    descricao?: string;
    imagemURL?: string;
    mestreMatricula: string;
}

/**
 * Interface da resposta ao criar uma guilda.
 */
export interface CriarGuildaResponse {
    sucesso: boolean;
    mensagem: string;
    guildaId?: number;
    codigoConvite?: string;
}

/**
 * Interface para dados de um membro da guilda.
 */
export interface MembroDTO {
    matricula: string;
    nome: string;
    avatarUrl?: string;
    pontuacao: number;
    dataEntrada?: string;
}

/**
 * Interface para dados de um check-in.
 */
export interface CheckinDTO {
    id: number;
    alunoMatricula: string;
    alunoNome: string;
    alunoAvatarUrl?: string;
    nomeContexto: string;
    mensagem?: string;
    urlImagem?: string;
    dataCheckin: string;
    pontuacao: number;
}

/**
 * Interface para detalhes completos da guilda.
 */
export interface GuildaDetalhesResponse {
    id: number;
    nome: string;
    descricao?: string;
    imagemUrl?: string;
    codigoConvite: string;
    mestreMatricula: string;
    pontuacaoTotal: number;
    numeroMembros: number;
    membros: MembroDTO[];
    checkins: CheckinDTO[];
}

/**
 * Interface para verificar se aluno está em uma guilda.
 */
export interface VerificarMembroResponse {
    temGuilda: boolean;
    guildaId?: number;
}

/**
 * Cria uma nova guilda.
 * POST /api/guildas
 *
 * @param dados Dados da guilda a ser criada
 * @returns Resposta com sucesso/erro e dados da guilda criada
 */
export const criarGuilda = async (dados: CriarGuildaRequest): Promise<CriarGuildaResponse> => {
    try {
        console.log("Enviando requisição para criar guilda:", dados);
        const response = await api.post<CriarGuildaResponse>("/guildas", dados);
        console.log("Resposta do backend:", response.data);
        return response.data;
    } catch (error: unknown) {
        console.error("Erro ao criar guilda:", error);
        
        // Trata erro do backend
        if (error && typeof error === "object" && "response" in error) {
            const axiosError = error as { response?: { data?: CriarGuildaResponse } };
            if (axiosError.response?.data) {
                return axiosError.response.data;
            }
        }
        
        throw new Error("Erro ao criar guilda. Tente novamente.");
    }
};

/**
 * Busca os detalhes completos de uma guilda por ID.
 * GET /api/guildas/{id}/detalhes
 *
 * @param guildaId ID da guilda
 * @returns Detalhes da guilda com membros e check-ins
 */
export const buscarDetalhesGuilda = async (guildaId: number): Promise<GuildaDetalhesResponse> => {
    try {
        const response = await api.get<GuildaDetalhesResponse>(`/guildas/${guildaId}/detalhes`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar detalhes da guilda:", error);
        throw new Error("Erro ao carregar detalhes da guilda. Tente novamente.");
    }
};

/**
 * Verifica se o aluno está em alguma guilda através da tabela GUILDA_MEMBROS.
 * GET /api/guildas/membro/{matricula}
 *
 * @param matricula Matrícula do aluno
 * @returns Informação se tem guilda e qual o ID
 */
export const verificarMembroGuilda = async (matricula: string): Promise<VerificarMembroResponse> => {
    try {
        const response = await api.get<VerificarMembroResponse>(`/guildas/membro/${matricula}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao verificar membro da guilda:", error);
        return { temGuilda: false };
    }
};

export const guildaService = {
    criarGuilda,
    buscarDetalhesGuilda,
};

export default guildaService;
