package br.com.forgefit.persistencia.jpa;

import br.com.forgefit.aplicacao.avaliacaoFisica.AlunoResumo;
import br.com.forgefit.aplicacao.avaliacaoFisica.AvaliacaoFisicaRepositorioAplicacao;
import br.com.forgefit.aplicacao.avaliacaoFisica.AvaliacaoFisicaResumo;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.professor.ProfessorId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

interface AvaliacaoFisicaJpaRepository extends JpaRepository<AvaliacaoFisica, Integer> {
    
    @Query("""
        SELECT af.id as id,
               a.matricula as alunoMatricula,
               a.nome as alunoNome,
               CAST(NULL AS string) as alunoAvatarUrl,
               af.dataAvaliacao as dataAvaliacao,
               p.id as professorResponsavelId,
               p.nome as professorResponsavelNome,
               af.massaGordaPercentual as massaGordaPercentual,
               af.massaGordaKg as massaGordaKg,
               af.massaMagraKg as massaMagraKg,
               af.massaMuscularEsqueleticaKg as massaMuscularEsqueleticaKg,
               af.aguaCorporalTotalPercentual as aguaCorporalTotalPercentual,
               af.gorduraVisceralNivel as gorduraVisceralNivel,
               af.taxaMetabolicaBasalKcal as taxaMetabolicaBasalKcal,
               af.massaOsseaKg as massaOsseaKg,
               af.indiceDeMassaCorporal as indiceDeMassaCorporal,
               af.bracoRelaxadoCm as bracoRelaxadoCm,
               af.bracoContraidoCm as bracoContraidoCm,
               af.antebracoCm as antebracoCm,
               af.toraxPeitoralCm as toraxPeitoralCm,
               af.cinturaCm as cinturaCm,
               af.abdomenCm as abdomenCm,
               af.quadrilCm as quadrilCm,
               af.coxaCm as coxaCm,
               af.panturrilhaCm as panturrilhaCm
        FROM AvaliacaoFisica af
        JOIN af.aluno a
        JOIN af.professorResponsavel p
        WHERE a.matricula = :matricula
        ORDER BY af.dataAvaliacao DESC
    """)
    List<AvaliacaoFisicaResumo> buscarPorAlunoMatricula(@Param("matricula") String matricula);
    
    @Query(value = """
        SELECT a.MATRICULA as matricula,
               a.NOME as nome,
               COALESCE(u.AVATAR, '') as avatarUrl
        FROM ALUNO a
        LEFT JOIN USUARIOS_MOCK u ON CAST(a.USER_ID AS INTEGER) = u.ID AND u.ROLE = 'student'
        ORDER BY a.NOME ASC
    """, nativeQuery = true)
    List<AlunoResumo> listarTodosAlunos();
}

@Component
class AvaliacaoFisicaRepositorio implements AvaliacaoFisicaRepositorioAplicacao {
    
    @Autowired
    private AvaliacaoFisicaJpaRepository repositorio;
    
    @Autowired
    private AlunoJpaRepository alunoRepository;
    
    @Autowired
    private ProfessorJpaRepository professorRepository;
    
    @Override
    public void salvar(Matricula matricula, br.com.forgefit.dominio.aluno.AvaliacaoFisica avaliacaoFisica) {
        Aluno aluno = alunoRepository.findById(matricula.getValor())
            .orElseThrow(() -> new RuntimeException("Aluno não encontrado: " + matricula.getValor()));
        
        ProfessorJpa professor = professorRepository.findById(avaliacaoFisica.getProfessorResponsavel().getId())
            .orElseThrow(() -> new RuntimeException("Professor não encontrado: " + avaliacaoFisica.getProfessorResponsavel().getId()));
        
        AvaliacaoFisica jpa = new AvaliacaoFisica();
        jpa.setAluno(aluno);
        jpa.setDataAvaliacao(Date.from(avaliacaoFisica.getDataDaAvaliacao().atStartOfDay(ZoneId.systemDefault()).toInstant()));
        jpa.setProfessorResponsavel(professor);
        jpa.setMassaGordaPercentual(avaliacaoFisica.getMassaGordaPercentual());
        jpa.setMassaGordaKg(avaliacaoFisica.getMassaGordaKg());
        jpa.setMassaMagraKg(avaliacaoFisica.getMassaMagraKg());
        jpa.setMassaMuscularEsqueleticaKg(avaliacaoFisica.getMassaMuscularEsqueleticaKg());
        jpa.setAguaCorporalTotalPercentual(avaliacaoFisica.getAguaCorporalTotalPercentual());
        jpa.setGorduraVisceralNivel(avaliacaoFisica.getGorduraVisceralNivel());
        jpa.setTaxaMetabolicaBasalKcal(avaliacaoFisica.getTaxaMetabolicaBasalKcal());
        jpa.setMassaOsseaKg(avaliacaoFisica.getMassaOsseaKg());
        jpa.setIndiceDeMassaCorporal(avaliacaoFisica.getIndiceDeMassaCorporal());
        jpa.setBracoRelaxadoCm(avaliacaoFisica.getBracoRelaxadoCm());
        jpa.setBracoContraidoCm(avaliacaoFisica.getBracoContraidoCm());
        jpa.setAntebracoCm(avaliacaoFisica.getAntebracoCm());
        jpa.setToraxPeitoralCm(avaliacaoFisica.getToraxPeitoralCm());
        jpa.setCinturaCm(avaliacaoFisica.getCinturaCm());
        jpa.setAbdomenCm(avaliacaoFisica.getAbdomenCm());
        jpa.setQuadrilCm(avaliacaoFisica.getQuadrilCm());
        jpa.setCoxaCm(avaliacaoFisica.getCoxaCm());
        jpa.setPanturrilhaCm(avaliacaoFisica.getPanturrilhaCm());
        
        repositorio.save(jpa);
    }
    
    @Override
    public List<AvaliacaoFisicaResumo> buscarPorAluno(String matricula) {
        return repositorio.buscarPorAlunoMatricula(matricula);
    }
    
    @Override
    public List<AlunoResumo> listarTodosAlunos() {
        return repositorio.listarTodosAlunos();
    }
}
