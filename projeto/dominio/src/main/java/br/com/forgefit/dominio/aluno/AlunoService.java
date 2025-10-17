package br.com.forgefit.dominio.aluno;

import br.com.forgefit.dominio.repositorio.RepositorioGeral; // Importa a interface

public class AlunoService {
    private final AlunoRepositorio repositorio;

    public AlunoService(AlunoRepositorio repositorio) {
        this.repositorio = repositorio;
    }
}
