package br.com.forgefit.persistencia.jpa;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.forgefit.aplicacao.guilda.GuildaRepositorioAplicacao;
import br.com.forgefit.aplicacao.guilda.GuildaResumo;
import br.com.forgefit.persistencia.jpa.enums.StatusGuilda;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "GUILDA")
class GuildaJpa {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	int id;

	@Column(name = "NOME", nullable = false, unique = true, length = 255)
	String nome;

	@Column(name = "DESCRICAO", length = 1000)
	String descricao;

	@Column(name = "IMAGEM_URL", length = 500)
	String imagemURL;

	@Enumerated(EnumType.STRING)
	@Column(name = "STATUS", nullable = false)
	StatusGuilda status = StatusGuilda.ATIVA;

	@Column(name = "CODIGO_CONVITE", nullable = false, unique = true, length = 50)
	String codigoConvite;

	@Column(name = "MESTRE_MATRICULA", nullable = false, length = 50)
	String mestreMatricula;

	@Column(name = "PONTUACAO_TOTAL")
	Integer pontuacaoTotal = 0;

	@Override
	public String toString() {
		return nome;
	}
}

interface GuildaJpaRepository extends JpaRepository<GuildaJpa, Integer> {
	GuildaJpa findByCodigoConvite(String codigoConvite);

	GuildaJpa findByNome(String nome);

	List<GuildaJpa> findByStatus(StatusGuilda status);

	@Query("""
		SELECT g.id as id,
			   g.nome as nome,
			   g.descricao as descricao,
			   g.imagemURL as imagemURL,
			   g.pontuacaoTotal as pontuacaoTotal,
			   (SELECT COUNT(m) FROM GuildaMembro m WHERE m.id.guildaId = g.id) as numeroMembros
		FROM GuildaJpa g
		WHERE g.status = 'ATIVA'
		ORDER BY g.pontuacaoTotal DESC, g.nome ASC
		""")
	List<GuildaResumo> listarGuildasAtivasOrdenadas();

	@Query("""
		SELECT g.id as id,
			   g.nome as nome,
			   g.descricao as descricao,
			   g.imagemURL as imagemURL,
			   g.pontuacaoTotal as pontuacaoTotal,
			   (SELECT COUNT(m) FROM GuildaMembro m WHERE m.id.guildaId = g.id) as numeroMembros
		FROM GuildaJpa g
		WHERE g.nome = :nome
		""")
	GuildaResumo buscarPorNome(@Param("nome") String nome);
	
	java.util.Optional<GuildaJpa> findByMestreMatricula(String mestreMatricula);
}

@org.springframework.stereotype.Repository("guildaRepositorio")
class GuildaRepositorioImpl implements br.com.forgefit.dominio.guilda.GuildaRepositorio, GuildaRepositorioAplicacao {
	@org.springframework.beans.factory.annotation.Autowired
	GuildaJpaRepository repositorio;
	
	@org.springframework.beans.factory.annotation.Autowired
	JpaMapeador mapeador;
	
	@org.springframework.beans.factory.annotation.Autowired
	br.com.forgefit.persistencia.jpa.GuildaMembroRepository guildaMembroRepository;
	
	@org.springframework.beans.factory.annotation.Autowired
	br.com.forgefit.persistencia.jpa.CheckinJpaRepository checkinRepository;

	// Métodos do GuildaRepositorio (domínio)
	@Override
	public void salvar(br.com.forgefit.dominio.guilda.Guilda guilda) {
		GuildaJpa guildaJpa = mapeador.map(guilda, GuildaJpa.class);
		
		// Verifica se é UPDATE ou INSERT
		// Se o mestre já é membro da guilda, é UPDATE (edição)
		// Caso contrário, é INSERT (criação)
		br.com.forgefit.persistencia.jpa.GuildaMembroId membroId = 
			new br.com.forgefit.persistencia.jpa.GuildaMembroId(
				guildaJpa.id, 
				guilda.getMestreDaGuilda().getValor()
			);
		
		boolean isUpdate = guildaMembroRepository.existsById(membroId);
		
		if (isUpdate) {
			// É uma edição - mantém o ID existente e usa save()
			repositorio.save(guildaJpa);
		} else {
			// É uma criação - força ID=0 para INSERT com auto-increment
			guildaJpa.id = 0;
			GuildaJpa saved = repositorio.save(guildaJpa);
			
			// Adiciona o mestre como membro da guilda
			br.com.forgefit.persistencia.jpa.GuildaMembro mestre = new br.com.forgefit.persistencia.jpa.GuildaMembro();
			mestre.setId(new br.com.forgefit.persistencia.jpa.GuildaMembroId(saved.id, guilda.getMestreDaGuilda().getValor()));
			mestre.setDataEntrada(new java.util.Date());
			guildaMembroRepository.save(mestre);
		}
	}

