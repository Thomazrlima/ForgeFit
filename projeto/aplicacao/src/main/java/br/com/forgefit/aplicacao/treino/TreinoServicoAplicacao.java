package br.com.forgefit.aplicacao.treino;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.List;

import br.com.forgefit.dominio.professor.ProfessorId;
import br.com.forgefit.dominio.treino.PlanoDeTreino;
import br.com.forgefit.dominio.treino.PlanoDeTreinoId;
import br.com.forgefit.dominio.treino.TreinoDiario;
import br.com.forgefit.dominio.treino.TreinoRepositorio;
import br.com.forgefit.dominio.treino.TreinoService;
import br.com.forgefit.dominio.treino.enums.LetraDoTreino;
import org.springframework.stereotype.Service;

/**
 * Serviço da camada de aplicação para operações de treinos.
 * Coordena chamadas ao serviço de domínio e aplica regras de negócio da camada de
 * aplicação.
 */
@Service
public class TreinoServicoAplicacao {
    private final TreinoService treinoService;
    private final TreinoRepositorioAplicacao treinoRepositorioAplicacao;

    public TreinoServicoAplicacao(TreinoService treinoService, TreinoRepositorioAplicacao treinoRepositorioAplicacao) {
        notNull(treinoService, "O serviço de treino não pode ser nulo");
        notNull(treinoRepositorioAplicacao, "O repositório de treino não pode ser nulo");
        this.treinoService = treinoService;
        this.treinoRepositorioAplicacao = treinoRepositorioAplicacao;
    }

    /**
     * Cria um novo plano de treino para um aluno.
     * 
     * @param professorId ID do professor responsável
     * @param treinos Lista de treinos diários
     * @return Resumo do plano criado
     */
    public PlanoTreinoResumo criarPlanoTreino(Integer professorId, List<TreinoDiario> treinos) {
        notNull(professorId, "O ID do professor não pode ser nulo");
        notNull(treinos, "A lista de treinos não pode ser nula");

        ProfessorId profId = new ProfessorId(professorId);
        PlanoDeTreino plano = treinoService.criarPlanoDeTreino(profId, treinos);

        return converterParaResumo(plano);
    }

    /**
     * Cria um novo plano de treino com validade sugerida.
     * 
     * @param professorId ID do professor responsável
     * @param treinos Lista de treinos diários
     * @param validadeSugerida Data de validade sugerida do plano
     * @return Resumo do plano criado
     */
    public PlanoTreinoResumo criarPlanoTreinoComValidade(Integer professorId, List<TreinoDiario> treinos, 
                                                         LocalDate validadeSugerida) {
        notNull(professorId, "O ID do professor não pode ser nulo");
        notNull(treinos, "A lista de treinos não pode ser nula");

        ProfessorId profId = new ProfessorId(professorId);
        PlanoDeTreino plano = treinoService.criarPlanoDeTreino(profId, treinos, validadeSugerida);

        return converterParaResumo(plano);
    }

    /**
     * Adiciona um treino diário a um plano existente.
     * 
     * @param planoId ID do plano de treino
     * @param treino Treino diário a ser adicionado
     */
    public void adicionarTreino(Integer planoId, TreinoDiario treino) {
        notNull(planoId, "O ID do plano não pode ser nulo");
        notNull(treino, "O treino não pode ser nulo");

        PlanoDeTreinoId id = new PlanoDeTreinoId(planoId);
        treinoService.adicionarTreinoDiario(id, treino);
    }

    /**
     * Atualiza um treino diário existente.
     * 
     * @param planoId ID do plano de treino
     * @param treino Treino diário atualizado
     */
    public void atualizarTreino(Integer planoId, TreinoDiario treino) {
        notNull(planoId, "O ID do plano não pode ser nulo");
        notNull(treino, "O treino não pode ser nulo");

        PlanoDeTreinoId id = new PlanoDeTreinoId(planoId);
        treinoService.atualizarTreinoDiario(id, treino);
    }

    /**
     * Exclui um treino diário e reordena os treinos restantes.
     * 
     * @param planoId ID do plano de treino
     * @param letra Letra do treino a ser excluído
     */
    public void excluirTreino(Integer planoId, LetraDoTreino letra) {
        notNull(planoId, "O ID do plano não pode ser nulo");
        notNull(letra, "A letra do treino não pode ser nula");

        PlanoDeTreinoId id = new PlanoDeTreinoId(planoId);
        treinoService.excluirTreinoDiario(id, letra);
    }

    /**
     * Busca um plano de treino por ID.
     * 
     * @param planoId ID do plano
     * @return Resumo do plano
     */
    public PlanoTreinoResumo buscarPlanoPorId(Integer planoId) {
        notNull(planoId, "O ID do plano não pode ser nulo");

        PlanoDeTreinoId id = new PlanoDeTreinoId(planoId);
        PlanoDeTreino plano = treinoService.obterPlano(id);

        return converterParaResumo(plano);
    }

    /**
     * Lista todos os planos de um professor.
     * 
     * @param professorId ID do professor
     * @return Lista de resumos dos planos
     */
    public List<PlanoTreinoResumo> listarPlanosPorProfessor(Integer professorId) {
        notNull(professorId, "O ID do professor não pode ser nulo");

        return treinoRepositorioAplicacao.pesquisarPorProfessor(professorId);
    }

    /**
     * Busca o plano ativo de um aluno.
     * 
     * @param matricula Matrícula do aluno
     * @return Resumo do plano ativo ou null se não houver
     */
    public PlanoTreinoResumo buscarPlanoAtivoPorAluno(String matricula) {
        notNull(matricula, "A matrícula não pode ser nula");

        return treinoRepositorioAplicacao.buscarPlanoAtivoPorAluno(matricula);
    }

    private PlanoTreinoResumo converterParaResumo(PlanoDeTreino plano) {
        PlanoTreinoResumo resumo = new PlanoTreinoResumo();
        resumo.setId(plano.getId().getId());
        resumo.setProfessorId(plano.getProfessorId().getId());
        resumo.setDataCriacao(plano.getDataCriacao());
        resumo.setDataValidadeSugerida(plano.getDataValidadeSugerida());
        resumo.setAtivo(plano.isAtivo());
        resumo.setQuantidadeTreinos(plano.getTreinosDaSemana().size());

        List<TreinoDiarioResumo> treinosResumo = plano.getTreinosDaSemana().stream()
                .map(this::converterTreinoParaResumo)
                .toList();
        resumo.setTreinos(treinosResumo);

        return resumo;
    }

    private TreinoDiarioResumo converterTreinoParaResumo(TreinoDiario treino) {
        TreinoDiarioResumo resumo = new TreinoDiarioResumo();
        resumo.setLetra(treino.getLetra().name());
        resumo.setTipo(treino.getTipo().name());
        resumo.setQuantidadeExercicios(treino.getExercicios().size());

        List<ExercicioResumo> exerciciosResumo = treino.getExercicios().stream()
                .map(this::converterExercicioParaResumo)
                .toList();
        resumo.setExercicios(exerciciosResumo);

        return resumo;
    }

    private ExercicioResumo converterExercicioParaResumo(br.com.forgefit.dominio.treino.ItemDeExercicio item) {
        ExercicioResumo resumo = new ExercicioResumo();
        resumo.setExercicio(item.getExercicio().name());
        resumo.setSeries(item.getRepeticao().getSeries());
        resumo.setContagem(item.getRepeticao().getContagem());
        return resumo;
    }
}
