package br.com.forgefit.dominio.aluno;

import static org.apache.commons.lang3.Validate.notNull;

public class AvaliacaoFisicaService {
    private final AlunoRepositorio repositorio;

    public AvaliacaoFisicaService(AlunoRepositorio repositorio) {
        notNull(repositorio, "O repositório não pode ser nulo");
        this.repositorio = repositorio;
    }

    public void registrarAvaliacaoFisica(Matricula alunoMatricula, AvaliacaoFisica avaliacao) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");
        notNull(avaliacao, "A avaliação física não pode ser nula");

        Aluno aluno = repositorio.obterPorMatricula(alunoMatricula)
            .orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado"));

        aluno.adicionarAvaliacaoFisica(avaliacao);
        
        repositorio.salvar(aluno);
    }
}