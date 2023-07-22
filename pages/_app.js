import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../chakratheme/CustomTheme";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const mainState = {
    items: {
      "Fruits and vegetables": [
        {
          name: "Avocade",
          note: "",
          imageURL: "",
          category: "Fruits and vegetables",
        },
        {
          name: "Banana",
          note: "",
          imageURL: "",
          category: "Fruits and vegetables",
        },
        {
          name: "Mango",
          note: "",
          imageURL: "",
          category: "Fruits and vegetables",
        },
      ],
      "Meat and Fish": [
        {
          name: "Moms butt",
          note: "",
          imageURL: "",
          category: "Meat and Fish",
        },
        {
          name: "Your butt",
          note: "",
          imageURL: "",
          category: "Meat and Fish",
        },
      ],
      Beverages: [
        {
          name: "Wine",
          note: "get naughty",
          imageURL: "",
          category: "Beverages",
        },
      ],
      Pets: [],
    },
    history: [],
    currentList: {},
  };

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component mainState={mainState} {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
