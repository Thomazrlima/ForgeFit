package br.com.forgefit.aplicacao.torneio;

import java.time.LocalDate;

public interface TorneioAtualResumo {
    Integer getId();
    String getNome();
    LocalDate getDataInicio();
    LocalDate getDataFim();
    String getStatus(); // "PLANEJADO", "ATIVO", "FINALIZADO", "CANCELADO"
    String getPremioPrimeiroLugarNome();
    String getPremioPrimeiroLugarUrlImagem();
    String getPremioSegundoLugarNome();
    String getPremioSegundoLugarUrlImagem();
    String getPremioTerceiroLugarNome();
    String getPremioTerceiroLugarUrlImagem();
}

