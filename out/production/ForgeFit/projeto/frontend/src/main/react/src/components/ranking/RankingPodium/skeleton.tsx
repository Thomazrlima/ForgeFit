import { SkeletonPodiumPlace, SkeletonAvatar, SkeletonText, SkeletonPodium, PodiumSection } from "./styles.ts";

const RankingPodiumSkeleton = () => {
    return (
        <PodiumSection>
            {[2, 1, 3].map((position) => (
                <SkeletonPodiumPlace key={position} $position={position}>
                    <SkeletonAvatar $position={position} />
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                        <SkeletonText width={position === 1 ? "120px" : "100px"} height="20px" />
                        <SkeletonText width={position === 1 ? "100px" : "80px"} height="24px" />
                    </div>
                    <SkeletonPodium $position={position} />
                </SkeletonPodiumPlace>
            ))}
        </PodiumSection>
    );
};

export default RankingPodiumSkeleton;
