import { AvatarContainer } from "./styles";

interface AvatarProps {
    name: string;
    avatar?: string;
    size?: number;
    className?: string;
}

const Avatar = ({ name, avatar, size = 60, className }: AvatarProps) => {
    const getInitials = (fullName: string) => {
        return fullName
            .split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <AvatarContainer $hasImage={!!avatar} $size={size} className={className}>
            {avatar ? <img src={avatar} alt={name} /> : getInitials(name)}
        </AvatarContainer>
    );
};

export default Avatar;
