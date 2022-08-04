import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import useAdmin from "../../hooks/useAdmin";
import "./Dashboard.css";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user?.email);

  return (
    <div className="drawer drawer-mobile ">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        {adminLoading && (
          <p className="mt-10 text-xl font-semibold text-blue-500">
            Loading...
          </p>
        )}
        <ul className=" flex flex-col gap-5 shadow-md  bg-[rgb(0,7,61)] p-4 overflow-y-auto w-80 font-semibold  text-white">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `p-2  text-white rounded hover:bg-gray-200 hover:text-gray-500 ${
                  isActive ? " bg-[#021431]" : undefined
                }`
              }
            >
              My Profile
            </NavLink>
          </li>

          {!admin && (
            <li>
              <NavLink
                to="/dashboard/add-review"
                className={({ isActive }) =>
                  `p-2  text-white rounded hover:bg-gray-200 hover:text-gray-500 ${
                    isActive ? " bg-[#021431]" : undefined
                  }`
                }
              >
                Add Review
              </NavLink>
            </li>
          )}

          {admin && (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `p-2  text-white rounded hover:bg-gray-200 hover:text-gray-500 ${
                      isActive ? " bg-[#021431]" : undefined
                    }`
                  }
                  to="/dashboard/users"
                >
                  All Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `p-2  text-white rounded hover:bg-gray-200 hover:text-gray-500 ${
                      isActive ? " bg-[#021431]" : undefined
                    }`
                  }
                  to="/dashboard/add-feature-work"
                >
                  Add Feature Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `p-2  text-white rounded hover:bg-gray-200 hover:text-gray-500 ${
                      isActive ? " bg-[#021431]" : undefined
                    }`
                  }
                  to="/dashboard/manage-feature-work"
                >
                  Manage Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `p-2  text-white rounded hover:bg-gray-200 hover:text-gray-500 ${
                      isActive ? " bg-[#021431]" : undefined
                    }`
                  }
                  to="/dashboard/manage-booking"
                >
                  Manage Orders
                </NavLink>
              </li>
            </>
          )}
          <li className="mt-10 cursor-pointer text-center text-warning">
            Logout
          </li>
          <li className="mt-10 mb-5">
            <NavLink to="/">GoBack</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
