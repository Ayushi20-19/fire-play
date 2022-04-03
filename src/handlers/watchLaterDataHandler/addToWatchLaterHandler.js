import { addToWatchLaterServices } from "../../services/watchLater/addToWatchLaterServices";

const addToWatchLaterHandler = async (video, token, watchLaterDispatch) => {
  try {
    const response = await addToWatchLaterServices(video, token);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { addToWatchLaterHandler };
