import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import DefaultTheme from "@/styles/DefaultTheme";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={DefaultTheme}>
        <Head>
          <link rel="icon" href="/images/tabIcon.png" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Newsletter />
        <Footer />
        <LiveChat />
      </ThemeProvider>
    </>
  );
}
