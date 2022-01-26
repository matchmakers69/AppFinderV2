import baseStyled, { ThemedStyledInterface, DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  title: "default",
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    darkGrey: "#323232",
  },
  fontSizes: {
    xs: "1.4rem",
    sm: "1.6rem",
    md: "2rem",
    large: "3rem",
  },
  weight: {
    thin: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
