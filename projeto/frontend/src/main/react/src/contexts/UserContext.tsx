import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { ReactNode } from "react";
import { authService } from "../services/authService";

export interface User {
    id: number;
    name: string;
    avatar?: string;
    role: "student" | "professor" | "admin";
    matricula?: string;
    pontuacaoTotal?: number;
    creditos?: number;
}

interface UserContextType {
    user: User | null;
    loading: boolean;
    setUser: (user: User | null) => void;
    refreshUser: () => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

const STORAGE_KEY = "@forgefit:user";
const TOKEN_KEY = "@forgefit:token";

export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const saveUserToStorage = (userData: User) => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
        } catch (error) {
            console.error("Erro ao salvar dados do usuário:", error);
        }
    };

    const loadUserFromStorage = (): User | null => {
        try {
            const storedUser = localStorage.getItem(STORAGE_KEY);
            const token = localStorage.getItem(TOKEN_KEY);

            if (storedUser && token) {
                return JSON.parse(storedUser);
            }
        } catch (error) {
            console.error("Erro ao carregar dados do usuário:", error);
        }
        return null;
    };

    const clearUserFromStorage = () => {
        try {
            localStorage.removeItem(STORAGE_KEY);
            localStorage.removeItem(TOKEN_KEY);
        } catch (error) {
            console.error("Erro ao limpar dados do usuário:", error);
        }
    };

    const login = useCallback(async (email: string, password: string) => {
        setLoading(true);
        try {
            const response = await authService.login(email, password);
            
            if (!response.sucesso || !response.user) {
                throw new Error(response.mensagem || "Erro ao fazer login");
            }

            // Gerar token simulado (no futuro, virá do backend)
            const mockToken = "jwt-token-" + Date.now();
            localStorage.setItem(TOKEN_KEY, mockToken);

            // Converter AuthUserData para User
            const userData: User = {
                id: response.user.id,
                name: response.user.name,
                avatar: response.user.avatar,
                role: response.user.role,
                matricula: response.user.matricula,
                pontuacaoTotal: response.user.pontuacaoTotal,
                creditos: response.user.creditos,
            };

            saveUserToStorage(userData);
            setUser(userData);
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    }, []);

    const logout = useCallback(() => {
        authService.logout();
        clearUserFromStorage();
        setUser(null);
    }, []);

    const refreshUser = useCallback(async () => {
        setLoading(true);
        try {
            const storedUser = loadUserFromStorage();
            if (storedUser) {
                setUser(storedUser);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error("Erro ao carregar dados do usuário:", error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        refreshUser();
    }, [refreshUser]);

    const value: UserContextType = {
        user,
        loading,
        setUser,
        refreshUser,
        login,
        logout,
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
