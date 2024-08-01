import { Route, Routes } from "react-router-dom";
import PublicRoute from "../../../routes/components/public-route";
import Login from "..";
import { lazy } from "react";

const LoginNumber = lazy(() => import("../component/login-number"));
const VerificationCode = lazy(() => import("../component/verification-code"));

export default function LoginRoutes() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route element={<Login />}>
          <Route index element={<LoginNumber />} />
          <Route path="verification" element={<VerificationCode />} />
        </Route>
      </Route>
    </Routes>
  );
}
