import { removeFromWatchLaterHandler } from "../handlers/watchLaterDataHandler/removeFromWatchLaterHandler";

const removeFromWatchLater = async (_id, watchLaterDispatch, token) => {
  try {
    const response = await removeFromWatchLaterHandler(_id, token);
    if (response.status === 200) {
      watchLaterDispatch({
        type: "REMOVE_FROM_WATCHLATER",
        payload: response.data.watchlater,
      });
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export { removeFromWatchLater };
