-- ============================================
-- FORGEFIT - DADOS INICIAIS
-- Dados de exemplo baseados no modelo CML
-- ============================================

-- ============================================
-- PROFESSORES
-- ============================================

INSERT INTO PROFESSOR(CPF, NOME, DATA_NASCIMENTO, USER_ID) VALUES 
    ('12345678901', 'Ana Silva', '1985-06-15', '4'),
    ('23456789012', 'Carlos Mendes', '1988-11-12', '5'),
    ('34567890123', 'Pedro Santos', '1990-03-20', '6'),
    ('45678901234', 'Mariana Costa', '1992-08-25', '7'),
    ('56789012345', 'Roberto Oliveira', '1987-04-18', '8');
    

-- ============================================
-- ALUNOS
-- ============================================

INSERT INTO ALUNO(MATRICULA, CPF, NOME, DATA_NASCIMENTO, USER_ID, CREDITOS, PONTUACAO_TOTAL, STATUS) VALUES 
    ('ALU001', '11122233344', 'Pedro Oliveira', '1995-09-10', '14', 100.00, 50, 'ATIVO'),
    ('ALU002', '22233344455', 'Ana Costa', '1998-12-05', '15', 150.00, 120, 'ATIVO'),
    ('ALU003', '33344455566', 'Lucas Ferreira', '1997-07-22', '16', 80.00, 95, 'ATIVO'),
    ('ALU004', '44455566677', 'Juliana Souza', '1999-02-14', '17', 200.00, 180, 'ATIVO'),
    ('ALU005', '55566677788', 'Roberto Lima', '1996-05-30', '18', 50.00, 30, 'ATIVO');

-- ============================================
-- GUILDAS
-- ============================================

INSERT INTO GUILDA(NOME, DESCRICAO, IMAGEM_URL, STATUS, CODIGO_CONVITE, MESTRE_MATRICULA, PONTUACAO_TOTAL) VALUES 
    ('Guerreiros do Treino', 'Guilda focada em superação e disciplina', 'https://exemplo.com/guerreiros.png', 'ATIVA', 'GUERR2025', 'ALU001', 500),
    ('Força e Equilíbrio', 'União entre força física e mental', 'https://exemplo.com/forca.png', 'ATIVA', 'FORCA2025', 'ALU002', 450);

-- Atualizar alunos com suas guildas
UPDATE ALUNO SET GUILDA_ID = 1 WHERE MATRICULA IN ('ALU001', 'ALU003');
UPDATE ALUNO SET GUILDA_ID = 2 WHERE MATRICULA IN ('ALU002', 'ALU004');

-- Membros das guildas
INSERT INTO GUILDA_MEMBROS(GUILDA_ID, ALUNO_MATRICULA) VALUES 
    (1, 'ALU001'),
    (1, 'ALU003'),
    (2, 'ALU002'),
    (2, 'ALU004');

-- ============================================
-- PLANOS DE TREINO
-- ============================================

INSERT INTO PLANO_DE_TREINO(PROFESSOR_RESPONSAVEL_ID, DATA_CRIACAO, DATA_VALIDADE_SUGERIDA) VALUES 
    (1, '2025-01-01', '2025-04-01'),
    (2, '2025-01-01', '2025-04-01');

-- Treinos diários do Plano 1 (ABC)
INSERT INTO TREINO_DIARIO(PLANO_TREINO_ID, LETRA, TIPO) VALUES 
    (1, 'TREINO_A', 'PEITO_E_TRICEPS'),
    (1, 'TREINO_B', 'COSTAS_E_BICEPS'),
    (1, 'TREINO_C', 'PERNAS');

-- Exercícios do Treino A
INSERT INTO ITEM_DE_EXERCICIO(TREINO_DIARIO_ID, ORDEM, EXERCICIO, SERIES, CONTAGEM) VALUES 
    (1, 1, 'SUPINO_RETO', 4, '8-12'),
    (1, 2, 'SUPINO_INCLINADO', 3, '10-12'),
    (1, 3, 'CRUCIFIXO_COM_HALTERES', 3, '12-15'),
    (1, 4, 'TRICEPS_PULLEY_COM_BARRA', 3, '10-12'),
    (1, 5, 'TRICEPS_TESTA', 3, '10-12');

