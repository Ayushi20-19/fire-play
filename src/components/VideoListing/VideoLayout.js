import React from "react";
import styles from "./Css/videolayout.module.css";
import banner1 from "../../assets/banner1.jpg";
import { VideoCard } from "./VideoCard";
import BannerSubNav from "../Utils/BannerSubNav";
import { useDataContext } from "../../context/data-context";
import { addToLikeHandler } from "../../handlers/likeDataHandler/addToLikeHandler";
import { useLikes } from "../../context/likes-context";
import { removeFromLikesHandler } from "../../handlers/likeDataHandler/removeFromLikes";

const VideoLayout = () => {
  const { dataState } = useDataContext();
  const { likesState, likesDispatch } = useLikes();
  const localToken = localStorage.getItem("token");

  const checkLikedVideo = (id) =>
    likesState.likes.some((liked) => liked._id === id);

  const addToLike = async (_id) => {
    if (localToken) {
      const video = dataState.videos.find((item) => item._id === _id);
      const response = await addToLikeHandler(video, localToken);

      if (response.status === 201) {
        likesDispatch({ type: "ADD_TO_LIKES", payload: response.data.likes });
      } else {
        console.log("err");
      }
    }
  };

  const dislike = async (_id) => {
    if (localToken) {
      const response = await removeFromLikesHandler(_id, localToken);

      if (response.status === 200) {
        likesDispatch({
          type: "REMOVE_FROM_LIKES",
          payload: response.data.likes,
        });
      } else {
        console.log("error");
      }
    }
  };

  return (
    <div>
      <BannerSubNav banner={banner1} />
      <div className={styles.VideoCard}>
        {dataState.videos.map((video) => (
          <>
            <VideoCard
              key={video._id}
              id={video._id}
              title={video.title}
              thumnail={video.thumnail}
              creator={video.creator}
              date={video.date}
              viewCount={video.viewCount}
              addToLike={addToLike}
              dislike={dislike}
              checkLikedVideo={checkLikedVideo}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default VideoLayout;
