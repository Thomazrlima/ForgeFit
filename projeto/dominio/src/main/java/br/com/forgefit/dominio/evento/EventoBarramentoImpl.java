package br.com.forgefit.dominio.evento;

import java.util.ArrayList;
import java.util.List;

/**
 * Implementação do barramento de eventos no domínio.
 * Delega a execução real para handlers registrados.
 */
public class EventoBarramentoImpl implements EventoBarramento {
    
    /**
     * Interface para handlers que processam eventos.
     */
    public interface EventoHandler {
        void manipular(Object evento);
    }
    
    private final List<EventoHandler> handlers = new ArrayList<>();
    
    public void registrar(EventoHandler handler) {
        if (handler != null && !handlers.contains(handler)) {
            handlers.add(handler);
        }
    }
    
    public void remover(EventoHandler handler) {
        handlers.remove(handler);
    }
    
    @Override
    public void postar(Object evento) {
        if (evento == null) {
            return;
        }
        
        for (EventoHandler handler : handlers) {
            try {
                handler.manipular(evento);
            } catch (Exception e) {
                // Não propaga exceção para não interromper outros handlers
                System.err.println("Erro ao manipular evento: " + e.getMessage());
                e.printStackTrace();
            }
        }
    }
}
