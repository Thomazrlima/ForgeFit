import { Calendar, Users, MapPin } from "lucide-react";
import Modal, { ModalAction } from "../Modal";
import type { Class } from "../../../pages/Aulas/mockData";
import { ClassInfoContainer, ClassImageContainer, ClassImage, ClassContentWrapper, ClassTitle, ClassDetails, ClassDetail, EnrollmentInfo, WarningText } from "./styles";

interface ClassEnrollmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    classData: Class | null;
    onConfirm: (classId: number) => void;
    isLoading?: boolean;
}

const ClassEnrollmentModal = ({ isOpen, onClose, classData, onConfirm, isLoading = false }: ClassEnrollmentModalProps) => {
    if (!classData) return null;

    const isFull = classData.enrolled >= classData.capacity;
    const availableSpots = classData.capacity - classData.enrolled;

    const handleConfirm = () => {
        onConfirm(classData.id);
    };

    const footer = (
        <>
            <ModalAction variant="secondary" onClick={onClose} disabled={isLoading}>
                Cancelar
            </ModalAction>
            <ModalAction variant="primary" onClick={handleConfirm} disabled={isLoading}>
                {isLoading ? "Processando..." : isFull ? "Entrar na Lista de Espera" : "Confirmar Inscrição"}
            </ModalAction>
        </>
    );

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Confirmar Inscrição" footer={footer} closeOnOverlayClick={!isLoading} closeOnEsc={!isLoading}>
            <ClassInfoContainer>
                <ClassImageContainer>
                    <ClassImage src={classData.image} alt={classData.name} />
                </ClassImageContainer>

                <ClassContentWrapper>
                    <div>
                        <ClassTitle>{classData.name}</ClassTitle>

                        <ClassDetails>
                            <ClassDetail>
                                <Users size={18} />
                                <span>
                                    <strong>Instrutor(a):</strong> {classData.instructor}
                                </span>
                            </ClassDetail>

                            <ClassDetail>
                                <Calendar size={18} />
                                <span>
                                    <strong>Horário:</strong> {classData.schedule}
                                </span>
                            </ClassDetail>

                            <ClassDetail>
                                <MapPin size={18} />
                                <span>
                                    <strong>Local:</strong> {classData.location}
                                </span>
                            </ClassDetail>
                        </ClassDetails>
                    </div>

                    <EnrollmentInfo>
                        {isFull ? (
                            <>
                                <p>Esta aula está lotada!</p>
                                <p className="capacity-info">Pessoas na fila de espera: {classData.waitingList || 0}</p>
                            </>
                        ) : (
                            <>
                                <p>Você está prestes a se inscrever nesta aula.</p>
                                <p className="capacity-info">
                                    Vagas disponíveis: {availableSpots} de {classData.capacity}
                                </p>
                            </>
                        )}
                    </EnrollmentInfo>
                </ClassContentWrapper>
            </ClassInfoContainer>

            {isFull && <WarningText style={{ color: "#f97316", borderColor: "#f9731630", background: "#f9731610" }}>Você será adicionado à lista de espera e será notificado quando uma vaga estiver disponível.</WarningText>}

            {availableSpots <= 3 && !isFull && (
                <WarningText style={{ color: "#f97316", borderColor: "#f9731630", background: "#f9731610" }}>
                    Atenção: Restam apenas {availableSpots} vaga{availableSpots !== 1 ? "s" : ""} {availableSpots !== 1 ? "disponíveis" : "disponível"}!
                </WarningText>
            )}
        </Modal>
    );
};

export default ClassEnrollmentModal;
