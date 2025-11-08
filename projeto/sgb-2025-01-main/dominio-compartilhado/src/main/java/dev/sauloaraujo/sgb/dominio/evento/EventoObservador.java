package dev.sauloaraujo.sgb.dominio.evento;

public interface EventoObservador<E> {
	void observarEvento(E evento);
}