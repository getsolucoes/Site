import ButtonAction from "../../../ButtonAction";
import { StyledContainer, StyledHero, StyledText } from "./styles";

const Hero = () => {
    return (
        <StyledHero>
            <div>
                <div>
                    <StyledContainer>
                        <StyledText>
                            <h1>Assistência e soluções em tecnologia</h1>
                            <p>Nosso time irá cuidar de tudo para você.</p>
                            <ButtonAction location="HERO" />
                        </StyledText>
                    </StyledContainer>
                </div>
            </div>
        </StyledHero>
    );
};

export default Hero;
