package br.com.forgefit.dominio.aula;

import br.com.forgefit.dominio.aula.enums.DiaDaSemana;
import br.com.forgefit.dominio.aula.enums.Espaco;
import br.com.forgefit.dominio.aula.enums.Modalidade;
import br.com.forgefit.dominio.aula.enums.StatusAula;
import br.com.forgefit.dominio.aula.enums.TipoRecorrencia;
import br.com.forgefit.dominio.professor.ProfessorId;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import static org.apache.commons.lang3.Validate.notNull;

public class AulaService {
    private final AulaRepositorio aulaRepositorio;
    private final AtomicInteger excecaoIdCounter = new AtomicInteger(1);

    public AulaService(AulaRepositorio aulaRepositorio) {
        notNull(aulaRepositorio, "O repositório de aulas não pode ser nulo");
        this.aulaRepositorio = aulaRepositorio;
    }

    private AulaId gerarProximoIdDisponivel() {
        Integer proximoId = aulaRepositorio.obterProximoIdDisponivel();
        return new AulaId(proximoId);
    }

    public Aula criarAulaUnica(ProfessorId professorId, Modalidade modalidade, Espaco espaco, int capacidade,
                               LocalDateTime inicio, LocalDateTime fim) {
        verificarConflitoHorario(espaco, professorId, inicio, fim, null);
        
        AulaId id = gerarProximoIdDisponivel();
        Aula aula = new Aula(id, professorId, modalidade, espaco, capacidade, inicio, fim);
        aulaRepositorio.salvar(aula);
        return aula;
    }

