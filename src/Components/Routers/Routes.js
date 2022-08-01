import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../Pages/Authentication/Login/Login";
import SignUp from "../../Pages/Authentication/Signup/SignUp";
import Home from "../../Pages/HomePage/Home";
import paths from "./routerPath";
const RoutesPath = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.login} element={<Login />} />
      <Route path={paths.signup} element={<SignUp />} />
    </Routes>
  );
};

export default RoutesPath;
