package br.com.forgefit.dominio.avaliacao;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.time.LocalDate;
import java.time.LocalDateTime;

import br.com.forgefit.dominio.AcademiaFuncionalidade;
import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aula.Aula;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.aula.enums.Espaco;
import br.com.forgefit.dominio.aula.enums.Modalidade;
import br.com.forgefit.dominio.professor.ProfessorId;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AvaliacaoProfessorFuncionalidade {

    private final AcademiaFuncionalidade contexto;
    private ProfessorId professorId;
    private String mensagemSistema;
    private Notas notas;

    public AvaliacaoProfessorFuncionalidade(AcademiaFuncionalidade contexto) {
        this.contexto = contexto;
    }

    @Given("que um aluno teve aula com o professorId {string}")
    public void que_um_aluno_teve_aula_com_o_professor_id(String professorIdStr) {
        // Configura o aluno atual para o teste
        Matricula matriculaAluno = new Matricula("20231001");
        Cpf cpfAluno = new Cpf("12345678900");
        contexto.alunoAtual = new Aluno(matriculaAluno, cpfAluno, "Aluno Teste", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(contexto.alunoAtual);

        // Configura o professor para o teste
        int id = Integer.parseInt(professorIdStr);
        professorId = new ProfessorId(id);

        // Configura uma aula de teste
        AulaId aulaId = new AulaId(1);
        LocalDateTime agora = LocalDateTime.now();
        contexto.aulaAtual = new Aula(aulaId, professorId, Modalidade.YOGA, Espaco.SALA01_MULTIUSO, 10, agora, agora.plusHours(1));
        contexto.repositorio.salvar(contexto.aulaAtual);
    }

    @When("o aluno preenche as métricas de didática com {string} estrelas, atenção com {string} estrelas e pontualidade com {string} estrela")
    public void o_aluno_preenche_as_metricas(String didatica, String atencao, String pontualidade) {
        notas = new Notas(
            Integer.parseInt(pontualidade),
            Integer.parseInt(didatica),
            Integer.parseInt(atencao)
        );

        mensagemSistema = contexto.avaliacaoService.criarAvaliacaoComMensagem(
            contexto.alunoAtual.getMatricula(),
            professorId,
            contexto.aulaAtual.getId(),
            LocalDate.now(),
            notas,
            null
        );
        
        // VALIDAÇÃO DE REPOSITÓRIO - confirma que foi persistida com os atributos corretos
        if (mensagemSistema.equals("A avaliação foi registrada com sucesso")) {
            var avaliacoes = contexto.repositorio.buscarPorProfessor(professorId);
            assertEquals(false, avaliacoes.isEmpty(), "A avaliação deveria ter sido persistida");
            
            Avaliacao avaliacaoSalva = avaliacoes.get(0);
            assertEquals(professorId, avaliacaoSalva.getProfessorId(),
                    "O professorId deveria ter sido salvo corretamente");
            assertEquals(contexto.alunoAtual.getMatricula(), avaliacaoSalva.getAlunoMatricula(),
                    "A matrícula do aluno deveria ter sido salva corretamente");
            assertEquals(notas.getPontualidade(), avaliacaoSalva.getNotas().getPontualidade(),
                    "A nota de pontualidade deveria ter sido salva corretamente");
            assertEquals(notas.getDidatica(), avaliacaoSalva.getNotas().getDidatica(),
                    "A nota de didática deveria ter sido salva corretamente");
            assertEquals(notas.getAtencao(), avaliacaoSalva.getNotas().getAtencao(),
                    "A nota de atenção deveria ter sido salva corretamente");
        }
    }

    @When("o aluno não preenche todas as métricas obrigatórias")
    public void o_aluno_nao_preenche_todas_as_metricas() {
        notas = new Notas(0, 0, 0); // Métricas não preenchidas
        
        mensagemSistema = contexto.avaliacaoService.criarAvaliacaoComMensagem(
            contexto.alunoAtual.getMatricula(),
            professorId,
            contexto.aulaAtual.getId(),
            LocalDate.now(),
            notas,
            null
        );
    }

    @When("o aluno não insere comentário")
    public void o_aluno_não_insere_comentário() {
        // Não faz nada, pois o comentário é opcional e null por padrão
    }

    @When("o aluno insere um comentário falando {string} junto com as métricas")
    public void o_aluno_insere_um_comentario(String comentario) {
        notas = new Notas(5, 5, 5);

        mensagemSistema = contexto.avaliacaoService.criarAvaliacaoComMensagem(
            contexto.alunoAtual.getMatricula(),
            professorId,
            contexto.aulaAtual.getId(),
            LocalDate.now(),
            notas,
            comentario
        );
    }

    @Then("o comentário {string} é armazenado com sucesso")
    public void o_comentario_e_armazenado_com_sucesso(String comentarioEsperado) {
        // VALIDAÇÃO DE REPOSITÓRIO - busca avaliações persistidas
        var avaliacoes = contexto.repositorio.buscarPorProfessor(professorId);
        assertNotNull(avaliacoes, "A lista de avaliações não pode ser nula");
        assertEquals(false, avaliacoes.isEmpty(), "Deve existir pelo menos uma avaliação");
        
        Avaliacao avaliacaoSalva = avaliacoes.get(0);
        assertNotNull(avaliacaoSalva, "A avaliação salva não pode ser nula");
        
        // VALIDAÇÃO DE ATRIBUTOS - valida todos os atributos críticos
        assertEquals(comentarioEsperado, avaliacaoSalva.getComentario(),
                "O comentário deveria ter sido salvo corretamente");
        assertEquals(professorId, avaliacaoSalva.getProfessorId(),
                "O professorId deveria ter sido salvo corretamente");
        assertEquals(contexto.alunoAtual.getMatricula(), avaliacaoSalva.getAlunoMatricula(),
                "A matrícula do aluno deveria ter sido salva corretamente");
        assertNotNull(avaliacaoSalva.getNotas(), "As notas deveriam ter sido salvas");
        assertEquals(5, avaliacaoSalva.getNotas().getPontualidade(),
                "A nota de pontualidade deveria ser 5");
        assertEquals(5, avaliacaoSalva.getNotas().getDidatica(),
                "A nota de didática deveria ser 5");
        assertEquals(5, avaliacaoSalva.getNotas().getAtencao(),
                "A nota de atenção deveria ser 5");
    }

    @Then("o sistema em relação a avaliação do professor informa {string}")
    public void o_sistema_informa_para_avaliacao_professor(String mensagemEsperada) {
        assertEquals(mensagemEsperada, mensagemSistema);
    }

    @Then("a avaliação é registrada apenas com as métricas e informa {string}")
    public void a_avaliacao_e_registrada_apenas_com_as_metricas(String mensagemEsperada) {
        assertEquals(mensagemEsperada, mensagemSistema);

        // VALIDAÇÃO DE REPOSITÓRIO - busca avaliações persistidas
        var avaliacoes = contexto.repositorio.buscarPorProfessor(professorId);
        assertNotNull(avaliacoes, "A lista de avaliações não pode ser nula");
        assertEquals(false, avaliacoes.isEmpty(), "Deve existir pelo menos uma avaliação");
        
        Avaliacao avaliacaoSalva = avaliacoes.get(0);
        assertNotNull(avaliacaoSalva, "A avaliação salva não pode ser nula");
        
        // VALIDAÇÃO DE ATRIBUTOS - valida todos os atributos críticos
        assertNotNull(avaliacaoSalva.getNotas(), "As notas deveriam ter sido salvas");
        assertEquals(professorId, avaliacaoSalva.getProfessorId(),
                "O professorId deveria ter sido salvo corretamente");
        assertEquals(contexto.alunoAtual.getMatricula(), avaliacaoSalva.getAlunoMatricula(),
                "A matrícula do aluno deveria ter sido salva corretamente");
        assertEquals(contexto.aulaAtual.getId(), avaliacaoSalva.getAulaId(),
                "O ID da aula deveria ter sido salvo corretamente");
        
        // Valida as notas individuais salvas
        assertEquals(notas.getPontualidade(), avaliacaoSalva.getNotas().getPontualidade(),
                "A nota de pontualidade deveria ter sido salva corretamente");
        assertEquals(notas.getDidatica(), avaliacaoSalva.getNotas().getDidatica(),
                "A nota de didática deveria ter sido salva corretamente");
        assertEquals(notas.getAtencao(), avaliacaoSalva.getNotas().getAtencao(),
                "A nota de atenção deveria ter sido salva corretamente");
    }
}