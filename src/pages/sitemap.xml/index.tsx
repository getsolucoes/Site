// pages/server-sitemap-index.xml/index.tsx
import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    // Method to source urls from cms
    // const urls = await fetch('https//example.com/api')

    const fields = [
        {
            loc: "https://get-solucoes.vercel.app/",
            lastmod: new Date().toISOString(),
        },
    ];

    return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
