import { Navigate, Outlet } from "react-router-dom";
import { AuthLayout } from "../container";

import { useAppSelector } from "../hooks";
import { RootState } from "../store";

export const AuthRoutes = () => {
  const isAuthenticated = useAppSelector((state: RootState) => !!state?.auth?.user);

  return !isAuthenticated ? (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  ) : (
    <Navigate to="/" />
  );
};
