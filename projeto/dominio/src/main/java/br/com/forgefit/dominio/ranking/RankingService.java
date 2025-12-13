package br.com.forgefit.dominio.ranking;

import static org.apache.commons.lang3.Validate.notNull;

import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.ranking.enums.PeriodoRanking;
import br.com.forgefit.dominio.ranking.strategy.CalculoPontuacaoPadraoStrategy;
import br.com.forgefit.dominio.ranking.strategy.CalculoPontuacaoStrategy;

public class RankingService {
    private final RankingRepositorio rankingRepositorio;
    private CalculoPontuacaoStrategy calculoPontuacaoStrategy;

    public RankingService(RankingRepositorio rankingRepositorio) {
        notNull(rankingRepositorio, "O repositório de rankings não pode ser nulo");
        this.rankingRepositorio = rankingRepositorio;
        this.calculoPontuacaoStrategy = new CalculoPontuacaoPadraoStrategy();
    }

    public void setCalculoPontuacaoStrategy(CalculoPontuacaoStrategy strategy) {
        notNull(strategy, "A estratégia de cálculo não pode ser nula");
        this.calculoPontuacaoStrategy = strategy;
    }

    public CalculoPontuacaoStrategy getCalculoPontuacaoStrategy() {
        return this.calculoPontuacaoStrategy;
    }

    public Ranking obterRanking(PeriodoRanking periodo) {
        return rankingRepositorio.obterPorPeriodo(periodo)
            .orElseGet(() -> {
                // Criar novo ranking apenas se realmente não existir no banco
                Ranking novoRanking = new Ranking(periodo);
                try {
                    rankingRepositorio.salvar(novoRanking);
                    // Buscar novamente após salvar para garantir que temos a versão persistida
                    return rankingRepositorio.obterPorPeriodo(periodo)
                        .orElse(novoRanking);
                } catch (Exception e) {
                    // Se falhar ao salvar (ex: constraint violation), tentar buscar novamente
                    return rankingRepositorio.obterPorPeriodo(periodo)
                        .orElseThrow(() -> new IllegalStateException(
                            "Não foi possível criar ou obter o ranking do período " + periodo, e));
                }
            });
    }

    public void registrarPontosFrequencia(Matricula alunoMatricula, int pontosBase, int aulasConsecutivas, PeriodoRanking periodo) {
        Ranking ranking = obterRanking(periodo);
        ItemRanking item = ranking.obterOuCriarItem(alunoMatricula);
        
        int pontosCalculados = calculoPontuacaoStrategy.calcularPontosFrequencia(pontosBase, aulasConsecutivas);
        item.adicionarPontosFrequencia(pontosCalculados);
        rankingRepositorio.salvar(ranking);
    }

    public void registrarPontosFrequencia(Matricula alunoMatricula, int pontos, PeriodoRanking periodo) {
        registrarPontosFrequencia(alunoMatricula, pontos, 0, periodo);
    }

    public void registrarPontosGuilda(Matricula alunoMatricula, int pontosBase, int nivelGuilda, PeriodoRanking periodo) {
        Ranking ranking = obterRanking(periodo);
        ItemRanking item = ranking.obterOuCriarItem(alunoMatricula);
        
        int pontosCalculados = calculoPontuacaoStrategy.calcularPontosGuilda(pontosBase, nivelGuilda);
        item.adicionarPontosGuilda(pontosCalculados);
        rankingRepositorio.salvar(ranking);
    }

    public void registrarPontosGuilda(Matricula alunoMatricula, int pontos, PeriodoRanking periodo) {
        registrarPontosGuilda(alunoMatricula, pontos, 0, periodo);
    }

    public void registrarPontosPerformance(Matricula alunoMatricula, int pontosBase, double nota, PeriodoRanking periodo) {
        Ranking ranking = obterRanking(periodo);
        ItemRanking item = ranking.obterOuCriarItem(alunoMatricula);
        
        int pontosCalculados = calculoPontuacaoStrategy.calcularPontosPerformance(pontosBase, nota);
        item.adicionarPontosPerformance(pontosCalculados, nota);
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
