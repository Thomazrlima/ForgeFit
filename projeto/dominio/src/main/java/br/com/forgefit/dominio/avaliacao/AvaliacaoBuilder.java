package br.com.forgefit.dominio.avaliacao;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;

import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.professor.ProfessorId;


public class AvaliacaoBuilder {
    private AvaliacaoId id;
    private Matricula alunoMatricula;
    private ProfessorId professorId;
    private AulaId aulaId;
    private LocalDate dataDaOcorrenciaDaAula;
    private Notas notas;
    private String comentario;

    public AvaliacaoBuilder() {
    }

    public AvaliacaoBuilder comId(AvaliacaoId id) {
        this.id = id;
        return this;
    }

    public AvaliacaoBuilder comAlunoMatricula(Matricula alunoMatricula) {
        this.alunoMatricula = alunoMatricula;
        return this;
    }

    public AvaliacaoBuilder comProfessorId(ProfessorId professorId) {
        this.professorId = professorId;
        return this;
    }

    public AvaliacaoBuilder comAulaId(AulaId aulaId) {
        this.aulaId = aulaId;
        return this;
    }

    public AvaliacaoBuilder comDataDaOcorrenciaDaAula(LocalDate dataDaOcorrenciaDaAula) {
        this.dataDaOcorrenciaDaAula = dataDaOcorrenciaDaAula;
        return this;
    }

    public AvaliacaoBuilder comNotas(Notas notas) {
        this.notas = notas;
        return this;
    }

    public AvaliacaoBuilder comNotas(Integer pontualidade, Integer didatica, Integer atencao) {
        this.notas = new Notas(pontualidade, didatica, atencao);
        return this;
    }

    public AvaliacaoBuilder comComentario(String comentario) {
        this.comentario = comentario;
        return this;
    }


    public Avaliacao build() {
        notNull(id, "O ID da avaliação não pode ser nulo");
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");
        notNull(professorId, "O ID do professor não pode ser nulo");
        notNull(aulaId, "O ID da aula não pode ser nulo");
        notNull(dataDaOcorrenciaDaAula, "A data da ocorrência não pode ser nula");
        notNull(notas, "As notas não podem ser nulas");

        return new Avaliacao(id, alunoMatricula, professorId, aulaId, 
                           dataDaOcorrenciaDaAula, notas, comentario);
    }
}
