export const DataReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_VIDEOS":
      return { ...state, videos: payload };
  }
};
