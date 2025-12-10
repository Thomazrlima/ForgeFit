package br.com.forgefit.dominio.frequencia;

import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import br.com.forgefit.dominio.AcademiaFuncionalidade;
import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aluno.enums.StatusAluno;
import br.com.forgefit.dominio.aula.Aula;
import br.com.forgefit.dominio.aula.enums.Espaco;
import br.com.forgefit.dominio.aula.enums.Modalidade;
import br.com.forgefit.dominio.frequencia.enums.StatusFrequencia;
import br.com.forgefit.dominio.professor.ProfessorId;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

/**
 * Step definitions para controle de frequência e bloqueio por faltas.
 */
public class ControleDeFrequenciaFuncionalidade {
    
    private final AcademiaFuncionalidade contexto;
    
    private Matricula matriculaAluno;
    private Aula aulaCriada;
    private Frequencia frequenciaRegistrada;
    private DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private String mensagemResposta;

    public ControleDeFrequenciaFuncionalidade(AcademiaFuncionalidade contexto) {
        this.contexto = contexto;
    }

    // ========== CENÁRIO 1: Registrar presença do aluno na aula ==========

    @Given("o aluno com matrícula {string} está matriculado em uma aula agendada no dia {string} com horário {string} e duração de {string}")
    public void o_aluno_com_matricula_esta_matriculado_em_uma_aula_agendada(String matriculaStr, String dataStr, String horario, String duracao) {
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
        
        // Parse da duração (formato "60min")
        int duracaoMinutos = Integer.parseInt(duracao.replace("min", ""));

        LocalDateTime inicio = LocalDateTime.of(data, java.time.LocalTime.of(hora, minuto));
        LocalDateTime fim = inicio.plusMinutes(duracaoMinutos);

        aulaCriada = contexto.aulaService.criarAulaUnica(
                new ProfessorId(1),
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
                matriculaAluno,
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
        
        // Valida persistência no repositório
        LocalDate data = LocalDate.parse(dataStr, dateFormatter);
        Frequencia frequenciaPersistida = contexto.repositorio.buscarPorAlunoAulaEData(
                matriculaAluno, 
                aulaCriada.getId(), 
                data
        );
        
        assertNotNull(frequenciaPersistida, "Frequência não foi persistida no repositório");
        
        // Valida TODOS os atributos da frequência persistida
        assertEquals(statusEsperado, frequenciaPersistida.getStatus());
        assertEquals(matriculaAluno, frequenciaPersistida.getAlunoMatricula());
        assertEquals(aulaCriada.getId(), frequenciaPersistida.getAulaId());
        assertEquals(data, frequenciaPersistida.getDataDaOcorrencia());
    }

    // ========== CENÁRIO 2: Registrar falta do aluno na aula ==========

    @When("o aluno não passa pela catraca no horário da aula")
    public void o_aluno_nao_passa_pela_catraca_no_horario_da_aula() {
        LocalDate dataAula = aulaCriada.getInicio().toLocalDate();
        frequenciaRegistrada = contexto.frequenciaService.registrarFalta(
                matriculaAluno,
                aulaCriada.getId(),
                dataAula
        );
    }

    // ========== CENÁRIO 3: Aluno bloqueado tenta reservar ==========

    @Given("o aluno com matrícula {string} possui {string} falta\\(s) nos últimos {string} dias")
    public void o_aluno_com_matricula_possui_faltas_nos_ultimos_dias(String matriculaStr, String quantidadeFaltas, String diasStr) {
        matriculaAluno = new Matricula(matriculaStr);
        
        // Cria CPF baseado na matrícula (apenas para testes)
        Cpf cpf = new Cpf(matriculaStr.replaceAll("[^0-9]", "").substring(0, 11));
        Aluno aluno = new Aluno(matriculaAluno, cpf, "Aluno com Faltas", LocalDate.of(1990, 1, 1), null);
        contexto.repositorio.salvar(aluno);

        int qtdFaltas = Integer.parseInt(quantidadeFaltas);
        LocalDate dataAtual = LocalDate.now();

        // Registra as faltas nos últimos dias
        for (int i = 0; i < qtdFaltas; i++) {
            LocalDate dataFalta = dataAtual.minusDays(i + 1);
            LocalDateTime inicioAula = LocalDateTime.of(dataFalta, java.time.LocalTime.of(8, 0));
            
            Aula aula = contexto.aulaService.criarAulaUnica(
                    new ProfessorId(1),
                    Modalidade.YOGA,
                    Espaco.ESTUDIO_PILATES,
                    15,
                    inicioAula,
                    inicioAula.plusHours(1)
            );

            contexto.frequenciaService.registrarFalta(matriculaAluno, aula.getId(), dataFalta);
        }

        // Verifica se foi bloqueado
        aluno = contexto.repositorio.obterPorMatricula(matriculaAluno).get();
        if (qtdFaltas >= 3) {
            assertEquals(StatusAluno.BLOQUEADO, aluno.getStatus());
        }
    }

    @When("o aluno tenta reservar uma aula no dia {string}")
    public void o_aluno_tenta_reservar_uma_aula_no_dia(String dataStr) {
        LocalDate data = LocalDate.parse(dataStr, dateFormatter);
        LocalDateTime inicio = LocalDateTime.of(data, java.time.LocalTime.of(10, 0));

        aulaCriada = contexto.aulaService.criarAulaUnica(
                new ProfessorId(1),
                Modalidade.PILATES,
                Espaco.ESTUDIO_PILATES,
                10,
                inicio,
                inicio.plusHours(1)
        );

        try {
            // Verifica se aluno está bloqueado e obtém mensagem do serviço
            String mensagemBloqueio = contexto.frequenciaService.verificarBloqueioComMensagem(matriculaAluno, data);
            if (mensagemBloqueio != null) {
                mensagemResposta = mensagemBloqueio;
                throw new IllegalStateException(mensagemResposta);
            }
            
            mensagemResposta = contexto.reservaService.tentarReservarVaga(matriculaAluno, aulaCriada.getId());
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

    @Given("o aluno com matrícula {string} está bloqueado até {string}")
    public void o_aluno_com_matricula_esta_bloqueado_ate(String matriculaStr, String dataStr) {
        matriculaAluno = new Matricula(matriculaStr);
        
        // Cria CPF baseado na matrícula (apenas para testes)
        Cpf cpf = new Cpf(matriculaStr.replaceAll("[^0-9]", "").substring(0, 11));
        Aluno aluno = new Aluno(matriculaAluno, cpf, "Aluno Bloqueado", LocalDate.of(1990, 1, 1), null);
        
        LocalDate dataBloqueio = LocalDate.parse(dataStr, dateFormatter);
        // Usa método de domínio para bloquear (simula 3 faltas)
        aluno.bloquearPorFaltas(3, (int) java.time.temporal.ChronoUnit.DAYS.between(LocalDate.now(), dataBloqueio));
        
        contexto.repositorio.salvar(aluno);
    }

    @When("chega o dia {string} e o aluno tenta reservar uma aula")
    public void chega_o_dia_e_o_aluno_tenta_reservar_uma_aula(String dataStr) {
        LocalDate data = LocalDate.parse(dataStr, dateFormatter);
        LocalDateTime inicio = LocalDateTime.of(data, java.time.LocalTime.of(10, 0));

        aulaCriada = contexto.aulaService.criarAulaUnica(
                new ProfessorId(1),
                Modalidade.SPINNING,
                Espaco.SALA03_SPINNING,
                20,
                inicio,
                inicio.plusHours(1)
        );

        try {
            // Verifica se aluno está bloqueado e obtém mensagem do serviço
            String mensagemBloqueio = contexto.frequenciaService.verificarBloqueioComMensagem(matriculaAluno, data);
            if (mensagemBloqueio != null) {
                mensagemResposta = mensagemBloqueio;
                throw new IllegalStateException(mensagemResposta);
            }
            
            mensagemResposta = contexto.reservaService.tentarReservarVaga(matriculaAluno, aulaCriada.getId());
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
        
        // Verifica que o aluno foi desbloqueado no repositório
        Aluno aluno = contexto.repositorio.obterPorMatricula(matriculaAluno).get();
        assertEquals(StatusAluno.ATIVO, aluno.getStatus());
        
        // Verifica que a reserva foi persistida no repositório
        var aulaPersistida = contexto.repositorio.obterPorId(aulaCriada.getId());
        assertTrue(aulaPersistida.isPresent(), "Aula não foi persistida no repositório");
        assertTrue(aulaPersistida.get().alunoJaPossuiReserva(matriculaAluno), 
                "Reserva do aluno não foi persistida na aula");
    }
}
