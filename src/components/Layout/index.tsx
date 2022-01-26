import { FC } from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import * as S from "./Layout.styled";

interface LayoutProps {
  pageTitle: string;
}

const Layout: FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <S.PageRoot>
        <Header />
        <main>{children}</main>
        <Footer />
      </S.PageRoot>
    </>
  );
};

export default Layout;
