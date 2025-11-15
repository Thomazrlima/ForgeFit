package br.com.forgefit.persistencia.jpa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.forgefit.dominio.professor.Professor;
import br.com.forgefit.dominio.professor.ProfessorId;
import br.com.forgefit.dominio.professor.ProfessorRepository;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "PROFESSOR")
class ProfessorJpa {
    @Id
    int id;

    String cpf;
    String nome;
    String dataNascimento;
    String userId;

    @Override
    public String toString() {
        return nome;
    }
}

interface ProfessorJpaRepository extends JpaRepository<ProfessorJpa, Integer> {
}

@Repository
class ProfessorRepositorioImpl implements ProfessorRepository {
    @Autowired
    ProfessorJpaRepository repositorio;

    @Autowired
    JpaMapeador mapeador;

    @Override
    public void salvar(Professor professor) {
        var professorJpa = mapeador.map(professor, ProfessorJpa.class);
        repositorio.save(professorJpa);
    }

    @Override
    public Professor obter(ProfessorId id) {
        var professorJpa = repositorio.findById(id.getId()).get();
        return mapeador.map(professorJpa, Professor.class);
    }
}
