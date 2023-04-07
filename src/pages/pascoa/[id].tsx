import { NextSeo } from "next-seo";
import { ThemeProvider } from "styled-components";
import { useGlobalContext } from "../../contexts/GlobalContext";
import GlobalStyle from "../../styles/global";
import { lightTheme, darkTheme } from "../../styles/theme";
import { GetStaticProps } from "next";
import { patchLocationGet } from "../../lib/locations";
import PascoaPage from "../../components/Pages/Pascoa";
import NotFoundPascoa from "../../components/Pages/Pascoa/NotFound";

export interface iPascoaProps {
    location: {
        id: string;
        name: string;
        expiredAt: string;
    };
}

export default function Pascoa({ location }: iPascoaProps) {
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
                {location.id ? (
                    <PascoaPage location={location} />
                ) : (
                    <NotFoundPascoa />
                )}
            </ThemeProvider>
        </>
    );
}

export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { id: "8fa7817d-6f76-404d-9728-490dcc65fde7" } },
            { params: { id: "32838a4f-9be1-404c-a1fe-49ee79bfcf16" } },
        ],
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const id = ctx.params!.id;
    if (typeof id === "string") {
        const location = await patchLocationGet(id);
        return { props: { location } };
    }
};
