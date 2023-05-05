import { NextSeo } from "next-seo";
import MotherPage from "../../components/Pages/Mother";
import Loading from "../../components/Pages/Mother/Loading";
import SuccessPage from "../../components/Pages/Mother/Success";
import Modal from "../../components/Pages/Mother/Modal";
import Head from "next/head";

export default function Mother() {
    return (
        <>
            <Head>
                <meta property="og:image" content="get_comp_mae.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:heigth" content="630" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:url" content="https://solucoesget.com/" />
            </Head>
            <NextSeo
                title="Get Soluções - Assistência em: Notebook's, Computadores, PC Gamer, PS2, PS3, PS4"
                description="Assistência em: Notebook's, Computadores, PC Gamer, PS2, PS3, PS4. A melhor e mais completa para o seu equipamento."
                canonical="https://solucoesget.com/mae"
            />

            <MotherPage />
            <Loading />
            <SuccessPage />
            <Modal />
        </>
    );
}
