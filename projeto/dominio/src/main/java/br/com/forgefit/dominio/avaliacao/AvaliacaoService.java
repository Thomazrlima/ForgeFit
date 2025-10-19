package br.com.forgefit.dominio.avaliacao;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.concurrent.atomic.AtomicInteger;

import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aluno.ProfessorId;
import br.com.forgefit.dominio.aula.AulaId;

public class AvaliacaoService {
    private final AvaliacaoRepositorio avaliacaoRepositorio;
    private final AtomicInteger contadorId = new AtomicInteger(1);

    public AvaliacaoService(AvaliacaoRepositorio avaliacaoRepositorio) {
        notNull(avaliacaoRepositorio, "O repositório de avaliações não pode ser nulo");
        this.avaliacaoRepositorio = avaliacaoRepositorio;
    }

    public Avaliacao criarAvaliacao(Cpf alunoId, AulaId aulaId, LocalDate dataDaOcorrencia,
                                    Notas notas, String comentario) {
        ProfessorId professorId = new ProfessorId(1); // Professor padrão para testes
        
        AvaliacaoId id = new AvaliacaoId(contadorId.getAndIncrement());
        Avaliacao avaliacao = new Avaliacao(id, alunoId, professorId, aulaId, dataDaOcorrencia, notas, comentario);
        
        avaliacaoRepositorio.salvar(avaliacao);
        return avaliacao;
    }
}
