package br.com.forgefit.dominio.aula;

import java.util.List;
import java.util.Optional;

public interface AulaRepositorio {
    void salvar(Aula aula);
    Optional<Aula> obterPorId(AulaId aulaId);
    List<Aula> listarTodas();
}
