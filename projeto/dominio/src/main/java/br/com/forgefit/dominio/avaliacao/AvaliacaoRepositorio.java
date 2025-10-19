package br.com.forgefit.dominio.avaliacao;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aluno.ProfessorId;
import br.com.forgefit.dominio.aula.AulaId;

public interface AvaliacaoRepositorio {
    void salvar(Avaliacao avaliacao);
    Optional<Avaliacao> obterPorId(AvaliacaoId id);
    List<Avaliacao> buscarPorProfessor(ProfessorId professorId);
    boolean existeAvaliacao(Cpf alunoId, AulaId aulaId, LocalDate dataDaOcorrencia);
}
