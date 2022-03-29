import axios from "axios";

const removeFromHistoryService = (_id, localToken) => {
  return axios.delete(`/api/user/history/${_id}`, {
    headers: { authorization: localToken },
  });
};

export { removeFromHistoryService };
