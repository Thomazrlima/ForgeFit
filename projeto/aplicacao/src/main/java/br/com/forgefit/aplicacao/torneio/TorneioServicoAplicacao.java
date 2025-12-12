package br.com.forgefit.aplicacao.torneio;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public class TorneioServicoAplicacao {
    private final TorneioRepositorioAplicacao repositorio;

    public TorneioServicoAplicacao(TorneioRepositorioAplicacao repositorio) {
        notNull(repositorio, "O repositório de torneios não pode ser nulo");
        this.repositorio = repositorio;
    }

    public List<TorneioResumo> listarTorneiosAtivos() {
        return repositorio.listarTorneiosAtivos();
    }

    public List<TorneioResumo> listarTorneiosFinalizados() {
        return repositorio.listarTorneiosFinalizados();
    }

    public Optional<TorneioAtualResumo> buscarTorneioAtual() {
        return repositorio.buscarTorneioAtual(LocalDate.now());
    }

    public List<RankingGuildaNoTorneioResumo> buscarRankingPorTorneio(Integer torneioId) {
        notNull(torneioId, "O id do torneio não pode ser nulo");
        return repositorio.buscarRankingPorTorneio(torneioId);
    }

    public List<RankingGuildaNoTorneioResumo> buscarUltimoPodio() {
        return repositorio.buscarUltimoPodio();
    }
}
