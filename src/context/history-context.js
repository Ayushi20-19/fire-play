import { createContext, useContext, useReducer } from "react";
import { HistoryReducer } from "../reducer/HistoryReducer";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const [historyState, historyDispatch] = useReducer(HistoryReducer, {
    history: [],
  });
  return (
    <HistoryContext.Provider value={{ historyState, historyDispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { HistoryProvider, useHistory };
