import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { authDispatch } = useAuthContext();
  let authToken = localStorage.getItem("token");
  const clearTokenFromStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({
      type: "LOG_OUT",
    });
  };

  return (
    <div>
      <div className={`navbar ${styles.navbarStyle}`}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink
                to='/'
                className={`strikThroghtBtn navLink`}
                style={({ isActive }) => {
                  return {
                    textDecoration: isActive ? "line-through" : "none",
                  };
                }}>
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/videos'
                className={`strikThroghtBtn navLink`}
                style={({ isActive }) => {
                  return {
                    textDecoration: isActive ? "line-through" : "none",
                  };
                }}>
                <span>Gallery</span>
              </NavLink>
            </li>
            <li>
              {authToken ? (
                <NavLink
                  to='/auth'
                  className={`strikThroghtBtn navLink`}
                  onClick={clearTokenFromStorage}>
                  <span>Logout</span>
                </NavLink>
              ) : (
                <NavLink
                  to='/auth'
                  className={`strikThroghtBtn navLink`}
                  style={({ isActive }) => {
                    return {
                      textDecoration: isActive ? "line-through" : "none",
                    };
                  }}>
                  <span>Log In</span>
                </NavLink>
              )}
              {/* <NavLink
                to='/auth'
                className={`strikThroghtBtn navLink`}
                style={({ isActive }) => {
                  return {
                    textDecoration: isActive ? "line-through" : "none",
                  };
                }}>
                <span>Log In</span>
              </NavLink> */}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export { Navbar };
