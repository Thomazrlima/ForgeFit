package br.com.forgefit.apresentacao.torneio;

import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.forgefit.aplicacao.torneio.RankingGuildaNoTorneioResumo;
import br.com.forgefit.aplicacao.torneio.TorneioAtualResumo;
import br.com.forgefit.aplicacao.torneio.TorneioResumo;
import br.com.forgefit.aplicacao.torneio.TorneioServicoAplicacao;
import br.com.forgefit.dominio.torneio.Premio;
import br.com.forgefit.dominio.torneio.Torneio;
import br.com.forgefit.dominio.torneio.TorneioId;
import br.com.forgefit.dominio.torneio.TorneioService;
import br.com.forgefit.dominio.torneio.enums.PosicaoDoPodio;

@RestController
@RequestMapping("api/torneios")
class TorneioControlador {
    
    @Autowired
    private TorneioServicoAplicacao torneioServicoAplicacao;

    @Autowired
    private TorneioService torneioService;

    @RequestMapping(method = GET, path = "/ativos")
    List<TorneioResumo> listarTorneiosAtivos() {
        return torneioServicoAplicacao.listarTorneiosAtivos();
    }

    @RequestMapping(method = GET, path = "/finalizados")
    List<TorneioResumo> listarTorneiosFinalizados() {
        return torneioServicoAplicacao.listarTorneiosFinalizados();
    }

    @RequestMapping(method = GET, path = "/atual")
    ResponseEntity<TorneioAtualResponse> buscarTorneioAtual() {
        Optional<TorneioAtualResumo> torneioOpt = torneioServicoAplicacao.buscarTorneioAtual();
        if (torneioOpt.isEmpty()) {
            return ResponseEntity.ok(new TorneioAtualResponse(null, "none"));
        }
        
        TorneioAtualResumo torneio = torneioOpt.get();
        LocalDate hoje = LocalDate.now();
        
        // Se o torneio está planejado mas a data de início já chegou, ativa automaticamente
        if ("PLANEJADO".equals(torneio.getStatus()) && 
            !torneio.getDataInicio().isAfter(hoje) && 
            !torneio.getDataFim().isBefore(hoje)) {
            try {
                TorneioId torneioId = new TorneioId(torneio.getId());
                Torneio torneioDomain = torneioService.obter(torneioId);
                if (torneioDomain.getStatus() == br.com.forgefit.dominio.torneio.enums.StatusTorneio.PLANEJADO) {
                    torneioDomain.ativar();
                    torneioService.salvar(torneioDomain);
                }
            } catch (Exception e) {
                // Log do erro mas continua com o status retornado pela query
                System.err.println("Erro ao ativar torneio automaticamente: " + e.getMessage());
            }
        }
        
        // Determina o status correto baseado na data atual
        String statusCalculado;
        if (!torneio.getDataInicio().isAfter(hoje) && !torneio.getDataFim().isBefore(hoje)) {
            statusCalculado = "ATIVO";
        } else if (torneio.getDataInicio().isAfter(hoje)) {
            statusCalculado = "PLANEJADO";
        } else {
            statusCalculado = torneio.getStatus();
        }
        
        String status = mapearStatusParaFrontend(statusCalculado);
        TorneioAtualDTO dto = new TorneioAtualDTO(
            torneio.getId(),
            torneio.getNome(),
            torneio.getDataInicio().toString(),
            torneio.getDataFim().toString(),
            status
        );
        return ResponseEntity.ok(new TorneioAtualResponse(dto, status));
    }

