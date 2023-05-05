import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import Head from "next/head";
import Analytics from "../components/Analytics";
import Providers from "../contexts";
import GlobalStyle from "../styles/global";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Analytics />
            <Head>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Get Soluções" />
                <meta
                    property="og:description"
                    content="Assistência em: Notebook's, Computadores, PC Gamer, PS2, PS3, PS4. A melhor e mais completa para o seu equipamento."
                />
                <meta property="og:image" content="get_comp.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:heigth" content="630" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:url" content="https://solucoesget.com/" />
                <meta property="og:site_name" content="Get Soluções" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <DefaultSeo {...SEO} />
            <Providers>
                <Component {...pageProps} />
                <GlobalStyle />
            </Providers>
        </>
    );
}
