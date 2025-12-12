import { useState } from "react";
import { Calendar, Trophy } from "lucide-react";
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
} from "./styles";

export interface TournamentFormData {
    name: string;
    startDate: string;
    endDate: string;
}

interface CreateTournamentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: TournamentFormData) => void;
    isLoading?: boolean;
}

const CreateTournamentModal = ({
    isOpen,
    onClose,
    onConfirm,
    isLoading = false,
}: CreateTournamentModalProps) => {
    const { showToast } = useToast();
    const [formData, setFormData] = useState<TournamentFormData>({
        name: "",
        startDate: "",
        endDate: "",
    });

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
            onConfirm(formData);
            handleClose();
        }
    };

    const handleClose = () => {
        setFormData({
            name: "",
            startDate: "",
            endDate: "",
        });
        onClose();
    };

    const getTodayDate = () => {
        const today = new Date();
        return today.toISOString().split("T")[0];
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Criar Novo Torneio" size="md">
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
                            min={getTodayDate()}
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
                            min={formData.startDate || getTodayDate()}
                        />
                    </FormGroup>
                </FormSection>
            </ModalContent>

            <ModalFooter>
                <Button variant="secondary" onClick={handleClose} disabled={isLoading}>
                    Cancelar
                </Button>
                <Button onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? "Criando..." : "Criar Torneio"}
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTournamentModal;
