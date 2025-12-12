import { useEffect, useState } from "react";
import { Dumbbell, Calendar, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import {
    Container,
    Header,
    HeaderContent,
    Title,
    ValidadeInfo,
    TreinoDiariosGrid,
    TreinoDiarioCard,
    TreinoDiarioHeader,
    LetraBadge,
    TipoLabel,
    ExerciciosList,
    ExercicioItem,
    ExercicioNome,
    RepeticaoInfo,
    SeriesBadge,
    EmptyState,
    EmptyIcon,
    EmptyText,
    EmptySubtext,
} from "./styles";
import { useUser } from "../../contexts/UserContext";
import { TipoDoTreinoLabels, ExercicioLabels } from "../Treinos/types";
import type { TreinoVigente, TreinoDiario, LetraTreino, TipoDoTreino, Exercicio } from "../Treinos/types";
import { buscarPlanoAtivoPorAluno, type PlanoTreino } from "../../services/treinoService";

// Função para converter PlanoTreino da API para TreinoVigente usado na UI
const converterPlanoParaTreinoVigente = (plano: PlanoTreino, alunoId: number): TreinoVigente => {
    const treinosDiarios: TreinoDiario[] = plano.treinos.map(treino => ({
        letra: treino.letra as LetraTreino,
        tipo: treino.tipo as TipoDoTreino,
        exercicios: treino.exercicios.map(ex => ({
            exercicio: ex.exercicio as Exercicio,
            repeticao: {
                series: ex.series,
                contagem: ex.contagem,
            },
        })),
    }));

    return {
        id: plano.id,
        professorId: plano.professorId,
        alunoId: alunoId,
        validadeSugerida: plano.dataValidadeSugerida,
        treinosDiarios: treinosDiarios,
        dataCriacao: plano.dataCriacao,
    };
};

const MeuTreino = () => {
    const { user } = useUser();
    const [treinoAtual, setTreinoAtual] = useState<TreinoVigente | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const carregarTreino = async () => {
            if (!user || user.role !== "student" || !user.matricula) {
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);
                const plano = await buscarPlanoAtivoPorAluno(user.matricula);
                
                if (plano) {
                    const treinoVigente = converterPlanoParaTreinoVigente(plano, user.id);
                    setTreinoAtual(treinoVigente);
                } else {
                    setTreinoAtual(null);
                }
            } catch (err) {
                console.error("Erro ao carregar treino:", err);
                setError("Erro ao carregar seu treino. Tente novamente mais tarde.");
            } finally {
                setLoading(false);
            }
        };

        carregarTreino();
    }, [user]);

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
                <HeaderContent>
                    <Title>Meu Treino</Title>
                    <p>Veja seu plano de treino completo e acompanhe seus exercícios</p>
                </HeaderContent>
            </Header>

            {loading ? (
                <EmptyState>
                    <EmptyIcon>
                        <Loader2 size={80} className="animate-spin" />
                    </EmptyIcon>
                    <EmptyText>Carregando seu treino...</EmptyText>
                </EmptyState>
            ) : error ? (
                <EmptyState>
                    <EmptyIcon>
                        <Dumbbell size={80} />
                    </EmptyIcon>
                    <EmptyText>Erro ao carregar treino</EmptyText>
                    <EmptySubtext>{error}</EmptySubtext>
                </EmptyState>
            ) : !treinoAtual ? (
                <EmptyState>
                    <EmptyIcon>
                        <Dumbbell size={80} />
                    </EmptyIcon>
                    <EmptyText>Você ainda não tem um treino cadastrado</EmptyText>
                    <EmptySubtext>
                        Seu professor ainda não criou um plano de treino para você. Entre em
                        contato com ele para definir sua rotina de exercícios.
                    </EmptySubtext>
                </EmptyState>
            ) : (
                <>
                    {treinoAtual.validadeSugerida && (
                        <ValidadeInfo>
                            <Calendar size={20} />
                            <span>
                                Validade sugerida: {formatDate(treinoAtual.validadeSugerida)}
                            </span>
                        </ValidadeInfo>
                    )}

                    <TreinoDiariosGrid>
                        {treinoAtual.treinosDiarios.map((treinoDiario, index) => (
                            <motion.div
                                key={treinoDiario.letra}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <TreinoDiarioCard>
                                    <TreinoDiarioHeader>
                                        <LetraBadge>{treinoDiario.letra}</LetraBadge>
                                        <TipoLabel>
                                            {TipoDoTreinoLabels[treinoDiario.tipo]}
                                        </TipoLabel>
                                    </TreinoDiarioHeader>

                                    <ExerciciosList>
                                        {treinoDiario.exercicios.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    duration: 0.2,
                                                    delay: index * 0.1 + idx * 0.05,
                                                }}
                                            >
                                                <ExercicioItem>
                                                    <ExercicioNome>
                                                        {ExercicioLabels[item.exercicio]}
                                                    </ExercicioNome>
                                                    <RepeticaoInfo>
                                                        <SeriesBadge>
                                                            {item.repeticao.series}x
                                                        </SeriesBadge>
                                                        <span>{item.repeticao.contagem}</span>
                                                    </RepeticaoInfo>
                                                </ExercicioItem>
                                            </motion.div>
                                        ))}
                                    </ExerciciosList>
                                </TreinoDiarioCard>
                            </motion.div>
                        ))}
                    </TreinoDiariosGrid>
                </>
            )}
        </Container>
    );
};

export default MeuTreino;
