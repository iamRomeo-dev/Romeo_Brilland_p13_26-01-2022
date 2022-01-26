import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet title="Argent Bank" />
      <nav class="main-nav">
        <a class="main-nav-logo" href="./index.html">
          <img
            class="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a class="main-nav-item" href="./sign-in.html">
            <i class="fa fa-user-circle"></i>
            {t("NavBar.signin")}
          </a>
        </div>
      </nav>
    </>
  );
};
