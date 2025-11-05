package br.com.forgefit.apresentacao.guilda;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.forgefit.aplicacao.guilda.GuildaResumo;
import br.com.forgefit.aplicacao.guilda.GuildaServicoAplicacao;

@RestController
@RequestMapping("api/guildas")
class GuildaControlador {
    
    @Autowired
    private GuildaServicoAplicacao guildaServicoAplicacao;

    @RequestMapping(method = GET, path = "/ativas")
    List<GuildaResumo> listarGuildasAtivas() {
        return guildaServicoAplicacao.listarGuildasAtivas();
    }

    @RequestMapping(method = GET, path = "/nome/{nome}")
    GuildaResumo buscarPorNome(@PathVariable String nome) {
        return guildaServicoAplicacao.buscarPorNome(nome);
    }
}
