import React from "react";

interface LayoutType {
  children: any;
}

export const Layout = (props: LayoutType) => {
  return <div>{props.children}</div>;
};
