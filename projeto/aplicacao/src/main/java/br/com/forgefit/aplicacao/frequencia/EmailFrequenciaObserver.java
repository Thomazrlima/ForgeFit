package br.com.forgefit.aplicacao.frequencia;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import br.com.forgefit.dominio.aluno.Aluno;

/**
 * Observer que simula envio de emails sobre eventos de frequência.
 */
public class EmailFrequenciaObserver implements FrequenciaObserver {
    private static final Logger logger = LoggerFactory.getLogger(EmailFrequenciaObserver.class);

    @Override
    public void notificarBloqueio(Aluno aluno, long quantidadeFaltas, int diasBloqueio) {
        String assunto = "ForgeFit - Bloqueio por Excesso de Faltas";
        String mensagem = String.format(
            "Olá %s, sua conta foi bloqueada por %d dias devido a %d faltas (até %s)",
            aluno.getNome(), diasBloqueio, quantidadeFaltas, aluno.getBloqueioAte()
        );
        
        logger.info("[EMAIL] Para: {} - Assunto: {} - Mensagem: {}",
                aluno.getMatricula().getValor(), assunto, mensagem);
        // TODO: Integrar com serviço de email real
    }

    @Override
    public void notificarAdvertencia(Aluno aluno, long quantidadeFaltas, int faltasRestantes) {
        String assunto = "ForgeFit - Atenção: Faltas Registradas";
        String mensagem = String.format(
            "Olá %s, você tem %d faltas. Mais %d faltas levará ao bloqueio.",
            aluno.getNome(), quantidadeFaltas, faltasRestantes
        );
        
        logger.info("[EMAIL] Para: {} - Assunto: {} - Mensagem: {}",
                aluno.getMatricula().getValor(), assunto, mensagem);
    }

    @Override
    public void notificarDesbloqueio(Aluno aluno) {
        String assunto = "ForgeFit - Conta Desbloqueada";
        String mensagem = String.format(
            "Olá %s, sua conta foi reativada!",
            aluno.getNome()
        );
        
        logger.info("[EMAIL] Para: {} - Assunto: {} - Mensagem: {}",
                aluno.getMatricula().getValor(), assunto, mensagem);
    }
}
