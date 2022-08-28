import { Navigate, Outlet } from "react-router-dom";
import { PrivateLayout } from "../container";

import { useAppSelector } from "../hooks";
import { RootState } from "../store";

export const PrivateRoutes = () => {
  const isAuthenticated = useAppSelector((state: RootState) => !!state?.auth?.user);

  return isAuthenticated ? (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  ) : (
    <Navigate to="/login" />
  );
};
