import { Container, Input, Label } from "./styles";

interface InputFieldProps {
    label: string;
    type: string;
    placeholder: string;
    id: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ label, type, placeholder, id, value, onChange }: InputFieldProps) => {
    return (
        <Container>
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </Container>
    );
};

export default InputField;
