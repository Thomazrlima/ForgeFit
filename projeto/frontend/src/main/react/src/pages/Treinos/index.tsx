import { useState, useEffect } from "react";
import { Users, Dumbbell, Plus, Edit, Trash2, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Container, Header, Title, Subtitle, ContentGrid, AlunosSection, SectionTitle, SearchWrapper, AlunosList, AlunoCard, AlunoAvatar, AlunoInfo, AlunoNome, AlunoMatricula, AlunoPontuacao, TreinoSection, TreinoHeader, TreinoHeaderInfo, TreinoActions, EmptyState, EmptyIcon, EmptyText, TreinoDiariosGrid, TreinoDiarioCard, TreinoDiarioHeader, LetraBadge, TipoLabel, ExerciciosList, ExercicioItem, ExercicioNome, RepeticaoInfo, SeriesBadge, ValidadeInfo } from "./styles";
import { Button } from "../../components/common/Button";
import SearchBar from "../../components/common/SearchBar";
import CreateTreinoModal from "../../components/common/CreateTreinoModal";
import ConfirmModal from "../../components/common/ConfirmModal";
import { useUser } from "../../contexts/UserContext";
import { useToast } from "../../contexts/ToastContext";
import { type Aluno, type TreinoVigente, TipoDoTreinoLabels, ExercicioLabels } from "./types";
import { buscarAlunos } from "../../services/avaliacaoFisicaService";
import { buscarPlanoAtivoPorAluno, criarPlanoTreino, adicionarTreino, atualizarTreino, excluirTreino, atribuirPlanoAoAluno, removerPlanoDoAluno } from "../../services/treinoService";
import type { PlanoTreino, CriarPlanoRequest, AtualizarTreinoRequest } from "../../services/treinoService";

