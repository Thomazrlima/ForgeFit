package br.com.forgefit.aplicacao.frequencia;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.frequencia.FrequenciaObserver;

/**
 * Observador concreto que envia notificações push quando há mudanças na frequência.
 * Implementa o padrão Observer para receber notificações do FrequenciaService.
 * 
 * Este é um exemplo de como o padrão Observer permite adicionar novos tipos de notificação
 * sem modificar o código existente (princípio Open/Closed).
 */
public class FrequenciaNotificacaoObserver implements FrequenciaObserver {
    private static final Logger logger = LoggerFactory.getLogger(FrequenciaNotificacaoObserver.class);
    
    @Override
    public void notificarBloqueio(Aluno aluno, long quantidadeFaltas, int diasBloqueio) {
        // Simula envio de notificação push
        logger.info("[OBSERVER PUSH] 🚫 Enviando notificação push para {}: BLOQUEADO por {} faltas",
            aluno.getNome(), quantidadeFaltas);
        
        // Em uma implementação real, aqui seria chamado um serviço de push notifications
        // Por exemplo: Firebase Cloud Messaging, OneSignal, etc.
        enviarNotificacaoPush(
            aluno.getUserId(),
            "Conta Bloqueada",
            String.format("Você foi bloqueado por %d faltas. Bloqueio por %d dias.", 
                quantidadeFaltas, diasBloqueio)
        );
    }
    
    @Override
    public void notificarAdvertencia(Aluno aluno, long quantidadeFaltas, int faltasRestantes) {
        logger.info("[OBSERVER PUSH] ⚠️ Enviando notificação push para {}: ADVERTÊNCIA - {} faltas",
            aluno.getNome(), quantidadeFaltas);
        
        enviarNotificacaoPush(
            aluno.getUserId(),
            "Advertência de Faltas",
            String.format("Atenção! Você tem %d faltas. Mais %d e será bloqueado.", 
                quantidadeFaltas, faltasRestantes)
        );
    }
    
    @Override
    public void notificarDesbloqueio(Aluno aluno) {
        logger.info("[OBSERVER PUSH] ✅ Enviando notificação push para {}: DESBLOQUEADO",
            aluno.getNome());
        
        enviarNotificacaoPush(
            aluno.getUserId(),
            "Conta Desbloqueada",
            "Seu bloqueio foi removido. Você já pode fazer novas reservas!"
        );
    }
    
    /**
     * Simula o envio de uma notificação push.
     * Em produção, integrar com Firebase, OneSignal, ou similar.
     */
    private void enviarNotificacaoPush(String userId, String titulo, String mensagem) {
        // Implementação mock - em produção, chamar API de push notifications
        logger.debug("Push enviado para userId {}: {} - {}", userId, titulo, mensagem);
        
        // Exemplo de integração real:
        // pushNotificationService.send(userId, titulo, mensagem);
    }
}
