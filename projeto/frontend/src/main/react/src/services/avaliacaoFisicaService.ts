import axios from "axios";
import type { Aluno, BioimpedanceData } from "../pages/Evolucao/types";

const API_BASE_URL = "http://localhost:8080/api";

export interface CadastrarAvaliacaoFisicaRequest {
    alunoMatricula: string;
    dataDaAvaliacao: string; // ISO format: YYYY-MM-DD
    professorResponsavelId: number;
    massaGordaPercentual: number;
    massaGordaKg: number;
    massaMagraKg: number;
    massaMuscularEsqueleticaKg: number;
    aguaCorporalTotalPercentual: number;
    gorduraVisceralNivel: number;
    taxaMetabolicaBasalKcal: number;
    massaOsseaKg: number;
    indiceDeMassaCorporal: number;
    bracoRelaxadoCm: number;
    bracoContraidoCm: number;
    antebracoCm: number;
    toraxPeitoralCm: number;
    cinturaCm: number;
    abdomenCm: number;
    quadrilCm: number;
    coxaCm: number;
    panturrilhaCm: number;
}

export interface AvaliacaoFisicaResponse {
    sucesso: boolean;
    mensagem: string;
    dados?: BioimpedanceData[];
}

export interface AlunoBackendResumo {
    matricula: string;
    nome: string;
    avatarUrl?: string;
}

export interface AlunosResponse {
    sucesso: boolean;
    mensagem: string;
    dados?: AlunoBackendResumo[];
}

/**
 * Busca todos os alunos disponíveis para receber avaliação física
 */
export const buscarAlunos = async (): Promise<{ sucesso: boolean; mensagem: string; dados?: Aluno[] }> => {
    try {
        const response = await axios.get<AlunosResponse>(`${API_BASE_URL}/avaliacoes-fisicas/alunos`);
        
        // Mapeia os dados do backend para o formato esperado pelo frontend
        if (response.data.sucesso && response.data.dados) {
            const alunosMapeados: Aluno[] = response.data.dados.map((aluno, index) => ({
                id: index + 1, // ID sequencial para o frontend
                matricula: aluno.matricula,
                nome: aluno.nome,
                avatar: aluno.avatarUrl || `https://i.pravatar.cc/150?img=${(index % 70) + 1}`,
            }));
            
            return {
                sucesso: response.data.sucesso,
                mensagem: response.data.mensagem,
                dados: alunosMapeados,
            };
        }
        
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar alunos:", error);
        throw error;
    }
};

/**
 * Cadastra uma nova avaliação física para um aluno
 */
export const cadastrarAvaliacaoFisica = async (
    dados: CadastrarAvaliacaoFisicaRequest
): Promise<{ sucesso: boolean; mensagem: string }> => {
    try {
        const response = await axios.post<{ sucesso: boolean; mensagem: string }>(
            `${API_BASE_URL}/avaliacoes-fisicas`,
            dados
        );
        return response.data;
    } catch (error) {
        console.error("Erro ao cadastrar avaliação física:", error);
        throw error;
    }
};

/**
 * Busca o histórico de avaliações físicas de um aluno
 */
export const buscarHistoricoAluno = async (matricula: string): Promise<AvaliacaoFisicaResponse> => {
    try {
        const response = await axios.get<any>(
            `${API_BASE_URL}/avaliacoes-fisicas/aluno/${matricula}`
        );
        
        console.log("Dados recebidos do backend:", response.data);
        
        // Converte as datas do formato string para Date e mapeia o nome do campo
        if (response.data.dados) {
            response.data.dados = response.data.dados.map((avaliacao: any) => {
                console.log("Data recebida:", avaliacao.dataAvaliacao, "tipo:", typeof avaliacao.dataAvaliacao);
                
                // Parse manual para evitar problemas de timezone
                // Formato esperado: "YYYY-MM-DD"
                const [year, month, day] = avaliacao.dataAvaliacao.split('-').map(Number);
                const dataConvertida = new Date(year, month - 1, day); // month é 0-indexed
                
                console.log("Data depois da conversão:", dataConvertida, "isValid:", !isNaN(dataConvertida.getTime()));
                
                return {
                    id: avaliacao.id,
                    dataDaAvaliacao: dataConvertida, // Backend retorna "dataAvaliacao", frontend usa "dataDaAvaliacao"
                    professorResponsavel: avaliacao.professorResponsavelNome,
                    massaGordaPercentual: avaliacao.massaGordaPercentual,
                    massaMuscularEsqueleticaKg: avaliacao.massaMuscularEsqueleticaKg,
                    aguaCorporalTotalPercentual: avaliacao.aguaCorporalTotalPercentual,
                    gorduraVisceralNivel: avaliacao.gorduraVisceralNivel,
                    taxaMetabolicaBasalKcal: avaliacao.taxaMetabolicaBasalKcal,
                    indiceDeMassaCorporal: avaliacao.indiceDeMassaCorporal,
                    massaGordaKg: avaliacao.massaGordaKg,
                    massaMagraKg: avaliacao.massaMagraKg,
                    massaOsseaKg: avaliacao.massaOsseaKg,
                    bracoRelaxadoCm: avaliacao.bracoRelaxadoCm,
                    bracoContraidoCm: avaliacao.bracoContraidoCm,
                    antebracoCm: avaliacao.antebracoCm,
                    toraxPeitoralCm: avaliacao.toraxPeitoralCm,
                    cinturaCm: avaliacao.cinturaCm,
                    abdomenCm: avaliacao.abdomenCm,
                    quadrilCm: avaliacao.quadrilCm,
                    coxaCm: avaliacao.coxaCm,
                    panturrilhaCm: avaliacao.panturrilhaCm,
                };
            });
        }
        
        console.log("Dados após conversão:", response.data);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar histórico de avaliações físicas:", error);
        throw error;
    }
};
