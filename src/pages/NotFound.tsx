import React from "react";

export const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center text-center bg-red-600 ">
      <div>
        <h1 className="text-9xl text-white">404 - Not Found</h1>
        <h3 className="text-white text-3xl mt-5 font-extralight ">
          You are trying <span>{window.location.href}</span> does not exists
        </h3>
      </div>
    </div>
  );
};
