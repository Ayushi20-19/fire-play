import { addToHistoryServices } from "../../services/history/addToHistoryServices";

const addToHistoryHandler = (video, localtToken) => {
  try {
    return addToHistoryServices(video, localtToken);
  } catch (error) {
    console.log(error.response);
  }
};

export { addToHistoryHandler };
