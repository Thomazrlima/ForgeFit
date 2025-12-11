import { useState } from "react";
import { Users, Dumbbell, Plus, Edit, Trash2, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Container, Header, Title, Subtitle, ContentGrid, AlunosSection, SectionTitle, SearchWrapper, AlunosList, AlunoCard, AlunoAvatar, AlunoInfo, AlunoNome, AlunoMatricula, AlunoPontuacao, TreinoSection, TreinoHeader, TreinoHeaderInfo, TreinoActions, EmptyState, EmptyIcon, EmptyText, TreinoDiariosGrid, TreinoDiarioCard, TreinoDiarioHeader, LetraBadge, TipoLabel, ExerciciosList, ExercicioItem, ExercicioNome, RepeticaoInfo, SeriesBadge, ValidadeInfo } from "./styles";
import { Button } from "../../components/common/Button";
import SearchBar from "../../components/common/SearchBar";
import CreateTreinoModal from "../../components/common/CreateTreinoModal";
import ConfirmModal from "../../components/common/ConfirmModal";
import { useUser } from "../../contexts/UserContext";
import { useToast } from "../../contexts/ToastContext";
import { alunosMock, treinosVigentesMock } from "./mockData";
import { type Aluno, type TreinoVigente, TipoDoTreinoLabels, ExercicioLabels } from "./types";

const Treinos = () => {
    const { user } = useUser();
    const { success, error: showError } = useToast();

    // Estado local mockado (em produção seria gerenciado via React Query)
    const [alunos] = useState<Aluno[]>(alunosMock);
    const [treinosVigentes, setTreinosVigentes] = useState<Map<number, TreinoVigente | null>>(treinosVigentesMock);

    const [alunoSelecionado, setAlunoSelecionado] = useState<Aluno | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [treinoEmEdicao, setTreinoEmEdicao] = useState<TreinoVigente | null>(null);
    const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

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

    const handleConfirmDelete = () => {
        if (!alunoSelecionado) return;

        const newMap = new Map(treinosVigentes);
        newMap.set(alunoSelecionado.id, null);
        setTreinosVigentes(newMap);
        setIsConfirmDeleteOpen(false);
        success("Treino excluído com sucesso!");
    };

    const handleSaveTreino = (treino: TreinoVigente) => {
        // Atualizar ou criar novo treino
        const newMap = new Map(treinosVigentes);
        newMap.set(treino.alunoId, treino);
        setTreinosVigentes(newMap);
        setIsCreateModalOpen(false);
        success(treinoEmEdicao ? "Treino atualizado com sucesso!" : "Treino criado com sucesso!");
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
                        {alunosFiltrados.map((aluno) => (
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
                        ))}

                        {alunosFiltrados.length === 0 && (
                            <EmptyState>
                                <EmptyText>Nenhum aluno encontrado</EmptyText>
                            </EmptyState>
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
