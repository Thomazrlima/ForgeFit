import { useState, useEffect } from "react";
import { Calendar, Users, MapPin, Filter, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Container, ClassesGrid, ClassCard, ClassImage, ClassInfo, ClassTitle, ClassDetail, ClassFooter, EmptyState, SkeletonCard, SkeletonCardImage, SkeletonCardContent, SkeletonFilterButton, SkeletonSearchSection, EnrolledSection, SectionTitle, EnrolledClassCard, WaitingListClassCard, UnenrollButton, LeaveWaitingListButton, NoEnrolledClasses, SearchSection, ToEvaluateClassCard, EvaluateButton } from "./styles.ts";
import { type ClassRating } from "./mockData.ts";
import SearchAndFilterBar from "../../components/common/SearchAndFilterBar";
import { Button } from "../../components/common/Button";
import Skeleton from "../../components/common/Skeleton";
import { animationVariants } from "../../hooks/useScrollAnimation";
import ClassEnrollmentModal from "../../components/common/ClassEnrollmentModal";
import UnenrollModal from "../../components/common/UnenrollModal";
import { RatingModal } from "../../components/common/RatingModal";
import { useUser } from "../../contexts/UserContext";
import { useToast } from "../../contexts/ToastContext";
import { submitRating, buildRatingRequest } from "../../services/avaliacaoService";
import { submitCancelamento, buildCancelamentoRequest } from "../../services/cancelamentoService";
import CriarAula from "../CriarAula";
import { getModalidadeImage } from "../../utils/modalidadeImages";
import aulaService, { type AulaFrontend } from "../../services/aulaService";
import { useAulasComInscricao, useInscreverAula, useCancelarInscricao } from "../../hooks/useAulas";

// Type alias para manter compatibilidade
type Class = AulaFrontend;
type EnrollmentStatus = AulaFrontend["enrollmentStatus"];

