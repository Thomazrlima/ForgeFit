package br.com.forgefit.aplicacao.avaliacaoFisica;

import br.com.forgefit.dominio.aluno.AvaliacaoFisica;

import java.util.List;

public class AvaliacaoFisicaServicoAplicacao extends AvaliacaoFisicaTemplateMethod {
    
    private final AvaliacaoFisicaRepositorioAplicacao repositorio;
    
    public AvaliacaoFisicaServicoAplicacao(AvaliacaoFisicaRepositorioAplicacao repositorio) {
        super(repositorio);
        this.repositorio = repositorio;
    }
    
    public String registrarAvaliacaoFisica(String matriculaStr, AvaliacaoFisica avaliacaoFisica) {
        return registrarAvaliacao(matriculaStr, avaliacaoFisica);
    }
    
    public List<AvaliacaoFisicaResumo> buscarHistoricoAluno(String matricula) {
        return repositorio.buscarPorAluno(matricula);
    }
    
    public List<AlunoResumo> listarAlunos() {
        return repositorio.listarTodosAlunos();
    }
    
    @Override
    protected void validarRegrasNegocio(AvaliacaoFisica avaliacaoFisica) {
        if (avaliacaoFisica.getMassaGordaPercentual() < 0 || avaliacaoFisica.getMassaGordaPercentual() > 100)
            throw new IllegalArgumentException("Percentual de gordura deve estar entre 0 e 100");
        if (avaliacaoFisica.getMassaMagraKg() <= 0)
            throw new IllegalArgumentException("Massa magra deve ser maior que zero");
        if (avaliacaoFisica.getMassaGordaKg() < 0)
            throw new IllegalArgumentException("Massa gorda não pode ser negativa");
        if (avaliacaoFisica.getAguaCorporalTotalPercentual() < 0 || avaliacaoFisica.getAguaCorporalTotalPercentual() > 100)
            throw new IllegalArgumentException("Percentual de água corporal deve estar entre 0 e 100");
        if (avaliacaoFisica.getGorduraVisceralNivel() < 1)
            throw new IllegalArgumentException("Nível de gordura visceral deve ser no mínimo 1");
    }
}
