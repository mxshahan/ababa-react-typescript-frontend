import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Movie } from '../pages';

const AppRouter: React.FC = (props) => {
  return (
    <Routes>
      <Route path="" element={<Movie />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
