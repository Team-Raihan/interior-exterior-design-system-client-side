import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link as NavLink, Outlet } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import useAdmin from "../../hooks/useAdmin";
import "./Dashboard.css";
import welcome from "../../assets/banner/welcome.png";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile ">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="md:text-4xl text-center font-bold text-secondary uppercase mt-4">
          Welcome to your Dashboard
        </h2>
        <img className="w-fit mx-auto" src={welcome} alt="welcome Banner" />
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-blue-50 text-base-content">
          {!admin && (
            <>
              <li>
                <NavLink to="/dashboard/my-booking">My Booking</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-review">Add Review</NavLink>
              </li>
            </>
          )}
          {admin && (
            <>
              <li>
                <NavLink to="/dashboard/users">All Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-feature-work">
                  Add Feature Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-feature-work">
                  Manage Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-booking">Manage Orders</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
