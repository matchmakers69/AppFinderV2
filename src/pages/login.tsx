import { FC } from "react";
import SignInForm from "src/components/Forms/SignInForm";
import Layout from "src/components/Layout";
import { login } from "./api/login";

const Login: FC = () => {
  return (
    <Layout pageTitle="Orcha Digital Health - SignIn">
      <div data-testid="component-wrapper">
        <SignInForm login={login} />
      </div>
    </Layout>
  );
};

export default Login;
