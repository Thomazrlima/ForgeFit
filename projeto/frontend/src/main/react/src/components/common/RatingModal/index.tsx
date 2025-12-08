import { useState } from "react";
import { Rating } from "@mui/material";
import { Star } from "lucide-react";
import Modal from "../Modal";
import { Button } from "../Button";
import type { Class, ClassRating } from "../../../pages/Aulas/mockData";
import { ModalTitle, HeaderContainer, ClassInfo, RatingSection, RatingLabel, RatingRow, CommentsSection, CommentsTextarea, ButtonContainer, RatingDescription } from "./styles";

interface RatingModalProps {
    isOpen: boolean;
    onClose: () => void;
    classData: Class | null;
    onConfirm: (classId: number, rating: ClassRating) => void;
    isLoading?: boolean;
}

export const RatingModal = ({ isOpen, onClose, classData, onConfirm, isLoading = false }: RatingModalProps) => {
    const [ratings, setRatings] = useState({
        didatica: 0,
        atencao: 0,
        pontualidade: 0,
    });
    const [comentarios, setComentarios] = useState("");

    const handleRatingChange = (criteria: keyof typeof ratings, value: number | null) => {
        setRatings((prev) => ({
            ...prev,
            [criteria]: value || 0,
        }));
    };

    const handleSubmit = () => {
        if (!classData) return;

        const rating: ClassRating = {
            ...ratings,
            comentarios: comentarios.trim() || undefined,
        };

        onConfirm(classData.id, rating);

        // Reset form
        setRatings({
            didatica: 0,
            atencao: 0,
            pontualidade: 0,
        });
        setComentarios("");
    };

    const handleClose = () => {
        // Reset form when closing
        setRatings({
            didatica: 0,
            atencao: 0,
            pontualidade: 0,
        });
        setComentarios("");
        onClose();
    };

    const isFormValid = ratings.didatica > 0 && ratings.atencao > 0 && ratings.pontualidade > 0;

    if (!classData) return null;

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <HeaderContainer>
                <ModalTitle>Avaliar Aula</ModalTitle>
                <ClassInfo>
                    <h3>{classData.category}</h3>
                    <p>Professor(a): {classData.instructor}</p>
                </ClassInfo>
            </HeaderContainer>

            <RatingSection>
                <RatingRow>
                    <div>
                        <RatingLabel>Didática</RatingLabel>
                        <RatingDescription>Como você avalia o método de ensino e clareza das explicações?</RatingDescription>
                    </div>
                    <Rating
                        value={ratings.didatica}
                        onChange={(_, value) => handleRatingChange("didatica", value)}
                        icon={<Star size={24} fill="currentColor" />}
                        emptyIcon={<Star size={24} />}
                        size="large"
                        sx={{
                            "& .MuiRating-iconFilled": {
                                color: "#f97316",
                            },
                            "& .MuiRating-iconEmpty": {
                                color: "#666666",
                            },
                            "& .MuiRating-iconHover": {
                                color: "#f97316",
                            },
                            "@media (max-width: 768px)": {
                                "& .MuiRating-icon": {
                                    fontSize: "2rem",
                                },
                            },
                        }}
                    />
                </RatingRow>

                <RatingRow>
                    <div>
                        <RatingLabel>Atenção</RatingLabel>
                        <RatingDescription>O professor foi atencioso com os alunos e suas necessidades?</RatingDescription>
                    </div>
                    <Rating
                        value={ratings.atencao}
                        onChange={(_, value) => handleRatingChange("atencao", value)}
                        icon={<Star size={24} fill="currentColor" />}
                        emptyIcon={<Star size={24} />}
                        size="large"
                        sx={{
                            "& .MuiRating-iconFilled": {
                                color: "#f97316",
                            },
                            "& .MuiRating-iconEmpty": {
                                color: "#666666",
                            },
                            "& .MuiRating-iconHover": {
                                color: "#f97316",
                            },
                            "@media (max-width: 768px)": {
                                "& .MuiRating-icon": {
                                    fontSize: "2rem",
                                },
                            },
                        }}
                    />
                </RatingRow>

                <RatingRow>
                    <div>
                        <RatingLabel>Pontualidade</RatingLabel>
                        <RatingDescription>A aula começou e terminou no horário previsto?</RatingDescription>
                    </div>
                    <Rating
                        value={ratings.pontualidade}
                        onChange={(_, value) => handleRatingChange("pontualidade", value)}
                        icon={<Star size={24} fill="currentColor" />}
                        emptyIcon={<Star size={24} />}
                        size="large"
                        sx={{
                            "& .MuiRating-iconFilled": {
                                color: "#f97316",
                            },
                            "& .MuiRating-iconEmpty": {
                                color: "#666666",
                            },
                            "& .MuiRating-iconHover": {
                                color: "#f97316",
                            },
                            "@media (max-width: 768px)": {
                                "& .MuiRating-icon": {
                                    fontSize: "2rem",
                                },
                            },
                        }}
                    />
                </RatingRow>
            </RatingSection>

            <CommentsSection>
                <RatingLabel>Comentários (opcional)</RatingLabel>
                <CommentsTextarea value={comentarios} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setComentarios(e.target.value)} placeholder="Deixe seus comentários sobre a aula..." maxLength={500} />
                <span
                    style={{
                        fontSize: "0.8rem",
                        color: "#666",
                        textAlign: "right",
                        display: "block",
                    }}
                >
                    {comentarios.length}/500
                </span>
            </CommentsSection>

            <ButtonContainer>
                <Button variant="secondary" onClick={handleClose} disabled={isLoading}>
                    Cancelar
                </Button>
                <Button onClick={handleSubmit} disabled={!isFormValid || isLoading}>
                    {isLoading ? "Enviando..." : "Enviar Avaliação"}
                </Button>
            </ButtonContainer>
        </Modal>
    );
};
