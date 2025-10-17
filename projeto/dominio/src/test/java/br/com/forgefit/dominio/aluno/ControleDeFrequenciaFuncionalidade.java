package br.com.forgefit.dominio.aluno;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import br.com.forgefit.dominio.AcademiaFuncionalidade;
import br.com.forgefit.dominio.aluno.enums.StatusAluno;
import br.com.forgefit.dominio.aluno.enums.StatusFrequencia;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.infraestrutura.persistencia.memoria.Repositorio; 
import br.com.forgefit.dominio.aluno.FrequenciaService.AlunoBloqueadoEvento; 
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class ControleDeFrequenciaFuncionalidade extends AcademiaFuncionalidade {

    public final Cpf alunoCpf = new Cpf("12345678900");
    public final AulaId aulaId = new AulaId(42);
    public LocalDate dataAula;
    public LocalDate dataTentativaReserva;
    public final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    @Given("o aluno {string} está matriculado em uma aula agendada no dia {string} com horário {string} e duração de {string}")
    public void o_aluno_está_matriculado_em_uma_aula_agendada_no_dia_com_horário_e_duração_de(String cpfStr, String dataStr, String horaStr, String duracaoStr) {
        // CORREÇÃO: Substituído por getRepositorioDeTeste()
        Repositorio repositorio = getRepositorioDeTeste(); 
        repositorio.simularAluno(alunoCpf, StatusAluno.ATIVO);
        this.dataAula = LocalDate.parse(dataStr, formatter);
        repositorio.simularReserva(alunoCpf, aulaId, dataAula, false);
    } // Linha 31

    @Given("o aluno {string} possui {string} falta(s) nos últimos {string} dias")
    public void o_aluno_possui_falta_nos_últimos_dias(String cpfStr, String numFaltasStr, String numDiasStr) {
        // CORREÇÃO: Substituído por getRepositorioDeTeste()
        Repositorio repositorio = getRepositorioDeTeste();
        int numFaltas = Integer.parseInt(numFaltasStr);
        int numDias = Integer.parseInt(numDiasStr);
        repositorio.simularAluno(alunoCpf, StatusAluno.ATIVO);
        repositorio.simularFaltasAluno(alunoCpf, numFaltas, numDias);
    } // Linha 40

    @Given("o aluno {string} está bloqueado até {string}")
    public void o_aluno_está_bloqueado_até(String cpfStr, String dataFimBloqueioStr) {
        // CORREÇÃO: Substituído por getRepositorioDeTeste()
        Repositorio repositorio = getRepositorioDeTeste();
        LocalDate dataFim = LocalDate.parse(dataFimBloqueioStr, formatter);
        repositorio.simularAlunoBloqueado(alunoCpf, dataFim);
    } // Linha 50

    @When("o aluno passa pela catraca no horário da aula")
    public void o_aluno_passa_pela_catraca_no_horário_da_aula() {
        frequenciaService.registrarFrequencia(alunoCpf, aulaId, dataAula, StatusFrequencia.PRESENTE);
    }

    @When("o aluno não passa pela catraca no horário da aula")
    public void o_aluno_não_passa_pela_catraca_no_horário_da_aula() {
        frequenciaService.registrarFrequencia(alunoCpf, aulaId, dataAula, StatusFrequencia.FALTA);
    }

    @When("o aluno tenta reservar uma aula no dia {string}")
    public void o_aluno_tenta_reservar_uma_aula_no_dia(String dataTentativaStr) {
        // CORREÇÃO: Substituído por getRepositorioDeTeste()
        Repositorio repositorio = getRepositorioDeTeste(); // Linha 68
        LocalDate dataTentativa = LocalDate.parse(dataTentativaStr, formatter);
        this.dataTentativaReserva = dataTentativa;
        excecao = null;
        try {
            // ... restante da lógica (já corrigida anteriormente)
            String resultado = reservaService.tentarReservar(alunoCpf, aulaId, dataTentativa);
            
            if (resultado.contains("bloqueado") || resultado.contains("rejeita")) {
                throw new IllegalStateException(resultado);
            }
        } catch (Exception e) {
            excecao = e;
        }
    }

    @When("chega o dia {string} e o aluno tenta reservar uma aula")
    public void chega_o_dia_e_o_aluno_tenta_reservar_uma_aula(String dataTentativaStr) {
        o_aluno_tenta_reservar_uma_aula_no_dia(dataTentativaStr);
    }

    @Then("o sistema registra {string} para o aluno no dia {string} com horário {string} e duração {string}")
    public void o_sistema_registra_para_o_aluno_no_dia_com_horário_e_duração(String statusEsperado, String dataStr, String horaStr, String duracaoStr) {
        // CORREÇÃO: Substituído por getRepositorioDeTeste()
        Repositorio repositorio = getRepositorioDeTeste(); // Linha 93
        // CORREÇÃO: Cast para Aluno, pois obterPorCpf retorna um objeto genérico.
        Aluno aluno = (Aluno) repositorio.obterPorCpf(alunoCpf).get(); 
        
        // ... restante da lógica (já corrigida anteriormente)
        assertTrue(aluno.getHistoricoFrequencia().stream() 
                .anyMatch(r -> r.getStatus().name().equals(statusEsperado.toUpperCase())),
                "Deveria ter encontrado um registro de frequência com status: " + statusEsperado);

        if (statusEsperado.equalsIgnoreCase("FALTA") && aluno.getHistoricoFrequencia().size() >= 3) {
            assertTrue(aluno.estaBloqueado(), "Após 3 faltas, o aluno deveria estar bloqueado."); 
            assertTrue(eventos.stream().anyMatch(e -> e instanceof AlunoBloqueadoEvento), 
                    "O evento de bloqueio não foi emitido.");
        }
    }

    @Then("o sistema rejeita a reserva e informa {string}")
    public void o_sistema_rejeita_a_reserva_e_informa(String mensagemEsperada) {
        assertTrue(excecao != null, "Deveria ter ocorrido uma exceção de bloqueio.");
        assertEquals(mensagemEsperada, excecao.getMessage(),
                "Mensagem de erro não corresponde exatamente ao esperado");
    }

    @Then("o sistema confirma a reserva e informa {string}")
    public void o_sistema_confirma_a_reserva_e_informa(String mensagemEsperada) {
        // CORREÇÃO: Substituído por getRepositorioDeTeste()
        Repositorio repositorio = getRepositorioDeTeste(); // Linha 121
        // CORREÇÃO: Cast para Aluno, pois obterPorCpf retorna um objeto genérico.
        Aluno aluno = (Aluno) repositorio.obterPorCpf(alunoCpf).get();
        // ... restante da lógica (já corrigida anteriormente)
        assertTrue(aluno.podeReservarAula(this.dataTentativaReserva),
                "O aluno deveria poder reservar na data: " + this.dataTentativaReserva);
    }

    @Then("o sistema desbloqueia o aluno, confirma a reserva e informa {string}")
    public void o_sistema_desbloqueia_o_aluno_confirma_a_reserva_e_informa(String mensagemEsperada) {
        o_sistema_confirma_a_reserva_e_informa(mensagemEsperada);
    }
}