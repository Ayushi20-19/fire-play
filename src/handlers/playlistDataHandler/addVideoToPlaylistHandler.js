import { addVideoToPlaylistService } from "../../services/playlist/addVideoToPlaylistService";

const addVideoToPlaylistHandler = async (
  playlistId,
  video,
  token,
  playlistDispatch
) => {
  try {
    const response = await addVideoToPlaylistService(playlistId, video, token);
    if (response.status === 201) {
      playlistDispatch({
        type: "ADD_VIDEO_TO_PLAYLIST",
        payload: {
          playlistData: response.data.playlist,
          playlistId: response.data.playlist._id,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export { addVideoToPlaylistHandler };
