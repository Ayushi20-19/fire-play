import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./bannersubnav.module.css";

const BannerSubNav = ({ banner }) => {
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
              to='/history'
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "line-through" : "none",
                };
              }}>
              <span>Watch Later</span>
            </NavLink>
            <NavLink
              to='/watchlater'
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "line-through" : "none",
                };
              }}>
              <span>History</span>
            </NavLink>
          </div>
          <div className={styles.search}>
            <input
              type='input'
              className={styles.inputField}
              placeholder='Search'
              name='Search'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSubNav;
