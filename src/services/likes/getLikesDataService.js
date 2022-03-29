import axios from "axios";

const getLikesDataService = (localToken) => {
  return axios.get("/api/user/likes", {
    headers: { authorization: localToken },
  });
};

export { getLikesDataService };