const Aulas = () => {
    const { user } = useUser();
    const { success, error: showError } = useToast();
    
    // React Query: buscar aulas com status de inscrição
    const { aulas, aulasInscritas, isLoading, error } = useAulasComInscricao(
        user?.matricula,
        user?.role === "student"
    );
    
    // Debug: verificar o que está sendo retornado
    console.log("Debug Aulas:", { 
        aulas: aulas?.length, 
        aulasInscritas: aulasInscritas?.length,
        matricula: user?.matricula,
        isStudent: user?.role === "student"
    });
    
    // Mutations
    const inscreverMutation = useInscreverAula();
    const cancelarMutation = useCancelarInscricao();
    
    const [selectedCategory, setSelectedCategory] = useState("Todas");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedClass, setSelectedClass] = useState<Class | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [enrollmentLoading, setEnrollmentLoading] = useState(false);
    const [selectedClassToUnenroll, setSelectedClassToUnenroll] = useState<Class | null>(null);
    const [isUnenrollModalOpen, setIsUnenrollModalOpen] = useState(false);
    const [unenrollmentLoading, setUnenrollmentLoading] = useState(false);
    const [selectedClassToRate, setSelectedClassToRate] = useState<Class | null>(null);
    const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
    const [ratingLoading, setRatingLoading] = useState(false);

    // Extrair categorias únicas das aulas
    const categories = ["Todas", ...new Set(aulas.map(a => a.category))];
    
    // Converter error para string se existir
    const errorMessage = error ? "Erro ao carregar dados. Tente novamente." : null;

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleEnrollClick = (classItem: Class) => {
        setSelectedClass(classItem);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedClass(null);
    };

    const handleConfirmEnrollment = async (classId: number) => {
        if (!user?.matricula) {
            showError("Usuário não autenticado");
            return;
        }

        try {
            setEnrollmentLoading(true);

            // Fazer inscrição via mutation
            await inscreverMutation.mutateAsync({
                aulaId: classId,
                matricula: user.matricula,
            });
            
            handleCloseModal();

            const selectedClassData = aulas.find((c) => c.id === classId);
            if (selectedClassData && selectedClassData.enrolled >= selectedClassData.capacity) {
                success("Adicionado à lista de espera!");
            } else {
                success("Inscrição realizada com sucesso!");
            }
        } catch (error: any) {
            console.error("Erro ao realizar inscrição:", error);
            showError(error?.response?.data || "Erro ao realizar inscrição");
        } finally {
            setEnrollmentLoading(false);
        }
    };

    const handleUnenroll = async (classId: number) => {
        if (!user?.matricula) {
            showError("Usuário não autenticado");
            return;
        }

        try {
            setUnenrollmentLoading(true);

            // Cancelar via mutation
            const response = await cancelarMutation.mutateAsync({
                aulaId: classId,
                matricula: user.matricula,
            });

            handleCloseUnenrollModal();
            success("Cancelamento realizado com sucesso!");
        } catch (err: any) {
            console.error("Erro ao cancelar inscrição:", err);
            showError(err?.response?.data || "Erro ao processar cancelamento");
        } finally {
            setUnenrollmentLoading(false);
        }
    };

    const handleUnenrollClick = (classItem: Class) => {
        setSelectedClassToUnenroll(classItem);
        setIsUnenrollModalOpen(true);
    };

    const handleCloseUnenrollModal = () => {
        setIsUnenrollModalOpen(false);
        setSelectedClassToUnenroll(null);
    };

    const handleRateClick = (classItem: Class) => {
        setSelectedClassToRate(classItem);
        setIsRatingModalOpen(true);
    };

    const handleCloseRatingModal = () => {
        setIsRatingModalOpen(false);
        setSelectedClassToRate(null);
    };

    const handleConfirmRating = async (classId: number, rating: ClassRating) => {
        try {
            setRatingLoading(true);

            // Obter dados do usuário logado
            if (!user || !user.matricula) {
                console.error("Usuário não está logado ou não possui matrícula");
                showError("Erro: usuário não autenticado");
                return;
            }

            // Buscar dados da aula
            const classData = aulas.find((c) => c.id === classId);
            if (!classData || !classData.instructorId || !classData.classDate) {
                console.error("Dados da aula incompletos", classData);
                showError("Erro: dados da aula incompletos");
                return;
            }

            // Construir requisição
            const request = buildRatingRequest(classId, rating, user.matricula, classData.instructorId, classData.classDate);

            // Enviar para o backend
            const response = await submitRating(request);

            if (response.sucesso) {
                console.log("Avaliação enviada com sucesso:", response.mensagem);

                // Remove a aula da lista de "Minhas Aulas" após avaliação
                setClasses((prevClasses) =>
                    prevClasses.map((classItem) =>
                        classItem.id === classId
                            ? {
                                  ...classItem,
                                  enrollmentStatus: "not_enrolled" as EnrollmentStatus,
                                  userRating: rating,
                              }
                            : classItem,
                    ),
                );

                handleCloseRatingModal();
                success("Avaliação realizada com sucesso!");
            } else {
                console.error("Erro ao enviar avaliação:", response.mensagem);
                showError(`Erro: ${response.mensagem}`);
            }
        } catch (err) {
            console.error("Erro ao realizar avaliação:", err);
            showError("Erro ao enviar avaliação. Tente novamente.");
        } finally {
            setRatingLoading(false);
        }
    };

    // Aulas inscritas vêm diretamente do hook (já filtradas pelo backend)
    const enrolledClasses = aulasInscritas;

    const availableClasses = aulas.filter((classItem) => {
        // 'aulas' já contém apenas aulas não inscritas (filtrado pelo backend)
        // Apenas aplicar os filtros de categoria e busca

        const normalizedClassCategory = classItem.category.trim();
        const normalizedSelectedCategory = selectedCategory.trim();

        const matchesCategory = normalizedSelectedCategory === "Todas" || normalizedClassCategory === normalizedSelectedCategory;

        const matchesSearch = searchQuery === "" || classItem.category.toLowerCase().includes(searchQuery.toLowerCase()) || classItem.instructor.toLowerCase().includes(searchQuery.toLowerCase()) || classItem.location.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    const renderContent = () => {
        if (isLoading) {
            return (
                <>
                    <EnrolledSection>
                        <SectionTitle>Minhas Aulas</SectionTitle>
                        <ClassesGrid>
                            {[...Array(2)].map((_, index) => (
                                <SkeletonCard key={`enrolled-skeleton-${index}`}>
                                    <SkeletonCardImage />
                                    <SkeletonCardContent>
                                        <Skeleton height="28px" width="70%" />
                                        <Skeleton height="18px" width="60%" />
                                        <Skeleton height="18px" width="55%" />
                                        <Skeleton height="18px" width="50%" />
                                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
                                            <Skeleton height="18px" width="100px" />
                                            <Skeleton height="36px" width="80px" borderRadius="0.25rem" />
                                        </div>
                                    </SkeletonCardContent>
                                </SkeletonCard>
                            ))}
                        </ClassesGrid>
                    </EnrolledSection>

                    <SectionTitle>Aulas Disponíveis</SectionTitle>

                    <SkeletonSearchSection>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "2rem",
                            }}
                        >
                            <div style={{ display: "flex", gap: "0.5rem", width: "100%" }}>
                                <div style={{ flex: 1 }}>
                                    <Skeleton height="48px" borderRadius="0.5rem" />
                                </div>
                                <Skeleton height="48px" width="48px" borderRadius="0.5rem" />
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                    justifyContent: "flex-start",
                                    flexWrap: "nowrap",
                                    overflowX: "auto",
                                    paddingBottom: "0.5rem",
                                }}
                            >
                                {[...Array(5)].map((_, index) => (
                                    <SkeletonFilterButton key={index} />
                                ))}
                            </div>
                        </div>
                    </SkeletonSearchSection>

                    <ClassesGrid>
                        {[...Array(6)].map((_, index) => (
                            <SkeletonCard key={`available-skeleton-${index}`}>
                                <SkeletonCardImage />
                                <SkeletonCardContent>
                                    <Skeleton height="28px" width="70%" />
                                    <Skeleton height="18px" width="60%" />
                                    <Skeleton height="18px" width="55%" />
                                    <Skeleton height="18px" width="50%" />
                                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
                                        <Skeleton height="18px" width="100px" />
                                        <Skeleton height="36px" width="120px" borderRadius="0.25rem" />
                                    </div>
                                </SkeletonCardContent>
                            </SkeletonCard>
                        ))}
                    </ClassesGrid>
                </>
            );
        }

        if (errorMessage) {
            return <p style={{ color: "#ef4444", textAlign: "center", marginTop: "2rem" }}>{errorMessage}</p>;
        }

        return (
            <>
                <EnrolledSection>
                    <SectionTitle>Minhas Aulas</SectionTitle>
                    {enrolledClasses.length > 0 ? (
                        <ClassesGrid as={motion.div} key={`enrolled-grid-${enrolledClasses.map((c) => c.id).join("-")}`} initial="hidden" animate="visible" variants={animationVariants.staggerContainer}>
                            {enrolledClasses.map((classItem) => {
                                // Determine qual componente de card usar
                                let CardComponent = EnrolledClassCard;
                                let buttonText = "Cancelar";
                                let ButtonComponent = UnenrollButton;
                                let onClick = () => handleUnenrollClick(classItem);

                                if (classItem.enrollmentStatus === "waiting_list") {
                                    CardComponent = WaitingListClassCard;
                                    buttonText = "Sair da Fila";
                                    ButtonComponent = LeaveWaitingListButton;
                                } else if (classItem.enrollmentStatus === "to_evaluate") {
                                    CardComponent = ToEvaluateClassCard;
                                    buttonText = "Avaliar";
                                    ButtonComponent = EvaluateButton;
                                    onClick = () => handleRateClick(classItem);
                                }

                                return (
                                    <motion.div key={`enrolled-${classItem.id}`} variants={animationVariants.fadeInUp}>
                                        <CardComponent>
                                            <ClassImage src={getModalidadeImage(classItem.category)} alt={classItem.category} />
                                            <ClassInfo>
                                                <ClassTitle>{classItem.category}</ClassTitle>
                                                <ClassDetail>
                                                    <Users size={18} />
                                                    <span>{classItem.instructor}</span>
                                                </ClassDetail>
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
                                                        {classItem.enrollmentStatus === "waiting_list" ? (
                                                            <>
                                                                <span style={{ color: "#f97316", fontWeight: "600" }}>{classItem.enrolled + classItem.waitingList}</span>/{classItem.capacity} alunos
                                                            </>
                                                        ) : classItem.enrollmentStatus === "to_evaluate" ? (
                                                            "Aguardando avaliação"
                                                        ) : (
                                                            `${classItem.enrolled}/${classItem.capacity} alunos`
                                                        )}
                                                    </span>
                                                    <ButtonComponent onClick={onClick} size="sm">
                                                        {buttonText}
                                                    </ButtonComponent>
                                                </ClassFooter>
                                            </ClassInfo>
                                        </CardComponent>
                                    </motion.div>
                                );
                            })}
                        </ClassesGrid>
                    ) : (
                        <motion.div initial="hidden" animate="visible" variants={animationVariants.fadeInUp}>
                            <NoEnrolledClasses>
                                <BookOpen size={48} />
                                <p>Você ainda não está inscrito em nenhuma aula</p>
                            </NoEnrolledClasses>
                        </motion.div>
                    )}
                </EnrolledSection>

                <SectionTitle>Aulas Disponíveis</SectionTitle>

                <SearchSection>
                    <SearchAndFilterBar onSearch={handleSearch} categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
                </SearchSection>

                {availableClasses.length > 0 ? (
                    <ClassesGrid as={motion.div} key={`available-grid-${availableClasses.map((c) => c.id).join("-")}-${selectedCategory}`} initial="hidden" animate="visible" variants={animationVariants.staggerContainer}>
                        {availableClasses.map((classItem) => (
                            <motion.div key={`available-${classItem.id}`} variants={animationVariants.fadeInUp}>
                                <ClassCard>
                                    <ClassImage src={getModalidadeImage(classItem.category)} alt={classItem.category} />
                                    <ClassInfo>
                                        <ClassTitle>{classItem.category}</ClassTitle>
                                        <ClassDetail>
                                            <Users size={18} />
                                            <span>{classItem.instructor}</span>
                                        </ClassDetail>
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
                                                {classItem.waitingList > 0 ? (
                                                    <>
                                                        <span style={{ color: "#f97316", fontWeight: "600" }}>{classItem.enrolled + classItem.waitingList}</span>/{classItem.capacity} alunos
                                                    </>
                                                ) : (
                                                    `${classItem.enrolled}/${classItem.capacity} alunos`
                                                )}
                                            </span>
                                            <Button onClick={() => handleEnrollClick(classItem)}>{classItem.enrolled >= classItem.capacity ? "Entrar na Fila" : "Inscrever-se"}</Button>
                                        </ClassFooter>
                                    </ClassInfo>
                                </ClassCard>
                            </motion.div>
                        ))}
                    </ClassesGrid>
                ) : (
                    <motion.div initial="hidden" animate="visible" variants={animationVariants.fadeInUp}>
                        <EmptyState>
                            <Filter size={48} />
                            <p>Nenhuma aula disponível encontrada com os filtros aplicados</p>
                        </EmptyState>
                    </motion.div>
                )}
            </>
        );
    };

    // Conditional rendering: se o usuário for professor, mostra a página de criar aula
    if (user?.role === "professor") {
        return <CriarAula />;
    }

    return (
        <Container>
            {renderContent()}

            <ClassEnrollmentModal isOpen={isModalOpen} onClose={handleCloseModal} classData={selectedClass} onConfirm={handleConfirmEnrollment} isLoading={enrollmentLoading} />

            <UnenrollModal isOpen={isUnenrollModalOpen} onClose={handleCloseUnenrollModal} classData={selectedClassToUnenroll} onConfirm={handleUnenroll} isLoading={unenrollmentLoading} />

            <RatingModal isOpen={isRatingModalOpen} onClose={handleCloseRatingModal} classData={selectedClassToRate} onConfirm={handleConfirmRating} isLoading={ratingLoading} />
        </Container>
    );
};

export default Aulas;
