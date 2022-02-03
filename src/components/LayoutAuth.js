/** @jsxImportSource @emotion/react */
import "twin.macro";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import UserCircleIcon from "@heroicons/react/solid/UserCircleIcon";
import { Link, useLocation } from "react-router-dom";

export const LayoutAuth = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const firstName = localStorage.getItem("firstName");

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
          <h1 className="sr-only">Argent Bank of {firstName}</h1>
        </Link>

        {/* Condition for the user login or registration */}

        <Link
          tw="inline-flex items-center justify-center ml-auto no-underline font-bold hover:underline svg:(-ml-1 mr-2 h-5 w-5)"
          to="/user"
        >
          <UserCircleIcon /> {firstName}
        </Link>
      </nav>
    </>
  );
};
