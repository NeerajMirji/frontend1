import React from 'react' 
import './Login.css'

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

        <div class="center">
        <h2>Login</h2>
        <form method="post" onSubmit={handleloginData}>
          <div class="txt_field">
            <input type="text" required onChange={setuserName}/>
            <span></span>
            <label>Username</label>
          </div>
          <div class="txt_field">
            <input type="password" required onChange={setPassword}/>
            <span></span>
            <label>Password</label>
          </div>
          <div class="pass">Forgot Password?</div>
          <input type="submit" value="Login"/>
          <div class="signup_link">
           
          </div>
        </form>
      </div>
    )
}

export default Login;