    @RequestMapping(method = GET, path = "/{id}/ranking")
    ResponseEntity<List<RankingGuildaResponse>> buscarRanking(@PathVariable Integer id) {
        try {
            List<RankingGuildaNoTorneioResumo> ranking = torneioServicoAplicacao.buscarRankingPorTorneio(id);
            List<RankingGuildaResponse> response = ranking.stream()
                .map(r -> new RankingGuildaResponse(
                    r.getGuildaId(),
                    r.getGuildaNome(),
                    r.getGuildaImagemUrl(),
                    r.getPontuacaoNoTorneio(),
                    r.getNumeroMembros()
                ))
                .toList();
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println("Erro ao buscar ranking do torneio " + id + ": " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(java.util.Collections.emptyList());
        }
    }

    @RequestMapping(method = GET, path = "/{id}/premios")
    ResponseEntity<List<PrizeResponse>> buscarPremios(@PathVariable Integer id) {
        try {
            TorneioId torneioId = new TorneioId(id);
            Torneio torneio = torneioService.obter(torneioId);
            
            List<PrizeResponse> premios = List.of(
                new PrizeResponse(1, 
                    torneio.getPremioPrimeiroLugar() != null ? torneio.getPremioPrimeiroLugar().getNome() : "",
                    torneio.getPremioPrimeiroLugar() != null ? torneio.getPremioPrimeiroLugar().getUrlImagem() : ""),
                new PrizeResponse(2,
                    torneio.getPremioSegundoLugar() != null ? torneio.getPremioSegundoLugar().getNome() : "",
                    torneio.getPremioSegundoLugar() != null ? torneio.getPremioSegundoLugar().getUrlImagem() : ""),
                new PrizeResponse(3,
                    torneio.getPremioTerceiroLugar() != null ? torneio.getPremioTerceiroLugar().getNome() : "",
                    torneio.getPremioTerceiroLugar() != null ? torneio.getPremioTerceiroLugar().getUrlImagem() : "")
            );
            return ResponseEntity.ok(premios);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @RequestMapping(method = GET, path = "/finalizados/ultimo-podio")
    ResponseEntity<List<RankingGuildaResponse>> buscarUltimoPodio() {
        try {
            List<RankingGuildaNoTorneioResumo> podio = torneioServicoAplicacao.buscarUltimoPodio();
            if (podio == null || podio.isEmpty()) {
                return ResponseEntity.ok(java.util.Collections.emptyList());
            }
            List<RankingGuildaResponse> response = podio.stream()
                .map(r -> new RankingGuildaResponse(
                    r.getGuildaId(),
                    r.getGuildaNome(),
                    r.getGuildaImagemUrl(),
                    r.getPontuacaoNoTorneio(),
                    r.getNumeroMembros()
                ))
                .toList();
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok(java.util.Collections.emptyList());
        }
    }

    @RequestMapping(method = POST)
    ResponseEntity<CriarTorneioResponse> criarTorneio(@RequestBody CriarTorneioRequest request) {
        try {
            if (request.nome() == null || request.nome().trim().isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(new CriarTorneioResponse(false, "Nome do torneio é obrigatório", null));
            }
            if (request.dataInicio() == null || request.dataFim() == null) {
                return ResponseEntity.badRequest()
                    .body(new CriarTorneioResponse(false, "Datas são obrigatórias", null));
            }

            LocalDate dataInicio = LocalDate.parse(request.dataInicio());
            LocalDate dataFim = LocalDate.parse(request.dataFim());

            Premio p1 = request.premios() != null && request.premios().length > 0 && request.premios()[0] != null
                ? new Premio(request.premios()[0].nome(), request.premios()[0].imageUrl())
                : null;
            Premio p2 = request.premios() != null && request.premios().length > 1 && request.premios()[1] != null
                ? new Premio(request.premios()[1].nome(), request.premios()[1].imageUrl())
                : null;
            Premio p3 = request.premios() != null && request.premios().length > 2 && request.premios()[2] != null
                ? new Premio(request.premios()[2].nome(), request.premios()[2].imageUrl())
                : null;

            Torneio torneio = torneioService.criarTorneio(request.nome().trim(), dataInicio, dataFim, p1, p2, p3);
            
            String status = mapearStatusParaFrontend(torneio.getStatus().name());
            TorneioAtualDTO dto = new TorneioAtualDTO(
                torneio.getId().getId(),
                torneio.getNome(),
                torneio.getDataInicio().toString(),
                torneio.getDataFim().toString(),
                status
            );

            return ResponseEntity.status(HttpStatus.CREATED)
                .body(new CriarTorneioResponse(true, "Torneio criado com sucesso", dto));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest()
                .body(new CriarTorneioResponse(false, e.getMessage(), null));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new CriarTorneioResponse(false, "Erro ao criar torneio: " + e.getMessage(), null));
        }
    }

    @RequestMapping(method = PUT, path = "/{id}")
    ResponseEntity<TournamentResponse> atualizarTorneio(@PathVariable Integer id, @RequestBody AtualizarTorneioRequest request) {
        try {
            TorneioId torneioId = new TorneioId(id);
            
            Premio p1 = request.premios() != null && request.premios().length > 0 && request.premios()[0] != null
                ? new Premio(request.premios()[0].nome(), request.premios()[0].imageUrl())
                : null;
            Premio p2 = request.premios() != null && request.premios().length > 1 && request.premios()[1] != null
                ? new Premio(request.premios()[1].nome(), request.premios()[1].imageUrl())
                : null;
            Premio p3 = request.premios() != null && request.premios().length > 2 && request.premios()[2] != null
                ? new Premio(request.premios()[2].nome(), request.premios()[2].imageUrl())
                : null;

            LocalDate novaDataInicio = request.dataInicio() != null ? LocalDate.parse(request.dataInicio()) : null;
            LocalDate novaDataFim = request.dataFim() != null ? LocalDate.parse(request.dataFim()) : null;

            torneioService.editarTorneio(torneioId, request.nome(), novaDataInicio, novaDataFim, p1, p2, p3);

            return ResponseEntity.ok(new TournamentResponse(true, "Torneio atualizado com sucesso"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest()
                .body(new TournamentResponse(false, e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new TournamentResponse(false, "Erro ao atualizar torneio: " + e.getMessage()));
        }
    }

    @RequestMapping(method = DELETE, path = "/{id}")
    ResponseEntity<TournamentResponse> cancelarTorneio(@PathVariable Integer id) {
        try {
            TorneioId torneioId = new TorneioId(id);
            torneioService.cancelarTorneio(torneioId);
            return ResponseEntity.ok(new TournamentResponse(true, "Torneio cancelado com sucesso"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest()
                .body(new TournamentResponse(false, e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new TournamentResponse(false, "Erro ao cancelar torneio: " + e.getMessage()));
        }
    }

    @RequestMapping(method = PUT, path = "/{id}/premios")
    ResponseEntity<PrizesResponse> salvarPremios(@PathVariable Integer id, @RequestBody SalvarPremiosRequest request) {
        try {
            TorneioId torneioId = new TorneioId(id);
            
            if (request.prizes() == null || request.prizes().length != 3) {
                return ResponseEntity.badRequest()
                    .body(new PrizesResponse(false, "É necessário definir exatamente 3 prêmios", null));
            }

            for (int i = 0; i < request.prizes().length; i++) {
                PrizeDTO prize = request.prizes()[i];
                if (prize.position() != i + 1) {
                    return ResponseEntity.badRequest()
                        .body(new PrizesResponse(false, "Posições dos prêmios devem ser 1, 2 e 3", null));
                }
                
                PosicaoDoPodio posicao = switch (prize.position()) {
                    case 1 -> PosicaoDoPodio.PRIMEIRO_LUGAR;
                    case 2 -> PosicaoDoPodio.SEGUNDO_LUGAR;
                    case 3 -> PosicaoDoPodio.TERCEIRO_LUGAR;
                    default -> throw new IllegalArgumentException("Posição inválida: " + prize.position());
                };
                
                Premio premio = new Premio(prize.nome(), prize.imageUrl());
                torneioService.definirPremioDoPodio(torneioId, posicao, premio);
            }

            List<PrizeResponse> premios = List.of(
                new PrizeResponse(1, request.prizes()[0].nome(), request.prizes()[0].imageUrl()),
                new PrizeResponse(2, request.prizes()[1].nome(), request.prizes()[1].imageUrl()),
                new PrizeResponse(3, request.prizes()[2].nome(), request.prizes()[2].imageUrl())
            );

            return ResponseEntity.ok(new PrizesResponse(true, "Premiações salvas com sucesso", premios));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest()
                .body(new PrizesResponse(false, e.getMessage(), null));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new PrizesResponse(false, "Erro ao salvar premiações: " + e.getMessage(), null));
        }
    }

    private String mapearStatusParaFrontend(String status) {
        if (status == null) return "none";
        return switch (status) {
            case "PLANEJADO" -> "scheduled";
            case "ATIVO" -> "active";
            default -> "none";
        };
    }

    // DTOs de Request/Response
    record CriarTorneioRequest(String nome, String dataInicio, String dataFim, PrizeDTO[] premios) {}
    record AtualizarTorneioRequest(String nome, String dataInicio, String dataFim, PrizeDTO[] premios) {}
    record PrizeDTO(int position, String nome, String imageUrl) {}
    record SalvarPremiosRequest(PrizeDTO[] prizes) {}

    record TorneioAtualDTO(Integer id, String name, String startDate, String endDate, String status) {}
    record TorneioAtualResponse(TorneioAtualDTO data, String status) {}
    record CriarTorneioResponse(boolean sucesso, String mensagem, TorneioAtualDTO data) {}
    record TournamentResponse(boolean sucesso, String mensagem) {}
    record RankingGuildaResponse(Integer id, String name, String imageUrl, Integer score, Integer memberCount) {}
    record PrizeResponse(Integer id, Integer position, String name, String imageUrl) {
        PrizeResponse(Integer position, String name, String imageUrl) {
            this(position, position, name, imageUrl);
        }
    }
    record PrizesResponse(boolean sucesso, String mensagem, List<PrizeResponse> data) {}
}
