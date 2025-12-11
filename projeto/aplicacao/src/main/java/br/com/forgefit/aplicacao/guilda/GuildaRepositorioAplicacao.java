package br.com.forgefit.aplicacao.guilda;

import java.util.List;
import java.util.Optional;

public interface GuildaRepositorioAplicacao {
    List<GuildaResumo> listarGuildasAtivasOrdenadas();

    GuildaResumo buscarResumoPorNome(String nome);
    
    Optional<GuildaDetalhesResumo> buscarDetalhesPorId(Integer guildaId);
    
    List<MembroResumo> buscarMembrosPorGuildaId(Integer guildaId);
    
    List<CheckinResumo> buscarCheckinsPorGuildaId(Integer guildaId);
    
    /**
     * Busca o ID do banco de uma guilda recém-criada pela matrícula do mestre.
     * Útil para obter o ID gerado automaticamente pelo banco após INSERT.
     */
    Optional<Integer> buscarIdGuildaPorMatriculaMestre(String matricula);
}
