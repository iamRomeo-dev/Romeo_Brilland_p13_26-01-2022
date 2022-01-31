/** @jsxImportSource @emotion/react */
import UserCircleIcon from "@heroicons/react/solid/UserCircleIcon";
import { useForm } from "react-hook-form";
import "twin.macro";
import { postUser } from "../API";

export const SignUp = () => {
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

  return (
    <section class="sign-in-content">
      <div tw="flex flex-col gap-4 items-center">
        <div tw="svg:(-ml-1 mr-2 h-5 w-5 text-center)">
          <UserCircleIcon />
        </div>
        <h1>Sign In</h1>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          postUser(data);
        })}
      >
        <div class="input-wrapper">
          <label for="email">email</label>
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
        <div class="input-wrapper">
          <label for="password">Password</label>
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
        <div class="input-wrapper">
          <label for="firstName">firstName</label>
          <input
            {...register("firstName", {
              required: "This is required.",
            })}
            type="text"
            id="firstName"
          />
          <p>{errors.firstName?.message}</p>
        </div>
        <div class="input-wrapper">
          <label for="lastName">lastName</label>
          <input
            {...register("lastName", {
              required: "This is required.",
            })}
            type="text"
            id="lastName"
          />
          <p>{errors.lastName?.message}</p>
        </div>
        <div class="input-remember">
          <input type="checkbox" id="remember-me" />
          <label for="remember-me">Remember me</label>
        </div>
        <input type="submit" value="Sing In" class="sign-in-button" />{" "}
      </form>
    </section>
  );
};
