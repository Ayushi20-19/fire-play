export const WatchLaterReducer = (watchLaterState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WATCHLATER":
      return { ...watchLaterState, watchLater: payload };
    case "GET_WATCHLATER_DATA":
      return { ...watchLaterState, watchLater: payload };
    case "REMOVE_FROM_WATCHLATER":
      return { ...watchLaterState, watchLater: payload };
    default:
      return watchLaterState;
  }
};
