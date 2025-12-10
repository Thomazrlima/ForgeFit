-- ============================================
-- FORGEFIT - Adicionar constraint UNIQUE em USER_ID
-- Correção: USER_ID deve ser único para evitar duplicação
-- ============================================

-- Identificar e exibir registros duplicados para análise
-- (Este SELECT não afeta o banco, apenas para log)
-- SELECT USER_ID, COUNT(*) as total 
-- FROM ALUNO 
-- WHERE USER_ID IS NOT NULL 
-- GROUP BY USER_ID 
-- HAVING COUNT(*) > 1;

-- Remover registros duplicados mantendo apenas o primeiro por USER_ID
-- Usa subconsulta com MIN(MATRICULA) para garantir consistência
DELETE FROM ALUNO 
WHERE MATRICULA IN (
    SELECT a1.MATRICULA
    FROM ALUNO a1
    WHERE EXISTS (
        SELECT 1 
        FROM ALUNO a2 
        WHERE a2.USER_ID = a1.USER_ID 
        AND a2.MATRICULA < a1.MATRICULA
    )
);

-- Adicionar constraint UNIQUE em ALUNO.USER_ID
-- Isso impedirá duplicações futuras
ALTER TABLE ALUNO ADD CONSTRAINT uk_aluno_user_id UNIQUE (USER_ID);

-- Adicionar constraint UNIQUE em PROFESSOR.USER_ID
ALTER TABLE PROFESSOR ADD CONSTRAINT uk_professor_user_id UNIQUE (USER_ID);

COMMENT ON CONSTRAINT uk_aluno_user_id ON ALUNO IS 'Garantir que cada usuário tenha apenas um registro de aluno';
COMMENT ON CONSTRAINT uk_professor_user_id ON PROFESSOR IS 'Garantir que cada usuário tenha apenas um registro de professor';
