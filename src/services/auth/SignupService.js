import axios from "axios";

const SignupService = (userDetail) => {
  return axios.post("/api/auth/signup", {
    email: userDetail.email,
    password: userDetail.password,
  });
};

export { SignupService };
