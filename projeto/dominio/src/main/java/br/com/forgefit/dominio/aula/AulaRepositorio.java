package br.com.forgefit.dominio.aula;

import br.com.forgefit.dominio.aluno.Cpf;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface AulaRepositorio {
    void salvar(Aula aula);
    Aula obter(AulaId id);
    Optional<Aula> obterPorId(AulaId id);
    Optional<Aula> obterAulaComReservaAtiva(Cpf alunoId, LocalDate dataAula);
}