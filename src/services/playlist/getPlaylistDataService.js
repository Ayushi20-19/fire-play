import axios from "axios";

const getPlaylistDataService = (token) => {
  const res = axios.get("/api/user/playlists", {
    headers: { authorization: token },
  });
  return res;
};

export { getPlaylistDataService };
