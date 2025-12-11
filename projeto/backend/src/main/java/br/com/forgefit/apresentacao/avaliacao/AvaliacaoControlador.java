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
    public ResponseEntity<AvaliacaoResponse> criarAvaliacao(@RequestBody CriarAvaliacaoDTO dto) {
        try {
            logger.info("Recebendo avaliação: alunoMatricula={}, professorId={}, aulaId={}", 
                dto.alunoMatricula(), dto.professorId(), dto.aulaId());
            
            // Validações
            if (dto.alunoMatricula() == null || dto.alunoMatricula().isEmpty() ||
                dto.professorId() == null || dto.aulaId() == null || dto.dataOcorrenciaAula() == null ||
                dto.notaPontualidade() == null || dto.notaDidatica() == null || dto.notaAtencao() == null) {
                return ResponseEntity.badRequest()
                    .body(new AvaliacaoResponse(false, "Todos os campos obrigatórios devem ser preenchidos"));
            }
            
            if (dto.notaPontualidade() < 1 || dto.notaPontualidade() > 5 ||
                dto.notaDidatica() < 1 || dto.notaDidatica() > 5 ||
                dto.notaAtencao() < 1 || dto.notaAtencao() > 5) {
                return ResponseEntity.badRequest()
                    .body(new AvaliacaoResponse(false, "As notas devem estar entre 1 e 5"));
            }

            Matricula matricula = new Matricula(dto.alunoMatricula().trim());
            ProfessorId professorId = new ProfessorId(dto.professorId());
            AulaId aulaId = new AulaId(dto.aulaId());
            Notas notas = new Notas(
                dto.notaPontualidade(),
                dto.notaDidatica(),
                dto.notaAtencao()
            );
            
            String mensagem = avaliacaoService.criarAvaliacaoComMensagem(
                matricula,
                professorId,
                aulaId,
                dto.dataOcorrenciaAula(),
                notas,
                dto.comentario() != null ? dto.comentario().trim() : null
            );
            
            logger.info("Avaliação criada com sucesso: {}", mensagem);
            
            return ResponseEntity.status(HttpStatus.CREATED)
                .body(new AvaliacaoResponse(true, mensagem));
            
        } catch (IllegalStateException e) {
            // Erro de negócio (ex: avaliação duplicada)
            logger.warn("Erro de validação: {}", e.getMessage());
            return ResponseEntity.badRequest()
                .body(new AvaliacaoResponse(false, e.getMessage()));
        } catch (Exception e) {
            logger.error("Erro ao criar avaliação", e);
            
            // Verificar se é erro de constraint de duplicidade
            if (e.getMessage() != null && e.getMessage().contains("uk_avaliacao_unica")) {
                return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(new AvaliacaoResponse(false, "Esta aula já foi avaliada por você"));
            }
            
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new AvaliacaoResponse(false, "Erro ao processar avaliação. Tente novamente."));
        }
    }
}

record AvaliacaoResponse(
    boolean sucesso,
    String mensagem
) {}

record CriarAvaliacaoDTO(
    String alunoMatricula,
    Integer professorId,
    Integer aulaId,
    LocalDate dataOcorrenciaAula,
    Integer notaPontualidade,
    Integer notaDidatica,
    Integer notaAtencao,
    String comentario
) {}
