package br.com.forgefit.apresentacao.ranking;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.forgefit.aplicacao.ranking.RankingItemResumo;
import br.com.forgefit.aplicacao.ranking.RankingServicoAplicacao;
import br.com.forgefit.dominio.ranking.enums.PeriodoRanking;

/**
 * Controlador REST para operações relacionadas ao ranking de alunos.
 * Segue o padrão da arquitetura SGB adaptado ao ForgeFit.
 */
@RestController
@RequestMapping("api/ranking")
class RankingControlador {

    @Autowired
    private RankingServicoAplicacao rankingServicoAplicacao;

    /**
     * Lista o ranking completo de um período específico.
     * GET /api/ranking?periodo=SEMANAL
     * 
     * @param periodo Período do ranking (SEMANAL, MENSAL, GERAL). Default: SEMANAL
     * @return Lista ordenada de itens do ranking
     */
    @RequestMapping(method = GET)
    List<RankingItemResumo> listarRanking(
            @RequestParam(required = false, defaultValue = "SEMANAL") String periodo) {
        try {
            PeriodoRanking periodoEnum = PeriodoRanking.valueOf(periodo.toUpperCase());
            return rankingServicoAplicacao.listarRanking(periodoEnum);
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Período inválido: " + periodo + ". Use SEMANAL, MENSAL ou GERAL");
        }
    }

    /**
     * Lista o pódio (top 3) do ranking.
     * GET /api/ranking/podio?periodo=SEMANAL
     * 
     * @param periodo Período do ranking (SEMANAL, MENSAL, GERAL). Default: SEMANAL
     * @return Lista com os 3 primeiros colocados
     */
    @RequestMapping(method = GET, path = "/podio")
    List<RankingItemResumo> listarPodio(
            @RequestParam(required = false, defaultValue = "SEMANAL") String periodo) {
        try {
            PeriodoRanking periodoEnum = PeriodoRanking.valueOf(periodo.toUpperCase());
            return rankingServicoAplicacao.listarPodio(periodoEnum);
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Período inválido: " + periodo + ". Use SEMANAL, MENSAL ou GERAL");
        }
    }

    /**
     * Lista os top N alunos do ranking.
     * GET /api/ranking/top/{limite}?periodo=SEMANAL
     * 
     * @param limite  Número de alunos a retornar
     * @param periodo Período do ranking (SEMANAL, MENSAL, GERAL). Default: SEMANAL
     * @return Lista com os N primeiros colocados
     */
    @RequestMapping(method = GET, path = "/top/{limite}")
    List<RankingItemResumo> listarTopN(
            @PathVariable Integer limite,
            @RequestParam(required = false, defaultValue = "SEMANAL") String periodo) {
        try {
            PeriodoRanking periodoEnum = PeriodoRanking.valueOf(periodo.toUpperCase());
            return rankingServicoAplicacao.listarTopN(periodoEnum, limite);
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Período inválido: " + periodo + ". Use SEMANAL, MENSAL ou GERAL");
        }
    }

    /**
     * Busca a posição de um aluno específico no ranking.
     * GET /api/ranking/aluno/{matricula}?periodo=SEMANAL
     * 
     * @param matricula Matrícula do aluno
     * @param periodo   Período do ranking (SEMANAL, MENSAL, GERAL). Default:
     *                  SEMANAL
     * @return Item do ranking do aluno
     */
    @RequestMapping(method = GET, path = "/aluno/{matricula}")
    ResponseEntity<RankingItemResumo> buscarPosicaoAluno(
            @PathVariable String matricula,
            @RequestParam(required = false, defaultValue = "SEMANAL") String periodo) {
        try {
            PeriodoRanking periodoEnum = PeriodoRanking.valueOf(periodo.toUpperCase());
            RankingItemResumo item = rankingServicoAplicacao.buscarPosicaoAluno(periodoEnum, matricula);

            if (item == null) {
                return ResponseEntity.notFound().build();
            }

            return ResponseEntity.ok(item);
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Período inválido: " + periodo + ". Use SEMANAL, MENSAL ou GERAL");
        }
    }

    /**
     * Lista os períodos disponíveis para consulta.
     * GET /api/ranking/periodos
     * 
     * @return Lista de períodos disponíveis
     */
    @RequestMapping(method = GET, path = "/periodos")
    List<String> listarPeriodos() {
        return List.of("SEMANAL", "MENSAL", "GERAL");
    }
}
