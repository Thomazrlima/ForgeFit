import { SkeletonBox } from "./styles.ts";

interface SkeletonProps {
    width?: string;
    height?: string;
    borderRadius?: string;
    className?: string;
}

const Skeleton = ({ width = "100%", height = "20px", borderRadius = "0.25rem", className }: SkeletonProps) => {
    return <SkeletonBox width={width} height={height} borderRadius={borderRadius} className={className} />;
};

export default Skeleton;
