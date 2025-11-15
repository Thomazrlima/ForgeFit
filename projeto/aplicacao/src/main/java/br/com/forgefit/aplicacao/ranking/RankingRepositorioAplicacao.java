package br.com.forgefit.aplicacao.ranking;

import java.util.List;

import br.com.forgefit.dominio.ranking.enums.PeriodoRanking;

/**
 * Repositório da camada de aplicação para consultas de ranking.
 * Retorna DTOs otimizados para apresentação.
 */
public interface RankingRepositorioAplicacao {

    /**
     * Pesquisa todos os itens do ranking de um período específico.
     * 
     * @param periodo Período do ranking (SEMANAL, MENSAL, ANUAL)
     * @return Lista ordenada de itens do ranking
     */
    List<RankingItemResumo> pesquisarPorPeriodo(PeriodoRanking periodo);

    /**
     * Pesquisa os top N alunos do ranking de um período.
     * 
     * @param periodo Período do ranking
     * @param limite  Número de itens a retornar
     * @return Lista ordenada dos top N alunos
     */
    List<RankingItemResumo> pesquisarTopN(PeriodoRanking periodo, int limite);

    /**
     * Busca a posição de um aluno específico no ranking.
     * 
     * @param periodo   Período do ranking
     * @param matricula Matrícula do aluno
     * @return Resumo do item do ranking do aluno, ou null se não encontrado
     */
    RankingItemResumo buscarPosicaoAluno(PeriodoRanking periodo, String matricula);
}
