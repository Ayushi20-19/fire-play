import React from "react";
import banner1 from "../../assets/banner1.jpg";
import BannerSubNav from "../Utils/BannerSubNav";

const PlaylistLayout = () => {
  return (
    <div>
      <BannerSubNav banner={banner1} />
      <div className={`flex-wrap margin-auto`}>
        <h1>Create your playlist and add videos </h1>
      </div>
    </div>
  );
};

export default PlaylistLayout;
