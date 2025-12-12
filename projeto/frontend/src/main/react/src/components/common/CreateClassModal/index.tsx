import { useState, useEffect } from "react";
import { Calendar, Users, MapPin, Clock, Tag, Repeat } from "lucide-react";
import Modal, { ModalAction } from "../Modal";
import { useToast } from "../../../contexts/ToastContext";
import { ModalContent, FormGrid, FormRow, FormGroup, FullWidthFormGroup, TwoColumnRow, ThreeColumnRow, Label, Input, Select, FormSection, DaysOfWeekContainer, DayCheckbox, DayLabel } from "./styles";
import type { Class } from "../../../pages/Aulas/mockData";

export enum TipoAula {
    UNICA = "UNICA",
    SEMANAL = "SEMANAL",
    MENSAL = "MENSAL",
    SEMESTRAL = "SEMESTRAL",
    ANUAL = "ANUAL",
}

export enum Modalidade {
    MUSCULACAO = "MUSCULACAO",
    SPINNING = "SPINNING",
    YOGA = "YOGA",
    BOXE = "BOXE",
    CROSSFIT = "CROSSFIT",
    CROSS_TRAINING = "CROSS_TRAINING",
    PILATES = "PILATES",
    PILATES_FUNCIONAL = "PILATES_FUNCIONAL",
    YOGA_AVANCADO = "YOGA_AVANCADO",
    ZUMBA = "ZUMBA",
    FUNCIONAL = "FUNCIONAL",
    JIUJITSU = "JIUJITSU",
    MUAYTHAI = "MUAYTHAI",
    DANCA = "DANCA",
    ALONGAMENTO = "ALONGAMENTO",
}

export enum Espaco {
    SALA01_MULTIUSO = "SALA01_MULTIUSO",
    SALA02_MULTIUSO = "SALA02_MULTIUSO",
    SALA03_SPINNING = "SALA03_SPINNING",
    ESTUDIO_PILATES = "ESTUDIO_PILATES",
    AREA_DE_LUTAS = "AREA_DE_LUTAS",
    AREA_DE_PESO_LIVRE = "AREA_DE_PESO_LIVRE",
}

export const modalidadeLabels: Record<Modalidade, string> = {
    [Modalidade.MUSCULACAO]: "Musculação",
    [Modalidade.SPINNING]: "Spinning",
    [Modalidade.YOGA]: "Yoga",
    [Modalidade.BOXE]: "Boxe",
    [Modalidade.CROSSFIT]: "Crossfit",
    [Modalidade.CROSS_TRAINING]: "Cross Training",
    [Modalidade.PILATES]: "Pilates",
    [Modalidade.PILATES_FUNCIONAL]: "Pilates Funcional",
    [Modalidade.YOGA_AVANCADO]: "Yoga Avançado",
    [Modalidade.ZUMBA]: "Zumba",
    [Modalidade.FUNCIONAL]: "Funcional",
    [Modalidade.JIUJITSU]: "Jiu-Jitsu",
    [Modalidade.MUAYTHAI]: "Muay Thai",
    [Modalidade.DANCA]: "Dança",
    [Modalidade.ALONGAMENTO]: "Alongamento",
};

export const espacoLabels: Record<Espaco, string> = {
    [Espaco.SALA01_MULTIUSO]: "Sala 01 - Multiuso",
    [Espaco.SALA02_MULTIUSO]: "Sala 02 - Multiuso",
    [Espaco.SALA03_SPINNING]: "Sala 03 - Spinning",
    [Espaco.ESTUDIO_PILATES]: "Estúdio Pilates",
    [Espaco.AREA_DE_LUTAS]: "Área de Lutas",
    [Espaco.AREA_DE_PESO_LIVRE]: "Área de Peso Livre",
};

export const tipoAulaLabels: Record<TipoAula, string> = {
    [TipoAula.UNICA]: "Aula Única",
    [TipoAula.SEMANAL]: "Semanal",
    [TipoAula.MENSAL]: "Mensal",
    [TipoAula.SEMESTRAL]: "Semestral",
    [TipoAula.ANUAL]: "Anual",
};

