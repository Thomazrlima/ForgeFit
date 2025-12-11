package br.com.forgefit.apresentacao.avaliacaoFisica;

import static org.springframework.web.bind.annotation.RequestMethod.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import br.com.forgefit.aplicacao.avaliacaoFisica.AlunoResumo;
import br.com.forgefit.aplicacao.avaliacaoFisica.AvaliacaoFisicaResumo;
import br.com.forgefit.aplicacao.avaliacaoFisica.AvaliacaoFisicaServicoAplicacao;
import br.com.forgefit.dominio.aluno.AvaliacaoFisica;
import br.com.forgefit.dominio.professor.ProfessorId;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("api/avaliacoes-fisicas")
public class AvaliacaoFisicaControlador {
    
    private static final Logger logger = LoggerFactory.getLogger(AvaliacaoFisicaControlador.class);
    
    @Autowired
    private AvaliacaoFisicaServicoAplicacao avaliacaoFisicaService;

    @RequestMapping(method = POST)
    public ResponseEntity<AvaliacaoFisicaResponse> cadastrarAvaliacaoFisica(@RequestBody CadastrarAvaliacaoFisicaRequest request) {
        try {
            logger.info("Cadastrando avaliação física: alunoMatricula={}, professorId={}", 
                request.alunoMatricula(), request.professorResponsavelId());
            
            if (!request.isValid()) {
                return ResponseEntity.badRequest()
                    .body(new AvaliacaoFisicaResponse(false, "Todos os campos obrigatórios devem ser preenchidos", null));
            }

            ProfessorId professorId = new ProfessorId(request.professorResponsavelId());
            LocalDate dataAvaliacao = LocalDate.parse(request.dataDaAvaliacao());
            
            AvaliacaoFisica avaliacaoFisica = new AvaliacaoFisica(professorId, dataAvaliacao);
            avaliacaoFisica.setMassaGordaPercentual(request.massaGordaPercentual());
            avaliacaoFisica.setMassaGordaKg(request.massaGordaKg());
            avaliacaoFisica.setMassaMagraKg(request.massaMagraKg());
            avaliacaoFisica.setMassaMuscularEsqueleticaKg(request.massaMuscularEsqueleticaKg());
            avaliacaoFisica.setAguaCorporalTotalPercentual(request.aguaCorporalTotalPercentual());
            avaliacaoFisica.setGorduraVisceralNivel(request.gorduraVisceralNivel());
            avaliacaoFisica.setTaxaMetabolicaBasalKcal(request.taxaMetabolicaBasalKcal());
            avaliacaoFisica.setMassaOsseaKg(request.massaOsseaKg());
            avaliacaoFisica.setIndiceDeMassaCorporal(request.indiceDeMassaCorporal());
            avaliacaoFisica.setBracoRelaxadoCm(request.bracoRelaxadoCm());
            avaliacaoFisica.setBracoContraidoCm(request.bracoContraidoCm());
            avaliacaoFisica.setAntebracoCm(request.antebracoCm());
            avaliacaoFisica.setToraxPeitoralCm(request.toraxPeitoralCm());
            avaliacaoFisica.setCinturaCm(request.cinturaCm());
            avaliacaoFisica.setAbdomenCm(request.abdomenCm());
            avaliacaoFisica.setQuadrilCm(request.quadrilCm());
            avaliacaoFisica.setCoxaCm(request.coxaCm());
            avaliacaoFisica.setPanturrilhaCm(request.panturrilhaCm());
            
            String mensagem = avaliacaoFisicaService.registrarAvaliacaoFisica(
                request.alunoMatricula(),
                avaliacaoFisica
            );
            
            logger.info("Avaliação física cadastrada com sucesso: {}", mensagem);
            
            return ResponseEntity.status(HttpStatus.CREATED)
                .body(new AvaliacaoFisicaResponse(true, mensagem, null));
            
        } catch (Exception e) {
            logger.error("Erro ao cadastrar avaliação física", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new AvaliacaoFisicaResponse(false, "Erro ao processar avaliação física: " + e.getMessage(), null));
        }
    }
    
    @RequestMapping(method = GET, path = "/aluno/{matricula}")
    public ResponseEntity<AvaliacaoFisicaResponse> buscarHistoricoAluno(@PathVariable String matricula) {
        try {
            logger.info("Buscando histórico de avaliações físicas do aluno: {}", matricula);
            
            List<AvaliacaoFisicaResumo> historico = avaliacaoFisicaService.buscarHistoricoAluno(matricula);
            
            return ResponseEntity.ok()
                .body(new AvaliacaoFisicaResponse(true, "Histórico obtido com sucesso", historico));
            
        } catch (Exception e) {
            logger.error("Erro ao buscar histórico de avaliações físicas", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new AvaliacaoFisicaResponse(false, "Erro ao buscar histórico: " + e.getMessage(), null));
        }
    }
    
    @RequestMapping(method = GET, path = "/alunos")
    public ResponseEntity<AlunosResponse> listarAlunos() {
        try {
            logger.info("Listando todos os alunos");
            
            List<AlunoResumo> alunos = avaliacaoFisicaService.listarAlunos();
            
            return ResponseEntity.ok()
                .body(new AlunosResponse(true, "Alunos obtidos com sucesso", alunos));
            
        } catch (Exception e) {
            logger.error("Erro ao listar alunos", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new AlunosResponse(false, "Erro ao listar alunos: " + e.getMessage(), null));
        }
    }
}

record CadastrarAvaliacaoFisicaRequest(
    String alunoMatricula,
    String dataDaAvaliacao,
    Integer professorResponsavelId,
    Double massaGordaPercentual,
    Double massaGordaKg,
    Double massaMagraKg,
    Double massaMuscularEsqueleticaKg,
    Double aguaCorporalTotalPercentual,
    Integer gorduraVisceralNivel,
    Integer taxaMetabolicaBasalKcal,
    Double massaOsseaKg,
    Double indiceDeMassaCorporal,
    Double bracoRelaxadoCm,
    Double bracoContraidoCm,
    Double antebracoCm,
    Double toraxPeitoralCm,
    Double cinturaCm,
    Double abdomenCm,
    Double quadrilCm,
    Double coxaCm,
    Double panturrilhaCm
) {
    boolean isValid() {
        return alunoMatricula != null && !alunoMatricula.trim().isEmpty()
            && dataDaAvaliacao != null && !dataDaAvaliacao.trim().isEmpty()
            && professorResponsavelId != null
            && massaGordaPercentual != null
            && massaGordaKg != null
            && massaMagraKg != null
            && massaMuscularEsqueleticaKg != null
            && aguaCorporalTotalPercentual != null
            && gorduraVisceralNivel != null
            && taxaMetabolicaBasalKcal != null
            && massaOsseaKg != null
            && indiceDeMassaCorporal != null;
    }
}

record AvaliacaoFisicaResponse(
    boolean sucesso,
    String mensagem,
    List<AvaliacaoFisicaResumo> dados
) {}

record AlunosResponse(
    boolean sucesso,
    String mensagem,
    List<AlunoResumo> dados
) {}
