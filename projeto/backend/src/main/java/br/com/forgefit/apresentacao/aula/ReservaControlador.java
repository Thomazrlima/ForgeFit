package br.com.forgefit.apresentacao.aula;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.forgefit.aplicacao.aula.CancelamentoResumo;
import br.com.forgefit.aplicacao.aula.ReservaServicoAplicacao;
import br.com.forgefit.dominio.aluno.Matricula;

@RestController
@RequestMapping("api/reservas")
class ReservaControlador {
    
    @Autowired
    private ReservaServicoAplicacao reservaServicoAplicacao;

    @RequestMapping(method = GET, path = "/aluno/{matricula}")
    List<CancelamentoResumo> buscarReservasParaCancelamento(@PathVariable String matricula) {
        return reservaServicoAplicacao.pesquisarReservasParaCancelamento(new Matricula(matricula));
    }
}
