package br.com.forgefit.infraestrutura.persistencia.memoria;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aula.Aula;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.aula.AulaRepositorio;

/**
 * Implementação em memória (Test Double) dos repositórios para isolar
 * a Camada de Domínio da persistência durante os testes BDD.
 */
public class Repositorio implements AlunoRepositorio, AulaRepositorio {

    // Simulação do Banco de Dados para Alunos
    private final Map<Cpf, Aluno> alunos = new HashMap<>();

    // Simulação do Banco de Dados para Aulas/Agendamentos
    private final Map<AulaId, Aula> aulas = new HashMap<>();

    /*-----------------------------------------------------------------------*/
    /* Implementação de AlunoRepositorio */

    @Override
    public void salvar(Aluno aluno) {
        notNull(aluno, "O aluno não pode ser nulo");
        // Se o Aluno não tiver CPF, precisaremos de uma lógica para gerar um ID (simulação de Save)
        // Por enquanto, assumimos que o Aluno já tem um CPF válido (Value Object)
        alunos.put(aluno.getCpf(), aluno);
    }

    @Override
    public Optional<Aluno> obterPorCpf(Cpf cpf) {
        notNull(cpf, "O CPF não pode ser nulo");
        return Optional.ofNullable(alunos.get(cpf));
    }

    /*-----------------------------------------------------------------------*/
    /* Implementação de AulaRepositorio */

    @Override
    public void salvar(Aula aula) {
        notNull(aula, "A aula não pode ser nulo");
        // No mundo real, a AulaId seria gerada. Para testes, vamos garantir que ela exista.
        if (aula.getId() == null) {
            // Lógica de ID de teste (simples autoincremento para o teste)
            int nextId = aulas.keySet().stream().mapToInt(AulaId::getId).max().orElse(0) + 1;
            AulaId newId = new AulaId(nextId);
            // Assumindo que a classe Aula tem um construtor ou setter para ID, o que não é ideal em DDD.
            // Para simplificar: vamos garantir que os testes usem uma AulaId já definida.
            AulaId id = new AulaId(1); // ID fixo de teste
            aulas.put(id, aula);
        } else {
            aulas.put(aula.getId(), aula);
        }
    }

    @Override
    public Optional<Aula> obterPorId(AulaId id) {
        notNull(id, "O Id da Aula não pode ser nulo");
        return Optional.ofNullable(aulas.get(id));
    }

    @Override
    public Optional<Aula> obterAulaComReservaAtiva(Cpf alunoId, LocalDate dataAula) {
        // Simulação de busca: encontra a primeira aula agendada para aquela data
        // que o aluno tem uma reserva ativa (não cancelada).
        return aulas.values().stream()
                .filter(aula -> aula.getData().isEqual(dataAula)) // Assumindo método getData() em Aula
                .filter(aula -> aula.possuiReservaAtiva(alunoId)) // Método de negócio em Aula
                .findFirst();
    }

    /*-----------------------------------------------------------------------*/
    /* Métodos de SIMULAÇÃO ESPECÍFICOS PARA OS STEP DEFINITIONS BDD */
    /* Estes métodos "vazam" a simulação, mas são convenientes para configurar cenários */

    public void simularReserva(Cpf alunoId, AulaId aulaId, LocalDate dataAula, boolean cancelada) {
        // Encontra ou cria a Aula
        Aula aula = aulas.computeIfAbsent(aulaId, id -> new Aula(id, dataAula)); // Assume construtor de teste

        // Simula a adição da reserva (e seu possível cancelamento)
        aula.simularReservaParaTeste(alunoId, cancelada);

        // Salva o estado atualizado da aula
        salvar(aula);
    }

    // Você precisará de métodos de simulação similares para Frequência, Reembolso, etc.
}