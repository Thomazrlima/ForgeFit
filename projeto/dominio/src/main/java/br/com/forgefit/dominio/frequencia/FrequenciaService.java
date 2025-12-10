package br.com.forgefit.dominio.frequencia;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aluno.enums.StatusAluno;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.aula.AulaRepositorio;
import br.com.forgefit.dominio.frequencia.enums.StatusFrequencia;

/**
 * Serviço de domínio para controle de frequência.
 * Implementa o padrão Observer (Subject) para notificar mudanças de status.
 */
public class FrequenciaService {
    private static final int LIMITE_FALTAS_PARA_BLOQUEIO = 3;
    private static final int LIMITE_FALTAS_PARA_ADVERTENCIA = 2;
    private static final int DIAS_PERIODO_CONTAGEM_FALTAS = 30;
    private static final int DIAS_BLOQUEIO = 7;
    
    private final FrequenciaRepositorio frequenciaRepositorio;
    private final AlunoRepositorio alunoRepositorio;
    private final AulaRepositorio aulaRepositorio;
    private final List<FrequenciaObserver> observadores;

    public FrequenciaService(FrequenciaRepositorio frequenciaRepositorio,
                           AlunoRepositorio alunoRepositorio,
                           AulaRepositorio aulaRepositorio) {
        notNull(frequenciaRepositorio, "O repositório de frequência não pode ser nulo");
        notNull(alunoRepositorio, "O repositório de alunos não pode ser nulo");
        notNull(aulaRepositorio, "O repositório de aulas não pode ser nulo");
        
        this.frequenciaRepositorio = frequenciaRepositorio;
        this.alunoRepositorio = alunoRepositorio;
        this.aulaRepositorio = aulaRepositorio;
        this.observadores = new ArrayList<>();
    }
    
    // ========== MÉTODOS DO PADRÃO OBSERVER (SUBJECT) ==========
    
    /**
     * Adiciona um observador para ser notificado sobre mudanças de frequência.
     */
    public void adicionarObservador(FrequenciaObserver observador) {
        notNull(observador, "O observador não pode ser nulo");
        if (!observadores.contains(observador)) {
            observadores.add(observador);
        }
    }
    
    /**
     * Remove um observador da lista de notificações.
     */
    public void removerObservador(FrequenciaObserver observador) {
        observadores.remove(observador);
    }
    
    private void notificarBloqueio(Aluno aluno, long quantidadeFaltas, int diasBloqueio) {
        for (FrequenciaObserver observador : observadores) {
            try {
                observador.notificarBloqueio(aluno, quantidadeFaltas, diasBloqueio);
            } catch (Exception e) {
                // Isolamento: falha em um observador não afeta outros
            }
        }
    }
    
    private void notificarAdvertencia(Aluno aluno, long quantidadeFaltas, int faltasRestantes) {
        for (FrequenciaObserver observador : observadores) {
            try {
                observador.notificarAdvertencia(aluno, quantidadeFaltas, faltasRestantes);
            } catch (Exception e) {
                // Isolamento: falha em um observador não afeta outros
            }
        }
    }
    
    private void notificarDesbloqueio(Aluno aluno) {
        for (FrequenciaObserver observador : observadores) {
            try {
                observador.notificarDesbloqueio(aluno);
            } catch (Exception e) {
                // Isolamento: falha em um observador não afeta outros
            }
        }
    }

    /**
     * Registra presença de um aluno em uma aula.
     */
    public Frequencia registrarPresenca(Matricula alunoMatricula, AulaId aulaId, LocalDate data) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");
        notNull(aulaId, "O ID da aula não pode ser nulo");
        notNull(data, "A data não pode ser nula");

        // Verifica se aluno existe
        alunoRepositorio.obterPorMatricula(alunoMatricula)
                .orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado"));

        // Verifica se aula existe
        aulaRepositorio.obterPorId(aulaId)
                .orElseThrow(() -> new IllegalArgumentException("Aula não encontrada"));

        // Cria registro de presença
        var frequencia = new Frequencia(alunoMatricula, aulaId, data, StatusFrequencia.PRESENCA);
        frequenciaRepositorio.salvar(frequencia);

