import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

// Interceptor para adicionar token em todas as requisições
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("@forgefit:token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        // Adicionar ID do professor do usuário logado
        const userStr = localStorage.getItem("@forgefit:user");
        if (userStr) {
            try {
                const user = JSON.parse(userStr);
                // Se for professor, adiciona o ID no header
                if (user.type === "professor" && user.id) {
                    config.headers["X-Professor-Id"] = user.id.toString();
                }
            } catch (e) {
                console.error("Erro ao parsear usuário do localStorage:", e);
            }
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Interceptor para tratar erros de resposta
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token inválido ou expirado - limpar storage e redirecionar para login
            localStorage.removeItem("@forgefit:token");
            localStorage.removeItem("@forgefit:user");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    },
);

export default api;
