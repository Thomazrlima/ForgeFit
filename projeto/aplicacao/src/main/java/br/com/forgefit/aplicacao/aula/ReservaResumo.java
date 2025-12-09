package br.com.forgefit.aplicacao.aula;

/**
 * Interface de projeção para consulta de reservas.
 * Usado pelo Spring Data JPA para projetar resultados de queries.
 */
public interface ReservaResumo {
    String getAlunoMatricula();
    Integer getAulaId();
}
