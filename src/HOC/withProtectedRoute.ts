import { parseCookie } from "src/services/cookies.service";

const withProtectedRoute = (gssp) => {
  return (context) => {
    const { req } = context;
    const { token } = parseCookie(req.headers.cookie);

    if (!token) {
      return {
        redirect: {
          destination: "/login",
        },
      };
    }

    return gssp(context); // Continue on to call `getServerSideProps` logic
  };
};

withProtectedRoute.displayName = "withProtectedRoute";

export default withProtectedRoute;
