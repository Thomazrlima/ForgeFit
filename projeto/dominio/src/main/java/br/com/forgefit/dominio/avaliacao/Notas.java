package br.com.forgefit.dominio.avaliacao;

import static org.apache.commons.lang3.Validate.isTrue;

/**
 * Value Object Notas conforme CML: pontualidade, didatica, atencao
 */
public class Notas {
    private final int pontualidade;
    private final int didatica;
    private final int atencao;

    public Notas(int pontualidade, int didatica, int atencao) {
        isTrue(pontualidade >= 0 && pontualidade <= 5, "A nota de pontualidade deve estar entre 0 e 5 estrelas");
        isTrue(didatica >= 0 && didatica <= 5, "A nota de didática deve estar entre 0 e 5 estrelas");
        isTrue(atencao >= 0 && atencao <= 5, "A nota de atenção deve estar entre 0 e 5 estrelas");
        
        this.pontualidade = pontualidade;
        this.didatica = didatica;
        this.atencao = atencao;
    }

    public int getPontualidade() {
        return pontualidade;
    }

    public int getDidatica() {
        return didatica;
    }

    public int getAtencao() {
        return atencao;
    }

    public double getMedia() {
        return (pontualidade + didatica + atencao) / 3.0;
    }
}
