package br.com.forgefit.dominio.aula;

import java.util.List;

/**
 * Coleção de aulas que retorna um iterator.
 */
public class AulaCollection {
    private final List<Aula> aulas;

    public AulaCollection(List<Aula> aulas) {
        this.aulas = aulas;
    }

    public AulaIterator iterator() {
        return new AulaIterator(aulas);
    }
}
