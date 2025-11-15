import styled from "styled-components";

export const FilterSection = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 0.5rem;
    width: 100%;

    /* Custom Scrollbar for Filter Section */
    &::-webkit-scrollbar {
        height: 4px;
    }

    &::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.background};
        border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
        border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.primary});
    }

    @media (max-width: 48rem) {
        gap: 0.5rem;
        padding-bottom: 0.25rem;
    }
`;

export const FilterButton = styled.button<{ active: boolean }>`
    padding: 0.625rem 1.25rem;
    border: 2px solid;
    border-image: ${({ active, theme }) => (active ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary}) 1` : "none")};
    border-color: ${({ active, theme }) => (active ? "transparent" : theme.colors.primary)};
    background: ${({ active, theme }) => (active ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})` : "transparent")};
    color: ${({ active }) => (active ? "white" : ({ theme }) => theme.colors.text)};
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 500;
    transition: all 0.3s ease;
    white-space: nowrap;
    flex-shrink: 0;

    &:hover {
        box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    }

    @media (max-width: 48rem) {
        padding: 0.5rem 0.875rem;
        font-size: 0.85rem;
    }
`;
