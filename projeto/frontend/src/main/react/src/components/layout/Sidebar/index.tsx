import { Calendar, Dumbbell, Users, Trophy, BarChart3, TrendingUp, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useUser } from "../../../contexts/UserContext";
import { SidebarContainer, SidebarHeader, Logo, MenuToggle, NavList, NavItem, NavLink, LogoutButton, Overlay } from "./styles.ts";

interface NavItemType {
    path: string;
    label: string;
    icon: React.ReactNode;
}

const navItems: NavItemType[] = [
    { path: "/aulas", label: "Aulas", icon: <Calendar size={20} /> },
    { path: "/meu-treino", label: "Meu Treino", icon: <Dumbbell size={20} /> },
    { path: "/treinos", label: "Treinos", icon: <Dumbbell size={20} /> },
    { path: "/guilda", label: "Guilda", icon: <Users size={20} /> },
    { path: "/torneio", label: "Torneio", icon: <Trophy size={20} /> },
    { path: "/ranking", label: "Ranking", icon: <BarChart3 size={20} /> },
    { path: "/evolucao", label: "Evolução", icon: <TrendingUp size={20} /> },
];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useUser();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <>
            <MenuToggle onClick={toggleSidebar}>
                <Menu size={24} />
            </MenuToggle>

            <Overlay $isOpen={isOpen} onClick={closeSidebar} />

            <SidebarContainer $isOpen={isOpen}>
                <SidebarHeader>
                    <Logo src={logo} alt="ForgeFit" />
                    <MenuToggle onClick={toggleSidebar} className="close">
                        <X size={24} />
                    </MenuToggle>
                </SidebarHeader>

                <NavList>
                    {navItems.map((item) => {
                        // Ocultar treinos para não-professores
                        if (item.path === "/treinos" && user?.role !== "professor") {
                            return null;
                        }

                        // Ocultar meu-treino para professores
                        if (item.path === "/meu-treino" && user?.role !== "student") {
                            return null;
                        }

                        const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + "/");
                        return (
                            <NavItem key={item.path}>
                                <NavLink to={item.path} $isActive={isActive} onClick={closeSidebar}>
                                    {item.icon}
                                    <span>{item.label}</span>
                                </NavLink>
                            </NavItem>
                        );
                    })}
                </NavList>
                <LogoutButton onClick={handleLogout}>
                    <LogOut size={20} />
                    <span>Sair</span>
                </LogoutButton>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
