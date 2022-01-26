import { FC, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import loginSchema from "src/lib/validation/loginFormSchema";
import { logInAction } from "src/store/auth/actions";

export type SignInType = Pick<Yup.InferType<typeof loginSchema>, "username" | "password">;

type SignInFormProps = {
  login: (user: SignInType) => Promise<SignInType>;
};

const SignInForm: FC<SignInFormProps> = ({ login }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<SignInType>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });
  const onLoginFormSubmit = async (data: SignInType): Promise<void> => {
    setTimeout(() => {
      reset({
        username: "",
        password: "",
      });
    }, 300);
    setLoading(true);
    try {
      const response = await login(data);
      dispatch(logInAction(response));
      // set cookies
      Cookies.set("token", "here jwt token");
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  const isDisabled = !isValid || loading;
  if (loading) {
    return <span>Is loading...</span>;
  }
  return (
    <form onSubmit={handleSubmit(onLoginFormSubmit)} noValidate>
      <div>
        <label>
          Username
          <input
            type="text"
            {...register("username")}
            aria-invalid={!!errors.username}
            autoComplete="username"
            aria-describedby="password-constraints"
            required
          />
        </label>
        {errors.username ? <span role="alert">{errors.username.message}</span> : null}
      </div>
      <div>
        <label>
          Password
          <input
            type="password"
            {...register("password")}
            aria-invalid={!!errors.password}
            aria-describedby="password-constraints"
            autoComplete="current-password"
            required
          />
        </label>

        {errors.password ? <span role="alert">{errors.password.message}</span> : null}
      </div>
      <button disabled={isDisabled} type="submit">
        Submit
      </button>
    </form>
  );
};

export default SignInForm;
