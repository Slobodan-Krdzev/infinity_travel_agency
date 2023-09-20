import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import DefaultTheme from "@/styles/DefaultTheme";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  return (
    <AnimatePresence >
      <motion.div
      key={router.route}
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
        duration: 0.5
      }}
      variants={{
        initialState : {
          opacity: 0
        },
        animateState : {
          opacity: 1
        },
        exitState : {
          opacity: 0
        }
      }}
      >

      
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
      </motion.div>
    </AnimatePresence>
  );
}
