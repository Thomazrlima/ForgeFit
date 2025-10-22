package br.com.forgefit.dominio.aluno;

import static org.apache.commons.lang3.Validate.notNull;

import br.com.forgefit.dominio.treino.PlanoDeTreinoId;

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

    public void atribuirPlanoDetreino(Matricula alunoMatricula, PlanoDeTreinoId planoId) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");
        notNull(planoId, "O ID do plano de treino não pode ser nulo");

        alunoRepository.obterPorMatricula(alunoMatricula)
            .ifPresentOrElse(aluno -> {
                // Se havia um plano ativo anterior, adicioná-lo ao histórico
                if (aluno.getPlanoAtivoId() != null) {
                    aluno.adicionarPlanoDeTreinoId(aluno.getPlanoAtivoId());
                }
                
                // Atribui o novo plano
                aluno.setPlanoAtivoId(planoId);
                alunoRepository.salvar(aluno);
            }, () -> {
                throw new IllegalArgumentException("Aluno não encontrado");
            });
    }
}
