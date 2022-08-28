import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useAppSelector } from "../hooks";
import { RootState } from "../store";

interface PrivateLayoutType {
  children: React.ReactNode;
}

export const PrivateLayout = ({ children }: PrivateLayoutType) => {
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state: RootState) => !!state?.auth?.user);

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <div className=" ">
      <Header />
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex-1 bg-slate-100">{children}</div>
      </div>
    </div>
  );
};
