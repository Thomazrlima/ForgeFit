package br.com.forgefit.dominio.guilda;

import static org.apache.commons.lang3.Validate.notNull;

import br.com.forgefit.dominio.aluno.Cpf;

public class GuildaService {
    private final GuildaRepositorio guildaRepositorio;
    private int proximoId = 1;

    public GuildaService(GuildaRepositorio guildaRepositorio) {
        notNull(guildaRepositorio, "O repositório de guildas não pode ser nulo");
        this.guildaRepositorio = guildaRepositorio;
    }

    public Guilda criarGuilda(Cpf mestreId, String nome, String descricao, String imagemURL) {
        return criarGuilda(mestreId, nome, descricao, imagemURL, null);
    }

    public Guilda criarGuilda(Cpf mestreId, String nome, String descricao, String imagemURL, CodigoConvite codigoConvite) {
        notNull(mestreId, "O CPF do mestre não pode ser nulo");
        notNull(nome, "O nome da guilda não pode ser nulo");

        // Verifica se já existe uma guilda com esse nome
        var guildaExistente = guildaRepositorio.buscarPorNome(nome);
        if (guildaExistente.isPresent()) {
            throw new IllegalArgumentException("Nome da guilda já está em uso");
        }

        var guildaId = new GuildaId(proximoId++);
        var codigo = codigoConvite != null ? codigoConvite : CodigoConvite.gerar();
        var guilda = new Guilda(guildaId, nome, descricao, imagemURL, codigo, mestreId);

        guildaRepositorio.salvar(guilda);
        return guilda;
    }

    public void alterarDadosGuilda(GuildaId guildaId, Cpf solicitante, String novoNome, 
                                   String novaDescricao, String novaImagemURL) {
        notNull(guildaId, "O id da guilda não pode ser nulo");
        notNull(solicitante, "O CPF do solicitante não pode ser nulo");

        var guilda = guildaRepositorio.obterPorId(guildaId)
            .orElseThrow(() -> new IllegalArgumentException("Guilda não encontrada"));

        guilda.alterarDados(solicitante, novoNome, novaDescricao, novaImagemURL);
        guildaRepositorio.salvar(guilda);
    }

    public void excluirGuilda(GuildaId guildaId, Cpf solicitante) {
        notNull(guildaId, "O id da guilda não pode ser nulo");
        notNull(solicitante, "O CPF do solicitante não pode ser nulo");

        var guilda = guildaRepositorio.obterPorId(guildaId)
            .orElseThrow(() -> new IllegalArgumentException("Guilda não encontrada"));

        guilda.excluir(solicitante);
        guildaRepositorio.salvar(guilda);
    }

    public void entrarEmGuilda(Cpf alunoId, CodigoConvite codigo) {
        notNull(alunoId, "O CPF do aluno não pode ser nulo");
        notNull(codigo, "O código de convite não pode ser nulo");

        var guilda = guildaRepositorio.buscarPorCodigoConvite(codigo)
            .orElseThrow(() -> new IllegalArgumentException("Código de convite é inválido"));

        guilda.adicionarMembro(alunoId);
        guildaRepositorio.salvar(guilda);
    }

    public void sairDaGuilda(Cpf alunoId, GuildaId guildaId) {
        notNull(alunoId, "O CPF do aluno não pode ser nulo");
        notNull(guildaId, "O id da guilda não pode ser nulo");

        var guilda = guildaRepositorio.obterPorId(guildaId)
            .orElseThrow(() -> new IllegalArgumentException("Guilda não encontrada"));

        guilda.removerMembro(alunoId);
        guildaRepositorio.salvar(guilda);
    }

    public Guilda obter(GuildaId id) {
        notNull(id, "O id da guilda não pode ser nulo");
        return guildaRepositorio.obterPorId(id)
            .orElseThrow(() -> new IllegalArgumentException("Guilda não encontrada"));
    }

    public void salvar(Guilda guilda) {
        notNull(guilda, "A guilda não pode ser nula");
        guildaRepositorio.salvar(guilda);
    }
}