-- Exercícios do Treino B
INSERT INTO ITEM_DE_EXERCICIO(TREINO_DIARIO_ID, ORDEM, EXERCICIO, SERIES, CONTAGEM) VALUES 
    (2, 1, 'BARRA_FIXA', 4, 'Máximo'),
    (2, 2, 'REMADA_CURVADA_COM_BARRA', 4, '8-10'),
    (2, 3, 'PUXADA_ALTA_PULLEY_FRENTE', 3, '10-12'),
    (2, 4, 'ROSCA_DIRETA_COM_BARRA', 3, '10-12'),
    (2, 5, 'ROSCA_MARTELO', 3, '12-15');

-- Exercícios do Treino C
INSERT INTO ITEM_DE_EXERCICIO(TREINO_DIARIO_ID, ORDEM, EXERCICIO, SERIES, CONTAGEM) VALUES 
    (3, 1, 'AGACHAMENTO_LIVRE_COM_BARRA', 4, '8-12'),
    (3, 2, 'LEG_PRESS_45', 4, '10-12'),
    (3, 3, 'CADEIRA_EXTENSORA', 3, '12-15'),
    (3, 4, 'MESA_FLEXORA', 3, '12-15'),
    (3, 5, 'PANTURRILHA_EM_PE_GEMEOS', 4, '15-20');

-- Atribuir plano ao aluno
UPDATE ALUNO SET PLANO_ATIVO_ID = 1 WHERE MATRICULA = 'ALU001';
UPDATE ALUNO SET PLANO_ATIVO_ID = 2 WHERE MATRICULA = 'ALU002';

INSERT INTO ALUNO_PLANO_HISTORICO(ALUNO_MATRICULA, PLANO_TREINO_ID) VALUES 
    ('ALU001', 1),
    ('ALU002', 2);

-- ============================================
-- AVALIAÇÕES FÍSICAS
-- ============================================

INSERT INTO AVALIACAO_FISICA(ALUNO_MATRICULA, DATA_AVALIACAO, PROFESSOR_RESPONSAVEL_ID, 
    MASSA_GORDA_PERCENTUAL, MASSA_GORDA_KG, MASSA_MAGRA_KG, MASSA_MUSCULAR_ESQUELETICA_KG,
    AGUA_CORPORAL_TOTAL_PERCENTUAL, GORDURA_VISCERAL_NIVEL, TAXA_METABOLICA_BASAL_KCAL,
    MASSA_OSSEA_KG, INDICE_DE_MASSA_CORPORAL, BRACO_RELAXADO_CM, BRACO_CONTRAIDO_CM,
    ANTEBRACO_CM, TORAX_PEITORAL_CM, CINTURA_CM, ABDOMEN_CM, QUADRIL_CM, COXA_CM, PANTURRILHA_CM) 
VALUES 
    ('ALU001', '2025-01-01', 1, 18.5, 14.2, 62.8, 35.4, 58.3, 8, 1680, 2.9, 24.5, 
     32.5, 35.2, 28.3, 98.5, 80.2, 85.1, 95.4, 56.7, 38.2),
    ('ALU002', '2025-01-01', 2, 22.3, 12.8, 44.2, 24.6, 56.8, 5, 1320, 2.1, 21.8,
     28.4, 30.1, 24.5, 88.3, 68.5, 72.4, 92.1, 50.3, 34.5);

-- ============================================
-- AULAS
-- ============================================

INSERT INTO AULA(PROFESSOR_ID, MODALIDADE, ESPACO, CAPACIDADE, INICIO, FIM, STATUS) VALUES 
    (1, 'MUSCULACAO', 'AREA_DE_PESO_LIVRE', 20, '2025-01-20 08:00:00', '2025-01-20 09:00:00', 'ATIVA'),
    (2, 'YOGA', 'SALA01_MULTIUSO', 15, '2025-01-20 10:00:00', '2025-01-20 11:00:00', 'ATIVA'),
    (3, 'SPINNING', 'SALA03_SPINNING', 25, '2025-01-20 18:00:00', '2025-01-20 19:00:00', 'ATIVA'),
    (2, 'PILATES', 'ESTUDIO_PILATES', 12, '2025-01-21 09:00:00', '2025-01-21 10:00:00', 'ATIVA'),
    (1, 'CROSSFIT', 'SALA02_MULTIUSO', 18, '2025-01-21 19:00:00', '2025-01-21 20:00:00', 'ATIVA');

