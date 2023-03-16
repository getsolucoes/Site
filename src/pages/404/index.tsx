import Image from "next/image";
import { ThemeProvider } from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useGlobalContext } from "../../contexts/GlobalContext";
import GlobalStyle from "../../styles/global";
import { darkTheme, lightTheme } from "../../styles/theme";
import { Styled404, StyledContent } from "./styles";

export default function Custom404() {
    const { theme } = useGlobalContext();
    return (
        <>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyle />
                <Header />
                <Styled404>
                    <StyledContent>
                        <h1>404</h1>
                        <h2>Página não encontrada</h2>
                    </StyledContent>
                    <StyledContent>
                        <Image
                            src={
                                theme === "light"
                                    ? "/g_dark.svg"
                                    : "/g_ligth.svg"
                            }
                            alt="Get Soluções"
                            width={100}
                            height={100}
                        />
                    </StyledContent>
                </Styled404>
                <Footer />
            </ThemeProvider>
        </>
    );
}
