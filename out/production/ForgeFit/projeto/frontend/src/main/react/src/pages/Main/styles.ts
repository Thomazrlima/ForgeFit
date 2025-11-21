import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 5rem;
    background-color: transparent;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;

    @media (max-width: 48rem) {
        padding: 1rem 1.5rem;
    }
`;

export const Logo = styled.img`
    height: 10rem;
    width: auto;

    @media (max-width: 48rem) {
        height: 6rem;
    }
`;

export const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 48rem) {
        gap: 0.5rem;
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 1rem;

    @media (max-width: 48rem) {
        display: none;
    }
`;

export const NavLink = styled.a`
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
        background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`;

export const Section = styled.section`
    padding: 4rem 2rem;
    text-align: center;
    position: relative;
    background-color: ${({ theme }) => theme.colors.background};
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        color: ${({ theme }) => theme.colors.text};
        background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    p {
        font-size: 1.25rem;
        line-height: 1.8;
        color: ${({ theme }) => theme.colors.text};
        max-width: 75rem;
        margin: 0 auto;
    }
`;

export const AboutImage = styled.img`
    width: 100vw;
    height: 20rem;
    margin-top: 2rem;
    margin-left: calc(-50vw + 50%);
    border-radius: 0;
    object-fit: cover;
    object-position: center;
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-image: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}) 1;
`;

export const VideoBackground = styled.video`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;
    display: block;
`;

export const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`;

export const VideoOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    background: rgba(0, 0, 0, 0.8);
    overflow: hidden;
    padding: 0 1rem;

    p {
        text-align: center;
        font-size: clamp(1.5rem, 5vw, 3.2rem);
        font-weight: bold;
        padding: 2rem;
        border-radius: 0.5rem;
        max-width: 90%;
        overflow: hidden;
        line-height: 1.4;

        @media (max-width: 48rem) {
            font-size: clamp(1rem, 6vw, 6rem);
            padding: 1rem;
            white-space: normal;
            word-wrap: break-word;
        }
    }
`;

export const AnimatedPhrase = styled.span`
    display: inline-block;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeIn 1s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 1;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

export const ServicesGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-top: 3rem;
    width: 100%;
    max-width: 1200px;
`;

export const ServiceCard = styled.div<{ reverse?: boolean }>`
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    align-items: center;
    gap: 3rem;
    padding: 2rem;
    border-radius: 0.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ServiceImage = styled.div`
    flex: 1;
    min-width: 300px;
    height: 300px;
    background: #1a1a1a;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}) 1;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }

    @media (max-width: 768px) {
        width: 100%;
        min-width: 100%;
    }
`;

export const ServiceContent = styled.div`
    flex: 1;
    text-align: left;

    h3 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.colors.primary};
    }

    p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: ${({ theme }) => theme.colors.text};
    }
`;

export const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    width: 100%;
    max-width: 1000px;

    @media (max-width: 48rem) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        margin-top: 2rem;
    }
`;

export const ContactCard = styled.div`
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}) 1;
    border-radius: 0.5rem;
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }

    .icon {
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.colors.primary};
        display: flex;
        justify-content: center;
    }

    h3 {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
        color: ${({ theme }) => theme.colors.primary};
    }

    p {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.text};
        margin: 0;
        word-break: break-word;
    }

    a {
        color: ${({ theme }) => theme.colors.text};
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: ${({ theme }) => theme.colors.primary};
        }
    }

    @media (max-width: 48rem) {
        padding: 1.5rem;

        h3 {
            font-size: 1.2rem;
        }

        .icon {
            svg {
                width: 40px;
                height: 40px;
            }
        }
    }
`;

export const Footer = styled.footer`
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    color: white;
    padding: 2rem;
    text-align: center;
    font-size: 1rem;

    p {
        margin: 0.5rem 0;
        line-height: 1.6;
    }

    strong {
        font-weight: 600;
    }

    a {
        color: white;
        text-decoration: none;
        transition: opacity 0.3s ease;

        &:hover {
            opacity: 0.8;
            text-decoration: underline;
        }
    }
`;
