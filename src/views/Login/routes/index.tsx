import { Route, Routes } from "react-router-dom";
import PublicRoute from "../../../routes/components/public-route";
import Login from "..";
import LoginNumber from "../component/login-number";

export default function LoginRoutes() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route element={<Login />}>
          <Route index element={<LoginNumber />} />
        </Route>
      </Route>
    </Routes>
  );
}
