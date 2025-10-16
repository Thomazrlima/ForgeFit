package br.com.forgefit.dominio.aula;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface AulaRepositorio {
    void salvar(Aula aula);
    Optional<Aula> obterPorId(AulaId id);
    Optional<Aula> obterAulaComReservaAtiva(Cpf alunoId, LocalDate dataAula);
}