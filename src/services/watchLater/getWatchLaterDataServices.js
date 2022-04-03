import axios from "axios";

const getWatchLaterDataServices = (token) => {
  return axios.get("/api/user/watchlater", {
    headers: { authorization: token },
  });
};

export { getWatchLaterDataServices };
