import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    position: relative;
    padding: 2rem 3rem;

    @media (max-width: 64rem) {
        padding: 2rem 1.5rem;
    }

    @media (max-width: 48rem) {
        padding: 1.5rem 1rem;
        margin-top: 5rem;
    }
`;

export const HeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    @media (max-width: 48rem) {
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
    }
`;

export const Title = styled.h1`
    font-size: 3rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;

    @media (max-width: 48rem) {
        font-size: 2rem;
        text-align: center;
    }
`;

export const AddButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.5rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(239, 68, 68, 0.4);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 48rem) {
        width: 100%;
        justify-content: center;
    }
`;

export const ClassesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
    gap: 2rem;
    margin: 0 auto;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;

    @media (max-width: 64rem) {
        grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
        gap: 1.5rem;
    }

    @media (max-width: 48rem) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`;

export const ClassCard = styled.div`
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}) 1;
    overflow: hidden;
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;

    &:hover {
        box-shadow:
            0 4px 12px rgba(239, 68, 68, 0.3),
            0 0 20px rgba(249, 115, 22, 0.2);
    }
`;

export const ClassImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;

    ${ClassCard}:hover & {
        transform: scale(1.05);
    }
`;

export const ClassInfo = styled.div`
    padding: 1.5rem;
`;

export const ClassTitle = styled.h3`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const ClassDetail = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.75rem;
    font-size: 0.95rem;

    svg {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const ClassFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors.primary}33;
    gap: 0.75rem;

    span {
        color: ${({ theme }) => theme.colors.text};
        font-size: 0.85rem;
        line-height: 1.3;
    }
`;

export const EmptyState = styled.div`
    text-align: center;
    padding: 4rem 2rem;
    color: ${({ theme }) => theme.colors.text};

    svg {
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.2rem;
        margin: 0.5rem 0;
    }
`;

export const LoadingOverlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.25rem;
`;

export const CardActions = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;

export const ActionButton = styled.button<{ variant?: "danger" }>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border: 2px solid;
    border-image: ${({ variant, theme }) => (variant === "danger" ? `linear-gradient(135deg, #ef4444, #dc2626) 1` : `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary}) 1`)};
    border-radius: 0.5rem;
    background: transparent;
    color: ${({ variant }) => (variant === "danger" ? "#ef4444" : "inherit")};
    cursor: pointer;
    transition: all 0.2s ease;
    width: 2.5rem;
    height: 2.5rem;

    &:hover {
        background: ${({ variant }) => (variant === "danger" ? "#ef444410" : "rgba(239, 68, 68, 0.1)")};
    }

    svg {
        color: ${({ variant }) => (variant === "danger" ? "#ef4444" : "inherit")};
    }
`;

export const DeleteConfirmModal = styled.div`
    padding: 1.5rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};

    p {
        margin: 0;
        font-size: 1.1rem;
    }
`;

export const DeleteButton = styled.button`
    padding: 0.875rem 1.5rem;
    background: #ef4444;
    color: white;
    border: 2px solid #ef4444;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover:not(:disabled) {
        background: #dc2626;
        border-color: #dc2626;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
