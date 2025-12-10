package br.com.forgefit.aplicacao.frequencia;

/**
 * Interface para abstração de envio de emails na camada de aplicação.
 * Permite que a aplicação não dependa diretamente da infraestrutura.
 */
public interface EmailSender {
    
    /**
     * Envia um email para o destinatário especificado.
     * 
     * @param para Email do destinatário
     * @param assunto Assunto do email
     * @param mensagem Corpo da mensagem
     */
    void enviarEmail(String para, String assunto, String mensagem);
}
