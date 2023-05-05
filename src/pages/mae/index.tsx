import { NextSeo } from "next-seo";
import MotherPage from "../../components/Pages/Mother";
import Loading from "../../components/Pages/Mother/Loading";
import SuccessPage from "../../components/Pages/Mother/Success";
import Modal from "../../components/Pages/Mother/Modal";

export default function Mother() {
    return (
        <>
            <NextSeo
                title="Get Soluções - Assistência em: Notebook's, Computadores, PC Gamer, PS2, PS3, PS4"
                description="Assistência em: Notebook's, Computadores, PC Gamer, PS2, PS3, PS4. A melhor e mais completa para o seu equipamento."
                canonical="https://solucoesget.com/contato"
            />

            <MotherPage />
            <Loading />
            <SuccessPage />
            <Modal />
        </>
    );
}
