import { NextSeo } from "next-seo";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Floating from "../components/Floating";
import Header from "../components/Header";
import Main from "../components/Main";
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
                canonical="https://get-solucoes.vercel.app/"
            />
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyle />
                <Header />
                <Floating />
                <Main />
            </ThemeProvider>
        </>
    );
}
