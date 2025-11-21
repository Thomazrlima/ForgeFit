package br.com.forgefit.persistencia.jpa;

import java.util.Date;

import jakarta.persistence.*;

@Entity
@Table(name = "AVALIACAO_FISICA")
class AvaliacaoFisica {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "ALUNO_MATRICULA", nullable = false)
	private Aluno aluno;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "DATA_AVALIACAO", nullable = false)
	private Date dataAvaliacao;
	
	@ManyToOne
	@JoinColumn(name = "PROFESSOR_RESPONSAVEL_ID", nullable = false)
	private ProfessorJpa professorResponsavel;
	
	@Column(name = "MASSA_GORDA_PERCENTUAL")
	private Double massaGordaPercentual;
	
	@Column(name = "MASSA_GORDA_KG")
	private Double massaGordaKg;
	
	@Column(name = "MASSA_MAGRA_KG")
	private Double massaMagraKg;
	
	@Column(name = "MASSA_MUSCULAR_ESQUELETICA_KG")
	private Double massaMuscularEsqueleticaKg;
	
	@Column(name = "AGUA_CORPORAL_TOTAL_PERCENTUAL")
	private Double aguaCorporalTotalPercentual;
	
	@Column(name = "GORDURA_VISCERAL_NIVEL")
	private Integer gorduraVisceralNivel;
	
	@Column(name = "TAXA_METABOLICA_BASAL_KCAL")
	private Integer taxaMetabolicaBasalKcal;
	
	@Column(name = "MASSA_OSSEA_KG")
	private Double massaOsseaKg;
	
	@Column(name = "INDICE_DE_MASSA_CORPORAL")
	private Double indiceDeMassaCorporal;
	
	@Column(name = "BRACO_RELAXADO_CM")
	private Double bracoRelaxadoCm;
	
	@Column(name = "BRACO_CONTRAIDO_CM")
	private Double bracoContraidoCm;
	
	@Column(name = "ANTEBRACO_CM")
	private Double antebracoCm;
	
	@Column(name = "TORAX_PEITORAL_CM")
	private Double toraxPeitoralCm;
	
	@Column(name = "CINTURA_CM")
	private Double cinturaCm;
	
	@Column(name = "ABDOMEN_CM")
	private Double abdomenCm;
	
	@Column(name = "QUADRIL_CM")
	private Double quadrilCm;
	
	@Column(name = "COXA_CM")
	private Double coxaCm;
	
	@Column(name = "PANTURRILHA_CM")
	private Double panturrilhaCm;

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

	public Date getDataAvaliacao() {
		return dataAvaliacao;
	}

	public void setDataAvaliacao(Date dataAvaliacao) {
		this.dataAvaliacao = dataAvaliacao;
	}

	public ProfessorJpa getProfessorResponsavel() {
		return professorResponsavel;
	}

	public void setProfessorResponsavel(ProfessorJpa professorResponsavel) {
		this.professorResponsavel = professorResponsavel;
	}

	public Integer getProfessorResponsavelId() {
		return professorResponsavel != null ? professorResponsavel.id : null;
	}

	public void setProfessorResponsavelId(Integer professorResponsavelId) {
		if (this.professorResponsavel == null) {
			this.professorResponsavel = new ProfessorJpa();
		}
		this.professorResponsavel.id = professorResponsavelId;
	}

	public Double getMassaGordaPercentual() {
		return massaGordaPercentual;
	}

	public void setMassaGordaPercentual(Double massaGordaPercentual) {
		this.massaGordaPercentual = massaGordaPercentual;
	}

	public Double getMassaGordaKg() {
		return massaGordaKg;
	}

	public void setMassaGordaKg(Double massaGordaKg) {
		this.massaGordaKg = massaGordaKg;
	}

	public Double getMassaMagraKg() {
		return massaMagraKg;
	}

	public void setMassaMagraKg(Double massaMagraKg) {
		this.massaMagraKg = massaMagraKg;
	}

	public Double getMassaMuscularEsqueleticaKg() {
		return massaMuscularEsqueleticaKg;
	}

	public void setMassaMuscularEsqueleticaKg(Double massaMuscularEsqueleticaKg) {
		this.massaMuscularEsqueleticaKg = massaMuscularEsqueleticaKg;
	}

	public Double getAguaCorporalTotalPercentual() {
		return aguaCorporalTotalPercentual;
	}

	public void setAguaCorporalTotalPercentual(Double aguaCorporalTotalPercentual) {
		this.aguaCorporalTotalPercentual = aguaCorporalTotalPercentual;
	}

	public Integer getGorduraVisceralNivel() {
		return gorduraVisceralNivel;
	}

	public void setGorduraVisceralNivel(Integer gorduraVisceralNivel) {
		this.gorduraVisceralNivel = gorduraVisceralNivel;
	}

	public Integer getTaxaMetabolicaBasalKcal() {
		return taxaMetabolicaBasalKcal;
	}

	public void setTaxaMetabolicaBasalKcal(Integer taxaMetabolicaBasalKcal) {
		this.taxaMetabolicaBasalKcal = taxaMetabolicaBasalKcal;
	}

	public Double getMassaOsseaKg() {
		return massaOsseaKg;
	}

	public void setMassaOsseaKg(Double massaOsseaKg) {
		this.massaOsseaKg = massaOsseaKg;
	}

	public Double getIndiceDeMassaCorporal() {
		return indiceDeMassaCorporal;
	}

	public void setIndiceDeMassaCorporal(Double indiceDeMassaCorporal) {
		this.indiceDeMassaCorporal = indiceDeMassaCorporal;
	}

	public Double getBracoRelaxadoCm() {
		return bracoRelaxadoCm;
	}

	public void setBracoRelaxadoCm(Double bracoRelaxadoCm) {
		this.bracoRelaxadoCm = bracoRelaxadoCm;
	}

	public Double getBracoContraidoCm() {
		return bracoContraidoCm;
	}

	public void setBracoContraidoCm(Double bracoContraidoCm) {
		this.bracoContraidoCm = bracoContraidoCm;
	}

	public Double getAntebracoCm() {
		return antebracoCm;
	}

	public void setAntebracoCm(Double antebracoCm) {
		this.antebracoCm = antebracoCm;
	}

	public Double getToraxPeitoralCm() {
		return toraxPeitoralCm;
	}

	public void setToraxPeitoralCm(Double toraxPeitoralCm) {
		this.toraxPeitoralCm = toraxPeitoralCm;
	}

	public Double getCinturaCm() {
		return cinturaCm;
	}

	public void setCinturaCm(Double cinturaCm) {
		this.cinturaCm = cinturaCm;
	}

	public Double getAbdomenCm() {
		return abdomenCm;
	}

	public void setAbdomenCm(Double abdomenCm) {
		this.abdomenCm = abdomenCm;
	}

	public Double getQuadrilCm() {
		return quadrilCm;
	}

	public void setQuadrilCm(Double quadrilCm) {
		this.quadrilCm = quadrilCm;
	}

	public Double getCoxaCm() {
		return coxaCm;
	}

	public void setCoxaCm(Double coxaCm) {
		this.coxaCm = coxaCm;
	}

	public Double getPanturrilhaCm() {
		return panturrilhaCm;
	}

	public void setPanturrilhaCm(Double panturrilhaCm) {
		this.panturrilhaCm = panturrilhaCm;
	}
}
