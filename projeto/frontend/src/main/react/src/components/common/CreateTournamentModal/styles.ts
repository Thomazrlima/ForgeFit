import styled from "styled-components";

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
    margin: -1.5rem -2rem;
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
    min-height: 0;

    @media (max-width: 48rem) {
        margin: -1rem -1.5rem;
    }
`;

export const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 64rem) {
        padding: 1.5rem;
        gap: 1.25rem;
    }

    @media (max-width: 48rem) {
        padding: 1.25rem;
        gap: 1rem;
    }
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};

    svg {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.875rem 1rem;
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary}33;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    transition: all 0.2s ease;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.text}66;
    }

    &::-webkit-calendar-picker-indicator {
        filter: invert(1);
        cursor: pointer;
    }

    @media (max-width: 48rem) {
        padding: 0.75rem;
        font-size: 0.9rem;
    }
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding: 1.5rem 2rem;
    border-top: 1px solid ${({ theme }) => theme.colors.primary}33;

    @media (max-width: 48rem) {
        padding: 1rem 1.5rem;
        flex-direction: column-reverse;
        gap: 0.75rem;

        button {
            width: 100%;
        }
    }
`;
