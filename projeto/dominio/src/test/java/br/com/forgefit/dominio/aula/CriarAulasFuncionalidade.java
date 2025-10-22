package br.com.forgefit.dominio.aula;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import br.com.forgefit.dominio.AcademiaFuncionalidade;
import br.com.forgefit.dominio.professor.ProfessorId;
import br.com.forgefit.dominio.aula.enums.DiaDaSemana;
import br.com.forgefit.dominio.aula.enums.Espaco;
import br.com.forgefit.dominio.aula.enums.Modalidade;
import br.com.forgefit.dominio.aula.enums.StatusAula;
import br.com.forgefit.dominio.aula.enums.TipoRecorrencia;
import io.cucumber.java.pt.*;

/**
 * Step definitions para criação e gestão de aulas.
 * Recebe o contexto compartilhado via injeção de dependência do Cucumber PicoContainer.
 */
public class CriarAulasFuncionalidade {
    
    private final AcademiaFuncionalidade contexto;
    
    private ProfessorId professorId;
    private AulaId aulaIdCriada;
    private String mensagemSistema;
    
    // Variáveis para validação de atributos
    private Modalidade modalidadeEsperada;
    private Espaco espacoEsperado;
    private int capacidadeEsperada;
    private LocalDateTime inicioEsperado;
    private LocalDateTime fimEsperado;
    
    private static final DateTimeFormatter FORMATO_DATA = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private static final DateTimeFormatter FORMATO_HORA = DateTimeFormatter.ofPattern("HH:mm");

    public CriarAulasFuncionalidade(AcademiaFuncionalidade contexto) {
        this.contexto = contexto;
    }
    
    // ==== REGRA 1: Criar aula única ====
    
    @Dado("o professorId {string} está autenticado na plataforma")
    public void o_professor_id_esta_autenticado_na_plataforma(String professorIdStr) {
        int id = Integer.parseInt(professorIdStr);
        this.professorId = new ProfessorId(id);
    }
    
    @Quando("o professor cria uma aula única de {string} na {string} com capacidade {string} para o dia {string} às {string}")
    public void o_professor_cria_uma_aula_unica(String modalidadeStr, String espacoStr, String capacidadeStr, String dataStr, String horaStr) {
        modalidadeEsperada = Modalidade.valueOf(modalidadeStr);
        espacoEsperado = Espaco.valueOf(espacoStr);
        capacidadeEsperada = Integer.parseInt(capacidadeStr);
        LocalDate data = LocalDate.parse(dataStr, FORMATO_DATA);
        LocalTime hora = LocalTime.parse(horaStr, FORMATO_HORA);
        inicioEsperado = LocalDateTime.of(data, hora);
        fimEsperado = inicioEsperado.plusHours(1);
        
        mensagemSistema = contexto.aulaService.criarAulaUnicaComMensagem(
            professorId, modalidadeEsperada, espacoEsperado, capacidadeEsperada, inicioEsperado, fimEsperado
        );
        
        // Busca a aula criada no repositório
        if (mensagemSistema.equals("A aula foi criada com sucesso!")) {
            List<Aula> aulas = contexto.repositorio.listarTodas();
            for (Aula a : aulas) {
                if (a.getProfessorId().equals(professorId) && a.getInicio().equals(inicioEsperado)) {
                    aulaIdCriada = a.getId();
                    break;
                }
            }
        }
    }
    
    @Quando("o professor tenta criar uma aula de {string} na {string} para o dia {string} às {string} já ocupado")
    public void o_professor_tenta_criar_uma_aula_ja_ocupado(String modalidadeStr, String espacoStr, String dataStr, String horaStr) {
        Modalidade modalidade = Modalidade.valueOf(modalidadeStr);
        Espaco espaco = Espaco.valueOf(espacoStr);
        LocalDate data = LocalDate.parse(dataStr, FORMATO_DATA);
        LocalTime hora = LocalTime.parse(horaStr, FORMATO_HORA);
        LocalDateTime inicio = LocalDateTime.of(data, hora);
        LocalDateTime fim = inicio.plusHours(1);
        
        // Primeiro cria uma aula para ocupar o horário
        contexto.aulaService.criarAulaUnicaComMensagem(professorId, modalidade, espaco, 20, inicio, fim);
        
        // Agora tenta criar outra no mesmo horário
        mensagemSistema = contexto.aulaService.criarAulaUnicaComMensagem(professorId, modalidade, espaco, 20, inicio, fim);
    }
    
