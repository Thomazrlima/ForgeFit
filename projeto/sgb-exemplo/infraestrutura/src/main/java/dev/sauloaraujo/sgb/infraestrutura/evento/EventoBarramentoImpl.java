package dev.sauloaraujo.sgb.infraestrutura.evento;

import static org.apache.commons.lang3.Validate.notNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.ApplicationListener;
import org.springframework.context.PayloadApplicationEvent;
import org.springframework.context.event.ApplicationEventMulticaster;
import org.springframework.stereotype.Component;

import dev.sauloaraujo.sgb.dominio.evento.EventoBarramento;
import dev.sauloaraujo.sgb.dominio.evento.EventoObservador;

@Component
public class EventoBarramentoImpl implements EventoBarramento {
	@Autowired
	private ApplicationEventMulticaster multicaster;

	@Autowired
	private ApplicationEventPublisher publicador;

	@Override
	public <E> void adicionar(EventoObservador<E> observador) {
		notNull(observador, "O observador não pode ser nulo");

		multicaster.addApplicationListener(new ApplicationListener<PayloadApplicationEvent<E>>() {
			public void onApplicationEvent(PayloadApplicationEvent<E> evento) {
				observador.observarEvento(evento.getPayload());
			};
		});
	}

	@Override
	public <E> void postar(E evento) {
		publicador.publishEvent(evento);
	}
}