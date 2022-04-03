import { deleteVideoFromPlaylistService } from "../../services/playlist/deleteVideoFromPlaylistService";

const deleteVideoFromPlaylistHandler = async (
  playlistId,
  videoId,
  token,
  playlistsDispatch
) => {
  try {
    const response = await deleteVideoFromPlaylistService(
      playlistId,
      videoId,
      token
    );
    if (response.status === 200) {
      playlistsDispatch({
        type: "DELETE_VIDEO_FROM_PLAYLIST",
        payload: {
          playlistData: response.data.playlist,
          playlistId: response.data.playlist._id,
        },
      });
    } else {
      console.log(error.response);
    }
  } catch (error) {
    alert(error);
  }
};

export { deleteVideoFromPlaylistHandler };
