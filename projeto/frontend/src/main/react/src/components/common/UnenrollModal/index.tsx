import { Calendar, Users, MapPin, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import Modal, { ModalAction } from "../Modal";
import type { Class } from "../../../pages/Aulas/mockData";
import { ClassInfoContainer, ClassImageContainer, ClassImage, ClassContentWrapper, ClassTitle, ClassDetails, ClassDetail, WarningSection, CustomFooter, FooterRefundSection, ButtonContainer } from "./styles";
import { getModalidadeImage } from "../../../utils/modalidadeImages";
import { calcularReembolso, type ReembolsoPreview } from "../../../services/cancelamentoService";

interface UnenrollModalProps {
    isOpen: boolean;
    onClose: () => void;
    classData: Class | null;
    onConfirm: (classId: number) => void;
    isLoading?: boolean;
}

const UnenrollModal = ({ isOpen, onClose, classData, onConfirm, isLoading = false }: UnenrollModalProps) => {
    const [refundInfo, setRefundInfo] = useState<{ isEligible: boolean; amount: number; reason: string } | null>(null);
    const [loadingRefund, setLoadingRefund] = useState(false);

    const isWaitingList = classData?.enrollmentStatus === "waiting_list";

    // Busca informações de reembolso do backend quando o modal abre
    useEffect(() => {
        if (isOpen && classData && !isWaitingList) {
            setLoadingRefund(true);
            calcularReembolso(classData.id)
                .then((preview: ReembolsoPreview) => {
                    setRefundInfo({
                        isEligible: preview.elegivel,
                        amount: preview.valor,
                        reason: preview.motivo
                    });
                })
                .catch((error) => {
                    console.error('Erro ao calcular reembolso:', error);
                    setRefundInfo({
                        isEligible: false,
                        amount: 0,
                        reason: 'Erro ao calcular reembolso'
                    });
                })
                .finally(() => {
                    setLoadingRefund(false);
                });
        }
    }, [isOpen, classData, isWaitingList]);

    if (!classData) return null;

    const handleConfirm = () => {
        onConfirm(classData.id);
    };

    const footer = (
        <CustomFooter style={{ justifyContent: isWaitingList ? "flex-end" : "space-between" }}>
            {!isWaitingList && (
                <FooterRefundSection>
                    <h4>Informações de Reembolso</h4>
                    {loadingRefund ? (
                        <p><small>Calculando reembolso...</small></p>
                    ) : refundInfo?.isEligible ? (
                        <p>
                            <span className="refund-amount">Valor do reembolso: R$ {refundInfo.amount.toFixed(2)}</span>
                            <br />
                            <small>{refundInfo.reason}</small>
                        </p>
                    ) : refundInfo ? (
                        <p>
                            <span className="no-refund">{refundInfo.reason}</span>
                        </p>
                    ) : (
                        <p><small>Informação não disponível</small></p>
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
