/** @jsxImportSource @emotion/react */
import UserCircleIcon from "@heroicons/react/solid/UserCircleIcon";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "twin.macro";
import { signUpUser } from "../API";
import { changeName, setSignUp } from "../features/counter/counterSlice";

const Register = () => {
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
      firstName: "",
      lastName: "",
    },
  });

  const signUpRegister = async (user) => {
    const correctUser = await signUpUser(user);
    if (correctUser) {
      dispatch(setSignUp());
      history("/sign-in");
    } else {
      history("/page-404");
    }
  };

  return (
    <main tw="flex-1 bg-gray-800">
      <section className="sign-in-content">
        <div tw="flex flex-col gap-4 items-center">
          <div tw="svg:(h-5 w-5 text-center)">
            <UserCircleIcon />
          </div>
          <h1>Sign Up</h1>
        </div>
        <form
          onSubmit={handleSubmit((data) => {
            signUpRegister(data);
          })}
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
          <div className="input-wrapper">
            <label htmlFor="firstName">firstName</label>
            <input
              {...register("firstName", {
                required: "This is required.",
              })}
              type="text"
              id="firstName"
            />
            <p>{errors.firstName?.message}</p>
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">lastName</label>
            <input
              {...register("lastName", {
                required: "This is required.",
              })}
              type="text"
              id="lastName"
            />
            <p>{errors.lastName?.message}</p>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <input type="submit" value="Register" className="sign-in-button" />{" "}
        </form>
      </section>
    </main>
  );
};

export default Register;
