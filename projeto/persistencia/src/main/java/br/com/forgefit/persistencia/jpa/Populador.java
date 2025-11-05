package br.com.forgefit.persistencia.jpa;

import static java.util.Arrays.asList;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import br.com.forgefit.persistencia.jpa.aluno.Aluno;
import br.com.forgefit.persistencia.jpa.aluno.AlunoRepositorioJpa;
import br.com.forgefit.persistencia.jpa.aluno.AvaliacaoFisica;
import br.com.forgefit.persistencia.jpa.aula.Aula;
import br.com.forgefit.persistencia.jpa.aula.AulaRepositorioJpa;
import br.com.forgefit.persistencia.jpa.aula.Recorrencia;
import br.com.forgefit.persistencia.jpa.aula.Reserva;
import br.com.forgefit.persistencia.jpa.enums.DiaDaSemana;
import br.com.forgefit.persistencia.jpa.enums.Espaco;
import br.com.forgefit.persistencia.jpa.enums.Modalidade;
import br.com.forgefit.persistencia.jpa.enums.StatusReserva;
import br.com.forgefit.persistencia.jpa.enums.TipoRecorrencia;
import br.com.forgefit.persistencia.jpa.guilda.Guilda;
import br.com.forgefit.persistencia.jpa.guilda.GuildaRepositorioJpa;
import br.com.forgefit.persistencia.jpa.professor.Professor;
import br.com.forgefit.persistencia.jpa.professor.ProfessorRepositorio;

@Component
public class Populador {
	
	@Autowired
	private ProfessorRepositorio professorRepositorio;
	
	@Autowired
	private AlunoRepositorioJpa alunoRepositorio;
	
	@Autowired
	private AulaRepositorioJpa aulaRepositorio;
	
	@Autowired
	private GuildaRepositorioJpa guildaRepositorio;

