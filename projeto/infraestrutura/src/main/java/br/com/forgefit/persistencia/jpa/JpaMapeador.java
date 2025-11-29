package br.com.forgefit.persistencia.jpa;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;

import org.modelmapper.AbstractConverter;
import org.modelmapper.ModelMapper;
import org.modelmapper.config.Configuration.AccessLevel;
import org.springframework.stereotype.Component;

import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.professor.Professor;
import br.com.forgefit.dominio.professor.ProfessorId;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.aluno.Matricula;
import java.time.LocalDateTime;
import java.time.ZoneId;

@Component
class JpaMapeador extends ModelMapper {

    JpaMapeador() {
        var configuracao = getConfiguration();
        configuracao.setFieldMatchingEnabled(true);
        configuracao.setFieldAccessLevel(AccessLevel.PRIVATE);

        addConverter(new AbstractConverter<ProfessorJpa, Professor>() {
            @Override
            protected Professor convert(ProfessorJpa source) {
                var id = map(source.id, ProfessorId.class);
                var cpf = map(source.cpf, Cpf.class);
                var dataNascimento = map(source.dataNascimento, LocalDate.class);
                return new Professor(id, cpf, source.nome, dataNascimento, source.userId);
            }
        });

        addConverter(new AbstractConverter<Integer, ProfessorId>() {
            @Override
            protected ProfessorId convert(Integer source) {
                return new ProfessorId(source);
            }
        });

        addConverter(new AbstractConverter<String, Cpf>() {
            @Override
            protected Cpf convert(String source) {
                return new Cpf(source);
            }
        });

        addConverter(new AbstractConverter<String, LocalDate>() {
            @Override
            protected LocalDate convert(String source) {
                return source != null ? LocalDate.parse(source, DateTimeFormatter.ISO_LOCAL_DATE) : null;
            }
        });

        addConverter(new AbstractConverter<LocalDate, Date>() {
            @Override
            protected Date convert(LocalDate source) {
                return source != null ? Date.from(source.atStartOfDay(ZoneId.systemDefault()).toInstant()) : null;
            }
        });

        addConverter(new AbstractConverter<Date, LocalDate>() {
            @Override
            protected LocalDate convert(Date source) {
                return source != null ? source.toInstant().atZone(ZoneId.systemDefault()).toLocalDate() : null;
            }
        });

        addConverter(new AbstractConverter<Date, LocalDateTime>() {
            @Override
            protected LocalDateTime convert(Date source) {
                return source != null ? source.toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime() : null;
            }
        });

        addConverter(new AbstractConverter<Integer, AulaId>() {
            @Override
            protected AulaId convert(Integer source) {
                return new AulaId(source);
            }
        });

        addConverter(new AbstractConverter<String, Matricula>() {
            @Override
            protected Matricula convert(String source) {
                return new Matricula(source);
            }
        });

        // Custom converter for Aula JPA -> Domain
        addConverter(new AbstractConverter<br.com.forgefit.persistencia.jpa.Aula, br.com.forgefit.dominio.aula.Aula>() {
            @Override
            protected br.com.forgefit.dominio.aula.Aula convert(br.com.forgefit.persistencia.jpa.Aula source) {
                if (source == null) return null;

                AulaId id = new AulaId(source.getId());
                ProfessorId professorId = new ProfessorId(source.getProfessor().id);
                br.com.forgefit.dominio.aula.enums.Modalidade modalidade = 
                    br.com.forgefit.dominio.aula.enums.Modalidade.valueOf(source.getModalidade().name());
                br.com.forgefit.dominio.aula.enums.Espaco espaco = 
                    br.com.forgefit.dominio.aula.enums.Espaco.valueOf(source.getEspaco().name());
                int capacidade = source.getCapacidade();
                LocalDateTime inicio = source.getInicio().toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
                LocalDateTime fim = source.getFim().toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();

                // Create domain Aula with proper constructor
                br.com.forgefit.dominio.aula.Aula aula = new br.com.forgefit.dominio.aula.Aula(
                    id, professorId, modalidade, espaco, capacidade, inicio, fim
                );

                return aula;
            }
        });
    }

    @Override
    public <D> D map(Object source, Class<D> destinationType) {
        return source != null ? super.map(source, destinationType) : null;
    }
}
