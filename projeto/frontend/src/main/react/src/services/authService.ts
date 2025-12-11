import api from "./api";

export interface LoginRequest {
    email: string;
    senha: string;
}

export interface UserData {
    id: number;
    name: string;
    avatar?: string;
    role: "student" | "professor" | "admin";
    matricula?: string;
    pontuacaoTotal?: number;
    creditos?: number;
    guildaId?: number;
}

export interface LoginResponse {
    sucesso: boolean;
    mensagem: string;
    user: UserData | null;
}

export const authService = {
    login: async (email: string, senha: string): Promise<LoginResponse> => {
        const response = await api.post<LoginResponse>("/login", {
            email,
            senha,
        });
        return response.data;
    },

    logout: () => {
        localStorage.removeItem("@forgefit:token");
        localStorage.removeItem("@forgefit:user");
    },
};
