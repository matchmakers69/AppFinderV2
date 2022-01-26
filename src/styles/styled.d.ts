import "styled-components";

declare module "styled-components" {
  /**
   * DefaultTheme is a part of styled-components, PLEASE DO NOT CHANGE THE NAME
   */
  export interface DefaultTheme {
    title: string;
    colors: {
      white: string;
      black: string;
      darkGrey: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      large: string;
    };
    weight: {
      thin: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
  }
}
