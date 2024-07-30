import { Navigate, Outlet } from 'react-router-dom';
import TokenService from '../../utils/services/token.service';

function PublicRoute() {
  const hasToken = TokenService.getToken();
  return !hasToken ? <Outlet /> : <Navigate to="*" />;
}

export default PublicRoute;
