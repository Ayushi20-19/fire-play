import { createNewPlaylistService } from "../../services/playlist/createNewPlaylistService";

const createNewPlaylistHandler = async (playlist, token, playlistDispatch) => {
  try {
    const response = await createNewPlaylistService(playlist, token);
    return response;
  } catch (error) {
    alert(error);
  }
};

export default createNewPlaylistHandler;
