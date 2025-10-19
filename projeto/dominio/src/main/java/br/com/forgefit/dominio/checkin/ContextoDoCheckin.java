package br.com.forgefit.dominio.checkin;

import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.checkin.enums.TipoDeCheckin;
import br.com.forgefit.dominio.treino.PlanoDeTreinoId;
import br.com.forgefit.dominio.treino.enums.LetraDoTreino;

public class ContextoDoCheckin {
    private final TipoDeCheckin tipo;
    private final AulaId aulaId;
    private final PlanoDeTreinoId planoDeTreinoId;
    private final LetraDoTreino letraDoTreino;

    private ContextoDoCheckin(TipoDeCheckin tipo, AulaId aulaId, 
                             PlanoDeTreinoId planoDeTreinoId, LetraDoTreino letraDoTreino) {
        this.tipo = tipo;
        this.aulaId = aulaId;
        this.planoDeTreinoId = planoDeTreinoId;
        this.letraDoTreino = letraDoTreino;
    }

    public static ContextoDoCheckin deTreino(PlanoDeTreinoId planoDeTreinoId, LetraDoTreino letraDoTreino) {
        return new ContextoDoCheckin(TipoDeCheckin.TREINO, null, planoDeTreinoId, letraDoTreino);
    }

    public static ContextoDoCheckin deAula(AulaId aulaId) {
        return new ContextoDoCheckin(TipoDeCheckin.AULA, aulaId, null, null);
    }

    public TipoDeCheckin getTipo() {
        return tipo;
    }

    public AulaId getAulaId() {
        return aulaId;
    }

    public PlanoDeTreinoId getPlanoDeTreinoId() {
        return planoDeTreinoId;
    }

    public LetraDoTreino getLetraDoTreino() {
        return letraDoTreino;
    }
}

