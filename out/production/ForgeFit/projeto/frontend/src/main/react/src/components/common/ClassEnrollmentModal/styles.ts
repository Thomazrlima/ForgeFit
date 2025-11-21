import styled from "styled-components";

export const ClassInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;

    @media (max-width: 64rem) {
        flex-direction: column;
        gap: 1.5rem;
    }
`;

export const ClassImageContainer = styled.div`
    flex: 0 0 300px;
    height: 250px;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);

    @media (max-width: 64rem) {
        flex: none;
        width: 100%;
        height: 200px;
    }

    @media (max-width: 48rem) {
        height: 180px;
    }
`;

export const ClassImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.02);
    }
`;

export const ClassContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 250px;

    @media (max-width: 64rem) {
        min-height: auto;
    }
`;

export const ClassTitle = styled.h3`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    margin: 0 0 1rem 0;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 48rem) {
        font-size: 1.25rem;
    }
`;

export const ClassDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    flex: 1;
`;

export const ClassDetail = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.95rem;
    padding: 0.5rem;
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.primary}20;
    border-radius: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.primary}10;
        border-color: ${({ theme }) => theme.colors.primary}40;
    }

    svg {
        color: ${({ theme }) => theme.colors.primary};
        flex-shrink: 0;
    }

    strong {
        color: ${({ theme }) => theme.colors.primary};
        margin-right: 0.5rem;
    }
`;

export const EnrollmentInfo = styled.div`
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}15, ${({ theme }) => theme.colors.secondary}15);
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}60, ${({ theme }) => theme.colors.secondary}60) 1;
    border-radius: 0.75rem;
    padding: 1rem;
    text-align: center;
    margin-top: 1rem;

    p {
        margin: 0;
        color: ${({ theme }) => theme.colors.text};
        font-size: 0.9rem;
        line-height: 1.4;
    }

    .capacity-info {
        font-weight: 600;
        font-size: 1rem;
        background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-top: 0.5rem;
    }
`;

export const WarningText = styled.p`
    color: ${({ theme }) => theme.colors.error};
    font-size: 0.9rem;
    text-align: center;
    margin: 1rem 0 0 0;
    padding: 0.75rem;
    background: ${({ theme }) => theme.colors.error}10;
    border: 1px solid ${({ theme }) => theme.colors.error}30;
    border-radius: 0.5rem;
`;
