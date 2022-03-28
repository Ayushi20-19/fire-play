import axios from "axios";

const LoginService = (userDetail) => {
  return axios.post("/api/auth/login", {
    email: userDetail.email,
    password: userDetail.password,
  });
};

export { LoginService };
