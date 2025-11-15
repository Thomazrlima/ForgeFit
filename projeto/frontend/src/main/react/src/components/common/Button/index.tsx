import { StyledButton, StyledLinkButton } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
}

interface LinkButtonProps {
    to: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
}

export const Button = ({ children, variant = "primary", size = "md", ...props }: ButtonProps) => {
    return (
        <StyledButton variant={variant} size={size} {...props}>
            {children}
        </StyledButton>
    );
};

export const LinkButton = ({ to, children, variant = "primary", size = "md" }: LinkButtonProps) => {
    return (
        <StyledLinkButton to={to} variant={variant} size={size}>
            {children}
        </StyledLinkButton>
    );
};
