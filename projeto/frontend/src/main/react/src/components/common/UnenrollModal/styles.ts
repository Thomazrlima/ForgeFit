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
    flex: 0 0 250px;
    height: 200px;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);

    @media (max-width: 64rem) {
        flex: none;
        width: 100%;
        height: 180px;
    }

    @media (max-width: 48rem) {
        height: 160px;
    }
`;

export const ClassImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const ClassContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ClassTitle = styled.h3`
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text};
    margin: 0 0 1rem 0;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 48rem) {
        font-size: 1.1rem;
    }
`;

export const ClassDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const ClassDetail = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.9rem;
    padding: 0.25rem;

    svg {
        color: ${({ theme }) => theme.colors.primary};
        flex-shrink: 0;
    }

    strong {
        color: ${({ theme }) => theme.colors.primary};
        margin-right: 0.5rem;
    }
`;

export const WarningSection = styled.div`
    background: ${({ theme }) => theme.colors.error}10;
    border: 2px solid ${({ theme }) => theme.colors.error}30;
    border-radius: 0.75rem;
    padding: 1rem;
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
        color: ${({ theme }) => theme.colors.error};
        flex-shrink: 0;
    }

    p {
        margin: 0;
        color: ${({ theme }) => theme.colors.text};
        font-size: 0.9rem;
        line-height: 1.4;

        @media (max-width: 48rem) {
            font-size: 0.8rem;
        }
    }
`;

export const CustomFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    background: ${({ theme }) => theme.colors.background};
    width: 100%;

    @media (max-width: 48rem) {
        flex-direction: column;
        align-items: stretch;
        gap: 1.5rem;
        padding: 1rem;
    }
`;

export const FooterRefundSection = styled.div`
    flex: 1;
    max-width: 400px;
    text-align: left;
    padding-left: 0;

    h4 {
        margin: 0 0 0.5rem 0;
        color: ${({ theme }) => theme.colors.primary};
        font-size: 0.9rem;
        font-weight: 600;
    }

    p {
        margin: 0;
        color: ${({ theme }) => theme.colors.text};
        font-size: 0.8rem;
        line-height: 1.4;
    }

    .refund-amount {
        color: #10b981;
        font-weight: 600;
        font-size: 0.85rem;
    }

    .no-refund {
        color: #f97316;
        font-weight: 600;
        font-size: 0.85rem;
    }

    @media (max-width: 48rem) {
        max-width: none;
        text-align: left;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 48rem) {
        justify-content: center;
        width: 100%;

        button {
            flex: 1;
        }
    }
`;
