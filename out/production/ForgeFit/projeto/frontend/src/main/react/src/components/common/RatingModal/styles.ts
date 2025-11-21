import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 48rem) {
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        align-items: flex-start;
    }
`;

export const ClassInfo = styled.div`
    text-align: right;
    flex: 1;
    min-width: 0;
    max-width: 100%;
    word-wrap: break-word;

    h3 {
        margin: 0;
        margin-bottom: 0.25rem;
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1.25rem;
        word-wrap: break-word;
    }

    p {
        margin: 0;
        font-size: 0.9rem;
        color: ${({ theme }) => theme.colors.text};
        word-wrap: break-word;
    }

    @media (max-width: 48rem) {
        text-align: right;

        h3 {
            font-size: 1rem;
            line-height: 1.2;
        }

        p {
            font-size: 0.8rem;
            line-height: 1.2;
        }
    }
`;

export const ModalTitle = styled.h2`
    font-size: 1.5rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: left;
    margin: 0;
    flex: 1;
    min-width: 0;
    word-wrap: break-word;

    @media (max-width: 48rem) {
        font-size: 1.1rem;
        text-align: left;
        line-height: 1.2;
    }
`;

export const RatingSection = styled.div`
    margin-bottom: 2rem;
    width: 100%;
    box-sizing: border-box;
`;

export const RatingRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 48rem) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    > div:first-child {
        flex: 1;
        min-width: 0;
        max-width: 100%;

        @media (max-width: 48rem) {
            text-align: center;
            width: 100%;
            margin-bottom: 0.5rem;
        }
    }

    .MuiRating-root {
        flex-shrink: 0;

        @media (max-width: 48rem) {
            justify-content: center;
            align-self: center;
        }
    }
`;

export const RatingLabel = styled.label`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.25rem;
    display: block;
    font-size: 1rem;

    @media (max-width: 48rem) {
        text-align: center;
        font-size: 0.95rem;
    }
`;

export const RatingDescription = styled.p`
    font-size: 0.8rem !important;
    color: ${({ theme }) => theme.colors.text}99 !important;
    margin: 0 !important;
    line-height: 1.4;
    word-wrap: break-word;
    hyphens: auto;

    @media (max-width: 48rem) {
        text-align: center !important;
        font-size: 0.75rem !important;
        line-height: 1.3;
        padding: 0 0.5rem;
    }
`;

export const CommentsSection = styled.div`
    margin-bottom: 2rem;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 48rem) {
        margin-bottom: 1.5rem;
    }
`;

export const CommentsTextarea = styled.textarea`
    width: 100%;
    min-height: 100px;
    padding: 0.75rem;
    border: 2px solid ${({ theme }) => theme.colors.primary}33;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: inherit;
    font-size: 0.9rem;
    resize: none;
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
        min-height: 80px;
        font-size: 0.85rem;
        padding: 0.6rem;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: right;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 48rem) {
        flex-direction: column;
        gap: 0.75rem;
    }

    button {
        min-width: 120px;

        @media (max-width: 48rem) {
            width: 100%;
            min-width: unset;
            justify-content: center;
        }
    }
`;
