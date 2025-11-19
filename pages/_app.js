import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/source-code-pro";
import "@fontsource-variable/montserrat";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

export default function App({ Component, pageProps }) {
  const theme = extendTheme({
    styles: {
      global: {
        'html, body': {
          bg: "#171717",
          color: "white",
          fontFamily: "'Poppins', sans-serif",
          overflowX: 'hidden',
          width: '100%'
        },
        '#__next': { overflowX: 'hidden', width: '100%' }
      },
    },
  });

  return (
    <>
        <Head>
          <title>Doot</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
        <Analytics />
    </>
  );
}
