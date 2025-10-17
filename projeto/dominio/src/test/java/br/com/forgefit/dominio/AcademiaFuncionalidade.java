package br.com.forgefit.dominio;

import static org.apache.commons.lang3.Validate.notNull;

import java.util.ArrayList;
import java.util.List;

import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.AlunoService;
import br.com.forgefit.dominio.aluno.FrequenciaService;
import br.com.forgefit.dominio.aluno.ReembolsoService;
import br.com.forgefit.dominio.aula.AulaRepositorio;
import br.com.forgefit.dominio.aula.AulaService;
import br.com.forgefit.dominio.aula.ReservaService;
import br.com.forgefit.dominio.evento.EventoBarramento;
import br.com.forgefit.dominio.repositorio.RepositorioGeral;
import br.com.forgefit.infraestrutura.persistencia.memoria.Repositorio;

public class AcademiaFuncionalidade implements EventoBarramento {

    protected Repositorio repositorio;
    protected AulaService aulaService;
    protected ReservaService reservaService;
    protected ReembolsoService reembolsoService;
    protected AlunoService alunoService;
    protected FrequenciaService frequenciaService;

    protected List<Object> eventos;
    protected Exception excecao;

    public AcademiaFuncionalidade() {
        this.repositorio = new Repositorio();
        this.eventos = new ArrayList<>();

        // CORRIGIDO: AlunoService espera AlunoRepositorio
        this.alunoService = new AlunoService((AlunoRepositorio) this.repositorio);

        // CORRIGIDO: AulaService espera AulaRepositorio
        this.aulaService = new AulaService((AulaRepositorio) this.repositorio);
        
        // CORRIGIDO: ReservaService espera AulaRepositorio e EventoBarramento (this)
        this.reservaService = new ReservaService((AulaRepositorio) this.repositorio, this);
        
        // CORRIGIDO: ReembolsoService espera RepositorioGeral
        this.reembolsoService = new ReembolsoService((RepositorioGeral) this.repositorio);
        
        // CORRIGIDO: FrequenciaService espera RepositorioGeral e EventoBarramento (this)
        this.frequenciaService = new FrequenciaService((RepositorioGeral) this.repositorio, this);
    }
    
    protected Repositorio getRepositorioDeTeste() {
        return this.repositorio;
    }

    @Override
    public void postar(Object evento) {
        if (evento == null) throw new IllegalArgumentException("Evento não pode ser nulo");
        eventos.add(evento);
    }

    protected void resetarContexto() {
        this.excecao = null;
        this.eventos.clear();
    }
}