import { NextSeo } from "next-seo";
import { ThemeProvider } from "styled-components";
import HomePage from "../components/Pages/Home";
import { useGlobalContext } from "../contexts/GlobalContext";
import GlobalStyle from "../styles/global";
import { darkTheme, lightTheme } from "../styles/theme";

export default function Home() {
    const { theme } = useGlobalContext();
    return (
        <>
            <NextSeo
                title="Get Soluções"
                description="Manutenção em: Notebook's, Computadores PC Gamer, PS2, PS3, PS4"
                canonical="https://solucoesget.com/"
            />
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyle />
                <HomePage />
            </ThemeProvider>
        </>
    );
}
