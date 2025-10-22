package br.com.forgefit.dominio.frequencia;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;

import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aluno.enums.StatusAluno;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.aula.AulaRepositorio;
import br.com.forgefit.dominio.frequencia.enums.StatusFrequencia;

/**
 * Serviço para gerenciar frequência e bloqueios por falta.
 */
public class FrequenciaService {
    private final FrequenciaRepositorio frequenciaRepositorio;
    private final AlunoRepositorio alunoRepositorio;
    private final AulaRepositorio aulaRepositorio;
    
    // Regras de negócio
    private static final int LIMITE_FALTAS_PARA_BLOQUEIO = 3;
    private static final int DIAS_PERIODO_CONTAGEM_FALTAS = 30;
    private static final int DIAS_BLOQUEIO = 7;

    public FrequenciaService(FrequenciaRepositorio frequenciaRepositorio,
                           AlunoRepositorio alunoRepositorio,
                           AulaRepositorio aulaRepositorio) {
        notNull(frequenciaRepositorio, "O repositório de frequência não pode ser nulo");
        notNull(alunoRepositorio, "O repositório de alunos não pode ser nulo");
        notNull(aulaRepositorio, "O repositório de aulas não pode ser nulo");
        
        this.frequenciaRepositorio = frequenciaRepositorio;
        this.alunoRepositorio = alunoRepositorio;
        this.aulaRepositorio = aulaRepositorio;
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
     * Desbloqueia um aluno.
     */
    public void desbloquearAluno(Matricula alunoMatricula) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");

        var aluno = alunoRepositorio.obterPorMatricula(alunoMatricula)
                .orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado"));

        aluno.setStatus(StatusAluno.ATIVO);
        aluno.setBloqueioAte(null);
        alunoRepositorio.salvar(aluno);
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

    /**
     * Verifica e aplica bloqueio se necessário.
     */
    private void verificarEAplicarBloqueio(Matricula alunoMatricula, LocalDate dataAtual) {
        long faltas = contarFaltasRecentes(alunoMatricula, dataAtual, DIAS_PERIODO_CONTAGEM_FALTAS);

        if (faltas >= LIMITE_FALTAS_PARA_BLOQUEIO) {
            var aluno = alunoRepositorio.obterPorMatricula(alunoMatricula).get();
            aluno.setStatus(StatusAluno.BLOQUEADO);
            aluno.setBloqueioAte(dataAtual.plusDays(DIAS_BLOQUEIO));
            alunoRepositorio.salvar(aluno);
        }
    }
}
