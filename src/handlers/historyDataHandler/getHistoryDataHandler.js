import { getHistoryDataService } from "../../services/history/getHistoryDataService";

const getHistoryDataHandler = (localToken) => {
  if (localToken) {
    try {
      return getHistoryDataService(localToken);
    } catch (error) {
      console.log(error);
    }
  }
};

export { getHistoryDataHandler };
