package br.com.forgefit.aplicacao.aula;

import java.time.LocalDateTime;

public interface CancelamentoResumo {
    Integer getReservaId();
    Integer getAulaId();
    LocalDateTime getInicioAula();
    LocalDateTime getFimAula();
    String getModalidade();
    String getEspaco();
    String getNomeProfessor();
    String getAlunoMatricula();
    LocalDateTime getDataReserva();
    String getStatusReserva();
}
