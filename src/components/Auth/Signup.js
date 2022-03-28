import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import { SignupService } from "../../services/auth/SignupService";
import "./auth.css";

const Signup = () => {
  const navigateHome = useNavigate();
  const { authDispatch } = useAuthContext();
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const setUserDetailHandler = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const submitUserDetail = async (e) => {
    e.preventDefault();
    if (userDetail.password === userDetail.confirmPassword) {
      try {
        const response = await SignupService(userDetail);
        if (response.status === 200) {
          navigateHome("/");
          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.createdUser)
          );
          authDispatch({
            type: "SIGN_UP",
            payload: {
              token: response.data.encodedToken,
              userData: userDetail,
            },
          });
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  return (
    <div>
      <section>
        <div className='auth-wrapper'>
          <div className='auth-card-wrapper'>
            <div className='auth-card'>
              <div className='heading-auth'>
                <h1>Sign up to Fire-Play</h1>
              </div>
              <hr className='auth-card-hr' />
              <div>
                <form action='' className='auth-content'>
                  <input
                    placeholder='Enter Your Full Name'
                    type='text'
                    id='name'
                    name='name'
                    value={userDetail.name}
                    onChange={setUserDetailHandler}
                  />

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

                  <input
                    placeholder='Confirm Your Password'
                    type='password'
                    id='confirmPassword'
                    name='confirmPassword'
                    value={userDetail.confirmPassword}
                    onChange={setUserDetailHandler}
                  />
                  <button className=' submit-btn' onClick={submitUserDetail}>
                    Create Account
                  </button>
                  <hr className='auth-card-hr' />
                </form>
                <p>
                  Already have account?
                  <Link to='/auth'> Login to your account</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
