import { useState, useEffect } from "react";
import { X, Calendar, Image as ImageIcon, Dumbbell, MessageSquare } from "lucide-react";
import { Button } from "../Button";
import Modal from "../Modal";
import { FormGroup, Label, Select, Input, TextArea, ImagePreviewSection, ImagePreview, RemoveImageButton, ImagePlaceholder, IconWrapper, CancelButton } from "./styles";

interface CheckinModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: CheckinData) => void;
    workouts: Workout[];
}

export interface Workout {
    id: string;
    name: string;
}

export interface CheckinData {
    workoutId: string;
    workoutName: string;
    date: string;
    description?: string;
    imageUrl?: string;
}

const CheckinModal = ({ isOpen, onClose, onSubmit, workouts }: CheckinModalProps) => {
    const [selectedWorkout, setSelectedWorkout] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [imagePreview, setImagePreview] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // Set today's date as default
            const today = new Date().toISOString().split("T")[0];
            setDate(today);
        }
    }, [isOpen]);

    useEffect(() => {
        // Validate and update image preview
        if (imageUrl.trim() && isValidImageUrl(imageUrl)) {
            setImagePreview(imageUrl);
        } else {
            setImagePreview("");
        }
    }, [imageUrl]);

    const isValidImageUrl = (url: string) => {
        try {
            new URL(url);
            return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url);
        } catch {
            return false;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedWorkout || !date) return;

        setIsSubmitting(true);

        const selectedWorkoutData = workouts.find((w) => w.id === selectedWorkout);

        const checkinData: CheckinData = {
            workoutId: selectedWorkout,
            workoutName: selectedWorkoutData?.name || "",
            date,
            description: description.trim() || undefined,
            imageUrl: imagePreview || undefined,
        };

        try {
            await onSubmit(checkinData);
            handleClose();
        } catch (error) {
            console.error("Erro ao fazer check-in:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setSelectedWorkout("");
        setDate("");
        setDescription("");
        setImageUrl("");
        setImagePreview("");
        setIsSubmitting(false);
        onClose();
    };

    const handleRemoveImage = () => {
        setImageUrl("");
        setImagePreview("");
    };

    const isFormValid = selectedWorkout && date;

    const footer = (
        <>
            <CancelButton type="button" onClick={handleClose} disabled={isSubmitting}>
                Cancelar
            </CancelButton>
            <Button type="submit" form="checkin-form" disabled={!isFormValid || isSubmitting}>
                {isSubmitting ? "Enviando..." : "Fazer Check-in"}
            </Button>
        </>
    );

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Fazer Check-in de Treino" footer={footer} closeOnOverlayClick={!isSubmitting}>
            <form id="checkin-form" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>
                        <IconWrapper>
                            <Dumbbell size={18} />
                        </IconWrapper>
                        Treino *
                    </Label>
                    <Select value={selectedWorkout} onChange={(e) => setSelectedWorkout(e.target.value)} required>
                        <option value="">Selecione um treino</option>
                        {workouts.map((workout) => (
                            <option key={workout.id} value={workout.id}>
                                {workout.name}
                            </option>
                        ))}
                    </Select>
                </FormGroup>

                <FormGroup>
                    <Label>
                        <IconWrapper>
                            <Calendar size={18} />
                        </IconWrapper>
                        Data *
                    </Label>
                    <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} max={new Date().toISOString().split("T")[0]} required />
                </FormGroup>

                <FormGroup>
                    <Label>
                        <IconWrapper>
                            <MessageSquare size={18} />
                        </IconWrapper>
                        Mensagem (opcional)
                    </Label>
                    <TextArea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Como foi seu treino? Conte para sua guilda..." rows={4} maxLength={500} />
                    <span style={{ fontSize: "0.75rem", opacity: 0.6, marginTop: "0.25rem", display: "block" }}>{description.length}/500 caracteres</span>
                </FormGroup>

                <FormGroup>
                    <Label>
                        <IconWrapper>
                            <ImageIcon size={18} />
                        </IconWrapper>
                        Imagem (opcional)
                    </Label>
                    <Input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Cole a URL da imagem (jpg, png, gif, webp)" />
                </FormGroup>

                {imagePreview && (
                    <ImagePreviewSection>
                        <Label>Preview da Imagem</Label>
                        <div style={{ position: "relative" }}>
                            <ImagePreview src={imagePreview} alt="Preview" />
                            <RemoveImageButton type="button" onClick={handleRemoveImage}>
                                <X size={16} />
                            </RemoveImageButton>
                        </div>
                    </ImagePreviewSection>
                )}

                {imageUrl && !imagePreview && (
                    <ImagePlaceholder>
                        <ImageIcon size={32} />
                        <p>URL de imagem inválida</p>
                        <span>Certifique-se de que a URL termina com .jpg, .png, .gif ou .webp</span>
                    </ImagePlaceholder>
                )}
            </form>
        </Modal>
    );
};

export default CheckinModal;
