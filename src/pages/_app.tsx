import type { AppProps } from "next/app";

import "../styles/global.scss";
import Header from "@/components/Header";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bredough</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Bredough, buy bread easily" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
