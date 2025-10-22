package br.com.forgefit.dominio.checkin;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import br.com.forgefit.dominio.AcademiaFuncionalidade;
import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.guilda.Guilda;
import br.com.forgefit.dominio.torneio.Premio;
import br.com.forgefit.dominio.torneio.Torneio;
import br.com.forgefit.dominio.torneio.enums.PosicaoDoPodio;
import br.com.forgefit.dominio.torneio.enums.StatusTorneio;
import br.com.forgefit.dominio.treino.PlanoDeTreino;
import br.com.forgefit.dominio.treino.PlanoDeTreinoId;
import br.com.forgefit.dominio.treino.TreinoDiario;
import br.com.forgefit.dominio.treino.enums.LetraDoTreino;
import br.com.forgefit.dominio.professor.ProfessorId;
import java.util.ArrayList;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.en.And;

/**
 * Step definitions para pontuação de guildas e torneios.
 * Recebe o contexto compartilhado via injeção de dependência do Cucumber PicoContainer.
 */
public class PontuacaoGuildasFuncionalidade {
    
    private final AcademiaFuncionalidade contexto;
    
    private Cpf cpfAluno;
    private Matricula matriculaAluno;
    private Guilda guilda;
    private PlanoDeTreino planoAtivo;
    private Checkin checkinCriado;
    private Torneio torneio;
    private int pontuacaoAlunoAntes;
    private int pontuacaoGuildaAntes;
    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    public PontuacaoGuildasFuncionalidade(AcademiaFuncionalidade contexto) {
        this.contexto = contexto;
    }

    @Given("o aluno com CPF {string} com um plano de treino ativo é membro da guilda {string}")
    public void o_aluno_com_cpf_com_um_plano_de_treino_ativo_é_membro_da_guilda(String cpfString, String nomeGuilda) {
        String cpfNumeros = cpfString.replaceAll("[^0-9]", "");
        cpfAluno = new Cpf(cpfNumeros);
        var aluno = new Aluno(cpfAluno, "João da Silva", LocalDate.of(1990, 1, 1));
        matriculaAluno = aluno.getMatricula();
        
        // Cria plano de treino ativo
        var planoId = new PlanoDeTreinoId(1);
        var treinos = new ArrayList<TreinoDiario>();
        planoAtivo = new PlanoDeTreino(planoId, new ProfessorId(1), LocalDate.now(), LocalDate.now().plusMonths(3), treinos);
        contexto.repositorio.salvar(planoAtivo); // Salva o plano primeiro
        aluno.setPlanoAtivoId(planoId);
        
        // Cria a guilda e associa o aluno à guilda
        guilda = contexto.guildaService.criarGuilda(nomeGuilda, "Descrição da guilda", null, matriculaAluno);
        
        // Define o guildaId do aluno
        aluno.setGuildaId(guilda.getId());
        
        contexto.repositorio.salvar(aluno);
    }

