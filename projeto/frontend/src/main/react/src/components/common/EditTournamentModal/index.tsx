import { useState, useEffect } from "react";
import { Calendar, Trophy, AlertTriangle, XCircle } from "lucide-react";
import Modal from "../Modal";
import { Button } from "../Button";
import { useToast } from "../../../contexts/ToastContext";
import {
    ModalContent,
    FormSection,
    FormGroup,
    Label,
    Input,
    ModalFooter,
    DeleteSection,
    DeleteWarning,
    DeleteButton,
} from "./styles";

export interface TournamentEditData {
    name: string;
    startDate: string;
    endDate: string;
}

interface EditTournamentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: TournamentEditData) => void;
    onCancel: () => void;
    tournamentData: {
        name: string;
        startDate: Date;
        endDate: Date;
    };
    isLoading?: boolean;
}

const EditTournamentModal = ({
    isOpen,
    onClose,
    onSubmit,
    onCancel,
    tournamentData,
    isLoading = false,
}: EditTournamentModalProps) => {
    const { showToast } = useToast();
    const [formData, setFormData] = useState<TournamentEditData>({
        name: "",
        startDate: "",
        endDate: "",
    });
    const [showCancelConfirm, setShowCancelConfirm] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        // Só inicializa o formulário quando o modal abrir pela primeira vez
        if (isOpen && tournamentData && !isInitialized) {
            const formatDateForInput = (date: Date) => {
                return date.toISOString().split("T")[0];
            };

            setFormData({
                name: tournamentData.name,
                startDate: formatDateForInput(tournamentData.startDate),
                endDate: formatDateForInput(tournamentData.endDate),
            });
            setShowCancelConfirm(false);
            setIsInitialized(true);
        }
        
        // Reset quando o modal fechar
        if (!isOpen) {
            setIsInitialized(false);
        }
    }, [isOpen, tournamentData, isInitialized]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = (): boolean => {
        if (!formData.name.trim()) {
            showToast("Por favor, insira o nome do torneio", "error");
            return false;
        }

        if (!formData.startDate) {
            showToast("Por favor, selecione a data de início", "error");
            return false;
        }

        if (!formData.endDate) {
            showToast("Por favor, selecione a data de término", "error");
            return false;
        }

        const startDate = new Date(formData.startDate);
        const endDate = new Date(formData.endDate);

        if (endDate <= startDate) {
            showToast("A data de término deve ser posterior à data de início", "error");
            return false;
        }

        return true;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            onSubmit(formData);
            handleClose();
        }
    };

    const handleCancelTournament = () => {
        onCancel();
        handleClose();
    };

    const handleClose = () => {
        setFormData({
            name: "",
            startDate: "",
            endDate: "",
        });
        setShowCancelConfirm(false);
        setIsInitialized(false);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Editar Torneio" size="md">
            <ModalContent>
                <FormSection>
                    <FormGroup>
                        <Label htmlFor="name">
                            <Trophy size={18} />
                            Nome do Torneio
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Ex: Torneio de Verão 2024"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="startDate">
                            <Calendar size={18} />
                            Data de Início
                        </Label>
                        <Input
                            id="startDate"
                            name="startDate"
                            type="date"
                            value={formData.startDate}
                            onChange={handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="endDate">
                            <Calendar size={18} />
                            Data de Término
                        </Label>
                        <Input
                            id="endDate"
                            name="endDate"
                            type="date"
                            value={formData.endDate}
                            onChange={handleInputChange}
                            min={formData.startDate}
                        />
                    </FormGroup>

                    <DeleteSection>
                        {!showCancelConfirm ? (
                            <DeleteButton type="button" onClick={() => setShowCancelConfirm(true)}>
                                <XCircle size={18} />
                                Cancelar Torneio
                            </DeleteButton>
                        ) : (
                            <>
                                <DeleteWarning>
                                    <AlertTriangle size={20} />
                                    <span>Tem certeza que deseja cancelar este torneio? Esta ação não pode ser desfeita.</span>
                                </DeleteWarning>
                                <div style={{ display: "flex", gap: "0.75rem" }}>
                                    <Button variant="secondary" onClick={() => setShowCancelConfirm(false)}>
                                        Voltar
                                    </Button>
                                    <DeleteButton type="button" onClick={handleCancelTournament}>
                                        Confirmar Cancelamento
                                    </DeleteButton>
                                </div>
                            </>
                        )}
                    </DeleteSection>
                </FormSection>
            </ModalContent>

            <ModalFooter>
                <Button variant="secondary" onClick={handleClose} disabled={isLoading}>
                    Cancelar
                </Button>
                <Button onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? "Salvando..." : "Salvar Alterações"}
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTournamentModal;