-- Recorrência para aula de Yoga (toda Segunda, Quarta e Sexta)
INSERT INTO RECORRENCIA(AULA_ID, TIPO, DATA_FIM_RECORRENCIA) VALUES 
    (2, 'SEMANAL', '2025-06-30');

INSERT INTO RECORRENCIA_DIAS(RECORRENCIA_ID, DIA_DA_SEMANA) VALUES 
    (1, 'SEGUNDA'),
    (1, 'QUARTA'),
    (1, 'SEXTA');

-- Exceção: aula de yoga do dia 20/02 será reagendada
INSERT INTO OCORRENCIA_EXCECAO(AULA_ID, DATA_ORIGINAL_OCORRENCIA, CANCELADA, NOVO_INICIO, NOVO_FIM) VALUES 
    (2, '2025-02-20', FALSE, '2025-02-20 11:00:00', '2025-02-20 12:00:00');

-- ============================================
-- RESERVAS E LISTA DE ESPERA
-- ============================================

INSERT INTO RESERVA(AULA_ID, ALUNO_MATRICULA, STATUS) VALUES 
    (1, 'ALU001', 'CONFIRMADA'),
    (1, 'ALU002', 'CONFIRMADA'),
    (2, 'ALU001', 'CONFIRMADA'),
    (2, 'ALU003', 'CONFIRMADA'),
    (3, 'ALU002', 'CONFIRMADA'),
    (3, 'ALU004', 'CONFIRMADA');

-- Aluno na lista de espera
INSERT INTO LISTA_DE_ESPERA(AULA_ID, ALUNO_MATRICULA) VALUES 
    (4, 'ALU005');

-- ============================================
-- FREQUÊNCIA
-- ============================================

INSERT INTO FREQUENCIA(ALUNO_MATRICULA, AULA_ID, DATA_OCORRENCIA, STATUS) VALUES 
    ('ALU001', 1, '2025-01-15', 'PRESENTE'),
    ('ALU001', 2, '2025-01-16', 'PRESENTE'),
    ('ALU002', 1, '2025-01-15', 'PRESENTE'),
    ('ALU002', 3, '2025-01-17', 'FALTA'),
    ('ALU003', 2, '2025-01-16', 'PRESENTE');

-- ============================================
-- CHECK-INS
-- ============================================

INSERT INTO CHECKIN(ALUNO_MATRICULA, GUILDA_ID, PONTUACAO_TOTAL, MENSAGEM, URL_IMAGEM, 
    CONTEXTO_TIPO, CONTEXTO_AULA_ID) 
VALUES 
    ('ALU001', 1, 10, 'Treino intenso hoje! 💪', 'https://exemplo.com/foto1.jpg', 'AULA', 1),
    ('ALU002', 2, 10, 'Primeira aula de yoga, adorei!', 'https://exemplo.com/foto2.jpg', 'AULA', 2);

INSERT INTO CHECKIN(ALUNO_MATRICULA, GUILDA_ID, PONTUACAO_TOTAL, MENSAGEM, 
    CONTEXTO_TIPO, CONTEXTO_PLANO_TREINO_ID, CONTEXTO_LETRA_TREINO) 
VALUES 
    ('ALU001', 1, 15, 'Treino A concluído! Peito bombado!', 'TREINO', 1, 'TREINO_A');

-- ============================================
-- AVALIAÇÕES DE PROFESSORES
-- ============================================

INSERT INTO AVALIACAO(ALUNO_MATRICULA, PROFESSOR_ID, AULA_ID, DATA_OCORRENCIA_AULA, 
    NOTA_PONTUALIDADE, NOTA_DIDATICA, NOTA_ATENCAO, COMENTARIO) 
VALUES 
    ('ALU001', 1, 1, '2025-01-15', 5, 5, 5, 'Professor excelente! Explica muito bem os exercícios.'),
    ('ALU002', 2, 2, '2025-01-16', 5, 4, 5, 'Aula maravilhosa, muito tranquila e relaxante.');

-- ============================================
-- RANKINGS
-- ============================================

INSERT INTO RANKING(PERIODO) VALUES 
    ('SEMANAL'),
    ('MENSAL'),
    ('GERAL');

