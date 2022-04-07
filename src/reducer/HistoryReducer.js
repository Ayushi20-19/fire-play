export const HistoryReducer = (historyState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_HISTORY":
      return { ...historyState, history: payload };
    case "GET_HISTORY_DATA":
      return { ...historyState, history: payload };
    case "REMOVE_FROM_HISTORY":
      return { ...historyState, history: payload };
    case "LOG_OUT":
      return { ...historyState, history: [] };
    default:
      return historyState;
  }
};
