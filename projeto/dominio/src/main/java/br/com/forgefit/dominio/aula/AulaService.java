package br.com.forgefit.dominio.aula;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDateTime;
import java.util.concurrent.atomic.AtomicInteger;

import br.com.forgefit.dominio.aula.enums.Espaco;
import br.com.forgefit.dominio.aula.enums.Modalidade;

public class AulaService {
    private final AulaRepositorio aulaRepositorio;
    private final AtomicInteger contadorId = new AtomicInteger(1);

    public AulaService(AulaRepositorio aulaRepositorio) {
        notNull(aulaRepositorio, "O repositório de aulas não pode ser nulo");
        this.aulaRepositorio = aulaRepositorio;
    }

    public Aula criarAulaUnica(Modalidade modalidade, Espaco espaco, int capacidade,
                               LocalDateTime inicio, LocalDateTime fim) {
        AulaId id = new AulaId(contadorId.getAndIncrement());
        Aula aula = new Aula(id, modalidade, espaco, capacidade, inicio, fim);
        aulaRepositorio.salvar(aula);
        return aula;
    }

    public void cancelarAula(AulaId aulaId) {
        Aula aula = aulaRepositorio.obterPorId(aulaId)
            .orElseThrow(() -> new IllegalArgumentException("Aula não encontrada"));
        aula.cancelar();
        aulaRepositorio.salvar(aula);
    }

    public Aula obter(AulaId aulaId) {
        return aulaRepositorio.obterPorId(aulaId)
            .orElseThrow(() -> new IllegalArgumentException("Aula não encontrada"));
    }
}
