import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./Layout";
import { Tata } from "./Tata";
import { Toto } from "./Toto";
import { PageSkeleton } from "./shared/Page";

export const AppRoutes = () => {
  const location = useLocation();
  return (
    <ErrorBoundary FallbackComponent={PageSkeleton} key={location.pathname}>
      <Suspense fallback={null}>
        <Layout />
        <Routes>
          <Route path="/ou" element={<Toto />} />
          <Route path="/to" element={<Tata />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
