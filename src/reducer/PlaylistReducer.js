const newPlaylistData = (playlist, playlistId, playlistData) => {
  const value = playlist.reduce(
    (acc, curr) =>
      curr._id === playlistId ? [...acc, playlistData] : [...acc, curr],
    []
  );
  return value;
};

const PlaylistReducer = (playlistState, { type, payload }) => {
  switch (type) {
    case "GET_PLAYLIST":
      return { ...playlistState, playlist: payload };
    case "CREATE_NEW_PLAYLIST":
      return { ...playlistState, playlist: payload };
    case "DELETE_PLAYLIST":
      return { ...playlistState, playlist: payload };
    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...playlistState,
        playlist: newPlaylistData(
          playlistState.playlist,
          payload.playlistId,
          payload.playlistData
        ),
      };
    case "DELETE_VIDEO_FROM_PLAYLIST":
      return {
        ...playlistState,
        playlist: newPlaylistData(
          playlistState.playlist,
          payload.playlistId,
          payload.playlistData
        ),
      };
    default:
      return playlistState;
  }
};

export { PlaylistReducer };
