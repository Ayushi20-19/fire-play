import { getPlaylistDataService } from "../../services/playlist/getPlaylistDataService";

const getPlaylistHandler = (token) => {
  try {
    return getPlaylistDataService(token);
  } catch (error) {
    console.log(error);
  }
};

export { getPlaylistHandler };
