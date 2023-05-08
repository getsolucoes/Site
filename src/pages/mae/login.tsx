import { GetServerSideProps } from "next";
import { Loading, LoginPage } from "../../components/Pages/Mother";
import { getCookie } from "cookies-next";
import { NextSeo } from "next-seo";

export default function Login() {
    return (
        <>
            <NextSeo
                title="Get Soluções - Assistência em: Notebook's, Computadores, PC Gamer, PS2, PS3, PS4"
                description="Assistência em: Notebook's, Computadores, PC Gamer, PS2, PS3, PS4. A melhor e mais completa para o seu equipamento."
                canonical="https://solucoesget.com/"
            />
            <LoginPage />
            <Loading />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const token = getCookie("@TokenGetSolucoes", ctx);

    if (token) {
        return {
            redirect: { destination: "/mae/dashboard", permanent: false },
        };
    }

    return {
        props: {},
    };
};
