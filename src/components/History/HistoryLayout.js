import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import banner1 from "../../assets/banner1.jpg";
import { useHistory } from "../../context/history-context";
import { getHistoryDataHandler } from "../../handlers/historyDataHandler";
import BannerSubNav from "../Utils/BannerSubNav";
import { VideoCard } from "../VideoListing/VideoCard";

const HistoryLayout = () => {
  const [isInHistoryRoute, setIsInHistoryRoute] = useState(false);
  const { historyState, historyDispatch } = useHistory();
  const localToken = localStorage.getItem("token");
  const currentPath = useLocation();

  useEffect(async () => {
    const response = await getHistoryDataHandler(localToken);

    if (response.status === 200) {
      historyDispatch({
        type: "GET_HISTORY_DATA",
        payload: response.data.history,
      });
    } else {
      console.error("error");
    }
    if (currentPath.pathname === "/history") {
      setIsInHistoryRoute(true);
    }
  }, []);

  return (
    <div>
      <BannerSubNav banner={banner1} />
      <div className={`flex-wrap `}>
        {historyState.history.length !== 0 ? (
          historyState.history.map((video) => (
            <>
              <VideoCard
                key={video._id}
                id={video._id}
                title={video.title}
                thumnail={video.thumnail}
                creator={video.creator}
                date={video.date}
                isInHistoryRoute={isInHistoryRoute}
              />
            </>
          ))
        ) : (
          <div className={`flex-center width-100 height-30`}>
            <h1>Don't you Like Watching Videos?</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryLayout;
