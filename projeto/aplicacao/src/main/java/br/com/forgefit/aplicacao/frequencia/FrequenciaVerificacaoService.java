package br.com.forgefit.aplicacao.frequencia;

import java.time.LocalDate;
import java.util.List;

import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aluno.enums.StatusAluno;
import br.com.forgefit.dominio.frequencia.FrequenciaRepositorio;
import br.com.forgefit.dominio.frequencia.FrequenciaService;

/**
 * Serviço de aplicação para verificação periódica de frequência.
 * Orquestra o FrequenciaService sem conter lógica de negócio.
 */
public class FrequenciaVerificacaoService {
    private static final int DIAS_PERIODO = 30;
    
    private final FrequenciaService frequenciaService;
    private final FrequenciaRepositorio frequenciaRepositorio;
    private final AlunoRepositorio alunoRepositorio;

    public FrequenciaVerificacaoService(
            FrequenciaService frequenciaService,
            FrequenciaRepositorio frequenciaRepositorio,
            AlunoRepositorio alunoRepositorio) {
        this.frequenciaService = frequenciaService;
        this.frequenciaRepositorio = frequenciaRepositorio;
        this.alunoRepositorio = alunoRepositorio;
    }

    public RelatorioVerificacao verificarTodosAlunos(LocalDate dataAtual) {
        int bloqueados = 0, desbloqueados = 0;
        
        LocalDate dataInicio = dataAtual.minusDays(DIAS_PERIODO - 1);
        List<Matricula> matriculas = frequenciaRepositorio.buscarAlunosComFaltasRecentes(dataInicio, dataAtual);
        
        for (Matricula matricula : matriculas) {
            var alunoOpt = alunoRepositorio.obterPorMatricula(matricula);
            if (alunoOpt.isEmpty()) continue;
            
            Aluno aluno = alunoOpt.get();
            
            if (aluno.getStatus() == StatusAluno.BLOQUEADO) {
                LocalDate bloqueioAte = aluno.getBloqueioAte();
                if (bloqueioAte != null && dataAtual.isAfter(bloqueioAte)) {
                    frequenciaService.desbloquearAluno(matricula);
                    desbloqueados++;
                    continue;
                }
            }
            
            if (aluno.getStatus() == StatusAluno.ATIVO) {
                long faltas = frequenciaService.contarFaltasRecentes(matricula, dataAtual, DIAS_PERIODO);
                if (faltas >= 2) {
                    frequenciaService.verificarEAplicarBloqueio(matricula, dataAtual);
                    if (faltas >= 3) bloqueados++;
                }
            }
        }
        
        return new RelatorioVerificacao(bloqueados, desbloqueados, matriculas.size());
    }
    
    public static class RelatorioVerificacao {
        private final int alunosBloqueados;
        private final int alunosDesbloqueados;
        private final int totalVerificados;
        
        public RelatorioVerificacao(int bloqueados, int desbloqueados, int total) {
            this.alunosBloqueados = bloqueados;
            this.alunosDesbloqueados = desbloqueados;
            this.totalVerificados = total;
        }
        
        public int getAlunosBloqueados() { return alunosBloqueados; }
        public int getAlunosDesbloqueados() { return alunosDesbloqueados; }
        public int getTotalVerificados() { return totalVerificados; }
        
        @Override
        public String toString() {
            return String.format(
                "Verificação: %d alunos | %d bloqueados | %d desbloqueados",
                totalVerificados, alunosBloqueados, alunosDesbloqueados
            );
        }
    }
}
