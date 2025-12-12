import { motion } from "framer-motion";
import Avatar from "../../common/Avatar";
import { PodiumSection, PodiumPlace, PodiumAvatar, Crown, PodiumInfo, PodiumName, PodiumScore, Podium } from "./styles.ts";

interface RankingMember {
    id: number;
    name: string;
    avatar?: string;
    score: number;
}

interface RankingPodiumProps {
    topThree: RankingMember[];
    formatScore: (score: number) => string;
    animated?: boolean;
}

const RankingPodium = ({ topThree, formatScore, animated = true }: RankingPodiumProps) => {
    console.log("RankingPodium recebeu topThree:", topThree);
    
    const getMedalEmoji = (position: number) => {
        switch (position) {
            case 1:
                return "🥇";
            case 2:
                return "🥈";
            case 3:
                return "🥉";
            default:
                return null;
        }
    };

    const animationVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    if (topThree.length === 0) {
        console.log("RankingPodium: topThree está vazio, retornando null");
        return null;
    }

    return (
        <PodiumSection>
            {topThree.map((member, index) => {
                const position = index + 1;
                const Component = animated ? motion.div : "div";
                const animationProps = animated
                    ? {
                          initial: animationVariants.initial,
                          animate: animationVariants.animate,
                          transition: { delay: index * 0.2, duration: 0.5 },
                      }
                    : {};

                return (
                    <PodiumPlace key={member.id} $position={position} as={Component} {...animationProps}>
                        <PodiumAvatar $position={position}>
                            {position === 1 && <Crown>👑</Crown>}
                            <Avatar name={member.name} avatar={member.avatar} size={position === 1 ? 120 : 100} />
                        </PodiumAvatar>
                        <PodiumInfo>
                            <PodiumName $position={position}>{member.name}</PodiumName>
                            <PodiumScore $position={position}>{formatScore(member.score)} pts</PodiumScore>
                        </PodiumInfo>
                        <Podium $position={position}>{getMedalEmoji(position)}</Podium>
                    </PodiumPlace>
                );
            })}
        </PodiumSection>
    );
};

export default RankingPodium;