-- Ranking Semanal
INSERT INTO ITEM_RANKING(RANKING_ID, ALUNO_MATRICULA, PONTOS_FREQUENCIA, PONTOS_GUILDA, 
    PONTOS_PERFORMANCE, PONTUACAO_TOTAL, POSICAO, NUMERO_AULAS_PARTICIPADAS, MEDIA_PERFORMANCE, NUMERO_AVALIACOES) 
VALUES 
    (1, 'ALU004', 100, 50, 80, 230, 1, 5, 4.8, 3),
    (1, 'ALU001', 80, 40, 70, 190, 2, 4, 4.5, 2),
    (1, 'ALU002', 70, 35, 60, 165, 3, 3, 4.2, 2);

-- Ranking Mensal
INSERT INTO ITEM_RANKING(RANKING_ID, ALUNO_MATRICULA, PONTOS_FREQUENCIA, PONTOS_GUILDA, 
    PONTOS_PERFORMANCE, PONTUACAO_TOTAL, POSICAO, NUMERO_AULAS_PARTICIPADAS, MEDIA_PERFORMANCE, NUMERO_AVALIACOES) 
VALUES 
    (2, 'ALU004', 450, 200, 350, 1000, 1, 20, 4.7, 12),
    (2, 'ALU002', 380, 180, 290, 850, 2, 18, 4.5, 10),
    (2, 'ALU001', 350, 160, 270, 780, 3, 16, 4.3, 9),
    (2, 'ALU003', 300, 140, 220, 660, 4, 14, 4.1, 8),
    (2, 'ALU005', 200, 100, 150, 450, 5, 10, 3.8, 5);

-- Ranking Geral
INSERT INTO ITEM_RANKING(RANKING_ID, ALUNO_MATRICULA, PONTOS_FREQUENCIA, PONTOS_GUILDA, 
    PONTOS_PERFORMANCE, PONTUACAO_TOTAL, POSICAO, NUMERO_AULAS_PARTICIPADAS, MEDIA_PERFORMANCE, NUMERO_AVALIACOES) 
VALUES 
    (3, 'ALU004', 1800, 800, 1400, 4000, 1, 80, 4.8, 48),
    (3, 'ALU002', 1500, 700, 1200, 3400, 2, 72, 4.6, 42),
    (3, 'ALU001', 1400, 650, 1100, 3150, 3, 68, 4.4, 38),
    (3, 'ALU003', 1200, 600, 950, 2750, 4, 60, 4.2, 32),
    (3, 'ALU005', 800, 400, 600, 1800, 5, 40, 3.9, 20);

-- ============================================
-- TORNEIOS
-- ============================================

INSERT INTO TORNEIO(NOME, STATUS, DATA_INICIO, DATA_FIM, 
    PREMIO_PRIMEIRO_LUGAR_NOME, PREMIO_PRIMEIRO_LUGAR_URL_IMAGEM,
    PREMIO_SEGUNDO_LUGAR_NOME, PREMIO_SEGUNDO_LUGAR_URL_IMAGEM,
    PREMIO_TERCEIRO_LUGAR_NOME, PREMIO_TERCEIRO_LUGAR_URL_IMAGEM) 
VALUES 
    ('Desafio de Janeiro', 'ATIVO', '2025-01-01', '2025-01-31',
     'Kit Suplementos Premium', 'https://exemplo.com/premio1.png',
     'Mochila Esportiva', 'https://exemplo.com/premio2.png',
     'Garrafa Térmica', 'https://exemplo.com/premio3.png'),
    ('Campeonato Trimestral', 'PLANEJADO', '2025-04-01', '2025-06-30',
     'Personal Trainer (3 meses)', 'https://exemplo.com/premio_pt.png',
     'Avaliação Física Completa', 'https://exemplo.com/premio_av.png',
     'Camiseta Premium', 'https://exemplo.com/premio_cam.png');

-- Ranking final do torneio ativo
INSERT INTO TORNEIO_RANKING_FINAL(TORNEIO_ID, POSICAO, GUILDA_ID, PONTUACAO_NO_TORNEIO) VALUES 
    (1, 1, 1, 850),
    (1, 2, 2, 720);

-- ============================================
-- FIM DOS DADOS INICIAIS
-- ============================================

