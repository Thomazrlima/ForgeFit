import { Container, SpinnerWrapper, Logo, LoadingText } from "./styles";
import logo from "../../../assets/logo.png";

const LoadingScreen = () => {
    return (
        <Container>
            <Logo src={logo} alt="ForgeFit" />
            <SpinnerWrapper>
                <div className="spinner" />
            </SpinnerWrapper>
            <LoadingText>Carregando...</LoadingText>
        </Container>
    );
};

export default LoadingScreen;
