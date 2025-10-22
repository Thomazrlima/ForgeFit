package br.com.forgefit.dominio.avaliacao;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.professor.ProfessorId;

public interface AvaliacaoRepositorio {
    void salvar(Avaliacao avaliacao);
    Optional<Avaliacao> obterPorId(AvaliacaoId id);
    List<Avaliacao> buscarPorProfessor(ProfessorId professorId);
    boolean existeAvaliacao(Matricula alunoMatricula, AulaId aulaId, LocalDate dataDaOcorrencia);
}
