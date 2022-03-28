import axios from "axios";

const removeFromLikesService = (_id, localToken) => {
  return axios.delete(`/api/user/likes/${_id}`, {
    headers: { authorization: localToken },
  });
};

export { removeFromLikesService };
