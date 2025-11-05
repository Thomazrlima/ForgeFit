package br.com.forgefit.aplicacao.guilda;

import java.util.List;

public interface GuildaRepositorioAplicacao {
    List<GuildaResumo> listarGuildasAtivasOrdenadas();
    GuildaResumo buscarPorNome(String nome);
}
