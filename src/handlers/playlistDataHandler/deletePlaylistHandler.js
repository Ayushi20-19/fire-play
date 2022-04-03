import { deletePlaylistService } from "../../services/playlist/deletePlaylistService";

const deletePlaylistHandler = async (playlistId, token, playlistsDispatch) => {
  try {
    const response = await deletePlaylistService(playlistId, token);
    if (response.status === 200) {
      playlistsDispatch({
        type: "DELETE_PLAYLIST",
        payload: response.data.playlists,
      });
    } else {
      console.log(error.response);
    }
  } catch (error) {
    alert(error);
  }
};

export { deletePlaylistHandler };
