package br.com.forgefit.aplicacao.ranking;

import static org.apache.commons.lang3.Validate.notNull;

import java.util.List;

import br.com.forgefit.dominio.ranking.enums.PeriodoRanking;

/**
 * Serviço da camada de aplicação para operações de consulta de ranking.
 * Coordena chamadas ao repositório e aplica regras de negócio da camada de
 * aplicação.
 */
public class RankingServicoAplicacao {
    private final RankingRepositorioAplicacao repositorio;

    public RankingServicoAplicacao(RankingRepositorioAplicacao repositorio) {
        notNull(repositorio, "O repositório de ranking não pode ser nulo");
        this.repositorio = repositorio;
    }

    /**
     * Lista todos os itens do ranking de um período.
     * 
     * @param periodo Período do ranking
     * @return Lista ordenada de itens
     */
    public List<RankingItemResumo> listarRanking(PeriodoRanking periodo) {
        notNull(periodo, "O período não pode ser nulo");
        return repositorio.pesquisarPorPeriodo(periodo);
    }

    /**
     * Lista os top N alunos do ranking.
     * 
     * @param periodo Período do ranking
     * @param limite  Número de itens a retornar
     * @return Lista ordenada dos top N
     */
    public List<RankingItemResumo> listarTopN(PeriodoRanking periodo, int limite) {
        notNull(periodo, "O período não pode ser nulo");

        if (limite <= 0) {
            throw new IllegalArgumentException("O limite deve ser maior que zero");
        }

        return repositorio.pesquisarTopN(periodo, limite);
    }

    /**
     * Busca a posição de um aluno no ranking.
     * 
     * @param periodo   Período do ranking
     * @param matricula Matrícula do aluno
     * @return Resumo do item do aluno
     */
    public RankingItemResumo buscarPosicaoAluno(PeriodoRanking periodo, String matricula) {
        notNull(periodo, "O período não pode ser nulo");
        notNull(matricula, "A matrícula não pode ser nula");

        return repositorio.buscarPosicaoAluno(periodo, matricula);
    }

    /**
     * Lista o pódio (top 3) do ranking.
     * 
     * @param periodo Período do ranking
     * @return Lista com os 3 primeiros colocados
     */
    public List<RankingItemResumo> listarPodio(PeriodoRanking periodo) {
        return listarTopN(periodo, 3);
    }
}
