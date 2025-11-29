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
}

/**
 * Envia requisição de cancelamento para o backend.
 */
export const submitCancelamento = async (
    request: CancelamentoResumo
): Promise<CancelamentoResponse> => {
    try {
        const response = await axios.post<CancelamentoResponse>(
            `${API_BASE_URL}/reservas/cancelar`, 
            request
        );
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
 * Helper para construir requisição de cancelamento.
 */
export const buildCancelamentoRequest = (
    aulaId: number,
    alunoMatricula: string
): CancelamentoResumo => {
    return {
        alunoMatricula,
        aulaId
    };
};
