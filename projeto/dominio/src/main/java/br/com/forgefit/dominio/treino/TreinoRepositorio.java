package br.com.forgefit.dominio.treino;

import java.util.Optional;

/**
 * Repositório para planos de treino
 */
public interface TreinoRepositorio {
    void salvar(PlanoDeTreinoCompleto plano);
    Optional<PlanoDeTreinoCompleto> obterPorId(PlanoDeTreinoId id);
}
