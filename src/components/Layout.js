/** @jsxImportSource @emotion/react */
import "twin.macro";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import UserCircleIcon from "@heroicons/react/solid/UserCircleIcon";
import { Link, useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../shared/SmallFunctions";
import { useSelector } from "react-redux";

const Layout = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const firstName = localStorage.getItem("firstName");
  const access_token_storage = localStorage.getItem("access_token");
  const access_token = useSelector((state) => state.controlAuthentification);

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <Helmet title="Argent Bank" />
      <nav className="main-nav ">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        {/* Condition if logged*/}
        {access_token_storage && (
          <div tw="flex gap-8">
            <Link
              tw="inline-flex items-center justify-center ml-auto no-underline font-bold hover:underline svg:(mr-2 h-5 w-5)"
              to="/user"
            >
              <UserCircleIcon /> {capitalizeFirstLetter(firstName)}
            </Link>
            <button
              tw="inline-flex items-center justify-center ml-auto no-underline font-bold hover:underline svg:(mr-2 h-5 w-5)"
              onClick={logOut}
            >
              <UserCircleIcon /> Log out
            </button>
          </div>
        )}

        {/* Condition for the user login or registration if not logged*/}
        {/* Condition if logged*/}
        {access_token_storage === null &&
          (location.pathname === "/register" || location.pathname === "/") && (
            <Link
              tw="inline-flex items-center justify-center ml-auto no-underline font-bold hover:underline svg:(mr-2 h-5 w-5)"
              to="/sign-in"
            >
              <UserCircleIcon /> {t("NavBar.signin")}
            </Link>
          )}
        {/* Condition if logged*/}
        {access_token_storage === null && location.pathname === "/sign-in" && (
          <Link
            tw="inline-flex items-center justify-center ml-auto no-underline font-bold hover:underline svg:(mr-2 h-5 w-5)"
            to="/register"
          >
            <UserCircleIcon /> Register
          </Link>
        )}
      </nav>
    </>
  );
};

export default Layout;
