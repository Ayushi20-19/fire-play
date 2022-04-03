import axios from "axios";

const deleteVideoFromPlaylistService = (playlistId, videoId, token) => {
  return axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
    headers: { authorization: token },
  });
};

export { deleteVideoFromPlaylistService };
