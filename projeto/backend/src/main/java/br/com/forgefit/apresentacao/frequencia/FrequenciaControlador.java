package br.com.forgefit.apresentacao.frequencia;

import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.GET;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import br.com.forgefit.aplicacao.frequencia.RegistroFrequenciaResumo;
import br.com.forgefit.dominio.frequencia.FrequenciaService;
import br.com.forgefit.dominio.frequencia.Frequencia;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aula.AulaId;

import java.time.LocalDate;

/**
 * Controlador REST para operações de controle de frequência.
 * Segue o padrão do AvaliacaoControlador.
 */
@RestController
@RequestMapping("api/frequencia")
public class FrequenciaControlador {
    
    private static final Logger logger = LoggerFactory.getLogger(FrequenciaControlador.class);
    
    @Autowired
    private FrequenciaService frequenciaService;

    /**
     * Registra presença ou falta de um aluno em uma aula.
     */
    @RequestMapping(method = POST)
    public ResponseEntity<FrequenciaResponse> registrarFrequencia(@RequestBody RegistroFrequenciaResumo resumo) {
        try {
            logger.info("Recebendo registro de frequência: alunoMatricula={}, aulaId={}, tipo={}", 
                resumo.getAlunoMatricula(), resumo.getAulaId(), resumo.getTipoRegistro());
            
            if (!resumo.isValid()) {
                return ResponseEntity.badRequest()
                    .body(new FrequenciaResponse(false, "Todos os campos obrigatórios devem ser preenchidos", null));
            }
            
            if (!resumo.hasValidTipo()) {
                return ResponseEntity.badRequest()
                    .body(new FrequenciaResponse(false, "Tipo de registro inválido. Use PRESENCA ou FALTA", null));
            }

            Matricula matricula = new Matricula(resumo.getAlunoMatriculaTrimmed());
            AulaId aulaId = new AulaId(resumo.getAulaId());
            
            Frequencia frequencia;
            String mensagem;
            
            if ("PRESENCA".equalsIgnoreCase(resumo.getTipoRegistro())) {
                frequencia = frequenciaService.registrarPresenca(matricula, aulaId, resumo.getData());
                mensagem = "Presença registrada com sucesso";
            } else {
                frequencia = frequenciaService.registrarFalta(matricula, aulaId, resumo.getData());
                mensagem = "Falta registrada com sucesso";
                
                // Verifica se o aluno foi bloqueado após registrar a falta
                if (frequenciaService.alunoEstaBloqueado(matricula, LocalDate.now())) {
                    mensagem += ". Aluno bloqueado por excesso de faltas";
                }
            }
            
            logger.info("Frequência registrada com sucesso: {}", mensagem);
            
            return ResponseEntity.status(HttpStatus.CREATED)
                .body(new FrequenciaResponse(true, mensagem, frequencia.getStatus().name()));
            
        } catch (IllegalArgumentException e) {
            logger.warn("Erro de validação ao registrar frequência", e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(new FrequenciaResponse(false, e.getMessage(), null));
        } catch (Exception e) {
            logger.error("Erro ao registrar frequência", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new FrequenciaResponse(false, "Erro ao processar registro: " + e.getMessage(), null));
        }
    }

    /**
     * Verifica se um aluno está bloqueado por faltas.
     */
    @RequestMapping(value = "/verificar-bloqueio", method = GET)
    public ResponseEntity<BloqueioResponse> verificarBloqueio(
            @RequestParam("alunoMatricula") String alunoMatriculaStr) {
        try {
            logger.info("Verificando bloqueio para aluno: {}", alunoMatriculaStr);
            
            if (alunoMatriculaStr == null || alunoMatriculaStr.trim().isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(new BloqueioResponse(false, "Matrícula do aluno é obrigatória", null, 0));
            }

            Matricula matricula = new Matricula(alunoMatriculaStr.trim());
            LocalDate dataAtual = LocalDate.now();
            
            boolean bloqueado = frequenciaService.alunoEstaBloqueado(matricula, dataAtual);
            long faltasRecentes = frequenciaService.contarFaltasRecentes(matricula, dataAtual, 30);
            
            String mensagem = bloqueado 
                ? frequenciaService.verificarBloqueioComMensagem(matricula, dataAtual)
                : "Aluno não está bloqueado";
            
            return ResponseEntity.ok()
                .body(new BloqueioResponse(true, mensagem, bloqueado, faltasRecentes));
            
        } catch (IllegalArgumentException e) {
            logger.warn("Erro ao verificar bloqueio", e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(new BloqueioResponse(false, e.getMessage(), null, 0));
        } catch (Exception e) {
            logger.error("Erro ao verificar bloqueio", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new BloqueioResponse(false, "Erro ao verificar bloqueio: " + e.getMessage(), null, 0));
        }
    }
}

record FrequenciaResponse(
    boolean sucesso,
    String mensagem,
    String tipoRegistrado
) {}

record BloqueioResponse(
    boolean sucesso,
    String mensagem,
    Boolean bloqueado,
    long faltasRecentes
) {}
