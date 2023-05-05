import { NextSeo } from "next-seo";
import HomePage from "../components/Pages/Home";

export default function Home() {
    return (
        <>
            <NextSeo
                title="Get Soluções - Assistência em: Notebook's, Computadores, PC Gamer, PS2, PS3, PS4"
                description="Assistência em: Notebook's, Computadores, PC Gamer, PS2, PS3, PS4. A melhor e mais completa para o seu equipamento."
                canonical="https://solucoesget.com/"
            />

            <HomePage />
        </>
    );
}
