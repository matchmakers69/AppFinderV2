import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *, *::before, *::after {
    box-sizing: border-box;
  }
 html {
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    line-height: 1.6;
    font: 400 1.6rem 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
  }
  a {
    text-decoration: none;
  }

  p {
    font: 400 1.6rem 'Inter', sans-serif;
    padding: 0;
    margin:0;
  }


  figure {
    display: block;
    padding: 0;
    margin:0;
  }

  ul, ol {
    padding: 0;
    margin:0;
    list-style: none;
  }

    #nprogress .bar {
  height:3px;
}

#nprogress .bar {
  background: ${({ theme }) => theme.colors.black};
}

#nprogress .spinner-icon {
  border-top-color: ${({ theme }) => theme.colors.black};
  border-left-color: ${({ theme }) => theme.colors.black};
}
`;
