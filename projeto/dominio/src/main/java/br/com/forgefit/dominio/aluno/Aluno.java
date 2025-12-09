package br.com.forgefit.dominio.aluno;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicLong;

import br.com.forgefit.dominio.aluno.enums.StatusAluno;
import br.com.forgefit.dominio.frequencia.Frequencia;
import br.com.forgefit.dominio.treino.PlanoDeTreinoId;
import br.com.forgefit.dominio.guilda.GuildaId;

public class Aluno {
    private static final AtomicLong matriculaCounter = new AtomicLong(1);

    private final Matricula matricula;
    private final Cpf cpf;
    private String nome;
    private LocalDate dataNascimento;
    private String userId;
    private int pontuacaoTotal;
    private double creditos;
    private StatusAluno status;
    private LocalDate bloqueioAte;
    private PlanoDeTreinoId planoAtivoId;
    private GuildaId guildaId;

    private final List<AvaliacaoFisica> historicoDeAvaliacoes = new ArrayList<>();
    private final List<PlanoDeTreinoId> historicoDeplanosIds = new ArrayList<>();
    private final List<Frequencia> historicoDeFrequencia = new ArrayList<>();

    // Construtor vazio protegido para frameworks (JPA, ModelMapper)
    protected Aluno() {
        this.matricula = null;
        this.cpf = null;
    }

    public Aluno(Matricula matricula, Cpf cpf, String nome, LocalDate dataNascimento, String userId) {
        notNull(matricula, "A matrícula não pode ser nula");
        notNull(cpf, "O CPF não pode ser nulo");
        notNull(nome, "O nome não pode ser nulo");
        notNull(dataNascimento, "A data de nascimento não pode ser nula");

        this.matricula = matricula;
        this.cpf = cpf;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.userId = userId;
        this.status = StatusAluno.ATIVO;
        this.pontuacaoTotal = 0;
        this.creditos = 0.0;
    }

    // Construtor simplificado que gera matrícula automaticamente
    public Aluno(Cpf cpf, String nome, LocalDate dataNascimento, String userId) {
        this(new Matricula(String.valueOf(matriculaCounter.getAndIncrement())), cpf, nome, dataNascimento, userId);
    }

    public Matricula getMatricula() {
        return matricula;
    }

    public Cpf getCpf() {
        return cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public int getPontuacaoTotal() {
        return pontuacaoTotal;
    }

    public void adicionarPontos(int pontos) {
        if (pontos <= 0) {
            throw new IllegalArgumentException("Os pontos devem ser positivos");
        }
        this.pontuacaoTotal += pontos;
    }

    public double getCreditos() {
        return creditos;
    }

    public void adicionarCreditos(double creditos) {
        if (creditos <= 0) {
            throw new IllegalArgumentException("Os créditos devem ser positivos");
        }
        this.creditos += creditos;
    }

    public StatusAluno getStatus() {
        return status;
    }

    public void setStatus(StatusAluno status) {
        this.status = status;
    }

    public LocalDate getBloqueioAte() {
        return bloqueioAte;
    }

    public void setBloqueioAte(LocalDate bloqueioAte) {
        this.bloqueioAte = bloqueioAte;
    }

    public PlanoDeTreinoId getPlanoAtivoId() {
        return planoAtivoId;
    }

    public void setPlanoAtivoId(PlanoDeTreinoId planoAtivoId) {
        this.planoAtivoId = planoAtivoId;
    }

    public GuildaId getGuildaId() {
        return guildaId;
    }

    public void setGuildaId(GuildaId guildaId) {
        this.guildaId = guildaId;
    }

    public boolean temPlanoAtivo() {
        return planoAtivoId != null;
    }

    public List<AvaliacaoFisica> getHistoricoDeAvaliacoes() {
        return Collections.unmodifiableList(historicoDeAvaliacoes);
    }

    public void adicionarAvaliacaoFisica(AvaliacaoFisica avaliacao) {
        notNull(avaliacao, "A avaliação física não pode ser nula");
        historicoDeAvaliacoes.add(avaliacao);
    }

    public List<PlanoDeTreinoId> getHistoricoDeplanosIds() {
        return Collections.unmodifiableList(historicoDeplanosIds);
    }

    public void adicionarPlanoDeTreinoId(PlanoDeTreinoId planoId) {
        notNull(planoId, "O ID do plano de treino não pode ser nulo");
        historicoDeplanosIds.add(planoId);
    }

    public List<Frequencia> getHistoricoDeFrequencia() {
        return Collections.unmodifiableList(historicoDeFrequencia);
    }

    public void adicionarFrequencia(Frequencia frequencia) {
        notNull(frequencia, "A frequência não pode ser nula");
        historicoDeFrequencia.add(frequencia);
    }

    /**
     * Verifica se o aluno está bloqueado.
     * Um aluno está bloqueado se seu status for BLOQUEADO e a data de bloqueio ainda não expirou.
     */
    public boolean estaBloqueado() {
        return status == StatusAluno.BLOQUEADO && 
               (bloqueioAte == null || !LocalDate.now().isAfter(bloqueioAte));
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Aluno aluno = (Aluno) o;
        return matricula.equals(aluno.matricula);
    }

    @Override
    public int hashCode() {
        return Objects.hash(matricula);
    }
}