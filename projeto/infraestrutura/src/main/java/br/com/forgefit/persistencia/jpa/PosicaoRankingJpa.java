package br.com.forgefit.persistencia.jpa;

import jakarta.persistence.*;

@Entity
@Table(name = "TORNEIO_RANKING_FINAL")
public class PosicaoRankingJpa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "TORNEIO_ID", nullable = false)
    private Torneio torneio;

    @Column(name = "POSICAO", nullable = false)
    private Integer posicao;

    @Column(name = "GUILDA_ID", nullable = false)
    private Integer guildaId;

    @Column(name = "PONTUACAO_NO_TORNEIO", nullable = false)
    private Integer pontuacaoNoTorneio = 0;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Torneio getTorneio() {
        return torneio;
    }

    public void setTorneio(Torneio torneio) {
        this.torneio = torneio;
    }

    public Integer getPosicao() {
        return posicao;
    }

    public void setPosicao(Integer posicao) {
        this.posicao = posicao;
    }

    public Integer getGuildaId() {
        return guildaId;
    }

    public void setGuildaId(Integer guildaId) {
        this.guildaId = guildaId;
    }

    public Integer getPontuacaoNoTorneio() {
        return pontuacaoNoTorneio;
    }

    public void setPontuacaoNoTorneio(Integer pontuacaoNoTorneio) {
        this.pontuacaoNoTorneio = pontuacaoNoTorneio;
    }
}

