// Tipos compartilhados para Evolução / Bioimpedância

export interface Aluno {
    id: number;
    nome: string;
    matricula: string;
    avatar?: string;
}

// Tipo completo de dados de bioimpedância (usado no histórico detalhado)
export interface BioimpedanceData {
    id: number;
    dataDaAvaliacao: Date;
    professorResponsavel: string;
    // Campos essenciais
    massaGordaPercentual: number;
    massaMuscularEsqueleticaKg: number;
    aguaCorporalTotalPercentual: number;
    gorduraVisceralNivel: number;
    taxaMetabolicaBasalKcal: number;
    indiceDeMassaCorporal: number;
    // Campos adicionais (composição corporal completa)
    massaGordaKg: number;
    massaMagraKg: number;
    massaOsseaKg: number;
    // Medidas corporais
    bracoRelaxadoCm: number;
    bracoContraidoCm: number;
    antebracoCm: number;
    toraxPeitoralCm: number;
    cinturaCm: number;
    abdomenCm: number;
    quadrilCm: number;
    coxaCm: number;
    panturrilhaCm: number;
}

// Dados completos para criação de nova bioimpedância
export interface BioimpedanciaFormData {
    dataDaAvaliacao: string;
    // Campos essenciais (obrigatórios)
    massaGordaPercentual: number;
    massaMuscularEsqueleticaKg: number;
    aguaCorporalTotalPercentual: number;
    gorduraVisceralNivel: number;
    taxaMetabolicaBasalKcal: number;
    indiceDeMassaCorporal: number;
    // Campos opcionais (composição corporal)
    massaGordaKg: number;
    massaMagraKg: number;
    massaOsseaKg: number;
    // Medidas corporais (opcionais)
    bracoRelaxadoCm: number;
    bracoContraidoCm: number;
    antebracoCm: number;
    toraxPeitoralCm: number;
    cinturaCm: number;
    abdomenCm: number;
    quadrilCm: number;
    coxaCm: number;
    panturrilhaCm: number;
}

// Campos essenciais (obrigatórios)
export const CAMPOS_ESSENCIAIS = [
    { key: "massaGordaPercentual", label: "Gordura Corporal (%)", type: "number", step: "0.1", placeholder: "Ex: 18.5", required: true },
    { key: "massaMuscularEsqueleticaKg", label: "Massa Muscular Esquelética (kg)", type: "number", step: "0.1", placeholder: "Ex: 35.2", required: true },
    { key: "aguaCorporalTotalPercentual", label: "Água Corporal (%)", type: "number", step: "0.1", placeholder: "Ex: 55.0", required: true },
    { key: "gorduraVisceralNivel", label: "Gordura Visceral (nível)", type: "number", step: "1", placeholder: "Ex: 8", required: true },
    { key: "taxaMetabolicaBasalKcal", label: "TMB (kcal)", type: "number", step: "1", placeholder: "Ex: 1650", required: true },
    { key: "indiceDeMassaCorporal", label: "IMC", type: "number", step: "0.1", placeholder: "Ex: 24.5", required: true },
] as const;

// Campos de composição corporal (obrigatórios)
export const CAMPOS_COMPOSICAO = [
    { key: "massaGordaKg", label: "Massa Gorda (kg)", type: "number", step: "0.1", placeholder: "Ex: 15.2", required: true },
    { key: "massaMagraKg", label: "Massa Magra (kg)", type: "number", step: "0.1", placeholder: "Ex: 60.0", required: true },
    { key: "massaOsseaKg", label: "Massa Óssea (kg)", type: "number", step: "0.1", placeholder: "Ex: 3.2", required: true },
] as const;

// Campos de medidas corporais (opcionais)
export const CAMPOS_MEDIDAS = [
    { key: "bracoRelaxadoCm", label: "Braço Relaxado (cm)", type: "number", step: "0.1", placeholder: "Ex: 32.5", required: false },
    { key: "bracoContraidoCm", label: "Braço Contraído (cm)", type: "number", step: "0.1", placeholder: "Ex: 35.0", required: false },
    { key: "antebracoCm", label: "Antebraço (cm)", type: "number", step: "0.1", placeholder: "Ex: 27.0", required: false },
    { key: "toraxPeitoralCm", label: "Peito/Tórax (cm)", type: "number", step: "0.1", placeholder: "Ex: 100.0", required: false },
    { key: "cinturaCm", label: "Cintura (cm)", type: "number", step: "0.1", placeholder: "Ex: 82.0", required: false },
    { key: "abdomenCm", label: "Abdômen (cm)", type: "number", step: "0.1", placeholder: "Ex: 85.0", required: false },
    { key: "quadrilCm", label: "Quadril (cm)", type: "number", step: "0.1", placeholder: "Ex: 100.0", required: false },
    { key: "coxaCm", label: "Coxa (cm)", type: "number", step: "0.1", placeholder: "Ex: 58.0", required: false },
    { key: "panturrilhaCm", label: "Panturrilha (cm)", type: "number", step: "0.1", placeholder: "Ex: 38.0", required: false },
] as const;
