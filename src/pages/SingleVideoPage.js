import React from "react";
import BannerSubNav from "../components/Utils/BannerSubNav";
import banner1 from "../assets/banner1.jpg";
import { SingleVideoCard } from "../components/SingleVideo/SingleVideoCard";
import { useParams } from "react-router-dom";
import { useDataContext } from "../context/data-context";
import { useState, useEffect } from "react";
import { getVideosData } from "../handlers/videoDataHandler/getVideosData";
const SingleVideoPage = () => {
  const { videoId } = useParams();
  const { dataState } = useDataContext();
  const [videoData, setVideoData] = useState();

  useEffect(() => {
    getVideosData();
    const video = dataState.videos?.find((item) => item._id === videoId);
    setVideoData(video);
  }, []);

  return (
    <div>
      <BannerSubNav banner={banner1} />
      <div className={`flex-wrap `}>
        <SingleVideoCard
          id={videoData?._id}
          title={videoData?.title}
          thumbnail={videoData?.thumbnail}
          url={videoData?.url}
          creator={videoData?.creator}
          date={videoData?.date}
          viewCount={videoData?.viewCount}
        />
      </div>
    </div>
  );
};

export default SingleVideoPage;
