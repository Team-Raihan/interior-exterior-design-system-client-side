import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link as NavLink, Outlet } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import useAdmin from "../../hooks/useAdmin";
import "./Dashboard.css";


const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin,adminLoading] = useAdmin(user?.email);

  return (
    <div className="drawer drawer-mobile ">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet/>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-blue-50 text-base-content">
          {adminLoading && <p className="mt-10 text-xl font-semibold text-blue-500">Loading...</p>}
          {!admin && (
            <>
              <li>
                <NavLink to="/dashboard">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-review">Add Review</NavLink>
              </li>
            </>
          )}
          {admin && (
            <>
              <li>
                <NavLink  to="/dashboard/users">All Users</NavLink>
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
