import { StyledButton, StyledLinkButton } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

interface LinkButtonProps {
    to: string;
    children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export const LinkButton = ({ to, children }: LinkButtonProps) => {
    return <StyledLinkButton to={to}>{children}</StyledLinkButton>;
};
