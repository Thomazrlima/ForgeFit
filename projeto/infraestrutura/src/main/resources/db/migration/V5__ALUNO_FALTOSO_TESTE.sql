-- Script para teste de verificação de frequência
-- Cria aluno com 3 faltas nos últimos 30 dias

-- Inserir aluno teste (ID 41 corresponde ao usuário mock criado)
INSERT INTO ALUNO (MATRICULA, USER_ID, CPF, NOME, DATA_NASCIMENTO, GUILDA_ID, CREDITOS, PONTUACAO_TOTAL, STATUS) 
VALUES (
    'ALU-TESTE-001',
    '41',
    '99955544433',
    'Carlos Faltoso',
    '1995-03-15',
    (SELECT ID FROM GUILDA LIMIT 1),
    20,
    0,
    'ATIVO'
);

-- Inserir 3 faltas nos últimos 30 dias para o aluno teste
INSERT INTO FREQUENCIA (ALUNO_MATRICULA, AULA_ID, STATUS, DATA_OCORRENCIA)
VALUES 
    ('ALU-TESTE-001', (SELECT ID FROM AULA LIMIT 1), 'FALTA', CURRENT_DATE - INTERVAL '20 days'),
    ('ALU-TESTE-001', (SELECT ID FROM AULA LIMIT 1), 'FALTA', CURRENT_DATE - INTERVAL '10 days'),
    ('ALU-TESTE-001', (SELECT ID FROM AULA LIMIT 1), 'FALTA', CURRENT_DATE - INTERVAL '5 days');
