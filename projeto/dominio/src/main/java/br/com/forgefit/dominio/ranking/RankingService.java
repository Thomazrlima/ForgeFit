package br.com.forgefit.dominio.ranking;

import static org.apache.commons.lang3.Validate.notNull;

import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.ranking.enums.PeriodoRanking;

public class RankingService {
    private final RankingRepositorio rankingRepositorio;

    public RankingService(RankingRepositorio rankingRepositorio) {
        notNull(rankingRepositorio, "O repositório de rankings não pode ser nulo");
        this.rankingRepositorio = rankingRepositorio;
    }

    public Ranking obterRanking(PeriodoRanking periodo) {
        return rankingRepositorio.obterPorPeriodo(periodo)
            .orElseGet(() -> {
                Ranking novoRanking = new Ranking(periodo);
                rankingRepositorio.salvar(novoRanking);
                return novoRanking;
            });
    }

    public void registrarPontosFrequencia(Matricula alunoMatricula, int pontos, PeriodoRanking periodo) {
        Ranking ranking = obterRanking(periodo);
        ranking.adicionarOuAtualizar(alunoMatricula);
        ItemRanking item = ranking.getItemPorMatricula(alunoMatricula);
        item.adicionarPontosFrequencia(pontos);
        rankingRepositorio.salvar(ranking);
    }

    public void registrarPontosGuilda(Matricula alunoMatricula, int pontos, PeriodoRanking periodo) {
        Ranking ranking = obterRanking(periodo);
        ranking.adicionarOuAtualizar(alunoMatricula);
        ItemRanking item = ranking.getItemPorMatricula(alunoMatricula);
        item.adicionarPontosGuilda(pontos);
        rankingRepositorio.salvar(ranking);
    }

    public void registrarPontosPerformance(Matricula alunoMatricula, int pontos, double nota, PeriodoRanking periodo) {
        Ranking ranking = obterRanking(periodo);
        ranking.adicionarOuAtualizar(alunoMatricula);
        ItemRanking item = ranking.getItemPorMatricula(alunoMatricula);
        item.adicionarPontosPerformance(pontos, nota);
        rankingRepositorio.salvar(ranking);
    }

    public void removerPontos(Matricula alunoMatricula, int pontos, PeriodoRanking periodo) {
        Ranking ranking = obterRanking(periodo);
        ItemRanking item = ranking.getItemPorMatricula(alunoMatricula);
        if (item != null) {
            item.removerPontos(pontos);
            rankingRepositorio.salvar(ranking);
        }
    }

    public void ajustarPontos(Matricula alunoMatricula, int ajuste, PeriodoRanking periodo) {
        Ranking ranking = obterRanking(periodo);
        ItemRanking item = ranking.getItemPorMatricula(alunoMatricula);
        if (item != null) {
            item.ajustarPontos(ajuste);
            rankingRepositorio.salvar(ranking);
        }
    }
}
