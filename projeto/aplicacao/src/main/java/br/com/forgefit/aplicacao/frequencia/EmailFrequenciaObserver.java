package br.com.forgefit.aplicacao.frequencia;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.usuario.UsuarioMockRepositorio;

/**
 * @deprecated Substituído por FrequenciaEventoEmailHandler na infraestrutura.
 * A nova implementação consome eventos de domínio via EventoBarramento,
 * mantendo a inversão de dependência correta (domínio não conhece infraestrutura).
 * Este código será removido em versão futura.
 */
@Deprecated
public class EmailFrequenciaObserver implements FrequenciaObserver {
    private static final Logger logger = LoggerFactory.getLogger(EmailFrequenciaObserver.class);
    
    private final EmailSender emailSender;
    private final UsuarioMockRepositorio usuarioRepositorio;
    
    public EmailFrequenciaObserver(EmailSender emailSender, UsuarioMockRepositorio usuarioRepositorio) {
        this.emailSender = emailSender;
        this.usuarioRepositorio = usuarioRepositorio;
    }
    
    private String obterEmailDoAluno(Aluno aluno) {
        if (aluno.getUserId() == null) {
            logger.warn("Aluno {} não possui userId vinculado", aluno.getMatricula().getValor());
            return null;
        }
        
        try {
            Integer userId = Integer.parseInt(aluno.getUserId());
            return usuarioRepositorio.findById(userId)
                .map(usuario -> usuario.getEmail())
                .orElse(null);
        } catch (NumberFormatException e) {
            logger.error("UserId inválido para aluno {}: {}", aluno.getMatricula().getValor(), aluno.getUserId());
            return null;
        }
    }

    @Override
    public void notificarBloqueio(Aluno aluno, long quantidadeFaltas, int diasBloqueio) {
        String email = obterEmailDoAluno(aluno);
        if (email == null) {
            logger.warn("Não foi possível enviar email de bloqueio para aluno {}: email não encontrado", 
                aluno.getMatricula().getValor());
            return;
        }
        
        String assunto = "ForgeFit - Bloqueio por Excesso de Faltas";
        String mensagem = String.format(
            "Olá %s,\n\n" +
            "Sua conta foi bloqueada por %d dias devido a %d faltas nos últimos 30 dias.\n" +
            "A conta será desbloqueada automaticamente em: %s\n\n" +
            "Para evitar futuros bloqueios, mantenha sua frequência regular nas aulas.\n\n" +
            "Equipe ForgeFit",
            aluno.getNome(), diasBloqueio, quantidadeFaltas, aluno.getBloqueioAte()
        );
        
        try {
            emailSender.enviarEmail(email, assunto, mensagem);
            logger.info("[EMAIL ENVIADO] Bloqueio notificado para: {}", email);
        } catch (Exception e) {
            logger.error("[EMAIL ERRO] Falha ao enviar notificação de bloqueio para: {}", email, e);
        }
    }

    @Override
    public void notificarAdvertencia(Aluno aluno, long quantidadeFaltas, int faltasRestantes) {
        String email = obterEmailDoAluno(aluno);
        if (email == null) {
            logger.warn("Não foi possível enviar email de advertência para aluno {}: email não encontrado", 
                aluno.getMatricula().getValor());
            return;
        }
        
        String assunto = "ForgeFit - Atenção: Faltas Registradas";
        String mensagem = String.format(
            "Olá %s,\n\n" +
            "Você tem %d faltas registradas nos últimos 30 dias.\n" +
            "Atenção: Mais %d falta(s) resultará(ão) no bloqueio da sua conta por 7 dias.\n\n" +
            "Mantenha sua frequência para continuar aproveitando todos os benefícios do ForgeFit!\n\n" +
            "Equipe ForgeFit",
            aluno.getNome(), quantidadeFaltas, faltasRestantes
        );
        
        try {
            emailSender.enviarEmail(email, assunto, mensagem);
            logger.info("[EMAIL ENVIADO] Advertência enviada para: {}", email);
        } catch (Exception e) {
            logger.error("[EMAIL ERRO] Falha ao enviar advertência para: {}", email, e);
        }
    }

    @Override
    public void notificarDesbloqueio(Aluno aluno) {
        String email = obterEmailDoAluno(aluno);
        if (email == null) {
            logger.warn("Não foi possível enviar email de desbloqueio para aluno {}: email não encontrado", 
                aluno.getMatricula().getValor());
            return;
        }
        
        String assunto = "ForgeFit - Conta Desbloqueada";
        String mensagem = String.format(
            "Olá %s,\n\n" +
            "Sua conta foi reativada com sucesso!\n" +
            "Você já pode realizar novas reservas e participar das aulas.\n\n" +
            "Mantenha sua frequência regular para evitar novos bloqueios.\n\n" +
            "Equipe ForgeFit",
            aluno.getNome()
        );
        
        try {
            emailSender.enviarEmail(email, assunto, mensagem);
            logger.info("[EMAIL ENVIADO] Desbloqueio notificado para: {}", email);
        } catch (Exception e) {
            logger.error("[EMAIL ERRO] Falha ao enviar notificação de desbloqueio para: {}", email, e);
        }
    }
}
