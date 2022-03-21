/** @jsxImportSource @emotion/react */
import UserCircleIcon from "@heroicons/react/solid/UserCircleIcon";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "twin.macro";
import { profileUser, profileUserEdit } from "../API";

const Edit = () => {
  const history = useNavigate();
  const access_token = localStorage.getItem("access_token_redux");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const loginRegister = async (user) => {
    const correctUser = await profileUserEdit(access_token, user);
    if (correctUser) {
      profileUser(access_token);
      history("/user");
      window.location.reload();
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
          <h1>Edit</h1>
        </div>
        <form
          onSubmit={handleSubmit((data) => {
            loginRegister(data);
          })}
        >
          <div className="input-wrapper">
            <label htmlFor="firstName">firstName</label>
            <input
              {...register("firstName", {
                required: "firstName is required",
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

          <input
            type="submit"
            value="Edit"
            className="sign-in-button"
            tw="cursor-pointer"
          />
        </form>
      </section>
    </main>
  );
};
export default Edit;
