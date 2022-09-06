import React from "react";

interface AuthLayoutType {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutType) => {
  return <div className="">{children}</div>;
};
