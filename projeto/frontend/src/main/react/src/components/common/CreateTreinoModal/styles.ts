import styled from "styled-components";

export const ModalContent = styled.div`
    max-height: 80vh;
    overflow-y: auto;
    padding: 1rem;
`;

export const FormSection = styled.div`
    margin-bottom: 2rem;
`;

export const SectionTitle = styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const FormRow = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 1rem;
`;

export const TreinoDiariosList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const TreinoDiarioCard = styled.div`
    background: ${({ theme }) => theme.colors.background};
    border-radius: 8px;
    padding: 1.5rem;
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
`;

export const TreinoDiarioHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

export const TreinoDiarioTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const LetraBadge = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 700;
`;

export const DeleteTreinoDiarioButton = styled.button`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.error};
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 4px;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    &:hover {
        background: ${({ theme }) => theme.colors.error}15;
    }
`;

export const ExerciciosList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
`;

export const ExercicioItem = styled.div`
    background: #1a1a1a;
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const ExercicioRow = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1.5fr auto;
    gap: 0.75rem;
    align-items: end;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const DeleteExercicioButton = styled.button`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.error};
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 4px;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;

    &:hover {
        background: ${({ theme }) => theme.colors.error}15;
    }
`;

export const AddButton = styled.button`
    background: ${({ theme }) => theme.colors.primary}15;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px dashed ${({ theme }) => theme.colors.primary};
    padding: 0.75rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.2s;
    width: 100%;

    &:hover {
        background: ${({ theme }) => theme.colors.primary}25;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ErrorMessage = styled.div`
    color: ${({ theme }) => theme.colors.error};
    font-size: 0.875rem;
    margin-top: 0.5rem;
`;

export const HelperText = styled.div`
    color: ${({ theme }) => theme.colors.text}99;
    font-size: 0.875rem;
    margin-top: 0.5rem;
`;

export const Select = styled.select`
    width: 100%;
    padding: 0.75rem;
    background: #1a1a1a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary}50;
    }

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary};
    }

    option {
        background: #1a1a1a;
        color: ${({ theme }) => theme.colors.text};
    }
`;

export const Label = styled.label`
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    background: #1a1a1a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.875rem;
    transition: all 0.2s;

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary}50;
    }

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.text}50;
    }
`;

export const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
