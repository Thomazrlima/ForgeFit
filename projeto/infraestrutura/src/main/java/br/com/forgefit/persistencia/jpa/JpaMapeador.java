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
import br.com.forgefit.dominio.treino.PlanoDeTreinoId;
import br.com.forgefit.dominio.treino.enums.LetraDoTreino;
import br.com.forgefit.dominio.treino.enums.TipoDoTreino;
import br.com.forgefit.dominio.treino.enums.Exercicio;
import br.com.forgefit.dominio.treino.Repeticao;
import br.com.forgefit.dominio.torneio.TorneioId;
import br.com.forgefit.dominio.torneio.Premio;
import br.com.forgefit.dominio.torneio.enums.StatusTorneio;
import br.com.forgefit.dominio.guilda.GuildaId;
import br.com.forgefit.dominio.checkin.Checkin;
import br.com.forgefit.dominio.checkin.CheckinId;
import br.com.forgefit.dominio.checkin.ContextoDoCheckin;
import br.com.forgefit.dominio.checkin.enums.TipoDeCheckin;
import java.time.LocalDateTime;

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

        // Converter específico para java.sql.Date -> LocalDate (DEVE VIR ANTES de Date -> LocalDate)
        addConverter(new AbstractConverter<java.sql.Date, LocalDate>() {
            @Override
            protected LocalDate convert(java.sql.Date source) {
                return source != null ? source.toLocalDate() : null;
            }
        });

        addConverter(new AbstractConverter<Date, LocalDate>() {
            @Override
            protected LocalDate convert(Date source) {
                // Se for java.sql.Date, usa o método nativo toLocalDate()
                if (source instanceof java.sql.Date) {
                    return ((java.sql.Date) source).toLocalDate();
                }
                return source != null ? source.toInstant().atZone(ZoneId.systemDefault()).toLocalDate() : null;
            }
        });

        addConverter(new AbstractConverter<Date, LocalDateTime>() {
            @Override
            protected LocalDateTime convert(Date source) {
                return source != null ? source.toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime() : null;
            }
        });

        addConverter(new AbstractConverter<LocalDateTime, Date>() {
            @Override
            protected Date convert(LocalDateTime source) {
                return source != null ? Date.from(source.atZone(ZoneId.systemDefault()).toInstant()) : null;
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
                return source != null ? new Matricula(source) : null;
            }
        });

        addConverter(new AbstractConverter<Matricula, String>() {
            @Override
            protected String convert(Matricula source) {
                return source != null ? source.getValor() : null;
            }
        });

        addConverter(new AbstractConverter<Integer, PlanoDeTreinoId>() {
            @Override
            protected PlanoDeTreinoId convert(Integer source) {
                return source != null ? new PlanoDeTreinoId(source) : null;
            }
        });

        // Converters para enums de Treino (Domínio -> String para JPA)
        addConverter(new AbstractConverter<LetraDoTreino, String>() {
            @Override
            protected String convert(LetraDoTreino source) {
                return source != null ? source.name() : null;
            }
        });

        addConverter(new AbstractConverter<TipoDoTreino, String>() {
            @Override
            protected String convert(TipoDoTreino source) {
                return source != null ? source.name() : null;
            }
        });

        addConverter(new AbstractConverter<Exercicio, String>() {
            @Override
            protected String convert(Exercicio source) {
                return source != null ? source.name() : null;
            }
        });

        // Converter customizado para PlanoDeTreino JPA -> Domínio
        addConverter(new AbstractConverter<PlanoDeTreino, br.com.forgefit.dominio.treino.PlanoDeTreino>() {
            @Override
            protected br.com.forgefit.dominio.treino.PlanoDeTreino convert(PlanoDeTreino source) {
                if (source == null) return null;

                try {
                    System.out.println("Convertendo PlanoDeTreino JPA para Domínio - ID: " + source.getId());
                    
                    PlanoDeTreinoId id = new PlanoDeTreinoId(source.getId());
                    
                    // Verificar se o professor está presente
                    if (source.getProfessorResponsavel() == null) {
                        throw new IllegalStateException("Professor responsável não pode ser nulo");
                    }
                    System.out.println("Professor ID: " + source.getProfessorResponsavel().id);
                    ProfessorId professorId = new ProfessorId(source.getProfessorResponsavel().id);
                    
                    // Converter data de criação (pode ser java.sql.Date ou java.util.Date)
                    LocalDate dataCriacao;
                    if (source.getDataCriacao() != null) {
                        if (source.getDataCriacao() instanceof java.sql.Date) {
                            dataCriacao = ((java.sql.Date) source.getDataCriacao()).toLocalDate();
                        } else {
                            dataCriacao = source.getDataCriacao().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
                        }
                    } else {
                        dataCriacao = LocalDate.now();
                    }
                    System.out.println("Data criação: " + dataCriacao);
                    
                    // Converter data de validade (pode ser java.sql.Date ou java.util.Date)
                    LocalDate dataValidadeSugerida = null;
                    if (source.getDataValidadeSugerida() != null) {
                        if (source.getDataValidadeSugerida() instanceof java.sql.Date) {
                            dataValidadeSugerida = ((java.sql.Date) source.getDataValidadeSugerida()).toLocalDate();
                        } else {
                            dataValidadeSugerida = source.getDataValidadeSugerida().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
                        }
                    }
                    System.out.println("Data validade: " + dataValidadeSugerida);

                    // Mapear treinos diários
                    java.util.List<br.com.forgefit.dominio.treino.TreinoDiario> treinos = new java.util.ArrayList<>();
                    if (source.getTreinosDaSemana() != null) {
                        System.out.println("Número de treinos: " + source.getTreinosDaSemana().size());
                        for (TreinoDiario treinoJpa : source.getTreinosDaSemana()) {
                            if (treinoJpa != null) {
                                System.out.println("Convertendo treino: " + treinoJpa.getLetra());
                                // Converter manualmente cada treino diário
                                LetraDoTreino letra = LetraDoTreino.valueOf(treinoJpa.getLetra());
                                TipoDoTreino tipo = TipoDoTreino.valueOf(treinoJpa.getTipo());
                                
                                java.util.List<br.com.forgefit.dominio.treino.ItemDeExercicio> exercicios = new java.util.ArrayList<>();
                                if (treinoJpa.getExercicios() != null) {
                                    System.out.println("  Número de exercícios: " + treinoJpa.getExercicios().size());
                                    for (ItemDeExercicio exercicioJpa : treinoJpa.getExercicios()) {
                                        if (exercicioJpa != null) {
                                            System.out.println("    Exercício: " + exercicioJpa.getExercicio());
                                            Exercicio exercicio = Exercicio.valueOf(exercicioJpa.getExercicio());
                                            Repeticao repeticao = new Repeticao(
                                                exercicioJpa.getSeries(), 
                                                exercicioJpa.getRepeticoes()
                                            );
                                            exercicios.add(new br.com.forgefit.dominio.treino.ItemDeExercicio(exercicio, repeticao));
                                        }
                                    }
                                }
                                
                                treinos.add(new br.com.forgefit.dominio.treino.TreinoDiario(letra, tipo, exercicios));
                            }
                        }
                    }

                    System.out.println("Criando PlanoDeTreino de domínio");
                    br.com.forgefit.dominio.treino.PlanoDeTreino resultado = new br.com.forgefit.dominio.treino.PlanoDeTreino(
                        id, professorId, dataCriacao, dataValidadeSugerida, treinos
                    );
                    System.out.println("Conversão concluída com sucesso");
                    return resultado;
                } catch (Exception e) {
                    System.err.println("ERRO ao converter PlanoDeTreino: " + e.getClass().getName() + " - " + e.getMessage());
                    e.printStackTrace();
                    throw new RuntimeException("Erro ao converter PlanoDeTreino JPA para Domínio: " + e.getMessage(), e);
                }
            }
        });

        // Converter customizado para PlanoDeTreino Domínio -> JPA
        addConverter(new AbstractConverter<br.com.forgefit.dominio.treino.PlanoDeTreino, PlanoDeTreino>() {
            @Override
            protected PlanoDeTreino convert(br.com.forgefit.dominio.treino.PlanoDeTreino source) {
                if (source == null) return null;

                try {
                    System.out.println("Convertendo PlanoDeTreino Domínio para JPA - ID: " + source.getId().getId());
                    
                    PlanoDeTreino planoJpa = new PlanoDeTreino();
                    planoJpa.setId(source.getId().getId());
                    planoJpa.setProfessorResponsavelId(source.getProfessorId().getId());
                    
                    // Converter datas
                    if (source.getDataCriacao() != null) {
                        planoJpa.setDataCriacao(Date.from(source.getDataCriacao().atStartOfDay(ZoneId.systemDefault()).toInstant()));
                    }
                    if (source.getDataValidadeSugerida() != null) {
                        planoJpa.setDataValidadeSugerida(Date.from(source.getDataValidadeSugerida().atStartOfDay(ZoneId.systemDefault()).toInstant()));
                    }
                    
                    // Converter treinos diários
                    java.util.List<TreinoDiario> treinosJpa = new java.util.ArrayList<>();
                    if (source.getTreinosDaSemana() != null) {
                        for (br.com.forgefit.dominio.treino.TreinoDiario treinoDominio : source.getTreinosDaSemana()) {
                            TreinoDiario treinoJpa = new TreinoDiario();
                            treinoJpa.setLetra(treinoDominio.getLetra().name());
                            treinoJpa.setTipo(treinoDominio.getTipo().name());
                            treinoJpa.setPlanoDeTreino(planoJpa);
                            
                            // Converter exercícios
                            java.util.List<ItemDeExercicio> exerciciosJpa = new java.util.ArrayList<>();
                            if (treinoDominio.getExercicios() != null) {
                                int posicao = 0;
                                for (br.com.forgefit.dominio.treino.ItemDeExercicio itemDominio : treinoDominio.getExercicios()) {
                                    ItemDeExercicio itemJpa = new ItemDeExercicio();
                                    itemJpa.setExercicio(itemDominio.getExercicio().name());
                                    itemJpa.setSeries(itemDominio.getRepeticao().getSeries());
                                    itemJpa.setRepeticoes(itemDominio.getRepeticao().getContagem());
                                    itemJpa.setPosicao(posicao++);
                                    itemJpa.setTreinoDiario(treinoJpa);
                                    exerciciosJpa.add(itemJpa);
                                }
                            }
                            treinoJpa.setExercicios(exerciciosJpa);
                            treinosJpa.add(treinoJpa);
                        }
                    }
                    planoJpa.setTreinosDaSemana(treinosJpa);
                    
                    System.out.println("Conversão Domínio -> JPA concluída com sucesso");
                    return planoJpa;
                } catch (Exception e) {
                    System.err.println("ERRO ao converter PlanoDeTreino Domínio para JPA: " + e.getClass().getName() + " - " + e.getMessage());
                    e.printStackTrace();
                    throw new RuntimeException("Erro ao converter PlanoDeTreino Domínio para JPA: " + e.getMessage(), e);
                }
            }
        });

        // Configurar referências bidirecionais ao mapear PlanoDeTreino Domínio -> JPA
        typeMap(br.com.forgefit.dominio.treino.PlanoDeTreino.class, PlanoDeTreino.class)
            .setPostConverter(context -> {
                PlanoDeTreino planoJpa = context.getDestination();
                if (planoJpa != null && planoJpa.getTreinosDaSemana() != null) {
                    // Configurar referência bidirecional nos treinos diários
                    for (TreinoDiario treinoDiario : planoJpa.getTreinosDaSemana()) {
                        if (treinoDiario != null) {
                            treinoDiario.setPlanoDeTreino(planoJpa);
                            
                            // Configurar referência bidirecional nos exercícios
                            if (treinoDiario.getExercicios() != null) {
                                int posicao = 0;
                                for (ItemDeExercicio exercicio : treinoDiario.getExercicios()) {
                                    if (exercicio != null) {
                                        exercicio.setTreinoDiario(treinoDiario);
                                        exercicio.setPosicao(posicao++);
                                    }
                                }
                            }
                        }
                    }
                }
                return planoJpa;
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

                // Mapear reservas
                if (source.getReservas() != null) {
                    for (br.com.forgefit.persistencia.jpa.Aula.Reserva reservaJpa : source.getReservas()) {
                        Matricula matricula = new Matricula(reservaJpa.getAlunoMatricula());
                        LocalDateTime dataReserva = reservaJpa.getDataReserva().toInstant()
                            .atZone(ZoneId.systemDefault()).toLocalDateTime();
                        
                        br.com.forgefit.dominio.aula.Reserva reservaDominio = 
                            new br.com.forgefit.dominio.aula.Reserva(matricula, dataReserva);
                        
                        // Se a reserva foi cancelada, atualizar o status
                        var statusAtual = reservaJpa.getStatus();
                        if (statusAtual == br.com.forgefit.persistencia.jpa.enums.StatusReserva.CANCELADA_PELO_ALUNO) {
                            @SuppressWarnings("deprecation")
                            Runnable r = () -> reservaDominio.cancelarPeloAluno();
                            r.run();
                        } else if (statusAtual == br.com.forgefit.persistencia.jpa.enums.StatusReserva.CANCELADA_PELA_ACADEMIA) {
                            @SuppressWarnings("deprecation")
                            Runnable r = () -> reservaDominio.cancelarPelaAcademia();
                            r.run();
                        }
                        
                        // Adicionar reserva à aula (só se estiver confirmada ou queremos todas)
                        try {
                            aula.adicionarReserva(reservaDominio);
                        } catch (Exception e) {
                            // Ignora se já existe ou aula está cancelada
                        }
                    }
                }

                // Mapear lista de espera
                if (source.getListaDeEspera() != null) {
                    for (br.com.forgefit.persistencia.jpa.Aula.PosicaoListaDeEspera posicaoJpa : source.getListaDeEspera()) {
                        Matricula matricula = new Matricula(posicaoJpa.getAlunoMatricula());
                        LocalDateTime timestampDeEntrada = posicaoJpa.getTimestampEntrada().toInstant()
                            .atZone(ZoneId.systemDefault()).toLocalDateTime();
                        
                        br.com.forgefit.dominio.aula.PosicaoListaDeEspera posicaoDominio = 
                            new br.com.forgefit.dominio.aula.PosicaoListaDeEspera(matricula, timestampDeEntrada);
                        
                        try {
                            aula.adicionarNaListaDeEspera(posicaoDominio);
                        } catch (Exception e) {
                            // Ignora se já existe
                        }
                    }
                }

                return aula;
            }
        });

        // Custom mapping para Aula Domain -> JPA (para garantir que Reservas e ListaDeEspera tenham referência à Aula)
        typeMap(br.com.forgefit.dominio.aula.Aula.class, br.com.forgefit.persistencia.jpa.Aula.class)
            .setPostConverter(context -> {
                br.com.forgefit.persistencia.jpa.Aula aulaJpa = context.getDestination();
                if (aulaJpa != null) {
                    // Setar referência bidirecional nas reservas
                    if (aulaJpa.getReservas() != null) {
                        for (br.com.forgefit.persistencia.jpa.Aula.Reserva reserva : aulaJpa.getReservas()) {
                            if (reserva != null) {
                                reserva.setAula(aulaJpa);
                            }
                        }
                    }
                    // Setar referência bidirecional na lista de espera
                    if (aulaJpa.getListaDeEspera() != null) {
                        for (br.com.forgefit.persistencia.jpa.Aula.PosicaoListaDeEspera posicao : aulaJpa.getListaDeEspera()) {
                            if (posicao != null) {
                                posicao.setAula(aulaJpa);
                            }
                        }
                    }
                }
                return aulaJpa;
            });

        // Conversores para TorneioId
        addConverter(new AbstractConverter<Integer, TorneioId>() {
            @Override
            protected TorneioId convert(Integer source) {
                return source != null ? new TorneioId(source) : null;
            }
        });

        addConverter(new AbstractConverter<TorneioId, Integer>() {
            @Override
            protected Integer convert(TorneioId source) {
                return source != null ? source.getId() : null;
            }
        });

        // Conversores para Premio (JPA <-> Domínio)
        addConverter(new AbstractConverter<br.com.forgefit.persistencia.jpa.PremioJpa, Premio>() {
            @Override
            protected Premio convert(br.com.forgefit.persistencia.jpa.PremioJpa source) {
                if (source == null || source.getNome() == null) return null;
                return new Premio(source.getNome(), source.getUrlImagem());
            }
        });

        addConverter(new AbstractConverter<Premio, br.com.forgefit.persistencia.jpa.PremioJpa>() {
            @Override
            protected br.com.forgefit.persistencia.jpa.PremioJpa convert(Premio source) {
                if (source == null) return null;
                return new br.com.forgefit.persistencia.jpa.PremioJpa(source.getNome(), source.getUrlImagem());
            }
        });

        // Conversores para StatusTorneio (JPA enum <-> Domínio enum)
        addConverter(new AbstractConverter<br.com.forgefit.persistencia.jpa.enums.StatusTorneio, br.com.forgefit.dominio.torneio.enums.StatusTorneio>() {
            @Override
            protected br.com.forgefit.dominio.torneio.enums.StatusTorneio convert(br.com.forgefit.persistencia.jpa.enums.StatusTorneio source) {
                if (source == null) return null;
                return br.com.forgefit.dominio.torneio.enums.StatusTorneio.valueOf(source.name());
            }
        });

        addConverter(new AbstractConverter<br.com.forgefit.dominio.torneio.enums.StatusTorneio, br.com.forgefit.persistencia.jpa.enums.StatusTorneio>() {
            @Override
            protected br.com.forgefit.persistencia.jpa.enums.StatusTorneio convert(br.com.forgefit.dominio.torneio.enums.StatusTorneio source) {
                if (source == null) return null;
                return br.com.forgefit.persistencia.jpa.enums.StatusTorneio.valueOf(source.name());
            }
        });

        // Conversores para GuildaId (bidirecional)
        addConverter(new AbstractConverter<Integer, GuildaId>() {
            @Override
            protected GuildaId convert(Integer source) {
                return source != null && source > 0 ? new GuildaId(source) : null;
            }
        });

        addConverter(new AbstractConverter<GuildaId, Integer>() {
            @Override
            protected Integer convert(GuildaId source) {
                return source != null ? source.getId() : null;
            }
        });

        // Conversores para CheckinId (bidirecional)
        addConverter(new AbstractConverter<Integer, CheckinId>() {
            @Override
            protected CheckinId convert(Integer source) {
                return source != null && source > 0 ? new CheckinId(source) : null;
            }
        });

        addConverter(new AbstractConverter<CheckinId, Integer>() {
            @Override
            protected Integer convert(CheckinId source) {
                return source != null ? source.getId() : null;
            }
        });

        // Conversores para TipoDeCheckin (enum domínio ↔ enum JPA)
        addConverter(new AbstractConverter<br.com.forgefit.persistencia.jpa.enums.TipoDeCheckin, TipoDeCheckin>() {
            @Override
            protected TipoDeCheckin convert(br.com.forgefit.persistencia.jpa.enums.TipoDeCheckin source) {
                if (source == null) return null;
                return TipoDeCheckin.valueOf(source.name());
            }
        });

        addConverter(new AbstractConverter<TipoDeCheckin, br.com.forgefit.persistencia.jpa.enums.TipoDeCheckin>() {
            @Override
            protected br.com.forgefit.persistencia.jpa.enums.TipoDeCheckin convert(TipoDeCheckin source) {
                if (source == null) return null;
                return br.com.forgefit.persistencia.jpa.enums.TipoDeCheckin.valueOf(source.name());
            }
        });

        // Conversor para Checkin JPA → Domínio
        addConverter(new AbstractConverter<br.com.forgefit.persistencia.jpa.Checkin, br.com.forgefit.dominio.checkin.Checkin>() {
            @Override
            protected br.com.forgefit.dominio.checkin.Checkin convert(br.com.forgefit.persistencia.jpa.Checkin source) {
                if (source == null) return null;

                CheckinId id = new CheckinId(source.getId());
                Matricula alunoMatricula = new Matricula(source.getAlunoMatricula());
                GuildaId guildaId = source.getGuildaId() != null ? new GuildaId(source.getGuildaId()) : null;
                LocalDate dataDoCheckin = map(source.getDataCheckin(), LocalDate.class);
                int pontuacaoGerada = source.getPontuacaoTotal() != null ? source.getPontuacaoTotal() : 0;
                String mensagem = source.getMensagem();
                String urlImagem = source.getUrlImagem();

                // Construir ContextoDoCheckin baseado no tipo
                ContextoDoCheckin contexto;
                br.com.forgefit.persistencia.jpa.enums.TipoDeCheckin tipoJpa = source.getTipo();
                TipoDeCheckin tipo = map(tipoJpa, TipoDeCheckin.class);

                if (tipo == TipoDeCheckin.TREINO) {
                    PlanoDeTreinoId planoId = source.getPlanoDeTreinoId() != null 
                        ? new PlanoDeTreinoId(source.getPlanoDeTreinoId()) 
                        : null;
                    LetraDoTreino letra = source.getLetraTreino() != null 
                        ? LetraDoTreino.valueOf(source.getLetraTreino()) 
                        : null;
                    contexto = ContextoDoCheckin.deTreino(planoId, letra);
                } else if (tipo == TipoDeCheckin.AULA) {
                    AulaId aulaId = source.getAulaId() != null 
                        ? new AulaId(source.getAulaId()) 
                        : null;
                    contexto = ContextoDoCheckin.deAula(aulaId);
                } else {
                    throw new IllegalArgumentException("Tipo de check-in desconhecido: " + tipo);
                }

                return new br.com.forgefit.dominio.checkin.Checkin(
                    id, alunoMatricula, guildaId, dataDoCheckin,
                    pontuacaoGerada, mensagem, urlImagem, contexto
                );
            }
        });

        // Conversor para Checkin Domínio → JPA
        addConverter(new AbstractConverter<br.com.forgefit.dominio.checkin.Checkin, br.com.forgefit.persistencia.jpa.Checkin>() {
            @Override
            protected br.com.forgefit.persistencia.jpa.Checkin convert(br.com.forgefit.dominio.checkin.Checkin source) {
                if (source == null) return null;

                br.com.forgefit.persistencia.jpa.Checkin checkinJpa = new br.com.forgefit.persistencia.jpa.Checkin();
                checkinJpa.setId(source.getId().getId());
                checkinJpa.setAlunoMatricula(source.getAlunoMatricula().getValor());
                checkinJpa.setGuildaId(source.getGuildaId() != null ? source.getGuildaId().getId() : null);
                checkinJpa.setDataCheckin(map(source.getDataDoCheckin(), Date.class));
                checkinJpa.setPontuacaoTotal(source.getPontuacaoGerada());
                checkinJpa.setMensagem(source.getMensagem());
                checkinJpa.setUrlImagem(source.getUrlImagem());

                // Mapear contexto para campos JPA
                ContextoDoCheckin contexto = source.getContexto();
                TipoDeCheckin tipo = contexto.getTipo();
                checkinJpa.setTipo(map(tipo, br.com.forgefit.persistencia.jpa.enums.TipoDeCheckin.class));

                if (tipo == TipoDeCheckin.TREINO) {
                    checkinJpa.setPlanoDeTreinoId(
                        contexto.getPlanoDeTreinoId() != null ? contexto.getPlanoDeTreinoId().getId() : null
                    );
                    checkinJpa.setLetraTreino(
                        contexto.getLetraDoTreino() != null ? contexto.getLetraDoTreino().name() : null
                    );
                    checkinJpa.setAulaId(null);
                } else if (tipo == TipoDeCheckin.AULA) {
                    checkinJpa.setAulaId(
                        contexto.getAulaId() != null ? contexto.getAulaId().getId() : null
                    );
                    checkinJpa.setPlanoDeTreinoId(null);
                    checkinJpa.setLetraTreino(null);
                }

                return checkinJpa;
            }
        });

        // Conversor para PosicaoRanking (JPA -> Domínio)
        addConverter(new AbstractConverter<br.com.forgefit.persistencia.jpa.PosicaoRankingJpa, br.com.forgefit.dominio.torneio.PosicaoRanking>() {
            @Override
            protected br.com.forgefit.dominio.torneio.PosicaoRanking convert(br.com.forgefit.persistencia.jpa.PosicaoRankingJpa source) {
                if (source == null) return null;
                GuildaId guildaId = new GuildaId(source.getGuildaId());
                return new br.com.forgefit.dominio.torneio.PosicaoRanking(
                    source.getPosicao(), 
                    guildaId, 
                    source.getPontuacaoNoTorneio()
                );
            }
        });

        // Conversor para ItemRanking (JPA -> Domínio)
        addConverter(new AbstractConverter<br.com.forgefit.persistencia.jpa.ItemRanking, br.com.forgefit.dominio.ranking.ItemRanking>() {
            @Override
            protected br.com.forgefit.dominio.ranking.ItemRanking convert(br.com.forgefit.persistencia.jpa.ItemRanking source) {
                if (source == null) return null;
                
                Matricula matricula = new Matricula(source.getAlunoMatricula());
                br.com.forgefit.dominio.ranking.ItemRanking item = new br.com.forgefit.dominio.ranking.ItemRanking(matricula);
                
                // Usar reflexão para definir campos privados
                try {
                    java.lang.reflect.Field pontosFrequenciaField = br.com.forgefit.dominio.ranking.ItemRanking.class.getDeclaredField("pontosFrequencia");
                    pontosFrequenciaField.setAccessible(true);
                    pontosFrequenciaField.setInt(item, source.getPontosFrequencia() != null ? source.getPontosFrequencia() : 0);
                    
                    java.lang.reflect.Field pontosGuildaField = br.com.forgefit.dominio.ranking.ItemRanking.class.getDeclaredField("pontosGuilda");
                    pontosGuildaField.setAccessible(true);
                    pontosGuildaField.setInt(item, source.getPontosGuilda() != null ? source.getPontosGuilda() : 0);
                    
                    java.lang.reflect.Field pontosPerformanceField = br.com.forgefit.dominio.ranking.ItemRanking.class.getDeclaredField("pontosPerformance");
                    pontosPerformanceField.setAccessible(true);
                    pontosPerformanceField.setInt(item, source.getPontosPerformance() != null ? source.getPontosPerformance() : 0);
                    
                    java.lang.reflect.Field pontuacaoTotalField = br.com.forgefit.dominio.ranking.ItemRanking.class.getDeclaredField("pontuacaoTotal");
                    pontuacaoTotalField.setAccessible(true);
                    pontuacaoTotalField.setInt(item, source.getPontuacaoTotal() != null ? source.getPontuacaoTotal() : 0);
                    
                    java.lang.reflect.Field posicaoField = br.com.forgefit.dominio.ranking.ItemRanking.class.getDeclaredField("posicao");
                    posicaoField.setAccessible(true);
                    posicaoField.setInt(item, source.getPosicao() != null ? source.getPosicao() : 0);
                    
                    java.lang.reflect.Field numeroAulasField = br.com.forgefit.dominio.ranking.ItemRanking.class.getDeclaredField("numeroDeAulasParticipadas");
                    numeroAulasField.setAccessible(true);
                    numeroAulasField.setInt(item, source.getNumeroAulasParticipadas() != null ? source.getNumeroAulasParticipadas() : 0);
                    
                    java.lang.reflect.Field mediaPerformanceField = br.com.forgefit.dominio.ranking.ItemRanking.class.getDeclaredField("mediaPerformance");
                    mediaPerformanceField.setAccessible(true);
                    mediaPerformanceField.setDouble(item, source.getMediaPerformance() != null ? source.getMediaPerformance() : 0.0);
                    
                    java.lang.reflect.Field numeroAvaliacoesField = br.com.forgefit.dominio.ranking.ItemRanking.class.getDeclaredField("numeroDeAvaliacoes");
                    numeroAvaliacoesField.setAccessible(true);
                    numeroAvaliacoesField.setInt(item, source.getNumeroAvaliacoes() != null ? source.getNumeroAvaliacoes() : 0);
                } catch (Exception e) {
                    throw new RuntimeException("Erro ao mapear ItemRanking", e);
                }
                
                return item;
            }
        });

        // Conversor para Ranking (JPA -> Domínio)
        addConverter(new AbstractConverter<br.com.forgefit.persistencia.jpa.Ranking, br.com.forgefit.dominio.ranking.Ranking>() {
            @Override
            protected br.com.forgefit.dominio.ranking.Ranking convert(br.com.forgefit.persistencia.jpa.Ranking source) {
                if (source == null) return null;
                
                br.com.forgefit.dominio.ranking.enums.PeriodoRanking periodo = 
                    br.com.forgefit.dominio.ranking.enums.PeriodoRanking.valueOf(source.getPeriodo().name());
                
                br.com.forgefit.dominio.ranking.Ranking ranking = new br.com.forgefit.dominio.ranking.Ranking(periodo);
                
                // Mapear itens
                if (source.getItens() != null) {
                    for (br.com.forgefit.persistencia.jpa.ItemRanking itemJpa : source.getItens()) {
                        if (itemJpa == null || itemJpa.getAlunoMatricula() == null) {
                            continue; // Pular itens inválidos
                        }
                        br.com.forgefit.dominio.ranking.ItemRanking item = map(itemJpa, br.com.forgefit.dominio.ranking.ItemRanking.class);
                        if (item != null) {
                            // Usar reflexão para adicionar à lista privada
                            try {
                                java.lang.reflect.Field itensField = br.com.forgefit.dominio.ranking.Ranking.class.getDeclaredField("itens");
                                itensField.setAccessible(true);
                                @SuppressWarnings("unchecked")
                                java.util.List<br.com.forgefit.dominio.ranking.ItemRanking> itens = 
                                    (java.util.List<br.com.forgefit.dominio.ranking.ItemRanking>) itensField.get(ranking);
                                itens.add(item);
                            } catch (Exception e) {
                                throw new RuntimeException("Erro ao adicionar item ao ranking", e);
                            }
                        }
                    }
                }
                
                return ranking;
            }
        });

        // Conversor para Ranking (Domínio -> JPA)
        addConverter(new AbstractConverter<br.com.forgefit.dominio.ranking.Ranking, br.com.forgefit.persistencia.jpa.Ranking>() {
            @Override
            protected br.com.forgefit.persistencia.jpa.Ranking convert(br.com.forgefit.dominio.ranking.Ranking source) {
                if (source == null) return null;
                
                br.com.forgefit.persistencia.jpa.Ranking rankingJpa = new br.com.forgefit.persistencia.jpa.Ranking();
                rankingJpa.setPeriodo(br.com.forgefit.persistencia.jpa.enums.PeriodoRanking.valueOf(source.getPeriodo().name()));
                
                // Mapear itens
                if (source.getItens() != null) {
                    java.util.List<br.com.forgefit.persistencia.jpa.ItemRanking> itensJpa = new java.util.ArrayList<>();
                    for (br.com.forgefit.dominio.ranking.ItemRanking item : source.getItens()) {
                        br.com.forgefit.persistencia.jpa.ItemRanking itemJpa = new br.com.forgefit.persistencia.jpa.ItemRanking();
                        itemJpa.setRanking(rankingJpa);
                        itemJpa.setAlunoMatricula(item.getAlunoMatricula().getValor());
                        itemJpa.setPontosFrequencia(item.getPontosFrequencia());
                        itemJpa.setPontosGuilda(item.getPontosGuilda());
                        itemJpa.setPontosPerformance(item.getPontosPerformance());
                        itemJpa.setPontuacaoTotal(item.getPontuacaoTotal());
                        itemJpa.setPosicao(item.getPosicao());
                        itemJpa.setNumeroAulasParticipadas(item.getNumeroDeAulasParticipadas());
                        itemJpa.setMediaPerformance(item.getMediaPerformance());
                        itemJpa.setNumeroAvaliacoes(0); // Campo não existe no domínio, usar 0
                        itensJpa.add(itemJpa);
                    }
                    rankingJpa.setItens(itensJpa);
                }
                
                return rankingJpa;
            }
        });

        // Conversor customizado para Torneio JPA -> Domínio
        addConverter(new AbstractConverter<br.com.forgefit.persistencia.jpa.Torneio, br.com.forgefit.dominio.torneio.Torneio>() {
            @Override
            protected br.com.forgefit.dominio.torneio.Torneio convert(br.com.forgefit.persistencia.jpa.Torneio source) {
                if (source == null) return null;

                TorneioId id = new TorneioId(source.getId());
                LocalDate dataInicio = map(source.getDataInicio(), LocalDate.class);
                LocalDate dataFim = map(source.getDataFim(), LocalDate.class);
                
                br.com.forgefit.dominio.torneio.Torneio torneio = new br.com.forgefit.dominio.torneio.Torneio(
                    id, source.getNome(), dataInicio, dataFim
                );

                // Mapear prêmios
                if (source.getPremioPrimeiroLugar() != null) {
                    Premio p1 = map(source.getPremioPrimeiroLugar(), Premio.class);
                    torneio.definirPremioDoPodio(br.com.forgefit.dominio.torneio.enums.PosicaoDoPodio.PRIMEIRO_LUGAR, p1);
                }
                if (source.getPremioSegundoLugar() != null) {
                    Premio p2 = map(source.getPremioSegundoLugar(), Premio.class);
                    torneio.definirPremioDoPodio(br.com.forgefit.dominio.torneio.enums.PosicaoDoPodio.SEGUNDO_LUGAR, p2);
                }
                if (source.getPremioTerceiroLugar() != null) {
                    Premio p3 = map(source.getPremioTerceiroLugar(), Premio.class);
                    torneio.definirPremioDoPodio(br.com.forgefit.dominio.torneio.enums.PosicaoDoPodio.TERCEIRO_LUGAR, p3);
                }

                // Mapear status
                br.com.forgefit.dominio.torneio.enums.StatusTorneio status = map(source.getStatus(), br.com.forgefit.dominio.torneio.enums.StatusTorneio.class);
                if (status == br.com.forgefit.dominio.torneio.enums.StatusTorneio.ATIVO && torneio.getStatus() != br.com.forgefit.dominio.torneio.enums.StatusTorneio.ATIVO) {
                    torneio.ativar();
                } else if (status == br.com.forgefit.dominio.torneio.enums.StatusTorneio.CANCELADO && torneio.getStatus() != br.com.forgefit.dominio.torneio.enums.StatusTorneio.CANCELADO) {
                    torneio.cancelar();
                } else if (status == br.com.forgefit.dominio.torneio.enums.StatusTorneio.FINALIZADO && torneio.getStatus() != br.com.forgefit.dominio.torneio.enums.StatusTorneio.FINALIZADO) {
                    // Para finalizar, precisamos primeiro ativar e depois finalizar
                    if (torneio.getStatus() == br.com.forgefit.dominio.torneio.enums.StatusTorneio.PLANEJADO) {
                        torneio.ativar();
                    }
                    torneio.finalizar();
                }

                // Mapear ranking final
                if (source.getRankingFinal() != null) {
                    for (br.com.forgefit.persistencia.jpa.PosicaoRankingJpa posicaoJpa : source.getRankingFinal()) {
                        br.com.forgefit.dominio.torneio.PosicaoRanking posicaoDominio = map(posicaoJpa, br.com.forgefit.dominio.torneio.PosicaoRanking.class);
                        // O ranking final é calculado na finalização, então não precisamos adicionar manualmente
                    }
                }

                return torneio;
            }
        });

        // Conversor customizado para Torneio Domínio -> JPA
        addConverter(new AbstractConverter<br.com.forgefit.dominio.torneio.Torneio, br.com.forgefit.persistencia.jpa.Torneio>() {
            @Override
            protected br.com.forgefit.persistencia.jpa.Torneio convert(br.com.forgefit.dominio.torneio.Torneio source) {
                if (source == null) return null;

                br.com.forgefit.persistencia.jpa.Torneio torneioJpa = new br.com.forgefit.persistencia.jpa.Torneio();
                
                // Se o ID for 0, não setar (para novos torneios, o JPA gerará)
                if (source.getId().getId() > 0) {
                    torneioJpa.setId(source.getId().getId());
                }
                
                torneioJpa.setNome(source.getNome());
                torneioJpa.setDataInicio(map(source.getDataInicio(), Date.class));
                torneioJpa.setDataFim(map(source.getDataFim(), Date.class));
                torneioJpa.setStatus(map(source.getStatus(), br.com.forgefit.persistencia.jpa.enums.StatusTorneio.class));
                
                // Mapear prêmios
                if (source.getPremioPrimeiroLugar() != null) {
                    torneioJpa.setPremioPrimeiroLugar(map(source.getPremioPrimeiroLugar(), br.com.forgefit.persistencia.jpa.PremioJpa.class));
                }
                if (source.getPremioSegundoLugar() != null) {
                    torneioJpa.setPremioSegundoLugar(map(source.getPremioSegundoLugar(), br.com.forgefit.persistencia.jpa.PremioJpa.class));
                }
                if (source.getPremioTerceiroLugar() != null) {
                    torneioJpa.setPremioTerceiroLugar(map(source.getPremioTerceiroLugar(), br.com.forgefit.persistencia.jpa.PremioJpa.class));
                }

                // Mapear ranking final
                if (source.getRankingFinal() != null && !source.getRankingFinal().isEmpty()) {
                    java.util.List<br.com.forgefit.persistencia.jpa.PosicaoRankingJpa> rankingJpa = new java.util.ArrayList<>();
                    for (br.com.forgefit.dominio.torneio.PosicaoRanking posicaoDominio : source.getRankingFinal()) {
                        br.com.forgefit.persistencia.jpa.PosicaoRankingJpa posicaoJpa = new br.com.forgefit.persistencia.jpa.PosicaoRankingJpa();
                        posicaoJpa.setTorneio(torneioJpa);
                        posicaoJpa.setPosicao(posicaoDominio.getPosicao());
                        posicaoJpa.setGuildaId(posicaoDominio.getGuildaId().getId());
                        posicaoJpa.setPontuacaoNoTorneio(posicaoDominio.getPontuacaoNoTorneio());
                        rankingJpa.add(posicaoJpa);
                    }
                    torneioJpa.setRankingFinal(rankingJpa);
                }

                return torneioJpa;
            }
        });

        // Configurar referências bidirecionais ao mapear Torneio Domínio -> JPA
        typeMap(br.com.forgefit.dominio.torneio.Torneio.class, br.com.forgefit.persistencia.jpa.Torneio.class)
            .setPostConverter(context -> {
                br.com.forgefit.persistencia.jpa.Torneio torneioJpa = context.getDestination();
                if (torneioJpa != null && torneioJpa.getRankingFinal() != null) {
                    // Configurar referência bidirecional no ranking
                    for (br.com.forgefit.persistencia.jpa.PosicaoRankingJpa posicao : torneioJpa.getRankingFinal()) {
                        if (posicao != null) {
                            posicao.setTorneio(torneioJpa);
                        }
                    }
                }
                return torneioJpa;
            });
    }

    @Override
    public <D> D map(Object source, Class<D> destinationType) {
        return source != null ? super.map(source, destinationType) : null;
    }
}
