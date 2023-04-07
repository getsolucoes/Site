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
            { params: { id: "a0080d04-8f0c-4bd7-8a0a-4ec25a6c84ae" } },
            { params: { id: "d9045d3e-96cc-4961-8461-9436a2d880b4" } },
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
