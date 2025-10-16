package br.com.forgefit.dominio.frequencia;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

import br.com.forgefit.dominio.AcademiaFuncionalidade;
import br.com.forgefit.dominio.aluno.AlunoId;
import br.com.forgefit.dominio.aula.AulaId;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class FrequenciaBloqueioFuncionalidade extends AcademiaFuncionalidade {

    private final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private final AlunoId ALUNO_ID = new AlunoId("12345");
    private final AulaId AULA_ID = new AulaId(101);

    private LocalDateTime dataHoraAula;
    private LocalDate dataTentativaReserva;
    private String resultadoAcao;
    private String statusAluno;

    @Given("o aluno {string} está matriculado em uma aula agendada no dia {string} com horário {string} e duração de {string}")
    public void o_aluno_esta_matriculado_em_uma_aula_agendada_no_dia_com_horario_e_duracao_de(
            String status, String dataAula, String horaAula, String duracao) {
        resetarContexto();
        statusAluno = status;

        LocalDate data = LocalDate.parse(dataAula, DATE_FORMATTER);
        LocalTime hora = LocalTime.parse(horaAula);
        this.dataHoraAula = LocalDateTime.of(data, hora);

        frequenciaService.simularAulaAgendada(ALUNO_ID, AULA_ID, this.dataHoraAula);
    }

    @When("o aluno passa pela catraca no horário da aula")
    public void o_aluno_passa_pela_catraca_no_horario_da_aula() {
        resultadoAcao = frequenciaService.registrarPresenca(ALUNO_ID, AULA_ID, this.dataHoraAula.toLocalDate());
    }

    @When("o aluno não passa pela catraca no horário da aula")
    public void o_aluno_nao_passa_pela_catraca_no_horario_da_aula() {
        resultadoAcao = frequenciaService.registrarFalta(ALUNO_ID, AULA_ID, this.dataHoraAula.toLocalDate());
    }

    @Then("o sistema registra {string} para o aluno no dia {string} com horário {string} e duração {string}")
    public void o_sistema_registra_para_o_aluno_no_dia_com_horario_e_duracao(
            String tipoFrequencia, String dataAula, String horaAula, String duracao) {
        assertEquals("Registro de " + tipoFrequencia + " realizado com sucesso", resultadoAcao);
    }

    @Given("o aluno {string} possui {string} faltas nos últimos {string} dias")
    public void o_aluno_possui_faltas_nos_ultimos_dias(String status, String numeroFaltas, String periodo) {
        resetarContexto();
        statusAluno = status;
        int faltas = Integer.parseInt(numeroFaltas);
        frequenciaService.simularFaltasRecentes(ALUNO_ID, faltas);
    }

    @When("o aluno tenta reservar uma aula no dia {string}")
    public void o_aluno_tenta_reservar_uma_aula_no_dia(String dataReservaStr) {
        dataTentativaReserva = LocalDate.parse(dataReservaStr, DATE_FORMATTER);
        try {
            resultadoAcao = reservaService.tentarReservar(ALUNO_ID, dataTentativaReserva);
        } catch (Exception e) {
            this.excecao = e;
            resultadoAcao = e.getMessage();
        }
    }

    @Then("o sistema rejeita a reserva e informa {string}")
    public void o_sistema_rejeita_a_reserva_e_informa(String mensagemEsperada) {
        assertTrue(this.excecao != null || resultadoAcao.contains(mensagemEsperada));
        assertTrue(resultadoAcao.contains(mensagemEsperada));
    }

    @Then("o sistema confirma a reserva e informa {string}")
    public void o_sistema_confirma_a_reserva_e_informa(String mensagemEsperada) {
        assertEquals(mensagemEsperada, resultadoAcao);
    }

    @Given("o aluno {string} até {string}")
    public void o_aluno_ate(String status, String dataBloqueioStr) {
        resetarContexto();
        statusAluno = status;
        LocalDate dataBloqueio = LocalDate.parse(dataBloqueioStr, DATE_FORMATTER);
        alunoService.simularBloqueio(ALUNO_ID, dataBloqueio);
    }

    @When("chega o dia {string} e o aluno tenta reservar uma aula")
    public void chega_o_dia_e_o_aluno_tenta_reservar_uma_aula(String dataAtualStr) {
        LocalDate dataAtual = LocalDate.parse(dataAtualStr, DATE_FORMATTER);
        dataTentativaReserva = dataAtual;
        try {
            resultadoAcao = alunoService.tentarDesbloqueioEReserva(ALUNO_ID, dataAtual);
        } catch (Exception e) {
            this.excecao = e;
            resultadoAcao = e.getMessage();
        }
    }

    @Then("o sistema desbloqueia o aluno, confirma a reserva e informa {string}")
    public void o_sistema_desbloqueia_o_aluno_confirma_a_reserva_e_informa(String mensagemEsperada) {
        assertEquals(mensagemEsperada, resultadoAcao);
        assertTrue(alunoService.estaDesbloqueado(ALUNO_ID));
    }
}