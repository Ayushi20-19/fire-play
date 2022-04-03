import { removeFromWatchLaterServices } from "../../services/watchLater/removeFromWatchLaterServices";

const removeFromWatchLaterHandler = async (_id, token) => {
  try {
    const response = await removeFromWatchLaterServices(_id, token);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { removeFromWatchLaterHandler };
