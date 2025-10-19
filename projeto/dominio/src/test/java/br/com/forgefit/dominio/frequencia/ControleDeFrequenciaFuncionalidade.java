package br.com.forgefit.dominio.frequencia;

import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import br.com.forgefit.dominio.AcademiaFuncionalidade;
import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aluno.enums.StatusAluno;
import br.com.forgefit.dominio.aula.Aula;
import br.com.forgefit.dominio.aula.enums.Espaco;
import br.com.forgefit.dominio.aula.enums.Modalidade;
import br.com.forgefit.dominio.frequencia.enums.StatusFrequencia;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

/**
 * Step definitions para controle de frequência e bloqueio por faltas.
 */
public class ControleDeFrequenciaFuncionalidade {
    
    private final AcademiaFuncionalidade contexto;
    
    private Cpf cpfAluno;
    private Aula aulaCriada;
    private Frequencia frequenciaRegistrada;
    private DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm");
    private String mensagemResposta;

    public ControleDeFrequenciaFuncionalidade(AcademiaFuncionalidade contexto) {
        this.contexto = contexto;
    }

    // ========== CENÁRIO 1: Registrar presença do aluno na aula ==========

    @Given("o aluno {string} está matriculado em uma aula agendada no dia {string} com horário {string} e duração de {string}")
    public void o_aluno_esta_matriculado_em_uma_aula_agendada(String cpf, String dataStr, String horario, String duracao) {
        cpfAluno = new Cpf(cpf);
        Aluno aluno = new Aluno(cpfAluno);
        aluno.setNome("Aluno Teste");
        contexto.repositorio.salvar(aluno);

        // Parse da data e hora
        LocalDate data = LocalDate.parse(dataStr, dateFormatter);
        String[] partesHorario = horario.split(":");
        int hora = Integer.parseInt(partesHorario[0]);
        int minuto = Integer.parseInt(partesHorario[1]);
        
        // Parse da duração (formato "60min")
        int duracaoMinutos = Integer.parseInt(duracao.replace("min", ""));

        LocalDateTime inicio = LocalDateTime.of(data, java.time.LocalTime.of(hora, minuto));
        LocalDateTime fim = inicio.plusMinutes(duracaoMinutos);

        aulaCriada = contexto.aulaService.criarAulaUnica(
                Modalidade.MUSCULACAO,
                Espaco.SALA01_MULTIUSO,
                20,
                inicio,
                fim
        );
    }

    @When("o aluno passa pela catraca no horário da aula")
    public void o_aluno_passa_pela_catraca_no_horario_da_aula() {
        LocalDate dataAula = aulaCriada.getInicio().toLocalDate();
        frequenciaRegistrada = contexto.frequenciaService.registrarPresenca(
                cpfAluno,
                aulaCriada.getId(),
                dataAula
        );
    }

    @Then("o sistema registra {string} para o aluno no dia {string} com horário {string} e duração {string}")
    public void o_sistema_registra_presenca_para_o_aluno(String status, String dataStr, String horario, String duracao) {
        assertNotNull(frequenciaRegistrada);
        
        StatusFrequencia statusEsperado = status.equals("PRESENÇA") 
                ? StatusFrequencia.PRESENCA 
                : StatusFrequencia.FALTA;
        
        assertEquals(statusEsperado, frequenciaRegistrada.getStatus());
        assertEquals(cpfAluno, frequenciaRegistrada.getAlunoId());
        assertEquals(aulaCriada.getId(), frequenciaRegistrada.getAulaId());
    }

    // ========== CENÁRIO 2: Registrar falta do aluno na aula ==========

    @When("o aluno não passa pela catraca no horário da aula")
    public void o_aluno_nao_passa_pela_catraca_no_horario_da_aula() {
        LocalDate dataAula = aulaCriada.getInicio().toLocalDate();
        frequenciaRegistrada = contexto.frequenciaService.registrarFalta(
                cpfAluno,
                aulaCriada.getId(),
                dataAula
        );
    }

    // ========== CENÁRIO 3: Aluno bloqueado tenta reservar ==========

    @Given("o aluno {string} possui {string} falta\\(s) nos últimos {string} dias")
    public void o_aluno_possui_faltas_nos_ultimos_dias(String cpf, String quantidadeFaltas, String diasStr) {
        cpfAluno = new Cpf(cpf);
        Aluno aluno = new Aluno(cpfAluno);
        aluno.setNome("Aluno com Faltas");
        contexto.repositorio.salvar(aluno);

        int qtdFaltas = Integer.parseInt(quantidadeFaltas);
        LocalDate dataAtual = LocalDate.now();

        // Registra as faltas nos últimos dias
        for (int i = 0; i < qtdFaltas; i++) {
            LocalDate dataFalta = dataAtual.minusDays(i + 1);
            LocalDateTime inicioAula = LocalDateTime.of(dataFalta, java.time.LocalTime.of(8, 0));
            
            Aula aula = contexto.aulaService.criarAulaUnica(
                    Modalidade.YOGA,
                    Espaco.ESTUDIO_PILATES,
                    15,
                    inicioAula,
                    inicioAula.plusHours(1)
            );

            contexto.frequenciaService.registrarFalta(cpfAluno, aula.getId(), dataFalta);
        }

        // Verifica se foi bloqueado
        aluno = contexto.repositorio.obterPorCpf(cpfAluno).get();
        if (qtdFaltas >= 3) {
            assertEquals(StatusAluno.BLOQUEADO, aluno.getStatus());
        }
    }

