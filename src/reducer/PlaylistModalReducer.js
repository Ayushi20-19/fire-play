const PlaylistModalReducer = (playlistModalState, { type, payload }) => {
  switch (type) {
    case "OPEN_MODAL":
      return {
        ...playlistModalState,
        showModal: true,
        video: payload,
      };
    case "CLOSE_MODAL":
      return {
        ...playlistModalState,
        showModal: false,
      };
  }
};

export { PlaylistModalReducer };
