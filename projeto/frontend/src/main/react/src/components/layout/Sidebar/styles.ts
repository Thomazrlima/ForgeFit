import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.aside<{ $isOpen: boolean }>`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 280px;
    background: ${({ theme }) => theme.colors.background};
    border-right: 2px solid;
    border-image: linear-gradient(180deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}) 1;
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    z-index: 1000;
    transition: transform 0.3s ease;

    @media (max-width: 48rem) {
        transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
        box-shadow: ${({ $isOpen }) => ($isOpen ? "4px 0 12px rgba(0, 0, 0, 0.3)" : "none")};
    }
`;

export const SidebarHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem 2rem;
    position: relative;

    .close {
        display: none;
        position: absolute;
        right: 1rem;
        
        @media (max-width: 48rem) {
            display: flex;
        }
    }
`;

export const Logo = styled.img`
    height: 10rem;
    width: auto;
`;

export const MenuToggle = styled.button`
    display: none;
    position: fixed;
    top: 1.5rem;
    left: 1.5rem;
    z-index: 999;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    border: none;
    border-radius: 0.5rem;
    padding: 0.75rem;
    color: white;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 0 20px rgba(239, 68, 68, 0.6);
    }

    @media (max-width: 48rem) {
        display: flex;
    }

    &.close {
        position: static;
        background: transparent;
        padding: 0.5rem;

        &:hover {
            box-shadow: none;
            background: ${({ theme }) => theme.colors.primary}22;
        }
    }
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
    display: none;

    @media (max-width: 48rem) {
        display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
    }
`;

export const NavList = styled.ul`
    list-style: none;
    padding: 2rem 0;
    flex: 1;
    overflow-y: auto;

    /* Customizar scrollbar */
    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 3px;
    }
`;

export const NavItem = styled.li`
    margin-bottom: 0.5rem;
`;

export const NavLink = styled(Link)<{ $isActive: boolean }>`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    color: ${({ $isActive, theme }) => ($isActive ? "white" : theme.colors.text)};
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    background: ${({ $isActive, theme }) =>
        $isActive
            ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`
            : "transparent"};
    margin: 0 1rem;
    border-radius: 0.5rem;

    svg {
        color: ${({ $isActive }) => ($isActive ? "white" : "currentColor")};
    }

    &:hover {
        background: ${({ $isActive, theme }) =>
            $isActive
                ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`
                : `${theme.colors.primary}22`};
        transform: translateX(5px);
    }

    span {
        font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
    }
`;

export const LogoutButton = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    margin: 0 1rem;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    font-size: 1rem;

    &:hover {
        background: ${({ theme }) => theme.colors.primary}22;
        transform: translateX(5px);
    }
`;
