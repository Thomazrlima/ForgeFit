package br.com.forgefit.dominio.treino;

import static org.apache.commons.lang3.Validate.notNull;

import java.util.ArrayList;
import java.util.List;

import br.com.forgefit.dominio.treino.enums.LetraDoTreino;
import br.com.forgefit.dominio.treino.enums.TipoDoTreino;

/**
 * Representa um treino diário completo com letra, tipo e exercícios
 */
public class TreinoDiario {
    private final LetraDoTreino letra;
    private final TipoDoTreino tipo;
    private final List<ItemDeExercicio> exercicios;

    public TreinoDiario(LetraDoTreino letra, TipoDoTreino tipo, List<ItemDeExercicio> exercicios) {
        notNull(letra, "A letra do treino não pode ser nula");
        notNull(tipo, "O tipo do treino não pode ser nulo");
        notNull(exercicios, "A lista de exercícios não pode ser nula");
        
        this.letra = letra;
        this.tipo = tipo;
        this.exercicios = new ArrayList<>(exercicios);
    }

    public LetraDoTreino getLetra() {
        return letra;
    }

    public TipoDoTreino getTipo() {
        return tipo;
    }

    public List<ItemDeExercicio> getExercicios() {
        return new ArrayList<>(exercicios);
    }
}
