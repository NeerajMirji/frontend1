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

      <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-danger bg-gradient'>
      <div className='form-container p-5 rounded bg-white'>
      <form>
          <h3 className='text-center'>Sign In</h3>
          <div className='mb-2'>
              <label htmlFor='email'>Email</label>
              <input type='email' placeholder='Enter Email' className='form-control' />
          </div>
          <div className='mb-2'>
              <label htmlFor='password'>Password </label>
              <input type='password' placeholder='Enter password' className='form-control' />
          </div>
          <div className='d-grid'>
              <button className='btn btn-primary bg-danger bg-gradient'>Sign In</button>
          </div>
      </form>
      </div>
  </div>
    )
}

export default Login;