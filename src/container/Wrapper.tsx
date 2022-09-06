import React from "react";

interface WrapperType {
  children: React.ReactNode;
}

export const Wrapper = (props: WrapperType) => {
  return <div>{props.children}</div>;
};
