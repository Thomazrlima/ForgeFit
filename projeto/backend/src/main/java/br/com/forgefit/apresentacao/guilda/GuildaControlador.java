package br.com.forgefit.apresentacao.guilda;

import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.forgefit.aplicacao.guilda.GuildaResumo;
import br.com.forgefit.aplicacao.guilda.GuildaServicoAplicacao;
import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.checkin.Checkin;
import br.com.forgefit.dominio.checkin.CheckinService;
import br.com.forgefit.dominio.guilda.CodigoConvite;
import br.com.forgefit.dominio.guilda.Guilda;
import br.com.forgefit.dominio.guilda.GuildaId;
import br.com.forgefit.dominio.guilda.GuildaRepositorio;
import br.com.forgefit.dominio.guilda.GuildaService;
import br.com.forgefit.dominio.treino.PlanoDeTreinoId;
import br.com.forgefit.dominio.treino.TreinoRepositorio;
import br.com.forgefit.dominio.treino.enums.LetraDoTreino;
import br.com.forgefit.persistencia.jpa.GuildaMembroService;

@RestController
@RequestMapping("api/guildas")
class GuildaControlador {
    
    @Autowired
    private GuildaServicoAplicacao guildaServicoAplicacao;
    
    @Autowired
    private GuildaService guildaService;
    
    @Autowired
    private AlunoRepositorio alunoRepositorio;
    
    @Autowired
    private GuildaRepositorio guildaRepositorio;
    
    @Autowired
    private CheckinService checkinService;
    
    @Autowired
    private TreinoRepositorio treinoRepositorio;
    
    @Autowired
    private GuildaMembroService guildaMembroService;

    @RequestMapping(method = GET, path = "/ativas")
    List<GuildaResumo> listarGuildasAtivas() {
        return guildaServicoAplicacao.listarGuildasAtivas();
    }

    @RequestMapping(method = GET, path = "/nome/{nome}")
    GuildaResumo buscarPorNome(@PathVariable String nome) {
        return guildaServicoAplicacao.buscarPorNome(nome);
    }
    
    @RequestMapping(method = GET, path = "/membro/{matricula}")
    ResponseEntity<VerificarMembroResponse> verificarMembroGuilda(@PathVariable String matricula) {
        // Busca guilda por matricula do aluno (membro ou mestre) via tabela GUILDA_MEMBROS
        java.util.Optional<Integer> guildaIdOpt = guildaMembroService.buscarGuildaIdPorMatricula(matricula);
        if (guildaIdOpt.isPresent()) {
            return ResponseEntity.ok(new VerificarMembroResponse(true, guildaIdOpt.get()));
        }
        return ResponseEntity.ok(new VerificarMembroResponse(false, null));
    }
    
