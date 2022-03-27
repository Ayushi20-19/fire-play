import React from "react";
import banner1 from "../../assets/banner1.jpg";
import BannerSubNav from "../Utils/BannerSubNav";

const WatchLaterLayout = () => {
  return (
    <div>
      <BannerSubNav banner={banner1} />
      <div className={`flex-wrap margin-auto`}>
        <h1>Add videos to watchlater </h1>
      </div>
    </div>
  );
};

export default WatchLaterLayout;
