import { NextSeo } from "next-seo";
import { ThemeProvider } from "styled-components";
import { useGlobalContext } from "../../contexts/GlobalContext";
import GlobalStyle from "../../styles/global";
import { lightTheme, darkTheme } from "../../styles/theme";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllLocationIds, getLocation } from "../../lib/locations";
import ProtectPage from "../../components/Pages/Pascoa/Protect";
import Modal from "../../components/Pages/Pascoa/Modal";
import Loading from "../../components/Pages/Pascoa/Loading";

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
                <ProtectPage id={location?.id} />
                <Loading />
                <Modal isDelete />
            </ThemeProvider>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllLocationIds();
    return {
        paths,
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
