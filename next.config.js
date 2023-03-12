/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    async redirects() {
        return [
            {
                source: "/mapos",
                destination: "http://getsolucoes.byethost14.com/mapos/",
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig;
