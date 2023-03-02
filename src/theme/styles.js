import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  colors: {
    gray: {
      700: "#1f2733",
    },
    navy: {
      50: "#FFFFF0",
      100: "#FEFCBF",
      200: "#FAF089",
      300: "#F6E05E",
      400: "#ECC94B",
      500: "#D69E2E",
      600: "#B7791F",
      700: "#975A16",
      800: "#744210",
      900: "#5F370E",
    },
    navy: {
      50: "#FFFFF0",
      100: "#FEFCBF",
      200: "#FAF089",
      300: "#F6E05E",
      400: "#ECC94B",
      500: "#D69E2E",
      600: "#B7791F",
      700: "#975A16",
      800: "#744210",
      900: "#5F370E",
    }
  },
  styles: {
    global: (props) => ({
      body: {
        overflowX: "hidden",
        bg: mode("gray.50", "#1B254B")(props),
        fontFamily: "Helvetica, sans-serif",
      },
      html: {
        fontFamily: "Helvetica, sans-serif",
      },
    }),
  },
};
