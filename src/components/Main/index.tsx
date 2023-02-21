import Image from "next/image";
import React from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { StyledContainer, StyledHero, StyledText } from "./styles";

const Main = () => {
    const { theme } = useGlobalContext();
    return (
        <main>
            <StyledHero>
                <StyledContainer>
                    <StyledText>
                        <h1>Assistência e soluções em tecnologia</h1>
                        <p>Nosso time irá cuidar de tudo para você.</p>
                    </StyledText>
                    <div>
                        <Image
                            src={
                                theme === "light"
                                    ? "/getout_ligth.svg"
                                    : "/getout_dark.svg"
                            }
                            alt="Get Soluções"
                            width={125}
                            height={55}
                        ></Image>
                    </div>
                </StyledContainer>
            </StyledHero>
        </main>
    );
};

export default Main;
