import styled from "styled-components";
import { Button } from "../../components/common/Button";

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 2rem;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    position: relative;

    @media (max-width: 64rem) {
        padding: 1.5rem;
    }

    @media (max-width: 48rem) {
        padding: 5rem 1rem 2rem;
    }
`;

export const Header = styled.header`
    text-align: center;
    margin-bottom: 3rem;

    p {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.text};
        margin-top: 1rem;
    }

    @media (max-width: 48rem) {
        margin-bottom: 2rem;

        p {
            font-size: 1rem;
        }
    }
`;

export const Title = styled.h1`
    font-size: 3rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 48rem) {
        font-size: 2rem;
    }
`;

export const FilterSection = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 3rem;

    @media (max-width: 48rem) {
        gap: 0.5rem;
        margin-bottom: 2rem;
    }
`;

export const FilterButton = styled.button<{ active: boolean }>`
    padding: 0.75rem 1.5rem;
    border: 2px solid;
    border-image: ${({ active, theme }) => (active ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary}) 1` : "none")};
    border-color: ${({ active, theme }) => (active ? "transparent" : theme.colors.primary)};
    background: ${({ active, theme }) => (active ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})` : "transparent")};
    color: ${({ active }) => (active ? "white" : ({ theme }) => theme.colors.text)};
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    }

    @media (max-width: 48rem) {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
    }
`;

export const ClassesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
    gap: 2rem;
    max-width: 1400px;
    margin: 0 auto;
    margin-top: 2rem;
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
    min-height: 2.5rem;

    span {
        color: ${({ theme }) => theme.colors.text};
        font-size: 0.85rem;
        line-height: 1.3;
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    button {
        flex-shrink: 0;
        min-width: fit-content;
        font-size: 0.85rem !important;
        padding: 0.5rem 0.75rem !important;
        height: auto;
        white-space: nowrap;

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }

    @media (max-width: 48rem) {
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;

        span {
            font-size: 0.8rem;
        }

        button {
            font-size: 0.8rem !important;
            padding: 0.5rem !important;
        }
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
    }
`;

export const SkeletonCard = styled.div`
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary}33;
    border-radius: 0.5rem;
    overflow: hidden;
`;

export const SkeletonCardImage = styled.div`
    width: 100%;
    height: 200px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.background} 0%, ${({ theme }) => theme.colors.primary}20 25%, ${({ theme }) => theme.colors.secondary}20 50%, ${({ theme }) => theme.colors.primary}20 75%, ${({ theme }) => theme.colors.background} 100%);
    background-size: 1000px 100%;
    animation: shimmer 2s infinite linear;

    @keyframes shimmer {
        0% {
            background-position: -1000px 0;
        }
        100% {
            background-position: 1000px 0;
        }
    }
`;

export const SkeletonCardContent = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const SkeletonFilterButton = styled.div`
    padding: 0.625rem 1.25rem;
    border: 2px solid ${({ theme }) => theme.colors.primary}33;
    border-radius: 0.5rem;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.background} 0%, ${({ theme }) => theme.colors.primary}20 25%, ${({ theme }) => theme.colors.secondary}20 50%, ${({ theme }) => theme.colors.primary}20 75%, ${({ theme }) => theme.colors.background} 100%);
    background-size: 1000px 100%;
    animation: shimmer 2s infinite linear;
    min-width: 90px;
    height: 42px;
    flex-shrink: 0;
    white-space: nowrap;
    box-sizing: border-box;

    @keyframes shimmer {
        0% {
            background-position: -1000px 0;
        }
        100% {
            background-position: 1000px 0;
        }
    }

    @media (max-width: 48rem) {
        padding: 0.5rem 0.875rem;
        height: 38px;
        min-width: 70px;
    }
