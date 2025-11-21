import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from './api';

// ============================================
// EXEMPLO: Hook para buscar aulas
// ============================================

export interface Aula {
    id: number;
    professor: string;
    modalidade: string;
    espaco: string;
    capacidade: number;
    inicio: string;
    fim: string;
    status: string;
}

export const useAulas = () => {
    return useQuery({
        queryKey: ['aulas'],
        queryFn: async () => {
            const response = await api.get<Aula[]>('/aulas');
            return response.data;
        },
    });
};

// ============================================
// EXEMPLO: Hook para reservar aula
// ============================================

interface ReservaRequest {
    aulaId: number;
    alunoMatricula: string;
}

interface ReservaResponse {
    sucesso: boolean;
    mensagem: string;
}

export const useReservarAula = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: ReservaRequest) => {
            const response = await api.post<ReservaResponse>('/aulas/reservar', data);
            return response.data;
        },
        onSuccess: () => {
            // Invalidar e refetch de aulas após reserva bem-sucedida
            queryClient.invalidateQueries({ queryKey: ['aulas'] });
        },
    });
};

// ============================================
// EXEMPLO DE USO NO COMPONENTE
// ============================================

/*
import { useAulas, useReservarAula } from '../services/aulaService';

function AulasPage() {
    const { data: aulas, isLoading, error } = useAulas();
    const reservarMutation = useReservarAula();

    const handleReservar = (aulaId: number) => {
        reservarMutation.mutate({
            aulaId,
            alunoMatricula: user.matricula!
        }, {
            onSuccess: (data) => {
                console.log(data.mensagem);
            },
            onError: (error) => {
                console.error('Erro ao reservar:', error);
            }
        });
    };

    if (isLoading) return <div>Carregando...</div>;
    if (error) return <div>Erro ao carregar aulas</div>;

    return (
        <div>
            {aulas?.map(aula => (
                <div key={aula.id}>
                    <h3>{aula.modalidade}</h3>
                    <button 
                        onClick={() => handleReservar(aula.id)}
                        disabled={reservarMutation.isPending}
                    >
                        {reservarMutation.isPending ? 'Reservando...' : 'Reservar'}
                    </button>
                </div>
            ))}
        </div>
    );
}
*/

// ============================================
// EXEMPLO: Hook para ranking
// ============================================

export interface RankingItem {
    posicao: number;
    aluno: string;
    pontos: number;
    avatar?: string;
}

export const useRanking = (periodo: 'SEMANAL' | 'MENSAL' | 'GERAL') => {
    return useQuery({
        queryKey: ['ranking', periodo],
        queryFn: async () => {
            const response = await api.get<RankingItem[]>(`/ranking/${periodo}`);
            return response.data;
        },
        staleTime: 60000, // 1 minuto
    });
};

// ============================================
// EXEMPLO: Hook para guilda do usuário
// ============================================

export interface Guilda {
    id: number;
    nome: string;
    descricao: string;
    imagemUrl?: string;
    pontuacaoTotal: number;
    membros: number;
}

export const useMinhaGuilda = (alunoMatricula?: string) => {
    return useQuery({
        queryKey: ['guilda', alunoMatricula],
        queryFn: async () => {
            const response = await api.get<Guilda>(`/guildas/aluno/${alunoMatricula}`);
            return response.data;
        },
        enabled: !!alunoMatricula, // Só executa se tiver matrícula
    });
};

// ============================================
// PADRÃO RECOMENDADO PARA NOVOS SERVIÇOS
// ============================================

/*
1. Criar interface TypeScript para o tipo de dados
2. Criar hook usando useQuery para GET
3. Criar hook usando useMutation para POST/PUT/DELETE
4. Invalidar queries relevantes após mutations
5. Tratar loading e error states no componente
6. Usar queryKey específica para cache inteligente
*/
