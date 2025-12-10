package br.com.forgefit.apresentacao.evento;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import br.com.forgefit.aplicacao.frequencia.EmailSender;
import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.Matricula;
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
    private final AlunoRepositorio alunoRepositorio;
    
    public FrequenciaEventoEmailHandler(
            EmailSender emailSender, 
            UsuarioMockRepositorio usuarioRepositorio,
            AlunoRepositorio alunoRepositorio) {
        this.emailSender = emailSender;
        this.usuarioRepositorio = usuarioRepositorio;
        this.alunoRepositorio = alunoRepositorio;
    }
    
    @Override
    public void manipular(Object evento) {
        if (evento instanceof AlunoBloqueadoEvento) {
            tratarBloqueio((AlunoBloqueadoEvento) evento);
        } else if (evento instanceof AlunoAdvertidoEvento) {
            tratarAdvertencia((AlunoAdvertidoEvento) evento);
        } else if (evento instanceof AlunoDesbloqueadoEvento) {
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
            // Busca o aluno pela matrícula para obter o userId
            var alunoOpt = alunoRepositorio.obterPorMatricula(new Matricula(matricula));
            if (alunoOpt.isEmpty()) {
                logger.warn("Aluno não encontrado para matrícula: {}", matricula);
                return null;
            }
            
            String userId = alunoOpt.get().getUserId();
            
            if (userId == null || userId.isEmpty()) {
                logger.warn("UserId null ou vazio para matrícula: {}", matricula);
                return null;
            }
            
            // Converte userId string para Integer para buscar em USUARIOS_MOCK
            Integer userIdInt = Integer.parseInt(userId);
            var usuario = usuarioRepositorio.findById(userIdInt);
            
            if (usuario.isPresent()) {
                return usuario.get().getEmail();
            } else {
                logger.warn("Usuário não encontrado para userId: {}", userIdInt);
                return null;
            }
        } catch (Exception e) {
            logger.error("Erro ao obter email para matrícula {}: {}", matricula, e.getMessage(), e);
            return null;
        }
    }
}
