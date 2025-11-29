export type EnrollmentStatus = "not_enrolled" | "enrolled" | "waiting_list" | "to_evaluate";

export interface ClassRating {
    didatica: number;
    atencao: number;
    pontualidade: number;
    comentarios?: string;
}

export interface Class {
    id: number;
    name: string;
    instructor: string;
    instructorId: number; // ID do professor no banco
    category: string;
    schedule: string;
    capacity: number;
    enrolled: number;
    location: string;
    image: string;
    enrollmentStatus: EnrollmentStatus;
    waitingList: number; // Número de pessoas na fila de espera
    isClassFinished?: boolean; // Se a aula já terminou
    userRating?: ClassRating; // Avaliação do usuário
    classDate?: string; // Data da ocorrência da aula (ISO format YYYY-MM-DD)
}

export const mockClasses: Class[] = [
    {
        id: 1,
        name: "Yoga Matinal",
        instructor: "Ana Silva",
        instructorId: 4, // joao.silva@forgefit.com
        category: "Yoga",
        schedule: "Seg - 07:00",
        capacity: 20,
        enrolled: 15,
        location: "Sala 1",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500",
        enrollmentStatus: "to_evaluate" as EnrollmentStatus,
        waitingList: 0,
        isClassFinished: true,
        classDate: "2025-11-25", // Data da aula que já ocorreu
    },
    {
        id: 2,
        name: "Spinning Intenso",
        instructor: "Carlos Mendes",
        instructorId: 5, // maria.santos@forgefit.com
        category: "Spinning",
        schedule: "Ter - 18:00",
        capacity: 25,
        enrolled: 22,
        location: "Sala 2",
        image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=500",
        enrollmentStatus: "enrolled" as EnrollmentStatus,
        waitingList: 0,
        classDate: "2025-12-03", // Próxima terça
    },
    {
        id: 3,
        name: "Funcional Cross",
        instructor: "Pedro Santos",
        instructorId: 6, // pedro.oliveira@forgefit.com
        category: "Funcional",
        schedule: "Qua - 19:00",
        capacity: 15,
        enrolled: 15,
        location: "Área Externa",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",
        enrollmentStatus: "waiting_list" as EnrollmentStatus,
        waitingList: 3,
        classDate: "2025-12-04",
    },
    {
        id: 4,
        name: "Pilates",
        instructor: "Mariana Costa",
        instructorId: 7, // julia.costa@forgefit.com
        category: "Pilates",
        schedule: "Sáb - 08:00",
        capacity: 12,
        enrolled: 10,
        location: "Sala 3",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500",
        enrollmentStatus: "not_enrolled" as EnrollmentStatus,
        waitingList: 0,
        classDate: "2025-12-07",
    },
    {
        id: 5,
        name: "Muay Thai",
        instructor: "Roberto Oliveira",
        instructorId: 8, // ricardo.souza@forgefit.com
        category: "Luta",
        schedule: "Sex - 19:30",
        capacity: 20,
        enrolled: 20,
        location: "Ring de Luta",
        image: "https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=500",
        enrollmentStatus: "not_enrolled" as EnrollmentStatus,
        waitingList: 2, // Já tem 2 pessoas na fila de espera para exemplo
        classDate: "2025-12-06",
    },
];

export const categories = ["Todas", "Yoga", "Spinning", "Funcional", "Pilates", "Dança", "Luta"];

// Simula uma chamada de API
export const fetchClasses = async (): Promise<Class[]> => {
    // Simula delay de rede
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockClasses;
};

export const fetchCategories = async (): Promise<string[]> => {
    // Simula delay de rede
    await new Promise((resolve) => setTimeout(resolve, 200));
    return categories;
};
