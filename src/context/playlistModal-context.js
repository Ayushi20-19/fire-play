import { useContext, createContext, useReducer } from "react";
import { PlaylistModalReducer } from "../reducer/PlaylistModalReducer";

const PlaylistModalContext = createContext();

const PlaylistModalProvider = ({ children }) => {
  const [playlistModalState, playlistModalDispatch] = useReducer(
    PlaylistModalReducer,
    { showModal: false, video: "" }
  );
  return (
    <PlaylistModalContext.Provider
      value={{ playlistModalState, playlistModalDispatch }}>
      {children}
    </PlaylistModalContext.Provider>
  );
};
const usePlaylistModal = () => useContext(PlaylistModalContext);

export { PlaylistModalProvider, usePlaylistModal };
