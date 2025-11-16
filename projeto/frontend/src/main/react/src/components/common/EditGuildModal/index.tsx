import { useState, useEffect } from "react";
import { X, Image as ImageIcon, Type, FileText, Trash2, AlertTriangle } from "lucide-react";
import { Button } from "../Button";
import Modal from "../Modal";
import { FormGroup, Label, Input, TextArea, ImagePreviewSection, ImagePreview, RemoveImageButton, ImagePlaceholder, IconWrapper, CancelButton, DeleteButton, DeleteSection, DeleteWarning } from "./styles";

interface EditGuildModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: GuildEditData) => void;
    onDelete: () => void;
    guildData: GuildData;
}

export interface GuildData {
    name: string;
    description?: string;
    imageUrl?: string;
}

export interface GuildEditData {
    name: string;
    description?: string;
    imageUrl?: string;
}

const EditGuildModal = ({ isOpen, onClose, onSubmit, onDelete, guildData }: EditGuildModalProps) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [imagePreview, setImagePreview] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setName(guildData.name);
            setDescription(guildData.description || "");
            setImageUrl(guildData.imageUrl || "");
            setImagePreview(guildData.imageUrl || "");
            setShowDeleteConfirm(false);
        }
    }, [isOpen, guildData]);

    useEffect(() => {
        // Validate and update image preview
        if (imageUrl.trim() && isValidImageUrl(imageUrl)) {
            setImagePreview(imageUrl);
        } else if (imageUrl.trim()) {
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

        if (!name.trim()) return;

        setIsSubmitting(true);

        const editData: GuildEditData = {
            name: name.trim(),
            description: description.trim() || undefined,
            imageUrl: imagePreview || undefined,
        };

        try {
            await onSubmit(editData);
            handleClose();
        } catch (error) {
            console.error("Erro ao editar guilda:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setName("");
        setDescription("");
        setImageUrl("");
        setImagePreview("");
        setIsSubmitting(false);
        setShowDeleteConfirm(false);
        onClose();
    };

    const handleRemoveImage = () => {
        setImageUrl("");
        setImagePreview("");
    };

    const handleDeleteClick = () => {
        setShowDeleteConfirm(true);
    };

    const handleDeleteConfirm = async () => {
        setIsSubmitting(true);
        try {
            await onDelete();
            handleClose();
        } catch (error) {
            console.error("Erro ao excluir guilda:", error);
            setIsSubmitting(false);
        }
    };

    const handleDeleteCancel = () => {
        setShowDeleteConfirm(false);
    };

    const isFormValid = name.trim();

    const footer = showDeleteConfirm ? (
        <>
            <CancelButton type="button" onClick={handleDeleteCancel} disabled={isSubmitting}>
                Não, manter guilda
            </CancelButton>
            <DeleteButton type="button" onClick={handleDeleteConfirm} disabled={isSubmitting}>
                {isSubmitting ? "Excluindo..." : "Sim, excluir guilda"}
            </DeleteButton>
        </>
    ) : (
        <>
            <CancelButton type="button" onClick={handleClose} disabled={isSubmitting}>
                Cancelar
            </CancelButton>
            <Button type="submit" form="edit-guild-form" disabled={!isFormValid || isSubmitting}>
                {isSubmitting ? "Salvando..." : "Salvar Alterações"}
            </Button>
        </>
    );

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            title={showDeleteConfirm ? "Confirmar Exclusão" : "Editar Guilda"}
            footer={footer}
            closeOnOverlayClick={!isSubmitting && !showDeleteConfirm}
        >
            {showDeleteConfirm ? (
                <DeleteWarning>
                    <AlertTriangle size={48} />
                    <h3>Tem certeza que deseja excluir esta guilda?</h3>
                    <p>Esta ação não pode ser desfeita. Todos os membros perderão acesso à guilda e todo o histórico será perdido.</p>
                </DeleteWarning>
            ) : (
                <form id="edit-guild-form" onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>
                            <IconWrapper>
                                <Type size={18} />
                            </IconWrapper>
                            Nome da Guilda *
                        </Label>
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Digite o nome da guilda"
                            maxLength={50}
                            required
                        />
                        <span style={{ fontSize: "0.75rem", opacity: 0.6, marginTop: "0.25rem", display: "block" }}>
                            {name.length}/50 caracteres
                        </span>
                    </FormGroup>

                    <FormGroup>
                        <Label>
                            <IconWrapper>
                                <FileText size={18} />
                            </IconWrapper>
                            Descrição (opcional)
                        </Label>
                        <TextArea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Descreva sua guilda, seus objetivos e valores..."
                            rows={4}
                            maxLength={300}
                        />
                        <span style={{ fontSize: "0.75rem", opacity: 0.6, marginTop: "0.25rem", display: "block" }}>
                            {description.length}/300 caracteres
                        </span>
                    </FormGroup>

                    <FormGroup>
                        <Label>
                            <IconWrapper>
                                <ImageIcon size={18} />
                            </IconWrapper>
                            Imagem da Guilda (opcional)
                        </Label>
                        <Input
                            type="url"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            placeholder="Cole a URL da imagem (jpg, png, gif, webp)"
                        />
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

                    <DeleteSection>
                        <Label>Zona de Perigo</Label>
                        <DeleteButton type="button" onClick={handleDeleteClick} disabled={isSubmitting}>
                            <Trash2 size={18} />
                            Excluir Guilda
                        </DeleteButton>
                    </DeleteSection>
                </form>
            )}
        </Modal>
    );
};

export default EditGuildModal;
