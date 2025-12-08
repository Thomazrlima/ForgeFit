-- Adiciona coluna POSICAO na tabela OCORRENCIA_EXCECAO
-- Esta coluna é necessária para o mapeamento JPA da entidade OcorrenciaExcecao

ALTER TABLE OCORRENCIA_EXCECAO 
ADD COLUMN POSICAO INTEGER;

COMMENT ON COLUMN OCORRENCIA_EXCECAO.POSICAO IS 'Posição/índice da ocorrência na série recorrente';
