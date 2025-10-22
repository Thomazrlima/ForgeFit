package br.com.forgefit.dominio.avaliacao;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.concurrent.atomic.AtomicInteger;

import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.professor.ProfessorId;

public class AvaliacaoService {
    private final AvaliacaoRepositorio avaliacaoRepositorio;
    private final AtomicInteger contadorId = new AtomicInteger(1);

    public AvaliacaoService(AvaliacaoRepositorio avaliacaoRepositorio) {
        notNull(avaliacaoRepositorio, "O repositório de avaliações não pode ser nulo");
        this.avaliacaoRepositorio = avaliacaoRepositorio;
    }

    public Avaliacao criarAvaliacao(Matricula alunoMatricula, ProfessorId professorId, AulaId aulaId, LocalDate dataDaOcorrencia,
                                    Notas notas, String comentario) {
        
        AvaliacaoId id = new AvaliacaoId(contadorId.getAndIncrement());
        Avaliacao avaliacao = new Avaliacao(id, alunoMatricula, professorId, aulaId, dataDaOcorrencia, notas, comentario);
        
        avaliacaoRepositorio.salvar(avaliacao);
        return avaliacao;
    }
}
