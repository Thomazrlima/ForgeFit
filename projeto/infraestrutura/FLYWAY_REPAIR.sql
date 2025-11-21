-- ============================================
-- SCRIPT PARA CORRIGIR ERRO DE CHECKSUM DO FLYWAY
-- ============================================

-- OPÇÃO 1: Limpar completamente o histórico e recriar tudo
-- (Use esta opção se você quer recriar o banco do zero)

-- Dropar todas as tabelas
DROP TABLE IF EXISTS ITEM_RANKING CASCADE;
DROP TABLE IF EXISTS RANKING CASCADE;
DROP TABLE IF EXISTS CHECKIN CASCADE;
DROP TABLE IF EXISTS AVALIACAO CASCADE;
DROP TABLE IF EXISTS TORNEIO_RANKING_FINAL CASCADE;
DROP TABLE IF EXISTS TORNEIO CASCADE;
DROP TABLE IF EXISTS GUILDA_MEMBROS CASCADE;
DROP TABLE IF EXISTS GUILDA CASCADE;
DROP TABLE IF EXISTS FREQUENCIA CASCADE;
DROP TABLE IF EXISTS LISTA_DE_ESPERA CASCADE;
DROP TABLE IF EXISTS RESERVA CASCADE;
DROP TABLE IF EXISTS OCORRENCIA_EXCECAO CASCADE;
DROP TABLE IF EXISTS RECORRENCIA_DIAS CASCADE;
DROP TABLE IF EXISTS RECORRENCIA CASCADE;
DROP TABLE IF EXISTS AULA CASCADE;
DROP TABLE IF EXISTS ALUNO_PLANO_HISTORICO CASCADE;
DROP TABLE IF EXISTS ITEM_DE_EXERCICIO CASCADE;
DROP TABLE IF EXISTS TREINO_DIARIO CASCADE;
DROP TABLE IF EXISTS PLANO_DE_TREINO CASCADE;
DROP TABLE IF EXISTS AVALIACAO_FISICA CASCADE;
DROP TABLE IF EXISTS ALUNO CASCADE;
DROP TABLE IF EXISTS PROFESSOR CASCADE;

-- Dropar a tabela de histórico do Flyway
DROP TABLE IF EXISTS flyway_schema_history CASCADE;

-- Agora você pode rodar a aplicação novamente e o Flyway vai criar tudo do zero


-- ============================================
-- OPÇÃO 2: Apenas atualizar checksums (use se NÃO quer perder dados)
-- ============================================

/*
-- Atualizar checksum da versão 1
UPDATE flyway_schema_history 
SET checksum = -557115053 
WHERE version = '1';

-- Atualizar checksum da versão 2
UPDATE flyway_schema_history 
SET checksum = -1388335504 
WHERE version = '2';
*/

-- ============================================
-- INSTRUÇÕES
-- ============================================

-- 1. Se você quer RECRIAR TUDO DO ZERO (recomendado):
--    - Execute a OPÇÃO 1 (já está ativa acima)
--    - Rode a aplicação novamente
--    - O Flyway vai criar todas as tabelas e inserir os dados

-- 2. Se você quer MANTER OS DADOS EXISTENTES:
--    - Comente a OPÇÃO 1 (adicione /* */ em volta)
--    - Descomente a OPÇÃO 2 (remova /* */)
--    - Execute o script
--    - Rode a aplicação novamente

-- ============================================
