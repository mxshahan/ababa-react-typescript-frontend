import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";

interface AuthLayoutType {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutType) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => !!state?.auth?.user);

  useEffect(() => {
    if (isAuthenticated) {
      return navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return <div className="">{children}</div>;
};
