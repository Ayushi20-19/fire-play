import { createContext, useContext, useReducer } from "react";
import { PlaylistReducer } from "../reducer/PlaylistReducer";

const PlaylistContext = createContext(null);

const PlaylistProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(PlaylistReducer, {
    playlist: [],
  });

  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };
