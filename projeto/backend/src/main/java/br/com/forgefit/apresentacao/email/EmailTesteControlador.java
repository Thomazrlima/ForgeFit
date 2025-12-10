package br.com.forgefit.apresentacao.email;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.forgefit.aplicacao.frequencia.EmailSender;

/**
 * Controlador para testar envio de emails.
 * APENAS PARA DESENVOLVIMENTO/TESTES.
 */
@RestController
@RequestMapping("api/email-teste")
public class EmailTesteControlador {
    
    private static final Logger logger = LoggerFactory.getLogger(EmailTesteControlador.class);
    
    @Autowired
    private EmailSender emailSender;

    /**
     * Envia um email de teste.
     * POST /api/email-teste
     * Body: {"destinatario": "email@example.com", "assunto": "Teste", "mensagem": "Mensagem de teste"}
     */
    @PostMapping
    public ResponseEntity<EmailTesteResponse> enviarEmailTeste(@RequestBody EmailTesteRequest request) {
        try {
            logger.info("Enviando email de teste para: {}", request.destinatario());
            
            String destinatario = request.destinatario();
            String assunto = request.assunto() != null ? request.assunto() : "ForgeFit - Email de Teste";
            String mensagem = request.mensagem() != null ? request.mensagem() : "Este é um email de teste do sistema ForgeFit.";
            
            emailSender.enviarEmail(destinatario, assunto, mensagem);
            
            logger.info("Email de teste enviado com sucesso para: {}", destinatario);
            return ResponseEntity.ok(new EmailTesteResponse(
                true, 
                "Email enviado com sucesso para " + destinatario,
                destinatario,
                assunto
            ));
            
        } catch (Exception e) {
            logger.error("Erro ao enviar email de teste: {}", e.getMessage(), e);
            return ResponseEntity.status(500)
                .body(new EmailTesteResponse(
                    false,
                    "Erro ao enviar email: " + e.getMessage(),
                    request.destinatario(),
                    null
                ));
        }
    }
    
    /**
     * Verifica configuração de email.
     * GET /api/email-teste/config
     */
    @GetMapping("/config")
    public ResponseEntity<ConfigEmailResponse> verificarConfig() {
        try {
            // Retorna informações básicas sobre a configuração (sem expor senha)
            return ResponseEntity.ok(new ConfigEmailResponse(
                true,
                "Configuração de email disponível",
                "smtp.gmail.com",
                587,
                "gitpentes@gmail.com"
            ));
        } catch (Exception e) {
            return ResponseEntity.status(500)
                .body(new ConfigEmailResponse(
                    false,
                    "Erro ao verificar configuração: " + e.getMessage(),
                    null,
                    null,
                    null
                ));
        }
    }
}

record EmailTesteRequest(
    String destinatario,
    String assunto,
    String mensagem
) {}

record EmailTesteResponse(
    boolean sucesso,
    String mensagem,
    String destinatario,
    String assunto
) {}

record ConfigEmailResponse(
    boolean sucesso,
    String mensagem,
    String host,
    Integer porta,
    String remetente
) {}
