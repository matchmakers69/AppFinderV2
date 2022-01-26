import { FC } from "react";
import Layout from "src/components/Layout";
import withProtectedRoute from "src/HOC/withProtectedRoute";

const ProAccount: FC = (props) => {
  return (
    <Layout pageTitle="Orcha Digital Health - proaccount">
      <div data-testid="component-wrapper">Proaccount</div>
    </Layout>
  );
};

export const getServerSideProps = withProtectedRoute(() => ({
  props: {},
}));
export default ProAccount;
