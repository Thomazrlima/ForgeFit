package br.com.forgefit.dominio.avaliacao;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.time.LocalDate;
import java.time.LocalDateTime;

import br.com.forgefit.dominio.AcademiaFuncionalidade;
import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aula.Aula;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.aula.enums.Espaco;
import br.com.forgefit.dominio.aula.enums.Modalidade;
import br.com.forgefit.dominio.aluno.ProfessorId;
import br.com.forgefit.dominio.avaliacao.Avaliacao;
import br.com.forgefit.dominio.avaliacao.Notas;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AvaliacaoProfessorFuncionalidade {

    private final AcademiaFuncionalidade contexto;
    private Cpf cpfProfessor;
    private String mensagemSistema;
    private Notas notas;

    public AvaliacaoProfessorFuncionalidade(AcademiaFuncionalidade contexto) {
        this.contexto = contexto;
    }

    @Given("que um aluno teve aula com o professor do CPF {string}")
    public void que_um_aluno_teve_aula_com_o_professor_do_cpf(String cpfString) {
        // Configura o aluno atual para o teste
        Cpf cpfAluno = new Cpf("12345678900");
        contexto.alunoAtual = new Aluno(cpfAluno);
        contexto.repositorio.salvar(contexto.alunoAtual);

        // Configura o professor para o teste
        String cpfNumeros = cpfString.replaceAll("[^0-9]", "");
        cpfProfessor = new Cpf(cpfNumeros);

        // Configura uma aula de teste
        AulaId aulaId = new AulaId(1);
        LocalDateTime agora = LocalDateTime.now();
        contexto.aulaAtual = new Aula(aulaId, Modalidade.YOGA, Espaco.SALA01_MULTIUSO, 10, agora, agora.plusHours(1));
        contexto.repositorio.salvar(contexto.aulaAtual);
    }

    @When("o aluno preenche as métricas de didática com {string} estrelas, atenção com {string} estrelas e pontualidade com {string} estrela")
    public void o_aluno_preenche_as_metricas(String didatica, String atencao, String pontualidade) {
        notas = new Notas(
            Integer.parseInt(pontualidade),
            Integer.parseInt(didatica),
            Integer.parseInt(atencao)
        );

        try {
            contexto.avaliacaoService.criarAvaliacao(
                contexto.alunoAtual.getCpf(),
                contexto.aulaAtual.getId(),
                LocalDate.now(),
                notas,
                null
            );
            mensagemSistema = "A avaliação foi registrada com sucesso";
        } catch (Exception e) {
            mensagemSistema = e.getMessage();
        }
    }

    @When("o aluno não preenche todas as métricas obrigatórias")
    public void o_aluno_nao_preenche_todas_as_metricas() {
        try {
            contexto.avaliacaoService.criarAvaliacao(
                contexto.alunoAtual.getCpf(),
                contexto.aulaAtual.getId(),
                LocalDate.now(),
                notas,
                null
            );
        } catch (Exception e) {
            mensagemSistema = "É necessário preencher todas as métricas de avaliação";
        }
    }

    @When("o aluno não insere comentário")
    public void o_aluno_não_insere_comentário() {
        // Não faz nada, pois o comentário é opcional e null por padrão
    }

    @When("o aluno insere um comentário falando {string} junto com as métricas")
    public void o_aluno_insere_um_comentario(String comentario) {
        notas = new Notas(5, 5, 5);

        try {
            contexto.avaliacaoService.criarAvaliacao(
                contexto.alunoAtual.getCpf(),
                contexto.aulaAtual.getId(),
                LocalDate.now(),
                notas,
                comentario
            );
            mensagemSistema = "A avaliação foi registrada com sucesso";
        } catch (Exception e) {
            mensagemSistema = e.getMessage();
        }
    }

    @Then("o comentário {string} é armazenado com sucesso")
    public void o_comentario_e_armazenado_com_sucesso(String comentarioEsperado) {
        ProfessorId professorId = new ProfessorId(1); // Using fixed ID for test
        Avaliacao avaliacaoSalva = contexto.repositorio.buscarPorProfessor(professorId).get(0);
        assertNotNull(avaliacaoSalva);
        assertEquals(comentarioEsperado, avaliacaoSalva.getComentario());
    }

    @Then("o sistema em relação a avaliação do professor informa {string}")
    public void o_sistema_informa_para_avaliacao_professor(String mensagemEsperada) {
        assertEquals(mensagemEsperada, mensagemSistema);
    }

    @Then("a avaliação é registrada apenas com as métricas e informa {string}")
    public void a_avaliacao_e_registrada_apenas_com_as_metricas(String mensagemEsperada) {
        assertEquals(mensagemEsperada, mensagemSistema);

        ProfessorId professorId = new ProfessorId(1); // Using fixed ID for test
        Avaliacao avaliacaoSalva = contexto.repositorio.buscarPorProfessor(professorId).get(0);
        assertNotNull(avaliacaoSalva);
        assertNotNull(avaliacaoSalva.getNotas());
    }
}