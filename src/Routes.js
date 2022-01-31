/** @jsxImportSource @emotion/react */
import "twin.macro";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { PageSkeleton } from "./shared/Page";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export const AppRoutes = () => {
  const location = useLocation();
  return (
    <ErrorBoundary FallbackComponent={PageSkeleton} key={location.pathname}>
      <Suspense fallback={null}>
        <div tw="flex flex-col min-h-screen">
          <Layout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};
