import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const SectionTitle = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary}20;

    svg {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const SectionSubtitle = styled.span`
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text}80;
    margin-left: auto;
`;

export const FieldsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const FieldsGridThree = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`;

export const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
`;

export const Label = styled.label<{ $required?: boolean }>`
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.9;

    ${({ $required }) =>
        $required &&
        `
        &::after {
            content: " *";
            color: #ef4444;
        }
    `}
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid ${({ theme }) => theme.colors.primary}30;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    transition: all 0.2s;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.text}50;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    &[type="number"] {
        -moz-appearance: textfield;
    }
`;

export const ErrorText = styled.span`
    font-size: 0.75rem;
    color: #ef4444;
    margin-top: 0.25rem;
`;

export const AlunoInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background: ${({ theme }) => theme.colors.primary}10;
    border-radius: 8px;
    margin-bottom: 0.5rem;

    svg {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const AlunoNome = styled.span`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
`;

export const FooterButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
    margin-top: 0.5rem;
`;

export const Divider = styled.hr`
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.primary}15;
    margin: 0.5rem 0;
`;
