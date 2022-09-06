import React, { useEffect } from "react";

export const Content = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    document.body.className = "bg-slate-900";
  }, []);
  return <div className={`p-5 h-screen flex-1`}>{children}</div>;
};
