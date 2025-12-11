package br.com.forgefit.apresentacao.guilda;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

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
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.guilda.Guilda;
import br.com.forgefit.dominio.guilda.GuildaId;
import br.com.forgefit.dominio.guilda.GuildaService;

@RestController
@RequestMapping("api/guildas")
class GuildaControlador {
    
    @Autowired
    private GuildaServicoAplicacao guildaServicoAplicacao;
    
    @Autowired
    private GuildaService guildaService;

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
        // Busca guilda por matricula do mestre via camada de aplicação
        java.util.Optional<Integer> guildaIdOpt = guildaServicoAplicacao.buscarIdGuildaPorMatriculaMestre(matricula);
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
