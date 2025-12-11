import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { buscarDetalhesGuilda, criarGuilda, type GuildaDetalhesResponse, type CriarGuildaRequest, type CriarGuildaResponse } from "../services/guildaService";

/**
 * Hook para buscar detalhes completos de uma guilda.
 * Usa React Query para cache e gerenciamento de estado.
 * 
 * @param guildaId ID da guilda
 * @param enabled Se a query deve ser executada (default: true)
 */
export const useGuildaDetalhes = (guildaId: number | undefined, enabled = true) => {
    return useQuery<GuildaDetalhesResponse, Error>({
        queryKey: ["guilda", "detalhes", guildaId],
        queryFn: () => {
            if (!guildaId) {
                throw new Error("ID da guilda não fornecido");
            }
            return buscarDetalhesGuilda(guildaId);
        },
        enabled: enabled && !!guildaId,
        staleTime: 1000 * 60 * 5, // 5 minutos
        retry: 2,
    });
};

/**
 * Hook para criar uma nova guilda.
 * Usa React Query mutation para gerenciar o estado da criação.
 */
export const useCriarGuilda = () => {
    const queryClient = useQueryClient();
    
    return useMutation<CriarGuildaResponse, Error, CriarGuildaRequest>({
        mutationFn: criarGuilda,
        onSuccess: () => {
            // Invalidar queries relacionadas a guildas
            queryClient.invalidateQueries({ queryKey: ["guilda"] });
        },
    });
};
