package br.com.forgefit.dominio.checkin;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Optional;

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
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.en.And;

/**
 * Step definitions para pontuação de guildas e torneios.
 * Usa matrícula para identificação de alunos e delega responsabilidades para services.
 */
public class PontuacaoGuildasFuncionalidade {
    
    private final AcademiaFuncionalidade contexto;
    
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

    @Given("o aluno com matrícula {string} com um plano de treino ativo é membro da guilda {string}")
    public void o_aluno_com_matricula_com_um_plano_de_treino_ativo_é_membro_da_guilda(String matriculaStr, String nomeGuilda) {
        matriculaAluno = new Matricula(matriculaStr);
        Cpf cpf = new Cpf(matriculaStr.replaceAll("[^0-9]", ""));
        Aluno aluno = new Aluno(matriculaAluno, cpf, "João da Silva", LocalDate.of(1990, 1, 1), null);
        
        // Cria plano de treino ativo
        PlanoDeTreinoId planoId = new PlanoDeTreinoId(1);
        ArrayList<TreinoDiario> treinos = new ArrayList<>();
        planoAtivo = new PlanoDeTreino(planoId, new ProfessorId(1), LocalDate.now(), LocalDate.now().plusMonths(3), treinos);
        contexto.repositorio.salvar(planoAtivo);
        aluno.setPlanoAtivoId(planoId);
        
        // Cria a guilda e associa o aluno à guilda
        guilda = contexto.guildaService.criarGuilda(nomeGuilda, "Descrição da guilda", null, matriculaAluno);
        aluno.setGuildaId(guilda.getId());
        
        contexto.repositorio.salvar(aluno);
    }

    @When("o aluno realiza o check-in do treino {string} na guilda {string} com a mensagem {string}")
    public void o_aluno_realiza_o_check_in_do_treino_na_guilda_com_a_mensagem(String letra, String nomeGuilda, String mensagem) {
        Aluno aluno = contexto.repositorio.obterPorMatricula(matriculaAluno).get();
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
        
        // Valida persistência no repositório
        var checkinsDoAluno = contexto.repositorio.buscarPorAluno(matriculaAluno);
        assertTrue(!checkinsDoAluno.isEmpty(), "Nenhum check-in foi persistido no repositório");
        
        // Busca o check-in específico (mais recente)
        Checkin checkinPersistido = checkinsDoAluno.stream()
            .filter(c -> c.getId().equals(checkinCriado.getId()))
            .findFirst()
            .orElseThrow(() -> new AssertionError("Check-in criado não foi persistido no repositório"));
        
        // Valida TODOS os atributos do check-in persistido
        assertEquals(matriculaAluno, checkinPersistido.getAlunoMatricula());
        assertEquals(guilda.getId(), checkinPersistido.getGuildaId());
        assertEquals(LetraDoTreino.valueOf(letra), checkinPersistido.getContexto().getLetraDoTreino());
        assertEquals(mensagem, checkinPersistido.getMensagem());
        assertEquals(LocalDate.now(), checkinPersistido.getDataDoCheckin());
        assertEquals(10, checkinPersistido.getPontuacaoGerada());
        assertEquals(planoAtivo.getId(), checkinPersistido.getContexto().getPlanoDeTreinoId());
    }

    @And("a pontuação do aluno e da guilda {string} é incrementada em {string} pontos")
    public void a_pontuação_do_aluno_e_da_guilda_é_incrementada_em_pontos(String nomeGuilda, String pontosStr) {
        int pontos = Integer.parseInt(pontosStr);
        
        // BUSCA DO REPOSITÓRIO - valida pontuação do aluno
        Aluno aluno = contexto.repositorio.obterPorMatricula(matriculaAluno).get();
        assertEquals(pontuacaoAlunoAntes + pontos, aluno.getPontuacaoTotal());
        
        // BUSCA DO REPOSITÓRIO - valida pontuação da guilda
        Optional<Guilda> guildaPersistidaOpt = contexto.repositorio.obterPorId(guilda.getId());
        assertTrue(guildaPersistidaOpt.isPresent(), 
                "A guilda deveria estar persistida no repositório");
        
        Guilda guildaPersistida = guildaPersistidaOpt.get();
        assertEquals(pontuacaoGuildaAntes + pontos, guildaPersistida.getPontuacaoTotal(),
                "A pontuação da guilda deveria ter sido incrementada");
        
        // Valida que o check-in foi persistido com a pontuação correta
        var checkinsDoAluno = contexto.repositorio.buscarPorAluno(matriculaAluno);
        Checkin checkinPersistido = checkinsDoAluno.stream()
            .filter(c -> c.getId().equals(checkinCriado.getId()))
            .findFirst()
            .orElseThrow(() -> new AssertionError("Check-in não foi persistido"));
        
        assertEquals(pontos, checkinPersistido.getPontuacaoGerada());
    }

