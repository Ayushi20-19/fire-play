import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import { LoginService } from "../../services/auth/LoginService";

import "./auth.css";
const Login = () => {
  const navigateHome = useNavigate();
  const { authDispatch } = useAuthContext();
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });
  const testUser = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };
  const setUserDetailHandler = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };
  const testCredentials = (e) => {
    e.preventDefault();
    setUserDetail(testUser);
  };
  const submitUserDetail = async (e) => {
    e.preventDefault();
    try {
      const response = await LoginService(userDetail);
      if (response.status === 200) {
        navigateHome("/videos");
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.foundUser));
        authDispatch({
          type: "LOG_IN",
          payload: {
            token: response.data.encodedToken,
            userData: userDetail,
          },
        });
      }
    } catch (err) {
      console.warn(err.response);
    }
  };
  return (
    <div>
      <section>
        <div className='auth-wrapper'>
          <div className='auth-card-wrapper'>
            <div className='auth-card'>
              <div className='heading-auth'>
                <h1>Login in to Fire-Play</h1>
              </div>
              <hr className='auth-card-hr' />
              <div>
                <form action='' className='auth-content' method='post'>
                  <input
                    placeholder='Enter Your Email'
                    type='email'
                    id='email'
                    name='email'
                    value={userDetail.email}
                    onChange={setUserDetailHandler}
                  />
                  <input
                    placeholder='Enter Your Password'
                    type='password'
                    id='password'
                    name='password'
                    value={userDetail.password}
                    onChange={setUserDetailHandler}
                  />
                  <a href=''>
                    <p>Forget Password</p>
                  </a>
                  <button
                    className='submit-btn link-btn'
                    onClick={testCredentials}>
                    Test Credentials
                  </button>
                  <button className='submit-btn' onClick={submitUserDetail}>
                    Login
                  </button>
                  <hr className='auth-card-hr' />
                </form>
                <p>
                  Not a user yet? <Link to='/signup'>Create your account</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
