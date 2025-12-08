import api from "./api";
import { Modalidade, Espaco, TipoAula } from "../components/common/CreateClassModal";

/**
 * Interface para dados de aula enviados ao backend
 */
export interface CreateAulaRequest {
    modalidade: Modalidade;
    espaco: Espaco;
    tipoAula: TipoAula;
    capacidade: number;
    horarioInicio: string; // ISO 8601 format: 2024-01-15T19:00:00
    horarioFim: string; // ISO 8601 format: 2024-01-15T20:00:00
    diasDaSemana?: number[]; // Para aulas recorrentes: 0=Dom, 1=Seg, ..., 6=Sáb
    dataFim?: string; // Para aulas recorrentes: ISO 8601 format
}

/**
 * Interface para resposta do backend ao criar aula
 */
export interface AulaResponse {
    id: number;
    modalidade: Modalidade;
    espaco: Espaco;
    capacidade: number;
    horarioInicio: string;
    horarioFim: string;
    professorId: number;
    status: string;
}

/**
 * Classe de serviço para operações com aulas
 */
class AulaService {
    /**
     * Cria uma nova aula (única ou recorrente)
     * @param classData Dados do formulário de criação de aula
     * @param professorId ID do professor (obtido do contexto de usuário)
     * @returns Resposta com dados da aula criada
     */
    async criarAula(classData: any, professorId: number): Promise<AulaResponse> {
        try {
            // Construir objetos de data/hora em ISO 8601
            const horarioInicio = this.construirDataHora(classData, "inicio");
            const horarioFim = this.construirDataHora(classData, "fim");

            const payload: CreateAulaRequest = {
                modalidade: classData.modalidade,
                espaco: classData.espaco,
                tipoAula: classData.tipoAula,
                capacidade: classData.capacity,
                horarioInicio,
                horarioFim,
            };

            // Se for aula recorrente, adicionar informações de recorrência
            if (classData.tipoAula !== TipoAula.UNICA) {
                payload.diasDaSemana = classData.selectedDays || [];
                payload.dataFim = this.formatarDataISO(classData.endDate);
            }

            console.log("=== PAYLOAD ENVIADO ===", JSON.stringify(payload, null, 2));

            const response = await api.post<AulaResponse>(`/aulas`, payload);
            return response.data;
        } catch (error: any) {
            console.error("Erro completo:", error);
            console.error("Response data:", error.response?.data);
            const mensagemErro = error.response?.data?.mensagem || error.response?.data?.message || error.message || "Erro ao criar aula";
            throw new Error(mensagemErro);
        }
    }

    /**
     * Atualiza uma aula existente
     * @param aulaId ID da aula a atualizar
     * @param classData Novos dados da aula
     * @returns Resposta com dados atualizados
     */
    async atualizarAula(aulaId: number, classData: any): Promise<AulaResponse> {
        try {
            const horarioInicio = this.construirDataHora(classData, "inicio");
            const horarioFim = this.construirDataHora(classData, "fim");

            const payload: CreateAulaRequest = {
                modalidade: classData.modalidade,
                espaco: classData.espaco,
                tipoAula: classData.tipoAula,
                capacidade: classData.capacity,
                horarioInicio,
                horarioFim,
            };

            const response = await api.put<AulaResponse>(`/aulas/${aulaId}`, payload);
            return response.data;
        } catch (error: any) {
            const mensagemErro = error.response?.data?.message || "Erro ao atualizar aula";
            throw new Error(mensagemErro);
        }
    }

    /**
     * Deleta uma aula
     * @param aulaId ID da aula a deletar
     */
    async deletarAula(aulaId: number): Promise<void> {
        try {
            await api.delete(`/aulas/${aulaId}`);
        } catch (error: any) {
            const mensagemErro = error.response?.data?.message || "Erro ao deletar aula";
            throw new Error(mensagemErro);
        }
    }

    /**
     * Lista aulas do professor autenticado
     * @returns Lista de aulas
     */
    async listarAulasDoProfessor(): Promise<AulaResponse[]> {
        try {
            const response = await api.get<AulaResponse[]>(`/aulas/professor`);
            return response.data;
        } catch (error: any) {
            const mensagemErro = error.response?.data?.message || "Erro ao listar aulas";
            throw new Error(mensagemErro);
        }
    }

    /**
     * Obtém detalhes de uma aula específica
     * @param aulaId ID da aula
     */
    async obterAula(aulaId: number): Promise<AulaResponse> {
        try {
            const response = await api.get<AulaResponse>(`/aulas/${aulaId}`);
            return response.data;
        } catch (error: any) {
            const mensagemErro = error.response?.data?.message || "Erro ao obter aula";
            throw new Error(mensagemErro);
        }
    }

    /**
     * Método auxiliar para construir data/hora em ISO 8601
     * @param classData Dados do formulário
     * @param tipo "inicio" ou "fim"
     * @returns String no formato ISO 8601
     */
    private construirDataHora(classData: any, tipo: "inicio" | "fim"): string {
        let data: string;

        if (classData.tipoAula === TipoAula.UNICA) {
            // Para aula única, usar a data específica
            data = classData.classDate;
        } else {
            // Para aulas recorrentes, usar a data de início
            data = classData.startDate;
        }

        const hora = classData.time; // Formato: "HH:mm"

        // Combinar data e hora
        const dateObj = new Date(`${data}T${hora}:00`);

        if (tipo === "fim") {
            // Adicionar 1 hora para horário de fim
            dateObj.setHours(dateObj.getHours() + 1);
        }

        return dateObj.toISOString();
    }

    /**
     * Formata uma data para ISO 8601
     * @param dataStr String de data (formato dd/MM/yyyy ou yyyy-MM-dd)
     * @returns String no formato ISO 8601
     */
    private formatarDataISO(dataStr: string): string {
        if (!dataStr) return "";

        let dateObj: Date;

        // Tentar detectar o formato
        if (dataStr.includes("/")) {
            // Formato: dd/MM/yyyy
            const [day, month, year] = dataStr.split("/");
            dateObj = new Date(`${year}-${month}-${day}`);
        } else {
            // Formato: yyyy-MM-dd
            dateObj = new Date(dataStr);
        }

        return dateObj.toISOString().split("T")[0];
    }
}

export default new AulaService();
