-- Dados iniciais do ForgeFit

-- ============================================
-- PROFESSORES
-- ============================================

INSERT INTO PROFESSOR(CPF, NOME, DATA_NASCIMENTO, USER_ID) VALUES (
    '05144786405',
    'João Silva',
    '1985-06-15',
    4
);

INSERT INTO PROFESSOR(CPF, NOME, DATA_NASCIMENTO, USER_ID) VALUES (
    '03972009437',
    'Maria Santos',
    '1990-03-20',
    5
);

-- ============================================
-- ALUNOS
-- ============================================

INSERT INTO ALUNO(MATRICULA, CPF, NOME, DATA_NASCIMENTO, USER_ID, CREDITOS, PONTUACAO_TOTAL, STATUS) VALUES (
    'ALU001',
    '85571506440',
    'Pedro Oliveira',
    '1995-09-10',
    14,
    100.0,
    50,
    'ATIVO'
);

INSERT INTO ALUNO(MATRICULA, CPF, NOME, DATA_NASCIMENTO, USER_ID, CREDITOS, PONTUACAO_TOTAL, STATUS) VALUES (
    'ALU002',
    '22173582437',
    'Ana Costa',
    '1998-12-05',
    15,
    150.0,
    120,
    'ATIVO'
);

-- ============================================
-- AVALIAÇÕES FÍSICAS
-- ============================================

INSERT INTO AVALIACAO_FISICA(ALUNO_MATRICULA, DATA_AVALIACAO, PROFESSOR_RESPONSAVEL_ID, INDICE_DE_MASSA_CORPORAL, MASSA_GORDA_PERCENTUAL, MASSA_MAGRA_KG) VALUES (
    'ALU001',
    CURRENT_DATE,
    1,
    24.5,
    18.0,
    65.0
);

INSERT INTO AVALIACAO_FISICA(ALUNO_MATRICULA, DATA_AVALIACAO, PROFESSOR_RESPONSAVEL_ID, INDICE_DE_MASSA_CORPORAL, MASSA_GORDA_PERCENTUAL, MASSA_MAGRA_KG) VALUES (
    'ALU002',
    CURRENT_DATE,
    2,
    22.3,
    20.5,
    52.0
);

-- ============================================
-- AULAS
-- ============================================

INSERT INTO AULA(PROFESSOR_ID, MODALIDADE, ESPACO, CAPACIDADE, INICIO, FIM, STATUS) VALUES (
    2,
    'YOGA',
    'SALA01_MULTIUSO',
    15,
    '2025-01-20 10:00:00',
    '2025-01-20 11:00:00',
    'ATIVA'
);

INSERT INTO AULA(PROFESSOR_ID, MODALIDADE, ESPACO, CAPACIDADE, INICIO, FIM, STATUS) VALUES (
    1,
    'MUSCULACAO',
    'AREA_DE_PESO_LIVRE',
    20,
    '2025-01-21 14:00:00',
    '2025-01-21 15:30:00',
    'ATIVA'
);

INSERT INTO AULA(PROFESSOR_ID, MODALIDADE, ESPACO, CAPACIDADE, INICIO, FIM, STATUS) VALUES (
    2,
    'PILATES',
    'SALA02_PILATES',
    10,
    '2025-01-22 09:00:00',
    '2025-01-22 10:00:00',
    'ATIVA'
);

-- Aula cancelada para exemplo
INSERT INTO AULA(PROFESSOR_ID, MODALIDADE, ESPACO, CAPACIDADE, INICIO, FIM, STATUS) VALUES (
    1,
    'SPINNING',
    'SALA_DE_SPINNING',
    25,
    '2025-01-23 18:00:00',
    '2025-01-23 19:00:00',
    'CANCELADA'
);

-- ============================================
-- RECORRÊNCIAS
-- ============================================

INSERT INTO RECORRENCIA(AULA_ID, TIPO, DATA_FIM_RECORRENCIA) VALUES (
    1,
    'SEMANAL',
    '2025-06-30'
);

INSERT INTO RECORRENCIA_DIAS(RECORRENCIA_ID, DIA_DA_SEMANA) VALUES (1, 'SEGUNDA');
INSERT INTO RECORRENCIA_DIAS(RECORRENCIA_ID, DIA_DA_SEMANA) VALUES (1, 'QUARTA');
INSERT INTO RECORRENCIA_DIAS(RECORRENCIA_ID, DIA_DA_SEMANA) VALUES (1, 'SEXTA');

-- ============================================
-- RESERVAS
-- ============================================

INSERT INTO RESERVA(AULA_ID, ALUNO_MATRICULA, DATA_RESERVA, STATUS) VALUES (
    1,
    'ALU001',
    CURRENT_TIMESTAMP,
    'CONFIRMADA'
);

