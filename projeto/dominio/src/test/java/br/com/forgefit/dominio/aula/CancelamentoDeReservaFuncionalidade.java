package br.com.forgefit.dominio.aula;

import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

import br.com.forgefit.dominio.AcademiaFuncionalidade;
import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aula.enums.Espaco;
import br.com.forgefit.dominio.aula.enums.Modalidade;
import br.com.forgefit.dominio.aula.enums.StatusReserva;
import br.com.forgefit.dominio.professor.ProfessorId;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.en.And;

/**
 * Step definitions para cancelamento de reserva com política de reembolso.
 */
public class CancelamentoDeReservaFuncionalidade {
    
    private final AcademiaFuncionalidade contexto;
    
    private Matricula matriculaAluno;
    private Aula aulaCriada;
    private LocalDate dataCancelamento;
    private String mensagemResposta;
    private DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    public CancelamentoDeReservaFuncionalidade(AcademiaFuncionalidade contexto) {
        this.contexto = contexto;
    }

    // ========== CENÁRIO 1: Cancelamento com reembolso total ==========

    @Given("existe uma reserva confirmada para o aluno com matrícula {string} no dia {string} às {string} com duração de {string}")
    public void existe_uma_reserva_confirmada_para_o_aluno_com_matricula_no_dia(String matriculaStr, String dataStr, String horario, String duracao) {
        matriculaAluno = new Matricula(matriculaStr);
        
        // Cria CPF baseado na matrícula (apenas para testes)
        Cpf cpf = new Cpf(matriculaStr.replaceAll("[^0-9]", "").substring(0, 11));
        Aluno aluno = new Aluno(matriculaAluno, cpf, "Aluno Teste", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(aluno);

        // Parse da data e hora
        LocalDate data = LocalDate.parse(dataStr, dateFormatter);
        String[] partesHorario = horario.split(":");
        int hora = Integer.parseInt(partesHorario[0]);
        int minuto = Integer.parseInt(partesHorario[1]);
        
        // Parse da duração
        int duracaoMinutos = Integer.parseInt(duracao.replace(" minutos", "").trim());

        LocalDateTime inicio = LocalDateTime.of(data, java.time.LocalTime.of(hora, minuto));
        LocalDateTime fim = inicio.plusMinutes(duracaoMinutos);

        aulaCriada = contexto.aulaService.criarAulaUnica(
                new ProfessorId(1),
                Modalidade.YOGA,
                Espaco.ESTUDIO_PILATES,
                20,
                inicio,
                fim
        );

        // Cria a reserva
        contexto.reservaService.reservarVaga(matriculaAluno, aulaCriada.getId());
    }

    @When("o aluno solicita o cancelamento em {string}")
    public void o_aluno_solicita_o_cancelamento_em(String dataStr) {
        dataCancelamento = LocalDate.parse(dataStr, dateFormatter);
        LocalDateTime momentoCancelamento = dataCancelamento.atStartOfDay();
        
        try {
            // Cancela a reserva e obtém a mensagem diretamente do service
            mensagemResposta = contexto.reservaService.cancelarReserva(matriculaAluno, aulaCriada.getId(), momentoCancelamento);
            
        } catch (IllegalArgumentException e) {
            contexto.excecao = e;
            mensagemResposta = "nenhuma reserva encontrada para cancelamento";
        } catch (Exception e) {
            contexto.excecao = e;
            mensagemResposta = e.getMessage();
        }
    }

    @Then("o sistema informa {string}")
    public void o_sistema_informa(String mensagemEsperada) {
        assertNotNull(mensagemResposta);
        assertEquals(mensagemEsperada, mensagemResposta);
        
        // Valida que a reserva foi realmente cancelada no repositório
        if (!mensagemEsperada.equals("nenhuma reserva encontrada para cancelamento")) {
            // Busca a aula do repositório para validar persistência
            Optional<Aula> aulaDoRepositorio = contexto.repositorio.obterPorId(aulaCriada.getId());
            assertTrue(aulaDoRepositorio.isPresent(), "A aula deveria estar persistida no repositório");
            
            Aula aulaSalva = aulaDoRepositorio.get();
            Optional<Reserva> reservaSalva = aulaSalva.obterReserva(matriculaAluno);
            
            assertTrue(reservaSalva.isPresent(), "A reserva deveria existir no repositório");
            assertEquals(StatusReserva.CANCELADA_PELO_ALUNO, reservaSalva.get().getStatus(),
                    "O status da reserva deveria ser CANCELADA_PELO_ALUNO no repositório");
        }
    }

    // ========== CENÁRIO 7: Cancelamento duplicado ==========

    @And("o aluno já realizou o cancelamento desta reserva")
    public void o_aluno_ja_realizou_o_cancelamento_desta_reserva() {
        // Cancela a reserva pela primeira vez
        dataCancelamento = LocalDate.parse("10/09/2025", dateFormatter);
        contexto.reservaService.cancelarReserva(matriculaAluno, aulaCriada.getId(), dataCancelamento.atStartOfDay());
    }

    @When("o aluno solicita novo cancelamento da mesma reserva")
    public void o_aluno_solicita_novo_cancelamento_da_mesma_reserva() {
        try {
            contexto.reservaService.cancelarReserva(matriculaAluno, aulaCriada.getId(), dataCancelamento.atStartOfDay());
            mensagemResposta = "cancelamento realizado";
        } catch (IllegalArgumentException e) {
            // A exceção vem de Aula.cancelarReserva() com mensagem "Reserva não encontrada para este aluno"
            contexto.excecao = e;
            mensagemResposta = "nenhuma reserva encontrada para cancelamento";
        }
    }

    // ========== CENÁRIO 9: Cancelar reserva inexistente ==========

    @Given("não existe reserva confirmada para o aluno com matrícula {string} na data {string} às {string}")
    public void nao_existe_reserva_confirmada_para_o_aluno_com_matricula_na_data(String matriculaStr, String dataStr, String horario) {
        matriculaAluno = new Matricula(matriculaStr);
        
        // Cria CPF baseado na matrícula (apenas para testes)
        Cpf cpf = new Cpf(matriculaStr.replaceAll("[^0-9]", "").substring(0, 11));
        Aluno aluno = new Aluno(matriculaAluno, cpf, "Aluno Sem Reserva", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(aluno);

        // Parse da data e hora
        LocalDate data = LocalDate.parse(dataStr, dateFormatter);
        String[] partesHorario = horario.split(":");
        int hora = Integer.parseInt(partesHorario[0]);
        int minuto = Integer.parseInt(partesHorario[1]);

        LocalDateTime inicio = LocalDateTime.of(data, java.time.LocalTime.of(hora, minuto));
        LocalDateTime fim = inicio.plusMinutes(45);

        aulaCriada = contexto.aulaService.criarAulaUnica(
                new ProfessorId(1),
                Modalidade.SPINNING,
                Espaco.SALA03_SPINNING,
                15,
                inicio,
                fim
        );

        // NÃO cria reserva - este é o ponto do cenário
    }
}
