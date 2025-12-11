package br.com.forgefit.aplicacao.guilda;

import static org.apache.commons.lang3.Validate.notNull;

import java.util.List;
import java.util.Optional;

public class GuildaServicoAplicacao {
    private final GuildaRepositorioAplicacao repositorio;

    public GuildaServicoAplicacao(GuildaRepositorioAplicacao repositorio) {
        notNull(repositorio, "O repositório de guildas não pode ser nulo");
        this.repositorio = repositorio;
    }

    public List<GuildaResumo> listarGuildasAtivas() {
        return repositorio.listarGuildasAtivasOrdenadas();
    }

    public GuildaResumo buscarPorNome(String nome) {
        notNull(nome, "O nome não pode ser nulo");
        return repositorio.buscarResumoPorNome(nome);
    }
    
    public Optional<GuildaDetalhesResumo> buscarDetalhesPorId(Integer guildaId) {
        notNull(guildaId, "O id da guilda não pode ser nulo");
        return repositorio.buscarDetalhesPorId(guildaId);
    }
    
    public List<MembroResumo> buscarMembrosPorGuildaId(Integer guildaId) {
        notNull(guildaId, "O id da guilda não pode ser nulo");
        return repositorio.buscarMembrosPorGuildaId(guildaId);
    }
    
    public List<CheckinResumo> buscarCheckinsPorGuildaId(Integer guildaId) {
        notNull(guildaId, "O id da guilda não pode ser nulo");
        return repositorio.buscarCheckinsPorGuildaId(guildaId);
    }
    
    public Optional<Integer> buscarIdGuildaPorMatriculaMestre(String matricula) {
        notNull(matricula, "A matrícula não pode ser nula");
        return repositorio.buscarIdGuildaPorMatriculaMestre(matricula);
    }
}
