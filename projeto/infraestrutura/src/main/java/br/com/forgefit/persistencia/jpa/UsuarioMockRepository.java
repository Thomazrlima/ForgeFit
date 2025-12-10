package br.com.forgefit.persistencia.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioMockRepository extends JpaRepository<UsuarioMock, Integer> {

    Optional<UsuarioMock> findByEmail(String email);

    Optional<UsuarioMock> findByEmailAndPassword(String email, String password);
    
    Optional<UsuarioMock> findById(Integer id);
}