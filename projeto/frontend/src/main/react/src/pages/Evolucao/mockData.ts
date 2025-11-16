export interface Student {
    id: number;
    name: string;
    avatar?: string;
}

export interface BioimpedanceData {
    id: number;
    dataDaAvaliacao: Date;
    professorResponsavel: string;
    massaGordaPercentual: number;
    massaGordaKg: number;
    massaMagraKg: number;
    massaMuscularEsqueleticaKg: number;
    aguaCorporalTotalPercentual: number;
    gorduraVisceralNivel: number;
    taxaMetabolicaBasalKcal: number;
    massaOsseaKg: number;
    indiceDeMassaCorporal: number;
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

const bioimpedanceHistory: BioimpedanceData[] = [
    {
        id: 1,
        dataDaAvaliacao: new Date("2024-09-15"),
        professorResponsavel: "Prof. João Silva",
        massaGordaPercentual: 22.5,
        massaGordaKg: 18.5,
        massaMagraKg: 63.5,
        massaMuscularEsqueleticaKg: 35.2,
        aguaCorporalTotalPercentual: 55.8,
        gorduraVisceralNivel: 8,
        taxaMetabolicaBasalKcal: 1650,
        massaOsseaKg: 3.2,
        indiceDeMassaCorporal: 24.8,
        bracoRelaxadoCm: 32.5,
        bracoContraidoCm: 34.8,
        antebracoCm: 27.3,
        toraxPeitoralCm: 98.5,
        cinturaCm: 85.2,
        abdomenCm: 88.7,
        quadrilCm: 102.3,
        coxaCm: 58.4,
        panturrilhaCm: 38.6,
    },
    {
        id: 2,
        dataDaAvaliacao: new Date("2024-10-20"),
        professorResponsavel: "Prof. João Silva",
        massaGordaPercentual: 20.8,
        massaGordaKg: 17.2,
        massaMagraKg: 65.8,
        massaMuscularEsqueleticaKg: 36.5,
        aguaCorporalTotalPercentual: 57.2,
        gorduraVisceralNivel: 7,
        taxaMetabolicaBasalKcal: 1680,
        massaOsseaKg: 3.3,
        indiceDeMassaCorporal: 24.3,
        bracoRelaxadoCm: 33.1,
        bracoContraidoCm: 35.4,
        antebracoCm: 27.5,
        toraxPeitoralCm: 99.2,
        cinturaCm: 83.5,
        abdomenCm: 86.4,
        quadrilCm: 101.8,
        coxaCm: 58.9,
        panturrilhaCm: 39.1,
    },
    {
        id: 3,
        dataDaAvaliacao: new Date("2024-11-14"),
        professorResponsavel: "Prof. Maria Santos",
        massaGordaPercentual: 19.2,
        massaGordaKg: 16.1,
        massaMagraKg: 67.9,
        massaMuscularEsqueleticaKg: 37.8,
        aguaCorporalTotalPercentual: 58.5,
        gorduraVisceralNivel: 6,
        taxaMetabolicaBasalKcal: 1710,
        massaOsseaKg: 3.4,
        indiceDeMassaCorporal: 23.9,
        bracoRelaxadoCm: 33.8,
        bracoContraidoCm: 36.2,
        antebracoCm: 27.8,
        toraxPeitoralCm: 100.5,
        cinturaCm: 81.8,
        abdomenCm: 84.2,
        quadrilCm: 101.2,
        coxaCm: 59.5,
        panturrilhaCm: 39.8,
    },
];

export const fetchBioimpedanceHistory = (): Promise<BioimpedanceData[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const sortedHistory = [...bioimpedanceHistory].sort((a, b) => new Date(b.dataDaAvaliacao).getTime() - new Date(a.dataDaAvaliacao).getTime());
            resolve(sortedHistory);
        }, 1500);
    });
};
