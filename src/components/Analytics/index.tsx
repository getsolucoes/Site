import Script from "next/script";

const Analytics = () => {
    return (
        <>
            <Script
                async
                src={"https://www.googletagmanager.com/gtag/js?id=G-B3QGPS96HR"}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-B3QGPS96HR', {
                            page_path: window.location.pathname,
                        });
                        `,
                }}
            />
        </>
    );
};

export default Analytics;
