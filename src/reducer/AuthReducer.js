const AuthReducer = (authState, { type, payload }) => {
  switch (type) {
    case "SIGN_UP":
      return { ...authState, token: payload.token, userData: payload.userData };
    case "LOG_OUT":
      return { ...authState, token: "", userData: [] };
    case "LOG_IN":
      return { ...authState, token: payload.token, userData: payload.userData };
    case "LOCAL_TOKEN":
      return {
        ...authState,
        token: payload.token,
        userData: payload.user,
      };
    default:
      return authState;
  }
};

export { AuthReducer };
