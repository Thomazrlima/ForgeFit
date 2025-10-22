package br.com.forgefit.dominio.treino;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

import br.com.forgefit.dominio.professor.ProfessorId;
import br.com.forgefit.dominio.treino.enums.LetraDoTreino;

/**
 * Serviço para gerenciamento de planos de treino
 */
public class TreinoService {
    private final TreinoRepositorio treinoRepositorio;
    private final AtomicInteger contadorId = new AtomicInteger(1);
    private static final int LIMITE_MAX_TREINOS = 7;

    public TreinoService(TreinoRepositorio treinoRepositorio) {
        notNull(treinoRepositorio, "O repositório de treinos não pode ser nulo");
        this.treinoRepositorio = treinoRepositorio;
    }

    public PlanoDeTreino criarPlanoDeTreino(ProfessorId professorId, List<TreinoDiario> treinos) {
        return criarPlanoDeTreino(professorId, treinos, null);
    }

    public PlanoDeTreino criarPlanoDeTreino(ProfessorId professorId, List<TreinoDiario> treinos, 
                                           LocalDate validadeSugerida) {
        notNull(professorId, "O ID do professor não pode ser nulo");
        notNull(treinos, "A lista de treinos não pode ser nula");

        if (treinos.size() > LIMITE_MAX_TREINOS) {
            throw new IllegalArgumentException(
                "Não é possível criar mais de " + LIMITE_MAX_TREINOS + 
                " treinos, pois superou o numero de dias da semana");
        }

        PlanoDeTreinoId id = new PlanoDeTreinoId(contadorId.getAndIncrement());
        LocalDate dataCriacao = LocalDate.now();

        PlanoDeTreino plano = new PlanoDeTreino(
            id, professorId, dataCriacao, validadeSugerida, treinos);

        treinoRepositorio.salvar(plano);
        return plano;
    }

    public void atualizarTreinoDiario(PlanoDeTreinoId planoId, TreinoDiario treinoAtualizado) {
        PlanoDeTreino plano = obterPlano(planoId);
        
        List<TreinoDiario> treinosAtualizados = new ArrayList<>(plano.getTreinosDaSemana());
        
        // Remove o treino com a mesma letra se existir
        treinosAtualizados.removeIf(t -> t.getLetra() == treinoAtualizado.getLetra());
        
        // Adiciona o treino atualizado
        treinosAtualizados.add(treinoAtualizado);
        
        // Ordena por letra
        treinosAtualizados.sort(Comparator.comparing(TreinoDiario::getLetra));
        
        PlanoDeTreino planoAtualizado = new PlanoDeTreino(
            plano.getId(), plano.getProfessorId(),
            plano.getDataCriacao(), plano.getDataValidadeSugerida(), treinosAtualizados);
        
        treinoRepositorio.salvar(planoAtualizado);
    }

    public void adicionarTreinoDiario(PlanoDeTreinoId planoId, TreinoDiario novoTreino) {
        PlanoDeTreino plano = obterPlano(planoId);
        
        if (plano.getTreinosDaSemana().size() >= LIMITE_MAX_TREINOS) {
            throw new IllegalArgumentException(
                "Não é possível adicionar mais treinos, pois superou o numero de dias da semana, " +
                "impossibilitando a criação do treino " + novoTreino.getLetra());
        }
        
        List<TreinoDiario> treinosAtualizados = new ArrayList<>(plano.getTreinosDaSemana());
        treinosAtualizados.add(novoTreino);
        treinosAtualizados.sort(Comparator.comparing(TreinoDiario::getLetra));
        
        PlanoDeTreino planoAtualizado = new PlanoDeTreino(
            plano.getId(), plano.getProfessorId(),
            plano.getDataCriacao(), plano.getDataValidadeSugerida(), treinosAtualizados);
        
        treinoRepositorio.salvar(planoAtualizado);
    }

    public void excluirTreinoDiario(PlanoDeTreinoId planoId, LetraDoTreino letraParaExcluir) {
        PlanoDeTreino plano = obterPlano(planoId);
        
        List<TreinoDiario> treinosAtualizados = plano.getTreinosDaSemana().stream()
            .filter(t -> t.getLetra() != letraParaExcluir)
            .collect(Collectors.toList());
        
        // Reordena as letras dos treinos restantes
        List<TreinoDiario> treinosReordenados = new ArrayList<>();
        LetraDoTreino[] letrasDisponiveis = LetraDoTreino.values();
        
        for (int i = 0; i < treinosAtualizados.size(); i++) {
            TreinoDiario treinoOriginal = treinosAtualizados.get(i);
            LetraDoTreino novaLetra = letrasDisponiveis[i];
            
            TreinoDiario treinoReordenado = new TreinoDiario(
                novaLetra, treinoOriginal.getTipo(), treinoOriginal.getExercicios());
            
            treinosReordenados.add(treinoReordenado);
        }
        
        PlanoDeTreino planoAtualizado = new PlanoDeTreino(
            plano.getId(), plano.getProfessorId(),
            plano.getDataCriacao(), plano.getDataValidadeSugerida(), treinosReordenados);
        
        treinoRepositorio.salvar(planoAtualizado);
    }

    public PlanoDeTreino obterPlano(PlanoDeTreinoId planoId) {
        return treinoRepositorio.obterPorId(planoId)
            .orElseThrow(() -> new IllegalArgumentException("Plano de treino não encontrado"));
    }
}
