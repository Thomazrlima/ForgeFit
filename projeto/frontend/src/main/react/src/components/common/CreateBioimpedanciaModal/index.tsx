import { useState } from "react";
import { User, Activity, Calendar, Ruler, Scale } from "lucide-react";
import Modal from "../Modal";
import { Button } from "../Button";
import {
    CAMPOS_ESSENCIAIS,
    CAMPOS_COMPOSICAO,
    CAMPOS_MEDIDAS,
    type BioimpedanciaFormData,
} from "../../../pages/Evolucao/types";
import {
    FormContainer,
    FormSection,
    SectionTitle,
    SectionSubtitle,
    FieldsGrid,
    FieldsGridThree,
    FieldGroup,
    Label,
    Input,
    ErrorText,
    AlunoInfo,
    AlunoNome,
    FooterButtons,
} from "./styles";

interface CreateBioimpedanciaModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (dados: BioimpedanciaFormData) => void;
    alunoNome: string;
}

const initialFormState: BioimpedanciaFormData = {
    dataDaAvaliacao: new Date().toISOString().split("T")[0],
    // Campos essenciais
    pesoKg: 0,
    massaGordaPercentual: 0,
    massaMuscularEsqueleticaKg: 0,
    aguaCorporalTotalPercentual: 0,
    gorduraVisceralNivel: 0,
    taxaMetabolicaBasalKcal: 0,
    indiceDeMassaCorporal: 0,
    // Campos de composição corporal
    massaGordaKg: 0,
    massaMagraKg: 0,
    massaOsseaKg: 0,
    // Medidas corporais
    bracoRelaxadoCm: 0,
    bracoContraidoCm: 0,
    antebracoCm: 0,
    toraxPeitoralCm: 0,
    cinturaCm: 0,
    abdomenCm: 0,
    quadrilCm: 0,
    coxaCm: 0,
    panturrilhaCm: 0,
};

