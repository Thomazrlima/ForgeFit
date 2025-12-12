package br.com.forgefit.apresentacao.treino;

import static org.springframework.web.bind.annotation.RequestMethod.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.forgefit.aplicacao.treino.PlanoTreinoResumo;
import br.com.forgefit.aplicacao.treino.TreinoServicoAplicacao;
import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.treino.ItemDeExercicio;
import br.com.forgefit.dominio.treino.PlanoDeTreinoId;
import br.com.forgefit.dominio.treino.Repeticao;
import br.com.forgefit.dominio.treino.TreinoDiario;
import br.com.forgefit.dominio.treino.enums.Exercicio;
import br.com.forgefit.dominio.treino.enums.LetraDoTreino;
import br.com.forgefit.dominio.treino.enums.TipoDoTreino;

/**
 * Controlador REST para operações relacionadas a planos de treino.
 * Segue o padrão da arquitetura DDD adaptado ao ForgeFit.
 */
@RestController
@RequestMapping("api/treinos")
class TreinoControlador {

    @Autowired
    private TreinoServicoAplicacao treinoServicoAplicacao;

    @Autowired
    private AlunoRepositorio alunoRepositorio;

    /**
     * Cria um novo plano de treino.
     * POST /api/treinos
     * 
     * @param request Dados do plano a ser criado
     * @return Resposta com o plano criado
     */
    @RequestMapping(method = POST)
    ResponseEntity<CriarPlanoResponse> criarPlanoTreino(@RequestBody CriarPlanoRequest request) {
        try {
            if (request.professorId() == null) {
                return ResponseEntity.badRequest()
                    .body(new CriarPlanoResponse(false, "ID do professor é obrigatório", null));
            }

            if (request.treinos() == null || request.treinos().isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(new CriarPlanoResponse(false, "Deve haver pelo menos um treino", null));
            }

            if (request.treinos().size() > 7) {
                return ResponseEntity.badRequest()
                    .body(new CriarPlanoResponse(false, 
                        "Não é possível criar mais de 7 treinos, pois superou o numero de dias da semana", null));
            }

            // Converte os treinos do request para entidades de domínio
            List<TreinoDiario> treinos = converterTreinos(request.treinos());

            PlanoTreinoResumo plano;
            if (request.validadeSugerida() != null) {
                LocalDate validade = LocalDate.parse(request.validadeSugerida());
                plano = treinoServicoAplicacao.criarPlanoTreinoComValidade(
                    request.professorId(), treinos, validade);
            } else {
                plano = treinoServicoAplicacao.criarPlanoTreino(request.professorId(), treinos);
            }

            return ResponseEntity.status(HttpStatus.CREATED)
                .body(new CriarPlanoResponse(true, "Plano de treino criado com sucesso", plano));

        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest()
                .body(new CriarPlanoResponse(false, e.getMessage(), null));
        } catch (Exception e) {
            System.err.println("Erro ao criar plano de treino: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new CriarPlanoResponse(false, "Erro interno ao criar plano", null));
        }
    }

    /**
     * Busca um plano de treino por ID.
     * GET /api/treinos/{id}
     * 
     * @param id ID do plano
     * @return Plano encontrado
     */
    @RequestMapping(method = GET, path = "/{id}")
    ResponseEntity<PlanoTreinoResumo> buscarPlanoPorId(@PathVariable Integer id) {
        try {
            PlanoTreinoResumo plano = treinoServicoAplicacao.buscarPlanoPorId(id);
            return ResponseEntity.ok(plano);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            System.err.println("Erro ao buscar plano: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Lista todos os planos de um professor.
     * GET /api/treinos/professor/{professorId}
     * 
     * @param professorId ID do professor
     * @return Lista de planos
     */
    @RequestMapping(method = GET, path = "/professor/{professorId}")
    List<PlanoTreinoResumo> listarPlanosPorProfessor(@PathVariable Integer professorId) {
        return treinoServicoAplicacao.listarPlanosPorProfessor(professorId);
    }

    /**
     * Busca o plano ativo de um aluno.
     * GET /api/treinos/aluno/{matricula}
     * 
     * @param matricula Matrícula do aluno
     * @return Plano ativo do aluno
     */
    @RequestMapping(method = GET, path = "/aluno/{matricula}")
    ResponseEntity<PlanoTreinoResumo> buscarPlanoAtivoPorAluno(@PathVariable String matricula) {
        PlanoTreinoResumo plano = treinoServicoAplicacao.buscarPlanoAtivoPorAluno(matricula);
        if (plano == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(plano);
    }

    /**
     * Adiciona um treino a um plano existente.
     * POST /api/treinos/{id}/treino
     * 
     * @param id ID do plano
     * @param request Dados do treino a ser adicionado
     * @return Resposta da operação
     */
    @RequestMapping(method = POST, path = "/{id}/treino")
    ResponseEntity<OperacaoTreinoResponse> adicionarTreino(
            @PathVariable Integer id, 
            @RequestBody TreinoRequest request) {
        try {
            TreinoDiario treino = converterTreino(request);
            treinoServicoAplicacao.adicionarTreino(id, treino);
            return ResponseEntity.ok(
                new OperacaoTreinoResponse(true, "Treino adicionado com sucesso"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest()
                .body(new OperacaoTreinoResponse(false, e.getMessage()));
        } catch (Exception e) {
            System.err.println("Erro ao adicionar treino: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new OperacaoTreinoResponse(false, "Erro interno ao adicionar treino"));
        }
    }

    /**
     * Atualiza um treino existente.
     * PUT /api/treinos/{id}/treino
     * 
     * @param id ID do plano
     * @param request Dados do treino atualizado
     * @return Resposta da operação
     */
    @RequestMapping(method = PUT, path = "/{id}/treino")
    ResponseEntity<OperacaoTreinoResponse> atualizarTreino(
            @PathVariable Integer id, 
            @RequestBody TreinoRequest request) {
        try {
            TreinoDiario treino = converterTreino(request);
            treinoServicoAplicacao.atualizarTreino(id, treino);
            return ResponseEntity.ok(
                new OperacaoTreinoResponse(true, "Treino atualizado com sucesso"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest()
                .body(new OperacaoTreinoResponse(false, e.getMessage()));
        } catch (Exception e) {
            System.err.println("Erro ao atualizar treino: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new OperacaoTreinoResponse(false, "Erro interno ao atualizar treino"));
        }
    }

    /**
     * Exclui um treino e reordena os demais.
     * DELETE /api/treinos/{id}/treino/{letra}
     * 
     * @param id ID do plano
     * @param letra Letra do treino a ser excluído
     * @return Resposta da operação
     */
    @RequestMapping(method = DELETE, path = "/{id}/treino/{letra}")
    ResponseEntity<OperacaoTreinoResponse> excluirTreino(
            @PathVariable Integer id, 
            @PathVariable String letra) {
        try {
            LetraDoTreino letraTreino = LetraDoTreino.valueOf(letra.toUpperCase());
            treinoServicoAplicacao.excluirTreino(id, letraTreino);
            return ResponseEntity.ok(
                new OperacaoTreinoResponse(true, 
                    "Treino excluído com sucesso e treinos reordenados automaticamente"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest()
                .body(new OperacaoTreinoResponse(false, e.getMessage()));
        } catch (Exception e) {
            System.err.println("Erro ao excluir treino: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new OperacaoTreinoResponse(false, "Erro interno ao excluir treino"));
        }
    }

    /**
     * Remove a associação de um plano de treino de um aluno.
     * DELETE /api/treinos/aluno/{matricula}
     * 
     * @param matricula Matrícula do aluno
     * @return Resposta com status da operação
     */
    @RequestMapping(method = DELETE, path = "/aluno/{matricula}")
    ResponseEntity<OperacaoTreinoResponse> removerPlanoDoAluno(@PathVariable String matricula) {
        try {
            // Buscar o aluno
            Optional<Aluno> alunoOpt = alunoRepositorio.obterPorMatricula(new Matricula(matricula));
            if (alunoOpt.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new OperacaoTreinoResponse(false, "Aluno não encontrado"));
            }

            Aluno aluno = alunoOpt.get();
            aluno.setPlanoAtivoId(null);
            alunoRepositorio.salvar(aluno);

            return ResponseEntity.ok(
                new OperacaoTreinoResponse(true, "Plano removido do aluno com sucesso"));
        } catch (Exception e) {
            System.err.println("Erro ao remover plano do aluno: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new OperacaoTreinoResponse(false, "Erro interno ao remover plano"));
        }
    }

    /**
     * Atribui um plano de treino a um aluno.
     * PUT /api/treinos/{planoId}/atribuir/{matricula}
     * 
     * @param planoId ID do plano de treino
     * @param matricula Matrícula do aluno
     * @return Resposta com status da operação
     */
    @RequestMapping(method = PUT, path = "/{planoId}/atribuir/{matricula}")
    ResponseEntity<OperacaoTreinoResponse> atribuirPlanoAoAluno(
            @PathVariable Integer planoId,
            @PathVariable String matricula) {
        try {
            // Buscar o plano para validar que existe
            PlanoTreinoResumo plano = treinoServicoAplicacao.buscarPlanoPorId(planoId);
            if (plano == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new OperacaoTreinoResponse(false, "Plano de treino não encontrado"));
            }

            // Buscar o aluno
            Optional<Aluno> alunoOpt = alunoRepositorio.obterPorMatricula(new Matricula(matricula));
            if (alunoOpt.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new OperacaoTreinoResponse(false, "Aluno não encontrado"));
            }

            Aluno aluno = alunoOpt.get();
            aluno.setPlanoAtivoId(new PlanoDeTreinoId(planoId));
            alunoRepositorio.salvar(aluno);

            return ResponseEntity.ok(
                new OperacaoTreinoResponse(true, "Plano atribuído ao aluno com sucesso"));
        } catch (Exception e) {
            System.err.println("Erro ao atribuir plano ao aluno: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new OperacaoTreinoResponse(false, "Erro interno ao atribuir plano"));
        }
    }

    // ===== MÉTODOS AUXILIARES DE CONVERSÃO =====

    private List<TreinoDiario> converterTreinos(List<TreinoRequest> requests) {
        List<TreinoDiario> treinos = new ArrayList<>();
        for (TreinoRequest request : requests) {
            treinos.add(converterTreino(request));
        }
        return treinos;
    }

    private TreinoDiario converterTreino(TreinoRequest request) {
        LetraDoTreino letra = LetraDoTreino.valueOf(request.letra().toUpperCase());
        TipoDoTreino tipo = TipoDoTreino.valueOf(request.tipo().toUpperCase());
        
        List<ItemDeExercicio> exercicios = new ArrayList<>();
        if (request.exercicios() != null) {
            for (ExercicioRequest exRequest : request.exercicios()) {
                Exercicio exercicio = Exercicio.valueOf(exRequest.exercicio().toUpperCase());
                Repeticao repeticao = new Repeticao(exRequest.series(), exRequest.contagem());
                exercicios.add(new ItemDeExercicio(exercicio, repeticao));
            }
        }
        
        return new TreinoDiario(letra, tipo, exercicios);
    }
}

// ===== RECORDS PARA REQUESTS E RESPONSES =====

record CriarPlanoRequest(
    Integer professorId,
    String validadeSugerida,
    List<TreinoRequest> treinos
) {}

record TreinoRequest(
    String letra,
    String tipo,
    List<ExercicioRequest> exercicios
) {}

record ExercicioRequest(
    String exercicio,
    Integer series,
    String contagem
) {}

record CriarPlanoResponse(
    boolean sucesso,
    String mensagem,
    PlanoTreinoResumo plano
) {}

record OperacaoTreinoResponse(
    boolean sucesso,
    String mensagem
) {}
