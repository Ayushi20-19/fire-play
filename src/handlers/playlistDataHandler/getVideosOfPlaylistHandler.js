import { getVideosOfPlaylistService } from "../../services/playlist/getVideosOfPlaylistService";

const getVideosOfPlaylistHandler = (playlistId, token) => {
  try {
    return getVideosOfPlaylistService(playlistId, token);
  } catch (error) {
    console.log(error);
  }
};

export default getVideosOfPlaylistHandler;
