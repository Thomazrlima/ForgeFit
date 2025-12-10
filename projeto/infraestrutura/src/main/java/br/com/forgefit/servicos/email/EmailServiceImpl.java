package br.com.forgefit.servicos.email;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

/**
 * Implementação do serviço de envio de emails usando JavaMailSender.
 */
@Service
public class EmailServiceImpl implements EmailService {
    
    private static final Logger logger = LoggerFactory.getLogger(EmailServiceImpl.class);
    
    private final JavaMailSender mailSender;
    
    public EmailServiceImpl(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }
    
    @Override
    public void enviarEmail(String para, String assunto, String mensagem) {
        try {
            SimpleMailMessage email = new SimpleMailMessage();
            email.setTo(para);
            email.setSubject(assunto);
            email.setText(mensagem);
            
            mailSender.send(email);
            logger.info("Email enviado com sucesso para: {}", para);
            
        } catch (MailException e) {
            logger.error("Erro ao enviar email para {}: {}", para, e.getMessage(), e);
            throw new RuntimeException("Falha ao enviar email", e);
        }
    }
    
    @Override
    public void enviarEmailHtml(String para, String assunto, String mensagemHtml) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
            
            helper.setTo(para);
            helper.setSubject(assunto);
            helper.setText(mensagemHtml, true);
            
            mailSender.send(mimeMessage);
            logger.info("Email HTML enviado com sucesso para: {}", para);
            
        } catch (MessagingException | MailException e) {
            logger.error("Erro ao enviar email HTML para {}: {}", para, e.getMessage(), e);
            throw new RuntimeException("Falha ao enviar email HTML", e);
        }
    }
}
