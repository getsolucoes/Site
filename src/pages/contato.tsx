import { NextSeo } from "next-seo";
import ContatoPage from "../components/Pages/Contato";

export default function Contato() {
    return (
        <>
            <NextSeo
                title="Get Soluções - Assistência em: Notebook's, Computadores, PC Gamer, PS2, PS3, PS4"
                description="Assistência em: Notebook's, Computadores, PC Gamer, PS2, PS3, PS4. A melhor e mais completa para o seu equipamento."
                canonical="https://solucoesget.com/contato"
            />

            <ContatoPage />
        </>
    );
}
