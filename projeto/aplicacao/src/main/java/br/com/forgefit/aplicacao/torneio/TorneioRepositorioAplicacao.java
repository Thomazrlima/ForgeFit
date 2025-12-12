package br.com.forgefit.aplicacao.torneio;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface TorneioRepositorioAplicacao {
    List<TorneioResumo> listarTorneiosAtivos();
    List<TorneioResumo> listarTorneiosFinalizados();
    Optional<TorneioAtualResumo> buscarTorneioAtual(LocalDate hoje);
    List<RankingGuildaNoTorneioResumo> buscarRankingPorTorneio(Integer torneioId);
    List<RankingGuildaNoTorneioResumo> buscarUltimoPodio();
}
