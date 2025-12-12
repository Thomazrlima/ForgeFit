import { Modalidade } from "../components/common/CreateClassModal";

// Mapeamento de modalidades para imagens
export const modalidadeImages: Record<Modalidade, string> = {
    [Modalidade.MUSCULACAO]: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",
    [Modalidade.SPINNING]: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=500",
    [Modalidade.YOGA]: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500",
    [Modalidade.BOXE]: "https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=500",
    [Modalidade.CROSSFIT]: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
    [Modalidade.CROSS_TRAINING]: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
    [Modalidade.PILATES]: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500",
    [Modalidade.PILATES_FUNCIONAL]: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500",
    [Modalidade.YOGA_AVANCADO]: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500",
    [Modalidade.ZUMBA]: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=500",
    [Modalidade.FUNCIONAL]: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",
    [Modalidade.JIUJITSU]: "https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=500",
    [Modalidade.MUAYTHAI]: "https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=500",
    [Modalidade.DANCA]: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=500",
    [Modalidade.ALONGAMENTO]: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500",
};

// Imagem padrão para modalidades não mapeadas
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500";

// Função helper para obter a imagem baseada na modalidade ou categoria
export const getModalidadeImage = (modalidadeOrCategory: string): string => {
    // Se for uma modalidade do enum, retorna a imagem correspondente
    if (modalidadeOrCategory in modalidadeImages) {
        return modalidadeImages[modalidadeOrCategory as Modalidade];
    }

    // Mapeamento reverso: categoria (label) -> modalidade (enum)
    const categoryToModalidade: Record<string, Modalidade> = {
        Musculação: Modalidade.MUSCULACAO,
        Spinning: Modalidade.SPINNING,
        Yoga: Modalidade.YOGA,
        Boxe: Modalidade.BOXE,
        Crossfit: Modalidade.CROSSFIT,
        CrossFit: Modalidade.CROSSFIT,
        "Cross Training": Modalidade.CROSS_TRAINING,
        Pilates: Modalidade.PILATES,
        "Pilates Funcional": Modalidade.PILATES_FUNCIONAL,
        "Yoga Avançado": Modalidade.YOGA_AVANCADO,
        Zumba: Modalidade.ZUMBA,
        Funcional: Modalidade.FUNCIONAL,
        "Jiu-Jitsu": Modalidade.JIUJITSU,
        "Muay Thai": Modalidade.MUAYTHAI,
        Dança: Modalidade.DANCA,
        Alongamento: Modalidade.ALONGAMENTO,
        Luta: Modalidade.BOXE, // Fallback para "Luta" genérico
    };

    // Se for uma categoria (label), converte para modalidade
    if (modalidadeOrCategory in categoryToModalidade) {
        return modalidadeImages[categoryToModalidade[modalidadeOrCategory]];
    }

    // Imagem padrão caso não encontre
    return DEFAULT_IMAGE;
};
