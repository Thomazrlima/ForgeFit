package br.com.forgefit.dominio.guilda;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;

import java.time.LocalDate;
import br.com.forgefit.dominio.AcademiaFuncionalidade;
import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.guilda.enums.StatusGuilda;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

/**
 * Step definitions para gestão de guildas.
 * Recebe o contexto compartilhado via injeção de dependência do Cucumber PicoContainer.
 */
public class GestaoGuildasFuncionalidade {
    
    private final AcademiaFuncionalidade contexto;
    
    private Cpf cpfAluno;
    private Cpf cpfAluno2;
    private Matricula matriculaAluno;
    private Matricula matriculaAluno2;
    private Guilda guildaCriada;
    private CodigoConvite codigoConvite;
    private String nomeGuilda;

    public GestaoGuildasFuncionalidade(AcademiaFuncionalidade contexto) {
        this.contexto = contexto;
    }

    @Given("um aluno está cadastrado com CPF {string}")
    public void um_aluno_está_cadastrado_com_cpf(String cpfString) {
        String cpfNumeros = cpfString.replaceAll("[^0-9]", "");
        cpfAluno = new Cpf(cpfNumeros);
        var aluno = new Aluno(cpfAluno, "João da Silva", LocalDate.of(1990, 1, 1));
        matriculaAluno = aluno.getMatricula();
        contexto.repositorio.salvar(aluno);
    }

