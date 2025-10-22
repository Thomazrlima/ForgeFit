package br.com.forgefit.dominio.frequencia;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;

import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.frequencia.enums.StatusFrequencia;

/**
 * Value Object que representa o registro de frequência de um aluno em uma aula.
 */
public class Frequencia {
    private final Matricula alunoMatricula;
    private final AulaId aulaId;
    private final LocalDate dataDaOcorrencia;
    private final StatusFrequencia status;

    public Frequencia(Matricula alunoMatricula, AulaId aulaId, LocalDate dataDaOcorrencia, StatusFrequencia status) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");
        this.alunoMatricula = alunoMatricula;
        
        notNull(aulaId, "O ID da aula não pode ser nulo");
        this.aulaId = aulaId;
        
        notNull(dataDaOcorrencia, "A data da ocorrência não pode ser nula");
        this.dataDaOcorrencia = dataDaOcorrencia;
        
        notNull(status, "O status de frequência não pode ser nulo");
        this.status = status;
    }

    public Matricula getAlunoMatricula() {
        return alunoMatricula;
    }

    public AulaId getAulaId() {
        return aulaId;
    }

    public LocalDate getDataDaOcorrencia() {
        return dataDaOcorrencia;
    }

    public StatusFrequencia getStatus() {
        return status;
    }

    @Override
    public String toString() {
        return String.format("Frequencia[aluno=%s, aula=%s, data=%s, status=%s]",
                alunoMatricula, aulaId, dataDaOcorrencia, status);
    }
}
