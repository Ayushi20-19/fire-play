import React from "react";
import { useEffect } from "react";
import banner1 from "../../assets/banner1.jpg";
import { useLikes } from "../../context/likes-context";
import { getLikesDataHandler } from "../../handlers/likeDataHandler/getLikesDataHandler";
import { removeFromLikesHandler } from "../../handlers/likeDataHandler/removeFromLikes";
import BannerSubNav from "../Utils/BannerSubNav";
import { VideoCard } from "../VideoListing/VideoCard";

const LikedVideoLayout = () => {
  const { likesState, likesDispatch } = useLikes();
  const localToken = localStorage.getItem("token");

  const checkLikedVideo = (id) =>
    likesState.likes.some((liked) => liked._id === id);

  const dislike = async (_id) => {
    if (localToken) {
      const response = await removeFromLikesHandler(_id, localToken);

      if (response.status === 200) {
        likesDispatch({
          type: "REMOVE_FROM_LIKES",
          payload: response.data.likes,
        });
      } else {
        console.error("error");
      }
    }
  };

  useEffect(async () => {
    const response = await getLikesDataHandler(localToken);
    if (response.status === 200) {
      likesDispatch({ type: "GET_LIKES_DATA", payload: response.data.likes });
    } else {
      console.error("error");
    }
  }, []);

  return (
    <div>
      <BannerSubNav banner={banner1} />
      <div className={`flex-wrap `}>
        {likesState.likes.length !== 0 ? (
          likesState.likes.map((video) => (
            <>
              <VideoCard
                key={video._id}
                id={video._id}
                title={video.title}
                thumnail={video.thumnail}
                creator={video.creator}
                date={video.date}
                viewCount={video.viewCount}
                dislike={dislike}
                checkLikedVideo={checkLikedVideo}
              />
            </>
          ))
        ) : (
          <div className={`flex-center width-100 height-30`}>
            <h1>Still waiting to like the videos? </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default LikedVideoLayout;
