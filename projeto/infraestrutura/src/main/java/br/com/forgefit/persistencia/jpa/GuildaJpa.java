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
	@org.springframework.data.jpa.repository.Query("SELECT g FROM GuildaJpa g WHERE g.codigoConvite = :codigoConvite AND g.status = br.com.forgefit.persistencia.jpa.enums.StatusGuilda.ATIVA")
	GuildaJpa findByCodigoConvite(@org.springframework.data.repository.query.Param("codigoConvite") String codigoConvite);

	@org.springframework.data.jpa.repository.Query("SELECT g FROM GuildaJpa g WHERE g.nome = :nome AND g.status = br.com.forgefit.persistencia.jpa.enums.StatusGuilda.ATIVA")
	GuildaJpa findByNome(@org.springframework.data.repository.query.Param("nome") String nome);

	List<GuildaJpa> findByStatus(StatusGuilda status);

	@Query("""
		SELECT g.id as id,
			   g.nome as nome,
			   g.descricao as descricao,
			   g.imagemURL as imagemURL,
			   COALESCE(SUM(i.pontuacaoTotal), 0) as pontuacaoTotal,
			   (SELECT COUNT(m) FROM GuildaMembro m WHERE m.id.guildaId = g.id) as numeroMembros
		FROM GuildaJpa g
		LEFT JOIN GuildaMembro gm ON gm.id.guildaId = g.id
		LEFT JOIN Aluno a ON a.matricula = gm.id.alunoMatricula
		LEFT JOIN ItemRanking i ON i.alunoMatricula = a.matricula 
			AND i.ranking.periodo = br.com.forgefit.persistencia.jpa.enums.PeriodoRanking.GERAL
		WHERE g.status = 'ATIVA'
		GROUP BY g.id, g.nome, g.descricao, g.imagemURL
		ORDER BY pontuacaoTotal DESC, g.nome ASC
		""")
	List<GuildaResumo> listarGuildasAtivasOrdenadas();

	@Query("""
		SELECT g.id as id,
			   g.nome as nome,
			   g.descricao as descricao,
			   g.imagemURL as imagemURL,
			   COALESCE(SUM(i.pontuacaoTotal), 0) as pontuacaoTotal,
			   (SELECT COUNT(m) FROM GuildaMembro m WHERE m.id.guildaId = g.id) as numeroMembros
		FROM GuildaJpa g
		LEFT JOIN GuildaMembro gm ON gm.id.guildaId = g.id
		LEFT JOIN Aluno a ON a.matricula = gm.id.alunoMatricula
		LEFT JOIN ItemRanking i ON i.alunoMatricula = a.matricula 
			AND i.ranking.periodo = br.com.forgefit.persistencia.jpa.enums.PeriodoRanking.GERAL
		WHERE g.nome = :nome
		  AND g.status = 'ATIVA'
		GROUP BY g.id, g.nome, g.descricao, g.imagemURL
		""")
	GuildaResumo buscarPorNome(@Param("nome") String nome);
	
	java.util.Optional<GuildaJpa> findByMestreMatricula(String mestreMatricula);
	
	@org.springframework.data.jpa.repository.Query(value = """
		SELECT COALESCE(SUM(i.pontuacao_total), 0) as pontuacaoTotal
		FROM guilda_membros gm
		JOIN aluno a ON a.matricula = gm.aluno_matricula
		LEFT JOIN ranking r ON r.periodo = 'GERAL'
		LEFT JOIN item_ranking i ON i.aluno_matricula = a.matricula 
			AND i.ranking_id = r.id
		WHERE gm.guilda_id = :guildaId
		""", nativeQuery = true)
	Integer calcularPontuacaoTotalPorGuildaId(@org.springframework.data.repository.query.Param("guildaId") Integer guildaId);
	
	@org.springframework.data.jpa.repository.Query(value = """
		SELECT 
			a.matricula as matricula,
			a.nome as nome,
			u.avatar as avatarUrl,
			COALESCE(i.pontuacao_total, 0) as pontuacao,
			gm.data_entrada as dataEntrada
		FROM guilda_membros gm
		JOIN aluno a ON a.matricula = gm.aluno_matricula
		JOIN guilda g ON g.id = gm.guilda_id
		LEFT JOIN usuarios_mock u ON CAST(u.id AS VARCHAR) = a.user_id AND u.role = 'student'
		LEFT JOIN ranking r ON r.periodo = 'GERAL'
		LEFT JOIN item_ranking i ON i.aluno_matricula = a.matricula 
			AND i.ranking_id = r.id
		WHERE gm.guilda_id = :guildaId
		  AND g.status = 'ATIVA'
		ORDER BY COALESCE(i.pontuacao_total, 0) DESC, gm.data_entrada ASC
		""", nativeQuery = true)
	java.util.List<br.com.forgefit.aplicacao.guilda.MembroResumo> buscarMembrosPorGuildaId(@org.springframework.data.repository.query.Param("guildaId") Integer guildaId);
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
	
	@org.springframework.beans.factory.annotation.Autowired
	br.com.forgefit.persistencia.jpa.AlunoJpaRepository alunoRepository;

	// Métodos do GuildaRepositorio (domínio)
	@Override
	public void salvar(br.com.forgefit.dominio.guilda.Guilda guilda) {
		GuildaJpa guildaJpa = mapeador.map(guilda, GuildaJpa.class);
		
		// Verifica se é UPDATE ou INSERT
		// Se o mestre já é membro da guilda, é UPDATE (edição)
		// Caso contrário, é INSERT (criação)
		br.com.forgefit.persistencia.jpa.GuildaMembroId membroId = 
			new br.com.forgefit.persistencia.jpa.GuildaMembroId(
				guilda.getId().getId(), 
				guilda.getMestreDaGuilda().getValor()
			);
		
		boolean isUpdate = guilda.getId().getId() > 0 && guildaMembroRepository.existsById(membroId);
		
		if (isUpdate) {
			// É uma edição - mantém o ID existente e usa save()
			repositorio.save(guildaJpa);
			
			// Se a guilda foi inativada, remover todos os membros e atualizar GUILDA_ID dos alunos
			if (guilda.getStatus() == br.com.forgefit.dominio.guilda.enums.StatusGuilda.INATIVA) {
				// Buscar todos os membros da guilda
				java.util.List<br.com.forgefit.persistencia.jpa.GuildaMembro> membrosParaRemover = 
					guildaMembroRepository.findAll().stream()
						.filter(m -> m.getId().getGuildaId().equals(guilda.getId().getId()))
						.collect(java.util.stream.Collectors.toList());
				
				// Remover todos os membros da tabela GUILDA_MEMBROS
				for (br.com.forgefit.persistencia.jpa.GuildaMembro membro : membrosParaRemover) {
					guildaMembroRepository.deleteById(membro.getId());
				}
				
				// Atualizar GUILDA_ID de todos os alunos dessa guilda para NULL
				// Buscar todos os alunos com essa guilda e atualizar
				java.util.List<br.com.forgefit.persistencia.jpa.Aluno> alunosComGuilda = 
					alunoRepository.findAll().stream()
						.filter(a -> a.getGuildaId() != null && a.getGuildaId().equals(guilda.getId().getId()))
						.collect(java.util.stream.Collectors.toList());
				
				for (br.com.forgefit.persistencia.jpa.Aluno aluno : alunosComGuilda) {
					aluno.setGuildaId(null);
					alunoRepository.save(aluno);
				}
			} else {
				// Sincronizar membros: buscar membros atuais no banco e comparar com o domínio
				java.util.Set<String> membrosAtuais = guildaMembroRepository.findAll().stream()
					.filter(m -> m.getId().getGuildaId().equals(guilda.getId().getId()))
					.map(m -> m.getId().getAlunoMatricula())
					.collect(java.util.stream.Collectors.toSet());
				
				java.util.Set<String> membrosDominio = guilda.getMembros().stream()
					.map(m -> m.getValor())
					.collect(java.util.stream.Collectors.toSet());
				
				// Adicionar novos membros
				for (br.com.forgefit.dominio.aluno.Matricula matricula : guilda.getMembros()) {
					if (!membrosAtuais.contains(matricula.getValor())) {
						br.com.forgefit.persistencia.jpa.GuildaMembro novoMembro = new br.com.forgefit.persistencia.jpa.GuildaMembro();
						novoMembro.setId(new br.com.forgefit.persistencia.jpa.GuildaMembroId(guilda.getId().getId(), matricula.getValor()));
						novoMembro.setDataEntrada(new java.util.Date());
						guildaMembroRepository.save(novoMembro);
					}
				}
				
				// Remover membros que não estão mais no domínio (exceto o mestre)
				for (String matricula : membrosAtuais) {
					if (!membrosDominio.contains(matricula) && !matricula.equals(guilda.getMestreDaGuilda().getValor())) {
						br.com.forgefit.persistencia.jpa.GuildaMembroId idParaRemover = 
							new br.com.forgefit.persistencia.jpa.GuildaMembroId(guilda.getId().getId(), matricula);
						guildaMembroRepository.deleteById(idParaRemover);
					}
				}
			}
		} else {
			// É uma criação - força ID=0 para INSERT com auto-increment
			guildaJpa.id = 0;
			GuildaJpa saved = repositorio.save(guildaJpa);
			
			// Adiciona o mestre como membro da guilda
			br.com.forgefit.persistencia.jpa.GuildaMembro mestre = new br.com.forgefit.persistencia.jpa.GuildaMembro();
			mestre.setId(new br.com.forgefit.persistencia.jpa.GuildaMembroId(saved.id, guilda.getMestreDaGuilda().getValor()));
			mestre.setDataEntrada(new java.util.Date());
			guildaMembroRepository.save(mestre);
			
			// Adiciona outros membros se houver (normalmente só o mestre na criação)
			for (br.com.forgefit.dominio.aluno.Matricula matricula : guilda.getMembros()) {
				if (!matricula.equals(guilda.getMestreDaGuilda())) {
					br.com.forgefit.persistencia.jpa.GuildaMembro novoMembro = new br.com.forgefit.persistencia.jpa.GuildaMembro();
					novoMembro.setId(new br.com.forgefit.persistencia.jpa.GuildaMembroId(saved.id, matricula.getValor()));
					novoMembro.setDataEntrada(new java.util.Date());
					guildaMembroRepository.save(novoMembro);
				}
			}
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
				
				// Carregar membros do banco e adicionar à guilda (exceto o mestre que já está)
				java.util.List<br.com.forgefit.persistencia.jpa.GuildaMembro> membrosJpa = guildaMembroRepository.findAll().stream()
					.filter(m -> m.getId().getGuildaId().equals(jpa.id))
					.toList();
				
				for (br.com.forgefit.persistencia.jpa.GuildaMembro membroJpa : membrosJpa) {
					br.com.forgefit.dominio.aluno.Matricula matricula = 
						new br.com.forgefit.dominio.aluno.Matricula(membroJpa.getId().getAlunoMatricula());
					// O mestre já está na lista, então só adicionamos se não for o mestre
					if (!matricula.equals(mestreMatricula) && !guilda.isMembro(matricula)) {
						try {
							guilda.adicionarMembro(matricula);
						} catch (IllegalArgumentException e) {
							// Já é membro, ignorar
						}
					}
				}
				
				// Restaurar pontuação do banco usando reflexão (já que não há método público)
				if (jpa.pontuacaoTotal != null && jpa.pontuacaoTotal > 0) {
					try {
						java.lang.reflect.Field pontuacaoField = br.com.forgefit.dominio.guilda.Guilda.class.getDeclaredField("pontuacaoTotal");
						pontuacaoField.setAccessible(true);
						pontuacaoField.setInt(guilda, jpa.pontuacaoTotal);
					} catch (Exception e) {
						// Se falhar, a pontuação ficará em 0 e será atualizada pelos check-ins
						System.err.println("Erro ao restaurar pontuação da guilda: " + e.getMessage());
					}
				}
				
				// Atualizar status se necessário
				if (jpa.status != null && jpa.status == br.com.forgefit.persistencia.jpa.enums.StatusGuilda.INATIVA) {
					try {
						java.lang.reflect.Field statusField = br.com.forgefit.dominio.guilda.Guilda.class.getDeclaredField("status");
						statusField.setAccessible(true);
						statusField.set(guilda, br.com.forgefit.dominio.guilda.enums.StatusGuilda.INATIVA);
					} catch (Exception e) {
						// Se falhar, tentar usar o método excluir
						try {
							guilda.excluir(mestreMatricula);
						} catch (IllegalStateException ex) {
							// Já está inativa, ignorar
						}
					}
				}
				
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
		if (guildaJpa == null) {
			return java.util.Optional.empty();
		}
		
		// Usar o mesmo padrão de obterPorId para carregar membros corretamente
		return obterPorId(new br.com.forgefit.dominio.guilda.GuildaId(guildaJpa.id));
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
			.map(guilda -> new GuildaDetalhesResumoProxy(guilda, repositorio, guildaId));
	}
	
	@Override
	public java.util.List<br.com.forgefit.aplicacao.guilda.MembroResumo> buscarMembrosPorGuildaId(Integer guildaId) {
		return repositorio.buscarMembrosPorGuildaId(guildaId);
	}
	
	@Override
	public java.util.List<br.com.forgefit.aplicacao.guilda.CheckinResumo> buscarCheckinsPorGuildaId(Integer guildaId) {
		return checkinRepository.buscarCheckinsPorGuildaId(guildaId);
	}
	
	@Override
	public java.util.Optional<Integer> buscarIdGuildaPorMatriculaMestre(String matricula) {
		return repositorio.findByMestreMatricula(matricula)
			.map(guilda -> guilda.id);
	}
}