    @Então("o sistema informa: {string}")
    public void o_sistema_informa(String mensagemEsperada) {
        assertEquals(mensagemEsperada, mensagemSistema);
        
        // VALIDAÇÃO COMPLETA - busca do repositório e valida TODOS os atributos críticos
        if (mensagemEsperada.contains("sucesso") && aulaIdCriada != null) {
            Optional<Aula> aulaDoRepositorio = contexto.repositorio.obterPorId(aulaIdCriada);
            assertTrue(aulaDoRepositorio.isPresent(), 
                    "A aula deveria ter sido persistida no repositório");
            
            Aula aulaSalva = aulaDoRepositorio.get();
            
            // Valida TODOS os atributos críticos da aula
            assertNotNull(aulaSalva.getId(), "O ID da aula deveria ter sido salvo");
            assertEquals(professorId, aulaSalva.getProfessorId(), 
                    "O professorId deveria ter sido salvo corretamente");
            assertEquals(modalidadeEsperada, aulaSalva.getModalidade(), 
                    "A modalidade deveria ter sido salva corretamente");
            assertEquals(espacoEsperado, aulaSalva.getEspaco(), 
                    "O espaço deveria ter sido salvo corretamente");
            assertEquals(capacidadeEsperada, aulaSalva.getCapacidade(), 
                    "A capacidade deveria ter sido salva corretamente");
            assertEquals(inicioEsperado, aulaSalva.getInicio(), 
                    "O horário de início deveria ter sido salvo corretamente");
            assertEquals(fimEsperado, aulaSalva.getFim(), 
                    "O horário de fim deveria ter sido salvo corretamente");
            assertEquals(StatusAula.ATIVA, aulaSalva.getStatus(), 
                    "O status da aula deveria ser ATIVA");
        }
    }
    
    @Então("o sistema informa conflito de horário e a aula não é criada")
    public void o_sistema_informa_conflito_de_horario_e_a_aula_nao_e_criada() {
        assertEquals("Conflito de horário", mensagemSistema);
    }
    
    // ==== REGRA 2: Criar aula recorrente ====
    
    @Quando("o professor cria uma aula recorrente de {string} na {string} às quartas-feiras às {string} com recorrência {string}")
    public void o_professor_cria_uma_aula_recorrente(String modalidadeStr, String espacoStr, String horaStr, String tipoRecorrenciaStr) {
        modalidadeEsperada = Modalidade.valueOf(modalidadeStr);
        espacoEsperado = Espaco.valueOf(espacoStr);
        capacidadeEsperada = 20;
        TipoRecorrencia tipoRecorrencia = TipoRecorrencia.valueOf(tipoRecorrenciaStr);
        LocalTime hora = LocalTime.parse(horaStr, FORMATO_HORA);
        
        // Encontra próxima quarta-feira
        LocalDate dataInicio = LocalDate.now();
        while (dataInicio.getDayOfWeek() != java.time.DayOfWeek.WEDNESDAY) {
            dataInicio = dataInicio.plusDays(1);
        }
        
        inicioEsperado = LocalDateTime.of(dataInicio, hora);
        fimEsperado = inicioEsperado.plusHours(1);
        LocalDate dataFim = dataInicio.plusMonths(3); // 3 meses de recorrência
        List<DiaDaSemana> dias = Arrays.asList(DiaDaSemana.QUARTA);
        
        mensagemSistema = contexto.aulaService.criarAulaRecorrenteComMensagem(
            professorId, modalidadeEsperada, espacoEsperado, capacidadeEsperada, inicioEsperado, fimEsperado, tipoRecorrencia, dias, dataFim
        );
        
        // Busca a aula criada no repositório
        if (mensagemSistema.equals("A aula recorrente foi criada com sucesso!")) {
            List<Aula> aulas = contexto.repositorio.listarTodas();
            for (Aula a : aulas) {
                if (a.getProfessorId().equals(professorId) && a.getInicio().equals(inicioEsperado)) {
                    aulaIdCriada = a.getId();
                    break;
                }
            }
        }
    }
    
