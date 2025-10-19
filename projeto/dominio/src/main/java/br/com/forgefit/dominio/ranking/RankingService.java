package br.com.forgefit.dominio.ranking;

import static org.apache.commons.lang3.Validate.notNull;

import br.com.forgefit.dominio.aluno.Cpf;
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

    public void registrarPontosFrequencia(Cpf cpf, int pontos, PeriodoRanking periodo) {
        Ranking ranking = obterRanking(periodo);
        ranking.adicionarOuAtualizar(cpf);
        ItemRanking item = ranking.getItemPorCpf(cpf);
        item.adicionarPontosFrequencia(pontos);
        rankingRepositorio.salvar(ranking);
    }

    public void registrarPontosGuilda(Cpf cpf, int pontos, PeriodoRanking periodo) {
        Ranking ranking = obterRanking(periodo);
        ranking.adicionarOuAtualizar(cpf);
        ItemRanking item = ranking.getItemPorCpf(cpf);
        item.adicionarPontosGuilda(pontos);
        rankingRepositorio.salvar(ranking);
    }

    public void registrarPontosPerformance(Cpf cpf, int pontos, double nota, PeriodoRanking periodo) {
        Ranking ranking = obterRanking(periodo);
        ranking.adicionarOuAtualizar(cpf);
        ItemRanking item = ranking.getItemPorCpf(cpf);
        item.adicionarPontosPerformance(pontos, nota);
        rankingRepositorio.salvar(ranking);
    }

    public void removerPontos(Cpf cpf, int pontos, PeriodoRanking periodo) {
        Ranking ranking = obterRanking(periodo);
        ItemRanking item = ranking.getItemPorCpf(cpf);
        if (item != null) {
            item.removerPontos(pontos);
            rankingRepositorio.salvar(ranking);
        }
    }

    public void ajustarPontos(Cpf cpf, int ajuste, PeriodoRanking periodo) {
        Ranking ranking = obterRanking(periodo);
        ItemRanking item = ranking.getItemPorCpf(cpf);
        if (item != null) {
            item.ajustarPontos(ajuste);
            rankingRepositorio.salvar(ranking);
        }
    }
}
