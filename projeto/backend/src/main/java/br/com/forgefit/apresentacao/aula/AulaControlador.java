package br.com.forgefit.apresentacao.aula;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.forgefit.aplicacao.aula.AulaResumo;
import br.com.forgefit.aplicacao.aula.AulaServicoAplicacao;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.aula.ReservaService;

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
    private ReservaService reservaService;

    /**
     * Lista todas as aulas ativas ou filtra por categoria/modalidade.
     * GET /api/aulas?categoria=Yoga
     * 
     * @param categoria Filtro opcional de categoria/modalidade
     * @return Lista de resumos de aulas
     */
    @RequestMapping(method = GET)
    List<AulaResumo> listarAulas(@RequestParam(required = false) String categoria) {
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
}