    @Quando("o professor tenta criar uma aula recorrente que conflita com uma aula existente em ocorrência futura")
    public void o_professor_tenta_criar_uma_aula_recorrente_que_conflita() {
        Modalidade modalidade = Modalidade.BOXE;
        Espaco espaco = Espaco.AREA_DE_LUTAS;
        
        // Encontra próxima quarta-feira
        LocalDate dataInicio = LocalDate.now();
        while (dataInicio.getDayOfWeek() != java.time.DayOfWeek.WEDNESDAY) {
            dataInicio = dataInicio.plusDays(1);
        }
        
        LocalDateTime inicio = LocalDateTime.of(dataInicio, LocalTime.of(19, 0));
        LocalDateTime fim = inicio.plusHours(1);
        
        // Cria uma aula na segunda quarta-feira (conflito futuro)
        LocalDate dataConflito = dataInicio.plusWeeks(2);
        LocalDateTime inicioConflito = LocalDateTime.of(dataConflito, LocalTime.of(19, 0));
        LocalDateTime fimConflito = inicioConflito.plusHours(1);
        contexto.aulaService.criarAulaUnicaComMensagem(professorId, modalidade, espaco, 20, inicioConflito, fimConflito);
        
        // Tenta criar recorrente que conflitará
        LocalDate dataFim = dataInicio.plusMonths(3);
        List<DiaDaSemana> dias = Arrays.asList(DiaDaSemana.QUARTA);
        mensagemSistema = contexto.aulaService.criarAulaRecorrenteComMensagem(
            professorId, modalidade, espaco, 20, inicio, fim, TipoRecorrencia.SEMANAL, dias, dataFim
        );
    }
    
    @Então("o sistema informa:\"Conflito em ocorrência futura\" e a aula recorrente não é criada")
    public void o_sistema_informa_conflito_em_ocorrencia_futura() {
        assertEquals("Conflito em ocorrência futura", mensagemSistema);
    }
    
    // ==== REGRA 3: Alterar horário principal da aula ====
    
    @Dado("existe uma aula recorrente de {string} criada pelo professorId {string}")
    public void existe_uma_aula_recorrente_criada_pelo_professor_id(String modalidadeStr, String professorIdStr) {
        int id = Integer.parseInt(professorIdStr);
        this.professorId = new ProfessorId(id);
        modalidadeEsperada = Modalidade.valueOf(modalidadeStr);
        espacoEsperado = Espaco.AREA_DE_LUTAS;
        capacidadeEsperada = 20;
        
        // Encontra próxima quarta-feira
        LocalDate dataInicio = LocalDate.now();
        while (dataInicio.getDayOfWeek() != java.time.DayOfWeek.WEDNESDAY) {
            dataInicio = dataInicio.plusDays(1);
        }
        
        inicioEsperado = LocalDateTime.of(dataInicio, LocalTime.of(19, 0));
        fimEsperado = inicioEsperado.plusHours(1);
        LocalDate dataFim = dataInicio.plusMonths(3);
        List<DiaDaSemana> dias = Arrays.asList(DiaDaSemana.QUARTA);
        
        contexto.aulaService.criarAulaRecorrenteComMensagem(
            professorId, modalidadeEsperada, espacoEsperado, capacidadeEsperada, inicioEsperado, fimEsperado, 
            TipoRecorrencia.SEMANAL, dias, dataFim
        );
        
        // Busca a aula criada no repositório
        List<Aula> aulas = contexto.repositorio.listarTodas();
        for (Aula a : aulas) {
            if (a.getProfessorId().equals(professorId) && a.getInicio().equals(inicioEsperado)) {
                aulaIdCriada = a.getId();
                break;
            }
        }
    }
    
