import { useContext, createContext, useEffect, useReducer } from "react";
import { getVideosData } from "../handlers/videoDataHandler/getVideosData";

import { DataReducer } from "../reducer/DataReducer";

const VideosData = createContext();

const VideosDataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(DataReducer, { videos: [] });
  useEffect(async () => {
    const response = await getVideosData();
    if (response.status === 200) {
      dataDispatch({
        type: "GET_VIDEOS",
        payload: response.data.videos,
      });
    } else {
      throw new Error("Error in data fetch");
    }
  }, []);

  return (
    <VideosData.Provider value={{ dataState, dataDispatch }}>
      {children}
    </VideosData.Provider>
  );
};

//custom hook
const useDataContext = () => useContext(VideosData);
export { VideosDataProvider, useDataContext };
