package br.com.forgefit.persistencia.jpa.aluno;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import br.com.forgefit.persistencia.jpa.enums.StatusAluno;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OrderColumn;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "ALU_ALUNO")
public class Aluno {
	
	@Id
	@Column(name = "ALU_MATRICULA", nullable = false, length = 50)
	private String matricula;
	
	@Column(name = "ALU_CPF", nullable = false, unique = true, length = 11)
	private String cpf;
	
	@Column(name = "ALU_NOME", nullable = false, length = 255)
	private String nome;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "ALU_DATA_NASCIMENTO")
	private Date dataNascimento;
	
	@Column(name = "ALU_PONTUACAO_TOTAL")
	private Integer pontuacaoTotal = 0;
	
	@Column(name = "ALU_CREDITOS")
	private Double creditos = 0.0;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "ALU_STATUS", nullable = false)
	private StatusAluno status = StatusAluno.ATIVO;
	
	@Column(name = "ALU_GUILDA_ID")
	private Integer guildaId;
	
	@Column(name = "ALU_PLANO_ATIVO_ID")
	private Integer planoAtivoId;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "ALU_BLOQUEIO_ATE")
	private Date bloqueioAte;
	
	@OneToMany(mappedBy = "aluno", cascade = CascadeType.ALL, orphanRemoval = true)
	@OrderColumn(name = "AVF_POSICAO")
	private List<AvaliacaoFisica> historicoDeAvaliacoes = new ArrayList<>();
	
	@OneToMany(mappedBy = "aluno", cascade = CascadeType.ALL, orphanRemoval = true)
	@OrderColumn(name = "FRQ_POSICAO")
	private List<Frequencia> historicoDeFrequencia = new ArrayList<>();

	public String getMatricula() {
		return matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public Integer getPontuacaoTotal() {
		return pontuacaoTotal;
	}

	public void setPontuacaoTotal(Integer pontuacaoTotal) {
		this.pontuacaoTotal = pontuacaoTotal;
	}

	public Double getCreditos() {
		return creditos;
	}

	public void setCreditos(Double creditos) {
		this.creditos = creditos;
	}

	public StatusAluno getStatus() {
		return status;
	}

	public void setStatus(StatusAluno status) {
		this.status = status;
	}

	public Integer getGuildaId() {
		return guildaId;
	}

	public void setGuildaId(Integer guildaId) {
		this.guildaId = guildaId;
	}

	public Integer getPlanoAtivoId() {
		return planoAtivoId;
	}

	public void setPlanoAtivoId(Integer planoAtivoId) {
		this.planoAtivoId = planoAtivoId;
	}

	public Date getBloqueioAte() {
		return bloqueioAte;
	}

	public void setBloqueioAte(Date bloqueioAte) {
		this.bloqueioAte = bloqueioAte;
	}

	public List<AvaliacaoFisica> getHistoricoDeAvaliacoes() {
		return historicoDeAvaliacoes;
	}

	public void setHistoricoDeAvaliacoes(List<AvaliacaoFisica> historicoDeAvaliacoes) {
		this.historicoDeAvaliacoes = historicoDeAvaliacoes;
	}

	public List<Frequencia> getHistoricoDeFrequencia() {
		return historicoDeFrequencia;
	}

	public void setHistoricoDeFrequencia(List<Frequencia> historicoDeFrequencia) {
		this.historicoDeFrequencia = historicoDeFrequencia;
	}
}