    @When("o aluno cria uma nova guilda chamada {string}")
    public void o_aluno_cria_uma_nova_guilda_chamada(String nomeGuilda) {
        this.nomeGuilda = nomeGuilda;
        try {
            guildaCriada = contexto.guildaService.criarGuilda(nomeGuilda, "Descrição da guilda", null, matriculaAluno);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Then("a guilda {string} é criada com sucesso")
    public void a_guilda_é_criada_com_sucesso(String nomeGuilda) {
        assertNotNull(guildaCriada);
        assertEquals(nomeGuilda, guildaCriada.getNome());
        assertEquals(StatusGuilda.ATIVA, guildaCriada.getStatus());
        assertTrue(guildaCriada.isMestre(matriculaAluno));
        assertTrue(guildaCriada.isMembro(matriculaAluno));
    }

    @Given("já existe uma guilda chamada {string}")
    public void já_existe_uma_guilda_chamada(String nomeGuilda) {
        this.nomeGuilda = nomeGuilda;
        String cpfNumeros = "12345678900";
        cpfAluno = new Cpf(cpfNumeros);
        var aluno = new Aluno(cpfAluno, "Aluno Teste", LocalDate.of(1990, 1, 1));
        matriculaAluno = aluno.getMatricula();
        contexto.repositorio.salvar(aluno);
        
        guildaCriada = contexto.guildaService.criarGuilda(nomeGuilda, "Descrição", null, matriculaAluno);
    }

    @When("um aluno tenta criar outra guilda com o mesmo nome")
    public void um_aluno_tenta_criar_outra_guilda_com_o_mesmo_nome() {
        String cpfNumeros2 = "98765432100";
        cpfAluno2 = new Cpf(cpfNumeros2);
        var aluno2 = new Aluno(cpfAluno2, "Aluno 2", LocalDate.of(1990, 1, 1));
        matriculaAluno2 = aluno2.getMatricula();
        contexto.repositorio.salvar(aluno2);

        try {
            contexto.guildaService.criarGuilda(nomeGuilda, "Outra descrição", null, matriculaAluno2);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Given("o aluno com CPF {string} criou a guilda {string} com o código de convite {string}")
    public void o_aluno_com_cpf_criou_a_guilda_com_o_código_de_convite(String cpfString, String nomeGuilda, String codigoString) {
        String cpfNumeros = cpfString.replaceAll("[^0-9]", "");
        cpfAluno = new Cpf(cpfNumeros);
        var aluno = new Aluno(cpfAluno, "Aluno Teste", LocalDate.of(1990, 1, 1));
        matriculaAluno = aluno.getMatricula();
        contexto.repositorio.salvar(aluno);
        
        // Cria a guilda com o código de convite especificado
        codigoConvite = new CodigoConvite(codigoString);
        guildaCriada = contexto.guildaService.criarGuilda(nomeGuilda, "Descrição", null, codigoConvite, matriculaAluno);
    }

    @When("um aluno utiliza o código de convite {string} para entrar na guilda")
    public void um_aluno_utiliza_o_código_de_convite_para_entrar_na_guilda(String codigoString) {
        String cpfNumeros2 = "98765432100";
        cpfAluno2 = new Cpf(cpfNumeros2);
        var aluno2 = new Aluno(cpfAluno2, "Aluno 2", LocalDate.of(1990, 1, 1));
        matriculaAluno2 = aluno2.getMatricula();
        contexto.repositorio.salvar(aluno2);

        // Usa o código de convite especificado no feature
        CodigoConvite codigoDoFeature = new CodigoConvite(codigoString);
        try {
            contexto.guildaService.entrarEmGuilda(matriculaAluno2, codigoDoFeature);
            guildaCriada = contexto.guildaService.obter(guildaCriada.getId());
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Then("o aluno se torna membro da guilda")
    public void o_aluno_se_torna_membro_da_guilda() {
        assertTrue(guildaCriada.isMembro(matriculaAluno2));
    }

    @Given("não existe uma guilda com o código de convite {string}")
    public void não_existe_uma_guilda_com_o_código_de_convite(String codigo) {
        codigoConvite = new CodigoConvite(codigo);
    }

    @When("um aluno tenta entrar na guilda com o código de convite {string}")
    public void um_aluno_tenta_entrar_na_guilda_com_o_código_de_convite(String codigo) {
        String cpfNumeros = "12345678900";
        cpfAluno = new Cpf(cpfNumeros);
        var aluno = new Aluno(cpfAluno, "Aluno Teste", LocalDate.of(1990, 1, 1));
        matriculaAluno = aluno.getMatricula();
        contexto.repositorio.salvar(aluno);

        // Usa o código especificado no feature (que deve ser inválido neste cenário)
        CodigoConvite codigoInvalido = new CodigoConvite(codigo);
        try {
            contexto.guildaService.entrarEmGuilda(matriculaAluno, codigoInvalido);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Given("o aluno com CPF {string} é o mestre da guilda {string}")
    public void o_aluno_com_cpf_é_o_mestre_da_guilda(String cpfString, String nomeGuilda) {
        String cpfNumeros = cpfString.replaceAll("[^0-9]", "");
        cpfAluno = new Cpf(cpfNumeros);
        var aluno = new Aluno(cpfAluno, "Aluno Teste", LocalDate.of(1990, 1, 1));
        matriculaAluno = aluno.getMatricula();
        contexto.repositorio.salvar(aluno);
        
        guildaCriada = contexto.guildaService.criarGuilda(nomeGuilda, "Descrição inicial", null, matriculaAluno);
    }

    @When("o mestre altera a descrição da guilda para {string}")
    public void o_mestre_altera_a_descrição_da_guilda_para(String novaDescricao) {
        try {
            contexto.guildaService.alterarDadosGuilda(guildaCriada.getId(), matriculaAluno, null, novaDescricao, null);
            guildaCriada = contexto.guildaService.obter(guildaCriada.getId());
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Then("a descrição da guilda é atualizada com sucesso")
    public void a_descrição_da_guilda_é_atualizada_com_sucesso() {
        assertNotNull(guildaCriada.getDescricao());
        assertEquals("Guilda dos melhores amigos que treinam juntos", guildaCriada.getDescricao());
    }

    @Given("um aluno com CPF {string} é um membro da guilda {string} mas não é o mestre")
    public void um_aluno_com_cpf_é_um_membro_da_guilda_mas_não_é_o_mestre(String cpfString, String nomeGuilda) {
        // Cria o mestre
        String cpfMestre = "11111111111";
        Cpf cpfMestreObj = new Cpf(cpfMestre);
        var mestre = new Aluno(cpfMestreObj, "Mestre", LocalDate.of(1990, 1, 1));
        contexto.repositorio.salvar(mestre);
        
        guildaCriada = contexto.guildaService.criarGuilda(nomeGuilda, "Descrição", null, mestre.getMatricula());
        
        // Adiciona o membro
        String cpfNumeros = cpfString.replaceAll("[^0-9]", "");
        cpfAluno = new Cpf(cpfNumeros);
        var aluno = new Aluno(cpfAluno, "Aluno Teste", LocalDate.of(1990, 1, 1));
        matriculaAluno = aluno.getMatricula();
        contexto.repositorio.salvar(aluno);
        
        contexto.guildaService.entrarEmGuilda(matriculaAluno, guildaCriada.getCodigoConvite());
        guildaCriada = contexto.guildaService.obter(guildaCriada.getId());
    }

    @When("o aluno tenta alterar a descrição da guilda para {string}")
    public void o_aluno_tenta_alterar_a_descrição_da_guilda_para(String novaDescricao) {
        try {
            contexto.guildaService.alterarDadosGuilda(guildaCriada.getId(), matriculaAluno, null, novaDescricao, null);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Given("o aluno com CPF {string} é membro da guilda {string}")
    public void o_aluno_com_cpf_é_membro_da_guilda(String cpfString, String nomeGuilda) {
        // Cria o mestre
        String cpfMestre = "11111111111";
        Cpf cpfMestreObj = new Cpf(cpfMestre);
        var mestre = new Aluno(cpfMestreObj, "Mestre", LocalDate.of(1990, 1, 1));
        contexto.repositorio.salvar(mestre);
        
        guildaCriada = contexto.guildaService.criarGuilda(nomeGuilda, "Descrição", null, mestre.getMatricula());
        
        // Adiciona o membro
        String cpfNumeros = cpfString.replaceAll("[^0-9]", "");
        cpfAluno = new Cpf(cpfNumeros);
        var aluno = new Aluno(cpfAluno, "Aluno Teste", LocalDate.of(1990, 1, 1));
        matriculaAluno = aluno.getMatricula();
        contexto.repositorio.salvar(aluno);
        
        contexto.guildaService.entrarEmGuilda(matriculaAluno, guildaCriada.getCodigoConvite());
        guildaCriada = contexto.guildaService.obter(guildaCriada.getId());
    }

    @When("o aluno tenta sair da guilda")
    public void o_aluno_tenta_sair_da_guilda() {
        try {
            contexto.guildaService.sairDaGuilda(matriculaAluno, guildaCriada.getId());
            guildaCriada = contexto.guildaService.obter(guildaCriada.getId());
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Then("o aluno não é mais membro da guilda")
    public void o_aluno_não_é_mais_membro_da_guilda() {
        assertFalse(guildaCriada.isMembro(matriculaAluno));
    }

    @When("o mestre tenta sair da guilda")
    public void o_mestre_tenta_sair_da_guilda() {
        try {
            contexto.guildaService.sairDaGuilda(matriculaAluno, guildaCriada.getId());
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @When("o mestre exclui a guilda")
    public void o_mestre_exclui_a_guilda() {
        try {
            contexto.guildaService.excluirGuilda(guildaCriada.getId(), matriculaAluno);
            guildaCriada = contexto.guildaService.obter(guildaCriada.getId());
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Then("o status da guilda é alterado para {string}")
    public void o_status_da_guilda_é_alterado_para(String status) {
        assertEquals(StatusGuilda.valueOf(status), guildaCriada.getStatus());
    }

    @When("o aluno tenta excluir a guilda")
    public void o_aluno_tenta_excluir_a_guilda() {
        try {
            contexto.guildaService.excluirGuilda(guildaCriada.getId(), matriculaAluno);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }
}

