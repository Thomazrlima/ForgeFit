package br.com.forgefit.dominio.aluno;

import java.util.Optional;

public interface AlunoRepositorio {
    void salvar(Aluno aluno);
    Optional<Aluno> obterPorCpf(Cpf cpf);
}