    @Quando("o professor altera o horário principal da aula de {string} para {string}")
    public void o_professor_altera_o_horario_principal_da_aula(String horaAntigaStr, String horaNovaStr) {
        LocalTime horaNova = LocalTime.parse(horaNovaStr, FORMATO_HORA);
        
        Aula aula = contexto.repositorio.obterPorId(aulaIdCriada).orElse(null);
        LocalDate dataBase = aula.getInicio().toLocalDate();
        
        LocalDateTime novoInicio = LocalDateTime.of(dataBase, horaNova);
        LocalDateTime novoFim = novoInicio.plusHours(1);
        
        mensagemSistema = contexto.aulaService.alterarHorarioPrincipalComMensagem(aulaIdCriada, novoInicio, novoFim);
    }
    
    @Então("o horário principal é alterado com sucesso para todas as ocorrências futuras")
    public void o_horario_principal_e_alterado_com_sucesso_para_todas_as_ocorrencias_futuras() {
        assertEquals("Horário principal alterado com sucesso", mensagemSistema);
    }
    
    @Quando("o professor tenta alterar o horário principal para um horário já ocupado")
    public void o_professor_tenta_alterar_o_horario_principal_para_um_horario_ja_ocupado() {
        Aula aula = contexto.repositorio.obterPorId(aulaIdCriada).orElse(null);
        LocalDate dataBase = aula.getInicio().toLocalDate();
        LocalTime horaNova = LocalTime.of(20, 0);
        LocalDateTime novoInicio = LocalDateTime.of(dataBase, horaNova);
        LocalDateTime novoFim = novoInicio.plusHours(1);
        
        // Cria uma aula conflitante
        contexto.aulaService.criarAulaUnicaComMensagem(
            professorId, Modalidade.YOGA, aula.getEspaco(), 20, novoInicio, novoFim
        );
        
        // Tenta alterar para o horário ocupado
        mensagemSistema = contexto.aulaService.alterarHorarioPrincipalComMensagem(aulaIdCriada, novoInicio, novoFim);
    }
    
    @Então("o sistema informa:\"Conflito de horário\" e a alteração não é realizada")
    public void o_sistema_informa_conflito_de_horario_e_a_alteracao_nao_e_realizada() {
        assertEquals("Conflito de horário", mensagemSistema);
    }
    
    // ==== REGRA 4: Reagendar ocorrência única ====
    
    @Dado("existe uma aula recorrente de {string} às quartas-feiras às {string}")
    public void existe_uma_aula_recorrente_as_quartas_feiras(String modalidadeStr, String horaStr) {
        this.professorId = new ProfessorId(1);
        modalidadeEsperada = Modalidade.valueOf(modalidadeStr);
        espacoEsperado = Espaco.AREA_DE_LUTAS;
        capacidadeEsperada = 20;
        LocalTime hora = LocalTime.parse(horaStr, FORMATO_HORA);
        
        // Encontra próxima quarta-feira
        LocalDate dataInicio = LocalDate.now();
        while (dataInicio.getDayOfWeek() != java.time.DayOfWeek.WEDNESDAY) {
            dataInicio = dataInicio.plusDays(1);
        }
        
        inicioEsperado = LocalDateTime.of(dataInicio, hora);
        fimEsperado = inicioEsperado.plusHours(1);
        LocalDate dataFim = dataInicio.plusMonths(3);
        List<DiaDaSemana> dias = Arrays.asList(DiaDaSemana.QUARTA);
        
        contexto.aulaService.criarAulaRecorrenteComMensagem(
            professorId, modalidadeEsperada, espacoEsperado, capacidadeEsperada, inicioEsperado, fimEsperado, 
            TipoRecorrencia.SEMANAL, dias, dataFim
        );
        
        // Busca a aula criada no repositório
        List<Aula> aulas = contexto.repositorio.listarTodas();
        for (Aula a : aulas) {
            if (a.getProfessorId().equals(professorId) && a.getInicio().equals(inicioEsperado)) {
                aulaIdCriada = a.getId();
                break;
            }
        }
    }
    
