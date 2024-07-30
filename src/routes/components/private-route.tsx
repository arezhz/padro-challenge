import { Navigate, Outlet } from "react-router-dom";
import TokenService from "../../utils/services/token.service";

export default function PrivateRoute() {
  const isAuth = TokenService.getToken();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
