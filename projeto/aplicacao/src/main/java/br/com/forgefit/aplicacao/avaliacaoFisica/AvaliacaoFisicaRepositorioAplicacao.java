package br.com.forgefit.aplicacao.avaliacaoFisica;

import br.com.forgefit.dominio.aluno.AvaliacaoFisica;
import br.com.forgefit.dominio.aluno.Matricula;

import java.util.List;

public interface AvaliacaoFisicaRepositorioAplicacao {
    
    /**
     * Salva uma avaliação física no repositório
     */
    void salvar(Matricula matricula, AvaliacaoFisica avaliacaoFisica);
    
    /**
     * Busca todas as avaliações físicas de um aluno
     */
    List<AvaliacaoFisicaResumo> buscarPorAluno(String matricula);
    
    /**
     * Lista todos os alunos disponíveis para receber avaliação física
     */
    List<AlunoResumo> listarTodosAlunos();
}
