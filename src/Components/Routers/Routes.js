import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../Pages/Authentication/Login/Login";
import SignUp from "../../Pages/Authentication/Signup/SignUp";
import Home from "../../Pages/HomePage/Home";
// import NotFound from "../Shared/NotFound/NotFound";
import paths from "./routerPath";
const RoutesPath = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.login} element={<Login />} />
      <Route path={paths.signup} element={<SignUp />} />
      {/* <Route path={paths.notfound} element={<NotFound />} /> */}
    </Routes>
  );
};

export default RoutesPath;
