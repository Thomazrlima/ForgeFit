import { useMemo } from "react";
import { Dumbbell, Calendar } from "lucide-react";
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
import { treinosVigentesMock } from "../Treinos/mockData";
import { TipoDoTreinoLabels, ExercicioLabels } from "../Treinos/types";
import type { TreinoVigente } from "../Treinos/types";

const MeuTreino = () => {
    const { user } = useUser();

    // Mock: treino fixo para qualquer estudante logado
    const treinoAtual: TreinoVigente | null = useMemo(() => {
        if (!user || user.role !== "student") return null;
        
        // Retornar sempre o primeiro treino do mock para qualquer estudante
        const primeiroAlunoComTreino = Array.from(treinosVigentesMock.values())[0];
        return primeiroAlunoComTreino || null;
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

            {!treinoAtual ? (
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
