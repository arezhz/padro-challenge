import { Route, Routes } from "react-router-dom";
import PublicRoute from "../../../routes/components/public-route";
import Login from "../components/login";

export default function LoginRoutes() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
}