    public Aula criarAulaRecorrente(ProfessorId professorId, Modalidade modalidade, Espaco espaco, int capacidade,
                                   LocalDateTime inicio, LocalDateTime fim, TipoRecorrencia tipoRecorrencia, 
                                   List<DiaDaSemana> diasDaSemana, LocalDate dataFimRecorrencia) {
        notNull(tipoRecorrencia, "O tipo de recorrência não pode ser nulo");
        notNull(diasDaSemana, "Os dias da semana não podem ser nulos");
        notNull(dataFimRecorrencia, "A data fim da recorrência não pode ser nula");
        
        // Monta a recorrência dentro do método
        Recorrencia recorrencia = new Recorrencia(tipoRecorrencia, diasDaSemana, dataFimRecorrencia);
        
        // Verifica conflito apenas para o horário base da recorrência
        verificarConflitoHorario(espaco, professorId, inicio, fim, null);
        
        // Verifica conflitos em todas as ocorrências futuras
        LocalDate dataAtual = inicio.toLocalDate();
        LocalTime horaInicio = inicio.toLocalTime();
        LocalTime horaFim = fim.toLocalTime();
        
        while (dataAtual.isBefore(dataFimRecorrencia) || dataAtual.isEqual(dataFimRecorrencia)) {
            dataAtual = dataAtual.plusDays(1);
            
            // Verifica se é um dia da semana da recorrência
            DiaDaSemana diaAtual = DiaDaSemana.fromDayOfWeek(dataAtual.getDayOfWeek());
            if (diasDaSemana.contains(diaAtual) && dataAtual.isAfter(inicio.toLocalDate())) {
                LocalDateTime inicioOcorrencia = LocalDateTime.of(dataAtual, horaInicio);
                LocalDateTime fimOcorrencia = LocalDateTime.of(dataAtual, horaFim);
                
                // Verifica conflito para esta ocorrência
                try {
                    verificarConflitoHorario(espaco, professorId, inicioOcorrencia, fimOcorrencia, null);
                } catch (IllegalStateException e) {
                    throw new IllegalStateException("Conflito em ocorrência futura");
                }
            }
        }
        
        AulaId id = gerarProximoIdDisponivel();
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

    public void alterarCapacidade(AulaId aulaId, int novaCapacidade) {
        Aula aula = obterAula(aulaId);
        aula.alterarCapacidade(novaCapacidade);
        aulaRepositorio.salvar(aula);
    }

    public void alterarModalidade(AulaId aulaId, Modalidade novaModalidade) {
        Aula aula = obterAula(aulaId);
        aula.alterarModalidade(novaModalidade);
        aulaRepositorio.salvar(aula);
    }

    public void alterarEspaco(AulaId aulaId, Espaco novoEspaco, LocalDateTime inicio, LocalDateTime fim) {
        Aula aula = obterAula(aulaId);
        verificarConflitoHorario(novoEspaco, aula.getProfessorId(), inicio, fim, aulaId);
        aula.alterarEspaco(novoEspaco);
        aulaRepositorio.salvar(aula);
    }

    public void alterarAulaCompleta(AulaId aulaId, Modalidade modalidade, Espaco espaco, 
                                    int capacidade, LocalDateTime novoInicio, LocalDateTime novoFim) {
        Aula aula = obterAula(aulaId);
        verificarConflitoHorario(espaco, aula.getProfessorId(), novoInicio, novoFim, aulaId);
        aula.alterarModalidade(modalidade);
        aula.alterarEspaco(espaco);
        aula.alterarCapacidade(capacidade);
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

    public void concluirAula(AulaId aulaId) {
        Aula aula = obterAula(aulaId);
        aula.concluir();
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
        // Busca aulas no espaço e período usando o repositório
        List<Aula> aulasNoEspaco = aulaRepositorio.buscarPorEspacoEPeriodo(espaco, inicio, fim);
        
        // Cria a coleção para usar o Iterator Pattern
        AulaCollection collectionEspaco = new AulaCollection(aulasNoEspaco);
        
        // Usa o AulaConflitoChecker com Iterator para verificar conflito de espaço
        if (AulaConflitoChecker.existeConflitoEspaco(collectionEspaco, inicio, fim, espaco, aulaIdExcluir)) {
            throw new IllegalStateException("Conflito de horário: O espaço já está ocupado.");
        }

        // Busca aulas do professor no período
        List<Aula> aulasDoProfessor = aulaRepositorio.buscarPorProfessorEPeriodo(professorId, inicio, fim);
        
        // Cria a coleção para usar o Iterator Pattern
        AulaCollection collectionProfessor = new AulaCollection(aulasDoProfessor);
        
        // Usa o AulaConflitoChecker com Iterator para verificar conflito de professor
        if (AulaConflitoChecker.existeConflitoProfessor(collectionProfessor, inicio, fim, professorId, aulaIdExcluir)) {
            throw new IllegalStateException("Conflito de horário: O professor já está alocado em outra aula.");
        }
    }
    
    // Métodos com retorno de mensagem para facilitar testes BDD
    
    public String criarAulaUnicaComMensagem(ProfessorId professorId, Modalidade modalidade, Espaco espaco, 
                                            int capacidade, LocalDateTime inicio, LocalDateTime fim) {
        try {
            criarAulaUnica(professorId, modalidade, espaco, capacidade, inicio, fim);
            return "A aula foi criada com sucesso!";
        } catch (IllegalStateException e) {
            return "Conflito de horário";
        }
    }
    
    public String criarAulaRecorrenteComMensagem(ProfessorId professorId, Modalidade modalidade, Espaco espaco, 
                                                 int capacidade, LocalDateTime inicio, LocalDateTime fim,
                                                 TipoRecorrencia tipoRecorrencia, List<DiaDaSemana> diasDaSemana, 
                                                 LocalDate dataFimRecorrencia) {
        try {
            criarAulaRecorrente(professorId, modalidade, espaco, capacidade, inicio, fim, 
                               tipoRecorrencia, diasDaSemana, dataFimRecorrencia);
            return "A aula recorrente foi criada com sucesso!";
        } catch (IllegalStateException e) {
            return "Conflito em ocorrência futura";
        }
    }
    
    public String alterarHorarioPrincipalComMensagem(AulaId aulaId, LocalDateTime novoInicio, LocalDateTime novoFim) {
        try {
            alterarHorarioPrincipal(aulaId, novoInicio, novoFim);
            return "Horário principal alterado com sucesso";
        } catch (IllegalStateException e) {
            return "Conflito de horário";
        }
    }

    public String alterarAulaCompletaComMensagem(AulaId aulaId, Modalidade modalidade, Espaco espaco, 
                                                  int capacidade, LocalDateTime novoInicio, LocalDateTime novoFim) {
        try {
            alterarAulaCompleta(aulaId, modalidade, espaco, capacidade, novoInicio, novoFim);
            return "Aula atualizada com sucesso";
        } catch (IllegalStateException e) {
            return "Conflito de horário: " + e.getMessage();
        } catch (IllegalArgumentException e) {
            return "Dados inválidos: " + e.getMessage();
        }
    }
    
    public String reagendarOcorrenciaUnicaComMensagem(AulaId aulaId, LocalDate dataOriginal, 
                                                      LocalDateTime novoInicio, LocalDateTime novoFim) {
        try {
            reagendarOcorrenciaUnica(aulaId, dataOriginal, novoInicio, novoFim);
            return "Ocorrência reagendada com sucesso";
        } catch (IllegalStateException e) {
            return "Conflito de horário";
        }
    }
    
    public String cancelarOcorrenciaUnicaComMensagem(AulaId aulaId, LocalDate dataDaOcorrencia) {
        try {
            cancelarOcorrenciaUnica(aulaId, dataDaOcorrencia);
            return "Ocorrência cancelada com sucesso";
        } catch (Exception e) {
            return "Erro ao cancelar ocorrência";
        }
    }
    
    public String cancelarAulaDefinitivamenteComMensagem(AulaId aulaId) {
        try {
            cancelarAulaDefinitivamente(aulaId);
            return "Aula cancelada com sucesso";
        } catch (Exception e) {
            return "Erro ao cancelar aula";
        }
    }

    public String concluirAulaComMensagem(AulaId aulaId) {
        try {
            concluirAula(aulaId);
            return "Aula concluída com sucesso";
        } catch (IllegalStateException e) {
            return e.getMessage();
        } catch (Exception e) {
            return "Erro ao concluir aula";
        }
    }

}
