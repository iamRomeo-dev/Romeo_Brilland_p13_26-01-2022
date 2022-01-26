import tw, { GlobalStyles } from "twin.macro";
import "./App.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AppRoutes } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";

/** @type {import("react").FC} */
const AppProviders = ({ children }) => {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Argent Bank" />
      <GlobalStyles />
      <BrowserRouter>{children}</BrowserRouter>
    </HelmetProvider>
  );
};

const App = () => {
  return (
    <AppProviders>
      <Global styles={{ body: tw`antialiased font-sans` }} />
      <I18nextProvider i18n={i18n}>
        <HelmetProvider>
          <Helmet titleTemplate="%s | OC" />
          <AppRoutes />
        </HelmetProvider>
      </I18nextProvider>
    </AppProviders>
  );
};

export default App;