export interface ClassFormData {
    modalidade: string;
    tipoAula: TipoAula;
    time: string;
    capacity: number;
    espaco: string;
    // Para aula única
    classDate?: string;
    // Para aulas recorrentes
    startDate?: string;
    endDate?: string;
    selectedDays?: number[]; // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
}

interface CreateClassModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (classData: ClassFormData) => void;
    isLoading?: boolean;
    editingClass?: Class | null;
}

const CreateClassModal = ({ isOpen, onClose, onConfirm, isLoading = false, editingClass = null }: CreateClassModalProps) => {
    const { warn } = useToast();

    // Função auxiliar para converter categoria para modalidade enum
    const getModalidadeFromCategory = (category: string): string => {
        const entry = Object.entries(modalidadeLabels).find(([_, label]) => label === category);
        return entry ? entry[0] : "";
    };

    // Função auxiliar para converter espaço para enum
    const getEspacoFromLocation = (location: string): string => {
        const entry = Object.entries(espacoLabels).find(([_, label]) => label === location);
        return entry ? entry[0] : "";
    };

    // Função auxiliar para extrair horário do schedule ou usar classTime
    const extractTimeFromSchedule = (schedule: string, classTime?: string): string => {
        // Se temos classTime diretamente, usar ele (mais confiável)
        if (classTime) {
            return classTime;
        }
        // Fallback: tentar extrair do schedule
        const timeMatch = schedule.match(/(\d{2}:\d{2})/);
        return timeMatch ? timeMatch[1] : "";
    };

    // Função auxiliar para extrair dias do schedule
    const extractDaysFromSchedule = (schedule: string): number[] => {
        const dayAbbrs = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
        const days: number[] = [];
        dayAbbrs.forEach((abbr, index) => {
            if (schedule.includes(abbr)) {
                days.push(index);
            }
        });
        return days;
    };

    // Função auxiliar para determinar tipo de aula baseado no schedule
    const determineTipoAula = (schedule: string, classDate?: string): TipoAula => {
        // Se tem múltiplos dias ou formato específico, é recorrente
        const dayAbbrs = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
        const dayCount = dayAbbrs.filter((abbr) => schedule.includes(abbr)).length;

        if (dayCount > 1) {
            return TipoAula.SEMANAL; // Default para recorrente
        }

        // Se tem classDate, provavelmente é única
        return classDate ? TipoAula.UNICA : TipoAula.SEMANAL;
    };

    const getInitialFormData = (): ClassFormData => {
        if (editingClass) {
            const modalidade = getModalidadeFromCategory(editingClass.category);
            const espaco = getEspacoFromLocation(editingClass.location);
            const time = extractTimeFromSchedule(editingClass.schedule, editingClass.classTime);
            const tipoAula = determineTipoAula(editingClass.schedule, editingClass.classDate);
            const selectedDays = tipoAula !== TipoAula.UNICA ? extractDaysFromSchedule(editingClass.schedule) : [];

            return {
                modalidade: modalidade,
                tipoAula: tipoAula,
                time: time,
                capacity: editingClass.capacity,
                espaco: espaco,
                classDate: editingClass.classDate || "",
                startDate: editingClass.classDate || "",
                endDate: "",
                selectedDays: selectedDays,
            };
        }

        return {
            modalidade: "",
            tipoAula: TipoAula.UNICA,
            time: "",
            capacity: 20,
            espaco: "",
            classDate: "",
            startDate: "",
            endDate: "",
            selectedDays: [],
        };
    };

    const [formData, setFormData] = useState<ClassFormData>(getInitialFormData());

    // Atualizar formData quando editingClass mudar ou modal abrir
    useEffect(() => {
        if (isOpen) {
            setFormData(getInitialFormData());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, editingClass]);

    const daysOfWeek = [
        { value: 0, label: "Domingo", abbr: "Dom" },
        { value: 1, label: "Segunda-feira", abbr: "Seg" },
        { value: 2, label: "Terça-feira", abbr: "Ter" },
        { value: 3, label: "Quarta-feira", abbr: "Qua" },
        { value: 4, label: "Quinta-feira", abbr: "Qui" },
        { value: 5, label: "Sexta-feira", abbr: "Sex" },
        { value: 6, label: "Sábado", abbr: "Sáb" },
    ];
    const modalidades = Object.values(Modalidade);
    const espacos = Object.values(Espaco);
    const tiposAula = Object.values(TipoAula);
    const isRecorrente = formData.tipoAula !== TipoAula.UNICA;

    const handleInputChange = (field: keyof ClassFormData, value: string | number | TipoAula) => {
        setFormData((prev) => {
            const newData = {
                ...prev,
                [field]: value,
            };

            // Limpar campos quando mudar o tipo de aula
            if (field === "tipoAula") {
                if (value === TipoAula.UNICA) {
                    newData.startDate = "";
                    newData.endDate = "";
                    newData.selectedDays = [];
                } else {
                    newData.classDate = "";
                }
            }

            return newData;
        });
    };

    const handleDayToggle = (dayValue: number) => {
        setFormData((prev) => {
            const currentDays = prev.selectedDays || [];
            const newDays = currentDays.includes(dayValue) ? currentDays.filter((d) => d !== dayValue) : [...currentDays, dayValue].sort((a, b) => a - b);

            return {
                ...prev,
                selectedDays: newDays,
            };
        });
    };

    const handleConfirm = () => {
        // Validação para aula única
        if (formData.tipoAula === TipoAula.UNICA) {
            if (!formData.modalidade || !formData.time || !formData.espaco || !formData.classDate) {
                warn("Por favor, preencha todos os campos obrigatórios.");
                return;
            }
        } else {
            // Validação para aulas recorrentes
            if (!formData.modalidade || !formData.time || !formData.espaco || !formData.startDate || !formData.endDate || !formData.selectedDays || formData.selectedDays.length === 0) {
                warn("Por favor, preencha todos os campos obrigatórios (incluindo data de fim) e selecione pelo menos um dia da semana.");
                return;
            }
        }

        onConfirm(formData);
        handleClose();
    };

    const handleClose = () => {
        setFormData({
            modalidade: "",
            tipoAula: TipoAula.UNICA,
            time: "",
            capacity: 20,
            espaco: "",
            classDate: "",
            startDate: "",
            endDate: "",
            selectedDays: [],
        });
        onClose();
    };

    const footer = (
        <>
            <ModalAction variant="secondary" onClick={handleClose} disabled={isLoading}>
                Cancelar
            </ModalAction>
            <ModalAction variant="primary" onClick={handleConfirm} disabled={isLoading || !formData.modalidade}>
                {isLoading ? (editingClass ? "Salvando..." : "Criando...") : editingClass ? "Salvar Alterações" : "Criar Aula"}
            </ModalAction>
        </>
    );

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title={editingClass ? "Editar Aula" : "Criar Nova Aula"} footer={footer} closeOnOverlayClick={!isLoading} size="lg">
            <ModalContent>
                <FormGrid>
                    <FormSection>
                        {/* Linha 1: Modalidade | Espaço | Capacidade */}
                        <ThreeColumnRow>
                            <FormGroup>
                                <Label>
                                    <Tag size={18} />
                                    Modalidade *
                                </Label>
                                <Select value={formData.modalidade} onChange={(e) => handleInputChange("modalidade", e.target.value)} required>
                                    <option value="">Selecione a modalidade</option>
                                    {modalidades.map((modalidade) => (
                                        <option key={modalidade} value={modalidade}>
                                            {modalidadeLabels[modalidade]}
                                        </option>
                                    ))}
                                </Select>
                            </FormGroup>

                            <FormGroup>
                                <Label>
                                    <MapPin size={18} />
                                    Espaço *
                                </Label>
                                <Select value={formData.espaco} onChange={(e) => handleInputChange("espaco", e.target.value)} required>
                                    <option value="">Selecione o espaço</option>
                                    {espacos.map((espaco) => (
                                        <option key={espaco} value={espaco}>
                                            {espacoLabels[espaco]}
                                        </option>
                                    ))}
                                </Select>
                            </FormGroup>

                            <FormGroup>
                                <Label>
                                    <Users size={18} />
                                    Capacidade *
                                </Label>
                                <Input type="number" placeholder="20" value={formData.capacity} onChange={(e) => handleInputChange("capacity", parseInt(e.target.value) || 0)} min={1} max={100} required />
                            </FormGroup>
                        </ThreeColumnRow>

                        {/* Linha 2: Tipo de Aula */}
                        <FullWidthFormGroup>
                            <Label>
                                <Repeat size={18} />
                                Tipo de Aula *
                            </Label>
                            <Select value={formData.tipoAula} onChange={(e) => handleInputChange("tipoAula", e.target.value as TipoAula)} required>
                                {tiposAula.map((tipo) => (
                                    <option key={tipo} value={tipo}>
                                        {tipoAulaLabels[tipo]}
                                    </option>
                                ))}
                            </Select>
                        </FullWidthFormGroup>

                        {/* Linha 3: Horário */}
                        <FullWidthFormGroup>
                            <Label>
                                <Clock size={18} />
                                Horário *
                            </Label>
                            <Input type="time" value={formData.time} onChange={(e) => handleInputChange("time", e.target.value)} required />
                        </FullWidthFormGroup>

                        {/* Linha 4: Data da Aula (única) ou Dias da Semana (recorrente) */}
                        {isRecorrente ? (
                            <FullWidthFormGroup>
                                <Label style={{ justifyContent: "center", marginBottom: "0.75rem" }}>
                                    <Calendar size={18} />
                                    Dias da Semana *
                                </Label>
                                <DaysOfWeekContainer>
                                    {daysOfWeek.map((day) => {
                                        const isChecked = formData.selectedDays?.includes(day.value) || false;
                                        return (
                                            <DayLabel key={day.value} checked={isChecked}>
                                                <DayCheckbox type="checkbox" checked={isChecked} onChange={() => handleDayToggle(day.value)} />
                                                <span>{day.abbr}</span>
                                            </DayLabel>
                                        );
                                    })}
                                </DaysOfWeekContainer>
                            </FullWidthFormGroup>
                        ) : (
                            <FullWidthFormGroup>
                                <Label>
                                    <Calendar size={18} />
                                    Data da Aula *
                                </Label>
                                <Input type="date" value={formData.classDate || ""} onChange={(e) => handleInputChange("classDate", e.target.value)} min={new Date().toISOString().split("T")[0]} required />
                            </FullWidthFormGroup>
                        )}

                        {/* Linha 5: Data de Início | Data de Fim (apenas para recorrentes) */}
                        {isRecorrente && (
                            <TwoColumnRow>
                                <FormGroup>
                                    <Label>
                                        <Calendar size={18} />
                                        Data de Início *
                                    </Label>
                                    <Input type="date" value={formData.startDate || ""} onChange={(e) => handleInputChange("startDate", e.target.value)} min={new Date().toISOString().split("T")[0]} required />
                                </FormGroup>

                                <FormGroup>
                                    <Label>
                                        <Calendar size={18} />
                                        Data de Fim *
                                    </Label>
                                    <Input type="date" value={formData.endDate || ""} onChange={(e) => handleInputChange("endDate", e.target.value)} min={formData.startDate || new Date().toISOString().split("T")[0]} required />
                                </FormGroup>
                            </TwoColumnRow>
                        )}
                    </FormSection>
                </FormGrid>
            </ModalContent>
        </Modal>
    );
};

export default CreateClassModal;