INSERT INTO RESERVA(AULA_ID, ALUNO_MATRICULA, DATA_RESERVA, STATUS) VALUES (
    2,
    'ALU001',
    CURRENT_TIMESTAMP,
    'CONFIRMADA'
);

INSERT INTO RESERVA(AULA_ID, ALUNO_MATRICULA, DATA_RESERVA, STATUS) VALUES (
    1,
    'ALU002',
    CURRENT_TIMESTAMP,
    'CONFIRMADA'
);

-- Reserva cancelada pelo aluno
INSERT INTO RESERVA(AULA_ID, ALUNO_MATRICULA, DATA_RESERVA, STATUS) VALUES (
    3,
    'ALU002',
    CURRENT_TIMESTAMP - INTERVAL '2 days',
    'CANCELADA_PELO_ALUNO'
);

-- Reserva cancelada pela academia (aula cancelada)
INSERT INTO RESERVA(AULA_ID, ALUNO_MATRICULA, DATA_RESERVA, STATUS) VALUES (
    4,
    'ALU001',
    CURRENT_TIMESTAMP - INTERVAL '1 day',
    'CANCELADA_PELA_ACADEMIA'
);

-- ============================================
-- AVALIAÇÕES DE PROFESSORES
-- ============================================

INSERT INTO AVALIACAO(
    ALUNO_MATRICULA, 
    PROFESSOR_ID, 
    AULA_ID, 
    DATA_OCORRENCIA_AULA,
    NOTA_PONTUALIDADE,
    NOTA_DIDATICA,
    NOTA_ATENCAO,
    COMENTARIO
) VALUES (
    'ALU001',
    2,
    1,
    CURRENT_DATE - INTERVAL '7 days',
    5,
    5,
    5,
    'Excelente professora! Muito atenciosa e pontual.'
);

INSERT INTO AVALIACAO(
    ALUNO_MATRICULA, 
    PROFESSOR_ID, 
    AULA_ID, 
    DATA_OCORRENCIA_AULA,
    NOTA_PONTUALIDADE,
    NOTA_DIDATICA,
    NOTA_ATENCAO,
    COMENTARIO
) VALUES (
    'ALU002',
    1,
    2,
    CURRENT_DATE - INTERVAL '5 days',
    4,
    5,
    4,
    'Ótima aula de musculação. Explicações claras e bom acompanhamento.'
);

-- ============================================
-- FALTAS
-- ============================================

INSERT INTO FALTAS_REGISTRO(CPF_ALUNO, DATA_AULA, AULA_ID) VALUES (
    '85571506440',
    CURRENT_DATE - INTERVAL '10 days',
    1
);

INSERT INTO FALTAS_REGISTRO(CPF_ALUNO, DATA_AULA, AULA_ID) VALUES (
    '22173582437',
    CURRENT_DATE - INTERVAL '8 days',
    2
);

-- ============================================
-- FREQUÊNCIA
-- ============================================

INSERT INTO FREQUENCIA(AULA_ID, ALUNO_MATRICULA, DATA_PRESENCA, STATUS) VALUES (
    1,
    'ALU001',
    CURRENT_DATE - INTERVAL '1 day',
    'PRESENTE'
);

INSERT INTO FREQUENCIA(AULA_ID, ALUNO_MATRICULA, DATA_PRESENCA, STATUS) VALUES (
    2,
    'ALU001',
    CURRENT_DATE - INTERVAL '2 days',
    'PRESENTE'
);

INSERT INTO FREQUENCIA(AULA_ID, ALUNO_MATRICULA, DATA_PRESENCA, STATUS) VALUES (
    1,
    'ALU002',
    CURRENT_DATE - INTERVAL '1 day',
    'AUSENTE'
);

-- ============================================
-- CHECK-INS
-- ============================================

INSERT INTO CHECKIN(ALUNO_MATRICULA, TIMESTAMP_CHECKIN, TIPO, AULA_ID) VALUES (
    'ALU001',
    CURRENT_TIMESTAMP - INTERVAL '1 day',
    'ENTRADA_AULA',
    1
);

INSERT INTO CHECKIN(ALUNO_MATRICULA, TIMESTAMP_CHECKIN, TIPO) VALUES (
    'ALU002',
    CURRENT_TIMESTAMP - INTERVAL '3 hours',
    'ENTRADA_ACADEMIA'
);

-- ============================================
-- GUILDAS
-- ============================================

INSERT INTO GUILDA(NOME, DESCRICAO, IMAGEM_URL, CODIGO_CONVITE, MESTRE_MATRICULA, PONTUACAO_TOTAL, STATUS) VALUES (
    'Guerreiros do Fitness',
    'Guilda para atletas dedicados e focados em resultados',
    'https://example.com/guerreiros.png',
    'GUERR2025',
    'ALU001',
    170,
    'ATIVA'
);

