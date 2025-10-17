package br.com.forgefit.infraestrutura.persistencia.memoria;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aluno.RegistroFrequencia;
import br.com.forgefit.dominio.aluno.enums.StatusAluno;
import br.com.forgefit.dominio.aluno.enums.StatusFrequencia;
import br.com.forgefit.dominio.aula.AulaId;

public class Repositorio implements AlunoRepositorio {

    private final Map<Cpf, Aluno> alunos = new HashMap<>();

    @Override
    public void salvar(Aluno aluno) {
        notNull(aluno);
        alunos.put(aluno.getCpf(), aluno);
    }

    @Override
    public Optional<Aluno> obterPorCpf(Cpf cpf) {
        notNull(cpf);
        return Optional.ofNullable(alunos.get(cpf));
    }

    /*----------------------- Métodos de simulação para testes -----------------------*/
    public void simularAluno(Cpf cpf, StatusAluno status) {
        alunos.put(cpf, new Aluno(cpf, status));
    }

    public void simularReserva(Cpf cpf, AulaId aulaId, LocalDate data, boolean cancelada) {
        Aluno aluno = alunos.get(cpf);
        if (aluno != null) {
            StatusFrequencia status = cancelada ? StatusFrequencia.FALTA : StatusFrequencia.PRESENTE;
            aluno.adicionarRegistroFrequencia(new RegistroFrequencia(aulaId, data, status));
        }
    }

    public void simularFaltasAluno(Cpf cpf, int numFaltas, int numDias) {
        Aluno aluno = alunos.get(cpf);
        if (aluno != null) {
            for (int i = 0; i < numFaltas; i++) {
                aluno.adicionarRegistroFrequencia(
                    new RegistroFrequencia(new AulaId(i + 1), LocalDate.now().minusDays(i), StatusFrequencia.FALTA)
                );
            }
        }
    }

    public void simularAlunoBloqueado(Cpf cpf, LocalDate dataFimBloqueio) {
        Aluno aluno = alunos.get(cpf);
        if (aluno != null) {
            aluno.bloqueioAte = dataFimBloqueio;
        }
    }
}
