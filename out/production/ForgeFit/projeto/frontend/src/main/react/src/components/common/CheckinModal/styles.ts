import styled from "styled-components";

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const Label = styled.label`
    font-size: 0.95rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const IconWrapper = styled.span`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Select = styled.select`
    padding: 0.75rem 1rem;
    border: 2px solid ${({ theme }) => theme.colors.primary}40;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    outline: none;
    transition: all 0.2s ease;
    cursor: pointer;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
    }

    option {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
    }

    @media (max-width: 48rem) {
        padding: 0.625rem 0.875rem;
        font-size: 0.95rem;
    }
`;

export const Input = styled.input`
    padding: 0.75rem 1rem;
    border: 2px solid ${({ theme }) => theme.colors.primary}40;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    outline: none;
    transition: all 0.2s ease;

    &::placeholder {
        color: ${({ theme }) => theme.colors.text}60;
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
    }

    &[type="date"] {
        cursor: pointer;

        &::-webkit-calendar-picker-indicator {
            cursor: pointer;
            filter: invert(0.5);
        }
    }

    @media (max-width: 48rem) {
        padding: 0.625rem 0.875rem;
        font-size: 0.95rem;
    }
`;

export const TextArea = styled.textarea`
    padding: 0.75rem 1rem;
    border: 2px solid ${({ theme }) => theme.colors.primary}40;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    outline: none;
    transition: all 0.2s ease;
    resize: none;
    font-family: inherit;
    line-height: 1.5;

    &::placeholder {
        color: ${({ theme }) => theme.colors.text}60;
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
    }

    @media (max-width: 48rem) {
        padding: 0.625rem 0.875rem;
        font-size: 0.95rem;
    }
`;

export const ImagePreviewSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const ImagePreview = styled.img`
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 0.5rem;
    border: 2px solid ${({ theme }) => theme.colors.primary}40;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

export const RemoveImageButton = styled.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: ${({ theme }) => theme.colors.error};
    color: white;
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const ImagePlaceholder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border: 2px dashed ${({ theme }) => theme.colors.primary}40;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.6;
    gap: 0.5rem;

    svg {
        color: ${({ theme }) => theme.colors.primary};
        opacity: 0.5;
    }

    p {
        margin: 0;
        font-size: 0.95rem;
        font-weight: 500;
    }

    span {
        font-size: 0.8rem;
        text-align: center;
        max-width: 300px;
    }
`;

export const CancelButton = styled.button`
    padding: 0.75rem 1.5rem;
    border: 2px solid ${({ theme }) => theme.colors.text}40;
    border-radius: 0.5rem;
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 120px;

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.text}10;
        border-color: ${({ theme }) => theme.colors.text}60;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    @media (max-width: 48rem) {
        width: 100%;
        min-width: unset;
    }
`;
