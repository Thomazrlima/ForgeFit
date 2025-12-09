package br.com.forgefit.aplicacao.frequencia;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aluno.enums.StatusAluno;
import br.com.forgefit.dominio.frequencia.FrequenciaRepositorio;
import br.com.forgefit.dominio.frequencia.FrequenciaService;

/**
 * Serviço de aplicação para verificação periódica de frequência.
 * Orquestra a lógica de domínio com notificações via Observer.
 */
public class FrequenciaVerificacaoService {
    private final FrequenciaService frequenciaService;
    private final FrequenciaRepositorio frequenciaRepositorio;
    private final AlunoRepositorio alunoRepositorio;
    private final List<FrequenciaObserver> observers = new ArrayList<>();
    
    private static final int LIMITE_FALTAS_PARA_BLOQUEIO = 3;
    private static final int LIMITE_ADVERTENCIA = 2;
    private static final int DIAS_PERIODO = 30;
    private static final int DIAS_BLOQUEIO = 7;

    public FrequenciaVerificacaoService(
            FrequenciaService frequenciaService,
            FrequenciaRepositorio frequenciaRepositorio,
            AlunoRepositorio alunoRepositorio) {
        this.frequenciaService = frequenciaService;
        this.frequenciaRepositorio = frequenciaRepositorio;
        this.alunoRepositorio = alunoRepositorio;
    }

    public void adicionarObserver(FrequenciaObserver observer) {
        if (!observers.contains(observer)) {
            observers.add(observer);
        }
    }

    public void removerObserver(FrequenciaObserver observer) {
        observers.remove(observer);
    }

    /**
     * Verifica frequência de todos os alunos e aplica bloqueios/desbloqueios.
     */
    public RelatorioVerificacao verificarTodosAlunos(LocalDate dataAtual) {
        int bloqueados = 0, desbloqueados = 0, advertidos = 0;
        
        // Busca alunos com faltas recentes
        LocalDate dataInicio = dataAtual.minusDays(DIAS_PERIODO - 1);
        List<Matricula> matriculas = frequenciaRepositorio.buscarAlunosComFaltasRecentes(dataInicio, dataAtual);
        
        for (Matricula matricula : matriculas) {
            var alunoOpt = alunoRepositorio.obterPorMatricula(matricula);
            if (alunoOpt.isEmpty()) continue;
            
            Aluno aluno = alunoOpt.get();
            long faltas = frequenciaService.contarFaltasRecentes(matricula, dataAtual, DIAS_PERIODO);
            
            // Desbloquear se período expirou
            if (aluno.getStatus() == StatusAluno.BLOQUEADO) {
                LocalDate bloqueioAte = aluno.getBloqueioAte();
                if (bloqueioAte != null && dataAtual.isAfter(bloqueioAte)) {
                    frequenciaService.desbloquearAluno(matricula);
                    notificarDesbloqueio(aluno);
                    desbloqueados++;
                    continue;
                }
            }
            
            // Bloquear ou advertir se necessário
            if (aluno.getStatus() == StatusAluno.ATIVO) {
                if (faltas >= LIMITE_FALTAS_PARA_BLOQUEIO) {
                    aluno.setStatus(StatusAluno.BLOQUEADO);
                    aluno.setBloqueioAte(dataAtual.plusDays(DIAS_BLOQUEIO));
                    alunoRepositorio.salvar(aluno);
                    notificarBloqueio(aluno, faltas, DIAS_BLOQUEIO);
                    bloqueados++;
                } else if (faltas >= LIMITE_ADVERTENCIA) {
                    int faltasRestantes = LIMITE_FALTAS_PARA_BLOQUEIO - (int) faltas;
                    notificarAdvertencia(aluno, faltas, faltasRestantes);
                    advertidos++;
                }
            }
        }
        
        return new RelatorioVerificacao(bloqueados, desbloqueados, advertidos, matriculas.size());
    }
    
    private void notificarBloqueio(Aluno aluno, long faltas, int dias) {
        observers.forEach(o -> o.notificarBloqueio(aluno, faltas, dias));
    }
    
    private void notificarAdvertencia(Aluno aluno, long faltas, int restantes) {
        observers.forEach(o -> o.notificarAdvertencia(aluno, faltas, restantes));
    }
    
    private void notificarDesbloqueio(Aluno aluno) {
        observers.forEach(o -> o.notificarDesbloqueio(aluno));
    }
    
    public static class RelatorioVerificacao {
        private final int alunosBloqueados;
        private final int alunosDesbloqueados;
        private final int alunosAdvertidos;
        private final int totalVerificados;
        
        public RelatorioVerificacao(int bloqueados, int desbloqueados, int advertidos, int total) {
            this.alunosBloqueados = bloqueados;
            this.alunosDesbloqueados = desbloqueados;
            this.alunosAdvertidos = advertidos;
            this.totalVerificados = total;
        }
        
        public int getAlunosBloqueados() { return alunosBloqueados; }
        public int getAlunosDesbloqueados() { return alunosDesbloqueados; }
        public int getAlunosAdvertidos() { return alunosAdvertidos; }
        public int getTotalVerificados() { return totalVerificados; }
        
        @Override
        public String toString() {
            return String.format(
                "Verificação: %d alunos | %d bloqueados | %d desbloqueados | %d advertidos",
                totalVerificados, alunosBloqueados, alunosDesbloqueados, alunosAdvertidos
            );
        }
    }
}
