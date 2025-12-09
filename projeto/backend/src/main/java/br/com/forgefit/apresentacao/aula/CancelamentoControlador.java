package br.com.forgefit.apresentacao.aula;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import br.com.forgefit.aplicacao.aula.CancelamentoResumo;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.aula.ReservaService;

import java.time.LocalDateTime;

/**
 * Controlador REST para operações de cancelamento de reserva.
 * Segue o padrão do AvaliacaoControlador.
 */
@RestController
@RequestMapping("api/reservas/cancelar")
public class CancelamentoControlador {
    
    private static final Logger logger = LoggerFactory.getLogger(CancelamentoControlador.class);
    
    @Autowired
    private ReservaService reservaService;

    @RequestMapping(method = POST)
    public ResponseEntity<CancelamentoResponse> cancelarReserva(@RequestBody CancelamentoResumo request) {
        try {
            logger.info("Recebendo cancelamento: alunoMatricula='{}', aulaId={}", 
                request.getAlunoMatricula(), request.getAulaId());
            
            if (!request.isValid()) {
                return ResponseEntity.badRequest()
                    .body(new CancelamentoResponse(false, "Todos os campos obrigatórios devem ser preenchidos"));
            }

            Matricula matricula = new Matricula(request.getAlunoMatriculaTrimmed());
            AulaId aulaId = new AulaId(request.getAulaId());
            
            logger.info("Tentando cancelar reserva - matricula='{}', aulaId={}", 
                matricula.getValor(), request.getAulaId());
            
            String mensagem = reservaService.cancelarReserva(
                matricula,
                aulaId,
                LocalDateTime.now()
            );
            
            logger.info("Cancelamento realizado com sucesso: {}", mensagem);
            
            return ResponseEntity.status(HttpStatus.OK)
                .body(new CancelamentoResponse(true, mensagem));
            
        } catch (IllegalArgumentException e) {
            logger.warn("Erro de validação ao cancelar reserva", e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(new CancelamentoResponse(false, e.getMessage()));
        } catch (Exception e) {
            logger.error("Erro ao cancelar reserva", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new CancelamentoResponse(false, "Erro ao processar cancelamento: " + e.getMessage()));
        }
    }
}

record CancelamentoResponse(
    boolean sucesso,
    String mensagem
) {}
