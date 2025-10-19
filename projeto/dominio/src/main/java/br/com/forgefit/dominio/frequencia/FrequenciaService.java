package br.com.forgefit.dominio.frequencia;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;

import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aluno.enums.StatusAluno;
import br.com.forgefit.dominio.aula.Aula;
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
    public Frequencia registrarPresenca(Cpf alunoId, AulaId aulaId, LocalDate data) {
        notNull(alunoId, "O CPF do aluno não pode ser nulo");
        notNull(aulaId, "O ID da aula não pode ser nulo");
        notNull(data, "A data não pode ser nula");

        // Verifica se aluno existe
        var aluno = alunoRepositorio.obterPorCpf(alunoId)
                .orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado"));

        // Verifica se aula existe
        var aula = aulaRepositorio.obterPorId(aulaId)
                .orElseThrow(() -> new IllegalArgumentException("Aula não encontrada"));

        // Cria registro de presença
        var frequencia = new Frequencia(alunoId, aulaId, data, StatusFrequencia.PRESENCA);
        frequenciaRepositorio.salvar(frequencia);

        return frequencia;
    }

    /**
     * Registra falta de um aluno em uma aula.
     */
    public Frequencia registrarFalta(Cpf alunoId, AulaId aulaId, LocalDate data) {
        notNull(alunoId, "O CPF do aluno não pode ser nulo");
        notNull(aulaId, "O ID da aula não pode ser nulo");
        notNull(data, "A data não pode ser nula");

        // Verifica se aluno existe
        alunoRepositorio.obterPorCpf(alunoId)
                .orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado"));

        // Verifica se aula existe
        aulaRepositorio.obterPorId(aulaId)
                .orElseThrow(() -> new IllegalArgumentException("Aula não encontrada"));

        // Cria registro de falta
        var frequencia = new Frequencia(alunoId, aulaId, data, StatusFrequencia.FALTA);
        frequenciaRepositorio.salvar(frequencia);

        // Verifica se deve bloquear o aluno (usa LocalDate.now() como referência)
        verificarEAplicarBloqueio(alunoId, LocalDate.now());

        return frequencia;
    }

    /**
     * Verifica se um aluno está bloqueado.
     */
    public boolean alunoEstaBloqueado(Cpf alunoId, LocalDate dataAtual) {
        notNull(alunoId, "O CPF do aluno não pode ser nulo");
        notNull(dataAtual, "A data atual não pode ser nula");

        var aluno = alunoRepositorio.obterPorCpf(alunoId)
                .orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado"));

        if (aluno.getStatus() == StatusAluno.BLOQUEADO) {
            LocalDate bloqueioAte = aluno.getBloqueioAte();
            if (bloqueioAte != null && !dataAtual.isAfter(bloqueioAte)) {
                return true;
            } else if (bloqueioAte != null && dataAtual.isAfter(bloqueioAte)) {
                // Desbloqueia automaticamente
                desbloquearAluno(alunoId);
                return false;
            }
        }

        return false;
    }

    /**
     * Desbloqueia um aluno.
     */
    public void desbloquearAluno(Cpf alunoId) {
        notNull(alunoId, "O CPF do aluno não pode ser nulo");

        var aluno = alunoRepositorio.obterPorCpf(alunoId)
                .orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado"));

        aluno.setStatus(StatusAluno.ATIVO);
        aluno.setBloqueioAte(null);
        alunoRepositorio.salvar(aluno);
    }

    /**
     * Conta faltas de um aluno nos últimos N dias.
     */
    public long contarFaltasRecentes(Cpf alunoId, LocalDate dataReferencia, int dias) {
        notNull(alunoId, "O CPF do aluno não pode ser nulo");
        notNull(dataReferencia, "A data de referência não pode ser nula");

        LocalDate dataInicio = dataReferencia.minusDays(dias - 1);  // Ajuste: -1 para incluir a data de referência
        return frequenciaRepositorio.contarFaltasPorPeriodo(alunoId, dataInicio, dataReferencia);
    }

    /**
     * Verifica e aplica bloqueio se necessário.
     */
    private void verificarEAplicarBloqueio(Cpf alunoId, LocalDate dataAtual) {
        long faltas = contarFaltasRecentes(alunoId, dataAtual, DIAS_PERIODO_CONTAGEM_FALTAS);

        if (faltas >= LIMITE_FALTAS_PARA_BLOQUEIO) {
            var aluno = alunoRepositorio.obterPorCpf(alunoId).get();
            aluno.setStatus(StatusAluno.BLOQUEADO);
            aluno.setBloqueioAte(dataAtual.plusDays(DIAS_BLOQUEIO));
            alunoRepositorio.salvar(aluno);
        }
    }
}
