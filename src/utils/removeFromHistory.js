import { removeFromHistoryHandler } from "../handlers/historyDataHandler";
const removeFromHistory = async (_id, historyDispatch) => {
  try {
    const response = await removeFromHistoryHandler(_id, historyDispatch);
    if (response.status === 200) {
      historyDispatch({
        type: "REMOVE_FROM_HISTORY",
        payload: response.data.history,
      });
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export { removeFromHistory };
