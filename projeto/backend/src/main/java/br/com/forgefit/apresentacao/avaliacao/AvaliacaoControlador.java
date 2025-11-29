package br.com.forgefit.apresentacao.avaliacao;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import br.com.forgefit.aplicacao.avaliacao.AvaliacaoResumo;
import br.com.forgefit.dominio.avaliacao.AvaliacaoService;
import br.com.forgefit.dominio.avaliacao.Notas;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.professor.ProfessorId;
import br.com.forgefit.dominio.aula.AulaId;

import java.time.LocalDate;

@RestController
@RequestMapping("api/avaliacoes")
public class AvaliacaoControlador {
    
    private static final Logger logger = LoggerFactory.getLogger(AvaliacaoControlador.class);
    
    @Autowired
    private AvaliacaoService avaliacaoService;

    @RequestMapping(method = POST)
    public ResponseEntity<AvaliacaoResponse> criarAvaliacao(@RequestBody AvaliacaoResumo resumo) {
        try {
            logger.info("Recebendo avaliação: alunoMatricula={}, professorId={}, aulaId={}", 
                resumo.getAlunoMatricula(), resumo.getProfessorId(), resumo.getAulaId());
            
            if (!resumo.isValid()) {
                return ResponseEntity.badRequest()
                    .body(new AvaliacaoResponse(false, "Todos os campos obrigatórios devem ser preenchidos"));
            }
            
            if (!resumo.hasValidRatings()) {
                return ResponseEntity.badRequest()
                    .body(new AvaliacaoResponse(false, "As notas devem estar entre 1 e 5"));
            }

            Matricula matricula = new Matricula(resumo.getAlunoMatriculaTrimmed());
            ProfessorId professorId = new ProfessorId(resumo.getProfessorId());
            AulaId aulaId = new AulaId(resumo.getAulaId());
            Notas notas = new Notas(
                resumo.getNotaPontualidade(),
                resumo.getNotaDidatica(),
                resumo.getNotaAtencao()
            );
            
            String mensagem = avaliacaoService.criarAvaliacaoComMensagem(
                matricula,
                professorId,
                aulaId,
                resumo.getDataOcorrenciaAula(),
                notas,
                resumo.getComentarioTrimmed()
            );
            
            logger.info("Avaliação criada com sucesso: {}", mensagem);
            
            return ResponseEntity.status(HttpStatus.CREATED)
                .body(new AvaliacaoResponse(true, mensagem));
            
        } catch (Exception e) {
            logger.error("Erro ao criar avaliação", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new AvaliacaoResponse(false, "Erro ao processar avaliação: " + e.getMessage()));
        }
    }
}

record AvaliacaoResponse(
    boolean sucesso,
    String mensagem
) {}
