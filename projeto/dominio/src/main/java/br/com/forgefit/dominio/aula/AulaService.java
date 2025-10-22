package br.com.forgefit.dominio.aula;

import br.com.forgefit.dominio.aula.enums.Espaco;
import br.com.forgefit.dominio.aula.enums.Modalidade;
import br.com.forgefit.dominio.aula.enums.StatusAula;
import br.com.forgefit.dominio.professor.ProfessorId;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import static org.apache.commons.lang3.Validate.notNull;

public class AulaService {
    private final AulaRepositorio aulaRepositorio;
    private final AtomicInteger aulaIdCounter = new AtomicInteger(1);
    private final AtomicInteger excecaoIdCounter = new AtomicInteger(1);

    public AulaService(AulaRepositorio aulaRepositorio) {
        notNull(aulaRepositorio, "O repositório de aulas não pode ser nulo");
        this.aulaRepositorio = aulaRepositorio;
    }

    public Aula criarAulaUnica(ProfessorId professorId, Modalidade modalidade, Espaco espaco, int capacidade,
                               LocalDateTime inicio, LocalDateTime fim) {
        verificarConflitoHorario(espaco, professorId, inicio, fim, null);
        
        AulaId id = new AulaId(aulaIdCounter.getAndIncrement());
        Aula aula = new Aula(id, professorId, modalidade, espaco, capacidade, inicio, fim);
        aulaRepositorio.salvar(aula);
        return aula;
    }

    public Aula criarAulaRecorrente(ProfessorId professorId, Modalidade modalidade, Espaco espaco, int capacidade,
                                    LocalDateTime inicio, LocalDateTime fim, Recorrencia recorrencia) {
        verificarConflitoHorario(espaco, professorId, inicio, fim, null);

        AulaId id = new AulaId(aulaIdCounter.getAndIncrement());
        Aula aula = new Aula(id, professorId, modalidade, espaco, capacidade, inicio, fim, recorrencia);
        aulaRepositorio.salvar(aula);
        return aula;
    }

    public void alterarHorarioPrincipal(AulaId aulaId, LocalDateTime novoInicio, LocalDateTime novoFim) {
        Aula aula = obterAula(aulaId);
        verificarConflitoHorario(aula.getEspaco(), aula.getProfessorId(), novoInicio, novoFim, aulaId);
        aula.alterarHorarioPrincipal(novoInicio, novoFim);
        aulaRepositorio.salvar(aula);
    }

    public void reagendarOcorrenciaUnica(AulaId aulaId, LocalDate dataOriginal, LocalDateTime novoInicio, LocalDateTime novoFim) {
        Aula aula = obterAula(aulaId);

        if (!aula.isRecorrente()) {
            throw new IllegalStateException("Esta funcionalidade é apenas para aulas recorrentes.");
        }

        verificarConflitoHorario(aula.getEspaco(), aula.getProfessorId(), novoInicio, novoFim, aulaId);
        
        OcorrenciaExcecao excecao = aula.getExcecao(dataOriginal)
            .orElseGet(() -> {
                OcorrenciaExcecaoId id = new OcorrenciaExcecaoId(excecaoIdCounter.getAndIncrement());
                return new OcorrenciaExcecao(id, dataOriginal);
            });
        
        excecao.reagendar(novoInicio, novoFim);
        
        if (aula.getExcecao(dataOriginal).isEmpty()) {
            aula.adicionarExcecao(excecao);
        }

        aulaRepositorio.salvar(aula);
    }

    public void cancelarOcorrenciaUnica(AulaId aulaId, LocalDate dataDaOcorrencia) {
        Aula aula = obterAula(aulaId);

        if (!aula.isRecorrente()) {
            throw new IllegalStateException("Esta funcionalidade é apenas para aulas recorrentes.");
        }

        OcorrenciaExcecao excecao = aula.getExcecao(dataDaOcorrencia)
            .orElseGet(() -> {
                OcorrenciaExcecaoId id = new OcorrenciaExcecaoId(excecaoIdCounter.getAndIncrement());
                return new OcorrenciaExcecao(id, dataDaOcorrencia);
            });

        excecao.cancelar();

        if (aula.getExcecao(dataDaOcorrencia).isEmpty()) {
            aula.adicionarExcecao(excecao);
        }
        
        aulaRepositorio.salvar(aula);
    }

    public void cancelarAulaDefinitivamente(AulaId aulaId) {
        Aula aula = obterAula(aulaId);
        aula.cancelar();
        aulaRepositorio.salvar(aula);
    }

    public Aula obter(AulaId aulaId) {
        return aulaRepositorio.obterPorId(aulaId)
            .orElseThrow(() -> new IllegalArgumentException("Aula não encontrada"));
    }

    private Aula obterAula(AulaId aulaId) {
        return aulaRepositorio.obterPorId(aulaId)
            .orElseThrow(() -> new IllegalArgumentException("Aula não encontrada"));
    }

    private void verificarConflitoHorario(Espaco espaco, ProfessorId professorId, LocalDateTime inicio, LocalDateTime fim, AulaId aulaIdExcluir) {
        List<Aula> aulasNoEspaco = aulaRepositorio.buscarPorEspacoEPeriodo(espaco, inicio, fim);
        boolean conflitoEspaco = aulasNoEspaco.stream()
            .filter(a -> a.getStatus() == StatusAula.ATIVA)
            .filter(a -> aulaIdExcluir == null || !a.getId().equals(aulaIdExcluir))
            .anyMatch(a -> (inicio.isBefore(a.getFim()) && fim.isAfter(a.getInicio())));
        
        if (conflitoEspaco) {
            throw new IllegalStateException("Conflito de horário: O espaço já está ocupado.");
        }

        List<Aula> aulasDoProfessor = aulaRepositorio.buscarPorProfessorEPeriodo(professorId, inicio, fim);
        boolean conflitoProfessor = aulasDoProfessor.stream()
            .filter(a -> a.getStatus() == StatusAula.ATIVA)
            .filter(a -> aulaIdExcluir == null || !a.getId().equals(aulaIdExcluir))
            .anyMatch(a -> (inicio.isBefore(a.getFim()) && fim.isAfter(a.getInicio())));
            
        if (conflitoProfessor) {
            throw new IllegalStateException("Conflito de horário: O professor já está alocado em outra aula.");
        }
    }
}
