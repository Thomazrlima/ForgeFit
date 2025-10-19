package br.com.forgefit.dominio.treino;

import static org.apache.commons.lang3.Validate.isTrue;
import static org.apache.commons.lang3.Validate.notNull;

/**
 * Value Object que representa a repetição de um exercício
 */
public class Repeticao {
    private final int series;
    private final String contagem;

    public Repeticao(int series, String contagem) {
        isTrue(series > 0, "O número de séries deve ser maior que zero");
        notNull(contagem, "A contagem não pode ser nula");
        
        this.series = series;
        this.contagem = contagem;
    }

    public int getSeries() {
        return series;
    }

    public String getContagem() {
        return contagem;
    }
}
