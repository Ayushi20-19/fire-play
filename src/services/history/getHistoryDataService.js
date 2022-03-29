import axios from "axios";

const getHistoryDataService = (localToken) => {
  return axios.get("/api/user/history", {
    headers: { authorization: localToken },
  });
};

export { getHistoryDataService };
