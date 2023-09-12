// components/themes/defaultTheme.tsx
import { DefaultTheme } from "styled-components";
export const defaultTheme: DefaultTheme = {
  name: "default",
  borderRadius: "4px",
  bodyColor: "#F0F0F5",
  textColor: "#41414D",
  palette: {
    common: {
      black: "#09090A",
      white: "#ffffff",
      brand: "#115D8C",
    },
    primary: {
      main: "#41414D",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#737380",
      contrastText: "#F3F5F6",
    },
  },
};
