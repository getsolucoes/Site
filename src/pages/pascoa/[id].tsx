import { NextSeo } from "next-seo";
import { ThemeProvider } from "styled-components";
import { useGlobalContext } from "../../contexts/GlobalContext";
import GlobalStyle from "../../styles/global";
import { lightTheme, darkTheme } from "../../styles/theme";
import { GetStaticPaths, GetStaticProps } from "next";
import ContatoPage from "../../components/Pages/Contato";

interface iPascoaProps {
    id: string;
}

export default function Pascoa({ id }: iPascoaProps) {
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

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: "ce4b0e28-dcf6-4977-b0d5-a6875cdd8619" } },
            { params: { id: "e2f77be2-bd13-4042-a1a7-29e600d814c0" } },
            { params: { id: "16d7e5b8-1276-4a7f-882c-95c8207d3ba5" } },
        ],
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const id = ctx.params!.id;
    if (typeof id === "string") {
        return { props: { id } };
    }
};
