package br.com.forgefit.dominio;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import io.cucumber.java.en.Then;

/**
 * Steps compartilhados entre todas as features.
 * Recebe o contexto compartilhado via injeção de dependência do Cucumber PicoContainer.
 */
public class StepsCompartilhados {

    private final AcademiaFuncionalidade contexto;

    public StepsCompartilhados(AcademiaFuncionalidade contexto) {
        this.contexto = contexto;
    }

    @Then("o sistema informa que: {string}")
    public void o_sistema_informa_que(String mensagemEsperada) {
        assertNotNull(contexto.excecao, "Esperava uma exceção mas não houve nenhuma");
        String mensagem = contexto.excecao.getMessage().toLowerCase();
        
        // Mensagens de guildas
        if (mensagemEsperada.contains("nome da guilda já está em uso")) {
            assertTrue(mensagem.contains("nome") && mensagem.contains("uso"));
        } else if (mensagemEsperada.contains("código de convite é inválido")) {
            assertTrue(mensagem.contains("código") && mensagem.contains("inválido"));
        } else if (mensagemEsperada.contains("apenas o mestre da guilda pode editar seus dados")) {
            assertTrue(mensagem.contains("mestre") && mensagem.contains("editar"));
        } else if (mensagemEsperada.contains("o mestre não pode sair da guilda")) {
            assertTrue(mensagem.contains("mestre") && mensagem.contains("sair"));
        } else if (mensagemEsperada.contains("apenas o mestre pode excluir a guilda")) {
            assertTrue(mensagem.contains("mestre") && mensagem.contains("excluir"));
        }
        // Mensagens de check-ins e torneios
        else if (mensagemEsperada.contains("o check-in para este treino já foi realizado hoje")) {
            assertTrue(mensagem.contains("check-in") && mensagem.contains("realizado") && mensagem.contains("hoje"));
        } else if (mensagemEsperada.contains("datas do torneio são inválidas")) {
            assertTrue(mensagem.contains("datas") && mensagem.contains("inválidas"));
        } else if (mensagemEsperada.contains("não é possível alterar os prêmios de um torneio ativo")) {
            assertTrue(mensagem.contains("prêmios") && mensagem.contains("torneio") && mensagem.contains("ativo"));
        }
    }
}