INSERT INTO GUILDA(NOME, DESCRICAO, IMAGEM_URL, CODIGO_CONVITE, MESTRE_MATRICULA, PONTUACAO_TOTAL, STATUS) VALUES (
    'Força e Determinação',
    'Guilda focada em superação de limites',
    'https://example.com/forca.png',
    'FORCA2025',
    'ALU002',
    95,
    'ATIVA'
);

INSERT INTO GUILDA_MEMBROS(GUILDA_ID, MEMBRO_MATRICULA) VALUES (1, 'ALU001');
INSERT INTO GUILDA_MEMBROS(GUILDA_ID, MEMBRO_MATRICULA) VALUES (1, 'ALU002');

UPDATE ALUNO SET GUILDA_ID = 1 WHERE MATRICULA IN ('ALU001', 'ALU002');

-- ============================================
-- RANKING
-- ============================================

INSERT INTO RANKING(PERIODO, DATA_INICIO, DATA_FIM) VALUES (
    'MENSAL',
    DATE_TRUNC('month', CURRENT_DATE),
    DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month' - INTERVAL '1 day'
);

INSERT INTO ITEM_RANKING(RANKING_ID, ALUNO_MATRICULA, POSICAO, PONTUACAO) VALUES (
    1,
    'ALU002',
    1,
    120
);

INSERT INTO ITEM_RANKING(RANKING_ID, ALUNO_MATRICULA, POSICAO, PONTUACAO) VALUES (
    1,
    'ALU001',
    2,
    50
);

-- ============================================
-- TORNEIO
-- ============================================

INSERT INTO TORNEIO(NOME, DESCRICAO, DATA_INICIO, DATA_FIM, STATUS, PONTUACAO_MINIMA) VALUES (
    'Desafio Verão 2025',
    'Torneio de verão com foco em resistência e força',
    '2025-01-15',
    '2025-03-15',
    'EM_ANDAMENTO',
    100
);

INSERT INTO TORNEIO_PARTICIPANTES(TORNEIO_ID, ALUNO_MATRICULA, PONTUACAO) VALUES (1, 'ALU001', 50);
INSERT INTO TORNEIO_PARTICIPANTES(TORNEIO_ID, ALUNO_MATRICULA, PONTUACAO) VALUES (1, 'ALU002', 120);

-- ============================================
-- PLANO DE TREINO
-- ============================================

INSERT INTO PLANO_TREINO(ALUNO_MATRICULA, PROFESSOR_ID, NOME, DESCRICAO, DATA_INICIO, ATIVO) VALUES (
    'ALU001',
    1,
    'Treino ABC - Hipertrofia',
    'Plano de treino focado em ganho de massa muscular',
    CURRENT_DATE - INTERVAL '30 days',
    TRUE
);

INSERT INTO TREINO_DIARIO(PLANO_TREINO_ID, LETRA_TREINO, DIA_SEMANA, NOME) VALUES (
    1,
    'A',
    'SEGUNDA',
    'Peito e Tríceps'
);

INSERT INTO TREINO_DIARIO(PLANO_TREINO_ID, LETRA_TREINO, DIA_SEMANA, NOME) VALUES (
    1,
    'B',
    'QUARTA',
    'Costas e Bíceps'
);

INSERT INTO TREINO_DIARIO(PLANO_TREINO_ID, LETRA_TREINO, DIA_SEMANA, NOME) VALUES (
    1,
    'C',
    'SEXTA',
    'Pernas e Ombros'
);

INSERT INTO ITEM_EXERCICIO(TREINO_DIARIO_ID, EXERCICIO, ORDEM, SERIES, REPETICOES_MIN, REPETICOES_MAX, DESCANSO_SEGUNDOS) VALUES (
    1,
    'SUPINO_RETO',
    1,
    4,
    8,
    12,
    90
);

INSERT INTO ITEM_EXERCICIO(TREINO_DIARIO_ID, EXERCICIO, ORDEM, SERIES, REPETICOES_MIN, REPETICOES_MAX, DESCANSO_SEGUNDOS) VALUES (
    1,
    'CRUCIFIXO',
    2,
    3,
    10,
    15,
    60
);

INSERT INTO ITEM_EXERCICIO(TREINO_DIARIO_ID, EXERCICIO, ORDEM, SERIES, REPETICOES_MIN, REPETICOES_MAX, DESCANSO_SEGUNDOS) VALUES (
    2,
    'BARRA_FIXA',
    1,
    4,
    6,
    10,
    90
);

INSERT INTO ITEM_EXERCICIO(TREINO_DIARIO_ID, EXERCICIO, ORDEM, SERIES, REPETICOES_MIN, REPETICOES_MAX, DESCANSO_SEGUNDOS) VALUES (
    3,
    'AGACHAMENTO',
    1,
    4,
    8,
    12,
    120
);

