package br.com.forgefit.persistencia.jpa.ranking;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.forgefit.persistencia.jpa.enums.PeriodoRanking;

public interface RankingRepositorio extends JpaRepository<Ranking, Integer> {
	
	Ranking findByPeriodo(PeriodoRanking periodo);
}
