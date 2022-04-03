import axios from "axios";

const removeFromWatchLaterServices = (_id, token) => {
  return axios.delete(`/api/user/watchlater/${_id}`, {
    headers: { authorization: token },
  });
};

export { removeFromWatchLaterServices };
