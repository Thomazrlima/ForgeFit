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
import io.cucumber.java.pt.*;

/**
 * Step definitions para gestão de guildas.
 * Recebe o contexto compartilhado via injeção de dependência do Cucumber PicoContainer.
 */
public class GestaoGuildasFuncionalidade {
    
    private final AcademiaFuncionalidade contexto;
    
    private Matricula matriculaAluno;
    private Matricula matriculaAluno2;
    private Guilda guildaCriada;
    private CodigoConvite codigoConvite;
    private String nomeGuilda;

    public GestaoGuildasFuncionalidade(AcademiaFuncionalidade contexto) {
        this.contexto = contexto;
    }

    @Dado("um aluno está cadastrado com matrícula {string}")
    public void um_aluno_está_cadastrado_com_matricula(String matriculaString) {
        matriculaAluno = new Matricula(matriculaString);
        Cpf cpf = new Cpf(matriculaString.replaceAll("[^0-9]", ""));
        var aluno = new Aluno(matriculaAluno, cpf, "João da Silva", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(aluno);
    }

    @Quando("o aluno cria uma nova guilda chamada {string}")
    public void o_aluno_cria_uma_nova_guilda_chamada(String nomeGuilda) {
        this.nomeGuilda = nomeGuilda;
        try {
            guildaCriada = contexto.guildaService.criarGuilda(nomeGuilda, "Descrição da guilda", null, matriculaAluno);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Então("a guilda {string} é criada com sucesso")
    public void a_guilda_é_criada_com_sucesso(String nomeGuilda) {
        assertNotNull(guildaCriada);
        
        // Valida persistência no repositório
        var guildaPersistida = contexto.repositorio.obterPorId(guildaCriada.getId());
        assertTrue(guildaPersistida.isPresent(), "Guilda não foi persistida no repositório");
        
        Guilda guilda = guildaPersistida.get();
        
        // Valida TODOS os atributos da guilda persistida
        assertEquals(nomeGuilda, guilda.getNome());
        assertEquals(StatusGuilda.ATIVA, guilda.getStatus());
        assertTrue(guilda.isMestre(matriculaAluno), "Aluno não é mestre da guilda");
        assertTrue(guilda.isMembro(matriculaAluno), "Aluno não é membro da guilda");
        assertNotNull(guilda.getCodigoConvite(), "Código de convite não foi gerado");
        assertEquals(matriculaAluno, guilda.getMestreDaGuilda());
        assertEquals(1, guilda.getMembros().size(), "Deve ter exatamente 1 membro (o mestre)");
    }

    @Dado("já existe uma guilda chamada {string}")
    public void já_existe_uma_guilda_chamada(String nomeGuilda) {
        this.nomeGuilda = nomeGuilda;
        matriculaAluno = new Matricula("123.456.789-00");
        Cpf cpf = new Cpf("12345678900");
        var aluno = new Aluno(matriculaAluno, cpf, "Aluno Teste", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(aluno);
        
        guildaCriada = contexto.guildaService.criarGuilda(nomeGuilda, "Descrição", null, matriculaAluno);
    }

    @Quando("um aluno tenta criar outra guilda com o mesmo nome")
    public void um_aluno_tenta_criar_outra_guilda_com_o_mesmo_nome() {
        matriculaAluno2 = new Matricula("987.654.321-00");
        Cpf cpf2 = new Cpf("98765432100");
        var aluno2 = new Aluno(matriculaAluno2, cpf2, "Aluno 2", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(aluno2);

        try {
            contexto.guildaService.criarGuilda(nomeGuilda, "Outra descrição", null, matriculaAluno2);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Dado("o aluno com matrícula {string} criou a guilda {string} com o código de convite {string}")
    public void o_aluno_com_matricula_criou_a_guilda_com_o_código_de_convite(String matriculaString, String nomeGuilda, String codigoString) {
        matriculaAluno = new Matricula(matriculaString);
        Cpf cpf = new Cpf(matriculaString.replaceAll("[^0-9]", ""));
        var aluno = new Aluno(matriculaAluno, cpf, "Aluno Teste", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(aluno);
        
        // Cria a guilda com o código de convite especificado
        codigoConvite = new CodigoConvite(codigoString);
        guildaCriada = contexto.guildaService.criarGuilda(nomeGuilda, "Descrição", null, codigoConvite, matriculaAluno);
    }

    @Quando("um aluno utiliza o código de convite {string} para entrar na guilda")
    public void um_aluno_utiliza_o_código_de_convite_para_entrar_na_guilda(String codigoString) {
        matriculaAluno2 = new Matricula("987.654.321-00");
        Cpf cpf2 = new Cpf("98765432100");
        var aluno2 = new Aluno(matriculaAluno2, cpf2, "Aluno 2", LocalDate.of(1990, 1, 1), null);
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

    @Então("o aluno se torna membro da guilda")
    public void o_aluno_se_torna_membro_da_guilda() {
        // Valida persistência no repositório
        var guildaPersistida = contexto.repositorio.obterPorId(guildaCriada.getId());
        assertTrue(guildaPersistida.isPresent(), "Guilda não foi persistida no repositório");
        
        Guilda guilda = guildaPersistida.get();
        
        // Valida que o novo membro foi adicionado e persistido
        assertTrue(guilda.isMembro(matriculaAluno2), "Novo aluno não foi adicionado como membro");
        assertEquals(2, guilda.getMembros().size(), "Deve ter 2 membros (mestre + novo membro)");
        assertTrue(guilda.getMembros().contains(matriculaAluno2), "Lista de membros não contém o novo aluno");
    }

    @Dado("não existe uma guilda com o código de convite {string}")
    public void não_existe_uma_guilda_com_o_código_de_convite(String codigo) {
        codigoConvite = new CodigoConvite(codigo);
    }

    @Quando("um aluno tenta entrar na guilda com o código de convite {string}")
    public void um_aluno_tenta_entrar_na_guilda_com_o_código_de_convite(String codigo) {
        matriculaAluno = new Matricula("123.456.789-00");
        Cpf cpf = new Cpf("12345678900");
        var aluno = new Aluno(matriculaAluno, cpf, "Aluno Teste", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(aluno);

        // Usa o código especificado no feature (que deve ser inválido neste cenário)
        CodigoConvite codigoInvalido = new CodigoConvite(codigo);
        try {
            contexto.guildaService.entrarEmGuilda(matriculaAluno, codigoInvalido);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Dado("o aluno com matrícula {string} é o mestre da guilda {string}")
    public void o_aluno_com_matricula_é_o_mestre_da_guilda(String matriculaString, String nomeGuilda) {
        matriculaAluno = new Matricula(matriculaString);
        Cpf cpf = new Cpf(matriculaString.replaceAll("[^0-9]", ""));
        var aluno = new Aluno(matriculaAluno, cpf, "Aluno Teste", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(aluno);
        
        guildaCriada = contexto.guildaService.criarGuilda(nomeGuilda, "Descrição inicial", null, matriculaAluno);
    }

    @Quando("o mestre altera a descrição da guilda para {string}")
    public void o_mestre_altera_a_descrição_da_guilda_para(String novaDescricao) {
        try {
            contexto.guildaService.alterarDadosGuilda(guildaCriada.getId(), matriculaAluno, null, novaDescricao, null);
            guildaCriada = contexto.guildaService.obter(guildaCriada.getId());
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Então("a descrição da guilda é atualizada com sucesso")
    public void a_descrição_da_guilda_é_atualizada_com_sucesso() {
        // Valida persistência no repositório
        var guildaPersistida = contexto.repositorio.obterPorId(guildaCriada.getId());
        assertTrue(guildaPersistida.isPresent(), "Guilda não foi persistida no repositório");
        
        Guilda guilda = guildaPersistida.get();
        
        assertNotNull(guilda.getDescricao());
        assertEquals("Guilda dos melhores amigos que treinam juntos", guilda.getDescricao());
    }

    @Dado("um aluno com matrícula {string} é um membro da guilda {string} mas não é o mestre")
    public void um_aluno_com_matricula_é_um_membro_da_guilda_mas_não_é_o_mestre(String matriculaString, String nomeGuilda) {
        // Cria o mestre
        Matricula matriculaMestre = new Matricula("111.111.111-11");
        Cpf cpfMestre = new Cpf("11111111111");
        var mestre = new Aluno(matriculaMestre, cpfMestre, "Mestre", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(mestre);
        
        guildaCriada = contexto.guildaService.criarGuilda(nomeGuilda, "Descrição", null, mestre.getMatricula());
        
        // Adiciona o membro
        matriculaAluno = new Matricula(matriculaString);
        Cpf cpf = new Cpf(matriculaString.replaceAll("[^0-9]", ""));
        var aluno = new Aluno(matriculaAluno, cpf, "Aluno Teste", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(aluno);
        
        contexto.guildaService.entrarEmGuilda(matriculaAluno, guildaCriada.getCodigoConvite());
        guildaCriada = contexto.guildaService.obter(guildaCriada.getId());
    }

    @Quando("o aluno tenta alterar a descrição da guilda para {string}")
    public void o_aluno_tenta_alterar_a_descrição_da_guilda_para(String novaDescricao) {
        try {
            contexto.guildaService.alterarDadosGuilda(guildaCriada.getId(), matriculaAluno, null, novaDescricao, null);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Dado("o aluno com matrícula {string} é membro da guilda {string}")
    public void o_aluno_com_matricula_é_membro_da_guilda(String matriculaString, String nomeGuilda) {
        // Cria o mestre
        Matricula matriculaMestre = new Matricula("111.111.111-11");
        Cpf cpfMestre = new Cpf("11111111111");
        var mestre = new Aluno(matriculaMestre, cpfMestre, "Mestre", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(mestre);
        
        guildaCriada = contexto.guildaService.criarGuilda(nomeGuilda, "Descrição", null, mestre.getMatricula());
        
        // Adiciona o membro
        matriculaAluno = new Matricula(matriculaString);
        Cpf cpf = new Cpf(matriculaString.replaceAll("[^0-9]", ""));
        var aluno = new Aluno(matriculaAluno, cpf, "Aluno Teste", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(aluno);
        
        contexto.guildaService.entrarEmGuilda(matriculaAluno, guildaCriada.getCodigoConvite());
        guildaCriada = contexto.guildaService.obter(guildaCriada.getId());
    }

    @Quando("o aluno tenta sair da guilda")
    public void o_aluno_tenta_sair_da_guilda() {
        try {
            contexto.guildaService.sairDaGuilda(matriculaAluno, guildaCriada.getId());
            guildaCriada = contexto.guildaService.obter(guildaCriada.getId());
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Então("o aluno não é mais membro da guilda")
    public void o_aluno_não_é_mais_membro_da_guilda() {
        // Valida persistência no repositório
        var guildaPersistida = contexto.repositorio.obterPorId(guildaCriada.getId());
        assertTrue(guildaPersistida.isPresent(), "Guilda não foi persistida no repositório");
        
        Guilda guilda = guildaPersistida.get();
        
        // Valida que o aluno foi removido e a remoção foi persistida
        assertFalse(guilda.isMembro(matriculaAluno), "Aluno ainda é membro da guilda");
        assertFalse(guilda.getMembros().contains(matriculaAluno), "Lista de membros ainda contém o aluno");
    }

    @Quando("o mestre tenta sair da guilda")
    public void o_mestre_tenta_sair_da_guilda() {
        try {
            contexto.guildaService.sairDaGuilda(matriculaAluno, guildaCriada.getId());
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Quando("o mestre exclui a guilda")
    public void o_mestre_exclui_a_guilda() {
        try {
            contexto.guildaService.excluirGuilda(guildaCriada.getId(), matriculaAluno);
            guildaCriada = contexto.guildaService.obter(guildaCriada.getId());
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Então("o status da guilda é alterado para {string}")
    public void o_status_da_guilda_é_alterado_para(String status) {
        // Valida persistência no repositório
        var guildaPersistida = contexto.repositorio.obterPorId(guildaCriada.getId());
        assertTrue(guildaPersistida.isPresent(), "Guilda não foi persistida no repositório");
        
        Guilda guilda = guildaPersistida.get();
        
        assertEquals(StatusGuilda.valueOf(status), guilda.getStatus());
    }

    @Quando("o aluno tenta excluir a guilda")
    public void o_aluno_tenta_excluir_a_guilda() {
        try {
            contexto.guildaService.excluirGuilda(guildaCriada.getId(), matriculaAluno);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }
}