    @RequestMapping(method = GET, path = "/{id}/detalhes")
    ResponseEntity<GuildaDetalhesResponse> buscarDetalhes(@PathVariable Integer id) {
        try {
            return guildaServicoAplicacao.buscarDetalhesPorId(id)
                .map(detalhes -> {
                    // Buscar checkins - se não houver, retorna lista vazia ao invés de null
                    List<br.com.forgefit.aplicacao.guilda.CheckinResumo> checkins;
                    try {
                        checkins = guildaServicoAplicacao.buscarCheckinsPorGuildaId(id);
                        if (checkins == null) {
                            checkins = new java.util.ArrayList<>();
                        }
                    } catch (Exception e) {
                        System.err.println("Erro ao buscar checkins para guilda " + id + ": " + e.getMessage());
                        checkins = new java.util.ArrayList<>();
                    }
                    
                    return ResponseEntity.ok(new GuildaDetalhesResponse(
                        detalhes.getId(),
                        detalhes.getNome(),
                        detalhes.getDescricao(),
                        detalhes.getImagemUrl(),
                        detalhes.getCodigoConvite(),
                        detalhes.getMestreMatricula(),
                        detalhes.getPontuacaoTotal(),
                        detalhes.getNumeroMembros(),
                        detalhes.getMembros(),
                        checkins
                    ));
                })
                .orElse(ResponseEntity.notFound().build());
        } catch (Exception e) {
            System.err.println("Erro ao buscar detalhes da guilda " + id + ": " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @RequestMapping(method = POST)
    ResponseEntity<CriarGuildaResponse> criarGuilda(@RequestBody CriarGuildaRequest request) {
        try {
            if (request.nome() == null || request.nome().trim().isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(new CriarGuildaResponse(false, "Nome da guilda é obrigatório", null, null));
            }
            
            if (request.mestreMatricula() == null || request.mestreMatricula().trim().isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(new CriarGuildaResponse(false, "Matrícula do mestre é obrigatória", null, null));
            }
            
            Matricula mestreMatricula = new Matricula(request.mestreMatricula().trim());
            
            System.out.println("Criando guilda para matrícula: " + request.mestreMatricula().trim());
            
            Guilda guilda = guildaService.criarGuilda(
                request.nome().trim(), 
                request.descricao(), 
                request.imagemURL(), 
                mestreMatricula
            );
            
            String codigoConvite = guilda.getCodigoConvite().getValor();
            
            System.out.println("Guilda criada, buscando ID na tabela GUILDA_MEMBROS para matrícula: " + request.mestreMatricula().trim());
            
            // Buscar o ID da guilda recém-criada através da tabela GUILDA_MEMBROS usando o repositório de aplicação
            Integer guildaId = guildaServicoAplicacao.buscarIdGuildaPorMatriculaMestre(request.mestreMatricula().trim())
                .orElseThrow(() -> {
                    System.err.println("ERRO: Não foi possível encontrar a guilda na tabela GUILDA_MEMBROS para matrícula: " + request.mestreMatricula().trim());
                    return new IllegalStateException("Erro ao obter ID da guilda criada");
                });
            
            System.out.println("ID da guilda encontrado: " + guildaId);
            
            return ResponseEntity.status(HttpStatus.CREATED)
                .body(new CriarGuildaResponse(
                    true, 
                    "Guilda criada com sucesso", 
                    guildaId,
                    codigoConvite
                ));
                
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest()
                .body(new CriarGuildaResponse(false, e.getMessage(), null, null));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new CriarGuildaResponse(false, "Erro ao criar guilda: " + e.getMessage(), null, null));
        }
    }
    
    @RequestMapping(method = PUT, path = "/{id}")
    ResponseEntity<AlterarGuildaResponse> alterarGuilda(
            @PathVariable Integer id,
            @RequestBody AlterarGuildaRequest request) {
        try {
            if (request.nome() == null || request.nome().trim().isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(new AlterarGuildaResponse(false, "Nome da guilda é obrigatório"));
            }
            
            if (request.mestreMatricula() == null || request.mestreMatricula().trim().isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(new AlterarGuildaResponse(false, "Matrícula do solicitante é obrigatória"));
            }
            
            System.out.println("Alterando guilda ID: " + id);
            System.out.println("Novo nome: " + request.nome());
            System.out.println("Nova descrição: " + request.descricao());
            System.out.println("Nova imagem: " + request.imagemURL());
            
            GuildaId guildaId = new GuildaId(id);
            Matricula solicitanteMatricula = new Matricula(request.mestreMatricula().trim());
            
            guildaService.alterarDados(
                guildaId,
                solicitanteMatricula,
                request.nome().trim(),
                request.descricao(),
                request.imagemURL()
            );
            
            System.out.println("Guilda alterada com sucesso");
            
            return ResponseEntity.ok(new AlterarGuildaResponse(true, "Guilda alterada com sucesso"));
                
        } catch (IllegalArgumentException e) {
            System.err.println("Erro de validação ao alterar guilda: " + e.getMessage());
            return ResponseEntity.badRequest()
                .body(new AlterarGuildaResponse(false, e.getMessage()));
        } catch (Exception e) {
            System.err.println("Erro ao alterar guilda: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new AlterarGuildaResponse(false, "Erro ao alterar guilda: " + e.getMessage()));
        }
    }
    
    @RequestMapping(method = POST, path = "/entrar")
    ResponseEntity<EntrarGuildaResponse> entrarGuilda(@RequestBody EntrarGuildaRequest request) {
        try {
            if (request.codigoConvite() == null || request.codigoConvite().trim().isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(new EntrarGuildaResponse(false, "Código de convite é obrigatório", null));
            }
            
            if (request.alunoMatricula() == null || request.alunoMatricula().trim().isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(new EntrarGuildaResponse(false, "Matrícula do aluno é obrigatória", null));
            }
            
            // Verificar se o aluno já está em uma guilda
            var alunoOpt = alunoRepositorio.obterPorMatricula(new Matricula(request.alunoMatricula().trim()));
            if (alunoOpt.isPresent() && alunoOpt.get().getGuildaId() != null) {
                return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(new EntrarGuildaResponse(false, "Aluno já está em uma guilda", null));
            }
            
            CodigoConvite codigoConvite = new CodigoConvite(request.codigoConvite().trim());
            Matricula alunoMatricula = new Matricula(request.alunoMatricula().trim());
            
            // Buscar guilda pelo código antes de entrar (para obter o ID)
            var guildaOpt = guildaRepositorio.buscarPorCodigoConvite(codigoConvite);
            if (guildaOpt.isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(new EntrarGuildaResponse(false, "Código de convite inválido", null));
            }
            
            GuildaId guildaId = guildaOpt.get().getId();
            
            guildaService.entrarEmGuilda(alunoMatricula, codigoConvite);
            
            // Atualizar GUILDA_ID do aluno
            var aluno = alunoOpt.orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado"));
            aluno.setGuildaId(guildaId);
            alunoRepositorio.salvar(aluno);
            
            return ResponseEntity.ok(new EntrarGuildaResponse(
                true,
                "Aluno entrou na guilda com sucesso",
                guildaId.getId()
            ));
                
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest()
                .body(new EntrarGuildaResponse(false, e.getMessage(), null));
        } catch (Exception e) {
            System.err.println("Erro ao entrar em guilda: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new EntrarGuildaResponse(false, "Erro ao entrar em guilda: " + e.getMessage(), null));
        }
    }
    
    @RequestMapping(method = DELETE, path = "/{id}")
    ResponseEntity<ExcluirGuildaResponse> excluirGuilda(
            @PathVariable Integer id,
            @RequestBody ExcluirGuildaRequest request) {
        try {
            System.out.println("Tentando excluir guilda ID: " + id);
            System.out.println("Matrícula recebida: '" + request.mestreMatricula() + "'");
            
            if (request.mestreMatricula() == null || request.mestreMatricula().trim().isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(new ExcluirGuildaResponse(false, "Matrícula do mestre é obrigatória"));
            }
            
            GuildaId guildaId = new GuildaId(id);
            Matricula mestreMatricula = new Matricula(request.mestreMatricula().trim());
            
            System.out.println("Chamando guildaService.excluirGuilda com guildaId: " + guildaId.getId() + ", matricula: " + mestreMatricula.getValor());
            
            guildaService.excluirGuilda(guildaId, mestreMatricula);
            
            System.out.println("Guilda excluída com sucesso");
            return ResponseEntity.ok(new ExcluirGuildaResponse(true, "Guilda excluída com sucesso"));
                
        } catch (IllegalArgumentException | IllegalStateException e) {
            System.err.println("Erro de validação ao excluir guilda: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.badRequest()
                .body(new ExcluirGuildaResponse(false, e.getMessage()));
        } catch (Exception e) {
            System.err.println("Erro ao excluir guilda: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ExcluirGuildaResponse(false, "Erro ao excluir guilda: " + e.getMessage()));
        }
    }
    
    @RequestMapping(method = POST, path = "/{guildaId}/checkins/treino")
    ResponseEntity<CheckinTreinoResponse> fazerCheckinTreino(
            @PathVariable Integer guildaId,
            @RequestBody CheckinTreinoRequest request) {
        try {
            if (request.alunoMatricula() == null || request.alunoMatricula().trim().isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(new CheckinTreinoResponse(false, "Matrícula do aluno é obrigatória", null));
            }
            
            if (request.planoDeTreinoId() == null) {
                return ResponseEntity.badRequest()
                    .body(new CheckinTreinoResponse(false, "ID do plano de treino é obrigatório", null));
            }
            
            if (request.letraTreino() == null || request.letraTreino().trim().isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(new CheckinTreinoResponse(false, "Letra do treino é obrigatória", null));
            }
            
            Matricula alunoMatricula = new Matricula(request.alunoMatricula().trim());
            PlanoDeTreinoId planoId = new PlanoDeTreinoId(request.planoDeTreinoId());
            LetraDoTreino letraTreino;
            
            try {
                letraTreino = LetraDoTreino.valueOf(request.letraTreino().trim().toUpperCase());
            } catch (IllegalArgumentException e) {
                return ResponseEntity.badRequest()
                    .body(new CheckinTreinoResponse(false, "Letra do treino inválida", null));
            }
            
            var planoOpt = treinoRepositorio.obterPorId(planoId);
            if (planoOpt.isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(new CheckinTreinoResponse(false, "Plano de treino não encontrado", null));
            }
            
            // Parse da data do check-in (formato ISO: yyyy-MM-dd)
            LocalDate dataCheckin;
            if (request.dataCheckin() != null && !request.dataCheckin().trim().isEmpty()) {
                try {
                    dataCheckin = LocalDate.parse(request.dataCheckin().trim());
                } catch (Exception e) {
                    return ResponseEntity.badRequest()
                        .body(new CheckinTreinoResponse(false, "Data do check-in inválida. Use o formato yyyy-MM-dd", null));
                }
            } else {
                dataCheckin = LocalDate.now(); // Se não fornecida, usa a data atual
            }
            
            // Validar que a data não é futura
            LocalDate hoje = LocalDate.now();
            if (dataCheckin.isAfter(hoje)) {
                return ResponseEntity.badRequest()
                    .body(new CheckinTreinoResponse(false, "Não é possível fazer check-in para datas futuras", null));
            }
            
            Checkin checkin = checkinService.realizarCheckinDeTreino(
                alunoMatricula,
                planoOpt.get(),
                letraTreino,
                request.mensagem(),
                request.urlImagem(),
                dataCheckin
            );
            
            return ResponseEntity.status(HttpStatus.CREATED)
                .body(new CheckinTreinoResponse(
                    true,
                    "Check-in realizado com sucesso",
                    checkin.getId().getId()
                ));
                
        } catch (IllegalArgumentException | IllegalStateException e) {
            return ResponseEntity.badRequest()
                .body(new CheckinTreinoResponse(false, e.getMessage(), null));
        } catch (Exception e) {
            System.err.println("Erro ao fazer check-in: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new CheckinTreinoResponse(false, "Erro ao fazer check-in: " + e.getMessage(), null));
        }
    }
}

record CriarGuildaRequest(
    String nome,
    String descricao,
    String imagemURL,
    String mestreMatricula
) {}

record CriarGuildaResponse(
    boolean sucesso,
    String mensagem,
    Integer guildaId,
    String codigoConvite
) {}

record VerificarMembroResponse(
    boolean temGuilda,
    Integer guildaId
) {}

record GuildaDetalhesResponse(
    Integer id,
    String nome,
    String descricao,
    String imagemUrl,
    String codigoConvite,
    String mestreMatricula,
    Integer pontuacaoTotal,
    Integer numeroMembros,
    List<br.com.forgefit.aplicacao.guilda.MembroResumo> membros,
    List<br.com.forgefit.aplicacao.guilda.CheckinResumo> checkins
) {}

record AlterarGuildaRequest(
    String nome,
    String descricao,
    String imagemURL,
    String mestreMatricula
) {}

record AlterarGuildaResponse(
    boolean sucesso,
    String mensagem
) {}

record EntrarGuildaRequest(
    String codigoConvite,
    String alunoMatricula
) {}

record EntrarGuildaResponse(
    boolean sucesso,
    String mensagem,
    Integer guildaId
) {}

record ExcluirGuildaRequest(
    String mestreMatricula
) {}

record ExcluirGuildaResponse(
    boolean sucesso,
    String mensagem
) {}

record CheckinTreinoRequest(
    String alunoMatricula,
    Integer planoDeTreinoId,
    String letraTreino,
    String mensagem,
    String urlImagem,
    String dataCheckin
) {}

record CheckinTreinoResponse(
    boolean sucesso,
    String mensagem,
    Integer checkinId
) {}
