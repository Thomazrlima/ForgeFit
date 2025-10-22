package br.com.forgefit.dominio.aluno;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicLong;

import br.com.forgefit.dominio.aluno.enums.StatusAluno;

import br.com.forgefit.dominio.treino.PlanoDeTreino;
import br.com.forgefit.dominio.guilda.GuildaId;

public class Aluno {
    private static final AtomicLong matriculaCounter = new AtomicLong(1);
    
    private final Matricula matricula;
    private final Cpf cpf;
    private String nome;
    private LocalDate dataNascimento;
    private int pontuacaoTotal;
    private double creditos;
    private StatusAluno status;
    private LocalDate bloqueioAte;
    private PlanoDeTreino planoAtivo;
    private GuildaId guildaId;
    private final List<AvaliacaoFisica> historicoDeAvaliacoes = new ArrayList<>();

    public Aluno(Matricula matricula, Cpf cpf, String nome, LocalDate dataNascimento) {
        notNull(matricula, "A matrícula não pode ser nula");
        notNull(cpf, "O CPF não pode ser nulo");
        notNull(nome, "O nome não pode ser nulo");
        notNull(dataNascimento, "A data de nascimento não pode ser nula");

        this.matricula = matricula;
        this.cpf = cpf;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.status = StatusAluno.ATIVO;
        this.pontuacaoTotal = 0;
        this.creditos = 0.0;
    }
    
    // Construtor simplificado que gera matrícula automaticamente
    public Aluno(Cpf cpf, String nome, LocalDate dataNascimento) {
        this(new Matricula(String.valueOf(matriculaCounter.getAndIncrement())), cpf, nome, dataNascimento);
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

    public PlanoDeTreino getPlanoAtivo() {
        return planoAtivo;
    }

    public void setPlanoAtivo(PlanoDeTreino planoAtivo) {
        this.planoAtivo = planoAtivo;
    }

    public GuildaId getGuildaId() {
        return guildaId;
    }

    public void setGuildaId(GuildaId guildaId) {
        this.guildaId = guildaId;
    }

    public boolean temPlanoAtivo() {
        return planoAtivo != null && planoAtivo.isAtivo();
    }

    public List<AvaliacaoFisica> getHistoricoDeAvaliacoes() {
        return Collections.unmodifiableList(historicoDeAvaliacoes);
    }

    public void adicionarAvaliacaoFisica(AvaliacaoFisica avaliacao) {
        notNull(avaliacao, "A avaliação física não pode ser nula");
        historicoDeAvaliacoes.add(avaliacao);
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Aluno aluno = (Aluno) o;
        return matricula.equals(aluno.matricula);
    }

    @Override
    public int hashCode() {
        return Objects.hash(matricula);
    }
}