        return frequencia;
    }

    /**
     * Registra falta de um aluno em uma aula.
     */
    public Frequencia registrarFalta(Matricula alunoMatricula, AulaId aulaId, LocalDate data) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");
        notNull(aulaId, "O ID da aula não pode ser nulo");
        notNull(data, "A data não pode ser nula");

        // Verifica se aluno existe
        alunoRepositorio.obterPorMatricula(alunoMatricula)
                .orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado"));

        // Verifica se aula existe
        aulaRepositorio.obterPorId(aulaId)
                .orElseThrow(() -> new IllegalArgumentException("Aula não encontrada"));

        // Cria registro de falta
        var frequencia = new Frequencia(alunoMatricula, aulaId, data, StatusFrequencia.FALTA);
        frequenciaRepositorio.salvar(frequencia);

        // Verifica se deve bloquear o aluno (usa LocalDate.now() como referência)
        verificarEAplicarBloqueio(alunoMatricula, LocalDate.now());

        return frequencia;
    }

    /**
     * Verifica se um aluno está bloqueado.
     */
    public boolean alunoEstaBloqueado(Matricula alunoMatricula, LocalDate dataAtual) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");
        notNull(dataAtual, "A data atual não pode ser nula");

        var aluno = alunoRepositorio.obterPorMatricula(alunoMatricula)
                .orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado"));

        if (aluno.getStatus() == StatusAluno.BLOQUEADO) {
            LocalDate bloqueioAte = aluno.getBloqueioAte();
            if (bloqueioAte != null && !dataAtual.isAfter(bloqueioAte)) {
                return true;
            } else if (bloqueioAte != null && dataAtual.isAfter(bloqueioAte)) {
                // Desbloqueia automaticamente
                desbloquearAluno(alunoMatricula);
                return false;
            }
        }

        return false;
    }

    /**
     * Verifica bloqueio e retorna mensagem apropriada.
     * Retorna null se o aluno não está bloqueado.
     */
    public String verificarBloqueioComMensagem(Matricula alunoMatricula, LocalDate dataAtual) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");
        notNull(dataAtual, "A data atual não pode ser nula");

        if (alunoEstaBloqueado(alunoMatricula, dataAtual)) {
            // Usa LocalDate.now() para contar faltas recentes, não a data da tentativa de reserva
            long faltasRecentes = contarFaltasRecentes(alunoMatricula, LocalDate.now(), DIAS_PERIODO_CONTAGEM_FALTAS);
            if (faltasRecentes >= LIMITE_FALTAS_PARA_BLOQUEIO) {
                return "Aluno bloqueado por excesso de faltas.";
            } else {
                return "Aluno bloqueado.";
            }
        }
        return null;
    }

    public void desbloquearAluno(Matricula alunoMatricula) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");

        Aluno aluno = alunoRepositorio.obterPorMatricula(alunoMatricula)
                .orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado"));

        aluno.desbloquear();
        alunoRepositorio.salvar(aluno);
        
        notificarDesbloqueio(aluno);
    }

    /**
     * Conta faltas de um aluno nos últimos N dias.
     */
    public long contarFaltasRecentes(Matricula alunoMatricula, LocalDate dataReferencia, int dias) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");
        notNull(dataReferencia, "A data de referência não pode ser nula");

        LocalDate dataInicio = dataReferencia.minusDays(dias - 1);  // Ajuste: -1 para incluir a data de referência
        return frequenciaRepositorio.contarFaltasPorPeriodo(alunoMatricula, dataInicio, dataReferencia);
    }

    public void verificarEAplicarBloqueio(Matricula alunoMatricula, LocalDate dataAtual) {
        long faltas = contarFaltasRecentes(alunoMatricula, dataAtual, DIAS_PERIODO_CONTAGEM_FALTAS);

        Aluno aluno = alunoRepositorio.obterPorMatricula(alunoMatricula)
                .orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado"));

        if (faltas >= LIMITE_FALTAS_PARA_BLOQUEIO && aluno.podeSerBloqueado()) {
            aluno.bloquearPorFaltas(faltas, DIAS_BLOQUEIO);
            alunoRepositorio.salvar(aluno);
            notificarBloqueio(aluno, faltas, DIAS_BLOQUEIO);
            
        } else if (faltas == LIMITE_FALTAS_PARA_ADVERTENCIA) {
            int faltasRestantes = LIMITE_FALTAS_PARA_BLOQUEIO - (int) faltas;
            aluno.advertirPorFaltas(faltas, faltasRestantes);
            notificarAdvertencia(aluno, faltas, faltasRestantes);
        }
    }
}
