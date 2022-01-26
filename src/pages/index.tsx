import { FC } from "react";
import Layout from "src/components/Layout";
import { H1 } from "src/styles/typography";

const Home: FC = () => {
  return (
    <Layout pageTitle="Orcha Digital Health - Home">
      <div data-testid="component-wrapper">
        <H1>Welcome to Orcha</H1>
      </div>
    </Layout>
  );
};

export default Home;
