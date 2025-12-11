import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

/**
 * Serviço para cancelamento de reservas.
 * Segue o padrão do avaliacaoService.
 */

export interface CancelamentoResumo {
    alunoMatricula: string;
    aulaId: number;
}

export interface CancelamentoResponse {
    sucesso: boolean;
    mensagem: string;
    reembolsoElegivel: boolean;
    valorReembolso: number;
    mensagemReembolso: string;
}

export interface ReembolsoPreview {
    elegivel: boolean;
    valor: number;
    motivo: string;
}

/**
 * Envia requisição de cancelamento para o backend.
 */
export const submitCancelamento = async (request: CancelamentoResumo): Promise<CancelamentoResponse> => {
    try {
        const response = await axios.post<CancelamentoResponse>(`${API_BASE_URL}/reservas/cancelar`, request);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            // Se o servidor retornar uma resposta de erro estruturada
            return error.response.data;
        }
        // Erro genérico
        throw new Error("Erro ao cancelar reserva. Tente novamente.");
    }
};

/**
 * Busca as reservas confirmadas do aluno que podem ser canceladas.
 */
export const buscarReservasParaCancelamento = async (alunoMatricula: string): Promise<CancelamentoResumo[]> => {
    try {
        const response = await axios.get<CancelamentoResumo[]>(`${API_BASE_URL}/reservas/aluno/${alunoMatricula}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar reservas para cancelamento:", error);
        throw new Error("Erro ao buscar reservas. Tente novamente.");
    }
};

/**
 * Calcula preview do reembolso antes de cancelar.
 */
export const calcularReembolso = async (aulaId: number): Promise<ReembolsoPreview> => {
    try {
        const response = await axios.get<ReembolsoPreview>(`${API_BASE_URL}/reservas/cancelar/preview?aulaId=${aulaId}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao calcular reembolso:", error);
        return {
            elegivel: false,
            valor: 0,
            motivo: "Erro ao calcular reembolso",
        };
    }
};

/**
 * Helper para construir requisição de cancelamento.
 */
export const buildCancelamentoRequest = (aulaId: number, alunoMatricula: string): CancelamentoResumo => {
    return {
        alunoMatricula,
        aulaId,
    };
};
