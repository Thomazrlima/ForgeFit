package br.com.forgefit.dominio.aula;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import br.com.forgefit.dominio.aula.enums.Espaco;
import br.com.forgefit.dominio.aula.enums.Modalidade;
import br.com.forgefit.dominio.aula.enums.StatusAula;

public class AulaService {
    private final AulaRepositorio aulaRepositorio;
    private final AtomicInteger contadorId = new AtomicInteger(1);

    public AulaService(AulaRepositorio aulaRepositorio) {
        notNull(aulaRepositorio, "O repositório de aulas não pode ser nulo");
        this.aulaRepositorio = aulaRepositorio;
    }

    public Aula criarAulaUnica(Modalidade modalidade, Espaco espaco, int capacidade,
                               LocalDateTime inicio, LocalDateTime fim) {
        // Verifica se há conflito de horário
        verificarConflitoHorario(espaco, inicio, fim);
        
        AulaId id = new AulaId(contadorId.getAndIncrement());
        Aula aula = new Aula(id, modalidade, espaco, capacidade, inicio, fim);
        aulaRepositorio.salvar(aula);
        return aula;
    }

    public List<Aula> criarAulasRecorrentes(Modalidade modalidade, Espaco espaco, int capacidade,
                                            LocalDate dataInicio, LocalTime hora, int repeticoes) {
        List<Aula> aulasCriadas = new ArrayList<>();
        LocalDate dataAtual = dataInicio;
        
        for (int i = 0; i < repeticoes; i++) {
            LocalDateTime inicio = LocalDateTime.of(dataAtual, hora);
            LocalDateTime fim = inicio.plusHours(1);
            
            // Verifica conflito antes de criar cada aula
            if (temConflito(espaco, inicio, fim)) {
                throw new IllegalStateException(
                    "Conflito de horário detectado em " + dataAtual + " às " + hora);
            }
            
            AulaId id = new AulaId(contadorId.getAndIncrement());
            Aula aula = new Aula(id, modalidade, espaco, capacidade, inicio, fim);
            aulaRepositorio.salvar(aula);
            aulasCriadas.add(aula);
            
            // Avança para a próxima semana (mesmo dia da semana)
            dataAtual = dataAtual.plusWeeks(1);
        }
        
        return aulasCriadas;
    }

    public void reagendarAula(AulaId aulaId, LocalDateTime novoInicio, LocalDateTime novoFim) {
        Aula aula = obter(aulaId);
        
        // Verifica se o novo horário tem conflito
        verificarConflitoHorario(aula.getEspaco(), novoInicio, novoFim, aulaId);
        
        // Como a aula é imutável, precisamos criar uma nova
        Aula aulaReagendada = new Aula(aulaId, aula.getModalidade(), aula.getEspaco(),
            aula.getCapacidade(), novoInicio, novoFim);
        aulaRepositorio.salvar(aulaReagendada);
    }

    public void cancelarAula(AulaId aulaId) {
        Aula aula = aulaRepositorio.obterPorId(aulaId)
            .orElseThrow(() -> new IllegalArgumentException("Aula não encontrada"));
        aula.cancelar();
        aulaRepositorio.salvar(aula);
    }

    public Aula obter(AulaId aulaId) {
        return aulaRepositorio.obterPorId(aulaId)
            .orElseThrow(() -> new IllegalArgumentException("Aula não encontrada"));
    }

    public void alterarRecorrencia(List<Aula> aulasRecorrentes, int novoLimite) {
        if (aulasRecorrentes.size() > novoLimite) {
            // Cancela aulas que ultrapassam o novo limite
            for (int i = novoLimite; i < aulasRecorrentes.size(); i++) {
                cancelarAula(aulasRecorrentes.get(i).getId());
            }
        } else if (aulasRecorrentes.size() < novoLimite) {
            // Cria novas aulas até atingir o novo limite
            Aula ultimaAula = aulasRecorrentes.get(aulasRecorrentes.size() - 1);
            LocalDate proximaData = ultimaAula.getInicio().toLocalDate().plusWeeks(1);
            LocalTime hora = ultimaAula.getInicio().toLocalTime();
            
            int aulasParaCriar = novoLimite - aulasRecorrentes.size();
            List<Aula> novasAulas = criarAulasRecorrentes(
                ultimaAula.getModalidade(),
                ultimaAula.getEspaco(),
                ultimaAula.getCapacidade(),
                proximaData,
                hora,
                aulasParaCriar
            );
            aulasRecorrentes.addAll(novasAulas);
        }
    }

    private void verificarConflitoHorario(Espaco espaco, LocalDateTime inicio, LocalDateTime fim) {
        verificarConflitoHorario(espaco, inicio, fim, null);
    }

    private void verificarConflitoHorario(Espaco espaco, LocalDateTime inicio, LocalDateTime fim, AulaId aulaIdExcluir) {
        if (temConflito(espaco, inicio, fim, aulaIdExcluir)) {
            throw new IllegalStateException(
                String.format("%s às %s já está ocupado para aula de %s",
                    inicio.toLocalDate().format(java.time.format.DateTimeFormatter.ofPattern("dd/MM/yyyy")),
                    inicio.toLocalTime().format(java.time.format.DateTimeFormatter.ofPattern("HH:mm")),
                    espaco.name().toLowerCase().replace("_", " ")));
        }
    }

    private boolean temConflito(Espaco espaco, LocalDateTime inicio, LocalDateTime fim) {
        return temConflito(espaco, inicio, fim, null);
    }

    private boolean temConflito(Espaco espaco, LocalDateTime inicio, LocalDateTime fim, AulaId aulaIdExcluir) {
        List<Aula> aulasNoEspaco = aulaRepositorio.buscarPorEspacoEPeriodo(espaco, inicio, fim);
        
        return aulasNoEspaco.stream()
            .filter(a -> a.getStatus() == StatusAula.ATIVA)
            .filter(a -> aulaIdExcluir == null || !a.getId().equals(aulaIdExcluir))
            .anyMatch(a -> 
                (inicio.isBefore(a.getFim()) && fim.isAfter(a.getInicio())) ||
                inicio.equals(a.getInicio())
            );
    }
}
