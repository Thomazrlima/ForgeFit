// Enums do domínio de treino (espelho do backend Java)

export const TipoDoTreino = {
    SUPERIORES: "SUPERIORES",
    INFERIORES: "INFERIORES",
    CORPO_INTEIRO: "CORPO_INTEIRO",
    PUSH: "PUSH",
    PULL: "PULL",
    PERNAS: "PERNAS",
    PEITO_E_TRICEPS: "PEITO_E_TRICEPS",
    COSTAS_E_BICEPS: "COSTAS_E_BICEPS",
    OMBROS_E_TRAPEZIO: "OMBROS_E_TRAPEZIO",
    BRACOS_COMPLETOS: "BRACOS_COMPLETOS",
    PEITO_E_BICEPS: "PEITO_E_BICEPS",
    COSTAS_E_TRICEPS: "COSTAS_E_TRICEPS",
    FOCO_PEITO: "FOCO_PEITO",
    FOCO_COSTAS: "FOCO_COSTAS",
    FOCO_OMBROS: "FOCO_OMBROS",
    FOCO_GLUTEOS: "FOCO_GLUTEOS",
    ABDOMEN_E_CORE: "ABDOMEN_E_CORE",
    PANTURRILHAS: "PANTURRILHAS",
    CARDIO: "CARDIO",
} as const;

export type TipoDoTreino = (typeof TipoDoTreino)[keyof typeof TipoDoTreino];

export const Exercicio = {
    SUPINO_RETO: "SUPINO_RETO",
    SUPINO_INCLINADO: "SUPINO_INCLINADO",
    SUPINO_DECLINADO: "SUPINO_DECLINADO",
    CRUCIFIXO_COM_HALTERES: "CRUCIFIXO_COM_HALTERES",
    VOADOR_PECK_DECK: "VOADOR_PECK_DECK",
    CROSSOVER_NA_POLIA: "CROSSOVER_NA_POLIA",
    FLEXAO_DE_BRACO: "FLEXAO_DE_BRACO",
    BARRA_FIXA: "BARRA_FIXA",
    PUXADA_ALTA_PULLEY_FRENTE: "PUXADA_ALTA_PULLEY_FRENTE",
    REMADA_CURVADA_COM_BARRA: "REMADA_CURVADA_COM_BARRA",
    REMADA_CAVALINHO: "REMADA_CAVALINHO",
    REMADA_UNILATERAL_SERROTE: "REMADA_UNILATERAL_SERROTE",
    REMADA_SENTADA_NA_POLIA: "REMADA_SENTADA_NA_POLIA",
    PULLDOWN_NA_POLIA: "PULLDOWN_NA_POLIA",
    AGACHAMENTO_LIVRE_COM_BARRA: "AGACHAMENTO_LIVRE_COM_BARRA",
    LEG_PRESS_45: "LEG_PRESS_45",
    CADEIRA_EXTENSORA: "CADEIRA_EXTENSORA",
    AGACHAMENTO_HACK: "AGACHAMENTO_HACK",
    AFUNDO_AVANCO: "AFUNDO_AVANCO",
    LEVANTAMENTO_TERRA: "LEVANTAMENTO_TERRA",
    STIFF_COM_BARRA: "STIFF_COM_BARRA",
    MESA_FLEXORA: "MESA_FLEXORA",
    CADEIRA_FLEXORA: "CADEIRA_FLEXORA",
    ELEVACAO_PELVICA: "ELEVACAO_PELVICA",
    CADEIRA_ABDUTORA: "CADEIRA_ABDUTORA",
    GLUTEO_NA_POLIA_COICE: "GLUTEO_NA_POLIA_COICE",
    PANTURRILHA_EM_PE_GEMEOS: "PANTURRILHA_EM_PE_GEMEOS",
    PANTURRILHA_SENTADO_SOLEO: "PANTURRILHA_SENTADO_SOLEO",
    DESENVOLVIMENTO_MILITAR_COM_BARRA: "DESENVOLVIMENTO_MILITAR_COM_BARRA",
    DESENVOLVIMENTO_COM_HALTERES: "DESENVOLVIMENTO_COM_HALTERES",
    ELEVACAO_LATERAL_COM_HALTERES: "ELEVACAO_LATERAL_COM_HALTERES",
    ELEVACAO_FRONTAL: "ELEVACAO_FRONTAL",
    CRUCIFIXO_INVERTIDO: "CRUCIFIXO_INVERTIDO",
    REMADA_ALTA: "REMADA_ALTA",
    ROSCA_DIRETA_COM_BARRA: "ROSCA_DIRETA_COM_BARRA",
    ROSCA_ALTERNADA_COM_HALTERES: "ROSCA_ALTERNADA_COM_HALTERES",
    ROSCA_MARTELO: "ROSCA_MARTELO",
    ROSCA_SCOTT: "ROSCA_SCOTT",
    ROSCA_CONCENTRADA: "ROSCA_CONCENTRADA",
    TRICEPS_PULLEY_COM_BARRA: "TRICEPS_PULLEY_COM_BARRA",
    TRICEPS_PULLEY_COM_CORDA: "TRICEPS_PULLEY_COM_CORDA",
    TRICEPS_TESTA: "TRICEPS_TESTA",
    TRICEPS_FRANCES: "TRICEPS_FRANCES",
    MERGULHO_NO_BANCO: "MERGULHO_NO_BANCO",
    PARALELAS: "PARALELAS",
    PRANCHA_ISOMETRICA: "PRANCHA_ISOMETRICA",
    ABDOMINAL_SUPRA_CRUNCH: "ABDOMINAL_SUPRA_CRUNCH",
    ABDOMINAL_INFRA_NA_PARALELA: "ABDOMINAL_INFRA_NA_PARALELA",
    ELEVACAO_DE_PERNAS_DEITADO: "ELEVACAO_DE_PERNAS_DEITADO",
    RODA_ABDOMINAL_AB_WHEEL: "RODA_ABDOMINAL_AB_WHEEL",
} as const;

