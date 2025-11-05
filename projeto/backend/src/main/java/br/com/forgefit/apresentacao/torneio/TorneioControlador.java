package br.com.forgefit.apresentacao.torneio;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.forgefit.aplicacao.torneio.TorneioResumo;
import br.com.forgefit.aplicacao.torneio.TorneioServicoAplicacao;

@RestController
@RequestMapping("api/torneios")
class TorneioControlador {
    
    @Autowired
    private TorneioServicoAplicacao torneioServicoAplicacao;

    @RequestMapping(method = GET, path = "/ativos")
    List<TorneioResumo> listarTorneiosAtivos() {
        return torneioServicoAplicacao.listarTorneiosAtivos();
    }

    @RequestMapping(method = GET, path = "/finalizados")
    List<TorneioResumo> listarTorneiosFinalizados() {
        return torneioServicoAplicacao.listarTorneiosFinalizados();
    }
}
