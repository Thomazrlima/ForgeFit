package br.com.forgefit.dominio.aluno;

import static org.apache.commons.lang3.Validate.notNull;

public class AlunoService {
    private final AlunoRepositorio alunoRepository;

    public AlunoService(AlunoRepositorio alunoRepository) {
        notNull(alunoRepository, "O repositório de alunos não pode ser nulo");
        this.alunoRepository = alunoRepository;
    }

    public void adicionarCreditos(Matricula alunoMatricula, double creditos) {
        if (creditos <= 0) {
            return; // Não faz nada se o crédito não for positivo
        }

        alunoRepository.obterPorMatricula(alunoMatricula)
            .ifPresentOrElse(aluno -> {
                aluno.adicionarCreditos(creditos);
                alunoRepository.salvar(aluno);
            }, () -> {
                throw new IllegalArgumentException("Aluno não encontrado");
            });
    }
}
