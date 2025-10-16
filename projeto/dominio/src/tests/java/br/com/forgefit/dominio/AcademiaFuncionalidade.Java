package br.com.forgefit.dominio;

import static org.apache.commons.lang3.Validate.notNull;

import java.util.ArrayList;
import java.util.List;

import br.com.forgefit.dominio.aluno.AlunoService;
import br.com.forgefit.dominio.aula.AulaService;
import br.com.forgefit.dominio.aula.ReservaService;
import br.com.forgefit.dominio.aluno.FrequenciaService;
import br.com.forgefit.dominio.aluno.ReembolsoService;
import br.com.forgefit.dominio.evento.EventoBarramento;
import br.com.forgefit.infraestrutura.persistencia.memoria.Repositorio;

/**
 * Classe base para as funcionalidades de Cucumber.
 * Inicializa serviços de domínio e o repositório em memória.
 * Implementa o EventoBarramento para observar eventos de domínio.
 */
public class AcademiaFuncionalidade implements EventoBarramento {

    protected AulaService aulaService;
    protected ReservaService reservaService;
    protected ReembolsoService reembolsoService;
    protected AlunoService alunoService;
    protected FrequenciaService frequenciaService;

    protected List<Object> eventos;

    protected Exception excecao;

    public AcademiaFuncionalidade() {
        var repositorio = new Repositorio();
        eventos = new ArrayList<>();

        this.alunoService = new AlunoService(repositorio);
        this.aulaService = new AulaService(repositorio);
        this.reservaService = new ReservaService(repositorio, this);

        this.reembolsoService = new ReembolsoService(repositorio);
        this.frequenciaService = new FrequenciaService(repositorio, this);
    }

    @Override
    public void postar(Object evento) {
        notNull(evento, "O evento não pode ser nulo");
        eventos.add(evento);
    }

    protected void resetarContexto() {
        this.excecao = null;
        this.eventos.clear();
    }
}