package br.com.forgefit.aplicacao.avaliacaoFisica;

import br.com.forgefit.dominio.aluno.AvaliacaoFisica;
import br.com.forgefit.dominio.aluno.AvaliacaoFisicaService;
import br.com.forgefit.dominio.aluno.Matricula;

import java.util.List;

public class AvaliacaoFisicaServicoAplicacao {
    
    private final AvaliacaoFisicaRepositorioAplicacao repositorio;
    private final AvaliacaoFisicaService avaliacaoFisicaService;
    private final BioimpedanciaAvaliacaoService bioimpedanciaService;
    
    public AvaliacaoFisicaServicoAplicacao(
        AvaliacaoFisicaRepositorioAplicacao repositorio,
        AvaliacaoFisicaService avaliacaoFisicaService
    ) {
        this.repositorio = repositorio;
        this.avaliacaoFisicaService = avaliacaoFisicaService;
        // Inicializa o Template Method para bioimpedância
        this.bioimpedanciaService = new BioimpedanciaAvaliacaoService(avaliacaoFisicaService);
    }
    
    /**
     * Registra avaliação física usando o padrão Template Method.
     * Delega para a implementação específica de bioimpedância que segue o fluxo definido.
     */
    public String registrarAvaliacaoFisica(String matriculaStr, AvaliacaoFisica avaliacaoFisica) {
        // Usa o Template Method - o fluxo completo está definido na classe abstrata
        return bioimpedanciaService.registrarAvaliacao(matriculaStr, avaliacaoFisica);
    }
    
    public List<AvaliacaoFisicaResumo> buscarHistoricoAluno(String matricula) {
        return repositorio.buscarPorAluno(matricula);
    }
    
    public List<AlunoResumo> listarAlunos() {
        return repositorio.listarTodosAlunos();
    }
}
