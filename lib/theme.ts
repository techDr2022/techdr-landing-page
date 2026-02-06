import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      50: "#e6f7f5",
      100: "#b3e7e0",
      200: "#80d7cc",
      300: "#4dc7b7",
      400: "#26b8a5",
      500: "#0d9488", // primary teal
      600: "#0f766e",
      700: "#115e59",
      800: "#134e4a",
      900: "#134e4a",
    },
  },
  fonts: {
    body: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    heading: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      "html": { scrollBehavior: "smooth" },
      "body": { fontFeatureSettings: '"rlig" 1, "calt" 1' },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "teal",
      },
    },
  },
});
