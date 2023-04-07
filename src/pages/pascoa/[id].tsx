import { NextSeo } from "next-seo";
import { ThemeProvider } from "styled-components";
import { useGlobalContext } from "../../contexts/GlobalContext";
import GlobalStyle from "../../styles/global";
import { lightTheme, darkTheme } from "../../styles/theme";
import { GetStaticProps } from "next";
import { getLocation } from "../../lib/locations";
import ProtectPage from "../../components/Pages/Pascoa/Protect";
import NotFoundPascoa from "../../components/Pages/Pascoa/NotFound";

interface iPascoaProps {
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
                {location ? (
                    <ProtectPage id={location.id} />
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
            { params: { id: "37914d48-62b6-4915-8d44-9a9ab077204b" } },
            { params: { id: "9c328118-348f-4482-85e7-40bc8e58dddb" } },
        ],
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const id = ctx.params!.id;
    if (typeof id === "string") {
        const location = await getLocation(id);
        return { props: { location } };
    }
};