	@Override
	public java.util.Optional<br.com.forgefit.dominio.guilda.Guilda> obterPorId(br.com.forgefit.dominio.guilda.GuildaId id) {
		return repositorio.findById(id.getId())
			.map(jpa -> {
				// Cria a instância de Guilda manualmente
				br.com.forgefit.dominio.guilda.GuildaId guildaId = new br.com.forgefit.dominio.guilda.GuildaId(jpa.id);
				br.com.forgefit.dominio.guilda.CodigoConvite codigoConvite = 
					new br.com.forgefit.dominio.guilda.CodigoConvite(jpa.codigoConvite);
				br.com.forgefit.dominio.aluno.Matricula mestreMatricula = 
					new br.com.forgefit.dominio.aluno.Matricula(jpa.mestreMatricula);
				
				br.com.forgefit.dominio.guilda.Guilda guilda = new br.com.forgefit.dominio.guilda.Guilda(
					guildaId,
					jpa.nome,
					jpa.descricao,
					jpa.imagemURL,
					codigoConvite,
					mestreMatricula
				);
				
				return guilda;
			});
	}

	@Override
	public List<br.com.forgefit.dominio.guilda.Guilda> listarGuildas() {
		return repositorio.findAll().stream()
			.map(jpa -> {
				br.com.forgefit.dominio.guilda.GuildaId guildaId = new br.com.forgefit.dominio.guilda.GuildaId(jpa.id);
				br.com.forgefit.dominio.guilda.CodigoConvite codigoConvite = 
					new br.com.forgefit.dominio.guilda.CodigoConvite(jpa.codigoConvite);
				br.com.forgefit.dominio.aluno.Matricula mestreMatricula = 
					new br.com.forgefit.dominio.aluno.Matricula(jpa.mestreMatricula);
				
				return new br.com.forgefit.dominio.guilda.Guilda(
					guildaId,
					jpa.nome,
					jpa.descricao,
					jpa.imagemURL,
					codigoConvite,
					mestreMatricula
				);
			})
			.toList();
	}

	@Override
	public java.util.Optional<br.com.forgefit.dominio.guilda.Guilda> buscarPorCodigoConvite(br.com.forgefit.dominio.guilda.CodigoConvite codigo) {
		GuildaJpa guildaJpa = repositorio.findByCodigoConvite(codigo.getValor());
		return java.util.Optional.ofNullable(guildaJpa)
			.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.guilda.Guilda.class));
	}

	@Override
	public java.util.Optional<br.com.forgefit.dominio.guilda.Guilda> buscarPorNome(String nome) {
		GuildaJpa guildaJpa = repositorio.findByNome(nome);
		return java.util.Optional.ofNullable(guildaJpa)
			.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.guilda.Guilda.class));
	}

	// Métodos do GuildaRepositorioAplicacao
	@Override
	public List<GuildaResumo> listarGuildasAtivasOrdenadas() {
		return repositorio.listarGuildasAtivasOrdenadas();
	}

	@Override
	public GuildaResumo buscarResumoPorNome(String nome) {
		return repositorio.buscarPorNome(nome);
	}
	
	@Override
	public java.util.Optional<br.com.forgefit.aplicacao.guilda.GuildaDetalhesResumo> buscarDetalhesPorId(Integer guildaId) {
		return repositorio.findById(guildaId)
			.map(guilda -> new br.com.forgefit.aplicacao.guilda.GuildaDetalhesResumo() {
				@Override
				public Integer getId() { return guilda.id; }
				
				@Override
				public String getNome() { return guilda.nome; }
				
				@Override
				public String getDescricao() { return guilda.descricao; }
				
				@Override
				public String getImagemUrl() { return guilda.imagemURL; }
				
				@Override
				public String getCodigoConvite() { return guilda.codigoConvite; }
				
				@Override
				public String getMestreMatricula() { return guilda.mestreMatricula; }
				
				@Override
				public Integer getPontuacaoTotal() { return guilda.pontuacaoTotal; }
				
				@Override
				public java.util.List<br.com.forgefit.aplicacao.guilda.MembroResumo> getMembros() {
					return java.util.Collections.emptyList(); // TODO: Implementar busca de membros
				}
			});
	}
	
	@Override
	public java.util.List<br.com.forgefit.aplicacao.guilda.MembroResumo> buscarMembrosPorGuildaId(Integer guildaId) {
		// TODO: Implementar busca de membros com join em ALUNO para pegar nome, avatar, pontuação
		return java.util.Collections.emptyList();
	}
	
	@Override
	public java.util.List<br.com.forgefit.aplicacao.guilda.CheckinResumo> buscarCheckinsPorGuildaId(Integer guildaId) {
		// TODO: Implementar busca de checkins com joins em ALUNO e contexto
		return java.util.Collections.emptyList();
	}
	
	@Override
	public java.util.Optional<Integer> buscarIdGuildaPorMatriculaMestre(String matricula) {
		return repositorio.findByMestreMatricula(matricula)
			.map(guilda -> guilda.id);
	}
}
