import { useState } from "react";
import { ImageIcon } from "lucide-react";
import Modal, { ModalAction } from "../Modal";
import InputField from "../InputField";
import { ModalContent, TextArea, Label, AvatarSection, Avatar, AvatarPlaceholder } from "./styles";

interface CreateGuildModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (guildData: { name: string; description: string; imageUrl: string }) => void;
    isLoading?: boolean;
}

const CreateGuildModal = ({ isOpen, onClose, onConfirm, isLoading = false }: CreateGuildModalProps) => {
    const [guildName, setGuildName] = useState("");
    const [guildDescription, setGuildDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleConfirm = () => {
        if (!guildName.trim()) {
            console.log("Nome da guilda é obrigatório");
            return;
        }
        onConfirm({
            name: guildName,
            description: guildDescription,
            imageUrl: imageUrl,
        });
        handleClose();
    };

    const handleClose = () => {
        setGuildName("");
        setGuildDescription("");
        setImageUrl("");
        onClose();
    };

    const footer = (
        <>
            <ModalAction variant="secondary" onClick={handleClose} disabled={isLoading}>
                Cancelar
            </ModalAction>
            <ModalAction variant="primary" onClick={handleConfirm} disabled={isLoading || !guildName.trim()}>
                {isLoading ? "Criando..." : "Criar Guilda"}
            </ModalAction>
        </>
    );

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Criar Nova Guilda" footer={footer} closeOnOverlayClick={!isLoading}>
            <ModalContent>
                <AvatarSection>
                    {imageUrl ? (
                        <Avatar src={imageUrl} alt="Avatar da Guilda" />
                    ) : (
                        <AvatarPlaceholder>
                            <ImageIcon size={64} />
                        </AvatarPlaceholder>
                    )}
                </AvatarSection>

                <InputField label="URL da Imagem" type="url" placeholder="https://exemplo.com/imagem.png" id="guild-image-url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

                <InputField label="Nome da Guilda" type="text" placeholder="Digite o nome da guilda" id="guild-name" value={guildName} onChange={(e) => setGuildName(e.target.value)} required />

                <div>
                    <Label htmlFor="guild-description">Descrição</Label>
                    <TextArea id="guild-description" placeholder="Descreva sua guilda e seus objetivos..." value={guildDescription} onChange={(e) => setGuildDescription(e.target.value)} rows={4} />
                </div>
            </ModalContent>
        </Modal>
    );
};

export default CreateGuildModal;
