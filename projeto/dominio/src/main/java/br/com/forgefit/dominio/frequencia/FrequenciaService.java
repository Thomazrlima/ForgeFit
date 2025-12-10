package br.com.forgefit.dominio.frequencia;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;

import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aluno.enums.StatusAluno;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.aula.AulaRepositorio;
import br.com.forgefit.dominio.frequencia.enums.StatusFrequencia;
import br.com.forgefit.dominio.evento.EventoBarramento;

/**
 * Serviço de domínio para gerenciar frequência e bloqueios por falta.
 * Seguindo DDD: coordena agregados e publica eventos de domínio.
 */
public class FrequenciaService {
    private final FrequenciaRepositorio frequenciaRepositorio;
    private final AlunoRepositorio alunoRepositorio;
    private final AulaRepositorio aulaRepositorio;
    private final EventoBarramento eventoBarramento;
    
    // Regras de negócio
    private static final int LIMITE_FALTAS_PARA_BLOQUEIO = 3;
    private static final int LIMITE_FALTAS_PARA_ADVERTENCIA = 2;
    private static final int DIAS_PERIODO_CONTAGEM_FALTAS = 30;
    private static final int DIAS_BLOQUEIO = 7;

    public FrequenciaService(FrequenciaRepositorio frequenciaRepositorio,
                           AlunoRepositorio alunoRepositorio,
                           AulaRepositorio aulaRepositorio,
                           EventoBarramento eventoBarramento) {
        notNull(frequenciaRepositorio, "O repositório de frequência não pode ser nulo");
        notNull(alunoRepositorio, "O repositório de alunos não pode ser nulo");
        notNull(aulaRepositorio, "O repositório de aulas não pode ser nulo");
        notNull(eventoBarramento, "O barramento de eventos não pode ser nulo");
        
        this.frequenciaRepositorio = frequenciaRepositorio;
        this.alunoRepositorio = alunoRepositorio;
        this.aulaRepositorio = aulaRepositorio;
        this.eventoBarramento = eventoBarramento;
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

    /**
     * Desbloqueia um aluno após período de bloqueio.
     * PADRÃO DDD: Entidade gera evento, serviço persiste e publica.
     */
    public void desbloquearAluno(Matricula alunoMatricula) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");

        Aluno aluno = alunoRepositorio.obterPorMatricula(alunoMatricula)
                .orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado"));

        // Entidade gera o evento
        AlunoDesbloqueadoEvento evento = aluno.desbloquear();
        
        // Serviço persiste
        alunoRepositorio.salvar(aluno);
        
        // Serviço publica evento
        eventoBarramento.postar(evento);
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
     * Verifica e aplica bloqueio/advertência se necessário.
     * PADRÃO DDD: Lógica de negócio no serviço, entidade gera eventos.
     */
    public void verificarEAplicarBloqueio(Matricula alunoMatricula, LocalDate dataAtual) {
        long faltas = contarFaltasRecentes(alunoMatricula, dataAtual, DIAS_PERIODO_CONTAGEM_FALTAS);

        Aluno aluno = alunoRepositorio.obterPorMatricula(alunoMatricula)
                .orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado"));

        if (faltas >= LIMITE_FALTAS_PARA_BLOQUEIO && aluno.podeSerBloqueado()) {
            // REGRA: 3+ faltas em 30 dias = bloqueio por 7 dias
            AlunoBloqueadoEvento evento = aluno.bloquearPorFaltas(faltas, DIAS_BLOQUEIO);
            alunoRepositorio.salvar(aluno);
            eventoBarramento.postar(evento);
            
        } else if (faltas == LIMITE_FALTAS_PARA_ADVERTENCIA) {
            // REGRA: 2 faltas = advertência (falta 1 para bloqueio)
            int faltasRestantes = LIMITE_FALTAS_PARA_BLOQUEIO - (int) faltas;
            AlunoAdvertidoEvento evento = aluno.advertirPorFaltas(faltas, faltasRestantes);
            eventoBarramento.postar(evento);
        }
    }
}
