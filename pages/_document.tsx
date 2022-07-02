import {Html, Head, Main, NextScript} from "next/document";
import type {ReactNode} from "react";

export default function Document(): ReactNode {
    return <Html>
        <Head>
            <meta httpEquiv="Content-Language" content="en"/>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="Robots" content="INDEX, FOLLOW"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>;
}
