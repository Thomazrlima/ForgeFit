package br.com.forgefit;

import static org.springframework.boot.SpringApplication.run;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;

import br.com.forgefit.aplicacao.aula.AulaRepositorioAplicacao;
import br.com.forgefit.aplicacao.aula.AulaServicoAplicacao;
import br.com.forgefit.aplicacao.aula.ReservaRepositorioAplicacao;
import br.com.forgefit.aplicacao.aula.ReservaServicoAplicacao;
import br.com.forgefit.aplicacao.guilda.GuildaRepositorioAplicacao;
import br.com.forgefit.aplicacao.guilda.GuildaServicoAplicacao;
import br.com.forgefit.aplicacao.ranking.RankingRepositorioAplicacao;
import br.com.forgefit.aplicacao.ranking.RankingServicoAplicacao;
import br.com.forgefit.aplicacao.torneio.TorneioRepositorioAplicacao;
import br.com.forgefit.aplicacao.torneio.TorneioServicoAplicacao;
import br.com.forgefit.dominio.aula.AulaRepositorio;
import br.com.forgefit.dominio.aula.AulaService;
import br.com.forgefit.dominio.aula.ReembolsoService;
import br.com.forgefit.dominio.aula.ReservaService;
import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.AlunoService;
import br.com.forgefit.dominio.checkin.CheckinRepositorio;
import br.com.forgefit.dominio.checkin.CheckinService;
import br.com.forgefit.dominio.guilda.GuildaRepositorio;
import br.com.forgefit.dominio.guilda.GuildaService;
import br.com.forgefit.dominio.torneio.TorneioRepositorio;
import br.com.forgefit.dominio.torneio.TorneioService;
import br.com.forgefit.dominio.avaliacao.AvaliacaoRepositorio;
import br.com.forgefit.dominio.avaliacao.AvaliacaoService;
import br.com.forgefit.dominio.frequencia.FrequenciaRepositorio;
import br.com.forgefit.dominio.frequencia.FrequenciaService;

@SpringBootApplication
@EnableScheduling
public class BackendAplicacao {

    @Bean
    public ReembolsoService reembolsoService() {
        return new ReembolsoService();
    }

    @Bean
    public AlunoService alunoService(AlunoRepositorio repositorio) {
        return new AlunoService(repositorio);
    }

    @Bean
    public AulaService aulaService(AulaRepositorio repositorio) {
        return new AulaService(repositorio);
    }

    @Bean
    public ReservaService reservaService(AulaRepositorio aulaRepositorio, AlunoService alunoService,
            ReembolsoService reembolsoService) {
        return new ReservaService(aulaRepositorio, alunoService, reembolsoService);
    }

    @Bean
    public GuildaService guildaService(GuildaRepositorio repositorio) {
        return new GuildaService(repositorio);
    }

    @Bean
    public CheckinService checkinService(CheckinRepositorio checkinRepositorio,
            AlunoRepositorio alunoRepositorio,
            GuildaRepositorio guildaRepositorio) {
        return new CheckinService(checkinRepositorio, alunoRepositorio, guildaRepositorio);
    }

    @Bean
    public TorneioService torneioService(TorneioRepositorio repositorio) {
        return new TorneioService(repositorio);
    }

    @Bean
    public AvaliacaoService avaliacaoService(AvaliacaoRepositorio repositorio) {
        return new AvaliacaoService(repositorio);
    }

    // REMOVIDO: Configuração migrada para FrequenciaConfig usando eventos de domínio

    @Bean
    public ReservaServicoAplicacao reservaServicoAplicacao(ReservaRepositorioAplicacao repositorio) {
        return new ReservaServicoAplicacao(repositorio);
    }

    @Bean
    public AulaServicoAplicacao aulaServicoAplicacao(AulaRepositorioAplicacao repositorio) {
        return new AulaServicoAplicacao(repositorio);
    }

    @Bean
    public GuildaServicoAplicacao guildaServicoAplicacao(GuildaRepositorioAplicacao repositorio) {
        return new GuildaServicoAplicacao(repositorio);
    }

    @Bean
    public TorneioServicoAplicacao torneioServicoAplicacao(TorneioRepositorioAplicacao repositorio) {
        return new TorneioServicoAplicacao(repositorio);
    }

    @Bean
    public RankingServicoAplicacao rankingServicoAplicacao(RankingRepositorioAplicacao repositorio) {
        return new RankingServicoAplicacao(repositorio);
    }

    public static void main(String[] args) {
        run(BackendAplicacao.class, args);
    }
}
