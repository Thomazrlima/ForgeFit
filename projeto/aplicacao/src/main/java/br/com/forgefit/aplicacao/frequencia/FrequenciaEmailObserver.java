package br.com.forgefit.aplicacao.frequencia;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.frequencia.FrequenciaObserver;
import br.com.forgefit.dominio.usuario.UsuarioMockRepositorio;

/**
 * Observador concreto que envia notificações por email quando há mudanças na frequência.
 * Implementa o padrão Observer para receber notificações do FrequenciaService.
 */
public class FrequenciaEmailObserver implements FrequenciaObserver {
    private static final Logger logger = LoggerFactory.getLogger(FrequenciaEmailObserver.class);
    
    private final EmailSender emailSender;
    private final UsuarioMockRepositorio usuarioRepositorio;
    
    public FrequenciaEmailObserver(EmailSender emailSender, UsuarioMockRepositorio usuarioRepositorio) {
        this.emailSender = emailSender;
        this.usuarioRepositorio = usuarioRepositorio;
    }
    
    @Override
    public void notificarBloqueio(Aluno aluno, long quantidadeFaltas, int diasBloqueio) {
        try {
            String destinatario = obterEmailDoAluno(aluno);
            if (destinatario != null) {
                String assunto = "ForgeFit - Bloqueio por Faltas";
                String mensagem = String.format(
                    "Olá %s,%n%n" +
                    "Você foi bloqueado por excesso de faltas (%d faltas em 30 dias).%n" +
                    "Seu bloqueio durará %d dias.%n" +
                    "Durante este período, você não poderá fazer novas reservas.%n%n" +
                    "Atenciosamente,%n" +
                    "Equipe ForgeFit",
                    aluno.getNome(),
                    quantidadeFaltas,
                    diasBloqueio
                );
                
                emailSender.enviarEmail(destinatario, assunto, mensagem);
                logger.info("[OBSERVER EMAIL] Email de bloqueio enviado para {} ({})",
                    aluno.getNome(), destinatario);
            }
        } catch (Exception e) {
            logger.error("[OBSERVER EMAIL] Erro ao enviar email de bloqueio para {}: {}",
                aluno.getNome(), e.getMessage());
        }
    }
    
    @Override
    public void notificarAdvertencia(Aluno aluno, long quantidadeFaltas, int faltasRestantes) {
        try {
            String destinatario = obterEmailDoAluno(aluno);
            if (destinatario != null) {
                String assunto = "ForgeFit - Advertência por Faltas";
                String mensagem = String.format(
                    "Olá %s,%n%n" +
                    "ATENÇÃO: Você acumulou %d faltas em 30 dias.%n" +
                    "Mais %d falta(s) e você será bloqueado por 7 dias.%n%n" +
                    "Por favor, mantenha sua frequência em dia.%n%n" +
                    "Atenciosamente,%n" +
                    "Equipe ForgeFit",
                    aluno.getNome(),
                    quantidadeFaltas,
                    faltasRestantes
                );
                
                emailSender.enviarEmail(destinatario, assunto, mensagem);
                logger.info("[OBSERVER EMAIL] Email de advertência enviado para {} ({})",
                    aluno.getNome(), destinatario);
            }
        } catch (Exception e) {
            logger.error("[OBSERVER EMAIL] Erro ao enviar email de advertência para {}: {}",
                aluno.getNome(), e.getMessage());
        }
    }
    
    @Override
    public void notificarDesbloqueio(Aluno aluno) {
        try {
            String destinatario = obterEmailDoAluno(aluno);
            if (destinatario != null) {
                String assunto = "ForgeFit - Desbloqueio";
                String mensagem = String.format(
                    "Olá %s,%n%n" +
                    "Seu bloqueio foi removido. Você já pode fazer novas reservas.%n%n" +
                    "Atenciosamente,%n" +
                    "Equipe ForgeFit",
                    aluno.getNome()
                );
                
                emailSender.enviarEmail(destinatario, assunto, mensagem);
                logger.info("[OBSERVER EMAIL] Email de desbloqueio enviado para {} ({})",
                    aluno.getNome(), destinatario);
            }
        } catch (Exception e) {
            logger.error("[OBSERVER EMAIL] Erro ao enviar email de desbloqueio para {}: {}",
                aluno.getNome(), e.getMessage());
        }
    }
    
    /**
     * Obtém o email do aluno através do userId vinculado.
     * Busca no repositório de usuários para obter o email real.
     */
    private String obterEmailDoAluno(Aluno aluno) {
        if (aluno.getUserId() == null) {
            logger.warn("Aluno {} não possui userId vinculado", aluno.getMatricula().getValor());
            return null;
        }
        
        try {
            Integer userId = Integer.parseInt(aluno.getUserId());
            return usuarioRepositorio.findById(userId)
                .map(usuario -> usuario.getEmail())
                .orElseGet(() -> {
                    logger.warn("Email não encontrado para userId {} do aluno {}", 
                        userId, aluno.getMatricula().getValor());
                    return null;
                });
        } catch (NumberFormatException e) {
            logger.error("UserId inválido para aluno {}: {}", 
                aluno.getMatricula().getValor(), aluno.getUserId());
            return null;
        }
    }
}
