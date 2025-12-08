import { Calendar, Users, MapPin, AlertCircle } from "lucide-react";
import Modal, { ModalAction } from "../Modal";
import type { Class } from "../../../pages/Aulas/mockData";
import { ClassInfoContainer, ClassImageContainer, ClassImage, ClassContentWrapper, ClassTitle, ClassDetails, ClassDetail, WarningSection, CustomFooter, FooterRefundSection, ButtonContainer } from "./styles";
import { getModalidadeImage } from "../../../utils/modalidadeImages";

interface UnenrollModalProps {
    isOpen: boolean;
    onClose: () => void;
    classData: Class | null;
    onConfirm: (classId: number) => void;
    isLoading?: boolean;
}

const UnenrollModal = ({ isOpen, onClose, classData, onConfirm, isLoading = false }: UnenrollModalProps) => {
    if (!classData) return null;

    const isWaitingList = classData.enrollmentStatus === "waiting_list";

    // Função para calcular informações de reembolso (apenas para aulas inscritas)
    const getRefundInfo = () => {
        if (isWaitingList) {
            return null; // Não há reembolso para lista de espera
        }

        // Simula diferentes cenários de reembolso baseado no ID da aula
        const classPrice = 50; // Preço exemplo

        switch (classData.id) {
            case 1: // Yoga Matinal - pode cancelar com reembolso total
                return { isEligible: true, amount: classPrice, reason: "Cancelamento com mais de 24h de antecedência" };
            case 2: // Spinning - pode cancelar com reembolso parcial
                return { isEligible: true, amount: classPrice * 0.5, reason: "Cancelamento com menos de 24h" };
            case 3: // Funcional - sem reembolso
                return { isEligible: false, amount: 0, reason: "Aula já iniciada ou cancelamento muito próximo" };
            case 4: // Pilates - reembolso total
                return { isEligible: true, amount: classPrice, reason: "Cancelamento dentro do prazo permitido" };
            case 5: // Zumba - reembolso parcial
                return { isEligible: true, amount: classPrice * 0.75, reason: "Cancelamento com 12h de antecedência" };
            default:
                return { isEligible: false, amount: 0, reason: "Aula não elegível para reembolso" };
        }
    };

    const refundInfo = getRefundInfo();

    const handleConfirm = () => {
        onConfirm(classData.id);
    };

    const footer = (
        <CustomFooter style={{ justifyContent: isWaitingList ? "flex-end" : "space-between" }}>
            {!isWaitingList && refundInfo && (
                <FooterRefundSection>
                    <h4>Informações de Reembolso</h4>
                    {refundInfo.isEligible ? (
                        <p>
                            <span className="refund-amount">Valor do reembolso: R$ {refundInfo.amount.toFixed(2)}</span>
                            <br />
                            <small>{refundInfo.reason}</small>
                        </p>
                    ) : (
                        <p>
                            <span className="no-refund">Não elegível para reembolso</span>
                            <br />
                            <small>{refundInfo.reason}</small>
                        </p>
                    )}
                </FooterRefundSection>
            )}

            <ButtonContainer>
                <ModalAction variant="secondary" onClick={onClose} disabled={isLoading}>
                    Cancelar
                </ModalAction>
                <ModalAction variant="primary" onClick={handleConfirm} disabled={isLoading}>
                    {isLoading ? (isWaitingList ? "Saindo da fila..." : "Cancelando...") : isWaitingList ? "Confirmar Saída" : "Confirmar Cancelamento"}
                </ModalAction>
            </ButtonContainer>
        </CustomFooter>
    );

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={isWaitingList ? "Sair da Lista de Espera" : "Cancelar Inscrição"} footer={footer} closeOnOverlayClick={!isLoading} closeOnEsc={!isLoading}>
            <ClassInfoContainer>
                <ClassImageContainer>
                    <ClassImage src={getModalidadeImage(classData.category)} alt={classData.category} />
                </ClassImageContainer>

                <ClassContentWrapper>
                    <div>
                        <ClassTitle>{classData.category}</ClassTitle>

                        <ClassDetails>
                            <ClassDetail>
                                <Users size={16} />
                                <span>
                                    <strong>Instrutor(a):</strong> {classData.instructor}
                                </span>
                            </ClassDetail>

                            <ClassDetail>
                                <Calendar size={16} />
                                <span>
                                    <strong>Horário:</strong> {classData.schedule}
                                </span>
                            </ClassDetail>

                            <ClassDetail>
                                <MapPin size={16} />
                                <span>
                                    <strong>Local:</strong> {classData.location}
                                </span>
                            </ClassDetail>
                        </ClassDetails>
                    </div>
                </ClassContentWrapper>
            </ClassInfoContainer>

            <WarningSection>
                <AlertCircle size={20} />
                <p>
                    {isWaitingList ? (
                        <>
                            <strong>Tem certeza que deseja sair da lista de espera?</strong>
                            <br />
                            Você perderá sua posição na fila e precisará se inscrever novamente.
                        </>
                    ) : (
                        <>
                            <strong>Tem certeza que deseja cancelar sua inscrição?</strong>
                            <br />
                            Esta ação não pode ser desfeita e sua vaga será disponibilizada para outros alunos.
                        </>
                    )}
                </p>
            </WarningSection>
        </Modal>
    );
};

export default UnenrollModal;
