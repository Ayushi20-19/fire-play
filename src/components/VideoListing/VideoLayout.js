import React from "react";
import styles from "./Css/videolayout.module.css";
import banner1 from "../../assets/banner1.jpg";
import { VideoCard } from "./VideoCard";
import BannerSubNav from "../Utils/BannerSubNav";
import { useDataContext } from "../../context/data-context";

const VideoLayout = () => {
  const { dataState } = useDataContext();

  return (
    <div>
      <BannerSubNav banner={banner1} />
      <div className={styles.VideoCard}>
        {dataState.videos.map((video) => (
          <>
            <VideoCard
              id={video._id}
              title={video.title}
              thumnail={video.thumnail}
              creator={video.creator}
              date={video.date}
              viewCount={video.viewCount}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default VideoLayout;
