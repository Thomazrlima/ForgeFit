package br.com.forgefit.apresentacao.evento;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import br.com.forgefit.aplicacao.frequencia.EmailSender;
import br.com.forgefit.dominio.evento.EventoBarramento;
import br.com.forgefit.dominio.evento.EventoBarramentoImpl;
import br.com.forgefit.dominio.frequencia.AlunoBloqueadoEvento;
import br.com.forgefit.dominio.frequencia.AlunoAdvertidoEvento;
import br.com.forgefit.dominio.frequencia.AlunoDesbloqueadoEvento;
import br.com.forgefit.dominio.usuario.UsuarioMockRepositorio;

/**
 * Handler que escuta eventos de frequência e envia emails.
 * Implementa o padrão de inversão: domínio gera, infraestrutura consome.
 */
@Component
public class FrequenciaEventoEmailHandler implements EventoBarramentoImpl.EventoHandler {
    private static final Logger logger = LoggerFactory.getLogger(FrequenciaEventoEmailHandler.class);
    
    private final EmailSender emailSender;
    private final UsuarioMockRepositorio usuarioRepositorio;
    
    public FrequenciaEventoEmailHandler(EmailSender emailSender, UsuarioMockRepositorio usuarioRepositorio) {
        this.emailSender = emailSender;
        this.usuarioRepositorio = usuarioRepositorio;
    }
    
    @Override
    public void manipular(Object evento) {
        System.out.println("[DEBUG EMAIL HANDLER] Recebeu evento: " + evento.getClass().getSimpleName());
        if (evento instanceof AlunoBloqueadoEvento) {
            System.out.println("[DEBUG EMAIL HANDLER] Tratando evento de bloqueio");
            tratarBloqueio((AlunoBloqueadoEvento) evento);
        } else if (evento instanceof AlunoAdvertidoEvento) {
            System.out.println("[DEBUG EMAIL HANDLER] Tratando evento de advertência");
            tratarAdvertencia((AlunoAdvertidoEvento) evento);
        } else if (evento instanceof AlunoDesbloqueadoEvento) {
            System.out.println("[DEBUG EMAIL HANDLER] Tratando evento de desbloqueio");
            tratarDesbloqueio((AlunoDesbloqueadoEvento) evento);
        }
    }
    
    private void tratarBloqueio(AlunoBloqueadoEvento evento) {
        try {
            String email = obterEmail(evento.getMatricula().getValor());
            if (email != null) {
                String assunto = "ForgeFit - Bloqueio por Faltas";
                String mensagem = String.format(
                    "Olá %s,\n\n" +
                    "Você foi bloqueado por excesso de faltas (%d faltas em 30 dias).\n" +
                    "Seu bloqueio será removido em: %s\n" +
                    "Bloqueio por: %d dias\n\n" +
                    "Atenciosamente,\nEquipe ForgeFit",
                    evento.getNomeAluno(),
                    evento.getQuantidadeFaltas(),
                    evento.getBloqueioAte(),
                    evento.getDiasBloqueio()
                );
                
                emailSender.enviarEmail(email, assunto, mensagem);
                logger.info("Email de bloqueio enviado para {} ({})", evento.getNomeAluno(), email);
            }
        } catch (Exception e) {
            logger.error("Erro ao enviar email de bloqueio para {}: {}", 
                evento.getNomeAluno(), e.getMessage());
        }
    }
    
    private void tratarAdvertencia(AlunoAdvertidoEvento evento) {
        try {
            String email = obterEmail(evento.getMatricula().getValor());
            if (email != null) {
                String assunto = "ForgeFit - Advertência por Faltas";
                String mensagem = String.format(
                    "Olá %s,\n\n" +
                    "ATENÇÃO: Você acumulou %d faltas em 30 dias.\n" +
                    "Mais %d falta(s) e você será bloqueado por 7 dias.\n\n" +
                    "Por favor, mantenha sua frequência em dia.\n\n" +
                    "Atenciosamente,\nEquipe ForgeFit",
                    evento.getNomeAluno(),
                    evento.getQuantidadeFaltas(),
                    evento.getFaltasRestantes()
                );
                
                emailSender.enviarEmail(email, assunto, mensagem);
                logger.info("Email de advertência enviado para {} ({})", evento.getNomeAluno(), email);
            }
        } catch (Exception e) {
            logger.error("Erro ao enviar email de advertência para {}: {}", 
                evento.getNomeAluno(), e.getMessage());
        }
    }
    
    private void tratarDesbloqueio(AlunoDesbloqueadoEvento evento) {
        try {
            String email = obterEmail(evento.getMatricula().getValor());
            if (email != null) {
                String assunto = "ForgeFit - Desbloqueio";
                String mensagem = String.format(
                    "Olá %s,\n\n" +
                    "Seu bloqueio foi removido. Você já pode fazer novas reservas.\n\n" +
                    "Atenciosamente,\nEquipe ForgeFit",
                    evento.getNomeAluno()
                );
                
                emailSender.enviarEmail(email, assunto, mensagem);
                logger.info("Email de desbloqueio enviado para {} ({})", evento.getNomeAluno(), email);
            }
        } catch (Exception e) {
            logger.error("Erro ao enviar email de desbloqueio para {}: {}", 
                evento.getNomeAluno(), e.getMessage());
        }
    }
    
    private String obterEmail(String matricula) {
        try {
            Integer id = Integer.parseInt(matricula);
            return usuarioRepositorio.findById(id)
                    .map(usuario -> usuario.getEmail())
                    .orElse(null);
        } catch (NumberFormatException e) {
            logger.warn("Matrícula inválida para conversão: {}", matricula);
            return null;
        }
    }
}
