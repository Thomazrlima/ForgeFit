import { useState, useEffect } from "react";
import { Calendar, Plus, Trash2, Dumbbell } from "lucide-react";
import Modal from "../Modal";
import InputField from "../InputField";
import { Button } from "../Button";
import { ModalContent, FormSection, SectionTitle, FormRow, TreinoDiariosList, TreinoDiarioCard, TreinoDiarioHeader, TreinoDiarioTitle, LetraBadge, DeleteTreinoDiarioButton, ExerciciosList, ExercicioItem, ExercicioRow, DeleteExercicioButton, AddButton, ModalFooter, ErrorMessage, HelperText, Select, Label, Input, FieldWrapper } from "./styles";
import { type Aluno, type TreinoVigente, type TreinoDiario, type ItemExercicio, type LetraTreino, TipoDoTreino, Exercicio, TipoDoTreinoLabels, ExercicioLabels } from "../../../pages/Treinos/types";

interface CreateTreinoModalProps {
    aluno: Aluno;
    treino?: TreinoVigente | null;
    professorId: number;
    onSave: (treino: TreinoVigente) => void;
    onClose: () => void;
}

const LETRAS_DISPONIVEIS: LetraTreino[] = ["A", "B", "C", "D", "E", "F", "G"];

const CreateTreinoModal = ({ aluno, treino, professorId, onSave, onClose }: CreateTreinoModalProps) => {
    const isEditMode = !!treino;

    // Estado do formulário
    const [validadeSugerida, setValidadeSugerida] = useState("");
    const [treinosDiarios, setTreinosDiarios] = useState<TreinoDiario[]>([]);
    const [errors, setErrors] = useState<string[]>([]);

    // Inicializar com dados do treino existente (modo edição)
    useEffect(() => {
        if (treino) {
            setValidadeSugerida(treino.validadeSugerida || "");
            setTreinosDiarios(treino.treinosDiarios);
        }
    }, [treino]);

    const handleAddTreinoDiario = () => {
        // Verificar letras já usadas
        const letrasUsadas = treinosDiarios.map((t) => t.letra);
        const proximaLetra = LETRAS_DISPONIVEIS.find((l) => !letrasUsadas.includes(l));

        if (!proximaLetra) {
            setErrors(["Limite de 7 treinos diários atingido (A-G)"]);
            return;
        }

        const novoTreino: TreinoDiario = {
            letra: proximaLetra,
            tipo: TipoDoTreino.CORPO_INTEIRO,
            exercicios: [],
        };

        setTreinosDiarios([...treinosDiarios, novoTreino]);
        setErrors([]);
    };

    const handleRemoveTreinoDiario = (letra: LetraTreino) => {
        setTreinosDiarios(treinosDiarios.filter((t) => t.letra !== letra));
    };

    const handleUpdateTreinoDiarioTipo = (letra: LetraTreino, tipo: TipoDoTreino) => {
        setTreinosDiarios(treinosDiarios.map((t) => (t.letra === letra ? { ...t, tipo } : t)));
    };

    const handleAddExercicio = (letra: LetraTreino) => {
        const novoExercicio: ItemExercicio = {
            exercicio: Exercicio.SUPINO_RETO,
            repeticao: {
                series: 3,
                contagem: "10-12 reps",
            },
        };

        setTreinosDiarios(treinosDiarios.map((t) => (t.letra === letra ? { ...t, exercicios: [...t.exercicios, novoExercicio] } : t)));
    };

    const handleRemoveExercicio = (letra: LetraTreino, idx: number) => {
        setTreinosDiarios(treinosDiarios.map((t) => (t.letra === letra ? { ...t, exercicios: t.exercicios.filter((_, i) => i !== idx) } : t)));
    };

    const handleUpdateExercicio = (letra: LetraTreino, idx: number, exercicio: Exercicio) => {
        setTreinosDiarios(
            treinosDiarios.map((t) =>
                t.letra === letra
                    ? {
                          ...t,
                          exercicios: t.exercicios.map((e, i) => (i === idx ? { ...e, exercicio } : e)),
                      }
                    : t,
            ),
        );
    };

    const handleUpdateSeries = (letra: LetraTreino, idx: number, series: number) => {
        setTreinosDiarios(
            treinosDiarios.map((t) =>
                t.letra === letra
                    ? {
                          ...t,
                          exercicios: t.exercicios.map((e, i) => (i === idx ? { ...e, repeticao: { ...e.repeticao, series } } : e)),
                      }
                    : t,
            ),
        );
    };

    const handleUpdateContagem = (letra: LetraTreino, idx: number, contagem: string) => {
        setTreinosDiarios(
            treinosDiarios.map((t) =>
                t.letra === letra
                    ? {
                          ...t,
                          exercicios: t.exercicios.map((e, i) => (i === idx ? { ...e, repeticao: { ...e.repeticao, contagem } } : e)),
                      }
                    : t,
            ),
        );
    };

    const validate = (): boolean => {
        const newErrors: string[] = [];

        if (treinosDiarios.length === 0) {
            newErrors.push("Adicione pelo menos um treino diário");
        }

        treinosDiarios.forEach((td) => {
            if (td.exercicios.length === 0) {
                newErrors.push(`Treino ${td.letra}: adicione pelo menos um exercício`);
            }
        });

        setErrors(newErrors);
        return newErrors.length === 0;
    };

    const handleSave = () => {
        if (!validate()) return;

        const treinoParaSalvar: TreinoVigente = {
            id: treino?.id || Date.now(), // Mock: usar timestamp como ID
            professorId,
            alunoId: aluno.id,
            validadeSugerida: validadeSugerida || undefined,
            treinosDiarios,
            dataCriacao: treino?.dataCriacao || new Date().toISOString(),
        };

        onSave(treinoParaSalvar);
    };

    return (
        <Modal isOpen={true} onClose={onClose} title={isEditMode ? `Editar Treino - ${aluno.nome}` : `Criar Treino - ${aluno.nome}`}>
            <ModalContent>
                {/* Validade Sugerida */}
                <FormSection>
                    <SectionTitle>
                        <Calendar size={20} />
                        Informações Gerais
                    </SectionTitle>
                    <FormRow>
                        <InputField label="Validade Sugerida (Opcional)" type="date" placeholder="" id="validade-sugerida" value={validadeSugerida} onChange={(e) => setValidadeSugerida(e.target.value)} />
                    </FormRow>
                    <HelperText>Defina uma data de validade para orientar quando o treino deve ser reavaliado</HelperText>
                </FormSection>

                {/* Treinos Diários */}
                <FormSection>
                    <SectionTitle>
                        <Dumbbell size={20} />
                        Treinos Diários ({treinosDiarios.length}/7)
                    </SectionTitle>

                    <TreinoDiariosList>
                        {treinosDiarios.map((treinoDiario) => (
                            <TreinoDiarioCard key={treinoDiario.letra}>
                                <TreinoDiarioHeader>
                                    <TreinoDiarioTitle>
                                        <LetraBadge>{treinoDiario.letra}</LetraBadge>
                                        <FieldWrapper style={{ flex: 1 }}>
                                            <Label htmlFor={`tipo-${treinoDiario.letra}`}>Tipo do Treino</Label>
                                            <Select id={`tipo-${treinoDiario.letra}`} value={treinoDiario.tipo} onChange={(e) => handleUpdateTreinoDiarioTipo(treinoDiario.letra, e.target.value as TipoDoTreino)}>
                                                {Object.values(TipoDoTreino).map((tipo) => (
                                                    <option key={tipo} value={tipo}>
                                                        {TipoDoTreinoLabels[tipo]}
                                                    </option>
                                                ))}
                                            </Select>
                                        </FieldWrapper>
                                    </TreinoDiarioTitle>
                                    <DeleteTreinoDiarioButton onClick={() => handleRemoveTreinoDiario(treinoDiario.letra)} title="Remover treino diário">
                                        <Trash2 size={18} />
                                    </DeleteTreinoDiarioButton>
                                </TreinoDiarioHeader>

                                <ExerciciosList>
                                    {treinoDiario.exercicios.map((item, idx) => (
                                        <ExercicioItem key={idx}>
                                            <ExercicioRow>
                                                <FieldWrapper>
                                                    <Label htmlFor={`ex-${treinoDiario.letra}-${idx}`}>Exercício</Label>
                                                    <Select id={`ex-${treinoDiario.letra}-${idx}`} value={item.exercicio} onChange={(e) => handleUpdateExercicio(treinoDiario.letra, idx, e.target.value as Exercicio)}>
                                                        {Object.values(Exercicio).map((ex) => (
                                                            <option key={ex} value={ex}>
                                                                {ExercicioLabels[ex]}
                                                            </option>
                                                        ))}
                                                    </Select>
                                                </FieldWrapper>

                                                <FieldWrapper>
                                                    <Label htmlFor={`series-${treinoDiario.letra}-${idx}`}>Séries</Label>
                                                    <Input id={`series-${treinoDiario.letra}-${idx}`} type="number" min="1" max="10" value={String(item.repeticao.series)} onChange={(e) => handleUpdateSeries(treinoDiario.letra, idx, parseInt(e.target.value) || 1)} />
                                                </FieldWrapper>

                                                <FieldWrapper>
                                                    <Label htmlFor={`reps-${treinoDiario.letra}-${idx}`}>Repetições</Label>
                                                    <Input id={`reps-${treinoDiario.letra}-${idx}`} type="text" placeholder="Ex: 10-12 reps" value={item.repeticao.contagem} onChange={(e) => handleUpdateContagem(treinoDiario.letra, idx, e.target.value)} />
                                                </FieldWrapper>

                                                <DeleteExercicioButton onClick={() => handleRemoveExercicio(treinoDiario.letra, idx)} title="Remover exercício">
                                                    <Trash2 size={18} />
                                                </DeleteExercicioButton>
                                            </ExercicioRow>
                                        </ExercicioItem>
                                    ))}

                                    <AddButton onClick={() => handleAddExercicio(treinoDiario.letra)}>
                                        <Plus size={18} />
                                        Adicionar Exercício
                                    </AddButton>
                                </ExerciciosList>
                            </TreinoDiarioCard>
                        ))}
                    </TreinoDiariosList>

                    <AddButton onClick={handleAddTreinoDiario} disabled={treinosDiarios.length >= 7} style={{ marginTop: "1rem" }}>
                        <Plus size={18} />
                        Adicionar Treino Diário
                    </AddButton>
                </FormSection>

                {/* Errors */}
                {errors.length > 0 && (
                    <FormSection>
                        {errors.map((err, idx) => (
                            <ErrorMessage key={idx}>• {err}</ErrorMessage>
                        ))}
                    </FormSection>
                )}
            </ModalContent>

            <ModalFooter>
                <Button variant="secondary" onClick={onClose}>
                    Cancelar
                </Button>
                <Button onClick={handleSave}>{isEditMode ? "Atualizar Treino" : "Criar Treino"}</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTreinoModal;
