package br.com.forgefit.infraestrutura.persistencia.memoria;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.checkin.Checkin;
import br.com.forgefit.dominio.checkin.CheckinRepositorio;
import br.com.forgefit.dominio.checkin.enums.TipoDeCheckin;
import br.com.forgefit.dominio.guilda.CodigoConvite;
import br.com.forgefit.dominio.guilda.Guilda;
import br.com.forgefit.dominio.guilda.GuildaId;
import br.com.forgefit.dominio.guilda.GuildaRepositorio;
import br.com.forgefit.dominio.repositorio.RepositorioGeral;
import br.com.forgefit.dominio.torneio.Torneio;
import br.com.forgefit.dominio.torneio.TorneioId;
import br.com.forgefit.dominio.torneio.TorneioRepositorio;
import br.com.forgefit.dominio.torneio.enums.StatusTorneio;
import br.com.forgefit.dominio.treino.PlanoDeTreinoId;
import br.com.forgefit.dominio.treino.enums.LetraDoTreino;

/**
 * Implementação em memória dos repositórios para testes BDD.
 * Usa HashMaps e Lists para simular persistência.
 */
public class Repositorio implements AlunoRepositorio, RepositorioGeral, 
                                     GuildaRepositorio, CheckinRepositorio, TorneioRepositorio { 

    /*-----------------------------------------------------------------------*/
    private Map<Cpf, Aluno> alunos = new HashMap<>();

    @Override
    public void salvar(Aluno aluno) {
        notNull(aluno, "O aluno não pode ser nulo");
        alunos.put(aluno.getCpf(), aluno);
    }

    @Override
    public Optional<Aluno> obterPorCpf(Cpf cpf) {
        notNull(cpf, "O CPF não pode ser nulo");
        return Optional.ofNullable(alunos.get(cpf));
    }
    /*-----------------------------------------------------------------------*/

    /*-----------------------------------------------------------------------*/
    private Map<GuildaId, Guilda> guildas = new HashMap<>();

    @Override
    public void salvar(Guilda guilda) {
        notNull(guilda, "A guilda não pode ser nula");
        guildas.put(guilda.getId(), guilda);
    }

    @Override
    public Optional<Guilda> obterPorId(GuildaId id) {
        notNull(id, "O id da guilda não pode ser nulo");
        return Optional.ofNullable(guildas.get(id));
    }

    @Override
    public List<Guilda> listarGuildas() {
        return new ArrayList<>(guildas.values());
    }

    @Override
    public Optional<Guilda> buscarPorCodigoConvite(CodigoConvite codigo) {
        notNull(codigo, "O código de convite não pode ser nulo");
        return guildas.values().stream()
            .filter(g -> g.getCodigoConvite().equals(codigo))
            .findFirst();
    }

    @Override
    public Optional<Guilda> buscarPorNome(String nome) {
        notNull(nome, "O nome não pode ser nulo");
        return guildas.values().stream()
            .filter(g -> g.getNome().equals(nome))
            .findFirst();
    }
    /*-----------------------------------------------------------------------*/

    /*-----------------------------------------------------------------------*/
    private List<Checkin> checkins = new ArrayList<>();

    @Override
    public void salvar(Checkin checkin) {
        notNull(checkin, "O check-in não pode ser nulo");
        checkins.add(checkin);
    }

    @Override
    public List<Checkin> buscarPorAluno(Cpf alunoId) {
        notNull(alunoId, "O CPF do aluno não pode ser nulo");
        return checkins.stream()
            .filter(c -> c.getAlunoId().equals(alunoId))
            .collect(Collectors.toList());
    }

    @Override
    public boolean existeCheckinDeTreino(Cpf alunoId, PlanoDeTreinoId planoDeTreinoId, 
                                         LetraDoTreino letra, LocalDate data) {
        notNull(alunoId, "O CPF do aluno não pode ser nulo");
        notNull(planoDeTreinoId, "O id do plano de treino não pode ser nulo");
        notNull(letra, "A letra do treino não pode ser nula");
        notNull(data, "A data não pode ser nula");

        return checkins.stream()
            .filter(c -> c.getContexto().getTipo() == TipoDeCheckin.TREINO)
            .filter(c -> c.getAlunoId().equals(alunoId))
            .filter(c -> c.getDataDoCheckin().equals(data))
            .filter(c -> c.getContexto().getPlanoDeTreinoId().equals(planoDeTreinoId))
            .filter(c -> c.getContexto().getLetraDoTreino() == letra)
            .findFirst()
            .isPresent();
    }

    @Override
    public List<Checkin> buscarPorGuildaEPeriodo(GuildaId guildaId, LocalDate inicio, LocalDate fim) {
        notNull(guildaId, "O id da guilda não pode ser nulo");
        notNull(inicio, "A data de início não pode ser nula");
        notNull(fim, "A data de fim não pode ser nula");

        return checkins.stream()
            .filter(c -> c.getGuildaId().equals(guildaId))
            .filter(c -> !c.getDataDoCheckin().isBefore(inicio))
            .filter(c -> !c.getDataDoCheckin().isAfter(fim))
            .collect(Collectors.toList());
    }
    /*-----------------------------------------------------------------------*/

    /*-----------------------------------------------------------------------*/
    private Map<TorneioId, Torneio> torneios = new HashMap<>();

    @Override
    public void salvar(Torneio torneio) {
        notNull(torneio, "O torneio não pode ser nulo");
        torneios.put(torneio.getId(), torneio);
    }

    @Override
    public Optional<Torneio> obterPorId(TorneioId id) {
        notNull(id, "O id do torneio não pode ser nulo");
        return Optional.ofNullable(torneios.get(id));
    }

    @Override
    public Optional<Torneio> buscarTorneioAtivo(LocalDate dataAtual) {
        notNull(dataAtual, "A data atual não pode ser nula");
        return torneios.values().stream()
            .filter(t -> t.getStatus() == StatusTorneio.ATIVO)
            .filter(t -> !dataAtual.isBefore(t.getDataInicio()))
            .filter(t -> !dataAtual.isAfter(t.getDataFim()))
            .findFirst();
    }

    @Override
    public List<Torneio> listarTorneios() {
        return new ArrayList<>(torneios.values());
    }
    /*-----------------------------------------------------------------------*/
}