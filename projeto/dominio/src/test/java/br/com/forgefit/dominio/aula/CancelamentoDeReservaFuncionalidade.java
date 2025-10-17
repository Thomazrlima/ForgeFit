package br.com.forgefit.dominio.aula;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import br.com.forgefit.dominio.AcademiaFuncionalidade;
import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aula.Aula.ReservaCanceladaEvento;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CancelamentoDeReservaFuncionalidade extends AcademiaFuncionalidade {

    private final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    private final Cpf ALUNO_ID = new Cpf("12345678900");
    private final AulaId AULA_ID = new AulaId(99);

    private LocalDateTime dataHoraAula;
    private String resultadoCancelamento;

    @Given("existe uma reserva confirmada para o dia {string} às {string} com duração de {string}")
    public void existe_uma_reserva_confirmada_para_o_dia_as_com_duracao_de(
            String dataAula, String horaAula, String duracao
    ) throws Exception {
        resetarContexto();

        LocalDate data = LocalDate.parse(dataAula, DATE_FORMATTER);
        this.dataHoraAula = LocalDateTime.of(data, java.time.LocalTime.parse(horaAula));

        reservaService.simularReservaExistente(ALUNO_ID, AULA_ID, this.dataHoraAula);
    }

    @When("o aluno solicita o cancelamento em {string}")
    public void o_aluno_solicita_o_cancelamento_em(String dataCancelamentoStr) {
        resetarContexto();

        LocalDate dataCancelamento = LocalDate.parse(dataCancelamentoStr, DATE_FORMATTER);

        try {
            resultadoCancelamento = reservaService.cancelarReserva(ALUNO_ID, AULA_ID, this.dataHoraAula.toLocalDate(), dataCancelamento);
        } catch (Exception e) {
            this.excecao = e;
            resultadoCancelamento = e.getMessage();
        }
    }

    @Then("o sistema informa {string}")
    public void o_sistema_informa(String mensagemEsperada) {
        if (this.excecao != null) {
            assertTrue(resultadoCancelamento.contains(mensagemEsperada),
                    "Mensagem de erro esperada: '" + mensagemEsperada + "', obtida: '" + resultadoCancelamento + "'");
        } else {
            assertEquals(mensagemEsperada, resultadoCancelamento,
                    "Mensagem de sucesso esperada incorreta.");
        }
    }

    @And("o aluno já realizou o cancelamento desta reserva")
    public void o_aluno_ja_realizou_o_cancelamento_desta_reserva() {
        reservaService.simularCancelamento(ALUNO_ID, AULA_ID, this.dataHoraAula.toLocalDate());
    }

    @When("o aluno solicita novo cancelamento da mesma reserva")
    public void o_aluno_solicita_novo_cancelamento_da_mesma_reserva() {
        o_aluno_solicita_o_cancelamento_em(LocalDate.now().format(DATE_FORMATTER));
    }

    @Given("não existe reserva confirmada para o aluno na data {string} às {string}")
    public void não_existe_reserva_confirmada_para_o_aluno_na_data_as(String dataAula, String horaAula) {
        resetarContexto();
    }

    @Then("o sistema notifica o cancelamento da reserva")
    public void o_sistema_notifica_o_cancelamento_da_reserva() {
        assertTrue(eventos.stream().anyMatch(e -> e instanceof ReservaCanceladaEvento), "Evento ReservaCanceladaEvento não foi postado.");
    }
}