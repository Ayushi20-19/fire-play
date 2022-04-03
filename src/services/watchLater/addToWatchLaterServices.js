import axios from "axios";

const addToWatchLaterServices = (video, token) => {
  return axios.post(
    "/api/user/watchlater",
    { video },
    { headers: { authorization: token } }
  );
};

export { addToWatchLaterServices };
