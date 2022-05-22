import React from "react";
import styles from "./Css/videolayout.module.css";
import banner1 from "../../assets/banner1.jpg";
import { VideoCard } from "./VideoCard";
import BannerSubNav from "../Utils/BannerSubNav";
import { useDataContext } from "../../context/data-context";
import { useState, useEffect, useRef } from "react";
import _ from "lodash";
import { getVideosData } from "../../handlers/videoDataHandler/getVideosData";
const VideoLayout = () => {
  const [searchInput, setSearchInput] = useState("");
  const { dataState } = useDataContext();
  const { videos } = dataState;
  const [videoss, setVideos] = useState(videos);
  const inputRef = useRef();
  useEffect(() => {
    // initialize debounce function to search once user has stopped typing every half second
    inputRef.current = _.debounce(searchHandler, 800);
  }, [searchInput, videos]);
  useEffect(() => {
    inputRef.current(searchInput);
  }, [searchInput, videos]);

  const searchHandler = () => {
    if (searchInput) {
      const searchResult = [...dataState.videos].filter((video) =>
        video.title.toLowerCase().includes(searchInput.toLowerCase().trim())
      );
      setVideos(searchResult);
    } else {
      setVideos(videos);
    }
  };
  useEffect(() => {
    getVideosData();
    setVideos(videos);
  }, [videos]);

  return (
    <div>
      <BannerSubNav
        banner={banner1}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        inputRef={inputRef}
      />
      <div className={styles.VideoCard}>
        {videoss?.map((video) => (
          <>
            <VideoCard
              id={video._id}
              title={video.title}
              thumbnail={video.thumbnail}
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
