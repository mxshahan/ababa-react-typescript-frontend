import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../container/Layout";
import { Login, Movie, NotFound } from "../pages";
import { Register } from "../pages/Auth/Register";
import { Dashboard } from "../pages/Dashboard";
import { AuthRoutes } from "./AuthRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

const AppRouter: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route index element={<Dashboard />} />
          <Route path="movie" element={<Movie />} />
        </Route>

        <Route element={<AuthRoutes />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
