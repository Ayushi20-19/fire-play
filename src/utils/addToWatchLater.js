import { addToWatchLaterHandler } from "../handlers/watchLaterDataHandler/addToWatchLaterHandler";

const addToWatchLater = async (_id, watchLaterDispatch, dataState, token) => {
  const video = dataState.videos.find((item) => item._id === _id);
  const response = await addToWatchLaterHandler(video, token);
  if (response.status === 201) {
    watchLaterDispatch({
      type: "ADD_TO_WATCHLATER",
      payload: response.data.watchlater,
    });
  } else {
    console.log("error");
  }
};

export { addToWatchLater };
