package br.com.forgefit.apresentacao;

import org.modelmapper.AbstractConverter;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.aula.OcorrenciaExcecaoId;
import br.com.forgefit.dominio.avaliacao.AvaliacaoId;
import br.com.forgefit.dominio.checkin.CheckinId;
import br.com.forgefit.dominio.guilda.GuildaId;
import br.com.forgefit.dominio.professor.ProfessorId;
import br.com.forgefit.dominio.torneio.TorneioId;
import br.com.forgefit.dominio.treino.PlanoDeTreinoId;

@Component
public class BackendMapeador extends ModelMapper {

	BackendMapeador() {
		// Conversores para tipos Id do domínio
		addConverter(new AbstractConverter<Integer, AulaId>() {
			@Override
			protected AulaId convert(Integer source) {
				return new AulaId(source);
			}
		});

		addConverter(new AbstractConverter<Integer, GuildaId>() {
			@Override
			protected GuildaId convert(Integer source) {
				return new GuildaId(source);
			}
		});

		addConverter(new AbstractConverter<Integer, TorneioId>() {
			@Override
			protected TorneioId convert(Integer source) {
				return new TorneioId(source);
			}
		});

		addConverter(new AbstractConverter<Integer, ProfessorId>() {
			@Override
			protected ProfessorId convert(Integer source) {
				return new ProfessorId(source);
			}
		});

		addConverter(new AbstractConverter<Integer, PlanoDeTreinoId>() {
			@Override
			protected PlanoDeTreinoId convert(Integer source) {
				return new PlanoDeTreinoId(source);
			}
		});

		addConverter(new AbstractConverter<Integer, AvaliacaoId>() {
			@Override
			protected AvaliacaoId convert(Integer source) {
				return new AvaliacaoId(source);
			}
		});

		addConverter(new AbstractConverter<Integer, CheckinId>() {
			@Override
			protected CheckinId convert(Integer source) {
				return new CheckinId(source);
			}
		});

		addConverter(new AbstractConverter<Integer, OcorrenciaExcecaoId>() {
			@Override
			protected OcorrenciaExcecaoId convert(Integer source) {
				return new OcorrenciaExcecaoId(source);
			}
		});
	}

	@Override
	public <D> D map(Object source, Class<D> destinationType) {
		return source != null ? super.map(source, destinationType) : null;
	}
}
