/** @jsxImportSource @emotion/react */
import "twin.macro";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { PageSkeleton, Page404 } from "./pages/Page";
import { useSelector } from "react-redux";

const Home = React.lazy(() => import("./pages/Home"));
const Footer = React.lazy(() => import("./components/Footer"));
const Layout = React.lazy(() => import("./components/Layout"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const User = React.lazy(() => import("./pages/User"));
const Edit = React.lazy(() => import("./pages/Edit"));

export const AppRoutes = () => {
  const location = useLocation();
  const access_token = localStorage.getItem("access_token");
  // const access_token = useSelector((state) => state.controlAuthentification);

  return (
    <ErrorBoundary FallbackComponent={PageSkeleton} key={location.pathname}>
      <Suspense fallback={null}>
        <div tw="flex flex-col min-h-screen">
          <Layout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page-404" element={<Page404 />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sign-in" element={<Login />} />
            {access_token && <Route path="/user" element={<User />} />}
            {access_token && <Route path="/edit" element={<Edit />} />}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};