    @Quando("o professor reagenda apenas a ocorrência do dia {string} para {string} às {string}")
    public void o_professor_reagenda_apenas_a_ocorrencia_do_dia(String dataOriginalStr, String novaDataStr, String novaHoraStr) {
        LocalDate dataOriginal = LocalDate.parse(dataOriginalStr, FORMATO_DATA);
        LocalDate novaData = LocalDate.parse(novaDataStr, FORMATO_DATA);
        LocalTime novaHora = LocalTime.parse(novaHoraStr, FORMATO_HORA);
        LocalDateTime novoInicio = LocalDateTime.of(novaData, novaHora);
        LocalDateTime novoFim = novoInicio.plusHours(1);
        
        mensagemSistema = contexto.aulaService.reagendarOcorrenciaUnicaComMensagem(
            aulaIdCriada, dataOriginal, novoInicio, novoFim
        );
    }
    
    @Então("a ocorrência única é reagendada com sucesso")
    public void a_ocorrencia_unica_e_reagendada_com_sucesso() {
        assertEquals("Ocorrência reagendada com sucesso", mensagemSistema);
    }
    
    @Quando("o professor tenta reagendar a ocorrência do dia {string} para um horário já ocupado")
    public void o_professor_tenta_reagendar_a_ocorrencia_do_dia_para_um_horario_ja_ocupado(String dataOriginalStr) {
        LocalDate dataOriginal = LocalDate.parse(dataOriginalStr, FORMATO_DATA);
        Aula aula = contexto.repositorio.obterPorId(aulaIdCriada).orElse(null);
        
        LocalDate novaData = dataOriginal.plusDays(1);
        LocalTime novaHora = LocalTime.of(20, 0);
        LocalDateTime novoInicio = LocalDateTime.of(novaData, novaHora);
        LocalDateTime novoFim = novoInicio.plusHours(1);
        
        // Cria uma aula conflitante
        contexto.aulaService.criarAulaUnicaComMensagem(
            professorId, Modalidade.YOGA, aula.getEspaco(), 20, novoInicio, novoFim
        );
        
        // Tenta reagendar para o horário ocupado
        mensagemSistema = contexto.aulaService.reagendarOcorrenciaUnicaComMensagem(
            aulaIdCriada, dataOriginal, novoInicio, novoFim
        );
    }
    
    @Então("o sistema informa: {string} e a ocorrência não é reagendada")
    public void o_sistema_informa_e_a_ocorrencia_nao_e_reagendada(String mensagemEsperada) {
        assertEquals(mensagemEsperada, mensagemSistema);
    }
    
    // ==== REGRA 5: Cancelar ocorrência única ====
    
    @Quando("o professor cancela apenas a ocorrência do dia {string}")
    public void o_professor_cancela_apenas_a_ocorrencia_do_dia(String dataStr) {
        LocalDate data = LocalDate.parse(dataStr, FORMATO_DATA);
        mensagemSistema = contexto.aulaService.cancelarOcorrenciaUnicaComMensagem(aulaIdCriada, data);
    }
    
    @Então("a ocorrência única é cancelada com sucesso e as demais ocorrências permanecem ativas")
    public void a_ocorrencia_unica_e_cancelada_com_sucesso_e_as_demais_ocorrencias_permanecem_ativas() {
        assertEquals("Ocorrência cancelada com sucesso", mensagemSistema);
    }
    
