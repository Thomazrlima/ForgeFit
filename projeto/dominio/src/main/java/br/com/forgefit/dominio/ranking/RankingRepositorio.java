package br.com.forgefit.dominio.ranking;

import java.util.Optional;

import br.com.forgefit.dominio.ranking.enums.PeriodoRanking;

public interface RankingRepositorio {
    void salvar(Ranking ranking);
    Optional<Ranking> obterPorPeriodo(PeriodoRanking periodo);
}
