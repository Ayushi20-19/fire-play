import axios from "axios";

const deletePlaylistService = (playlistId, token) => {
  return axios.delete(`/api/user/playlists/${playlistId}`, {
    headers: { authorization: token },
  });
};

export { deletePlaylistService };
