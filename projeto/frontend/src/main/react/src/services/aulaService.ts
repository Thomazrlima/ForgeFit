import api from "./api";
import { Modalidade, Espaco, TipoAula, modalidadeLabels, espacoLabels } from "../components/common/CreateClassModal";
import { getModalidadeImage } from "../utils/modalidadeImages";

export interface MinhaAulaResponse {
    id: number;
    modalidade: string;
    espaco: string;
    inicio: string; // ISO 8601
    fim: string; // ISO 8601
    capacidade: number;
    status: string;
    professorId: number;
    professorNome: string;
    vagasOcupadas: number;
    vagasDisponiveis: number;
    tamanhoListaEspera: number;
}

export interface AulaFrontend {
    id: number;
    instructor: string;
    instructorId: number;
    category: string;
    schedule: string;
    capacity: number;
    enrolled: number;
    location: string;
    image: string;
    enrollmentStatus: "not_enrolled" | "enrolled" | "waiting_list" | "to_evaluate";
    waitingList: number;
    isClassFinished?: boolean;
    classDate?: string;
}

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
     * Conclui uma aula (marca como concluída)
     * @param aulaId ID da aula a concluir
     */
    async concluirAula(aulaId: number): Promise<void> {
        try {
            await api.put(`/aulas/${aulaId}/concluir`);
        } catch (error: any) {
            const mensagemErro = error.response?.data?.message || "Erro ao concluir aula";
            throw new Error(mensagemErro);
        }
    }

    /**
     * Lista aulas do professor autenticado
     * @returns Lista de aulas com informações completas
     */
    async listarAulasDoProfessor(): Promise<MinhaAulaResponse[]> {
        try {
            const response = await api.get<MinhaAulaResponse[]>(`/aulas/professor`);
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
     * Método auxiliar para construir data/hora em ISO 8601 LOCAL
     * @param classData Dados do formulário
     * @param tipo "inicio" ou "fim"
     * @returns String no formato ISO 8601 sem conversão de timezone
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

        // Combinar data e hora - mantendo o horário local sem conversão UTC
        let horaInicio = hora;
        
        if (tipo === "fim") {
            // Adicionar 1 hora para horário de fim
            const [h, m] = hora.split(":").map(Number);
            const novaHora = (h + 1) % 24;
            horaInicio = `${novaHora.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
        }

        // Retornar no formato ISO 8601 LOCAL (sem 'Z' no final para evitar conversão UTC)
        return `${data}T${horaInicio}:00`;
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

    async buscarAulasDoAluno(matricula: string): Promise<AulaFrontend[]> {
        try {
            const response = await api.get<MinhaAulaResponse[]>(`/aulas/aluno/${matricula}`);
            console.log("DEBUG buscarAulasDoAluno - resposta do backend:", response.data);
            return response.data.map((aula) => {
                console.log("DEBUG mapeando aula:", aula.id, "professorId:", aula.professorId, "inicio:", aula.inicio);
                // Se a aula está concluída, marcar como "to_evaluate"
                const status = aula.status === "CONCLUIDA" ? "to_evaluate" : "enrolled";
                const converted = this.converterParaAulaFrontend(aula, status);
                console.log("DEBUG aula convertida:", converted.id, "instructorId:", converted.instructorId, "classDate:", converted.classDate);
                return converted;
            });
        } catch (error) {
            console.error("Erro ao buscar aulas do aluno:", error);
            throw error;
        }
    }

    async buscarAulasNaListaDeEspera(matricula: string): Promise<AulaFrontend[]> {
        try {
            const response = await api.get<MinhaAulaResponse[]>(`/aulas/aluno/${matricula}/lista-espera`);
            return response.data.map((aula) => this.converterParaAulaFrontend(aula, "waiting_list"));
        } catch (error) {
            // Retorna array vazio se endpoint não existir (404) ou outro erro
            console.warn("Lista de espera não disponível:", error);
            return [];
        }
    }

    async buscarTodasAulasFormatadas(matricula?: string): Promise<AulaFrontend[]> {
        try {
            const params = matricula ? { matricula } : {};
            const response = await api.get<MinhaAulaResponse[]>("/aulas", { params });
            return response.data.map((aula) => this.converterParaAulaFrontend(aula, "not_enrolled"));
        } catch (error) {
            console.error("Erro ao buscar todas as aulas:", error);
            throw error;
        }
    }

    private converterParaAulaFrontend(aula: MinhaAulaResponse, enrollmentStatus: "not_enrolled" | "enrolled" | "waiting_list" | "to_evaluate"): AulaFrontend {
        // Extrair data e hora diretamente da string ISO para evitar conversão de timezone
        const inicioStr = aula.inicio || "";
        const [dataParte, horaParte] = inicioStr.split("T");
        const horaFormatada = horaParte ? horaParte.substring(0, 5) : "00:00"; // "HH:mm"
        
        // Formatar a data para exibição (dd/mm/yyyy)
        const [ano, mes, dia] = (dataParte || "").split("-");
        const dataFormatada = dataParte ? `${dia}/${mes}/${ano}` : "";

        return {
            id: aula.id,
            instructor: aula.professorNome,
            instructorId: aula.professorId,
            category: this.formatarModalidade(aula.modalidade),
            schedule: `${dataFormatada} - ${horaFormatada}`,
            capacity: aula.capacidade,
            enrolled: aula.vagasOcupadas,
            location: this.formatarEspaco(aula.espaco),
            image: getModalidadeImage(aula.modalidade),
            enrollmentStatus,
            waitingList: aula.tamanhoListaEspera,
            isClassFinished: aula.status === "CONCLUIDA",
            classDate: dataParte,
        };
    }

    private formatarModalidade(modalidade: string): string {
        // Usar os labels padronizados do CreateClassModal
        if (modalidade in Modalidade) {
            return modalidadeLabels[modalidade as Modalidade] || modalidade;
        }
        // Fallback para modalidades não mapeadas
        const mapa: Record<string, string> = {
            YOGA: "Yoga",
            SPINNING: "Spinning",
            FUNCIONAL: "Funcional",
            PILATES: "Pilates",
            DANCA: "Dança",
            LUTA: "Luta",
            CROSSFIT: "Crossfit",
            MUSCULACAO: "Musculação",
        };
        return mapa[modalidade] || modalidade;
    }

    private formatarEspaco(espaco: string): string {
        // Usar os labels padronizados do CreateClassModal
        if (espaco in Espaco) {
            return espacoLabels[espaco as Espaco] || espaco;
        }
        // Fallback para espaços não mapeados
        const mapa: Record<string, string> = {
            SALA01_MULTIUSO: "Sala 01 - Multiuso",
            SALA02_MULTIUSO: "Sala 02 - Multiuso",
            SALA02_SPINNING: "Sala 02 - Spinning",
            SALA03_SPINNING: "Sala 03 - Spinning",
            SALA03_PILATES: "Sala 03 - Pilates",
            SALA04_FUNCIONAL: "Sala 04 - Funcional",
            ESTUDIO_PILATES: "Estúdio Pilates",
            AREA_DE_LUTAS: "Área de Lutas",
            AREA_EXTERNA: "Área Externa",
            RING_LUTA: "Ring de Luta",
            AREA_DE_PESO_LIVRE: "Área de Peso Livre",
        };
        return mapa[espaco] || espaco;
    }
}

export default new AulaService();
