package br.com.forgefit.aplicacao.treino;

import java.util.List;

/**
 * Repositório da camada de aplicação para consultas de planos de treino.
 */
public interface TreinoRepositorioAplicacao {
    
    /**
     * Pesquisa todos os planos de um professor.
     * 
     * @param professorId ID do professor
     * @return Lista de resumos dos planos
     */
    List<PlanoTreinoResumo> pesquisarPorProfessor(Integer professorId);

    /**
     * Busca o plano ativo de um aluno.
     * 
     * @param matricula Matrícula do aluno
     * @return Resumo do plano ativo ou null se não houver
     */
    PlanoTreinoResumo buscarPlanoAtivoPorAluno(String matricula);
}
