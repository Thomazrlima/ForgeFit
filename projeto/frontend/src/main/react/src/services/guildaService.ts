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
 * Interface para editar uma guilda.
 */
export interface AlterarGuildaRequest {
    nome: string;
    descricao?: string;
    imagemURL?: string;
    mestreMatricula: string;
}

/**
 * Interface da resposta ao editar uma guilda.
 */
export interface AlterarGuildaResponse {
    sucesso: boolean;
    mensagem: string;
}

/**
 * Interface para entrar em uma guilda.
 */
export interface EntrarGuildaRequest {
    codigoConvite: string;
    alunoMatricula: string;
}

/**
 * Interface da resposta ao entrar em uma guilda.
 */
export interface EntrarGuildaResponse {
    sucesso: boolean;
    mensagem: string;
    guildaId?: number;
}

/**
 * Interface para excluir uma guilda.
 */
export interface ExcluirGuildaRequest {
    mestreMatricula: string;
}

/**
 * Interface da resposta ao excluir uma guilda.
 */
export interface ExcluirGuildaResponse {
    sucesso: boolean;
    mensagem: string;
}

/**
 * Interface para fazer check-in de treino.
 */
export interface CheckinTreinoRequest {
    alunoMatricula: string;
    planoDeTreinoId: number;
    letraTreino: string;
    mensagem?: string;
    urlImagem?: string;
    dataCheckin?: string; // Formato: yyyy-MM-dd
}

/**
 * Interface da resposta ao fazer check-in.
 */
export interface CheckinTreinoResponse {
    sucesso: boolean;
    mensagem: string;
    checkinId?: number;
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

/**
 * Edita uma guilda existente.
 * PUT /api/guildas/{id}
 *
 * @param guildaId ID da guilda a ser editada
 * @param dados Dados atualizados da guilda
 * @returns Resposta com sucesso/erro
 */
export const editarGuilda = async (guildaId: number, dados: AlterarGuildaRequest): Promise<AlterarGuildaResponse> => {
    try {
        console.log("Enviando requisição para editar guilda:", guildaId, dados);
        const response = await api.put<AlterarGuildaResponse>(`/guildas/${guildaId}`, dados);
        console.log("Resposta do backend:", response.data);
        return response.data;
    } catch (error: unknown) {
        console.error("Erro ao editar guilda:", error);
        
        // Trata erro do backend
        if (error && typeof error === "object" && "response" in error) {
            const axiosError = error as { response?: { data?: AlterarGuildaResponse } };
            if (axiosError.response?.data) {
                return axiosError.response.data;
            }
        }
        
        throw new Error("Erro ao editar guilda. Tente novamente.");
    }
};

/**
 * Entra em uma guilda usando código de convite.
 * POST /api/guildas/entrar
 *
 * @param dados Dados para entrar na guilda (código e matrícula)
 * @returns Resposta com sucesso/erro e ID da guilda
 */
export const entrarGuilda = async (dados: EntrarGuildaRequest): Promise<EntrarGuildaResponse> => {
    try {
        console.log("Enviando requisição para entrar em guilda:", dados);
        const response = await api.post<EntrarGuildaResponse>("/guildas/entrar", dados);
        console.log("Resposta do backend:", response.data);
        return response.data;
    } catch (error: unknown) {
        console.error("Erro ao entrar em guilda:", error);
        
        // Trata erro do backend
        if (error && typeof error === "object" && "response" in error) {
            const axiosError = error as { response?: { data?: EntrarGuildaResponse; status?: number } };
            if (axiosError.response?.data) {
                return axiosError.response.data;
            }
            if (axiosError.response?.status === 409) {
                return { sucesso: false, mensagem: "Você já está em uma guilda" };
            }
        }
        
        throw new Error("Erro ao entrar em guilda. Tente novamente.");
    }
};

/**
 * Exclui (inativa) uma guilda.
 * DELETE /api/guildas/{id}
 *
 * @param guildaId ID da guilda a ser excluída
 * @param mestreMatricula Matrícula do mestre da guilda
 * @returns Resposta com sucesso/erro
 */
export const excluirGuilda = async (guildaId: number, mestreMatricula: string): Promise<ExcluirGuildaResponse> => {
    try {
        console.log("Enviando requisição para excluir guilda:", guildaId, "mestre:", mestreMatricula);
        const response = await api.delete<ExcluirGuildaResponse>(`/guildas/${guildaId}`, {
            data: { mestreMatricula }
        });
        console.log("Resposta do backend:", response.data);
        return response.data;
    } catch (error: unknown) {
        console.error("Erro ao excluir guilda:", error);
        
        // Trata erro do backend
        if (error && typeof error === "object" && "response" in error) {
            const axiosError = error as { 
                response?: { 
                    data?: ExcluirGuildaResponse;
                    status?: number;
                } 
            };
            
            if (axiosError.response?.data) {
                console.error("Erro do backend:", axiosError.response.data);
                return axiosError.response.data;
            }
            
            if (axiosError.response?.status === 400) {
                return {
                    sucesso: false,
                    mensagem: "Você não tem permissão para excluir esta guilda. Apenas o mestre pode excluir."
                };
            }
        }
        
        return {
            sucesso: false,
            mensagem: "Erro ao excluir guilda. Tente novamente."
        };
    }
};

/**
 * Faz check-in de treino na guilda.
 * POST /api/guildas/{guildaId}/checkins/treino
 *
 * @param guildaId ID da guilda
 * @param dados Dados do check-in
 * @returns Resposta com sucesso/erro e ID do check-in
 */
export const fazerCheckinTreino = async (guildaId: number, dados: CheckinTreinoRequest): Promise<CheckinTreinoResponse> => {
    try {
        console.log("Enviando requisição para fazer check-in:", guildaId, dados);
        const response = await api.post<CheckinTreinoResponse>(`/guildas/${guildaId}/checkins/treino`, dados);
        console.log("Resposta do backend:", response.data);
        return response.data;
    } catch (error: unknown) {
        console.error("Erro ao fazer check-in:", error);
        
        // Trata erro do backend
        if (error && typeof error === "object" && "response" in error) {
            const axiosError = error as { response?: { data?: CheckinTreinoResponse } };
            if (axiosError.response?.data) {
                return axiosError.response.data;
            }
        }
        
        throw new Error("Erro ao fazer check-in. Tente novamente.");
    }
};

export const guildaService = {
    criarGuilda,
    buscarDetalhesGuilda,
    verificarMembroGuilda,
    editarGuilda,
    entrarGuilda,
    excluirGuilda,
    fazerCheckinTreino,
};

export default guildaService;
