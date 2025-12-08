package br.com.forgefit.dominio.aula;

import java.util.Iterator;
import java.util.List;

/**
 * Iterator para percorrer aulas e facilitar verificações de conflito.
 */
public class AulaIterator implements Iterator<Aula> {
    private final List<Aula> aulas;
    private int pos = 0;

    public AulaIterator(List<Aula> aulas) {
        this.aulas = aulas;
    }

    @Override
    public boolean hasNext() {
        return pos < aulas.size();
    }

    @Override
    public Aula next() {
        return aulas.get(pos++);
    }

    public void reset() {
        pos = 0;
    }
}
