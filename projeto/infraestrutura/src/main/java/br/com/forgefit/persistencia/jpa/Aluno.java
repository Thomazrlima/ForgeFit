package br.com.forgefit.persistencia.jpa;

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
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "ALUNO")
class Aluno {

	@Id
	@Column(name = "MATRICULA", nullable = false, length = 50)
	private String matricula;

	@Column(name = "CPF", nullable = false, unique = true, length = 11)
	private String cpf;

	@Column(name = "NOME", nullable = false, length = 255)
	private String nome;

	@Temporal(TemporalType.DATE)
	@Column(name = "DATA_NASCIMENTO")
	private Date dataNascimento;

	@Column(name = "USER_ID", length = 255)
	private String userId;

	@Column(name = "PONTUACAO_TOTAL")
	private Integer pontuacaoTotal = 0;

	@Column(name = "CREDITOS")
	private Double creditos = 0.0;

	@Enumerated(EnumType.STRING)
	@Column(name = "STATUS", nullable = false)
	private StatusAluno status = StatusAluno.ATIVO;

	@Column(name = "GUILDA_ID")
	private Integer guildaId;

	@Column(name = "PLANO_ATIVO_ID")
	private Integer planoAtivoId;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "BLOQUEIO_ATE")
	private Date bloqueioAte;

	@OneToMany(mappedBy = "aluno", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<AvaliacaoFisica> historicoDeAvaliacoes = new ArrayList<>();

	@OneToMany(mappedBy = "aluno", cascade = CascadeType.ALL, orphanRemoval = true)
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

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
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

interface AlunoJpaRepository extends org.springframework.data.jpa.repository.JpaRepository<Aluno, String> {
	Aluno findByCpf(String cpf);
	Aluno findByUserId(String userId);
}

@org.springframework.stereotype.Repository("alunoRepositorio")
class AlunoRepositorioImpl implements br.com.forgefit.dominio.aluno.AlunoRepositorio {
	@org.springframework.beans.factory.annotation.Autowired
	AlunoJpaRepository repositorio;

	@org.springframework.beans.factory.annotation.Autowired
	JpaMapeador mapeador;

	@Override
	public void salvar(br.com.forgefit.dominio.aluno.Aluno aluno) {
		// Busca a entidade existente para atualizar, evitando problemas com relacionamentos nullable=false
		Aluno alunoJpa = repositorio.findById(aluno.getMatricula().getValor())
			.orElseGet(() -> {
				// Se não existe, cria novo através do ModelMapper
				return mapeador.map(aluno, Aluno.class);
			});
		
		// Atualiza apenas os campos necessários do aluno existente
		if (repositorio.existsById(aluno.getMatricula().getValor())) {
			alunoJpa.setNome(aluno.getNome());
			alunoJpa.setCreditos(aluno.getCreditos());
			alunoJpa.setPontuacaoTotal(aluno.getPontuacaoTotal());
			alunoJpa.setStatus(StatusAluno.valueOf(aluno.getStatus().name()));
			alunoJpa.setBloqueioAte(aluno.getBloqueioAte() != null 
				? java.sql.Date.valueOf(aluno.getBloqueioAte()) 
				: null);
			// Não atualiza relacionamentos complexos como planoAtual, avaliacoes, etc.
		}
		
		repositorio.save(alunoJpa);
	}

	@Override
	public java.util.Optional<br.com.forgefit.dominio.aluno.Aluno> obterPorMatricula(
			br.com.forgefit.dominio.aluno.Matricula matricula) {
		return repositorio.findById(matricula.getValor())
				.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.aluno.Aluno.class));
	}

	@Override
	public java.util.Optional<br.com.forgefit.dominio.aluno.Aluno> obterAlunoPorCpf(
			br.com.forgefit.dominio.aluno.Cpf cpf) {
		Aluno alunoJpa = repositorio.findByCpf(cpf.getNumero());
		return java.util.Optional.ofNullable(alunoJpa)
				.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.aluno.Aluno.class));
	}

	@Override
	public java.util.Optional<br.com.forgefit.dominio.aluno.Aluno> obterAlunoPorUserId(String userId) {
		if (userId == null) {
			return java.util.Optional.empty();
		}
		Aluno alunoJpa = repositorio.findByUserId(userId);
		if (alunoJpa == null) {
			return java.util.Optional.empty();
		}
		
		// Mapeamento manual para evitar problemas com campos final do ModelMapper
		try {
			br.com.forgefit.dominio.aluno.Matricula matricula = 
				new br.com.forgefit.dominio.aluno.Matricula(alunoJpa.getMatricula());
			br.com.forgefit.dominio.aluno.Cpf cpf = 
				new br.com.forgefit.dominio.aluno.Cpf(alunoJpa.getCpf());
			
			// Converter java.sql.Date para LocalDate
			java.time.LocalDate dataNascimento = new java.sql.Date(
				alunoJpa.getDataNascimento().getTime()
			).toLocalDate();
			
			br.com.forgefit.dominio.aluno.Aluno alunoDominio = 
				new br.com.forgefit.dominio.aluno.Aluno(
					matricula, 
					cpf, 
					alunoJpa.getNome(), 
					dataNascimento,
					alunoJpa.getUserId()
				);
			
			// Adicionar pontuação e créditos
			if (alunoJpa.getPontuacaoTotal() != null && alunoJpa.getPontuacaoTotal() > 0) {
				alunoDominio.adicionarPontos(alunoJpa.getPontuacaoTotal());
			}
			if (alunoJpa.getCreditos() != null && alunoJpa.getCreditos() > 0) {
				alunoDominio.adicionarCreditos(alunoJpa.getCreditos());
			}
			
			return java.util.Optional.of(alunoDominio);
		} catch (Exception e) {
			System.err.println("Erro ao mapear Aluno: " + e.getMessage());
			e.printStackTrace();
			return java.util.Optional.empty();
		}
	}
}
