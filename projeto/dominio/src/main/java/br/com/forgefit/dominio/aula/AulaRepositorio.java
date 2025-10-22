package br.com.forgefit.dominio.aula;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import br.com.forgefit.dominio.aula.enums.Espaco;
import br.com.forgefit.dominio.professor.ProfessorId;

public interface AulaRepositorio {
    void salvar(Aula aula);
    Optional<Aula> obterPorId(AulaId aulaId);
    List<Aula> listarTodas();
    List<Aula> buscarPorEspacoEPeriodo(Espaco espaco, LocalDateTime inicio, LocalDateTime fim);
    List<Aula> buscarPorProfessorEPeriodo(ProfessorId professorId, LocalDateTime inicio, LocalDateTime fim);
}
