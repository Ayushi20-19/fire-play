import { useContext, createContext, useReducer } from "react";
import { AuthReducer } from "../reducer/AuthReducer";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialAuthState = {
    userData: [],
    token: "",
  };
  const [authState, authDispatch] = useReducer(AuthReducer, initialAuthState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);
export { AuthProvider, useAuthContext };
