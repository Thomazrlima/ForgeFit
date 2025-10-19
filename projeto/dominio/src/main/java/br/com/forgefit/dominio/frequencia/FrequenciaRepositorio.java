package br.com.forgefit.dominio.frequencia;

import java.time.LocalDate;
import java.util.List;

import br.com.forgefit.dominio.aluno.Cpf;
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
    List<Frequencia> buscarPorAlunoEPeriodo(Cpf alunoId, LocalDate inicio, LocalDate fim);
    
    /**
     * Busca frequência específica de um aluno em uma aula e data.
     */
    Frequencia buscarPorAlunoAulaEData(Cpf alunoId, AulaId aulaId, LocalDate data);
    
    /**
     * Conta quantas faltas um aluno teve em um período.
     */
    long contarFaltasPorPeriodo(Cpf alunoId, LocalDate inicio, LocalDate fim);
}
