import styled from "styled-components";

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    display: block;
`;

export const TextArea = styled.textarea`
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
    resize: none;
    font-family: inherit;
    box-sizing: border-box;

    &::placeholder {
        color: ${({ theme }) => theme.colors.text}80;
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    @media (max-width: 48rem) {
        font-size: 0.9rem;
    }
`;

export const AvatarSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`;

export const Avatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

    @media (max-width: 48rem) {
        width: 120px;
        height: 120px;
    }
`;

export const AvatarPlaceholder = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 48rem) {
        width: 120px;
        height: 120px;

        svg {
            width: 48px;
            height: 48px;
        }
    }
`;
