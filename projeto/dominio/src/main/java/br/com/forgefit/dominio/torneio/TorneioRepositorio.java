package br.com.forgefit.dominio.torneio;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface TorneioRepositorio {
    void salvar(Torneio torneio);
    Optional<Torneio> obterPorId(TorneioId id);
    Optional<Torneio> buscarTorneioAtivo(LocalDate dataAtual);
    List<Torneio> listarTorneios();
}

