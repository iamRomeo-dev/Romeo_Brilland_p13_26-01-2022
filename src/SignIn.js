/** @jsxImportSource @emotion/react */
import UserCircleIcon from "@heroicons/react/solid/UserCircleIcon";
import "twin.macro";
import { useForm } from "react-hook-form";

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <main tw="flex-1 bg-gray-800">
      <section class="sign-in-content">
        <div tw="flex flex-col gap-4 items-center">
          <div tw="svg:(-ml-1 mr-2 h-5 w-5 text-center)">
            <UserCircleIcon />
          </div>
          <h1>Sign In</h1>
        </div>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div class="input-wrapper">
            <label for="username">Username</label>
            <input
              {...register("username", {
                required: "This is required.",
              })}
              type="text"
              id="username"
            />
            <p>{errors.username?.message}</p>
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
          <div class="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <input type="submit" value="Sing In" class="sign-in-button" />{" "}
        </form>
      </section>
    </main>
  );
};