    @Given("o aluno com matrícula {string} já realizou o check-in do seu treino {string} na guilda {string} hoje")
    public void o_aluno_com_matricula_já_realizou_o_check_in_do_seu_treino_na_guilda_hoje(String matriculaStr, String letra, String nomeGuilda) {
        matriculaAluno = new Matricula(matriculaStr);
        Cpf cpf = new Cpf(matriculaStr.replaceAll("[^0-9]", ""));
        Aluno aluno = new Aluno(matriculaAluno, cpf, "Aluno Teste", LocalDate.of(1990, 1, 1), null);
        
        // Cria plano de treino ativo
        PlanoDeTreinoId planoId = new PlanoDeTreinoId(1);
        ArrayList<TreinoDiario> treinos = new ArrayList<>();
        planoAtivo = new PlanoDeTreino(planoId, new ProfessorId(1), LocalDate.now(), LocalDate.now().plusMonths(3), treinos);
        contexto.repositorio.salvar(planoAtivo);
        aluno.setPlanoAtivoId(planoId);
        
        // Cria a guilda
        guilda = contexto.guildaService.criarGuilda(nomeGuilda, "Descrição", null, matriculaAluno);
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
        Aluno aluno = contexto.repositorio.obterPorMatricula(matriculaAluno).get();
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
        // BUSCA DO REPOSITÓRIO - valida aluno
        Aluno aluno = contexto.repositorio.obterPorMatricula(matriculaAluno).get();
        assertEquals(pontuacaoAlunoAntes, aluno.getPontuacaoTotal());
        
        // BUSCA DO REPOSITÓRIO - valida guilda
        Optional<Guilda> guildaPersistidaOpt = contexto.repositorio.obterPorId(guilda.getId());
        assertTrue(guildaPersistidaOpt.isPresent(), 
                "A guilda deveria estar persistida no repositório");
        
        Guilda guildaPersistida = guildaPersistidaOpt.get();
        assertEquals(pontuacaoGuildaAntes, guildaPersistida.getPontuacaoTotal());
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
        
        // BUSCA DO REPOSITÓRIO - valida persistência do torneio
        Optional<Torneio> torneioPersistidoOpt = contexto.repositorio.obterPorId(torneio.getId());
        assertTrue(torneioPersistidoOpt.isPresent(), 
                "O torneio deveria estar persistido no repositório");
        
        Torneio torneioPersistido = torneioPersistidoOpt.get();
        
        // VALIDA ATRIBUTOS DO TORNEIO PERSISTIDO
        assertEquals(StatusTorneio.valueOf(status), torneioPersistido.getStatus());
        assertEquals("Torneio Teste", torneioPersistido.getNome());
        assertNotNull(torneioPersistido.getDataInicio());
        assertNotNull(torneioPersistido.getDataFim());
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
        // BUSCA DO REPOSITÓRIO - valida persistência do torneio
        Optional<Torneio> torneioPersistidoOpt = contexto.repositorio.obterPorId(torneio.getId());
        assertTrue(torneioPersistidoOpt.isPresent(), 
                "O torneio deveria estar persistido no repositório");
        
        Torneio torneioPersistido = torneioPersistidoOpt.get();
        
        assertNotNull(torneioPersistido.getPremioPrimeiroLugar());
        assertEquals("1kg de Whey Protein", torneioPersistido.getPremioPrimeiroLugar().getNome());
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

    @Given("o torneio {string} está com status {string} data de início {string} e data de fim {string}")
    public void o_torneio_está_com_status_data_de_início_e_data_de_fim(String nomeTorneio, String status, String dataInicioStr, String dataFimStr) {
        LocalDate dataInicio = LocalDate.parse(dataInicioStr, formatter);
        LocalDate dataFim = LocalDate.parse(dataFimStr, formatter);
        
        torneio = contexto.torneioService.criarTorneio(nomeTorneio, dataInicio, dataFim, null, null, null);
        torneio.ativar();
        contexto.torneioService.salvar(torneio);
    }

    @And("apenas a guilda {string} participou do torneio com {string} check-ins")
    public void apenas_a_guilda_participou_do_torneio_com_check_ins(String nomeGuilda, String quantidadeStr) {
        int quantidadeCheckins = Integer.parseInt(quantidadeStr);
        
        String matriculaStr = "100.000.000-00";
        matriculaAluno = new Matricula(matriculaStr);
        Cpf cpf = new Cpf(matriculaStr.replaceAll("[^0-9]", ""));
        Aluno aluno = new Aluno(matriculaAluno, cpf, "Aluno Teste", LocalDate.of(1990, 1, 1), null);
        
        PlanoDeTreinoId planoId = new PlanoDeTreinoId(1);
        ArrayList<TreinoDiario> treinos = new ArrayList<>();
        planoAtivo = new PlanoDeTreino(planoId, new ProfessorId(1), LocalDate.now(), LocalDate.now().plusMonths(3), treinos);
        contexto.repositorio.salvar(planoAtivo);
        aluno.setPlanoAtivoId(planoId);
        
        guilda = contexto.guildaService.criarGuilda(nomeGuilda, "Descrição", null, matriculaAluno);
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
        // BUSCA DO REPOSITÓRIO - valida persistência do torneio
        Optional<Torneio> torneioPersistidoOpt = contexto.repositorio.obterPorId(torneio.getId());
        assertTrue(torneioPersistidoOpt.isPresent(), 
                "O torneio deveria estar persistido no repositório");
        
        Torneio torneioPersistido = torneioPersistidoOpt.get();
        
        assertEquals(StatusTorneio.valueOf(status), torneioPersistido.getStatus());
    }

    @And("a guilda {string} é declarada vencedora do torneio com {string} pontos")
    public void a_guilda_é_declarada_vencedora_do_torneio_com_pontos(String nomeGuilda, String pontosStr) {
        int pontos = Integer.parseInt(pontosStr);
        
        // BUSCA DO REPOSITÓRIO - valida que o torneio foi persistido completamente
        Optional<Torneio> torneioPersistidoOpt = contexto.repositorio.obterPorId(torneio.getId());
        assertTrue(torneioPersistidoOpt.isPresent(), 
                "O torneio deveria estar persistido no repositório");
        
        Torneio torneioPersistido = torneioPersistidoOpt.get();
        
        // VALIDA TODOS OS ATRIBUTOS DO RANKING FINAL
        assertNotNull(torneioPersistido.getRankingFinal(), 
                "O ranking final não pode ser nulo");
        assertFalse(torneioPersistido.getRankingFinal().isEmpty(), 
                "O ranking final não pode estar vazio");
        assertEquals(1, torneioPersistido.getRankingFinal().size(),
                "Deveria ter exatamente 1 guilda no ranking");
        
        // Valida atributos da guilda vencedora
        var primeiraColocada = torneioPersistido.getRankingFinal().get(0);
        assertNotNull(primeiraColocada, "A primeira colocada não pode ser nula");
        assertEquals(1, primeiraColocada.getPosicao(),
                "A posição da vencedora deveria ser 1");
        assertEquals(pontos, primeiraColocada.getPontuacaoNoTorneio(),
                "A pontuação da vencedora deveria ser " + pontos);
        assertEquals(guilda.getId(), primeiraColocada.getGuildaId(),
                "A guilda vencedora deveria ser a que participou");
        
        // Valida que o status do torneio foi atualizado para FINALIZADO
        assertEquals(StatusTorneio.FINALIZADO, torneioPersistido.getStatus(),
                "O torneio deveria estar com status FINALIZADO");
    }

    @Given("que o torneio {string} está com status {string} com início em {string} e fim em {string}")
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

    @And("o ranking do torneio é registrado como vazio sem vencedores")
    public void o_ranking_do_torneio_é_registrado_como_vazio_sem_vencedores() {
        // BUSCA DO REPOSITÓRIO - valida que o torneio foi persistido completamente
        Optional<Torneio> torneioPersistidoOpt = contexto.repositorio.obterPorId(torneio.getId());
        assertTrue(torneioPersistidoOpt.isPresent(), 
                "O torneio deveria estar persistido no repositório");
        
        Torneio torneioPersistido = torneioPersistidoOpt.get();
        
        // VALIDA ATRIBUTOS DO TORNEIO FINALIZADO SEM VENCEDORES
        assertNotNull(torneioPersistido, "O torneio deveria estar persistido no repositório");
        assertNotNull(torneioPersistido.getId(), "O ID do torneio não pode ser nulo");
        assertEquals(torneio.getId(), torneioPersistido.getId(),
                "O ID do torneio deveria ser o mesmo");
        
        // Valida que o status foi alterado para FINALIZADO
        assertEquals(StatusTorneio.FINALIZADO, torneioPersistido.getStatus(),
                "O torneio deveria estar com status FINALIZADO");
        
        // Valida que o ranking final existe mas está vazio
        assertNotNull(torneioPersistido.getRankingFinal(), 
                "O ranking final não pode ser nulo, mesmo vazio");
        assertTrue(torneioPersistido.getRankingFinal().isEmpty(),
                "O ranking final deveria estar vazio sem vencedores");
        assertEquals(0, torneioPersistido.getRankingFinal().size(),
                "Não deveria ter nenhuma guilda no ranking");
        
        // Valida que as datas foram mantidas
        assertNotNull(torneioPersistido.getDataInicio(), 
                "A data de início deveria estar registrada");
        assertNotNull(torneioPersistido.getDataFim(), 
                "A data de fim deveria estar registrada");
    }
}