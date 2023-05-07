import { GetServerSideProps } from "next";
import { getCookie, deleteCookie } from "cookies-next";
import { DashboardPage, Loading } from "../../components/Pages/Mother";
import { api } from "../../services";
import { iUser } from "../../interfaces";
import { NextSeo } from "next-seo";

export interface iDashboardProps {
    users: iUser[];
}

export default function Dashboard({ users }: iDashboardProps) {
    return (
        <>
            <NextSeo
                title="Get Soluções - Assistência em: Notebook's, Computadores, PC Gamer, PS2, PS3, PS4"
                description="Assistência em: Notebook's, Computadores, PC Gamer, PS2, PS3, PS4. A melhor e mais completa para o seu equipamento."
                canonical="https://solucoesget.com/"
            />
            <DashboardPage users={users} />
            <Loading />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const token = getCookie("@TokenGetSolucoes", ctx);

    if (!token) {
        return {
            redirect: { destination: "/mae/login", permanent: false },
        };
    }

    try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get<iUser[]>("users");

        return {
            props: { users: data },
        };
    } catch {
        deleteCookie("@TokenGetSolucoes", ctx);
        return {
            redirect: { destination: "/mae/login", permanent: false },
        };
    }
};
