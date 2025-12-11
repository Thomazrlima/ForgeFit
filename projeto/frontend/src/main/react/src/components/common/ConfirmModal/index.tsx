import Modal from "../Modal";
import { Button } from "../Button";
import { ModalContent, ModalFooter, Message } from "./styles";

interface ConfirmModalProps {
    isOpen: boolean;
    title: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmModal = ({ isOpen, title, message, confirmLabel = "Confirmar", cancelLabel = "Cancelar", onConfirm, onCancel }: ConfirmModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onCancel} title={title}>
            <ModalContent>
                <Message>{message}</Message>
            </ModalContent>
            <ModalFooter>
                <Button variant="secondary" onClick={onCancel}>
                    {cancelLabel}
                </Button>
                <Button onClick={onConfirm}>{confirmLabel}</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ConfirmModal;
