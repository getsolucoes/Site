import { NextSeo } from "next-seo";
import { ThemeProvider } from "styled-components";
import ContatoPage from "../components/Pages/Contato";
import { useGlobalContext } from "../contexts/GlobalContext";
import GlobalStyle from "../styles/global";
import { darkTheme, lightTheme } from "../styles/theme";

export default function Contato() {
    const { theme } = useGlobalContext();
    return (
        <>
            <NextSeo
                title="Get Soluções - Assistência em: Notebook's, Computadores, PC Gamer, PS2, PS3, PS4"
                description="Assistência em: Notebook's, Computadores, PC Gamer, PS2, PS3, PS4. A melhor e mais completa para o seu equipamento."
                canonical="https://solucoesget.com/contato"
            />
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyle />
                <ContatoPage />
            </ThemeProvider>
        </>
    );
}