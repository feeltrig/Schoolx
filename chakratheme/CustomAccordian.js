import {accordionAnatomy} from "@chakra-ui/anatomy";
import {createMultiStyleConfigHelpers} from "@chakra-ui/react";
import {CustomStyleConstants} from "../Utils/customStyleConstants";

const {definePartsStyle, defineMultiStyleConfig} =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  //   container: {
  //     _hover: {
  //       shadow: "md",
  //       color: "white",
  //       bgGradient: `linear(to-r, ${CustomStyleConstants.globalGradient})`,
  //     },
  //   },
  button: {
    _hover: {
      shadow: "md",
      color: "white",
      bgGradient: `linear(to-r, ${CustomStyleConstants.globalGradient})`,
    },
  },
});

export const accordionTheme = defineMultiStyleConfig({baseStyle});
