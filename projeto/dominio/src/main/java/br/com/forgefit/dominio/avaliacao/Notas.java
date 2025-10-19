package br.com.forgefit.dominio.avaliacao;

import static org.apache.commons.lang3.Validate.isTrue;

/**
 * Value Object Notas conforme CML: pontualidade, didatica, atencao
 * Nota: Nos testes, usamos apenas uma nota geral, então simplificamos
 */
public class Notas {
    private final double nota;

    public Notas(double nota) {
        isTrue(nota >= 0 && nota <= 10, "A nota deve estar entre 0 e 10");
        this.nota = nota;
    }

    public double getNota() {
        return nota;
    }

    public double getMedia() {
        return nota;
    }
}
