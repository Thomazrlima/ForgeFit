package br.com.forgefit.persistencia.jpa.aula;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import br.com.forgefit.persistencia.jpa.enums.Espaco;
import br.com.forgefit.persistencia.jpa.enums.Modalidade;
import br.com.forgefit.persistencia.jpa.enums.StatusAula;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OrderColumn;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "AUL_AULA")
public class Aula {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "AUL_ID")
	private Integer id;
	
	@Column(name = "AUL_PROFESSOR_ID", nullable = false)
	private Integer professorId;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "AUL_MODALIDADE", nullable = false)
	private Modalidade modalidade;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "AUL_ESPACO", nullable = false)
	private Espaco espaco;
	
	@Column(name = "AUL_CAPACIDADE", nullable = false)
	private Integer capacidade;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "AUL_INICIO", nullable = false)
	private Date inicio;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "AUL_FIM", nullable = false)
	private Date fim;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "AUL_STATUS", nullable = false)
	private StatusAula status = StatusAula.ATIVA;
	
	@Embedded
	private Recorrencia recorrencia;
	
	@OneToMany(mappedBy = "aula", cascade = CascadeType.ALL, orphanRemoval = true)
	@OrderColumn(name = "OEX_POSICAO")
	private List<OcorrenciaExcecao> excecoes = new ArrayList<>();
	
	@OneToMany(mappedBy = "aula", cascade = CascadeType.ALL, orphanRemoval = true)
	@OrderColumn(name = "RES_POSICAO")
	private List<Reserva> reservas = new ArrayList<>();
	
	@OneToMany(mappedBy = "aula", cascade = CascadeType.ALL, orphanRemoval = true)
	@OrderColumn(name = "LES_POSICAO")
	private List<PosicaoListaDeEspera> listaDeEspera = new ArrayList<>();

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getProfessorId() {
		return professorId;
	}

	public void setProfessorId(Integer professorId) {
		this.professorId = professorId;
	}

	public Modalidade getModalidade() {
		return modalidade;
	}

	public void setModalidade(Modalidade modalidade) {
		this.modalidade = modalidade;
	}

	public Espaco getEspaco() {
		return espaco;
	}

	public void setEspaco(Espaco espaco) {
		this.espaco = espaco;
	}

	public Integer getCapacidade() {
		return capacidade;
	}

	public void setCapacidade(Integer capacidade) {
		this.capacidade = capacidade;
	}

	public Date getInicio() {
		return inicio;
	}

	public void setInicio(Date inicio) {
		this.inicio = inicio;
	}

	public Date getFim() {
		return fim;
	}

	public void setFim(Date fim) {
		this.fim = fim;
	}

	public StatusAula getStatus() {
		return status;
	}

	public void setStatus(StatusAula status) {
		this.status = status;
	}

	public Recorrencia getRecorrencia() {
		return recorrencia;
	}

	public void setRecorrencia(Recorrencia recorrencia) {
		this.recorrencia = recorrencia;
	}

	public List<OcorrenciaExcecao> getExcecoes() {
		return excecoes;
	}

	public void setExcecoes(List<OcorrenciaExcecao> excecoes) {
		this.excecoes = excecoes;
	}

	public List<Reserva> getReservas() {
		return reservas;
	}

	public void setReservas(List<Reserva> reservas) {
		this.reservas = reservas;
	}

	public List<PosicaoListaDeEspera> getListaDeEspera() {
		return listaDeEspera;
	}

	public void setListaDeEspera(List<PosicaoListaDeEspera> listaDeEspera) {
		this.listaDeEspera = listaDeEspera;
	}
}
