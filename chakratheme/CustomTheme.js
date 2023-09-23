// 1. Import the extendTheme function
import {extendTheme} from "@chakra-ui/react";
import {defineStyleConfig} from "@chakra-ui/react";
import {accordionTheme} from "./CustomAccordian";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: "darkblue",
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const container = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    shadow: "2xl",
  },
});

const fonts = {
  heading: "Varela Round",
  body: "Varela Round",
};

export const theme = extendTheme({
  colors,
  fonts,
  components: {Accordion: accordionTheme, Button: container},
});
