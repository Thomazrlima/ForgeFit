package br.com.forgefit.dominio.avaliacao;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;

import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aluno.ProfessorId;
import br.com.forgefit.dominio.aula.AulaId;

public class Avaliacao {
    private final AvaliacaoId id;
    private final Cpf alunoId;
    private final ProfessorId professorId;
    private final AulaId aulaId;
    private final LocalDate dataDaOcorrenciaDaAula;
    private final Notas notas;
    private final String comentario;
    private final LocalDate dataDaAvaliacao;

    public Avaliacao(AvaliacaoId id, Cpf alunoId, ProfessorId professorId, AulaId aulaId,
                     LocalDate dataDaOcorrenciaDaAula, Notas notas, String comentario) {
        notNull(id, "O ID da avaliação não pode ser nulo");
        notNull(alunoId, "O CPF do aluno não pode ser nulo");
        notNull(professorId, "O ID do professor não pode ser nulo");
        notNull(aulaId, "O ID da aula não pode ser nulo");
        notNull(dataDaOcorrenciaDaAula, "A data da ocorrência não pode ser nula");
        notNull(notas, "As notas não podem ser nulas");
        
        this.id = id;
        this.alunoId = alunoId;
        this.professorId = professorId;
        this.aulaId = aulaId;
        this.dataDaOcorrenciaDaAula = dataDaOcorrenciaDaAula;
        this.notas = notas;
        this.comentario = comentario;
        this.dataDaAvaliacao = LocalDate.now();
    }

    public AvaliacaoId getId() {
        return id;
    }

    public Cpf getAlunoId() {
        return alunoId;
    }

    public ProfessorId getProfessorId() {
        return professorId;
    }

    public AulaId getAulaId() {
        return aulaId;
    }

    public LocalDate getDataDaOcorrenciaDaAula() {
        return dataDaOcorrenciaDaAula;
    }

    public Notas getNotas() {
        return notas;
    }

    public String getComentario() {
        return comentario;
    }

    public LocalDate getDataDaAvaliacao() {
        return dataDaAvaliacao;
    }
}
