import { useState, useEffect } from "react";
import { Gift, Image, Trophy } from "lucide-react";
import Modal from "../Modal";
import { Button } from "../Button";
import { useToast } from "../../../contexts/ToastContext";
import {
    ModalContent,
    FormSection,
    PrizeCard,
    PrizeHeader,
    PrizePosition,
    PrizeForm,
    FormGroup,
    Label,
    Input,
    ImagePreview,
    ImagePlaceholder,
    ModalFooter,
} from "./styles";

export interface PrizeData {
    position: number;
    name: string;
    imageUrl: string;
}

export interface PrizesFormData {
    prizes: PrizeData[];
}

interface TournamentPrizesModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: PrizesFormData) => void;
    currentPrizes?: PrizeData[];
    isLoading?: boolean;
}

const TournamentPrizesModal = ({
    isOpen,
    onClose,
    onSubmit,
    currentPrizes,
    isLoading = false,
}: TournamentPrizesModalProps) => {
    const { showToast } = useToast();
    const [prizes, setPrizes] = useState<PrizeData[]>([
        { position: 1, name: "", imageUrl: "" },
        { position: 2, name: "", imageUrl: "" },
        { position: 3, name: "", imageUrl: "" },
    ]);

    useEffect(() => {
        if (isOpen) {
            if (currentPrizes && currentPrizes.length === 3) {
                setPrizes(currentPrizes.map((p) => ({ ...p })));
            } else {
                setPrizes([
                    { position: 1, name: "", imageUrl: "" },
                    { position: 2, name: "", imageUrl: "" },
                    { position: 3, name: "", imageUrl: "" },
                ]);
            }
        }
    }, [isOpen, currentPrizes]);

    const handleInputChange = (
        position: number,
        field: "name" | "imageUrl",
        value: string
    ) => {
        setPrizes((prev) =>
            prev.map((prize) =>
                prize.position === position ? { ...prize, [field]: value } : prize
            )
        );
    };

    const isValidImageUrl = (url: string): boolean => {
        if (!url.trim()) return true;
        try {
            new URL(url);
            return /\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(url) || url.includes("vtexassets") || url.includes("dooca") || url.includes("tcdn");
        } catch {
            return false;
        }
    };

    const validateForm = (): boolean => {
        for (const prize of prizes) {
            if (!prize.name.trim()) {
                showToast(`Por favor, insira o nome do prêmio #${prize.position}`, "error");
                return false;
            }
            if (!prize.imageUrl.trim()) {
                showToast(`Por favor, insira a URL da imagem do prêmio #${prize.position}`, "error");
                return false;
            }
            if (!isValidImageUrl(prize.imageUrl)) {
                showToast(`URL de imagem inválida para o prêmio #${prize.position}`, "error");
                return false;
            }
        }
        return true;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            onSubmit({ prizes });
            handleClose();
        }
    };

    const handleClose = () => {
        setPrizes([
            { position: 1, name: "", imageUrl: "" },
            { position: 2, name: "", imageUrl: "" },
            { position: 3, name: "", imageUrl: "" },
        ]);
        onClose();
    };

    const getPositionLabel = (position: number): string => {
        switch (position) {
            case 1:
                return "1º Lugar 🥇";
            case 2:
                return "2º Lugar 🥈";
            case 3:
                return "3º Lugar 🥉";
            default:
                return `${position}º Lugar`;
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Definir Premiações" size="lg">
            <ModalContent>
                <FormSection>
                    {prizes.map((prize) => (
                        <PrizeCard key={prize.position}>
                            <PrizeHeader>
                                <PrizePosition $position={prize.position}>
                                    {getPositionLabel(prize.position)}
                                </PrizePosition>
                            </PrizeHeader>
                            <PrizeForm>
                                <FormGroup>
                                    <Label htmlFor={`prize-name-${prize.position}`}>
                                        <Gift size={16} />
                                        Nome do Prêmio
                                    </Label>
                                    <Input
                                        id={`prize-name-${prize.position}`}
                                        type="text"
                                        placeholder="Ex: Tênis Air Jordan 1 Low"
                                        value={prize.name}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            handleInputChange(prize.position, "name", e.target.value)
                                        }
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor={`prize-image-${prize.position}`}>
                                        <Image size={16} />
                                        URL da Imagem
                                    </Label>
                                    <Input
                                        id={`prize-image-${prize.position}`}
                                        type="url"
                                        placeholder="https://exemplo.com/imagem.jpg"
                                        value={prize.imageUrl}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            handleInputChange(prize.position, "imageUrl", e.target.value)
                                        }
                                    />
                                </FormGroup>
                                {prize.imageUrl && isValidImageUrl(prize.imageUrl) ? (
                                    <ImagePreview>
                                        <img src={prize.imageUrl} alt={prize.name || "Preview"} />
                                    </ImagePreview>
                                ) : (
                                    <ImagePlaceholder>
                                        <Trophy size={32} />
                                        <span>Preview da imagem</span>
                                    </ImagePlaceholder>
                                )}
                            </PrizeForm>
                        </PrizeCard>
                    ))}
                </FormSection>
            </ModalContent>

            <ModalFooter>
                <Button variant="secondary" onClick={handleClose} disabled={isLoading}>
                    Cancelar
                </Button>
                <Button onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? "Salvando..." : "Salvar Premiações"}
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default TournamentPrizesModal;
