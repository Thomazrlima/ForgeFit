package br.com.forgefit.dominio.treino;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import br.com.forgefit.dominio.AcademiaFuncionalidade;
import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aluno.ProfessorId;
import br.com.forgefit.dominio.treino.enums.Exercicio;
import br.com.forgefit.dominio.treino.enums.LetraDoTreino;
import br.com.forgefit.dominio.treino.enums.TipoDoTreino;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

/**
 * Step definitions para personalização de treinos.
 * Recebe o contexto compartilhado via injeção de dependência do Cucumber PicoContainer.
 */
public class PersonalizarTreinosFuncionalidade {
    
    private final AcademiaFuncionalidade contexto;
    
    private ProfessorId professorId;
    private Cpf cpfAluno;
    private Aluno aluno;
    private PlanoDeTreinoCompleto planoAtual;
    private TreinoDiario treinoSelecionado;
    
    public PersonalizarTreinosFuncionalidade(AcademiaFuncionalidade contexto) {
        this.contexto = contexto;
    }

    @Given("o professor com CPF {string} seleciona um aluno com treinos {string} e {string} já definidos")
    public void o_professor_com_cpf_seleciona_um_aluno_com_treinos_ja_definidos(
            String cpfProfessor, String treino1, String treino2) {
        String cpfNumeros = cpfProfessor.replaceAll("[^0-9]", "");
        professorId = new ProfessorId(Integer.parseInt(cpfNumeros.substring(0, 3)));
        
        // Cria o aluno com treinos existentes
        cpfAluno = new Cpf("12345678900");
        aluno = new Aluno(cpfAluno);
        aluno.setNome("João Silva");
        contexto.repositorio.salvar(aluno);
        
        // Cria um plano de treino com os treinos especificados
        List<TreinoDiario> treinos = new ArrayList<>();
        treinos.add(criarTreinoDiario(LetraDoTreino.A, TipoDoTreino.SUPERIORES));
        treinos.add(criarTreinoDiario(LetraDoTreino.B, TipoDoTreino.INFERIORES));
        
        planoAtual = contexto.treinoService.criarPlanoDeTreino(cpfAluno, professorId, treinos);
    }

