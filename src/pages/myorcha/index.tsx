import { VFC } from "react";
import Layout from "src/components/Layout";
import DynamicContent from "src/features/DynamicContent";
import { H1 } from "src/styles/typography";

const Login: VFC = () => {
  return (
    <Layout pageTitle="Orcha Digital Health - my-orcha">
      <div data-testid="component-wrapper">
        <H1>My orcha</H1>

        <DynamicContent />
      </div>
    </Layout>
  );
};

export default Login;
