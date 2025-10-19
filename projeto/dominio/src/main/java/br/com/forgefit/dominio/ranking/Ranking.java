package br.com.forgefit.dominio.ranking;

import static org.apache.commons.lang3.Validate.notNull;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.ranking.enums.PeriodoRanking;

public class Ranking {
    private final PeriodoRanking periodo;
    private final List<ItemRanking> itens;

    public Ranking(PeriodoRanking periodo) {
        notNull(periodo, "O período do ranking não pode ser nulo");
        this.periodo = periodo;
        this.itens = new ArrayList<>();
    }

    public void adicionarOuAtualizar(Cpf cpf) {
        if (getItemPorCpf(cpf) == null) {
            itens.add(new ItemRanking(cpf));
        }
    }

    public ItemRanking getItemPorCpf(Cpf cpf) {
        return itens.stream()
                .filter(item -> item.getCpf().equals(cpf))
                .findFirst()
                .orElse(null);
    }

    public void recalcular() {
        // Ordena por: pontuação total DESC, número de aulas DESC, média de performance
        // DESC
        // IMPORTANTE: cada .reversed() só se aplica ao nível correspondente, não a toda
        // a cadeia
        itens.sort(
                Comparator.comparingInt(ItemRanking::getPontuacaoTotal).reversed()
                        .thenComparing(Comparator.comparingInt(ItemRanking::getNumeroDeAulasParticipadas).reversed())
                        .thenComparing(Comparator.comparingDouble(ItemRanking::getMediaPerformance).reversed()));

        // Atualiza posições
        for (int i = 0; i < itens.size(); i++) {
            itens.get(i).setPosicao(i + 1);
        }
    }

    public List<ItemRanking> getTop(int n) {
        recalcular();
        return itens.stream().limit(n).toList();
    }

    public void zerarPontos() {
        itens.forEach(ItemRanking::zerarPontos);
    }

    public PeriodoRanking getPeriodo() {
        return periodo;
    }

    public List<ItemRanking> getItens() {
        recalcular();
        return new ArrayList<>(itens);
    }
}
