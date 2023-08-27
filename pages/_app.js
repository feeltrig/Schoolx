import "../styles/globals.css";
import {SessionProvider} from "next-auth/react";

import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "../chakratheme/CustomTheme";

import Layout from "../components/Layout";

function MyApp({Component, pageProps: {session, ...pageProps}}) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
