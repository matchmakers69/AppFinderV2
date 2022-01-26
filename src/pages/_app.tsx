import React, { useEffect } from "react";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { ToastProvider } from "react-toast-notifications";
import { ThemeProvider } from "styled-components";
import wrapper from "src/store";
import { setPathAndQuery } from "src/store/server/serverSlice";
import { GlobalStyle } from "src/styles/Global";
import { theme } from "src/themes/theme";
import createEmotionCache from "../utils/createEmotionCache";

const isServerSideRendered = () => {
  return typeof window === "undefined";
};

if (process.env.NODE_ENV !== "production" && !isServerSideRendered()) {
  import("react-dom").then((ReactDOM) => {
    import("@axe-core/react").then((axe) => {
      axe.default(React, ReactDOM, 1000, {});
    });
  });
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App = function ({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }

    Router.events.on("routeChangeStart", () => {
      // dispatch here to switch of visible to close pop-up
      NProgress.start();
    });

    Router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });

    Router.events.on("routeChangeError", () => {
      NProgress.done();
    });
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Orcha Digital Health</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ Component, ctx }) => {
  store.dispatch(
    setPathAndQuery({
      pathName: ctx.pathname,
      query: ctx.query,
    })
  );

  return {
    pageProps: {
      // Call page-level getInitialProps
      // DON'T FORGET TO PROVIDE STORE TO PAGE
      ...(Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {}),
      // Some custom thing for all pages
      pathname: ctx.pathname,
    },
  };
});

export default wrapper.withRedux(App);
