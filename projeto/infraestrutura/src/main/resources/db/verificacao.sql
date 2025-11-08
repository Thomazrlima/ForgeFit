-- Script de verificação do banco de dados ForgeFit
-- Execute este script para verificar se as tabelas foram criadas corretamente

-- Verificar todas as tabelas
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public'
ORDER BY table_name;

-- Contar registros em cada tabela
SELECT 
    'PROFESSOR' as tabela, COUNT(*) as registros FROM PROFESSOR
UNION ALL
SELECT 'ALUNO', COUNT(*) FROM ALUNO
UNION ALL
SELECT 'AVALIACAO_FISICA', COUNT(*) FROM AVALIACAO_FISICA
UNION ALL
SELECT 'AULA', COUNT(*) FROM AULA
UNION ALL
SELECT 'RECORRENCIA', COUNT(*) FROM RECORRENCIA
UNION ALL
SELECT 'RECORRENCIA_DIAS', COUNT(*) FROM RECORRENCIA_DIAS
UNION ALL
SELECT 'RESERVA', COUNT(*) FROM RESERVA
UNION ALL
SELECT 'GUILDA', COUNT(*) FROM GUILDA
UNION ALL
SELECT 'GUILDA_MEMBROS', COUNT(*) FROM GUILDA_MEMBROS;

-- Verificar versões do Flyway
SELECT * FROM flyway_schema_history ORDER BY installed_rank;
