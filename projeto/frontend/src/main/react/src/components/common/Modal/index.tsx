import React, { useEffect } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { Button } from "../Button";
import { ModalOverlay, ModalContent, ModalHeader, ModalTitle, CloseButton, ModalBody, ModalFooter } from "./styles";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    size?: "sm" | "md" | "lg";
    closeOnOverlayClick?: boolean;
    closeOnEsc?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer, closeOnOverlayClick = true, closeOnEsc = true }) => {
    useEffect(() => {
        if (!closeOnEsc || !isOpen) return;

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose, closeOnEsc]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return createPortal(
        <ModalOverlay isOpen={isOpen} onClick={handleOverlayClick}>
            <ModalContent>
                {title && (
                    <ModalHeader>
                        <ModalTitle>{title}</ModalTitle>
                        <CloseButton onClick={onClose} aria-label="Fechar modal">
                            <X />
                        </CloseButton>
                    </ModalHeader>
                )}

                <ModalBody>{children}</ModalBody>

                {footer && <ModalFooter>{footer}</ModalFooter>}
            </ModalContent>
        </ModalOverlay>,
        document.body,
    );
};

interface ModalActionProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    disabled?: boolean;
    type?: "button" | "submit";
}

export const ModalAction: React.FC<ModalActionProps> = ({ children, onClick, variant = "secondary", disabled = false, type = "button" }) => (
    <Button type={type} variant={variant} onClick={onClick} disabled={disabled} size="lg">
        {children}
    </Button>
);

export default Modal;