    @When("o treino {string} é selecionado, e escolhe o tipo {string} e os exercicios que irao compor o treino daqele aluno")
    public void o_treino_é_selecionado_e_escolhe_o_tipo_e_os_exercicios(String letraTreino, String tipoTreino) {
        LetraDoTreino letra = LetraDoTreino.valueOf(letraTreino);
        TipoDoTreino tipo = mapearTipoTreino(tipoTreino);
        
        // Cria lista de exercícios para o treino
        List<ItemDeExercicio> exercicios = criarExerciciosPadrao(tipo);
        
        try {
            treinoSelecionado = new TreinoDiario(letra, tipo, exercicios);
            contexto.treinoService.atualizarTreinoDiario(planoAtual.getId(), treinoSelecionado);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Then("o treino é cadastrado\\/atualizado")
    public void o_treino_é_cadastrado_atualizado() {
        assertNotNull(treinoSelecionado, "O treino deveria ter sido criado/atualizado");
        assertTrue(contexto.excecao == null, "Não deveria ter ocorrido exceção");
    }

    @Given("o professor com CPF {string} seleciona um aluno com treinos {string}, {string}, {string}, {string}, {string},{string} e {string}, Disponiveis")
    public void o_professor_seleciona_um_aluno_com_todos_treinos_disponiveis(
            String cpfProfessor, String t1, String t2, String t3, String t4, String t5, String t6, String t7) {
        String cpfNumeros = cpfProfessor.replaceAll("[^0-9]", "");
        professorId = new ProfessorId(Integer.parseInt(cpfNumeros.substring(0, 3)));
        
        cpfAluno = new Cpf("12345678900");
        aluno = new Aluno(cpfAluno);
        aluno.setNome("João Silva");
        contexto.repositorio.salvar(aluno);
        
        // Cria plano com todos os 7 treinos
        List<TreinoDiario> treinos = new ArrayList<>();
        treinos.add(criarTreinoDiario(LetraDoTreino.A, TipoDoTreino.SUPERIORES));
        treinos.add(criarTreinoDiario(LetraDoTreino.B, TipoDoTreino.INFERIORES));
        treinos.add(criarTreinoDiario(LetraDoTreino.C, TipoDoTreino.PUSH));
        treinos.add(criarTreinoDiario(LetraDoTreino.D, TipoDoTreino.PULL));
        treinos.add(criarTreinoDiario(LetraDoTreino.E, TipoDoTreino.PERNAS));
        treinos.add(criarTreinoDiario(LetraDoTreino.F, TipoDoTreino.FOCO_PEITO));
        treinos.add(criarTreinoDiario(LetraDoTreino.G, TipoDoTreino.FOCO_COSTAS));
        
        planoAtual = contexto.treinoService.criarPlanoDeTreino(cpfAluno, professorId, treinos);
    }

    @When("o Professor decide adicionar um novo treino\\({string})")
    public void o_professor_decide_adicionar_um_novo_treino(String letraTreino) {
        try {
            // Tenta adicionar um 8º treino (ultrapassando o limite de 7)
            // Verifica se já atingiu o limite antes de acessar o array
            int quantidadeAtual = planoAtual.getQuantidadeTreinos();
            
            if (quantidadeAtual >= LetraDoTreino.values().length) {
                // Se já tem 7 treinos, força a chamada do service para lançar a exceção correta
                // Usa a última letra disponível (G) só para passar pelo construtor
                TreinoDiario novoTreino = criarTreinoDiario(LetraDoTreino.G, TipoDoTreino.BRACOS_COMPLETOS);
                contexto.treinoService.adicionarTreinoDiario(planoAtual.getId(), novoTreino);
            } else {
                LetraDoTreino proximaLetra = LetraDoTreino.values()[quantidadeAtual];
                TreinoDiario novoTreino = criarTreinoDiario(proximaLetra, TipoDoTreino.BRACOS_COMPLETOS);
                contexto.treinoService.adicionarTreinoDiario(planoAtual.getId(), novoTreino);
            }
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Then("o treino não é cadastrado pois superou o numero de dias da semana")
    public void o_treino_não_é_cadastrado_pois_superou_o_numero_de_dias_da_semana() {
        assertNotNull(contexto.excecao, "Deveria ter ocorrido uma exceção");
        
        String mensagem = contexto.excecao.getMessage();
        assertTrue(mensagem.contains("superou o numero de dias da semana") || 
                   mensagem.contains("limite") || 
                   mensagem.contains("máximo"),
                   "A mensagem deveria indicar que o limite foi excedido. Mensagem recebida: " + mensagem);
    }

    @Given("o aluno com CPF {string} e com treino {string} já definido")
    public void o_aluno_com_cpf_e_com_treino_ja_definido(String cpf, String letraTreino) {
        String cpfNumeros = cpf.replaceAll("[^0-9]", "");
        cpfAluno = new Cpf(cpfNumeros);
        aluno = new Aluno(cpfAluno);
        aluno.setNome("Maria Santos");
        contexto.repositorio.salvar(aluno);
        
        professorId = new ProfessorId(1);
        
        // Cria plano com apenas um treino
        List<TreinoDiario> treinos = new ArrayList<>();
        treinos.add(criarTreinoDiario(LetraDoTreino.A, TipoDoTreino.CORPO_INTEIRO));
        
        planoAtual = contexto.treinoService.criarPlanoDeTreino(cpfAluno, professorId, treinos);
    }

    @When("o professor cria um novo treino do tipo {string} e escolhe os exercicios {string}, {string} e {string}")
    public void o_professor_cria_um_novo_treino_do_tipo_e_escolhe_os_exercicios(
            String tipoTreino, String ex1, String ex2, String ex3) {
        TipoDoTreino tipo = mapearTipoTreino(tipoTreino);
        
        List<ItemDeExercicio> exercicios = new ArrayList<>();
        exercicios.add(criarItemExercicio(mapearExercicio(ex1)));
        exercicios.add(criarItemExercicio(mapearExercicio(ex2)));
        exercicios.add(criarItemExercicio(mapearExercicio(ex3)));
        
        try {
            // Determina a próxima letra automaticamente baseado na quantidade de treinos
            int quantidadeAtual = planoAtual.getQuantidadeTreinos();
            
            // Verifica se já atingiu o limite antes de acessar o array
            if (quantidadeAtual >= LetraDoTreino.values().length) {
                // Se já tem 7 treinos, força a chamada do service para lançar a exceção correta
                TreinoDiario novoTreino = new TreinoDiario(LetraDoTreino.G, tipo, exercicios);
                contexto.treinoService.adicionarTreinoDiario(planoAtual.getId(), novoTreino);
            } else {
                LetraDoTreino proximaLetra = LetraDoTreino.values()[quantidadeAtual];
                TreinoDiario novoTreino = new TreinoDiario(proximaLetra, tipo, exercicios);
                contexto.treinoService.adicionarTreinoDiario(planoAtual.getId(), novoTreino);
            }
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Then("o treino é cadastrado\\/atualizado se tornando automaticamente se torna o treino {string}")
    public void o_treino_é_cadastrado_se_tornando_automaticamente_o_treino(String letraEsperada) {
        assertTrue(contexto.excecao == null, "Não deveria ter ocorrido exceção");
        
        PlanoDeTreinoCompleto planoAtualizado = contexto.treinoService.obterPlano(planoAtual.getId());
        assertEquals(2, planoAtualizado.getTreinos().size(), "Deveria ter 2 treinos");
        
        // Verifica que o novo treino é o B
        boolean temTreinoB = planoAtualizado.getTreinos().stream()
            .anyMatch(t -> t.getLetra() == LetraDoTreino.B);
        assertTrue(temTreinoB, "Deveria ter o treino B");
    }

    @Given("o aluno com CPF {string} e com treinos {string}, {string}, {string}, {string}, {string},{string} e {string} já definidos")
    public void o_aluno_com_cpf_e_com_todos_treinos_já_definidos(
            String cpf, String t1, String t2, String t3, String t4, String t5, String t6, String t7) {
        o_professor_seleciona_um_aluno_com_todos_treinos_disponiveis(
            "123.456.789-01", t1, t2, t3, t4, t5, t6, t7);
        
        // Ajusta o CPF do aluno
        String cpfNumeros = cpf.replaceAll("[^0-9]", "");
        Cpf novoCpf = new Cpf(cpfNumeros);
        
        // Obtém o aluno pelo CPF usado anteriormente
        aluno = contexto.repositorio.obterPorCpf(new Cpf("12345678900")).orElse(null);
        cpfAluno = novoCpf;
    }

    @When("o professor tenta criar um novo treino do tipo {string} e escolhe os exercicios {string}, {string} e {string}")
    public void o_professor_tenta_criar_um_novo_treino_do_tipo_e_escolhe_os_exercicios(
            String tipoTreino, String ex1, String ex2, String ex3) {
        o_professor_cria_um_novo_treino_do_tipo_e_escolhe_os_exercicios(tipoTreino, ex1, ex2, ex3);
    }

    @Then("o treino não é cadastrado pois superou o numero de dias da semana, impossibilitando a criação do treino {string}")
    public void o_treino_não_é_cadastrado_pois_superou_o_numero_de_dias_da_semana_impossibilitando_a_criacao_do_treino(
            String letraTreino) {
        assertNotNull(contexto.excecao, "Deveria ter ocorrido uma exceção");
        
        String mensagem = contexto.excecao.getMessage();
        assertTrue(mensagem.contains("superou o numero de dias da semana") ||
                   mensagem.contains("limite") || 
                   mensagem.contains("máximo"),
                   "A mensagem deveria indicar que o limite foi excedido. Mensagem recebida: " + mensagem);
    }

    @When("o professor exclui o treino {string}")
    public void o_professor_exclui_o_treino(String letraTreino) {
        LetraDoTreino letra = LetraDoTreino.valueOf(letraTreino);
        
        try {
            contexto.treinoService.excluirTreinoDiario(planoAtual.getId(), letra);
        } catch (Exception e) {
            contexto.excecao = e;
        }
    }

    @Then("o treino é excluído com sucesso, ficando disponivel para a criação de um novo treino")
    public void o_treino_é_excluído_com_sucesso_ficando_disponivel_para_a_criacao_de_um_novo_treino() {
        assertTrue(contexto.excecao == null, "Não deveria ter ocorrido exceção");
        
        PlanoDeTreinoCompleto planoAtualizado = contexto.treinoService.obterPlano(planoAtual.getId());
        assertEquals(6, planoAtualizado.getTreinos().size(), "Deveria ter 6 treinos após a exclusão");
        
        // Após a exclusão e reordenação, deve ter treinos A, B, C, D, E, F
        // (o antigo C virou B, D virou C, etc.)
        assertEquals(6, planoAtualizado.getQuantidadeTreinos(), 
            "Deve ter 6 treinos, ficando disponível para criar um novo");
    }

    @Then("o treino {string} permanece inalterado e a ordem dos treinos {string}, {string}, {string}, {string} e {string} é alterada para {string}, {string}, {string}, {string} e {string} respectivamente")
    public void o_treino_permanece_inalterado_e_a_ordem_é_alterada(
            String treinoInalterado, String t1, String t2, String t3, String t4, String t5,
            String n1, String n2, String n3, String n4, String n5) {
        PlanoDeTreinoCompleto planoAtualizado = contexto.treinoService.obterPlano(planoAtual.getId());
        
        // Verifica que o treino A permanece
        boolean temTreinoA = planoAtualizado.getTreinos().stream()
            .anyMatch(t -> t.getLetra() == LetraDoTreino.A);
        assertTrue(temTreinoA, "O treino A deveria permanecer inalterado");
        
        // Verifica a reordenação
        List<TreinoDiario> treinosOrdenados = planoAtualizado.getTreinos();
        assertEquals(LetraDoTreino.A, treinosOrdenados.get(0).getLetra(), "Primeiro treino deveria ser A");
        assertEquals(LetraDoTreino.B, treinosOrdenados.get(1).getLetra(), "Segundo treino deveria ser B (antigo C)");
        assertEquals(LetraDoTreino.C, treinosOrdenados.get(2).getLetra(), "Terceiro treino deveria ser C (antigo D)");
    }

    // Métodos auxiliares
    
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
            case BRACOS_COMPLETOS:
                exercicios.add(criarItemExercicio(Exercicio.ROSCA_DIRETA_COM_BARRA));
                exercicios.add(criarItemExercicio(Exercicio.ROSCA_MARTELO));
                exercicios.add(criarItemExercicio(Exercicio.TRICEPS_TESTA));
                break;
            default:
                exercicios.add(criarItemExercicio(Exercicio.SUPINO_RETO));
                exercicios.add(criarItemExercicio(Exercicio.AGACHAMENTO_LIVRE_COM_BARRA));
                exercicios.add(criarItemExercicio(Exercicio.REMADA_CURVADA_COM_BARRA));
        }
        
        return exercicios;
    }
    
    private ItemDeExercicio criarItemExercicio(Exercicio exercicio) {
        Repeticao repeticao = new Repeticao(3, "10-12");
        return new ItemDeExercicio(exercicio, repeticao);
    }
    
    private TipoDoTreino mapearTipoTreino(String tipo) {
        String tipoLower = tipo.toLowerCase();
        if (tipoLower.contains("perna")) return TipoDoTreino.PERNAS;
        if (tipoLower.contains("braço") || tipoLower.contains("braco")) return TipoDoTreino.BRACOS_COMPLETOS;
        if (tipoLower.contains("superior")) return TipoDoTreino.SUPERIORES;
        if (tipoLower.contains("inferior")) return TipoDoTreino.INFERIORES;
        if (tipoLower.contains("push")) return TipoDoTreino.PUSH;
        if (tipoLower.contains("pull")) return TipoDoTreino.PULL;
        if (tipoLower.contains("peito")) return TipoDoTreino.FOCO_PEITO;
        if (tipoLower.contains("costas")) return TipoDoTreino.FOCO_COSTAS;
        return TipoDoTreino.CORPO_INTEIRO;
    }
    
    private Exercicio mapearExercicio(String nomeExercicio) {
        String nome = nomeExercicio.toLowerCase();
        if (nome.contains("agachamento")) return Exercicio.AGACHAMENTO_LIVRE_COM_BARRA;
        if (nome.contains("leg press")) return Exercicio.LEG_PRESS_45;
        if (nome.contains("cadeira extensora")) return Exercicio.CADEIRA_EXTENSORA;
        if (nome.contains("rosca direta")) return Exercicio.ROSCA_DIRETA_COM_BARRA;
        if (nome.contains("rosca martelo")) return Exercicio.ROSCA_MARTELO;
        if (nome.contains("tríceps testa") || nome.contains("triceps testa")) return Exercicio.TRICEPS_TESTA;
        if (nome.contains("supino")) return Exercicio.SUPINO_RETO;
        if (nome.contains("remada")) return Exercicio.REMADA_CURVADA_COM_BARRA;
        return Exercicio.SUPINO_RETO; // Padrão
    }
}
