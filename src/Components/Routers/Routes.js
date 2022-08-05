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
import Welcome from "../Dashboard/Welcome/Welcome";
import Users from "../Dashboard/Users/Users";
import AddFeatureWork from "../Dashboard/AddFeatureWork/AddFeatureWork";
import ManageFeatureWorks from "../Dashboard/ManageFeatureWorks/ManageFeatureWorks";
import ManageBooking from "../Dashboard/ManageBooking/ManageBooking";
import FeatureWorks from "../FeatureWorks/FeatureWorks";
import AllNews from "../AllNews/AllNews";
import AddNews from "../Dashboard/AddNews/AddNews";
import MyBookings from "../Dashboard/MyBooking/MyBookings";

const RoutesPath = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.authentication} element={<Authentication />} />
      <Route path={paths.featureWorkDetails} element={<FeatureWorkDetails />} />
      <Route path={paths.featureWorks} element={<FeatureWorks />} />
      <Route path={paths.newsDetails} element={<NewsDetails />} />
      <Route path={paths.allNews} element={<AllNews />} />
      <Route path={paths.dashboard} element={<Dashboard />}>
        <Route
          index
          element={
            <RequireAuth>
              <Welcome />
            </RequireAuth>
          }
        ></Route>
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
        <Route
          path="my-booking"
          element={
            <RequireAuth>
              <MyBookings />
            </RequireAuth>
          }
        />
        <Route
          path="users"
          element={
            <RequireAuth>
              <Users />
            </RequireAuth>
          }
        />

        <Route
          path="add-feature-work"
          element={
            <RequireAuth>
              <AddFeatureWork />
            </RequireAuth>
          }
        />
        <Route
          path="manage-feature-works"
          element={
            <RequireAuth>
              <ManageFeatureWorks />
            </RequireAuth>
          }
        />
        <Route
          path="manage-booking"
          element={
            <RequireAuth>
              <ManageBooking />
            </RequireAuth>
          }
        />
        <Route
          path="add-news"
          element={
            <RequireAuth>
              <AddNews />
            </RequireAuth>
          }
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesPath;