	@SuppressWarnings("deprecation")
	public void popular() {
		Professor professorJoao = new Professor();
		professorJoao.setCpf("05144786405");
		professorJoao.setNome("João Silva");
		professorJoao.setDataNascimento(new Date(85, 5, 15));
		professorRepositorio.save(professorJoao);
		System.out.println("Professor criado: " + professorJoao.getNome() + " - ID: " + professorJoao.getId());
		
		Professor professoraMaria = new Professor();
		professoraMaria.setCpf("03972009437");
		professoraMaria.setNome("Maria Santos");
		professoraMaria.setDataNascimento(new Date(90, 2, 20));
		professorRepositorio.save(professoraMaria);
		System.out.println("Professor criado: " + professoraMaria.getNome() + " - ID: " + professoraMaria.getId());
		
		Aluno alunoPedro = new Aluno();
		alunoPedro.setMatricula("ALU001");
		alunoPedro.setCpf("85571506440");
		alunoPedro.setNome("Pedro Oliveira");
		alunoPedro.setDataNascimento(new Date(95, 8, 10));
		alunoPedro.setCreditos(100.0);
		alunoPedro.setPontuacaoTotal(50);
		alunoRepositorio.save(alunoPedro);
		System.out.println("Aluno criado: " + alunoPedro.getNome() + " - Matrícula: " + alunoPedro.getMatricula());
		
		Aluno alunaAna = new Aluno();
		alunaAna.setMatricula("ALU002");
		alunaAna.setCpf("22173582437");
		alunaAna.setNome("Ana Costa");
		alunaAna.setDataNascimento(new Date(98, 11, 5));
		alunaAna.setCreditos(150.0);
		alunaAna.setPontuacaoTotal(120);
		alunoRepositorio.save(alunaAna);
		System.out.println("Aluno criado: " + alunaAna.getNome() + " - Matrícula: " + alunaAna.getMatricula());
		
		AvaliacaoFisica avaliacaoPedro = new AvaliacaoFisica();
		avaliacaoPedro.setAluno(alunoPedro);
		avaliacaoPedro.setDataAvaliacao(new Date());
		avaliacaoPedro.setProfessorResponsavelId(professorJoao.getId());
		avaliacaoPedro.setIndiceDeMassaCorporal(24.5);
		avaliacaoPedro.setMassaGordaPercentual(18.0);
		avaliacaoPedro.setMassaMagraKg(65.0);
		alunoPedro.getHistoricoDeAvaliacoes().add(avaliacaoPedro);
		alunoRepositorio.save(alunoPedro);
		System.out.println("Avaliação física criada para: " + alunoPedro.getNome());
		
		Aula aulaYoga = new Aula();
		aulaYoga.setProfessorId(professoraMaria.getId());
		aulaYoga.setModalidade(Modalidade.YOGA);
		aulaYoga.setEspaco(Espaco.SALA01_MULTIUSO);
		aulaYoga.setCapacidade(15);
		aulaYoga.setInicio(new Date(125, 0, 20, 10, 0));
		aulaYoga.setFim(new Date(125, 0, 20, 11, 0));
		
		Recorrencia recorrencia = new Recorrencia();
		recorrencia.setTipo(TipoRecorrencia.SEMANAL);
		recorrencia.setDiasDaSemana(asList(DiaDaSemana.SEGUNDA, DiaDaSemana.QUARTA, DiaDaSemana.SEXTA));
		recorrencia.setDataFimRecorrencia(new Date(125, 5, 30));
		aulaYoga.setRecorrencia(recorrencia);
		
		aulaRepositorio.save(aulaYoga);
		System.out.println("Aula criada: " + aulaYoga.getModalidade() + " - ID: " + aulaYoga.getId());
		
		Reserva reservaPedro = new Reserva();
		reservaPedro.setAula(aulaYoga);
		reservaPedro.setAlunoMatricula(alunoPedro.getMatricula());
		reservaPedro.setDataReserva(new Date());
		reservaPedro.setStatus(StatusReserva.CONFIRMADA);
		aulaYoga.getReservas().add(reservaPedro);
		aulaRepositorio.save(aulaYoga);
		System.out.println("Reserva criada para: " + alunoPedro.getNome() + " na aula de " + aulaYoga.getModalidade());
		
		Aula aulaMusculacao = new Aula();
		aulaMusculacao.setProfessorId(professorJoao.getId());
		aulaMusculacao.setModalidade(Modalidade.MUSCULACAO);
		aulaMusculacao.setEspaco(Espaco.AREA_DE_PESO_LIVRE);
		aulaMusculacao.setCapacidade(20);
		aulaMusculacao.setInicio(new Date(125, 0, 21, 14, 0));
		aulaMusculacao.setFim(new Date(125, 0, 21, 15, 30));
		aulaRepositorio.save(aulaMusculacao);
		System.out.println("Aula criada: " + aulaMusculacao.getModalidade() + " - ID: " + aulaMusculacao.getId());
		
		Guilda guildaGuerreiros = new Guilda();
		guildaGuerreiros.setNome("Guerreiros do Fitness");
		guildaGuerreiros.setDescricao("Guilda para atletas dedicados");
		guildaGuerreiros.setImagemURL("https://example.com/guerreiros.png");
		guildaGuerreiros.setCodigoConvite("GUERR2025");
		guildaGuerreiros.setMestreMatricula(alunoPedro.getMatricula());
		guildaGuerreiros.getMembrosMatriculas().add(alunoPedro.getMatricula());
		guildaGuerreiros.getMembrosMatriculas().add(alunaAna.getMatricula());
		guildaGuerreiros.setPontuacaoTotal(170);
		guildaRepositorio.save(guildaGuerreiros);
		System.out.println("Guilda criada: " + guildaGuerreiros.getNome() + " - ID: " + guildaGuerreiros.getId());
		
		alunoPedro.setGuildaId(guildaGuerreiros.getId());
		alunaAna.setGuildaId(guildaGuerreiros.getId());
		alunoRepositorio.save(alunoPedro);
		alunoRepositorio.save(alunaAna);
		System.out.println("Alunos associados à guilda: " + guildaGuerreiros.getNome());
	}

	@Transactional
	public void testar() {
		System.out.println("\n=== TESTES DE CONSULTA ===\n");
		
		java.util.List<Professor> professores = professorRepositorio.findAll();
		System.out.println("Total de professores: " + professores.size());
		for (Professor prof : professores) {
			System.out.println("- " + prof.getNome() + " (CPF: " + prof.getCpf() + ")");
		}
		
		java.util.List<Aluno> alunos = alunoRepositorio.findAll();
		System.out.println("\nTotal de alunos: " + alunos.size());
		for (Aluno aluno : alunos) {
			System.out.println("- " + aluno.getNome() + " | Créditos: " + aluno.getCreditos() + 
					" | Pontuação: " + aluno.getPontuacaoTotal());
			if (!aluno.getHistoricoDeAvaliacoes().isEmpty()) {
				System.out.println("  Avaliações físicas: " + aluno.getHistoricoDeAvaliacoes().size());
			}
		}
		
		java.util.List<Aula> aulas = aulaRepositorio.findAll();
		System.out.println("\nTotal de aulas: " + aulas.size());
		for (Aula aula : aulas) {
			System.out.println("- " + aula.getModalidade() + " no " + aula.getEspaco() + 
					" | Capacidade: " + aula.getCapacidade() + " | Reservas: " + aula.getReservas().size());
		}
		
		java.util.List<Guilda> guildas = guildaRepositorio.findAll();
		System.out.println("\nTotal de guildas: " + guildas.size());
		for (Guilda guilda : guildas) {
			System.out.println("- " + guilda.getNome() + " | Membros: " + guilda.getMembrosMatriculas().size() + 
					" | Pontuação: " + guilda.getPontuacaoTotal());
		}
		
		System.out.println("\n=== FIM DOS TESTES ===");
	}
}
