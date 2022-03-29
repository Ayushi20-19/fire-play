import { addToHistoryServices } from "../../services/history/addToHistoryServices";

const addToHistoryHandler = (video, localtToken) => {
  try {
    const response = addToHistoryServices(video, localtToken);
    console.log(
      "🚀 ~ file: addToHistoryHandler.js ~ line 6 ~ addToHistoryHandler ~ response",
      response
    );
    return response;
  } catch (error) {
    console.log(error.response);
  }
};

export { addToHistoryHandler };
