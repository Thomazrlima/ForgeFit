import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

/**
 * Serviço para controle de frequência.
 * Segue o padrão do avaliacaoService.
 */

export interface RegistroFrequenciaResumo {
    alunoMatricula: string;
    aulaId: number;
    data: string; // ISO format (YYYY-MM-DD)
    tipoRegistro: "PRESENCA" | "FALTA";
}

export interface FrequenciaResponse {
    sucesso: boolean;
    mensagem: string;
    tipoRegistrado?: string;
}

export interface BloqueioResponse {
    sucesso: boolean;
    mensagem: string;
    bloqueado?: boolean;
    faltasRecentes?: number;
}

/**
 * Registra presença ou falta de um aluno.
 */
export const registrarFrequencia = async (request: RegistroFrequenciaResumo): Promise<FrequenciaResponse> => {
    try {
        const response = await axios.post<FrequenciaResponse>(`${API_BASE_URL}/frequencia`, request);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return error.response.data;
        }
        throw new Error("Erro ao registrar frequência. Tente novamente.");
    }
};

/**
 * Verifica se um aluno está bloqueado por faltas.
 */
export const verificarBloqueio = async (alunoMatricula: string): Promise<BloqueioResponse> => {
    try {
        const response = await axios.get<BloqueioResponse>(`${API_BASE_URL}/frequencia/verificar-bloqueio`, {
            params: { alunoMatricula },
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return error.response.data;
        }
        throw new Error("Erro ao verificar bloqueio. Tente novamente.");
    }
};

/**
 * Helper para construir requisição de registro de presença.
 */
export const buildRegistroPresenca = (aulaId: number, alunoMatricula: string, data: Date = new Date()): RegistroFrequenciaResumo => {
    return {
        alunoMatricula,
        aulaId,
        data: data.toISOString().split("T")[0], // YYYY-MM-DD
        tipoRegistro: "PRESENCA",
    };
};

/**
 * Helper para construir requisição de registro de falta.
 */
export const buildRegistroFalta = (aulaId: number, alunoMatricula: string, data: Date = new Date()): RegistroFrequenciaResumo => {
    return {
        alunoMatricula,
        aulaId,
        data: data.toISOString().split("T")[0], // YYYY-MM-DD
        tipoRegistro: "FALTA",
    };
};
