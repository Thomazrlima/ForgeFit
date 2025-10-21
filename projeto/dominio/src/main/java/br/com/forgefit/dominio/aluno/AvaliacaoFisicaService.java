package br.com.forgefit.dominio.aluno;

import static org.apache.commons.lang3.Validate.notNull;
import java.time.LocalDate;
import java.util.Optional;

public class AvaliacaoFisicaService {
    private final AlunoRepositorio repositorio;

    public AvaliacaoFisicaService(AlunoRepositorio repositorio) {
        notNull(repositorio, "O repositório não pode ser nulo");
        this.repositorio = repositorio;
    }

    public void registrarAvaliacaoFisica(Cpf alunoCpf, ProfessorId professorId, AvaliacaoFisica avaliacao) {
        notNull(alunoCpf, "O CPF do aluno não pode ser nulo");
        notNull(avaliacao, "A avaliação física não pode ser nula");

        Optional<Aluno> optAluno = repositorio.obterPorCpf(alunoCpf);
        Aluno aluno = optAluno.orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado"));

        // Convert LocalDate to Date since AvaliacaoFisica uses Date
        avaliacao.setDataDaAvaliacao(java.sql.Date.valueOf(LocalDate.now()));
        
        // Save the aluno with the new avaliacao
        repositorio.salvar(aluno);
    }
}