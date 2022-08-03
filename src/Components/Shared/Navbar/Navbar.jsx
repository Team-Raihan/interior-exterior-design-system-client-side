import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Link as NavLink } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  const logout = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/reviews">Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blogs</NavLink>
      </li>

      {user && (
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost  btn-circle avatar">
            <div class="w-10 rounded-full  ring-white ring-2">
              <img
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
                }
                alt="user img"
              />
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-secondary rounded-box w-52"
          >
            <li>
              <NavLink to="" class="justify-between">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="" onClick={logout}>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      {!user && (
        <li>
          <NavLink to="/authentication/user">Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="sticky top-0 bg-secondary text-white font-bold  z-40 drop-shadow-xl ">
      <div className="container navbar md:min-h-[96px] justify-between mx-auto px-4">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="btn btn-ghost normal-case text-2xl font-bold"
          >
            Logo
          </NavLink>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52"
          >
            <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
              <li>
                <NavLink to="/reviews">Reviews</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blogs</NavLink>
              </li>
              {user && (
                <div
                  tabindex="0"
                  class="collapse collapse-plus  bg-secondary text-white rounded-box w-full"
                >
                  <label class="btn btn-ghost btn-circle avatar">
                    <div class="w-6 rounded-full  ring-white ring-2">
                      <img
                        src={
                          user?.photoURL
                            ? user?.photoURL
                            : "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
                        }
                        alt="user img"
                      />
                    </div>
                  </label>
                  <div class="collapse-content">
                    <li>
                      <Link to="" class="">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="" onClick={logout}>
                        Logout
                      </Link>
                    </li>
                  </div>
                </div>
              )}
              {!user && (
                <li>
                  <NavLink to="/authentication/user">Login</NavLink>
                </li>
              )}
            </>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex min-w-fit">
          <ul className="menu menu-horizontal  p-0">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
