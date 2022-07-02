import "../styles/globals.css";
import type {AppProps} from "next/app";
import type {ReactNode} from "react";

export default function MyApp({Component, pageProps}: AppProps): ReactNode {
    return <Component {...pageProps}/>;
}
