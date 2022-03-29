import { addToHistoryHandler } from "../handlers/historyDataHandler";
const playBtnHandler = async (_id, dataState, historyDispatch) => {
  const localToken = localStorage.getItem("token");
  if (localToken) {
    const video = dataState.videos.find((item) => item._id === _id);

    const response = await addToHistoryHandler(video, localToken);

    if (response.status === 201) {
      historyDispatch({
        type: "ADD_TO_HISTORY",
        payload: response.data.history,
      });
    } else {
      console.log("error");
    }
  }
};

export { playBtnHandler };
