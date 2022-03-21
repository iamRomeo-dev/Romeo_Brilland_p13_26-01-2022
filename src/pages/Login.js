/** @jsxImportSource @emotion/react */
import UserCircleIcon from "@heroicons/react/solid/UserCircleIcon";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "twin.macro";
import tw from "twin.macro";
import { loginUser } from "../API";
import { setToken } from "../store";

const Login = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginRegister = async (user) => {
    const correctUser = await loginUser(user);
    if (correctUser) {
      localStorage.removeItem("signUpUser_status_boolean");
      dispatch(setToken(localStorage.getItem("access_token")));
      history("/");
      window.location.reload();
    } else {
      history("/page-404");
    }
  };

  const signUpUser_status_boolean = localStorage.getItem(
    "signUpUser_status_boolean"
  );

  return (
    <main tw="flex-1 bg-gray-800">
      <section className="sign-in-content">
        <div tw="flex flex-col gap-4 items-center">
          <div tw="svg:(h-5 w-5 text-center)">
            <UserCircleIcon />
          </div>
          <h1>Sign In</h1>
          {signUpUser_status_boolean === true && (
            <p tw="text-sm font-medium text-gray-700 text-center">
              Félicitation ! Votre inscription a été un succès.
            </p>
          )}
        </div>
        <form
          onSubmit={handleSubmit((data) => {
            loginRegister(data);
          })}
          // Add margin-top if the signUpUser_status_boolean message appears
          css={signUpUser_status_boolean === true && tw`mt-2`}
        >
          <div className="input-wrapper">
            <label htmlFor="email">email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
              type="email"
              id="email"
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              {...register("password", {
                required: "This is required.",
                minLength: { value: 4, message: "Min length is 4" },
              })}
              type="password"
              id="password"
            />
            <p>{errors.password?.message}</p>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <input
            type="submit"
            value="Sign In"
            className="sign-in-button"
            tw="cursor-pointer"
          />
          <Link to="/register" className="sign-in-button" tw="text-center">
            Register
          </Link>
        </form>
      </section>
    </main>
  );
};

export default Login;
