/** @jsxImportSource @emotion/react */
import "twin.macro";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { PageSkeleton, Page404 } from "./pages/Page";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { User } from "./pages/User";
import { Edit } from "./pages/Edit";

export const AppRoutes = () => {
  const location = useLocation();
  const access_token = localStorage.getItem("access_token");

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
