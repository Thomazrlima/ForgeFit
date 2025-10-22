package br.com.forgefit.dominio.guilda;

import static org.apache.commons.lang3.Validate.notBlank;
import static org.apache.commons.lang3.Validate.notNull;

import java.util.ArrayList;
import java.util.List;

import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.guilda.enums.StatusGuilda;

public class Guilda {
    private final GuildaId id;
    private String nome;
    private String descricao;
    private String imagemURL;
    private StatusGuilda status;
    private final CodigoConvite codigoConvite;
    private final Matricula mestreDaGuilda;
    private List<Matricula> membros;
    private int pontuacaoTotal;

    public Guilda(GuildaId id, String nome, String descricao, String imagemURL, 
                  CodigoConvite codigoConvite, Matricula mestreDaGuilda) {
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

    public Matricula getMestreDaGuilda() {
        return mestreDaGuilda;
    }

    public List<Matricula> getMembros() {
        return new ArrayList<>(membros);
    }

    public int getPontuacaoTotal() {
        return pontuacaoTotal;
    }

    public void alterarDados(Matricula solicitante, String novoNome, String novaDescricao, String novaImagemURL) {
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

    public void adicionarMembro(Matricula membroMatricula) {
        notNull(membroMatricula, "A matrícula do membro não pode ser nula");
        
        if (membros.contains(membroMatricula)) {
            throw new IllegalArgumentException("O aluno já é membro da guilda");
        }
        
        membros.add(membroMatricula);
    }

    public void removerMembro(Matricula membroMatricula) {
        notNull(membroMatricula, "A matrícula do membro não pode ser nula");
        
        if (mestreDaGuilda.equals(membroMatricula)) {
            throw new IllegalStateException("O mestre não pode sair da guilda");
        }
        
        if (!membros.contains(membroMatricula)) {
            throw new IllegalArgumentException("O aluno não é membro da guilda");
        }
        
        membros.remove(membroMatricula);
    }

    public boolean isMembro(Matricula matricula) {
        return membros.contains(matricula);
    }

    public boolean isMestre(Matricula matricula) {
        return mestreDaGuilda.equals(matricula);
    }

    public void excluir(Matricula solicitante) {
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

