import api from "./api";

export interface ItemExercicio {
    posicao?: number;
    exercicio: string;
    series: number;
    contagem: string;
}

export interface TreinoDiario {
    letra: string;
    tipo: string;
    exercicios: ItemExercicio[];
}

export interface PlanoTreino {
    id: number;
    professorId: number;
    dataCriacao: string;
    dataValidadeSugerida?: string;
    quantidadeTreinos: number;
    treinos: TreinoDiario[];
}

export interface CriarPlanoRequest {
    professorId: number;
    validadeSugerida?: string; // Campo alinhado com o backend
    treinos: Array<{
        letra: string;
        tipo: string;
        exercicios: Array<{
            exercicio: string;
            series: number;
            contagem: string;
        }>;
    }>;
}

// Resposta do endpoint de criação de plano
export interface CriarPlanoResponse {
    sucesso: boolean;
    mensagem: string;
    plano: PlanoTreino | null;
}

// Resposta do endpoint de operação de treino
export interface OperacaoTreinoResponse {
    sucesso: boolean;
    mensagem: string;
}

export interface AtualizarTreinoRequest {
    letra: string;
    tipo: string;
    exercicios: Array<{
        exercicio: string;
        series: number;
        contagem: string;
    }>;
}

// Criar novo plano de treino
export const criarPlanoTreino = async (data: CriarPlanoRequest): Promise<PlanoTreino> => {
    const response = await api.post<CriarPlanoResponse>("/treinos", data);
    if (!response.data.sucesso || !response.data.plano) {
        throw new Error(response.data.mensagem || "Erro ao criar plano de treino");
    }
    return response.data.plano;
};

// Buscar plano de treino por ID
export const buscarPlanoPorId = async (id: number): Promise<PlanoTreino> => {
    const response = await api.get<PlanoTreino>(`/treinos/${id}`);
    return response.data;
};

// Buscar todos os planos de treino de um professor
export const buscarPlanosPorProfessor = async (professorId: number): Promise<PlanoTreino[]> => {
    const response = await api.get<PlanoTreino[]>(`/treinos/professor/${professorId}`);
    return response.data;
};

// Buscar plano ativo de um aluno
export const buscarPlanoAtivoPorAluno = async (matricula: string): Promise<PlanoTreino | null> => {
    try {
        const response = await api.get<PlanoTreino>(`/treinos/aluno/${matricula}`);
        return response.data;
    } catch (error: any) {
        if (error.response?.status === 404) {
            return null;
        }
        throw error;
    }
};

// Adicionar treino diário a um plano existente
export const adicionarTreino = async (planoId: number, treino: { letra: string; tipo: string; exercicios: Array<{ exercicio: string; series: number; contagem: string }> }): Promise<void> => {
    const response = await api.post<OperacaoTreinoResponse>(`/treinos/${planoId}/treino`, treino);
    if (!response.data.sucesso) {
        throw new Error(response.data.mensagem || "Erro ao adicionar treino");
    }
};

// Atualizar um treino diário existente
export const atualizarTreino = async (planoId: number, data: AtualizarTreinoRequest): Promise<void> => {
    const response = await api.put<OperacaoTreinoResponse>(`/treinos/${planoId}/treino`, data);
    if (!response.data.sucesso) {
        throw new Error(response.data.mensagem || "Erro ao atualizar treino");
    }
};

// Excluir um treino diário
export const excluirTreino = async (planoId: number, letra: string): Promise<void> => {
    const response = await api.delete<OperacaoTreinoResponse>(`/treinos/${planoId}/treino/${letra}`);
    if (!response.data.sucesso) {
        throw new Error(response.data.mensagem || "Erro ao excluir treino");
    }
};

// Atribuir plano de treino a um aluno
export const atribuirPlanoAoAluno = async (planoId: number, matricula: string): Promise<void> => {
    const response = await api.put<OperacaoTreinoResponse>(`/treinos/${planoId}/atribuir/${matricula}`);
    if (!response.data.sucesso) {
        throw new Error(response.data.mensagem || "Erro ao atribuir plano ao aluno");
    }
};

// Remover plano de treino de um aluno (desassociar)
export const removerPlanoDoAluno = async (matricula: string): Promise<void> => {
    const response = await api.delete<OperacaoTreinoResponse>(`/treinos/aluno/${matricula}`);
    if (!response.data.sucesso) {
        throw new Error(response.data.mensagem || "Erro ao remover plano do aluno");
    }
};
