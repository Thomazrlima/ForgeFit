package br.com.forgefit.apresentacao.aula;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.forgefit.aplicacao.aula.AulaResumo;
import br.com.forgefit.aplicacao.aula.AulaServicoAplicacao;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.aula.AulaService;
import br.com.forgefit.dominio.aula.ReservaService;
import br.com.forgefit.dominio.professor.ProfessorId;
import br.com.forgefit.dominio.aula.enums.DiaDaSemana;
import br.com.forgefit.dominio.aula.enums.Espaco;
import br.com.forgefit.dominio.aula.enums.Modalidade;
import br.com.forgefit.dominio.aula.enums.TipoRecorrencia;

/**
 * Controlador REST para operações relacionadas a aulas.
 * Segue o padrão da arquitetura SGB adaptado ao ForgeFit.
 */
@RestController
@RequestMapping("api/aulas")
class AulaControlador {

    @Autowired
    private AulaServicoAplicacao aulaServicoAplicacao;

    @Autowired
    private AulaService aulaService;

    @Autowired
    private ReservaService reservaService;

    @RequestMapping(method = GET)
    List<AulaResumo> listarAulas(
            @RequestParam(required = false) String categoria,
            @RequestParam(required = false) String matricula) {
        
        // Se matricula for informada, excluir aulas já inscritas
        if (matricula != null && !matricula.isEmpty()) {
            if (categoria != null && !categoria.isEmpty() && !categoria.equalsIgnoreCase("Todas")) {
                // TODO: Implementar filtro por modalidade excluindo aluno
                return aulaServicoAplicacao.listarPorModalidade(categoria);
            } else {
                return aulaServicoAplicacao.listarAulasAtivasParaAluno(matricula);
            }
        }
        
        // Comportamento original quando não há matricula
        if (categoria != null && !categoria.isEmpty() && !categoria.equalsIgnoreCase("Todas")) {
            return aulaServicoAplicacao.listarPorModalidade(categoria);
        } else {
            return aulaServicoAplicacao.listarAulasAtivas();
        }
    }

    /**
     * Lista categorias/modalidades disponíveis.
     * GET /api/aulas/categorias
     * 
     * @return Lista de categorias únicas
     */
    @RequestMapping(method = GET, path = "/categorias")
    List<String> listarCategorias() {
        // Por enquanto, retorna as categorias fixas do mock
        // Pode ser substituído por consulta ao banco quando necessário
        return List.of("Todas", "Yoga", "Spinning", "Funcional", "Pilates", "Dança", "Luta", "CrossFit", "Musculação");
    }


    @RequestMapping(method = GET, path = "/aluno/{matricula}")
    List<AulaResumo> listarAulasDoAluno(@PathVariable String matricula) {
        return aulaServicoAplicacao.listarAulasDoAluno(matricula);
    }

    /**
     * Inscreve um aluno em uma aula.
     * POST /api/aulas/{aulaId}/inscrever
     * 
     * @param aulaId    ID da aula
     * @param matricula Matrícula do aluno
     * @return Resposta HTTP indicando sucesso ou erro
     */
    @RequestMapping(method = POST, path = "/{aulaId}/inscrever")
    ResponseEntity<String> inscrever(@PathVariable Integer aulaId, @RequestBody String matricula) {
        try {
            AulaId id = new AulaId(aulaId);
            Matricula mat = new Matricula(matricula);

            String resultado = reservaService.tentarReservarVaga(mat, id);

            return ResponseEntity.ok(resultado);
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Erro ao realizar inscrição: " + e.getMessage());
        }
    }

    /**
     * Cancela a inscrição de um aluno em uma aula.
     * POST /api/aulas/{aulaId}/cancelar
     * 
     * @param aulaId    ID da aula
     * @param matricula Matrícula do aluno
     * @return Resposta HTTP indicando sucesso ou erro
     */
    @RequestMapping(method = POST, path = "/{aulaId}/cancelar")
    ResponseEntity<String> cancelar(@PathVariable Integer aulaId, @RequestBody String matricula) {
        try {
            AulaId id = new AulaId(aulaId);
            Matricula mat = new Matricula(matricula);

            String resultado = reservaService.cancelarReserva(mat, id, java.time.LocalDateTime.now());

            return ResponseEntity.ok(resultado);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Erro ao cancelar inscrição: " + e.getMessage());
        }
    }

