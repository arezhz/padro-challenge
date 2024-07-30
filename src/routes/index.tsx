import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginRoutes from "../views/Login/routes";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="login/*" element={<LoginRoutes />} />

        {/*<Route element={<PrivateRoute />}>
          <Route path="dashboard/*" element={<DashboardRoutes />} />
          <Route path="guests/*" element={<GuestsRoutes />} />
          <Route path="admin/*" element={<AdminsRouts />} />
          <Route path="fast-send/*" element={<FastSendTemplateRoutes />} />
          <Route path="sms-queue/*" element={<SMSQueueRoutes />} />
          <Route path="ticket/*" element={<TicketRoutes />} />
          <Route path="users/*" element={<UsersRoutes />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
