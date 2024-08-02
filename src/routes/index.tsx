import {lazy} from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const LoginRoutes = lazy(() => import('../views/Login/routes'));
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="login" replace />} />

        <Route path="login/*" element={<LoginRoutes />} />

        {/*<Route element={<PrivateRoute />}>
          <Route path="dashboard/*" element={<DashboardRoutes />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
