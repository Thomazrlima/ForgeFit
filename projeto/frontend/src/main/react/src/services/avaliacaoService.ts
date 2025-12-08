import axios from "axios";
import type { ClassRating } from "../pages/Aulas/mockData";

const API_BASE_URL = "http://localhost:8080/api";

export interface SubmitRatingRequest {
    alunoMatricula: string;
    professorId: number;
    aulaId: number;
    dataOcorrenciaAula: string; // ISO date format: "YYYY-MM-DD"
    notaPontualidade: number;
    notaDidatica: number;
    notaAtencao: number;
    comentario?: string;
}

export interface SubmitRatingResponse {
    sucesso: boolean;
    mensagem: string;
}

export const submitRating = async (request: SubmitRatingRequest): Promise<SubmitRatingResponse> => {
    try {
        const response = await axios.post<SubmitRatingResponse>(`${API_BASE_URL}/avaliacoes`, request);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            // Se o servidor retornar uma resposta de erro estruturada
            return error.response.data;
        }
        // Erro genérico
        throw new Error("Erro ao enviar avaliação. Tente novamente.");
    }
};

/**
 * Helper para converter ClassRating + informações da aula em SubmitRatingRequest
 */
export const buildRatingRequest = (classId: number, rating: ClassRating, alunoMatricula: string, professorId: number, dataOcorrenciaAula: string): SubmitRatingRequest => {
    return {
        alunoMatricula,
        professorId,
        aulaId: classId,
        dataOcorrenciaAula,
        notaPontualidade: rating.pontualidade,
        notaDidatica: rating.didatica,
        notaAtencao: rating.atencao,
        comentario: rating.comentarios,
    };
};
