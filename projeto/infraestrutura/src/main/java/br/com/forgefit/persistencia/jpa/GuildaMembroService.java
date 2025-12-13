package br.com.forgefit.persistencia.jpa;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "GUILDA_MEMBROS")
class GuildaMembro {

    @EmbeddedId
    private GuildaMembroId id;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "DATA_ENTRADA")
    private Date dataEntrada;

    public GuildaMembro() {
    }

    public GuildaMembroId getId() {
        return id;
    }

    public void setId(GuildaMembroId id) {
        this.id = id;
    }

    public Date getDataEntrada() {
        return dataEntrada;
    }

    public void setDataEntrada(Date dataEntrada) {
        this.dataEntrada = dataEntrada;
    }
}

@Embeddable
class GuildaMembroId implements Serializable {
    
    @Column(name = "GUILDA_ID", nullable = false)
    private Integer guildaId;
    
    @Column(name = "ALUNO_MATRICULA", nullable = false, length = 20)
    private String alunoMatricula;

    public GuildaMembroId() {
    }

    public GuildaMembroId(Integer guildaId, String alunoMatricula) {
        this.guildaId = guildaId;
        this.alunoMatricula = alunoMatricula;
    }

    public Integer getGuildaId() {
        return guildaId;
    }

    public void setGuildaId(Integer guildaId) {
        this.guildaId = guildaId;
    }

    public String getAlunoMatricula() {
        return alunoMatricula;
    }

    public void setAlunoMatricula(String alunoMatricula) {
        this.alunoMatricula = alunoMatricula;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GuildaMembroId)) return false;
        GuildaMembroId that = (GuildaMembroId) o;
        return guildaId.equals(that.guildaId) && alunoMatricula.equals(that.alunoMatricula);
    }

    @Override
    public int hashCode() {
        return 31 * guildaId.hashCode() + alunoMatricula.hashCode();
    }
}

interface GuildaMembroRepository extends org.springframework.data.jpa.repository.JpaRepository<GuildaMembro, GuildaMembroId> {
    
    @org.springframework.data.jpa.repository.Query(value = """
        SELECT gm.guilda_id 
        FROM guilda_membros gm
        JOIN guilda g ON g.id = gm.guilda_id
        WHERE gm.aluno_matricula = :matricula
          AND g.status = 'ATIVA'
        """, nativeQuery = true)
    java.util.Optional<Integer> findGuildaIdByAlunoMatricula(@org.springframework.data.repository.query.Param("matricula") String matricula);
    
    @org.springframework.data.jpa.repository.Query("""
        SELECT COUNT(gm)
        FROM br.com.forgefit.persistencia.jpa.GuildaMembro gm
        WHERE gm.id.guildaId = :guildaId
        """)
    long countByIdGuildaId(@org.springframework.data.repository.query.Param("guildaId") Integer guildaId);
}

@org.springframework.stereotype.Service
public class GuildaMembroService {
    
    @org.springframework.beans.factory.annotation.Autowired
    private GuildaMembroRepository guildaMembroRepository;
    
    public java.util.Optional<Integer> buscarGuildaIdPorMatricula(String matricula) {
        System.out.println("Buscando guildaId para matrícula: " + matricula);
        java.util.Optional<Integer> resultado = guildaMembroRepository.findGuildaIdByAlunoMatricula(matricula);
        System.out.println("Resultado da busca: " + (resultado.isPresent() ? resultado.get() : "não encontrado"));
        return resultado;
    }
}
