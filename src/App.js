import { Global } from "@emotion/react";
import tw, { GlobalStyles } from "twin.macro";
import "./App.css";
import { NavBar } from "./NavBar";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Argent Bank" />
      <GlobalStyles />
      <Global styles={{ body: tw`antialiased font-sans` }} />
      <I18nextProvider i18n={i18n}>
        <NavBar />
      </I18nextProvider>
    </HelmetProvider>
  );
}

export default App;
