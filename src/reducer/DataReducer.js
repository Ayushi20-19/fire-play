export const DataReducer = (dataState, { type, payload }) => {
  switch (type) {
    case "GET_VIDEOS":
      return { ...dataState, videos: payload };
  }
};
