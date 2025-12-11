package br.com.forgefit.aplicacao.avaliacaoFisica;

import br.com.forgefit.dominio.aluno.AvaliacaoFisica;
import br.com.forgefit.dominio.aluno.AvaliacaoFisicaService;
import br.com.forgefit.dominio.aluno.Matricula;

import java.util.List;

public class AvaliacaoFisicaServicoAplicacao {
    
    private final AvaliacaoFisicaRepositorioAplicacao repositorio;
    private final AvaliacaoFisicaService avaliacaoFisicaService;
    
    public AvaliacaoFisicaServicoAplicacao(
        AvaliacaoFisicaRepositorioAplicacao repositorio,
        AvaliacaoFisicaService avaliacaoFisicaService
    ) {
        this.repositorio = repositorio;
        this.avaliacaoFisicaService = avaliacaoFisicaService;
    }
    
    public String registrarAvaliacaoFisica(String matriculaStr, AvaliacaoFisica avaliacaoFisica) {
        Matricula matricula = new Matricula(matriculaStr);
        String mensagem = avaliacaoFisicaService.registrarAvaliacaoFisica(matricula, avaliacaoFisica);
        repositorio.salvar(matricula, avaliacaoFisica);
        return mensagem;
    }
    
    public List<AvaliacaoFisicaResumo> buscarHistoricoAluno(String matricula) {
        return repositorio.buscarPorAluno(matricula);
    }
    
    public List<AlunoResumo> listarAlunos() {
        return repositorio.listarTodosAlunos();
    }
}
