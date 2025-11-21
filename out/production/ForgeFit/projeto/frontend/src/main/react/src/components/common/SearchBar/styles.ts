import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
`;

export const SearchInput = styled.input`
    flex: 1;
    padding: 0.75rem 1rem;
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}) 1;
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    outline: none;
    transition: all 0.3s ease;
    width: 100%;

    &::placeholder {
        color: ${({ theme }) => theme.colors.text}80;
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    @media (max-width: 48rem) {
        padding: 0.625rem 0.875rem;
        font-size: 0.9rem;
    }
`;

export const SearchButton = styled.button`
    padding: 0.75rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    border: none;
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover:not(:disabled) {
        box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 48rem) {
        padding: 0.625rem;
    }
`;
