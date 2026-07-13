import { Navigate, Outlet } from "react-router-dom";

import { authApi } from "../api/auth";

function ProtectedRoute() {
  if (!authApi.isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
