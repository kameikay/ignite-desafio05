import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "highlight": "#FFBA08",
      "opacityHighlight": "#FFBA0880",
    },
    dark: {
      "black": "#000000",
      "headingsAndText": "#47585B",
      "info": "#999999",
      "opacityInfo": "#99999980",
    },
    light: {
      "white": "#FFFFFF",
      "headingsAndText": "#F5F8FA",
      "info": "#DADADA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  },
  styles: {
    global: {
      body: {
        bg: "light.headingsAndText",
        color: "dark.headingsAndText"
      }
    }
  }
});