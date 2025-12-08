import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import aulaService, { type AulaFrontend } from "../services/aulaService";
import api from "../services/api";

/**
 * Hook para buscar todas as aulas disponíveis
 * @param matricula Matrícula do aluno (opcional) - quando informada, exclui aulas já inscritas
 */
export const useTodasAulas = (matricula?: string) => {
    return useQuery({
        queryKey: ["aulas", "todas", matricula],
        queryFn: () => aulaService.buscarTodasAulasFormatadas(matricula),
        staleTime: 1000 * 60 * 5, // 5 minutos
    });
};

/**
 * Hook para buscar aulas inscritas de um aluno
 */
export const useAulasDoAluno = (matricula: string | undefined) => {
    return useQuery({
        queryKey: ["aulas", "aluno", matricula],
        queryFn: () => aulaService.buscarAulasDoAluno(matricula!),
        enabled: !!matricula, // Só executa se matricula existir
        staleTime: 1000 * 60 * 2, // 2 minutos
    });
};

/**
 * Hook para combinar todas as aulas com status de inscrição do aluno
 */
export const useAulasComInscricao = (matricula: string | undefined, isStudent: boolean) => {
    // Para alunos, busca aulas disponíveis (excluindo as já inscritas) e aulas inscritas separadamente
    const { data: todasAulas, isLoading: loadingTodas, error: errorTodas } = useTodasAulas(
        isStudent ? matricula : undefined
    );
    const { data: aulasInscritas, isLoading: loadingInscritas, error: errorInscritas } = useAulasDoAluno(
        isStudent ? matricula : undefined
    );

    // Como o backend já filtra aulas inscritas, não precisamos mais combinar
    // Apenas retornamos as aulas disponíveis (que já excluem as inscritas)
    const aulasComStatus: AulaFrontend[] = todasAulas || [];

    return {
        aulas: aulasComStatus,
        aulasInscritas: aulasInscritas || [],
        isLoading: loadingTodas || (isStudent && loadingInscritas),
        error: errorTodas || errorInscritas,
    };
};

/**
 * Mutation para inscrever aluno em aula
 */
export const useInscreverAula = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ aulaId, matricula }: { aulaId: number; matricula: string }) => {
            const response = await api.post(`/aulas/${aulaId}/inscrever`, matricula, {
                headers: { "Content-Type": "text/plain" },
            });
            return response.data;
        },
        onSuccess: (_, variables) => {
            // Invalidar cache de todas as aulas e aulas do aluno
            queryClient.invalidateQueries({ queryKey: ["aulas"] });
        },
    });
};

/**
 * Mutation para cancelar inscrição de aula
 */
export const useCancelarInscricao = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ aulaId, matricula }: { aulaId: number; matricula: string }) => {
            const response = await api.post(`/aulas/${aulaId}/cancelar`, matricula, {
                headers: { "Content-Type": "text/plain" },
            });
            return response.data;
        },
        onSuccess: () => {
            // Invalidar cache após cancelamento
            queryClient.invalidateQueries({ queryKey: ["aulas"] });
        },
    });
};
