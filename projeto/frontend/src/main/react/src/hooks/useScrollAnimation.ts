import { useInView } from "framer-motion";
import { useRef } from "react";

// Variantes de animação
export const animationVariants = {
    fadeInUp: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },
    fadeInLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    },
    fadeInRight: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    },
    staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    },
} as const;

export const useScrollAnimation = (options = {}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.3,
        ...options,
    });

    return { ref, isInView };
};

export const useScrollAnimations = (count: number, options = {}) => {
    // Cria todos os refs de uma vez
    const refs = Array.from({ length: count }, () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useRef(null);
    });

    // Cria todos os estados de visualização de uma vez
    const inViewStates = refs.map((ref) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useInView(ref, {
            once: true,
            amount: 0.3,
            ...options,
        });
    });

    return refs.map((ref, index) => ({
        ref,
        isInView: inViewStates[index],
    }));
};