    @When("o aluno realiza o check-in do treino {string} na guilda {string} com a mensagem {string}")
    public void o_aluno_realiza_o_check_in_do_treino_na_guilda_com_a_mensagem(String letra, String nomeGuilda, String mensagem) {
        var aluno = contexto.repositorio.obterAlunoPorCpf(cpfAluno).get();
        pontuacaoAlunoAntes = aluno.getPontuacaoTotal();
        pontuacaoGuildaAntes = guilda.getPontuacaoTotal();
        
        try {
            LetraDoTreino letraTreino = LetraDoTreino.valueOf(letra);
            checkinCriado = contexto.checkinService.realizarCheckinDeTreino(
                matriculaAluno, 
                planoAtivo, 
                letraTreino, 
                mensagem, 
                null
            );
            
            // Atualiza referências
            guilda = contexto.guildaService.obter(guilda.getId());
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Then("o sistema registra um check-in para o treino {string} na data {string} com a mensagem {string}")
    public void o_sistema_registra_um_check_in_para_o_treino_na_data_com_a_mensagem(String letra, String dataString, String mensagem) {
        assertNotNull(checkinCriado);
        assertEquals(LetraDoTreino.valueOf(letra), checkinCriado.getContexto().getLetraDoTreino());
        assertEquals(mensagem, checkinCriado.getMensagem());
        assertEquals(LocalDate.now(), checkinCriado.getDataDoCheckin());
    }

    @And("a pontuação do aluno e da guilda {string} é incrementada em {int} pontos")
    public void a_pontuação_do_aluno_e_da_guilda_é_incrementada_em_pontos(String nomeGuilda, int pontos) {
        var aluno = contexto.repositorio.obterAlunoPorCpf(cpfAluno).get();
        
        assertEquals(pontuacaoAlunoAntes + pontos, aluno.getPontuacaoTotal());
        assertEquals(pontuacaoGuildaAntes + pontos, guilda.getPontuacaoTotal());
    }

    @Given("o aluno com CPF {string} já realizou o check-in do seu treino {string} na guilda {string} hoje")
    public void o_aluno_com_cpf_já_realizou_o_check_in_do_seu_treino_na_guilda_hoje(String cpfString, String letra, String nomeGuilda) {
        String cpfNumeros = cpfString.replaceAll("[^0-9]", "");
        cpfAluno = new Cpf(cpfNumeros);
        var aluno = new Aluno(cpfAluno, "Aluno Teste", LocalDate.of(1990, 1, 1));
        matriculaAluno = aluno.getMatricula();
        
        // Cria plano de treino ativo
        var planoId = new PlanoDeTreinoId(1);
        var treinos = new ArrayList<TreinoDiario>();
        planoAtivo = new PlanoDeTreino(planoId, new ProfessorId(1), LocalDate.now(), LocalDate.now().plusMonths(3), treinos);
        contexto.repositorio.salvar(planoAtivo); // Salva o plano primeiro
        aluno.setPlanoAtivoId(planoId);
        
        // Cria a guilda
        guilda = contexto.guildaService.criarGuilda(nomeGuilda, "Descrição", null, matriculaAluno);
        
        // Define o guildaId do aluno
        aluno.setGuildaId(guilda.getId());
        
        contexto.repositorio.salvar(aluno);
        
        // Realiza o primeiro check-in
        LetraDoTreino letraTreino = LetraDoTreino.valueOf(letra);
        contexto.checkinService.realizarCheckinDeTreino(matriculaAluno, planoAtivo, letraTreino, "Primeiro check-in", null);
        
        // Atualiza referências
        guilda = contexto.guildaService.obter(guilda.getId());
    }

    @When("o aluno tenta realizar o check-in do mesmo treino {string} na guilda {string} novamente")
    public void o_aluno_tenta_realizar_o_check_in_do_mesmo_treino_na_guilda_novamente(String letra, String nomeGuilda) {
        var aluno = contexto.repositorio.obterAlunoPorCpf(cpfAluno).get();
        pontuacaoAlunoAntes = aluno.getPontuacaoTotal();
        pontuacaoGuildaAntes = guilda.getPontuacaoTotal();
        
        try {
            LetraDoTreino letraTreino = LetraDoTreino.valueOf(letra);
            contexto.checkinService.realizarCheckinDeTreino(matriculaAluno, planoAtivo, letraTreino, "Tentativa duplicada", null);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }


    @And("a pontuação do aluno e da guilda não é alterada")
    public void a_pontuação_do_aluno_e_da_guilda_não_é_alterada() {
        var aluno = contexto.repositorio.obterAlunoPorCpf(cpfAluno).get();
        guilda = contexto.guildaService.obter(guilda.getId());
        
        assertEquals(pontuacaoAlunoAntes, aluno.getPontuacaoTotal());
        assertEquals(pontuacaoGuildaAntes, guilda.getPontuacaoTotal());
    }

    @Given("um torneio com status {string} não existe no sistema")
    public void um_torneio_com_status_não_existe_no_sistema(String status) {
        // Não precisa fazer nada - simplesmente garante que não há torneio ativo
    }

    @When("o gerente cria um novo torneio com data de início {string} e data de fim {string}")
    public void o_gerente_cria_um_novo_torneio_com_data_de_início_e_data_de_fim(String dataInicioStr, String dataFimStr) {
        try {
            LocalDate dataInicio = LocalDate.parse(dataInicioStr, formatter);
            LocalDate dataFim = LocalDate.parse(dataFimStr, formatter);
            
            torneio = contexto.torneioService.criarTorneio("Torneio Teste", dataInicio, dataFim, null, null, null);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Then("o torneio é criado com o status {string}")
    public void o_torneio_é_criado_com_o_status(String status) {
        assertNotNull(torneio);
        assertEquals(StatusTorneio.valueOf(status), torneio.getStatus());
    }

    @When("o gerente tenta criar um novo torneio com data de início {string} e data de fim {string}")
    public void o_gerente_tenta_criar_um_novo_torneio_com_data_de_início_e_data_de_fim(String dataInicioStr, String dataFimStr) {
        try {
            LocalDate dataInicio = LocalDate.parse(dataInicioStr, formatter);
            LocalDate dataFim = LocalDate.parse(dataFimStr, formatter);
            
            torneio = contexto.torneioService.criarTorneio("Torneio Teste", dataInicio, dataFim, null, null, null);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Given("o torneio {string} foi criado para começar em {string} e está com o status {string}")
    public void o_torneio_foi_criado_para_começar_em_e_está_com_o_status(String nomeTorneio, String dataInicioStr, String status) {
        LocalDate dataInicio = LocalDate.parse(dataInicioStr, formatter);
        LocalDate dataFim = dataInicio.plusDays(15);
        
        torneio = contexto.torneioService.criarTorneio(nomeTorneio, dataInicio, dataFim, null, null, null);
    }

    @When("o gerente define o prêmio {string} para o {string} do torneio")
    public void o_gerente_define_o_prêmio_para_o_do_torneio(String nomePremio, String posicao) {
        try {
            Premio premio = new Premio(nomePremio, null);
            PosicaoDoPodio posicaoPodio = PosicaoDoPodio.valueOf(posicao);
            
            contexto.torneioService.definirPremioDoPodio(torneio.getId(), posicaoPodio, premio);
            torneio = contexto.torneioService.obter(torneio.getId());
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Then("o sistema atribui o prêmio à posição correspondente do torneio")
    public void o_sistema_atribui_o_prêmio_à_posição_correspondente_do_torneio() {
        assertNotNull(torneio.getPremioPrimeiroLugar());
        assertEquals("1kg de Whey Protein", torneio.getPremioPrimeiroLugar().getNome());
    }

    @Given("o torneio {string} está {string}")
    public void o_torneio_está(String nomeTorneio, String status) {
        LocalDate dataInicio = LocalDate.now().minusDays(1);
        LocalDate dataFim = LocalDate.now().plusDays(14);
        
        torneio = contexto.torneioService.criarTorneio(nomeTorneio, dataInicio, dataFim, null, null, null);
        torneio.ativar();
        contexto.torneioService.salvar(torneio);
    }

    @When("o gerente tenta definir o prêmio {string} para o {string} do torneio")
    public void o_gerente_tenta_definir_o_prêmio_para_o_do_torneio(String nomePremio, String posicao) {
        try {
            Premio premio = new Premio(nomePremio, null);
            PosicaoDoPodio posicaoPodio = PosicaoDoPodio.valueOf(posicao);
            
            contexto.torneioService.definirPremioDoPodio(torneio.getId(), posicaoPodio, premio);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Given("o torneio {string} está com status {string}, data de início {string} e data de fim {string}")
    public void o_torneio_está_com_status_data_de_início_e_data_de_fim(String nomeTorneio, String status, String dataInicioStr, String dataFimStr) {
        LocalDate dataInicio = LocalDate.parse(dataInicioStr, formatter);
        LocalDate dataFim = LocalDate.parse(dataFimStr, formatter);
        
        torneio = contexto.torneioService.criarTorneio(nomeTorneio, dataInicio, dataFim, null, null, null);
        torneio.ativar();
        contexto.torneioService.salvar(torneio);
    }

    @And("apenas a guilda {string} participou do torneio com {int} check-ins")
    public void apenas_a_guilda_participou_do_torneio_com_check_ins(String nomeGuilda, int quantidadeCheckins) {
        String cpfNumeros = "12345678900";
        cpfAluno = new Cpf(cpfNumeros);
        var aluno = new Aluno(cpfAluno, "Aluno Teste", LocalDate.of(1990, 1, 1));
        matriculaAluno = aluno.getMatricula();
        
        var planoId = new PlanoDeTreinoId(1);
        var treinos = new ArrayList<TreinoDiario>();
        planoAtivo = new PlanoDeTreino(planoId, new ProfessorId(1), LocalDate.now(), LocalDate.now().plusMonths(3), treinos);
        contexto.repositorio.salvar(planoAtivo); // Salva o plano primeiro
        aluno.setPlanoAtivoId(planoId);
        
        guilda = contexto.guildaService.criarGuilda(nomeGuilda, "Descrição", null, matriculaAluno);
        
        // Define o guildaId do aluno
        aluno.setGuildaId(guilda.getId());
        
        contexto.repositorio.salvar(aluno);
        
        // Simula os check-ins registrando pontos diretamente no torneio
        // Cada check-in vale 10 pontos
        torneio.registrarCheckin(guilda.getId(), 10 * quantidadeCheckins);
        contexto.torneioService.salvar(torneio);
    }

    @When("a data de fim é atingida")
    public void a_data_de_fim_é_atingida() {
        try {
            contexto.torneioService.finalizarTorneio(torneio.getId());
            torneio = contexto.torneioService.obter(torneio.getId());
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Then("o status do torneio é alterado para {string}")
    public void o_status_do_torneio_é_alterado_para(String status) {
        assertEquals(StatusTorneio.valueOf(status), torneio.getStatus());
    }

    @And("a guilda {string} é declarada vencedora do torneio com {int} pontos")
    public void a_guilda_é_declarada_vencedora_do_torneio_com_pontos(String nomeGuilda, int pontos) {
        assertNotNull(torneio.getRankingFinal());
        assertEquals(1, torneio.getRankingFinal().size());
        assertEquals(1, torneio.getRankingFinal().get(0).getPosicao());
        assertEquals(pontos, torneio.getRankingFinal().get(0).getPontuacaoNoTorneio());
    }

    @Given("que o torneio {string} está com status {string}, com início em {string} e fim em {string}")
    public void que_o_torneio_está_com_status_com_início_em_e_fim_em(String nomeTorneio, String status, String dataInicioStr, String dataFimStr) {
        LocalDate dataInicio = LocalDate.parse(dataInicioStr, formatter);
        LocalDate dataFim = LocalDate.parse(dataFimStr, formatter);
        
        torneio = contexto.torneioService.criarTorneio(nomeTorneio, dataInicio, dataFim, null, null, null);
        torneio.ativar();
        contexto.torneioService.salvar(torneio);
    }

    @And("nenhuma guilda realizou check-ins durante o seu período")
    public void nenhuma_guilda_realizou_check_ins_durante_o_seu_período() {
        // Não precisa fazer nada - simplesmente não registra check-ins
    }

    @When("a data de fim do torneio é atingida")
    public void a_data_de_fim_do_torneio_é_atingida() {
        try {
            contexto.torneioService.finalizarTorneio(torneio.getId());
            torneio = contexto.torneioService.obter(torneio.getId());
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @And("o ranking do torneio é registrado como vazio, sem vencedores")
    public void o_ranking_do_torneio_é_registrado_como_vazio_sem_vencedores() {
        assertTrue(torneio.getRankingFinal().isEmpty());
    }
}

