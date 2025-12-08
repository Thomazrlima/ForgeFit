import styled from "styled-components";

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
    min-height: 0;
`;

export const DaysOfWeekContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.75rem;
    margin-top: 0.5rem;
    width: 100%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;

    @media (max-width: 48rem) {
        grid-template-columns: repeat(4, 1fr);
        gap: 0.75rem;
        max-width: 100%;
    }
`;

export const DayLabel = styled.label<{ checked?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem 0.75rem;
    border: 2px solid;
    border-image: ${({ checked, theme }) => (checked ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary}) 1` : `linear-gradient(135deg, ${theme.colors.primary}33, ${theme.colors.secondary}33) 1`)};
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: ${({ checked, theme }) => (checked ? `${theme.colors.primary}15` : theme.colors.background)};
    text-align: center;
    min-width: 0;
    box-sizing: border-box;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary}10;
        border-image: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}) 1;
    }

    span {
        font-size: 0.9rem;
        font-weight: ${({ checked }) => (checked ? "600" : "500")};
        color: ${({ checked, theme }) => (checked ? theme.colors.primary : theme.colors.text)};
        white-space: nowrap;
    }
`;

export const DayCheckbox = styled.input`
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    accent-color: ${({ theme }) => theme.colors.primary};
    margin: 0;
`;

export const FormGrid = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
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

export const FormRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 48rem) {
        grid-template-columns: 1fr;
        gap: 0.75rem;
    }
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 0;
    width: 100%;
    box-sizing: border-box;
`;

export const FullWidthFormGroup = styled(FormGroup)`
    grid-column: 1 / -1;
`;

export const TwoColumnRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 64rem) {
        gap: 1rem;
    }

    @media (max-width: 48rem) {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
`;

export const ThreeColumnRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 64rem) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }

    @media (max-width: 48rem) {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.875rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}) 1;
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    outline: none;
    transition: all 0.3s ease;
    box-sizing: border-box;
    min-width: 0;
    max-width: 100%;

    &::placeholder {
        color: ${({ theme }) => theme.colors.text}80;
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &[type="date"],
    &[type="time"] {
        cursor: pointer;

        &::-webkit-calendar-picker-indicator {
            cursor: pointer;
            filter: invert(1);
            opacity: 0.9;
        }

        &::-webkit-calendar-picker-indicator:hover {
            opacity: 1;
        }
    }

    @media (max-width: 48rem) {
        font-size: 0.9rem;
        padding: 0.625rem;
    }
`;

export const Select = styled.select`
    width: 100%;
    padding: 0.75rem;
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}) 1;
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    outline: none;
    transition: all 0.3s ease;
    cursor: pointer;
    box-sizing: border-box;
    min-width: 0;
    max-width: 100%;

    &:focus {
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    option {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
    }

    @media (max-width: 48rem) {
        font-size: 0.9rem;
        padding: 0.625rem;
    }
`;

export const ImagePreview = styled.div`
    border-radius: 0.5rem;
    overflow: hidden;
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}) 1;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.background};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`;

export const ImagePlaceholder = styled.div`
    padding: 2rem;
    border: 2px dashed;
    border-image: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}) 1;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    color: ${({ theme }) => theme.colors.text}80;
    height: 300px;
    background: ${({ theme }) => theme.colors.background};

    svg {
        color: ${({ theme }) => theme.colors.primary}80;
    }

    span {
        font-size: 0.875rem;
        text-align: center;
    }
`;
