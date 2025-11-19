import { Container, Input, Label } from "./styles";

interface InputFieldProps {
    label: string;
    type: string;
    placeholder: string;
    id: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    variant?: "gradient" | "classic";
}

const InputField = ({ label, type, placeholder, id, value, onChange, required, variant = "gradient" }: InputFieldProps) => {
    return (
        <Container>
            <Label htmlFor={id} variant={variant}>
                {label}
            </Label>
            <Input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} variant={variant} />
        </Container>
    );
};

export default InputField;
