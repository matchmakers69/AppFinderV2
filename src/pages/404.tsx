import { FC } from "react";
import AppLink from "src/components/common/AppLink";
import Layout from "src/components/Layout";
import { H1, H4 } from "src/styles/typography";

const PageNotFound: FC = () => {
  return (
    <Layout pageTitle="Orcha Digital Health - Page Not Found">
      <div data-testid="component-wrapper">
        <header>
          <H1>404</H1>
          <H4>Sorry, there is nothing here</H4>
        </header>
        <AppLink href="/" label="Back home" />
      </div>
    </Layout>
  );
};

export default PageNotFound;
