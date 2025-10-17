package br.com.forgefit.dominio.aluno;

import java.time.LocalDate;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.aluno.enums.StatusFrequencia;

public class Frequencia {
    private final AulaId aulaId;
    private final LocalDate dataDaOcorrencia;
    private final StatusFrequencia status;

    public Frequencia(AulaId aulaId, LocalDate dataDaOcorrencia, StatusFrequencia status) {
        this.aulaId = aulaId;
        this.dataDaOcorrencia = dataDaOcorrencia;
        this.status = status;
    }
    public StatusFrequencia getStatus() {
        return status;
    }
}