const Treinos = () => {
    const { user } = useUser();
    const { success, error: showError } = useToast();

    // Estado local
    const [alunos, setAlunos] = useState<Aluno[]>([]);
    const [isLoadingAlunos, setIsLoadingAlunos] = useState(false);
    const [treinosVigentes, setTreinosVigentes] = useState<Map<number, TreinoVigente | null>>(new Map());
    const [isLoadingTreino, setIsLoadingTreino] = useState(false);

    const [alunoSelecionado, setAlunoSelecionado] = useState<Aluno | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [treinoEmEdicao, setTreinoEmEdicao] = useState<TreinoVigente | null>(null);
    const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

    // Função auxiliar para converter PlanoTreino do backend em TreinoVigente
    const converterPlanoParaTreino = (plano: PlanoTreino, alunoId: number): TreinoVigente => {
        return {
            id: plano.id,
            professorId: plano.professorId,
            alunoId,
            validadeSugerida: plano.dataValidadeSugerida,
            dataCriacao: plano.dataCriacao,
            treinosDiarios: plano.treinos.map((t) => ({
                letra: t.letra as any,
                tipo: t.tipo as any,
                exercicios: t.exercicios.map((e) => ({
                    exercicio: e.exercicio as any,
                    repeticao: {
                        series: e.series,
                        contagem: e.contagem,
                    },
                })),
            })),
        };
    };

    // Carregar alunos ao montar componente
    useEffect(() => {
        const carregarAlunos = async () => {
            setIsLoadingAlunos(true);
            try {
                const response = await buscarAlunos();
                if (response.sucesso && response.dados) {
                    setAlunos(response.dados);
                } else {
                    showError(response.mensagem || "Erro ao carregar alunos");
                }
            } catch (error) {
                console.error("Erro ao carregar alunos:", error);
                showError("Erro ao carregar lista de alunos");
            } finally {
                setIsLoadingAlunos(false);
            }
        };

        carregarAlunos();
    }, []);

    // Carregar treino ao selecionar aluno
    useEffect(() => {
        if (!alunoSelecionado) return;

        // Verificar se já temos o treino em cache
        if (treinosVigentes.has(alunoSelecionado.id)) {
            return;
        }

        const carregarTreino = async () => {
            setIsLoadingTreino(true);
            try {
                const plano = await buscarPlanoAtivoPorAluno(alunoSelecionado.matricula);
                const newMap = new Map(treinosVigentes);
                if (plano) {
                    newMap.set(alunoSelecionado.id, converterPlanoParaTreino(plano, alunoSelecionado.id));
                } else {
                    newMap.set(alunoSelecionado.id, null);
                }
                setTreinosVigentes(newMap);
            } catch (error) {
                console.error("Erro ao carregar treino:", error);
                showError("Erro ao carregar treino do aluno");
            } finally {
                setIsLoadingTreino(false);
            }
        };

        carregarTreino();
    }, [alunoSelecionado]);

    // Filtrar alunos por busca
    const alunosFiltrados = alunos.filter((aluno) => aluno.nome.toLowerCase().includes(searchQuery.toLowerCase()) || aluno.matricula.toLowerCase().includes(searchQuery.toLowerCase()));

    // Treino do aluno selecionado
    const treinoAtual = alunoSelecionado ? treinosVigentes.get(alunoSelecionado.id) || null : null;

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleSelectAluno = (aluno: Aluno) => {
        setAlunoSelecionado(aluno);
    };

    const handleCreateTreino = () => {
        if (!alunoSelecionado) {
            showError("Selecione um aluno primeiro");
            return;
        }
        setTreinoEmEdicao(null);
        setIsCreateModalOpen(true);
    };

    const handleEditTreino = () => {
        if (!treinoAtual) return;
        setTreinoEmEdicao(treinoAtual);
        setIsCreateModalOpen(true);
    };

    const handleDeleteTreino = () => {
        if (!alunoSelecionado || !treinoAtual) return;
        setIsConfirmDeleteOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!alunoSelecionado || !treinoAtual) return;

        try {
            // Remover a associação do plano com o aluno no backend
            await removerPlanoDoAluno(alunoSelecionado.matricula);
            
            // Atualizar cache local
            const newMap = new Map(treinosVigentes);
            newMap.set(alunoSelecionado.id, null);
            setTreinosVigentes(newMap);
            setIsConfirmDeleteOpen(false);
            success("Treino excluído com sucesso!");
        } catch (error) {
            console.error("Erro ao excluir treino:", error);
            showError("Erro ao excluir treino");
        }
    };

    const handleSaveTreino = async (treino: TreinoVigente) => {
        if (!alunoSelecionado || !user) return;

        try {
            if (treinoEmEdicao) {
                // Modo edição: atualizar treinos existentes
                // Para cada treino diário, verificar se já existe no backend
                const planoExistente = treinosVigentes.get(alunoSelecionado.id);
                if (planoExistente && planoExistente.id) {
                    // Identificar letras atuais e novas
                    const letrasAntigas = new Set(planoExistente.treinosDiarios.map(t => t.letra));
                    const letrasNovas = new Set(treino.treinosDiarios.map(t => t.letra));
                    
                    // Excluir treinos que foram removidos
                    for (const letraAntiga of letrasAntigas) {
                        if (!letrasNovas.has(letraAntiga)) {
                            await excluirTreino(planoExistente.id, letraAntiga);
                        }
                    }
                    
                    // Atualizar ou adicionar cada treino diário
                    for (const treinoDiario of treino.treinosDiarios) {
                        const requestData: AtualizarTreinoRequest = {
                            letra: treinoDiario.letra,
                            tipo: treinoDiario.tipo,
                            exercicios: treinoDiario.exercicios.map((e) => ({
                                exercicio: e.exercicio,
                                series: e.repeticao.series,
                                contagem: e.repeticao.contagem,
                            })),
                        };
                        
                        if (letrasAntigas.has(treinoDiario.letra)) {
                            // Atualizar treino existente
                            await atualizarTreino(planoExistente.id, requestData);
                        } else {
                            // Adicionar novo treino
                            await adicionarTreino(planoExistente.id, requestData);
                        }
                    }
                    
                    // Recarregar o plano atualizado
                    const planoAtualizado = await buscarPlanoAtivoPorAluno(alunoSelecionado.matricula);
                    const newMap = new Map(treinosVigentes);
                    if (planoAtualizado) {
                        newMap.set(alunoSelecionado.id, converterPlanoParaTreino(planoAtualizado, alunoSelecionado.id));
                    }
                    setTreinosVigentes(newMap);
                }
            } else {
                // Modo criação: criar novo plano
                const requestData: CriarPlanoRequest = {
                    professorId: user.id,
                    validadeSugerida: treino.validadeSugerida,
                    treinos: treino.treinosDiarios.map((t) => ({
                        letra: t.letra,
                        tipo: t.tipo,
                        exercicios: t.exercicios.map((e) => ({
                            exercicio: e.exercicio,
                            series: e.repeticao.series,
                            contagem: e.repeticao.contagem,
                        })),
                    })),
                };
                
                const novoPlano = await criarPlanoTreino(requestData);
                
                // Atribuir o plano ao aluno
                await atribuirPlanoAoAluno(novoPlano.id, alunoSelecionado.matricula);
                
                // Atualizar cache com o plano criado
                const newMap = new Map(treinosVigentes);
                newMap.set(alunoSelecionado.id, converterPlanoParaTreino(novoPlano, alunoSelecionado.id));
                setTreinosVigentes(newMap);
            }

            setIsCreateModalOpen(false);
            success(treinoEmEdicao ? "Treino atualizado com sucesso!" : "Treino criado com sucesso!");
        } catch (error) {
            console.error("Erro ao salvar treino:", error);
            showError("Erro ao salvar treino no banco de dados");
        }
    };

    const formatDate = (dateString: string) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString("pt-BR");
        } catch {
            return dateString;
        }
    };

    return (
        <Container>
            <Header>
                <Title>Gestão de Treinos</Title>
                <Subtitle>Crie e gerencie treinos personalizados para seus alunos</Subtitle>
            </Header>

            <ContentGrid>
                {/* Lista de Alunos */}
                <AlunosSection>
                    <SectionTitle>
                        <Users size={24} />
                        Alunos ({alunosFiltrados.length})
                    </SectionTitle>

                    <SearchWrapper>
                        <SearchBar placeholder="Buscar aluno..." onSearch={handleSearch} />
                    </SearchWrapper>

                    <AlunosList>
                        {isLoadingAlunos ? (
                            <EmptyState>
                                <EmptyText>Carregando alunos...</EmptyText>
                            </EmptyState>
                        ) : alunosFiltrados.length === 0 ? (
                            <EmptyState>
                                <EmptyText>Nenhum aluno encontrado</EmptyText>
                            </EmptyState>
                        ) : (
                            alunosFiltrados.map((aluno) => (
                            <motion.div key={aluno.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                                <AlunoCard $isSelected={alunoSelecionado?.id === aluno.id} onClick={() => handleSelectAluno(aluno)}>
                                    <AlunoAvatar src={aluno.avatar || `https://i.pravatar.cc/150?img=${aluno.id}`} alt={aluno.nome} />
                                    <AlunoInfo>
                                        <AlunoNome>{aluno.nome}</AlunoNome>
                                        <AlunoMatricula>Mat: {aluno.matricula}</AlunoMatricula>
                                    </AlunoInfo>
                                    {aluno.pontuacao !== undefined && <AlunoPontuacao>{aluno.pontuacao} pts</AlunoPontuacao>}
                                </AlunoCard>
                            </motion.div>
                        ))
                        )}
                    </AlunosList>
                </AlunosSection>

                {/* Detalhes do Treino */}
                <TreinoSection>
                    {!alunoSelecionado ? (
                        <EmptyState>
                            <EmptyIcon>
                                <Dumbbell size={64} />
                            </EmptyIcon>
                            <EmptyText>Selecione um aluno para visualizar ou criar um treino</EmptyText>
                        </EmptyState>
                    ) : isLoadingTreino ? (
                        <EmptyState>
                            <EmptyIcon>
                                <Dumbbell size={64} />
                            </EmptyIcon>
                            <EmptyText>Carregando treino...</EmptyText>
                        </EmptyState>
                    ) : !treinoAtual ? (
                        <EmptyState>
                            <EmptyIcon>
                                <Dumbbell size={64} />
                            </EmptyIcon>
                            <EmptyText>{alunoSelecionado.nome} ainda não possui um treino vigente</EmptyText>
                            <Button onClick={handleCreateTreino}>
                                <Plus size={20} />
                                Criar Treino
                            </Button>
                        </EmptyState>
                    ) : (
                        <>
                            <TreinoHeader>
                                <TreinoHeaderInfo>
                                    <SectionTitle>
                                        <Dumbbell size={24} />
                                        Treino de {alunoSelecionado.nome}
                                    </SectionTitle>
                                </TreinoHeaderInfo>
                                <TreinoActions>
                                    <Button variant="secondary" onClick={handleEditTreino}>
                                        <Edit size={18} />
                                        Editar
                                    </Button>
                                    <Button variant="secondary" onClick={handleDeleteTreino}>
                                        <Trash2 size={18} />
                                        Excluir
                                    </Button>
                                </TreinoActions>
                            </TreinoHeader>

                            {treinoAtual.validadeSugerida && (
                                <ValidadeInfo>
                                    <Calendar size={16} />
                                    Validade sugerida: {formatDate(treinoAtual.validadeSugerida)}
                                </ValidadeInfo>
                            )}

                            <TreinoDiariosGrid>
                                {treinoAtual.treinosDiarios.map((treinoDiario) => (
                                    <motion.div key={treinoDiario.letra} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                                        <TreinoDiarioCard>
                                            <TreinoDiarioHeader>
                                                <LetraBadge>{treinoDiario.letra}</LetraBadge>
                                                <TipoLabel>{TipoDoTreinoLabels[treinoDiario.tipo]}</TipoLabel>
                                            </TreinoDiarioHeader>

                                            <ExerciciosList>
                                                {treinoDiario.exercicios.map((item, idx) => (
                                                    <ExercicioItem key={idx}>
                                                        <ExercicioNome>{ExercicioLabels[item.exercicio]}</ExercicioNome>
                                                        <RepeticaoInfo>
                                                            <SeriesBadge>{item.repeticao.series}x</SeriesBadge>
                                                            {item.repeticao.contagem}
                                                        </RepeticaoInfo>
                                                    </ExercicioItem>
                                                ))}
                                            </ExerciciosList>
                                        </TreinoDiarioCard>
                                    </motion.div>
                                ))}
                            </TreinoDiariosGrid>
                        </>
                    )}
                </TreinoSection>
            </ContentGrid>

            {/* TODO: Modal de criação/edição será implementado a seguir */}
            {isCreateModalOpen && user && <CreateTreinoModal aluno={alunoSelecionado!} treino={treinoEmEdicao} professorId={user.id} onSave={handleSaveTreino} onClose={() => setIsCreateModalOpen(false)} />}

            {/* Modal de confirmação de exclusão */}
            {isConfirmDeleteOpen && alunoSelecionado && <ConfirmModal isOpen={isConfirmDeleteOpen} title="Excluir Treino" message={`Tem certeza que deseja excluir o treino de ${alunoSelecionado.nome}? Esta ação não pode ser desfeita.`} confirmLabel="Excluir" cancelLabel="Cancelar" onConfirm={handleConfirmDelete} onCancel={() => setIsConfirmDeleteOpen(false)} />}
        </Container>
    );
};

export default Treinos;
