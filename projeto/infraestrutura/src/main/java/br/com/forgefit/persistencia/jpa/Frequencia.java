package br.com.forgefit.persistencia.jpa;

import java.util.Date;

import br.com.forgefit.persistencia.jpa.enums.StatusFrequencia;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "FREQUENCIA")
class Frequencia {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "ALU_MATRICULA", nullable = false)
	private Aluno aluno;
	
	@Column(name = "AULA_ID", nullable = false)
	private Integer aulaId;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "DATA_OCORRENCIA", nullable = false)
	private Date dataOcorrencia;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "STATUS", nullable = false)
	private StatusFrequencia status;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Aluno getAluno() {
		return aluno;
	}

	public void setAluno(Aluno aluno) {
		this.aluno = aluno;
	}

	public Integer getAulaId() {
		return aulaId;
	}

	public void setAulaId(Integer aulaId) {
		this.aulaId = aulaId;
	}

	public Date getDataOcorrencia() {
		return dataOcorrencia;
	}

	public void setDataOcorrencia(Date dataOcorrencia) {
		this.dataOcorrencia = dataOcorrencia;
	}

	public StatusFrequencia getStatus() {
		return status;
	}

	public void setStatus(StatusFrequencia status) {
		this.status = status;
	}
}

interface FrequenciaJpaRepository extends org.springframework.data.jpa.repository.JpaRepository<Frequencia, Integer> {
	
	@org.springframework.data.jpa.repository.Query("""
		SELECT f FROM Frequencia f
		WHERE f.aluno.matricula = :matricula
		  AND f.dataOcorrencia >= :inicio
		  AND f.dataOcorrencia <= :fim
		ORDER BY f.dataOcorrencia DESC
		""")
	java.util.List<Frequencia> buscarPorAlunoEPeriodo(
		@org.springframework.data.repository.query.Param("matricula") String matricula,
		@org.springframework.data.repository.query.Param("inicio") java.util.Date inicio,
		@org.springframework.data.repository.query.Param("fim") java.util.Date fim);
	
	@org.springframework.data.jpa.repository.Query("""
		SELECT f FROM Frequencia f
		WHERE f.aluno.matricula = :matricula
		  AND f.aulaId = :aulaId
		  AND f.dataOcorrencia = :data
		""")
	Frequencia buscarPorAlunoAulaEData(
		@org.springframework.data.repository.query.Param("matricula") String matricula,
		@org.springframework.data.repository.query.Param("aulaId") Integer aulaId,
		@org.springframework.data.repository.query.Param("data") java.util.Date data);
	
	@org.springframework.data.jpa.repository.Query("""
		SELECT COUNT(f) FROM Frequencia f
		WHERE f.aluno.matricula = :matricula
		  AND f.status = 'FALTA'
		  AND f.dataOcorrencia >= :inicio
		  AND f.dataOcorrencia <= :fim
		""")
	long contarFaltasPorPeriodo(
		@org.springframework.data.repository.query.Param("matricula") String matricula,
		@org.springframework.data.repository.query.Param("inicio") java.util.Date inicio,
		@org.springframework.data.repository.query.Param("fim") java.util.Date fim);
}

@org.springframework.stereotype.Repository("frequenciaRepositorio")
class FrequenciaRepositorioImpl implements br.com.forgefit.dominio.frequencia.FrequenciaRepositorio {
	@org.springframework.beans.factory.annotation.Autowired
	FrequenciaJpaRepository repositorio;
	
	@org.springframework.beans.factory.annotation.Autowired
	JpaMapeador mapeador;

	@Override
	public void salvar(br.com.forgefit.dominio.frequencia.Frequencia frequencia) {
		Frequencia frequenciaJpa = mapeador.map(frequencia, Frequencia.class);
		repositorio.save(frequenciaJpa);
	}

	@Override
	public java.util.List<br.com.forgefit.dominio.frequencia.Frequencia> buscarPorAlunoEPeriodo(
			br.com.forgefit.dominio.aluno.Matricula alunoMatricula, 
			java.time.LocalDate inicio, 
			java.time.LocalDate fim) {
		java.util.Date inicioDate = DateTimeConverter.toDate(inicio);
		java.util.Date fimDate = DateTimeConverter.toDate(fim);
		return repositorio.buscarPorAlunoEPeriodo(alunoMatricula.getValor(), inicioDate, fimDate).stream()
			.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.frequencia.Frequencia.class))
			.toList();
	}

	@Override
	public br.com.forgefit.dominio.frequencia.Frequencia buscarPorAlunoAulaEData(
			br.com.forgefit.dominio.aluno.Matricula alunoMatricula, 
			br.com.forgefit.dominio.aula.AulaId aulaId, 
			java.time.LocalDate data) {
		java.util.Date dataDate = DateTimeConverter.toDate(data);
		Frequencia frequenciaJpa = repositorio.buscarPorAlunoAulaEData(
			alunoMatricula.getValor(), 
			aulaId.getId(), 
			dataDate);
		return mapeador.map(frequenciaJpa, br.com.forgefit.dominio.frequencia.Frequencia.class);
	}

	@Override
	public long contarFaltasPorPeriodo(
			br.com.forgefit.dominio.aluno.Matricula alunoMatricula, 
			java.time.LocalDate inicio, 
			java.time.LocalDate fim) {
		java.util.Date inicioDate = DateTimeConverter.toDate(inicio);
		java.util.Date fimDate = DateTimeConverter.toDate(fim);
		return repositorio.contarFaltasPorPeriodo(alunoMatricula.getValor(), inicioDate, fimDate);
	}
}
