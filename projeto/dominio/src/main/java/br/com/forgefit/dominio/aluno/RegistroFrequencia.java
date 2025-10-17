package br.com.forgefit.dominio.aluno;

import br.com.forgefit.dominio.aluno.enums.StatusFrequencia;
import java.util.Objects;


import br.com.forgefit.dominio.aula.AulaId;
import java.time.LocalDate;
import static org.apache.commons.lang3.Validate.notNull;

public class RegistroFrequencia {

    private final AulaId aulaId;
    private final LocalDate dataAula;
    private final StatusFrequencia status;

    public RegistroFrequencia(AulaId aulaId, LocalDate dataAula, StatusFrequencia status) {
        notNull(aulaId, "O ID da aula não pode ser nulo");
        notNull(dataAula, "A data da aula não pode ser nula");
        notNull(status, "O status de frequência não pode ser nulo");

        this.aulaId = aulaId;
        this.dataAula = dataAula;
        this.status = status;
    }

    public AulaId getAulaId() {
        return aulaId;
    }

    public LocalDate getDataAula() {
        return dataAula;
    }

    public StatusFrequencia getStatus() {
        return status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RegistroFrequencia that = (RegistroFrequencia) o;
        return Objects.equals(aulaId, that.aulaId) && Objects.equals(dataAula, that.dataAula);
    }

    @Override
    public int hashCode() {
        return Objects.hash(aulaId, dataAula);
    }
}