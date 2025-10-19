package br.com.forgefit.dominio.treino;

import static org.apache.commons.lang3.Validate.notNull;

import br.com.forgefit.dominio.treino.enums.Exercicio;

/**
 * Representa um item de exercício com suas repetições
 */
public class ItemDeExercicio {
    private final Exercicio exercicio;
    private final Repeticao repeticao;

    public ItemDeExercicio(Exercicio exercicio, Repeticao repeticao) {
        notNull(exercicio, "O exercício não pode ser nulo");
        notNull(repeticao, "A repetição não pode ser nula");
        
        this.exercicio = exercicio;
        this.repeticao = repeticao;
    }

    public Exercicio getExercicio() {
        return exercicio;
    }

    public Repeticao getRepeticao() {
        return repeticao;
    }
}
