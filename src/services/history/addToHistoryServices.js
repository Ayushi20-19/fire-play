import axios from "axios";
const addToHistoryServices = (video, localToken) => {
  return axios.post(
    "/api/user/history",
    { video },
    {
      headers: { authorization: localToken },
    }
  );
};

export { addToHistoryServices };
