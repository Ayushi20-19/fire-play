import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./bannersubnav.module.css";

const BannerSubNav = ({ banner, searchInput, setSearchInput }) => {
  const inputHandler = (e) => {
    setSearchInput(e.target.value);
  };
  const location = useLocation();
  return (
    <div>
      <div className={styles.bgImg}>
        <img src={banner} alt='' />
      </div>
      <div className={styles.navwrapper}>
        <div className={styles.nav}>
          <div className={`strikThroghtBtn ${styles.content}`}>
            <NavLink
              to='/videos'
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "line-through" : "none",
                };
              }}>
              <span>All</span>
            </NavLink>
            <NavLink
              to='/likedvideos'
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "line-through" : "none",
                };
              }}>
              <span>Liked</span>
            </NavLink>
            <NavLink
              to='/playlists'
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "line-through" : "none",
                };
              }}>
              <span>Playlists</span>
            </NavLink>
            <NavLink
              to='/watchlater'
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "line-through" : "none",
                };
              }}>
              <span>Watch Later</span>
            </NavLink>
            <NavLink
              to='/history'
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "line-through" : "none",
                };
              }}>
              <span>History</span>
            </NavLink>
          </div>
          {location.pathname === "/videos" && (
            <div className={styles.search}>
              <input
                type='input'
                className={styles.inputField}
                placeholder='Search'
                name='Search'
                value={searchInput}
                onChange={(e) => inputHandler(e)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerSubNav;
