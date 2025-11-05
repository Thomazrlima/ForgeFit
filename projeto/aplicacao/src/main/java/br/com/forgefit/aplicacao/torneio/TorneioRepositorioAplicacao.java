package br.com.forgefit.aplicacao.torneio;

import java.util.List;

public interface TorneioRepositorioAplicacao {
    List<TorneioResumo> listarTorneiosAtivos();
    List<TorneioResumo> listarTorneiosFinalizados();
}
