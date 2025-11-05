package br.com.forgefit.aplicacao.torneio;

import static org.apache.commons.lang3.Validate.notNull;

import java.util.List;

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
}
