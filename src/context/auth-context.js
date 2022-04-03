import { useContext, createContext, useReducer, useEffect } from "react";
import { AuthReducer } from "../reducer/AuthReducer";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialAuthState = {
    userData: [],
    token: "",
  };
  const [authState, authDispatch] = useReducer(AuthReducer, initialAuthState);

  const getTokenFromLocal = () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    authDispatch({ type: "LOCAL_TOKEN", payload: { user, token } });
  };

  useEffect(() => getTokenFromLocal(), []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);
export { AuthProvider, useAuthContext };