`;

export const SkeletonSectionTitle = styled.div`
    height: 2.5rem;
    width: 250px;
    border-radius: 0.5rem;
    max-width: 1400px;
    margin: 0 auto 1.5rem auto;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.background} 0%, ${({ theme }) => theme.colors.primary}20 25%, ${({ theme }) => theme.colors.secondary}20 50%, ${({ theme }) => theme.colors.primary}20 75%, ${({ theme }) => theme.colors.background} 100%);
    background-size: 1000px 100%;
    animation: shimmer 2s infinite linear;

    @keyframes shimmer {
        0% {
            background-position: -1000px 0;
        }
        100% {
            background-position: 1000px 0;
        }
    }

    @media (max-width: 48rem) {
        height: 2rem;
        width: 200px;
        margin-bottom: 1rem;
    }
`;

export const SkeletonSearchSection = styled.div`
    margin-bottom: 2rem;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 48rem) {
        margin-bottom: 1.5rem;
    }
`;

export const EnrolledSection = styled.section`
    margin-bottom: 3rem;

    @media (max-width: 48rem) {
        margin-bottom: 2rem;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    max-width: 1400px;
    margin: 0 auto 1.5rem auto;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 64rem) {
        padding: 0 0.5rem;
    }

    @media (max-width: 48rem) {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        padding: 0;
    }
`;

export const SearchSection = styled.div`
    margin-bottom: 2rem;

    @media (max-width: 48rem) {
        margin-bottom: 1.5rem;
    }
`;

export const EnrolledClassCard = styled(ClassCard)`
    position: relative;

    &::before {
        content: "✓ Inscrito";
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: linear-gradient(135deg, ${({ theme }) => theme.colors.success}, ${({ theme }) => theme.colors.success});
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.8rem;
        font-weight: 600;
        z-index: 1;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
`;

export const WaitingListClassCard = styled(ClassCard)`
    position: relative;

    &::before {
        content: "⏳ Aguardando";
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: linear-gradient(135deg, #f97316, #fb923c);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.8rem;
        font-weight: 600;
        z-index: 1;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
`;

export const UnenrollButton = styled(Button)`
    background: transparent !important;
    color: ${({ theme }) => theme.colors.error} !important;
    border: 2px solid ${({ theme }) => theme.colors.error} !important;
    font-size: 0.8rem !important;
    padding: 0.4rem 0.75rem !important;
    white-space: nowrap !important;

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.error}15 !important;
        box-shadow: 0 0 10px ${({ theme }) => theme.colors.error}40 !important;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const ToEvaluateClassCard = styled(ClassCard)`
    position: relative;
    border-image: linear-gradient(135deg, #3b82f6, #1d4ed8) 1;

    &::before {
        content: "⭐ Avaliar";
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: linear-gradient(135deg, #3b82f6, #1d4ed8);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.8rem;
        font-weight: 600;
        z-index: 1;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    &:hover {
        box-shadow:
            0 4px 12px rgba(59, 130, 246, 0.3),
            0 0 20px rgba(29, 78, 216, 0.2);
    }
`;

export const EvaluateButton = styled(Button)`
    background: transparent !important;
    color: #f97316 !important;
    border: 2px solid #f97316 !important;
    font-size: 0.8rem !important;
    padding: 0.4rem 0.75rem !important;
    white-space: nowrap !important;

    &:hover:not(:disabled) {
        background: #f9731615 !important;
        box-shadow: 0 0 10px #f9731640 !important;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const LeaveWaitingListButton = styled(Button)`
    background: transparent !important;
    color: #f97316 !important;
    border: 2px solid #f97316 !important;
    font-size: 0.8rem !important;
    padding: 0.4rem 0.75rem !important;
    white-space: nowrap !important;

    &:hover:not(:disabled) {
        background: #f9731615 !important;
        box-shadow: 0 0 10px #f9731640 !important;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const NoEnrolledClasses = styled.div`
    text-align: center;
    padding: 2rem;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    border: 2px dashed ${({ theme }) => theme.colors.primary}40;
    border-radius: 0.75rem;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;

    svg {
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
        margin: 0;
    }
`;
