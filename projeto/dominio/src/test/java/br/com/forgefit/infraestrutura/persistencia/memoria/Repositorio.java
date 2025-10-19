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
import br.com.forgefit.dominio.treino.PlanoDeTreinoCompleto;
import br.com.forgefit.dominio.treino.PlanoDeTreinoId;
import br.com.forgefit.dominio.treino.TreinoRepositorio;
import br.com.forgefit.dominio.treino.enums.LetraDoTreino;

import br.com.forgefit.dominio.aula.Aula;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.aula.AulaRepositorio;
import br.com.forgefit.dominio.avaliacao.Avaliacao;
import br.com.forgefit.dominio.avaliacao.AvaliacaoId;
import br.com.forgefit.dominio.avaliacao.AvaliacaoRepositorio;
import br.com.forgefit.dominio.aluno.ProfessorId;
import br.com.forgefit.dominio.ranking.Ranking;
import br.com.forgefit.dominio.ranking.RankingRepositorio;
import br.com.forgefit.dominio.ranking.enums.PeriodoRanking;

/**
 * Implementação em memória dos repositórios para testes BDD.
 * Usa HashMaps e Lists para simular persistência.
 */
public class Repositorio implements AlunoRepositorio, RepositorioGeral, 
                                     GuildaRepositorio, CheckinRepositorio, TorneioRepositorio,
                                     AulaRepositorio, RankingRepositorio, AvaliacaoRepositorio,
                                     TreinoRepositorio { 

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

    /*-----------------------------------------------------------------------*/
    // Aula Repository
    private Map<AulaId, Aula> aulas = new HashMap<>();

    @Override
    public void salvar(Aula aula) {
        notNull(aula, "A aula não pode ser nula");
        aulas.put(aula.getId(), aula);
    }

    @Override
    public Optional<Aula> obterPorId(AulaId aulaId) {
        notNull(aulaId, "O ID da aula não pode ser nulo");
        return Optional.ofNullable(aulas.get(aulaId));
    }

    @Override
    public List<Aula> listarTodas() {
        return new ArrayList<>(aulas.values());
    }

    @Override
    public List<Aula> buscarPorEspacoEPeriodo(br.com.forgefit.dominio.aula.enums.Espaco espaco, 
                                                java.time.LocalDateTime inicio, 
                                                java.time.LocalDateTime fim) {
        notNull(espaco, "O espaço não pode ser nulo");
        notNull(inicio, "A data de início não pode ser nula");
        notNull(fim, "A data de fim não pode ser nula");
        
        return aulas.values().stream()
            .filter(a -> a.getEspaco() == espaco)
            .filter(a -> !(a.getFim().isBefore(inicio) || a.getInicio().isAfter(fim)))
            .collect(Collectors.toList());
    }
    /*-----------------------------------------------------------------------*/

    /*-----------------------------------------------------------------------*/
    // Ranking Repository
    private Map<PeriodoRanking, Ranking> rankings = new HashMap<>();

    @Override
    public void salvar(Ranking ranking) {
        notNull(ranking, "O ranking não pode ser nulo");
        rankings.put(ranking.getPeriodo(), ranking);
    }

    @Override
    public Optional<Ranking> obterPorPeriodo(PeriodoRanking periodo) {
        notNull(periodo, "O período não pode ser nulo");
        return Optional.ofNullable(rankings.get(periodo));
    }
    /*-----------------------------------------------------------------------*/

    /*-----------------------------------------------------------------------*/
    // Avaliacao Repository
    private Map<AvaliacaoId, Avaliacao> avaliacoes = new HashMap<>();

    @Override
    public void salvar(Avaliacao avaliacao) {
        notNull(avaliacao, "A avaliação não pode ser nula");
        avaliacoes.put(avaliacao.getId(), avaliacao);
    }

    @Override
    public Optional<Avaliacao> obterPorId(AvaliacaoId id) {
        notNull(id, "O ID da avaliação não pode ser nulo");
        return Optional.ofNullable(avaliacoes.get(id));
    }

    @Override
    public List<Avaliacao> buscarPorProfessor(ProfessorId professorId) {
        notNull(professorId, "O ID do professor não pode ser nulo");
        return avaliacoes.values().stream()
            .filter(a -> a.getProfessorId().equals(professorId))
            .collect(Collectors.toList());
    }

    @Override
    public boolean existeAvaliacao(Cpf alunoId, AulaId aulaId, LocalDate dataDaOcorrencia) {
        return avaliacoes.values().stream()
            .anyMatch(a -> a.getAlunoId().equals(alunoId) 
                && a.getAulaId().equals(aulaId)
                && a.getDataDaOcorrenciaDaAula().equals(dataDaOcorrencia));
    }
    /*-----------------------------------------------------------------------*/

    /*-----------------------------------------------------------------------*/
    private Map<PlanoDeTreinoId, PlanoDeTreinoCompleto> planosTreino = new HashMap<>();

    @Override
    public void salvar(PlanoDeTreinoCompleto plano) {
        notNull(plano, "O plano de treino não pode ser nulo");
        planosTreino.put(plano.getId(), plano);
    }

    @Override
    public Optional<PlanoDeTreinoCompleto> obterPorId(PlanoDeTreinoId id) {
        notNull(id, "O ID do plano de treino não pode ser nulo");
        return Optional.ofNullable(planosTreino.get(id));
    }
    /*-----------------------------------------------------------------------*/
}