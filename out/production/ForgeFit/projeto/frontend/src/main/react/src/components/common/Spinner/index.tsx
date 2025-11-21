import { SpinnerContainer, SpinnerCircle } from "./styles";

interface SpinnerProps {
    size?: number;
    color?: string;
}

const Spinner = ({ size = 40, color }: SpinnerProps) => {
    return (
        <SpinnerContainer>
            <SpinnerCircle size={size} color={color}>
                <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
                    <circle
                        cx="20"
                        cy="20"
                        r="16"
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="25 75"
                        strokeDashoffset="0"
                        style={{
                            animation: "spin 1s linear infinite",
                            transformOrigin: "center",
                        }}
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#AB2522" />
                            <stop offset="100%" stopColor="#EF752B" />
                        </linearGradient>
                    </defs>
                </svg>
            </SpinnerCircle>
        </SpinnerContainer>
    );
};

export default Spinner;
