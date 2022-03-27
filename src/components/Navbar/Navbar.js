import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
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
              <NavLink
                to='/login'
                className={`strikThroghtBtn navLink`}
                style={({ isActive }) => {
                  return {
                    textDecoration: isActive ? "line-through" : "none",
                  };
                }}>
                <span>Log In</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export { Navbar };
