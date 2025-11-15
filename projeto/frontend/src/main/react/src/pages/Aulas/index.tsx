import { useState, useEffect } from "react";
import { Calendar, Users, MapPin, Filter, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Container, ClassesGrid, ClassCard, ClassImage, ClassInfo, ClassTitle, ClassDetail, ClassFooter, EmptyState, SkeletonCard, SkeletonCardImage, SkeletonCardContent, SkeletonFilterButton, SkeletonSearchSection, EnrolledSection, SectionTitle, EnrolledClassCard, WaitingListClassCard, UnenrollButton, LeaveWaitingListButton, NoEnrolledClasses, SearchSection, ToEvaluateClassCard, EvaluateButton } from "./styles.ts";
import { fetchClasses, fetchCategories, type Class, type EnrollmentStatus } from "./mockData.ts";
import SearchAndFilterBar from "../../components/common/SearchAndFilterBar";
import { Button } from "../../components/common/Button";
import Skeleton from "../../components/common/Skeleton";
import { animationVariants } from "../../hooks/useScrollAnimation";
import ClassEnrollmentModal from "../../components/common/ClassEnrollmentModal";
import UnenrollModal from "../../components/common/UnenrollModal";


const Aulas = () => {
    const [selectedCategory, setSelectedCategory] = useState("Todas");
    const [searchQuery, setSearchQuery] = useState("");
    const [classes, setClasses] = useState<Class[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedClass, setSelectedClass] = useState<Class | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [enrollmentLoading, setEnrollmentLoading] = useState(false);
    const [selectedClassToUnenroll, setSelectedClassToUnenroll] = useState<Class | null>(null);
    const [isUnenrollModalOpen, setIsUnenrollModalOpen] = useState(false);
    const [unenrollmentLoading, setUnenrollmentLoading] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                setError(null);

                const [classesData, categoriesData] = await Promise.all([fetchClasses(), fetchCategories()]);

                setClasses(classesData);
                setCategories(categoriesData);
            } catch (err) {
                setError("Erro ao carregar dados. Tente novamente.");
                console.error("Erro ao carregar dados:", err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

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
        try {
            setEnrollmentLoading(true);

            await new Promise((resolve) => setTimeout(resolve, 1500));

            setClasses((prevClasses) =>
                prevClasses.map((classItem) =>
                    classItem.id === classId
                        ? {
                              ...classItem,
                              enrolled: classItem.enrolled >= classItem.capacity ? classItem.enrolled : classItem.enrolled + 1,
                              enrollmentStatus: classItem.enrolled >= classItem.capacity ? ("waiting_list" as EnrollmentStatus) : ("enrolled" as EnrollmentStatus),
                              waitingList: classItem.enrolled >= classItem.capacity ? classItem.waitingList + 1 : classItem.waitingList,
                          }
                        : classItem,
                ),
            );

            handleCloseModal();

            const selectedClassData = classes.find((c) => c.id === classId);
            if (selectedClassData && selectedClassData.enrolled >= selectedClassData.capacity) {
                console.log("Adicionado à lista de espera!");
            } else {
                console.log("Inscrição realizada com sucesso!");
            }
        } catch (error) {
            console.error("Erro ao realizar inscrição:", error);
        } finally {
            setEnrollmentLoading(false);
        }
    };

    const handleUnenroll = async (classId: number) => {
        try {
            setUnenrollmentLoading(true);

            await new Promise((resolve) => setTimeout(resolve, 500));

            setClasses((prevClasses) =>
                prevClasses.map((classItem) =>
                    classItem.id === classId
                        ? {
                              ...classItem,
                              enrolled: classItem.enrollmentStatus === "enrolled" ? Math.max(0, classItem.enrolled - 1) : classItem.enrolled,
                              enrollmentStatus: "not_enrolled" as EnrollmentStatus,
                              waitingList: classItem.enrollmentStatus === "waiting_list" ? Math.max(0, classItem.waitingList - 1) : classItem.waitingList,
                          }
                        : classItem,
                ),
            );

            handleCloseUnenrollModal();
            console.log("Cancelamento realizado com sucesso!");
        } catch (error) {
            console.error("Erro ao cancelar inscrição:", error);
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


    const enrolledClasses = classes.filter((classItem) => classItem.enrollmentStatus === "enrolled" || classItem.enrollmentStatus === "waiting_list" || classItem.enrollmentStatus === "to_evaluate");

    const availableClasses = classes.filter((classItem) => {
        // Primeiro filtra apenas as aulas disponíveis (não inscritas)
        if (classItem.enrollmentStatus !== "not_enrolled") {
            return false;
        }

        // Depois aplica os filtros de categoria e busca
        const normalizedClassCategory = classItem.category.trim();
        const normalizedSelectedCategory = selectedCategory.trim();

        const matchesCategory = normalizedSelectedCategory === "Todas" || normalizedClassCategory === normalizedSelectedCategory;

        const matchesSearch = searchQuery === "" || classItem.name.toLowerCase().includes(searchQuery.toLowerCase()) || classItem.instructor.toLowerCase().includes(searchQuery.toLowerCase()) || classItem.location.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    const renderContent = () => {
        if (loading) {
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

        if (error) {
            return <p style={{ color: "#ef4444", textAlign: "center", marginTop: "2rem" }}>{error}</p>;
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
                                } 

                                return (
                                    <motion.div key={`enrolled-${classItem.id}`} variants={animationVariants.fadeInUp}>
                                        <CardComponent>
                                            <ClassImage src={classItem.image} alt={classItem.name} />
                                            <ClassInfo>
                                                <ClassTitle>{classItem.name}</ClassTitle>
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
                                    <ClassImage src={classItem.image} alt={classItem.name} />
                                    <ClassInfo>
                                        <ClassTitle>{classItem.name}</ClassTitle>
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

    return (
        <Container>
            {renderContent()}

            <ClassEnrollmentModal isOpen={isModalOpen} onClose={handleCloseModal} classData={selectedClass} onConfirm={handleConfirmEnrollment} isLoading={enrollmentLoading} />

            <UnenrollModal isOpen={isUnenrollModalOpen} onClose={handleCloseUnenrollModal} classData={selectedClassToUnenroll} onConfirm={handleUnenroll} isLoading={unenrollmentLoading} />
        </Container>
    );
};

export default Aulas;
