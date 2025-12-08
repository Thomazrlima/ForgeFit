import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const slideIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.9) translateY(-20px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
`;

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: ${fadeIn} 0.3s ease-out;
    padding: 1rem;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
`;

export const ModalContent = styled.div<{ size?: "sm" | "md" | "lg" }>`
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}) 1;
    border-radius: 0.75rem;
    position: relative;
    width: 100%;
    max-width: ${({ size }) => {
        if (size === "sm") return "400px";
        if (size === "lg") return "900px";
        return "700px";
    }};
    max-height: 90vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    animation: ${slideIn} 0.3s ease-out;
    box-shadow:
        0 25px 80px rgba(171, 37, 34, 0.15),
        0 0 20px rgba(239, 117, 43, 0.1);
    margin: auto;
    box-sizing: border-box;

    @media (max-width: 64rem) {
        max-width: ${({ size }) => {
            if (size === "sm") return "400px";
            if (size === "lg") return "90%";
            return "90%";
        }};
        width: 90%;
    }

    @media (max-width: 48rem) {
        max-width: 95%;
        width: 95%;
        max-height: 85vh;
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary}33;

    @media (max-width: 48rem) {
        padding: 1rem 1.5rem 0.75rem;
    }
`;

export const ModalTitle = styled.h2`
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    font-size: 1.5rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 48rem) {
        font-size: 1.25rem;
    }
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    width: 2.5rem;
    height: 2.5rem;

    &:hover {
        background: ${({ theme }) => theme.colors.primary}20;
        color: ${({ theme }) => theme.colors.primary};
        transform: scale(1.1);
    }

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`;

export const ModalBody = styled.div`
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
`;

export const ModalFooter = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    padding: 1rem 2rem 1.5rem;
    border-top: 1px solid ${({ theme }) => theme.colors.primary}33;
    flex-shrink: 0;
    background-color: ${({ theme }) => theme.colors.background};

    @media (max-width: 48rem) {
        padding: 0.75rem 1.5rem 1rem;
        flex-direction: column-reverse;
        gap: 0.75rem;
    }
`;
