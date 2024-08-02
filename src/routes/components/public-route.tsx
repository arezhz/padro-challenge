import { Navigate, Outlet } from "react-router-dom";
import TokenService from "../../utils/services/token.service";
import { Suspense } from "react";

function PublicRoute() {
  const hasToken = TokenService.getToken();
  return !hasToken ? (
    <Suspense>
      <Outlet />{" "}
    </Suspense>
  ) : (
    <Navigate to="/dashboard" />
  );
}

export default PublicRoute;
