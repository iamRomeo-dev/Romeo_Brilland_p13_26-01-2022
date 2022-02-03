/** @jsxImportSource @emotion/react */
import "twin.macro";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import UserCircleIcon from "@heroicons/react/solid/UserCircleIcon";
import { Link, useLocation } from "react-router-dom";

export const Layout = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const firstName = localStorage.getItem("firstName");
  const access_token = localStorage.getItem("access_token");
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
        {access_token && (
          <Link
            tw="inline-flex items-center justify-center ml-auto no-underline font-bold hover:underline svg:(-ml-1 mr-2 h-5 w-5)"
            to="/user"
          >
            <UserCircleIcon /> {firstName}
          </Link>
        )}
        {/* Condition for the user login or registration */}
        {access_token === null &&
          (location.pathname === "/register" || location.pathname === "/") && (
            <Link
              tw="inline-flex items-center justify-center ml-auto no-underline font-bold hover:underline svg:(-ml-1 mr-2 h-5 w-5)"
              to="/sign-in"
            >
              <UserCircleIcon /> {t("NavBar.signin")}
            </Link>
          )}
        {access_token === null && location.pathname === "/sign-in" && (
          <Link
            tw="inline-flex items-center justify-center ml-auto no-underline font-bold hover:underline svg:(-ml-1 mr-2 h-5 w-5)"
            to="/register"
          >
            <UserCircleIcon /> Register
          </Link>
        )}
      </nav>
    </>
  );
};