export type Exercicio = (typeof Exercicio)[keyof typeof Exercicio];

// Labels amigáveis para exibição na UI
export const TipoDoTreinoLabels: Record<TipoDoTreino, string> = {
    [TipoDoTreino.SUPERIORES]: "Superiores",
    [TipoDoTreino.INFERIORES]: "Inferiores",
    [TipoDoTreino.CORPO_INTEIRO]: "Corpo Inteiro",
    [TipoDoTreino.PUSH]: "Push",
    [TipoDoTreino.PULL]: "Pull",
    [TipoDoTreino.PERNAS]: "Pernas",
    [TipoDoTreino.PEITO_E_TRICEPS]: "Peito e Tríceps",
    [TipoDoTreino.COSTAS_E_BICEPS]: "Costas e Bíceps",
    [TipoDoTreino.OMBROS_E_TRAPEZIO]: "Ombros e Trapézio",
    [TipoDoTreino.BRACOS_COMPLETOS]: "Braços Completos",
    [TipoDoTreino.PEITO_E_BICEPS]: "Peito e Bíceps",
    [TipoDoTreino.COSTAS_E_TRICEPS]: "Costas e Tríceps",
    [TipoDoTreino.FOCO_PEITO]: "Foco Peito",
    [TipoDoTreino.FOCO_COSTAS]: "Foco Costas",
    [TipoDoTreino.FOCO_OMBROS]: "Foco Ombros",
    [TipoDoTreino.FOCO_GLUTEOS]: "Foco Glúteos",
    [TipoDoTreino.ABDOMEN_E_CORE]: "Abdômen e Core",
    [TipoDoTreino.PANTURRILHAS]: "Panturrilhas",
    [TipoDoTreino.CARDIO]: "Cardio",
};