function CreateBioimpedanciaModal({ isOpen, onClose, onSave, alunoNome }: CreateBioimpedanciaModalProps) {
    const [formData, setFormData] = useState<BioimpedanciaFormData>(initialFormState);
    const [errors, setErrors] = useState<Partial<Record<keyof BioimpedanciaFormData, string>>>({});

    const handleChange = (key: keyof BioimpedanciaFormData, value: string) => {
        if (key === "dataDaAvaliacao") {
            setFormData((prev) => ({ ...prev, [key]: value }));
        } else {
            const numValue = value === "" ? 0 : parseFloat(value);
            setFormData((prev) => ({ ...prev, [key]: numValue }));
        }
        if (errors[key]) {
            setErrors((prev) => ({ ...prev, [key]: undefined }));
        }
    };

    const validate = (): boolean => {
        const newErrors: Partial<Record<keyof BioimpedanciaFormData, string>> = {};

        if (!formData.dataDaAvaliacao) {
            newErrors.dataDaAvaliacao = "Data obrigatória";
        }

        if (formData.pesoKg <= 0) {
            newErrors.pesoKg = "Peso deve ser maior que 0";
        }

        if (formData.massaGordaPercentual < 0 || formData.massaGordaPercentual > 100) {
            newErrors.massaGordaPercentual = "Deve estar entre 0 e 100%";
        }

        if (formData.aguaCorporalTotalPercentual < 0 || formData.aguaCorporalTotalPercentual > 100) {
            newErrors.aguaCorporalTotalPercentual = "Deve estar entre 0 e 100%";
        }

        if (formData.gorduraVisceralNivel < 0 || formData.gorduraVisceralNivel > 30) {
            newErrors.gorduraVisceralNivel = "Deve estar entre 0 e 30";
        }

        if (formData.indiceDeMassaCorporal <= 0) {
            newErrors.indiceDeMassaCorporal = "IMC deve ser maior que 0";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            onSave(formData);
            setFormData(initialFormState);
            setErrors({});
        }
    };

    const handleClose = () => {
        setFormData(initialFormState);
        setErrors({});
        onClose();
    };

    const renderFieldValue = (value: number) => {
        return value === 0 ? "" : value.toString();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            title="Nova Avaliação de Bioimpedância"
            size="lg"
            footer={
                <FooterButtons>
                    <Button type="button" variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button type="submit" variant="primary" onClick={handleSubmit}>
                        Salvar Avaliação
                    </Button>
                </FooterButtons>
            }
        >
            <FormContainer onSubmit={handleSubmit}>
                {/* Info do aluno */}
                <AlunoInfo>
                    <User size={20} />
                    <span>Aluno:</span>
                    <AlunoNome>{alunoNome}</AlunoNome>
                </AlunoInfo>

                {/* Data da avaliação */}
                <FormSection>
                    <SectionTitle>
                        <Calendar size={18} />
                        Data da Avaliação
                    </SectionTitle>
                    <FieldGroup>
                        <Label $required>Data</Label>
                        <Input
                            type="date"
                            value={formData.dataDaAvaliacao}
                            onChange={(e) => handleChange("dataDaAvaliacao", e.target.value)}
                            max={new Date().toISOString().split("T")[0]}
                        />
                        {errors.dataDaAvaliacao && <ErrorText>{errors.dataDaAvaliacao}</ErrorText>}
                    </FieldGroup>
                </FormSection>

                {/* Campos essenciais (obrigatórios) */}
                <FormSection>
                    <SectionTitle>
                        <Activity size={18} />
                        Dados Essenciais
                        <SectionSubtitle>* Campos obrigatórios</SectionSubtitle>
                    </SectionTitle>
                    <FieldsGrid>
                        {CAMPOS_ESSENCIAIS.map((campo) => (
                            <FieldGroup key={campo.key}>
                                <Label htmlFor={campo.key} $required={campo.required}>
                                    {campo.label}
                                </Label>
                                <Input
                                    id={campo.key}
                                    type={campo.type}
                                    step={campo.step}
                                    placeholder={campo.placeholder}
                                    value={renderFieldValue(
                                        formData[campo.key as keyof BioimpedanciaFormData] as number
                                    )}
                                    onChange={(e) =>
                                        handleChange(campo.key as keyof BioimpedanciaFormData, e.target.value)
                                    }
                                />
                                {errors[campo.key as keyof BioimpedanciaFormData] && (
                                    <ErrorText>{errors[campo.key as keyof BioimpedanciaFormData]}</ErrorText>
                                )}
                            </FieldGroup>
                        ))}
                    </FieldsGrid>
                </FormSection>

                {/* Campos de composição corporal (opcionais) */}
                <FormSection>
                    <SectionTitle>
                        <Scale size={18} />
                        Composição Corporal
                        <SectionSubtitle>Opcional</SectionSubtitle>
                    </SectionTitle>
                    <FieldsGridThree>
                        {CAMPOS_COMPOSICAO.map((campo) => (
                            <FieldGroup key={campo.key}>
                                <Label htmlFor={campo.key}>{campo.label}</Label>
                                <Input
                                    id={campo.key}
                                    type={campo.type}
                                    step={campo.step}
                                    placeholder={campo.placeholder}
                                    value={renderFieldValue(
                                        formData[campo.key as keyof BioimpedanciaFormData] as number
                                    )}
                                    onChange={(e) =>
                                        handleChange(campo.key as keyof BioimpedanciaFormData, e.target.value)
                                    }
                                />
                            </FieldGroup>
                        ))}
                    </FieldsGridThree>
                </FormSection>

                {/* Medidas corporais (opcionais) */}
                <FormSection>
                    <SectionTitle>
                        <Ruler size={18} />
                        Medidas Corporais
                        <SectionSubtitle>Opcional</SectionSubtitle>
                    </SectionTitle>
                    <FieldsGridThree>
                        {CAMPOS_MEDIDAS.map((campo) => (
                            <FieldGroup key={campo.key}>
                                <Label htmlFor={campo.key}>{campo.label}</Label>
                                <Input
                                    id={campo.key}
                                    type={campo.type}
                                    step={campo.step}
                                    placeholder={campo.placeholder}
                                    value={renderFieldValue(
                                        formData[campo.key as keyof BioimpedanciaFormData] as number
                                    )}
                                    onChange={(e) =>
                                        handleChange(campo.key as keyof BioimpedanciaFormData, e.target.value)
                                    }
                                />
                            </FieldGroup>
                        ))}
                    </FieldsGridThree>
                </FormSection>
            </FormContainer>
        </Modal>
    );
}

export default CreateBioimpedanciaModal;
