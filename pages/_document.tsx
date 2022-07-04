import {Html, Head, Main, NextScript} from "next/document";
import type {ReactNode} from "react";
import Script from "next/script";

// Global site tag (gtag.js) - Google Analytics
const gtag: string = "G-NQZE4MXV0F";
const ga: string = `\
window.dataLayer = window.dataLayer || [];\
function gtag(){dataLayer.push(arguments);}\
gtag('js', new Date());\
gtag('config', '${gtag}');\
`;

export default function Document(): ReactNode {
    return <Html>
        <Head>
            <meta httpEquiv="Content-Language" content="en"/>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="Robots" content="INDEX, FOLLOW"/>
            <link rel="icon" href="/favicon.ico"/>
            {/* Global site tag (gtag.js) - Google Analytics */}
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`} strategy="afterInteractive"/>
            <Script id="google-analytics" strategy="afterInteractive">{ga}</Script>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>;
}
