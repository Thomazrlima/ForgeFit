import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { CheckCircle2, AlertTriangle, XCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

export type ToastType = "success" | "warn" | "error";

export interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    showToast: (message: string, type?: ToastType) => void;
    success: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
    children: ReactNode;
}

const ToastContainer = styled.div`
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 10000;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    pointer-events: none;
    max-width: 400px;
    width: 100%;

    @media (max-width: 48rem) {
        top: 0.5rem;
        right: 0.5rem;
        left: 0.5rem;
        max-width: 100%;
    }
`;

const ToastItem = styled(motion.div)<{ type: ToastType }>`
    background: ${({ theme, type }) => {
        if (type === "success") return "linear-gradient(135deg, #10b981, #059669)";
        if (type === "warn") return "linear-gradient(135deg, #f59e0b, #d97706)";
        return "linear-gradient(135deg, #ef4444, #dc2626)";
    }};
    color: white;
    padding: 1rem 1.25rem;
    border-radius: 0.75rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    pointer-events: auto;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: rgba(255, 255, 255, 0.3);
    }
`;

const ToastIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

const ToastMessage = styled.p`
    flex: 1;
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.4;
    margin: 0;
`;

const ToastCloseButton = styled.button`
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    transition: opacity 0.2s ease;
    flex-shrink: 0;

    &:hover {
        opacity: 1;
    }
`;

const ToastProvider = ({ children }: ToastProviderProps) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    const showToast = useCallback(
        (message: string, type: ToastType = "success") => {
            const id = `toast-${Date.now()}-${Math.random()}`;
            const newToast: Toast = { id, message, type };

            setToasts((prev) => [...prev, newToast]);

            // Auto remove after 5 seconds
            setTimeout(() => {
                removeToast(id);
            }, 5000);
        },
        [removeToast],
    );

    const success = useCallback(
        (message: string) => {
            showToast(message, "success");
        },
        [showToast],
    );

    const warn = useCallback(
        (message: string) => {
            showToast(message, "warn");
        },
        [showToast],
    );

    const error = useCallback(
        (message: string) => {
            showToast(message, "error");
        },
        [showToast],
    );

    const getIcon = (type: ToastType) => {
        switch (type) {
            case "success":
                return <CheckCircle2 size={20} />;
            case "warn":
                return <AlertTriangle size={20} />;
            case "error":
                return <XCircle size={20} />;
        }
    };

    return (
        <ToastContext.Provider value={{ showToast, success, warn, error }}>
            {children}
            <ToastContainer>
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <ToastItem key={toast.id} type={toast.type} initial={{ opacity: 0, x: 300, scale: 0.8 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 300, scale: 0.8 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                            <ToastIcon>{getIcon(toast.type)}</ToastIcon>
                            <ToastMessage>{toast.message}</ToastMessage>
                            <ToastCloseButton onClick={() => removeToast(toast.id)}>
                                <X size={18} />
                            </ToastCloseButton>
                        </ToastItem>
                    ))}
                </AnimatePresence>
            </ToastContainer>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};

export default ToastProvider;
