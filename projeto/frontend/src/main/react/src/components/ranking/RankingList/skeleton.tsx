import { SkeletonRankingItem, SkeletonAvatar, SkeletonText, RankingList } from "./styles.ts";

interface RankingListSkeletonProps {
    count?: number;
}

const RankingListSkeleton = ({ count = 7 }: RankingListSkeletonProps) => {
    return (
        <RankingList>
            {[...Array(count)].map((_, index) => (
                <SkeletonRankingItem key={index}>
                    <SkeletonText width="50px" height="30px" />
                    <SkeletonAvatar $position={4} style={{ width: "60px", height: "60px" }} />
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <SkeletonText width="150px" height="20px" />
                    </div>
                    <SkeletonText width="100px" height="24px" />
                </SkeletonRankingItem>
            ))}
        </RankingList>
    );
};

export default RankingListSkeleton;
