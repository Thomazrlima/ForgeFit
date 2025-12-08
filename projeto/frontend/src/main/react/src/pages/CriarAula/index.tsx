import { useState, useEffect } from "react";
import { Plus, Calendar, MapPin, BookOpen, Tag, Edit, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useUser } from "../../contexts/UserContext";
import { useToast } from "../../contexts/ToastContext";
import { animationVariants } from "../../hooks/useScrollAnimation";
import CreateClassModal, { Modalidade, Espaco, TipoAula, modalidadeLabels, espacoLabels, type ClassFormData } from "../../components/common/CreateClassModal";
import { fetchClasses, type Class } from "../Aulas/mockData";
import { Container, Title, HeaderSection, AddButton, ClassesGrid, ClassCard, ClassImage, ClassInfo, ClassTitle, ClassDetail, ClassFooter, EmptyState, LoadingOverlay, CardActions, ActionButton, DeleteConfirmModal, DeleteButton } from "./styles";
import { getModalidadeImage } from "../../utils/modalidadeImages";
import Spinner from "../../components/common/Spinner";
import Modal, { ModalAction } from "../../components/common/Modal";

const CriarAula = () => {
    const { user } = useUser();
    const { success, error } = useToast();
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [classes, setClasses] = useState<Class[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingClass, setEditingClass] = useState<Class | null>(null);
    const [deletingClass, setDeletingClass] = useState<Class | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const loadClasses = async () => {
            try {
                setLoading(true);
                const classesData = await fetchClasses();
                // Filtrar apenas as aulas do professor logado
                const professorClasses = classesData.filter((classItem) => classItem.instructorId === user?.id);
                setClasses(professorClasses);
            } catch (error) {
                console.error("Erro ao carregar aulas:", error);
            } finally {
                setLoading(false);
            }
        };

        if (user?.id) {
            loadClasses();
        }
    }, [user?.id]);

    const handleCreateClass = async (classData: ClassFormData) => {
        try {
            setSubmitting(true);

            const modalidadeLabel = modalidadeLabels[classData.modalidade as Modalidade] || classData.modalidade;

            let schedule = "";
            let classDate = "";

            if (classData.tipoAula === TipoAula.UNICA) {
                // Aula única
                const date = new Date(classData.classDate || "");
                const dayAbbr = date.toLocaleDateString("pt-BR", { weekday: "short" });
                schedule = `${dayAbbr} - ${classData.time}`;
                classDate = classData.classDate || "";
            } else {
                // Aula recorrente
                const daysLabels =
                    classData.selectedDays
                        ?.map((day) => {
                            const dayInfo = [
                                { value: 0, abbr: "Dom" },
                                { value: 1, abbr: "Seg" },
                                { value: 2, abbr: "Ter" },
                                { value: 3, abbr: "Qua" },
                                { value: 4, abbr: "Qui" },
                                { value: 5, abbr: "Sex" },
                                { value: 6, abbr: "Sáb" },
                            ].find((d) => d.value === day);
                            return dayInfo?.abbr || "";
                        })
                        .filter(Boolean)
                        .join(", ") || "";

                schedule = `${daysLabels} - ${classData.time}`;
                classDate = classData.startDate || "";
            }

            if (editingClass) {
                // Editar aula existente
                const updatedClass: Class = {
                    ...editingClass,
                    category: modalidadeLabel,
                    schedule: schedule,
                    capacity: classData.capacity,
                    location: espacoLabels[classData.espaco as Espaco] || classData.espaco,
                    image: getModalidadeImage(classData.modalidade),
                    classDate: classDate,
                };

                console.log("Aula editada:", updatedClass);
                // TODO: Implementar chamada à API para editar aula

                setClasses((prev) => prev.map((c) => (c.id === editingClass.id ? updatedClass : c)));
                success("Aula editada com sucesso!");
            } else {
                // Criar nova aula
                const newClass: Class = {
                    id: Date.now(), // ID temporário
                    instructor: user?.name || "Professor",
                    instructorId: user?.id || 0,
                    category: modalidadeLabel,
                    schedule: schedule,
                    capacity: classData.capacity,
                    enrolled: 0,
                    location: espacoLabels[classData.espaco as Espaco] || classData.espaco,
                    image: getModalidadeImage(classData.modalidade),
                    enrollmentStatus: "not_enrolled",
                    waitingList: 0,
                    classDate: classDate,
                };

                console.log("Aula criada:", newClass);
                // TODO: Implementar chamada à API para criar aula

                setClasses((prev) => [newClass, ...prev]);
                success("Aula criada com sucesso!");
            }

            setIsModalOpen(false);
            setEditingClass(null);
        } catch (err) {
            console.error("Erro ao salvar aula:", err);
            error(`Erro ao ${editingClass ? "editar" : "criar"} aula. Tente novamente.`);
        } finally {
            setSubmitting(false);
        }
    };

    const handleEditClass = (classItem: Class) => {
        setEditingClass(classItem);
        setIsModalOpen(true);
    };

    const handleDeleteClass = async (classId: number) => {
        try {
            setIsDeleting(true);

            // Simula delay de exclusão
            await new Promise((resolve) => setTimeout(resolve, 1000));

            console.log("Aula excluída:", classId);
            // TODO: Implementar chamada à API para excluir aula

            setClasses((prev) => prev.filter((c) => c.id !== classId));
            success("Aula excluída com sucesso!");
            setDeletingClass(null);
        } catch (err) {
            console.error("Erro ao excluir aula:", err);
            error("Erro ao excluir aula. Tente novamente.");
        } finally {
            setIsDeleting(false);
        }
    };

    if (loading) {
        return (
            <Container>
                <LoadingOverlay>
                    <Spinner size={60} />
                </LoadingOverlay>
            </Container>
        );
    }

    return (
        <Container>
            <HeaderSection as={motion.div} initial="hidden" animate="visible" variants={animationVariants.fadeInUp}>
                <Title>Minhas Aulas</Title>
                <AddButton onClick={() => setIsModalOpen(true)}>
                    <Plus size={20} />
                    Nova Aula
                </AddButton>
            </HeaderSection>

            {classes.length > 0 ? (
                <ClassesGrid>
                    {classes.map((classItem, index) => (
                        <motion.div key={classItem.id} initial="hidden" animate="visible" variants={animationVariants.fadeInUp} transition={{ delay: index * 0.05, duration: 0.4 }} style={{ width: "100%", height: "100%" }}>
                            <ClassCard>
                                <ClassImage src={getModalidadeImage(classItem.category)} alt={classItem.category} />
                                <ClassInfo>
                                    <ClassTitle>
                                        <Tag size={20} />
                                        {classItem.category}
                                    </ClassTitle>
                                    <ClassDetail>
                                        <Calendar size={18} />
                                        <span>{classItem.schedule}</span>
                                    </ClassDetail>
                                    <ClassDetail>
                                        <MapPin size={18} />
                                        <span>{classItem.location}</span>
                                    </ClassDetail>
                                    <ClassFooter>
                                        <span>
                                            {classItem.enrolled}/{classItem.capacity} alunos
                                        </span>
                                        <CardActions>
                                            <ActionButton onClick={() => handleEditClass(classItem)} title="Editar aula">
                                                <Edit size={18} />
                                            </ActionButton>
                                            <ActionButton onClick={() => setDeletingClass(classItem)} title="Excluir aula" variant="danger">
                                                <Trash2 size={18} />
                                            </ActionButton>
                                        </CardActions>
                                    </ClassFooter>
                                </ClassInfo>
                            </ClassCard>
                        </motion.div>
                    ))}
                </ClassesGrid>
            ) : (
                <motion.div initial="hidden" animate="visible" variants={animationVariants.fadeInUp}>
                    <EmptyState>
                        <BookOpen size={48} />
                        <p>Você ainda não criou nenhuma aula</p>
                        <p style={{ fontSize: "0.9rem", opacity: 0.7, marginTop: "0.5rem" }}>Clique em "Nova Aula" para começar</p>
                    </EmptyState>
                </motion.div>
            )}

            <CreateClassModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setEditingClass(null);
                }}
                onConfirm={handleCreateClass}
                isLoading={submitting}
                editingClass={editingClass}
            />

            {deletingClass && (
                <Modal
                    isOpen={!!deletingClass}
                    onClose={() => setDeletingClass(null)}
                    title="Confirmar Exclusão"
                    footer={
                        <>
                            <ModalAction variant="secondary" onClick={() => setDeletingClass(null)} disabled={isDeleting}>
                                Cancelar
                            </ModalAction>
                            <DeleteButton onClick={() => deletingClass && handleDeleteClass(deletingClass.id)} disabled={isDeleting}>
                                {isDeleting ? "Excluindo..." : "Excluir"}
                            </DeleteButton>
                        </>
                    }
                >
                    <DeleteConfirmModal>
                        <p>Tem certeza que deseja excluir esta aula?</p>
                        <p style={{ fontSize: "0.9rem", opacity: 0.7, marginTop: "0.5rem" }}>Esta ação não pode ser desfeita.</p>
                    </DeleteConfirmModal>
                </Modal>
            )}
        </Container>
    );
};

export default CriarAula;
