package br.com.forgefit.aplicacao.guilda;

import static org.apache.commons.lang3.Validate.notNull;

import java.util.List;

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
}