export const ExercicioLabels: Record<Exercicio, string> = {
    [Exercicio.SUPINO_RETO]: "Supino Reto",
    [Exercicio.SUPINO_INCLINADO]: "Supino Inclinado",
    [Exercicio.SUPINO_DECLINADO]: "Supino Declinado",
    [Exercicio.CRUCIFIXO_COM_HALTERES]: "Crucifixo com Halteres",
    [Exercicio.VOADOR_PECK_DECK]: "Voador (Peck Deck)",
    [Exercicio.CROSSOVER_NA_POLIA]: "Crossover na Polia",
    [Exercicio.FLEXAO_DE_BRACO]: "Flexão de Braço",
    [Exercicio.BARRA_FIXA]: "Barra Fixa",
    [Exercicio.PUXADA_ALTA_PULLEY_FRENTE]: "Puxada Alta Pulley Frente",
    [Exercicio.REMADA_CURVADA_COM_BARRA]: "Remada Curvada com Barra",
    [Exercicio.REMADA_CAVALINHO]: "Remada Cavalinho",
    [Exercicio.REMADA_UNILATERAL_SERROTE]: "Remada Unilateral (Serrote)",
    [Exercicio.REMADA_SENTADA_NA_POLIA]: "Remada Sentada na Polia",
    [Exercicio.PULLDOWN_NA_POLIA]: "Pulldown na Polia",
    [Exercicio.AGACHAMENTO_LIVRE_COM_BARRA]: "Agachamento Livre com Barra",
    [Exercicio.LEG_PRESS_45]: "Leg Press 45°",
    [Exercicio.CADEIRA_EXTENSORA]: "Cadeira Extensora",
    [Exercicio.AGACHAMENTO_HACK]: "Agachamento Hack",
    [Exercicio.AFUNDO_AVANCO]: "Afundo/Avanço",
    [Exercicio.LEVANTAMENTO_TERRA]: "Levantamento Terra",
    [Exercicio.STIFF_COM_BARRA]: "Stiff com Barra",
    [Exercicio.MESA_FLEXORA]: "Mesa Flexora",
    [Exercicio.CADEIRA_FLEXORA]: "Cadeira Flexora",
    [Exercicio.ELEVACAO_PELVICA]: "Elevação Pélvica",
    [Exercicio.CADEIRA_ABDUTORA]: "Cadeira Abdutora",
    [Exercicio.GLUTEO_NA_POLIA_COICE]: "Glúteo na Polia (Coice)",
    [Exercicio.PANTURRILHA_EM_PE_GEMEOS]: "Panturrilha em Pé (Gêmeos)",
    [Exercicio.PANTURRILHA_SENTADO_SOLEO]: "Panturrilha Sentado (Sóleo)",
    [Exercicio.DESENVOLVIMENTO_MILITAR_COM_BARRA]: "Desenvolvimento Militar com Barra",
    [Exercicio.DESENVOLVIMENTO_COM_HALTERES]: "Desenvolvimento com Halteres",
    [Exercicio.ELEVACAO_LATERAL_COM_HALTERES]: "Elevação Lateral com Halteres",
    [Exercicio.ELEVACAO_FRONTAL]: "Elevação Frontal",
    [Exercicio.CRUCIFIXO_INVERTIDO]: "Crucifixo Invertido",
    [Exercicio.REMADA_ALTA]: "Remada Alta",
    [Exercicio.ROSCA_DIRETA_COM_BARRA]: "Rosca Direta com Barra",
    [Exercicio.ROSCA_ALTERNADA_COM_HALTERES]: "Rosca Alternada com Halteres",
    [Exercicio.ROSCA_MARTELO]: "Rosca Martelo",
    [Exercicio.ROSCA_SCOTT]: "Rosca Scott",
    [Exercicio.ROSCA_CONCENTRADA]: "Rosca Concentrada",
    [Exercicio.TRICEPS_PULLEY_COM_BARRA]: "Tríceps Pulley com Barra",
    [Exercicio.TRICEPS_PULLEY_COM_CORDA]: "Tríceps Pulley com Corda",
    [Exercicio.TRICEPS_TESTA]: "Tríceps Testa",
    [Exercicio.TRICEPS_FRANCES]: "Tríceps Francês",
    [Exercicio.MERGULHO_NO_BANCO]: "Mergulho no Banco",
    [Exercicio.PARALELAS]: "Paralelas",
    [Exercicio.PRANCHA_ISOMETRICA]: "Prancha Isométrica",
    [Exercicio.ABDOMINAL_SUPRA_CRUNCH]: "Abdominal Supra (Crunch)",
    [Exercicio.ABDOMINAL_INFRA_NA_PARALELA]: "Abdominal Infra na Paralela",
    [Exercicio.ELEVACAO_DE_PERNAS_DEITADO]: "Elevação de Pernas Deitado",
    [Exercicio.RODA_ABDOMINAL_AB_WHEEL]: "Roda Abdominal (Ab Wheel)",
};

// Tipos do domínio

export interface Repeticao {
    series: number; // número de séries
    contagem: string; // ex: "12 reps", "8-10 reps", "30s", "até a falha"
}

export interface ItemExercicio {
    exercicio: Exercicio;
    repeticao: Repeticao;
}

export type LetraTreino = "A" | "B" | "C" | "D" | "E" | "F" | "G";

export interface TreinoDiario {
    letra: LetraTreino;
    tipo: TipoDoTreino;
    exercicios: ItemExercicio[];
}

export interface TreinoVigente {
    id: number; // ID do treino (gerado mock)
    professorId: number; // ID do professor (usuário logado)
    alunoId: number; // ID do aluno
    validadeSugerida?: string; // Data no formato ISO ou string descritiva (opcional)
    treinosDiarios: TreinoDiario[];
    dataCriacao: string; // Data de criação do treino
}

export interface Aluno {
    id: number;
    nome: string;
    matricula: string;
    avatar?: string;
    pontuacao?: number; // Opcional, para exibir stats
}
