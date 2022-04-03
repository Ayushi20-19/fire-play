import axios from "axios";
const getVideosOfPlaylistService = (playlistId, token) => {
  return axios.get(`/api/user/playlists/${playlistId}`, {
    headers: { authorization: token },
  });
};

export { getVideosOfPlaylistService };
