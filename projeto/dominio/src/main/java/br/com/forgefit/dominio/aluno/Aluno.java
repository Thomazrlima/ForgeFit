package br.com.forgefit.dominio.aluno;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import br.com.forgefit.dominio.aluno.enums.StatusAluno;

import br.com.forgefit.dominio.treino.PlanoDeTreino;
import br.com.forgefit.dominio.guilda.GuildaId;

public class Aluno {
    private final Cpf cpf;
    private String nome;
    private Matricula matricula;
    private LocalDate dataNascimento;
    private int pontuacaoTotal;
    private double creditos;
    private StatusAluno status;
    private LocalDate bloqueioAte;
    private PlanoDeTreino planoAtivo;
    private GuildaId guildaId;
    private final List<AvaliacaoFisica> historicoDeAvaliacoes = new ArrayList<>();

    public Aluno(Cpf cpf) {
        notNull(cpf, "O CPF não pode ser nulo");
        this.cpf = cpf;
        this.status = StatusAluno.ATIVO;
        this.pontuacaoTotal = 0;
        this.creditos = 0.0;
    }
    
    public Aluno(Cpf cpf, StatusAluno status) {
        notNull(cpf, "O CPF não pode ser nulo");
        this.cpf = cpf;
        this.status = status;
        this.pontuacaoTotal = 0;
        this.creditos = 0.0;
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

    public Matricula getMatricula() {
        return matricula;
    }

    public void setMatricula(Matricula matricula) {
        this.matricula = matricula;
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
}