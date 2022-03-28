import React from "react";
import styles from "./Css/videolayout.module.css";
import banner1 from "../../assets/banner1.jpg";
import { VideoCard } from "./VideoCard";
import { videos } from "../../backend/db/videos";
import BannerSubNav from "../Utils/BannerSubNav";

const VideoLayout = () => {
  return (
    <div>
      <BannerSubNav banner={banner1} />
      <div className={styles.VideoCard}>
        {videos.map((video) => (
          <>
            <VideoCard
              key={video._id}
              id={video._id}
              title={video.title}
              thumnail={video.thumnail}
              creator={video.creator}
              date={video.date}
              viewCount={videos.viewCount}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default VideoLayout;
