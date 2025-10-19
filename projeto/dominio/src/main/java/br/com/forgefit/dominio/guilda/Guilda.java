package br.com.forgefit.dominio.guilda;

import static org.apache.commons.lang3.Validate.notBlank;
import static org.apache.commons.lang3.Validate.notNull;

import java.util.ArrayList;
import java.util.List;

import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.guilda.enums.StatusGuilda;

public class Guilda {
    private final GuildaId id;
    private String nome;
    private String descricao;
    private String imagemURL;
    private StatusGuilda status;
    private final CodigoConvite codigoConvite;
    private final Cpf mestreDaGuilda;
    private List<Cpf> membros;
    private int pontuacaoTotal;

    public Guilda(GuildaId id, String nome, String descricao, String imagemURL, 
                  CodigoConvite codigoConvite, Cpf mestreDaGuilda) {
        notNull(id, "O id não pode ser nulo");
        this.id = id;

        setNome(nome);
        setDescricao(descricao);
        setImagemURL(imagemURL);
        
        notNull(codigoConvite, "O código de convite não pode ser nulo");
        this.codigoConvite = codigoConvite;
        
        notNull(mestreDaGuilda, "O mestre da guilda não pode ser nulo");
        this.mestreDaGuilda = mestreDaGuilda;
        
        this.status = StatusGuilda.ATIVA;
        this.membros = new ArrayList<>();
        this.membros.add(mestreDaGuilda);
        this.pontuacaoTotal = 0;
    }

    public GuildaId getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        notNull(nome, "O nome não pode ser nulo");
        notBlank(nome, "O nome não pode estar em branco");
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImagemURL() {
        return imagemURL;
    }

    public void setImagemURL(String imagemURL) {
        this.imagemURL = imagemURL;
    }

    public StatusGuilda getStatus() {
        return status;
    }

    public CodigoConvite getCodigoConvite() {
        return codigoConvite;
    }

    public Cpf getMestreDaGuilda() {
        return mestreDaGuilda;
    }

    public List<Cpf> getMembros() {
        return new ArrayList<>(membros);
    }

    public int getPontuacaoTotal() {
        return pontuacaoTotal;
    }

    public void alterarDados(Cpf solicitante, String novoNome, String novaDescricao, String novaImagemURL) {
        if (!mestreDaGuilda.equals(solicitante)) {
            throw new IllegalStateException("Apenas o mestre da guilda pode editar seus dados");
        }

        if (novoNome != null) {
            setNome(novoNome);
        }
        if (novaDescricao != null) {
            setDescricao(novaDescricao);
        }
        if (novaImagemURL != null) {
            setImagemURL(novaImagemURL);
        }
    }

    public void adicionarMembro(Cpf membroCpf) {
        notNull(membroCpf, "O CPF do membro não pode ser nulo");
        
        if (membros.contains(membroCpf)) {
            throw new IllegalArgumentException("O aluno já é membro da guilda");
        }
        
        membros.add(membroCpf);
    }

    public void removerMembro(Cpf membroCpf) {
        notNull(membroCpf, "O CPF do membro não pode ser nulo");
        
        if (mestreDaGuilda.equals(membroCpf)) {
            throw new IllegalStateException("O mestre não pode sair da guilda");
        }
        
        if (!membros.contains(membroCpf)) {
            throw new IllegalArgumentException("O aluno não é membro da guilda");
        }
        
        membros.remove(membroCpf);
    }

    public boolean isMembro(Cpf cpf) {
        return membros.contains(cpf);
    }

    public boolean isMestre(Cpf cpf) {
        return mestreDaGuilda.equals(cpf);
    }

    public void excluir(Cpf solicitante) {
        if (!mestreDaGuilda.equals(solicitante)) {
            throw new IllegalStateException("Apenas o mestre pode excluir a guilda");
        }
        
        this.status = StatusGuilda.INATIVA;
    }

    public void adicionarPontos(int pontos) {
        if (pontos <= 0) {
            throw new IllegalArgumentException("Os pontos devem ser positivos");
        }
        this.pontuacaoTotal += pontos;
    }

    @Override
    public String toString() {
        return nome;
    }
}