    @When("o aluno tenta reservar uma aula no dia {string}")
    public void o_aluno_tenta_reservar_uma_aula_no_dia(String dataStr) {
        LocalDate data = LocalDate.parse(dataStr, dateFormatter);
        LocalDateTime inicio = LocalDateTime.of(data, java.time.LocalTime.of(10, 0));

        Aula aula = contexto.aulaService.criarAulaUnica(
                Modalidade.PILATES,
                Espaco.ESTUDIO_PILATES,
                10,
                inicio,
                inicio.plusHours(1)
        );

        try {
            // Verifica se aluno está bloqueado na data da tentativa de reserva
            if (contexto.frequenciaService.alunoEstaBloqueado(cpfAluno, data)) {
                // Verifica se tem faltas recentes para dar mensagem específica
                long faltasRecentes = contexto.frequenciaService.contarFaltasRecentes(cpfAluno, LocalDate.now(), 30);
                if (faltasRecentes >= 3) {
                    mensagemResposta = "Aluno bloqueado por excesso de faltas.";
                } else {
                    mensagemResposta = "Aluno bloqueado.";
                }
                throw new IllegalStateException(mensagemResposta);
            }
            
            contexto.reservaService.reservarVaga(cpfAluno, aula.getId());
            mensagemResposta = "Reserva confirmada.";
        } catch (Exception e) {
            if (mensagemResposta == null) {
                contexto.excecao = e;
            }
        }
    }

    @Then("o sistema rejeita a reserva e informa {string}")
    public void o_sistema_rejeita_a_reserva_e_informa(String mensagemEsperada) {
        assertNotNull(mensagemResposta);
        assertEquals(mensagemEsperada, mensagemResposta);
    }

    @Then("o sistema confirma a reserva e informa {string}")
    public void o_sistema_confirma_a_reserva_e_informa(String mensagemEsperada) {
        assertNotNull(mensagemResposta);
        assertEquals(mensagemEsperada, mensagemResposta);
    }

    // ========== CENÁRIO 5: Desbloquear aluno após período ==========

    @Given("o aluno {string} está bloqueado até {string}")
    public void o_aluno_esta_bloqueado_ate(String cpf, String dataStr) {
        cpfAluno = new Cpf(cpf);
        Aluno aluno = new Aluno(cpfAluno);
        aluno.setNome("Aluno Bloqueado");
        aluno.setStatus(StatusAluno.BLOQUEADO);
        
        LocalDate dataBloqueio = LocalDate.parse(dataStr, dateFormatter);
        aluno.setBloqueioAte(dataBloqueio);
        
        contexto.repositorio.salvar(aluno);
    }

    @When("chega o dia {string} e o aluno tenta reservar uma aula")
    public void chega_o_dia_e_o_aluno_tenta_reservar_uma_aula(String dataStr) {
        LocalDate data = LocalDate.parse(dataStr, dateFormatter);
        LocalDateTime inicio = LocalDateTime.of(data, java.time.LocalTime.of(10, 0));

        Aula aula = contexto.aulaService.criarAulaUnica(
                Modalidade.SPINNING,
                Espaco.SALA03_SPINNING,
                20,
                inicio,
                inicio.plusHours(1)
        );

        try {
            // Verifica se aluno está bloqueado NESTA DATA
            if (contexto.frequenciaService.alunoEstaBloqueado(cpfAluno, data)) {
                mensagemResposta = "Aluno bloqueado.";
                throw new IllegalStateException(mensagemResposta);
            }
            
            contexto.reservaService.reservarVaga(cpfAluno, aula.getId());
            mensagemResposta = "Reserva confirmada.";
        } catch (Exception e) {
            if (mensagemResposta == null) {
                contexto.excecao = e;
            }
        }
    }

    @Then("o sistema desbloqueia o aluno, confirma a reserva e informa {string}")
    public void o_sistema_desbloqueia_o_aluno_confirma_a_reserva_e_informa(String mensagemEsperada) {
        assertNotNull(mensagemResposta);
        assertEquals(mensagemEsperada, mensagemResposta);
        
        // Verifica que o aluno foi desbloqueado
        var aluno = contexto.repositorio.obterPorCpf(cpfAluno).get();
        assertEquals(StatusAluno.ATIVO, aluno.getStatus());
    }
}
