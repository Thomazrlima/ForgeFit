package br.com.forgefit.dominio.guilda;

import static org.apache.commons.lang3.Validate.notBlank;
import static org.apache.commons.lang3.Validate.notNull;

import java.util.concurrent.atomic.AtomicInteger;

import br.com.forgefit.dominio.aluno.Matricula;

public class GuildaService {
    private final GuildaRepositorio guildaRepositorio;
    private final AtomicInteger contadorId = new AtomicInteger(1);

    public GuildaService(GuildaRepositorio guildaRepositorio) {
        notNull(guildaRepositorio, "O repositório de guildas não pode ser nulo");
        this.guildaRepositorio = guildaRepositorio;
    }

    public Guilda criarGuilda(String nome, String descricao, String imagemURL, Matricula mestreMatricula) {
        return criarGuilda(nome, descricao, imagemURL, null, mestreMatricula);
    }

    public Guilda criarGuilda(String nome, String descricao, String imagemURL, CodigoConvite codigoConvite, Matricula mestreMatricula) {
        notBlank(nome, "O nome da guilda não pode ser em branco");
        notNull(mestreMatricula, "A matrícula do mestre da guilda não pode ser nula");

        // Verifica se já existe uma guilda com o mesmo nome
        if (guildaRepositorio.buscarPorNome(nome).isPresent()) {
            throw new IllegalArgumentException("Nome da guilda já está em uso");
        }

        GuildaId id = new GuildaId(contadorId.getAndIncrement());
        CodigoConvite codigo = codigoConvite != null ? codigoConvite : CodigoConvite.gerar();
        
        Guilda guilda = new Guilda(id, nome, descricao, imagemURL, codigo, mestreMatricula);
        
        guildaRepositorio.salvar(guilda);
        
        return guilda;
    }

    public void alterarDados(GuildaId guildaId, Matricula solicitanteMatricula, 
                             String novoNome, String novaDescricao, String novaImagemURL) {
        Guilda guilda = obterGuilda(guildaId);
        guilda.alterarDados(solicitanteMatricula, novoNome, novaDescricao, novaImagemURL);
        guildaRepositorio.salvar(guilda);
    }

    public void excluirGuilda(GuildaId guildaId, Matricula solicitanteMatricula) {
        Guilda guilda = obterGuilda(guildaId);
        guilda.excluir(solicitanteMatricula);
        guildaRepositorio.salvar(guilda);
    }

    public void adicionarMembro(GuildaId guildaId, CodigoConvite codigo, Matricula novoMembroMatricula) {
        Guilda guilda = obterGuilda(guildaId);

        if (!guilda.getCodigoConvite().equals(codigo)) {
            throw new IllegalArgumentException("Código de convite inválido");
        }
        
        guilda.adicionarMembro(novoMembroMatricula);
        guildaRepositorio.salvar(guilda);
    }

    public void removerMembro(GuildaId guildaId, Matricula membroParaRemoverMatricula) {
        Guilda guilda = obterGuilda(guildaId);
        guilda.removerMembro(membroParaRemoverMatricula);
        guildaRepositorio.salvar(guilda);
    }

    public Guilda obter(GuildaId guildaId) {
        return obterGuilda(guildaId);
    }

    public void entrarEmGuilda(Matricula alunoMatricula, CodigoConvite codigo) {
        // Busca guilda pelo código de convite
        Guilda guilda = guildaRepositorio.buscarPorCodigoConvite(codigo)
            .orElseThrow(() -> new IllegalArgumentException("Código de convite inválido"));
        
        adicionarMembro(guilda.getId(), codigo, alunoMatricula);
    }

    public void sairDaGuilda(Matricula alunoMatricula, GuildaId guildaId) {
        removerMembro(guildaId, alunoMatricula);
    }

    public void alterarDadosGuilda(GuildaId guildaId, Matricula solicitanteMatricula, 
                                   String novoNome, String novaDescricao, String novaImagemURL) {
        alterarDados(guildaId, solicitanteMatricula, novoNome, novaDescricao, novaImagemURL);
    }

    private Guilda obterGuilda(GuildaId guildaId) {
        return guildaRepositorio.obterPorId(guildaId)
            .orElseThrow(() -> new IllegalArgumentException("Guilda não encontrada"));
    }
}

