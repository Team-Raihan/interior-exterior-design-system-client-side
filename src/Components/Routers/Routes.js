import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "../../Pages/Authentication/Authentication";
import Home from "../../Pages/HomePage/Home";
// import NotFound from "../Shared/NotFound/NotFound";
import paths from "./routerPath";
const RoutesPath = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.authentication} element={<Authentication />} />

    </Routes>
  );
};

export default RoutesPath;
