import React from "react";
import { Route, Routes } from "react-router-dom";
import { Wrapper } from "../container/Wrapper";
import { AuthRoutes } from "./AuthRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { Login, Movies, NotFound, Register } from "../pages";
import { Favourites } from "../pages/Favourite";

const AppRouter: React.FC = () => {
  return (
    <Wrapper>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route index element={<Movies />} />
          <Route path="favs" element={<Favourites />} />
        </Route>

        <Route element={<AuthRoutes />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Wrapper>
  );
};

export default AppRouter;
