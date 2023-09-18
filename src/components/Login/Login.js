import React from 'react' 
import './Login.css'
import login from './login.jpg'

import { useState } from "react";
import { loginData } from '../api';

const Login = () =>
{

    const [userName , setuserName] = useState("");
    const [password , setPassword] = useState("");

    
    const onuserNameChange = (e) => {
        setuserName(e.target.value);
      };

      const onpasswordChange = (e) => {
        setPassword(e.target.value);
      };


      const handleloginData= async (e) => {
        e.preventDefault();
        const loginCred = {
            userName,
            password
        };

        await loginData(loginCred);
      };



    return(

      <div class="container text-center">
        <form method="post" onSubmit={handleloginData}>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img  className="forgotpasswordImg mt-3 mb-3" src={login} alt="forgot password"/>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div className='mt-5 pt-4'>
                        <h3 className='text-dark  mb-5  pb-2'>Login</h3>
                        <input type="email" placeholder="Email"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                        <input type="password" placeholder="Password"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                        <input type="password" placeholder="Confirm Password"  aria-label="First name" className="mt-2 mb-3 form-control forgotpassword-input" ></input>
                        <button type="button" class=" mt-3 pt-2 pb-2 btn btn-primary forgotpassword-button">Reset Password</button>
                        <button type="button" class=" mt-3 pt-2 pb-2 btn btn-outline-success forgotpassword-button">Back to Login</button>
                    </div>
                </div>
            </div>
          </form>
      </div>
    )
}

export default Login;