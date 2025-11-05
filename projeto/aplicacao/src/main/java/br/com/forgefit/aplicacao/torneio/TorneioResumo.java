package br.com.forgefit.aplicacao.torneio;

import java.time.LocalDate;

public interface TorneioResumo {
    String getId();
    String getNome();
    LocalDate getDataInicio();
    LocalDate getDataFim();
    String getStatus();
    String getPremioPrimeiroLugar();
}
