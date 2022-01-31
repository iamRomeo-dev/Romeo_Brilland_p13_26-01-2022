/** @jsxImportSource @emotion/react */
import UserCircleIcon from "@heroicons/react/solid/UserCircleIcon";
import "twin.macro";

export const SignIn = () => {
  return (
    <main tw="flex-1 bg-gray-800">
      <section class="sign-in-content">
        <div tw="flex flex-col gap-4 items-center">
          <div tw="svg:(-ml-1 mr-2 h-5 w-5 text-center)">
            <UserCircleIcon />
          </div>
          <h1>Sign In</h1>
        </div>
        <form>
          <div class="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div class="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div class="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <a href="./user.html" class="sign-in-button">
            Sign In
          </a>
          <button class="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};
