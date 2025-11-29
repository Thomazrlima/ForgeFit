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
    }

    @Override
    public <D> D map(Object source, Class<D> destinationType) {
        return source != null ? super.map(source, destinationType) : null;
    }
}
