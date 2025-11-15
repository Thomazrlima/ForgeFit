import { motion } from "framer-motion";
import Avatar from "../../common/Avatar";
import { RankingList, RankingItem, Position, PlayerInfo, PlayerName, Score } from "./styles.ts";

interface RankingMember {
    id: number;
    name: string;
    avatar?: string;
    score: number;
}

interface RankingListComponentProps {
    members: RankingMember[];
    formatScore: (score: number) => string;
    startPosition?: number;
    animated?: boolean;
}

const RankingListComponent = ({ members, formatScore, startPosition = 4, animated = true }: RankingListComponentProps) => {
    const animationVariants = {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
    };

    if (members.length === 0) return null;

    return (
        <RankingList>
            {members.map((member, index) => {
                const position = index + startPosition;
                const Component = animated ? motion.div : "div";
                const animationProps = animated
                    ? {
                          initial: animationVariants.initial,
                          animate: animationVariants.animate,
                          transition: { delay: index * 0.1, duration: 0.3 },
                      }
                    : {};

                return (
                    <RankingItem key={member.id} $position={position} as={Component} {...animationProps}>
                        <Position>#{position}</Position>
                        <Avatar name={member.name} avatar={member.avatar} size={60} />
                        <PlayerInfo>
                            <PlayerName>{member.name}</PlayerName>
                        </PlayerInfo>
                        <Score>{formatScore(member.score)} pts</Score>
                    </RankingItem>
                );
            })}
        </RankingList>
    );
};

export default RankingListComponent;
