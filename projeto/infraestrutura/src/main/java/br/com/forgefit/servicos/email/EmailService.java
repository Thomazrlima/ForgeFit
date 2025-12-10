package br.com.forgefit.servicos.email;

/**
 * Interface para serviço de envio de emails.
 */
public interface EmailService {
    
    /**
     * Envia um email simples.
     * 
     * @param para Endereço de email do destinatário
     * @param assunto Assunto do email
     * @param mensagem Corpo do email
     */
    void enviarEmail(String para, String assunto, String mensagem);
    
    /**
     * Envia um email HTML.
     * 
     * @param para Endereço de email do destinatário
     * @param assunto Assunto do email
     * @param mensagemHtml Corpo do email em HTML
     */
    void enviarEmailHtml(String para, String assunto, String mensagemHtml);
}
