import axios from "axios";

const createNewPlaylistService = (playlist, token) => {
  const response = axios.post(
    "/api/user/playlists",
    { playlist },
    { headers: { authorization: token } }
  );
  return response;
};

export { createNewPlaylistService };
