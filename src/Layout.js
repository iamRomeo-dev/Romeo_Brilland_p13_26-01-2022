/** @jsxImportSource @emotion/react */
import "twin.macro";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import UserCircleIcon from "@heroicons/react/solid/UserCircleIcon";
import { Link } from "react-router-dom";

export const Layout = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet title="Argent Bank" />
      <nav class="main-nav ">
        <Link class="main-nav-logo" to="/">
          <img
            class="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
        </Link>
        <Link
          tw="inline-flex items-center justify-center ml-auto no-underline font-bold hover:underline svg:(-ml-1 mr-2 h-5 w-5)"
          to="/sign-in"
        >
          <UserCircleIcon /> {t("NavBar.signin")}
        </Link>
      </nav>
    </>
  );
};
