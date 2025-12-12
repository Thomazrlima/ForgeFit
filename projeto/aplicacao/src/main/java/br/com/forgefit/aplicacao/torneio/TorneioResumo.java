package br.com.forgefit.aplicacao.torneio;

import java.time.LocalDate;

public interface TorneioResumo {
    Integer getId();
    String getNome();
    LocalDate getDataInicio();
    LocalDate getDataFim();
    String getStatus();
    String getNomePremio1();
    String getNomePremio2();
    String getNomePremio3();
}