    /**
     * Cria uma nova aula (única ou recorrente).
     * POST /api/aulas
     * 
     * @param requestDto Dados da aula a criar
     * @param professorIdHeader ID do professor (via header)
     * @return Resposta com dados da aula criada
     */
    @RequestMapping(method = POST)
    ResponseEntity<?> criarAula(
        @RequestBody CriarAulaResumo requestDto,
        @RequestHeader(value = "X-Professor-Id", required = false, defaultValue = "1") Integer professorIdHeader
    ) {
        try {
            System.out.println("=== CRIAR AULA ===");
            System.out.println("Professor ID: " + professorIdHeader);
            System.out.println("Modalidade: " + requestDto.getModalidade());
            System.out.println("Espaco: " + requestDto.getEspaco());
            System.out.println("TipoAula: " + requestDto.getTipoAula());
            System.out.println("Capacidade: " + requestDto.getCapacidade());
            System.out.println("HorarioInicio: " + requestDto.getHorarioInicio());
            System.out.println("HorarioFim: " + requestDto.getHorarioFim());
            
            // Obter ID do professor do header ou usar padrão
            ProfessorId professorId = new ProfessorId(professorIdHeader);

            LocalDateTime inicio = parseDateTime(requestDto.getHorarioInicio());
            LocalDateTime fim = parseDateTime(requestDto.getHorarioFim());

            String mensagem;

            if ("UNICA".equals(requestDto.getTipoAula())) {
                // Criar aula única
                mensagem = aulaService.criarAulaUnicaComMensagem(
                    professorId,
                    Modalidade.valueOf(requestDto.getModalidade()),
                    Espaco.valueOf(requestDto.getEspaco()),
                    requestDto.getCapacidade(),
                    inicio,
                    fim
                );
            } else {
                // Criar aula recorrente
                TipoRecorrencia tipoRecorrencia = TipoRecorrencia.valueOf(requestDto.getTipoAula());
                List<DiaDaSemana> dias = converterDiasSemana(requestDto.getDiasDaSemana());
                LocalDate dataFim = LocalDate.parse(requestDto.getDataFim());

                mensagem = aulaService.criarAulaRecorrenteComMensagem(
                    professorId,
                    Modalidade.valueOf(requestDto.getModalidade()),
                    Espaco.valueOf(requestDto.getEspaco()),
                    requestDto.getCapacidade(),
                    inicio,
                    fim,
                    tipoRecorrencia,
                    dias,
                    dataFim
                );
            }

            if (mensagem.contains("sucesso")) {
                return ResponseEntity.ok(mensagem);
            } else {
                return ResponseEntity.badRequest().body(mensagem);
            }

        } catch (IllegalArgumentException e) {
            System.err.println("Erro de argumento inválido: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Dados inválidos: " + e.getMessage());
        } catch (Exception e) {
            System.err.println("Erro ao criar aula: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("Erro ao criar aula: " + e.getMessage());
        }
    }

    /**
     * Atualiza uma aula existente.
     * PUT /api/aulas/{aulaId}
     * 
     * @param aulaId ID da aula
     * @param requestDto Novos dados da aula
     * @return Resposta com resultado da operação
     */
    @RequestMapping(method = PUT, path = "/{aulaId}")
    ResponseEntity<?> atualizarAula(
        @PathVariable Integer aulaId,
        @RequestBody CriarAulaResumo requestDto
    ) {
        try {

            LocalDateTime novoInicio = parseDateTime(requestDto.getHorarioInicio());
            LocalDateTime novoFim = parseDateTime(requestDto.getHorarioFim());
            AulaId id = new AulaId(aulaId);

            String mensagem = aulaService.alterarHorarioPrincipalComMensagem(id, novoInicio, novoFim);

            if (mensagem.contains("sucesso")) {
                return ResponseEntity.ok(mensagem);
            } else {
                return ResponseEntity.badRequest().body(mensagem);
            }

        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Dados inválidos: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Erro ao atualizar aula: " + e.getMessage());
        }
    }

    /**
     * Deleta uma aula definitivamente.
     * DELETE /api/aulas/{aulaId}
     * 
     * @param aulaId ID da aula
     * @return Resposta com resultado da operação
     */
    @RequestMapping(method = DELETE, path = "/{aulaId}")
    ResponseEntity<?> deletarAula(
        @PathVariable Integer aulaId
    ) {
        try {

            AulaId id = new AulaId(aulaId);
            String mensagem = aulaService.cancelarAulaDefinitivamenteComMensagem(id);

            if (mensagem.contains("sucesso")) {
                return ResponseEntity.ok(mensagem);
            } else {
                return ResponseEntity.badRequest().body(mensagem);
            }

        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Erro ao deletar aula: " + e.getMessage());
        }
    }

    /**
     * Lista as aulas do professor autenticado.
     * GET /api/aulas/professor
     * 
     * @param professorIdHeader ID do professor (via header)
     * @return Lista de aulas do professor
     */
    @RequestMapping(method = GET, path = "/professor")
    ResponseEntity<?> listarAulasDoProfessor(
        @RequestHeader(value = "X-Professor-Id", required = false, defaultValue = "1") Integer professorIdHeader
    ) {
        try {
            ProfessorId professorId = new ProfessorId(professorIdHeader);
            List<AulaResumo> aulas = aulaServicoAplicacao.listarAulasDoProfessor(professorId.getId());

            return ResponseEntity.ok(aulas);

        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Erro ao listar aulas: " + e.getMessage());
        }
    }

    /**
     * Método auxiliar para fazer parse de data/hora ISO 8601 com timezone
     */
    private LocalDateTime parseDateTime(String dateTimeStr) {
        try {
            // Tenta primeiro com ZonedDateTime (aceita .000Z)
            ZonedDateTime zdt = ZonedDateTime.parse(dateTimeStr);
            return zdt.toLocalDateTime();
        } catch (Exception e) {
            // Fallback: tenta parse direto como LocalDateTime
            return LocalDateTime.parse(dateTimeStr);
        }
    }

    /**
     * Converte array de inteiros para lista de DiaDaSemana
     */
    private List<DiaDaSemana> converterDiasSemana(int[] dias) {
        List<DiaDaSemana> resultado = new java.util.ArrayList<>();
        if (dias != null) {
            for (int dia : dias) {
                resultado.add(DiaDaSemana.values()[dia]);
            }
        }
        return resultado;
    }
}
