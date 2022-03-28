import { createContext, useContext, useReducer } from "react";
import { LikesReducer } from "../reducer/LikesReducer";

const LikesContext = createContext();

const LikesProvider = ({ children }) => {
  const [likesState, likesDispatch] = useReducer(LikesReducer, { likes: [] });
  return (
    <LikesContext.Provider value={{ likesState, likesDispatch }}>
      {children}
    </LikesContext.Provider>
  );
};

const useLikes = () => useContext(LikesContext);

export { LikesProvider, useLikes };
