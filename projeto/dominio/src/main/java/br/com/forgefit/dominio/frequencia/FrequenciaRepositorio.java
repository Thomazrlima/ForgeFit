package br.com.forgefit.dominio.frequencia;

import java.time.LocalDate;
import java.util.List;

import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aula.AulaId;

/**
 * Repositório para gerenciar frequências.
 */
public interface FrequenciaRepositorio {
    
    /**
     * Salva uma frequência.
     */
    void salvar(Frequencia frequencia);
    
    /**
     * Busca frequências de um aluno em um período.
     */
    List<Frequencia> buscarPorAlunoEPeriodo(Matricula alunoMatricula, LocalDate inicio, LocalDate fim);
    
    /**
     * Busca frequência específica de um aluno em uma aula e data.
     */
    Frequencia buscarPorAlunoAulaEData(Matricula alunoMatricula, AulaId aulaId, LocalDate data);
    
    /**
     * Conta quantas faltas um aluno teve em um período.
     */
    long contarFaltasPorPeriodo(Matricula alunoMatricula, LocalDate inicio, LocalDate fim);
}
