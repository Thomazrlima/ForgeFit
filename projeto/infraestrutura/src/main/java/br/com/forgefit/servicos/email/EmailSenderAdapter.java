package br.com.forgefit.servicos.email;

import org.springframework.stereotype.Component;

import br.com.forgefit.aplicacao.frequencia.EmailSender;

/**
 * Adaptador que implementa a interface EmailSender da camada de aplicação
 * usando o serviço de email da infraestrutura.
 */
@Component
public class EmailSenderAdapter implements EmailSender {
    
    private final EmailService emailService;
    
    public EmailSenderAdapter(EmailService emailService) {
        this.emailService = emailService;
    }
    
    @Override
    public void enviarEmail(String para, String assunto, String mensagem) {
        emailService.enviarEmail(para, assunto, mensagem);
    }
}
