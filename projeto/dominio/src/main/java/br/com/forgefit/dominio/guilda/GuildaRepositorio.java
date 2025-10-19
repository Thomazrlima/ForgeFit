package br.com.forgefit.dominio.guilda;

import java.util.List;
import java.util.Optional;

public interface GuildaRepositorio {
    void salvar(Guilda guilda);
    Optional<Guilda> obterPorId(GuildaId id);
    List<Guilda> listarGuildas();
    Optional<Guilda> buscarPorCodigoConvite(CodigoConvite codigo);
    Optional<Guilda> buscarPorNome(String nome);
}

