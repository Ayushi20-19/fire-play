import { getWatchLaterDataServices } from "../../services/watchLater/getWatchLaterDataServices";

const getWatchLaterDataHandler = async (token, watchLaterDispatch) => {
  try {
    const response = await getWatchLaterDataServices(token);
    if (response.status === 200) {
      watchLaterDispatch({
        type: "GET_WATCHLATER",
        payload: response.data.watchlater,
      });
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export { getWatchLaterDataHandler };
