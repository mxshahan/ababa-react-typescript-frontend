import React from "react";
import { Content } from "../components/Content";
import { Header } from "../components/Header";
// import { Sidebar } from "../components/Sidebar";

interface PrivateLayoutType {
  children: React.ReactNode;
}

export const PrivateLayout = ({ children }: PrivateLayoutType) => {
  return (
    <div className="">
      <Header />
      <div className="flex justify-between">
        {/* <Sidebar /> */}
        <Content>{children}</Content>
      </div>
    </div>
  );
};
