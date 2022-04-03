import React from "react";
import { useEffect } from "react";
import banner1 from "../../assets/banner1.jpg";
import { useWatchLater } from "../../context/watchLater-context";
import { useAuthContext } from "../../context/auth-context";
import { getWatchLaterDataHandler } from "../../handlers/watchLaterDataHandler/getWatchLaterDataHandler";
import BannerSubNav from "../Utils/BannerSubNav";
import { VideoCard } from "../VideoListing/VideoCard";

const WatchLaterLayout = () => {
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const {
    authState: { token },
  } = useAuthContext();

  useEffect(() => {
    getWatchLaterDataHandler(token, watchLaterDispatch);
  }, []);

  return (
    <div>
      <BannerSubNav banner={banner1} />
      <div className={`flex-wrap `}>
        {watchLaterState.watchLater.length !== 0 ? (
          watchLaterState.watchLater.map((video) => (
            <>
              <VideoCard
                key={video._id}
                id={video._id}
                title={video.title}
                thumnail={video.thumnail}
                creator={video.creator}
                date={video.date}
                viewCount={video.viewCount}
              />
            </>
          ))
        ) : (
          <div className={`flex-center width-100 height-30`}>
            <h1>Add videos to Watch later? </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchLaterLayout;
