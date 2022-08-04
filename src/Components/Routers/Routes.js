import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "../../Pages/Authentication/Authentication";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/HomePage/Home";
import FeatureWorkDetails from "../FeatureWorkDetails/FeatureWorkDetails";
import NewsDetails from "../NewsDetails/NewsDetails";
import RequireAuth from "../RequireAuth/RequireAuth";
import MyProfile from "../Dashboard/Profile/MyProfile";
import NotFound from "../Shared/NotFound/NotFound";
import paths from "./routerPath";
import AddReview from "../Dashboard/AddReview/AddReview";
const RoutesPath = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.authentication} element={<Authentication />} />
      <Route path={paths.featureWorkDetails} element={<FeatureWorkDetails />} />
      <Route path={paths.newsDetails} element={<NewsDetails />} />
      <Route path={paths.dashboard} element={<Dashboard />}>
        <Route
          path="my-profile"
          element={
            <RequireAuth>
              <MyProfile />
            </RequireAuth>
          }
        />

        <Route
          path="add-review"
          element={
            <RequireAuth>
              <AddReview />
            </RequireAuth>
          }
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesPath;
