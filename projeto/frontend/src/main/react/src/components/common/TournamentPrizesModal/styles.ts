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
    max-height: 60vh;

    @media (max-width: 48rem) {
        margin: -1rem -1.5rem;
        max-height: 55vh;
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

export const PrizeCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary}33;
    border-radius: 0.75rem;
    transition: all 0.2s ease;

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary}66;
    }

    @media (max-width: 48rem) {
        padding: 1rem;
    }
`;

export const PrizeHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const PrizePosition = styled.div<{ $position: number }>`
    font-size: 1.25rem;
    font-weight: 700;
    background: ${({ $position }) => {
        switch ($position) {
            case 1:
                return "linear-gradient(135deg, #FFD700, #FFA500)";
            case 2:
                return "linear-gradient(135deg, #C0C0C0, #A0A0A0)";
            case 3:
                return "linear-gradient(135deg, #CD7F32, #B87333)";
            default:
                return "linear-gradient(135deg, #666, #444)";
        }
    }};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 48rem) {
        font-size: 1.1rem;
    }
`;

export const PrizeForm = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    gap: 1rem;
    align-items: flex-start;

    @media (max-width: 64rem) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 48rem) {
        grid-template-columns: 1fr;
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
    font-size: 0.85rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};

    svg {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary}33;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.9rem;
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

    @media (max-width: 48rem) {
        padding: 0.625rem 0.75rem;
        font-size: 0.85rem;
    }
`;

export const ImagePreview = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 0.5rem;
    overflow: hidden;
    border: 2px solid ${({ theme }) => theme.colors.primary}33;
    flex-shrink: 0;
    align-self: flex-end;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        background: white;
    }

    @media (max-width: 64rem) {
        grid-column: span 2;
        width: 100%;
        height: 120px;
    }

    @media (max-width: 48rem) {
        grid-column: 1;
        width: 100%;
        height: 100px;
    }
`;

export const ImagePlaceholder = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 0.5rem;
    border: 2px dashed ${({ theme }) => theme.colors.primary}33;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    flex-shrink: 0;
    align-self: flex-end;

    svg {
        color: ${({ theme }) => theme.colors.primary}66;
    }

    span {
        font-size: 0.65rem;
        color: ${({ theme }) => theme.colors.text}66;
        text-align: center;
    }

    @media (max-width: 64rem) {
        grid-column: span 2;
        width: 100%;
        height: 80px;
    }

    @media (max-width: 48rem) {
        grid-column: 1;
        width: 100%;
        height: 60px;
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
