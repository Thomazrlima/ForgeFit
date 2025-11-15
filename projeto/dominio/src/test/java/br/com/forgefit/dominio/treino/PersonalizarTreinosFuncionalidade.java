package br.com.forgefit.dominio.treino;

import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import br.com.forgefit.dominio.AcademiaFuncionalidade;
import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.professor.ProfessorId;
import br.com.forgefit.dominio.treino.enums.Exercicio;
import br.com.forgefit.dominio.treino.enums.LetraDoTreino;
import br.com.forgefit.dominio.treino.enums.TipoDoTreino;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

/**
 * Step definitions para personalização de treinos.
 * Implementa os 6 cenários do feature file com base em matrícula.
 * Recebe o contexto compartilhado via injeção de dependência do Cucumber PicoContainer.
 */
public class PersonalizarTreinosFuncionalidade {
    
    private final AcademiaFuncionalidade contexto;
    
    private ProfessorId professorId;
    private Matricula matriculaAluno;
    private PlanoDeTreino planoCriado;
    
    public PersonalizarTreinosFuncionalidade(AcademiaFuncionalidade contexto) {
        this.contexto = contexto;
    }

    // ===== CENÁRIO 1: Criação de plano de treino com treinos "A" e "B" =====
    
    @Given("o professorId {string} seleciona o aluno com matrícula {string}")
    public void o_professor_id_seleciona_o_aluno_com_matricula(String professorIdStr, String matriculaStr) {
        professorId = new ProfessorId(Integer.parseInt(professorIdStr));
        matriculaAluno = new Matricula(matriculaStr);
        
        // Cria ou obtém o aluno
        Cpf cpf = new Cpf(matriculaStr.replaceAll("[^0-9]", ""));
        Aluno aluno = new Aluno(matriculaAluno, cpf, "Aluno Teste", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(aluno);
    }

    @When("o professor cria um plano de treino com treino {string} de superiores e treino {string} de inferiores")
    public void o_professor_cria_um_plano_de_treino_com_treino_de_superiores_e_treino_de_inferiores(
            String letraA, String letraB) {
        List<TreinoDiario> treinos = new ArrayList<>();
        treinos.add(criarTreinoDiario(LetraDoTreino.A, TipoDoTreino.SUPERIORES));
        treinos.add(criarTreinoDiario(LetraDoTreino.B, TipoDoTreino.INFERIORES));
        
        try {
            planoCriado = contexto.treinoService.criarPlanoDeTreino(professorId, treinos);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Then("o plano de treino é criado com sucesso com {string} treinos diários")
    public void o_plano_de_treino_e_criado_com_sucesso_com_treinos_diarios_string(String quantidadeStr) {
        assertNull(contexto.excecao, "Não deveria ter ocorrido exceção");
        assertNotNull(planoCriado, "O plano de treino deveria ter sido criado");
        
        // BUSCA DO REPOSITÓRIO - valida que o service realmente persistiu
        Optional<PlanoDeTreino> planoDoRepositorio = contexto.repositorio.obterPorId(planoCriado.getId());
        assertTrue(planoDoRepositorio.isPresent(), 
                "O plano de treino deveria ter sido persistido no repositório");
        
        PlanoDeTreino planoSalvo = planoDoRepositorio.get();
        
        // VALIDA ATRIBUTOS DO PLANOD ETREINO
        assertNotNull(planoSalvo.getId(), "O ID do plano não pode ser nulo");
        assertEquals(planoCriado.getId(), planoSalvo.getId(),
                "O ID do plano deveria ter sido salvo corretamente");
        
        assertNotNull(planoSalvo.getProfessorId(), "O professorId não pode ser nulo");
        assertEquals(planoCriado.getProfessorId(), planoSalvo.getProfessorId(),
                "O professorId do plano deveria ter sido salvo corretamente");
        
        assertNotNull(planoSalvo.getDataCriacao(), "A data de criação não pode ser nula");
        assertEquals(planoCriado.getDataCriacao(), planoSalvo.getDataCriacao(),
                "A data de criação deveria ter sido salva corretamente");
        
        assertNotNull(planoSalvo.getTreinosDaSemana(), "A lista de treinos não pode ser nula");
        int quantidadeEsperada = Integer.parseInt(quantidadeStr);
        assertEquals(quantidadeEsperada, planoSalvo.getTreinosDaSemana().size(),
                "Deveria ter " + quantidadeEsperada + " treinos diários");
        assertEquals(planoCriado.getTreinosDaSemana().size(), planoSalvo.getTreinosDaSemana().size(),
                "A quantidade de treinos deveria ter sido salva corretamente");
        
        // VALIDA ATRIBUTOS DOS TREINOS DIÁRIOS
        for (int i = 0; i < planoCriado.getTreinosDaSemana().size(); i++) {
            TreinoDiario treinoEsperado = planoCriado.getTreinosDaSemana().get(i);
            TreinoDiario treinoSalvo = planoSalvo.getTreinosDaSemana().get(i);
            
            assertNotNull(treinoSalvo.getLetra(), "A letra do treino não pode ser nula");
            assertEquals(treinoEsperado.getLetra(), treinoSalvo.getLetra(),
                    "A letra do treino " + i + " deveria ter sido salva corretamente");
            
            assertNotNull(treinoSalvo.getTipo(), "O tipo do treino não pode ser nulo");
            assertEquals(treinoEsperado.getTipo(), treinoSalvo.getTipo(),
                    "O tipo do treino " + i + " deveria ter sido salvo corretamente");
            
            // VALIDA ATRIBUTOS DOS EXERCÍCIOS
            assertNotNull(treinoSalvo.getExercicios(), "A lista de exercícios não pode ser nula");
            assertEquals(treinoEsperado.getExercicios().size(), treinoSalvo.getExercicios().size(),
                    "O treino " + i + " deveria ter a mesma quantidade de exercícios");
            
            for (int j = 0; j < treinoEsperado.getExercicios().size(); j++) {
                ItemDeExercicio itemEsperado = treinoEsperado.getExercicios().get(j);
                ItemDeExercicio itemSalvo = treinoSalvo.getExercicios().get(j);
                
                assertNotNull(itemSalvo.getExercicio(), "O exercício não pode ser nulo");
                assertEquals(itemEsperado.getExercicio(), itemSalvo.getExercicio(),
                        "O exercício " + j + " do treino " + i + " deveria ter sido salvo corretamente");
                
                // VALIDA ATRIBUTOS DA REPETIÇÃO
                assertNotNull(itemSalvo.getRepeticao(), "A repetição não pode ser nula");
                assertEquals(itemEsperado.getRepeticao().getSeries(), itemSalvo.getRepeticao().getSeries(),
                        "As séries do exercício " + j + " do treino " + i + " deveriam ter sido salvas corretamente");
                assertEquals(itemEsperado.getRepeticao().getContagem(), itemSalvo.getRepeticao().getContagem(),
                        "A contagem do exercício " + j + " do treino " + i + " deveria ter sido salva corretamente");
            }
        }
    }

    // ===== CENÁRIO 2: Criar plano de treino com apenas treino "A" =====
    
    @Given("o aluno com matrícula {string} não possui plano de treino ativo")
    public void o_aluno_com_matricula_nao_possui_plano_de_treino_ativo(String matriculaStr) {
        matriculaAluno = new Matricula(matriculaStr);
        
        // Cria o aluno sem plano ativo
        Cpf cpf = new Cpf(matriculaStr.replaceAll("[^0-9]", ""));
        Aluno aluno = new Aluno(matriculaAluno, cpf, "Aluno Teste", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(aluno);
        
        // Define um professorId padrão para o teste
        professorId = new ProfessorId(1);
    }

    @When("o professorId {string} cria um plano de treino com apenas treino {string} de corpo inteiro")
    public void o_professor_id_cria_um_plano_de_treino_com_apenas_treino_de_corpo_inteiro(
            String professorIdStr, String letraA) {
        professorId = new ProfessorId(Integer.parseInt(professorIdStr));
        
        List<TreinoDiario> treinos = new ArrayList<>();
        treinos.add(criarTreinoDiario(LetraDoTreino.A, TipoDoTreino.CORPO_INTEIRO));
        
        try {
            planoCriado = contexto.treinoService.criarPlanoDeTreino(professorId, treinos);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Then("o plano de treino é criado com sucesso")
    public void o_plano_de_treino_e_criado_com_sucesso() {
        assertNull(contexto.excecao, "Não deveria ter ocorrido exceção");
        assertNotNull(planoCriado, "O plano de treino deveria ter sido criado");
        
        // BUSCA DO REPOSITÓRIO - valida que o service realmente persistiu
        Optional<PlanoDeTreino> planoDoRepositorio = contexto.repositorio.obterPorId(planoCriado.getId());
        assertTrue(planoDoRepositorio.isPresent(), 
                "O plano de treino deveria ter sido persistido no repositório");
        
        PlanoDeTreino planoSalvo = planoDoRepositorio.get();
        
        // VALIDA ATRIBUTOS DO PLANO DE TREINO
        assertNotNull(planoSalvo.getId(), "O ID do plano não pode ser nulo");
        assertEquals(planoCriado.getId(), planoSalvo.getId(),
                "O ID do plano deveria ser o mesmo");
        
        assertNotNull(planoSalvo.getProfessorId(), "O professorId não pode ser nulo");
        assertEquals(planoCriado.getProfessorId(), planoSalvo.getProfessorId(),
                "O professorId deveria ter sido salvo corretamente");
        
        assertNotNull(planoSalvo.getDataCriacao(), "A data de criação não pode ser nula");
        assertEquals(planoCriado.getDataCriacao(), planoSalvo.getDataCriacao(),
                "A data de criação deveria ter sido salva corretamente");
        
        assertNotNull(planoSalvo.getTreinosDaSemana(), "A lista de treinos não pode ser nula");
        assertTrue(planoSalvo.getTreinosDaSemana().size() > 0, 
                "O plano deveria conter pelo menos um treino");
        assertEquals(planoCriado.getTreinosDaSemana().size(), planoSalvo.getTreinosDaSemana().size(),
                "A quantidade de treinos deveria ser a mesma");
        
        // VALIDA ATRIBUTOS DOS TREINOS E EXERCÍCIOS
        for (int i = 0; i < planoCriado.getTreinosDaSemana().size(); i++) {
            TreinoDiario treinoEsperado = planoCriado.getTreinosDaSemana().get(i);
            TreinoDiario treinoSalvo = planoSalvo.getTreinosDaSemana().get(i);
            
            assertNotNull(treinoSalvo.getLetra(), "A letra do treino não pode ser nula");
            assertNotNull(treinoSalvo.getTipo(), "O tipo do treino não pode ser nulo");
            assertNotNull(treinoSalvo.getExercicios(), "A lista de exercícios não pode ser nula");
            
            assertEquals(treinoEsperado.getLetra(), treinoSalvo.getLetra(),
                    "A letra do treino deveria ter sido salva");
            assertEquals(treinoEsperado.getTipo(), treinoSalvo.getTipo(),
                    "O tipo do treino deveria ter sido salvo");
            
            // Valida que os exercícios foram salvos
            assertTrue(treinoSalvo.getExercicios().size() > 0,
                    "O treino deveria ter pelo menos um exercício");
            
            for (ItemDeExercicio item : treinoSalvo.getExercicios()) {
                assertNotNull(item.getExercicio(), "O exercício não pode ser nulo");
                assertNotNull(item.getRepeticao(), "A repetição não pode ser nula");
                assertTrue(item.getRepeticao().getSeries() > 0,
                        "As séries devem ser maiores que zero");
                assertNotNull(item.getRepeticao().getContagem(),
                        "A contagem não pode ser nula");
            }
        }
    }

    // ===== CENÁRIO 3: Criar plano de treino com todos os 7 dias da semana =====
    
    @Given("o aluno com matrícula {string} necessita de um plano completo")
    public void o_aluno_com_matricula_necessita_de_um_plano_completo(String matriculaStr) {
        matriculaAluno = new Matricula(matriculaStr);
        
        // Cria o aluno
        Cpf cpf = new Cpf(matriculaStr.replaceAll("[^0-9]", ""));
        Aluno aluno = new Aluno(matriculaAluno, cpf, "Aluno Completo", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(aluno);
        
        professorId = new ProfessorId(1);
    }

    @When("o professorId {string} cria um plano de treino com {int} treinos de {string} até {string}")
    public void o_professor_id_cria_um_plano_de_treino_com_treinos_de_ate(
            String professorIdStr, Integer quantidade, String letraInicial, String letraFinal) {
        professorId = new ProfessorId(Integer.parseInt(professorIdStr));
        
        List<TreinoDiario> treinos = new ArrayList<>();
        TipoDoTreino[] tipos = {
            TipoDoTreino.SUPERIORES, TipoDoTreino.INFERIORES, TipoDoTreino.PUSH,
            TipoDoTreino.PULL, TipoDoTreino.PERNAS, TipoDoTreino.FOCO_PEITO, TipoDoTreino.FOCO_COSTAS
        };
        
        for (int i = 0; i < quantidade && i < LetraDoTreino.values().length; i++) {
            treinos.add(criarTreinoDiario(LetraDoTreino.values()[i], tipos[i % tipos.length]));
        }
        
        try {
            planoCriado = contexto.treinoService.criarPlanoDeTreino(professorId, treinos);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Then("o plano de treino é criado com sucesso com {int} treinos diários")
    public void o_plano_de_treino_e_criado_com_sucesso_com_treinos_diarios_int(Integer quantidadeEsperada) {
        assertNull(contexto.excecao, "Não deveria ter ocorrido exceção");
        assertNotNull(planoCriado, "O plano de treino deveria ter sido criado");
        
        // BUSCA DO REPOSITÓRIO - valida que o service realmente persistiu
        Optional<PlanoDeTreino> planoDoRepositorio = contexto.repositorio.obterPorId(planoCriado.getId());
        assertTrue(planoDoRepositorio.isPresent(), 
                "O plano de treino deveria ter sido persistido no repositório");
        
        PlanoDeTreino planoSalvo = planoDoRepositorio.get();
        
        // VALIDA ATRIBUTOS DO PLANO DE TREINO
        assertNotNull(planoSalvo.getId(), "O ID do plano não pode ser nulo");
        assertEquals(planoCriado.getId(), planoSalvo.getId(),
                "O ID do plano deveria ser o mesmo");
        
        assertNotNull(planoSalvo.getProfessorId(), "O professorId não pode ser nulo");
        assertEquals(planoCriado.getProfessorId(), planoSalvo.getProfessorId(),
                "O professorId deveria ter sido salvo corretamente");
        
        assertNotNull(planoSalvo.getDataCriacao(), "A data de criação não pode ser nula");
        assertEquals(planoCriado.getDataCriacao(), planoSalvo.getDataCriacao(),
                "A data de criação deveria ter sido salva corretamente");
        
        assertNotNull(planoSalvo.getTreinosDaSemana(), "A lista de treinos não pode ser nula");
        assertEquals(quantidadeEsperada, planoSalvo.getTreinosDaSemana().size(),
                "Deveria ter " + quantidadeEsperada + " treinos diários");
        
        // VALIDA ATRIBUTOS DOS TREINOS E EXERCÍCIOS
        for (int i = 0; i < planoSalvo.getTreinosDaSemana().size(); i++) {
            TreinoDiario treinoSalvo = planoSalvo.getTreinosDaSemana().get(i);
            
            assertNotNull(treinoSalvo.getLetra(), "A letra do treino " + i + " não pode ser nula");
            assertNotNull(treinoSalvo.getTipo(), "O tipo do treino " + i + " não pode ser nulo");
            assertNotNull(treinoSalvo.getExercicios(), "A lista de exercícios do treino " + i + " não pode ser nula");
            assertTrue(treinoSalvo.getExercicios().size() > 0,
                    "O treino " + i + " deveria ter pelo menos um exercício");
            
            // Valida cada exercício e suas repetições
            for (int j = 0; j < treinoSalvo.getExercicios().size(); j++) {
                ItemDeExercicio item = treinoSalvo.getExercicios().get(j);
                
                assertNotNull(item.getExercicio(), 
                        "O exercício " + j + " do treino " + i + " não pode ser nulo");
                assertNotNull(item.getRepeticao(), 
                        "A repetição do exercício " + j + " do treino " + i + " não pode ser nula");
                assertTrue(item.getRepeticao().getSeries() > 0,
                        "As séries do exercício " + j + " do treino " + i + " devem ser maiores que zero");
                assertNotNull(item.getRepeticao().getContagem(),
                        "A contagem do exercício " + j + " do treino " + i + " não pode ser nula");
            }
        }
    }

    // ===== CENÁRIO 4: Tentar criar plano com 8 treinos (mais que o limite) =====
    
    @Given("o professorId {string} está criando um plano para o aluno com matrícula {string}")
    public void o_professor_id_esta_criando_um_plano_para_o_aluno_com_matricula(
            String professorIdStr, String matriculaStr) {
        professorId = new ProfessorId(Integer.parseInt(professorIdStr));
        matriculaAluno = new Matricula(matriculaStr);
        
        // Cria o aluno
        Cpf cpf = new Cpf(matriculaStr.replaceAll("[^0-9]", ""));
        Aluno aluno = new Aluno(matriculaAluno, cpf, "Aluno Teste", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(aluno);
    }

    @When("o professor tenta criar um plano de treino com {string} treinos diários")
    public void o_professor_tenta_criar_um_plano_de_treino_com_treinos_diarios(String quantidadeStr) {
        int quantidade = Integer.parseInt(quantidadeStr);
        
        List<TreinoDiario> treinos = new ArrayList<>();
        TipoDoTreino[] tipos = {
            TipoDoTreino.SUPERIORES, TipoDoTreino.INFERIORES, TipoDoTreino.PUSH,
            TipoDoTreino.PULL, TipoDoTreino.PERNAS, TipoDoTreino.FOCO_PEITO, 
            TipoDoTreino.FOCO_COSTAS, TipoDoTreino.BRACOS_COMPLETOS
        };
        
        // Tenta criar mais treinos do que o permitido
        for (int i = 0; i < quantidade; i++) {
            LetraDoTreino letra = (i < LetraDoTreino.values().length) 
                ? LetraDoTreino.values()[i] 
                : LetraDoTreino.G; // Usa a última letra disponível
            treinos.add(criarTreinoDiario(letra, tipos[i % tipos.length]));
        }
        
        try {
            planoCriado = contexto.treinoService.criarPlanoDeTreino(professorId, treinos);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Then("a criação do plano falha com mensagem informando que não é possível criar mais de {string} treinos")
    public void a_criacao_do_plano_falha_com_mensagem_informando_que_nao_e_possivel_criar_mais_de_treinos(
            String limiteStr) {
        assertNotNull(contexto.excecao, "Deveria ter ocorrido uma exceção");
        
        String mensagem = contexto.excecao.getMessage();
        assertTrue(mensagem.contains("não é possível") || 
                   mensagem.contains("superou") || 
                   mensagem.contains("limite") ||
                   mensagem.contains("máximo") ||
                   mensagem.contains(limiteStr),
                "A mensagem deveria indicar que o limite foi excedido. Mensagem recebida: " + mensagem);
    }

    // ===== CENÁRIO 5: Criar plano de treino com data de validade sugerida =====
    
    @Given("o aluno com matrícula {string} está iniciando um novo ciclo de treino")
    public void o_aluno_com_matricula_esta_iniciando_um_novo_ciclo_de_treino(String matriculaStr) {
        matriculaAluno = new Matricula(matriculaStr);
        
        // Cria o aluno
        Cpf cpf = new Cpf(matriculaStr.replaceAll("[^0-9]", ""));
        Aluno aluno = new Aluno(matriculaAluno, cpf, "Aluno Ciclo", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(aluno);
        
        professorId = new ProfessorId(1);
    }

    @When("o professorId {string} cria um plano de treino com validade sugerida de {string} dias")
    public void o_professor_id_cria_um_plano_de_treino_com_validade_sugerida_de_dias(
            String professorIdStr, String diasStr) {
        professorId = new ProfessorId(Integer.parseInt(professorIdStr));
        int dias = Integer.parseInt(diasStr);
        
        List<TreinoDiario> treinos = new ArrayList<>();
        treinos.add(criarTreinoDiario(LetraDoTreino.A, TipoDoTreino.SUPERIORES));
        treinos.add(criarTreinoDiario(LetraDoTreino.B, TipoDoTreino.INFERIORES));
        
        LocalDate validadeSugerida = LocalDate.now().plusDays(dias);
        
        try {
            planoCriado = contexto.treinoService.criarPlanoDeTreino(professorId, treinos, validadeSugerida);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Then("o plano de treino é criado com sucesso com validade de {string} dias")
    public void o_plano_de_treino_e_criado_com_sucesso_com_validade_de_dias(String diasStr) {
        assertNull(contexto.excecao, "Não deveria ter ocorrido exceção");
        assertNotNull(planoCriado, "O plano de treino deveria ter sido criado");
        
        // BUSCA DO REPOSITÓRIO - valida que o service realmente persistiu
        Optional<PlanoDeTreino> planoDoRepositorio = contexto.repositorio.obterPorId(planoCriado.getId());
        assertTrue(planoDoRepositorio.isPresent(), 
                "O plano de treino deveria ter sido persistido no repositório");
        
        PlanoDeTreino planoSalvo = planoDoRepositorio.get();
        
        // VALIDA ATRIBUTOS DO PLANO DE TREINO
        assertNotNull(planoSalvo.getId(), "O ID do plano não pode ser nulo");
        assertEquals(planoCriado.getId(), planoSalvo.getId(),
                "O ID do plano deveria ser o mesmo");
        
        assertNotNull(planoSalvo.getProfessorId(), "O professorId não pode ser nulo");
        assertEquals(planoCriado.getProfessorId(), planoSalvo.getProfessorId(),
                "O professorId deveria ter sido salvo corretamente");
        
        assertNotNull(planoSalvo.getDataCriacao(), "A data de criação não pode ser nula");
        assertEquals(planoCriado.getDataCriacao(), planoSalvo.getDataCriacao(),
                "A data de criação deveria ter sido salva corretamente");
        
        // VALIDA A DATA DE VALIDADE SUGERIDA
        assertNotNull(planoSalvo.getDataValidadeSugerida(), 
                "O plano deveria ter uma data de validade sugerida");
        assertEquals(planoCriado.getDataValidadeSugerida(), planoSalvo.getDataValidadeSugerida(),
                "A data de validade sugerida deveria ter sido salva corretamente");
        
        int dias = Integer.parseInt(diasStr);
        LocalDate validadeEsperada = LocalDate.now().plusDays(dias);
        assertEquals(validadeEsperada, planoSalvo.getDataValidadeSugerida(),
                "A validade deveria ser de " + dias + " dias a partir de hoje");
        
        // VALIDA ATRIBUTOS DOS TREINOS
        assertNotNull(planoSalvo.getTreinosDaSemana(), "A lista de treinos não pode ser nula");
        assertTrue(planoSalvo.getTreinosDaSemana().size() > 0,
                "O plano deveria ter pelo menos um treino");
        
        for (TreinoDiario treino : planoSalvo.getTreinosDaSemana()) {
            assertNotNull(treino.getLetra(), "A letra do treino não pode ser nula");
            assertNotNull(treino.getTipo(), "O tipo do treino não pode ser nulo");
            assertNotNull(treino.getExercicios(), "A lista de exercícios não pode ser nula");
            assertTrue(treino.getExercicios().size() > 0,
                    "O treino deveria ter pelo menos um exercício");
            
            // Valida exercícios e repetições
            for (ItemDeExercicio item : treino.getExercicios()) {
                assertNotNull(item.getExercicio(), "O exercício não pode ser nulo");
                assertNotNull(item.getRepeticao(), "A repetição não pode ser nula");
                assertTrue(item.getRepeticao().getSeries() > 0,
                        "As séries devem ser maiores que zero");
                assertNotNull(item.getRepeticao().getContagem(),
                        "A contagem não pode ser nula");
            }
        }
    }

    // ===== CENÁRIO 6: Criar plano de treino sem data de validade =====
    
    @Given("o aluno com matrícula {string} necessita de um plano permanente")
    public void o_aluno_com_matricula_necessita_de_um_plano_permanente(String matriculaStr) {
        matriculaAluno = new Matricula(matriculaStr);
        
        // Cria o aluno
        Cpf cpf = new Cpf(matriculaStr.replaceAll("[^0-9]", ""));
        Aluno aluno = new Aluno(matriculaAluno, cpf, "Aluno Permanente", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(aluno);
        
        professorId = new ProfessorId(1);
    }

    @When("o professorId {string} cria um plano de treino sem validade sugerida")
    public void o_professor_id_cria_um_plano_de_treino_sem_validade_sugerida(String professorIdStr) {
        professorId = new ProfessorId(Integer.parseInt(professorIdStr));
        
        List<TreinoDiario> treinos = new ArrayList<>();
        treinos.add(criarTreinoDiario(LetraDoTreino.A, TipoDoTreino.CORPO_INTEIRO));
        
        try {
            // Chama o método sem validade sugerida (passa null implicitamente)
            planoCriado = contexto.treinoService.criarPlanoDeTreino(professorId, treinos);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Then("o plano de treino é criado com sucesso sem data de validade")
    public void o_plano_de_treino_e_criado_com_sucesso_sem_data_de_validade() {
        assertNull(contexto.excecao, "Não deveria ter ocorrido exceção");
        assertNotNull(planoCriado, "O plano de treino deveria ter sido criado");
        
        // BUSCA DO REPOSITÓRIO - valida que o service realmente persistiu
        Optional<PlanoDeTreino> planoDoRepositorio = contexto.repositorio.obterPorId(planoCriado.getId());
        assertTrue(planoDoRepositorio.isPresent(), 
                "O plano de treino deveria ter sido persistido no repositório");
        
        PlanoDeTreino planoSalvo = planoDoRepositorio.get();
        
        // VALIDA ATRIBUTOS DO PLANO DE TREINO
        assertNotNull(planoSalvo.getId(), "O ID do plano não pode ser nulo");
        assertEquals(planoCriado.getId(), planoSalvo.getId(),
                "O ID do plano deveria ser o mesmo");
        
        assertNotNull(planoSalvo.getProfessorId(), "O professorId não pode ser nulo");
        assertEquals(planoCriado.getProfessorId(), planoSalvo.getProfessorId(),
                "O professorId deveria ter sido salvo corretamente");
        
        assertNotNull(planoSalvo.getDataCriacao(), "A data de criação não pode ser nula");
        assertEquals(planoCriado.getDataCriacao(), planoSalvo.getDataCriacao(),
                "A data de criação deveria ter sido salva corretamente");
        
        // VALIDA QUE NÃO TEM DATA DE VALIDADE
        assertNull(planoSalvo.getDataValidadeSugerida(), 
                "O plano não deveria ter data de validade sugerida");
        assertEquals(planoCriado.getDataValidadeSugerida(), planoSalvo.getDataValidadeSugerida(),
                "A data de validade deveria ser null tanto no criado quanto no salvo");
        
        assertTrue(planoSalvo.isAtivo(), "O plano deveria estar ativo (permanente)");
        
        // VALIDA ATRIBUTOS DOS TREINOS
        assertNotNull(planoSalvo.getTreinosDaSemana(), "A lista de treinos não pode ser nula");
        assertTrue(planoSalvo.getTreinosDaSemana().size() > 0,
                "O plano deveria ter pelo menos um treino");
        assertEquals(planoCriado.getTreinosDaSemana().size(), planoSalvo.getTreinosDaSemana().size(),
                "A quantidade de treinos deveria ser a mesma");
        
        for (int i = 0; i < planoSalvo.getTreinosDaSemana().size(); i++) {
            TreinoDiario treinoEsperado = planoCriado.getTreinosDaSemana().get(i);
            TreinoDiario treinoSalvo = planoSalvo.getTreinosDaSemana().get(i);
            
            assertNotNull(treinoSalvo.getLetra(), "A letra do treino não pode ser nula");
            assertNotNull(treinoSalvo.getTipo(), "O tipo do treino não pode ser nulo");
            assertNotNull(treinoSalvo.getExercicios(), "A lista de exercícios não pode ser nula");
            
            assertEquals(treinoEsperado.getLetra(), treinoSalvo.getLetra(),
                    "A letra do treino deveria ter sido salva");
            assertEquals(treinoEsperado.getTipo(), treinoSalvo.getTipo(),
                    "O tipo do treino deveria ter sido salvo");
            
            // Valida exercícios e repetições
            assertTrue(treinoSalvo.getExercicios().size() > 0,
                    "O treino deveria ter pelo menos um exercício");
            assertEquals(treinoEsperado.getExercicios().size(), treinoSalvo.getExercicios().size(),
                    "A quantidade de exercícios deveria ser a mesma");
            
            for (int j = 0; j < treinoSalvo.getExercicios().size(); j++) {
                ItemDeExercicio itemEsperado = treinoEsperado.getExercicios().get(j);
                ItemDeExercicio itemSalvo = treinoSalvo.getExercicios().get(j);
                
                assertNotNull(itemSalvo.getExercicio(), "O exercício não pode ser nulo");
                assertNotNull(itemSalvo.getRepeticao(), "A repetição não pode ser nula");
                
                assertEquals(itemEsperado.getExercicio(), itemSalvo.getExercicio(),
                        "O exercício deveria ter sido salvo corretamente");
                assertEquals(itemEsperado.getRepeticao().getSeries(), itemSalvo.getRepeticao().getSeries(),
                        "As séries deveriam ter sido salvas corretamente");
                assertEquals(itemEsperado.getRepeticao().getContagem(), itemSalvo.getRepeticao().getContagem(),
                        "A contagem deveria ter sido salva corretamente");
            }
        }
    }

    // ===== MÉTODOS AUXILIARES =====
    
    private TreinoDiario criarTreinoDiario(LetraDoTreino letra, TipoDoTreino tipo) {
        List<ItemDeExercicio> exercicios = criarExerciciosPadrao(tipo);
        return new TreinoDiario(letra, tipo, exercicios);
    }
    
    private List<ItemDeExercicio> criarExerciciosPadrao(TipoDoTreino tipo) {
        List<ItemDeExercicio> exercicios = new ArrayList<>();
        
        switch (tipo) {
            case INFERIORES:
            case PERNAS:
                exercicios.add(criarItemExercicio(Exercicio.AGACHAMENTO_LIVRE_COM_BARRA));
                exercicios.add(criarItemExercicio(Exercicio.LEG_PRESS_45));
                exercicios.add(criarItemExercicio(Exercicio.CADEIRA_EXTENSORA));
                break;
            case SUPERIORES:
                exercicios.add(criarItemExercicio(Exercicio.SUPINO_RETO));
                exercicios.add(criarItemExercicio(Exercicio.PUXADA_ALTA_PULLEY_FRENTE));
                exercicios.add(criarItemExercicio(Exercicio.DESENVOLVIMENTO_MILITAR_COM_BARRA));
                break;
            case PUSH:
                exercicios.add(criarItemExercicio(Exercicio.SUPINO_RETO));
                exercicios.add(criarItemExercicio(Exercicio.SUPINO_INCLINADO));
                exercicios.add(criarItemExercicio(Exercicio.DESENVOLVIMENTO_MILITAR_COM_BARRA));
                break;
            case PULL:
                exercicios.add(criarItemExercicio(Exercicio.PUXADA_ALTA_PULLEY_FRENTE));
                exercicios.add(criarItemExercicio(Exercicio.REMADA_CURVADA_COM_BARRA));
                exercicios.add(criarItemExercicio(Exercicio.ROSCA_DIRETA_COM_BARRA));
                break;
            case FOCO_PEITO:
                exercicios.add(criarItemExercicio(Exercicio.SUPINO_RETO));
                exercicios.add(criarItemExercicio(Exercicio.SUPINO_INCLINADO));
                exercicios.add(criarItemExercicio(Exercicio.CRUCIFIXO_COM_HALTERES));
                break;
            case FOCO_COSTAS:
                exercicios.add(criarItemExercicio(Exercicio.PUXADA_ALTA_PULLEY_FRENTE));
                exercicios.add(criarItemExercicio(Exercicio.REMADA_CURVADA_COM_BARRA));
                exercicios.add(criarItemExercicio(Exercicio.REMADA_SENTADA_NA_POLIA));
                break;
            case BRACOS_COMPLETOS:
                exercicios.add(criarItemExercicio(Exercicio.ROSCA_DIRETA_COM_BARRA));
                exercicios.add(criarItemExercicio(Exercicio.ROSCA_MARTELO));
                exercicios.add(criarItemExercicio(Exercicio.TRICEPS_TESTA));
                break;
            case CORPO_INTEIRO:
            default:
                exercicios.add(criarItemExercicio(Exercicio.SUPINO_RETO));
                exercicios.add(criarItemExercicio(Exercicio.AGACHAMENTO_LIVRE_COM_BARRA));
                exercicios.add(criarItemExercicio(Exercicio.REMADA_CURVADA_COM_BARRA));
                break;
        }
        
        return exercicios;
    }
    
    private ItemDeExercicio criarItemExercicio(Exercicio exercicio) {
        Repeticao repeticao = new Repeticao(3, "10-12");
        return new ItemDeExercicio(exercicio, repeticao);
    }
}