    // ==== REGRA 6: Cancelar aula definitivamente ====
    
    @Dado("existe uma aula única de {string} criada para o dia {string}")
    public void existe_uma_aula_unica_criada_para_o_dia(String modalidadeStr, String dataStr) {
        this.professorId = new ProfessorId(1);
        modalidadeEsperada = Modalidade.valueOf(modalidadeStr);
        espacoEsperado = Espaco.AREA_DE_LUTAS;
        capacidadeEsperada = 20;
        LocalDate data = LocalDate.parse(dataStr, FORMATO_DATA);
        inicioEsperado = LocalDateTime.of(data, LocalTime.of(19, 0));
        fimEsperado = inicioEsperado.plusHours(1);
        
        contexto.aulaService.criarAulaUnicaComMensagem(
            professorId, modalidadeEsperada, espacoEsperado, capacidadeEsperada, inicioEsperado, fimEsperado
        );
        
        // Busca a aula criada no repositório
        List<Aula> aulas = contexto.repositorio.listarTodas();
        for (Aula a : aulas) {
            if (a.getProfessorId().equals(professorId) && a.getInicio().equals(inicioEsperado)) {
                aulaIdCriada = a.getId();
                break;
            }
        }
    }
    
    @Quando("o professor cancela a aula definitivamente")
    public void o_professor_cancela_a_aula_definitivamente() {
        mensagemSistema = contexto.aulaService.cancelarAulaDefinitivamenteComMensagem(aulaIdCriada);
    }
    
    @Então("a aula é cancelada e o horário fica disponível para novas aulas")
    public void a_aula_e_cancelada_e_o_horario_fica_disponivel_para_novas_aulas() {
        assertEquals("Aula cancelada com sucesso", mensagemSistema);
    }
    
    @Dado("existe uma aula recorrente de {string} às quartas-feiras")
    public void existe_uma_aula_recorrente_as_quartas_feiras(String modalidadeStr) {
        this.professorId = new ProfessorId(1);
        modalidadeEsperada = Modalidade.valueOf(modalidadeStr);
        espacoEsperado = Espaco.AREA_DE_LUTAS;
        capacidadeEsperada = 20;
        
        // Encontra próxima quarta-feira
        LocalDate dataInicio = LocalDate.now();
        while (dataInicio.getDayOfWeek() != java.time.DayOfWeek.WEDNESDAY) {
            dataInicio = dataInicio.plusDays(1);
        }
        
        inicioEsperado = LocalDateTime.of(dataInicio, LocalTime.of(19, 0));
        fimEsperado = inicioEsperado.plusHours(1);
        LocalDate dataFim = dataInicio.plusMonths(3);
        List<DiaDaSemana> dias = Arrays.asList(DiaDaSemana.QUARTA);
        
        contexto.aulaService.criarAulaRecorrenteComMensagem(
            professorId, modalidadeEsperada, espacoEsperado, capacidadeEsperada, inicioEsperado, fimEsperado, 
            TipoRecorrencia.SEMANAL, dias, dataFim
        );
        
        // Busca a aula criada no repositório
        List<Aula> aulas = contexto.repositorio.listarTodas();
        for (Aula a : aulas) {
            if (a.getProfessorId().equals(professorId) && a.getInicio().equals(inicioEsperado)) {
                aulaIdCriada = a.getId();
                break;
            }
        }
    }
    
    @Quando("o professor cancela a aula recorrente definitivamente")
    public void o_professor_cancela_a_aula_recorrente_definitivamente() {
        mensagemSistema = contexto.aulaService.cancelarAulaDefinitivamenteComMensagem(aulaIdCriada);
    }
    
    @Então("todas as ocorrências futuras são canceladas no sistema")
    public void todas_as_ocorrencias_futuras_sao_canceladas_no_sistema() {
        assertEquals("Aula cancelada com sucesso", mensagemSistema);
    }
}