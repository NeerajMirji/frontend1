import React from 'react' 
import { useNavigate } from 'react-router-dom';
import './Login.css'
import login from './login.jpg'

import { useState } from "react";
import { loginData } from '../api';

const Login = () =>
{

    const [employeeid , setEmployeeid] = useState("");
    const [password , setPassword] = useState("");
    const [isLoggedIn , setIsLoggedIn ] = useState(false);

    const navigate = useNavigate();

    
    const onemployeeidChange = (e) => {
      setEmployeeid(e.target.value);
      };

      const onpasswordChange = (e) => {
        setPassword(e.target.value);
      };

      



      const handleloginData= async (e) => {
        e.preventDefault();
        const loginCred = {
            employeeid,
            password
        };

        localStorage.setItem("loginCred",JSON.parse(loginCred));

        const response = await loginData(loginCred);

         if(response.data.role == "user") {
          setIsLoggedIn(true);
          navigate("/userdashboard");
         }
         else if(response.data.role == "admin")
         {setIsLoggedIn(true);
           navigate("/admindashboard");
          }
         else navigate("/error");

        navigate("/userdashboard");
        
      };



    return(

      <div class="container text-center">
        <form method="post" onSubmit={handleloginData}>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img  className="forgotpasswordImg mt-3 mb-3" src={login} alt="forgot password"/>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div className='mt-5 pt-5'>
                        <h3 className='text-dark  mt-4 mb-5  pb-2'>Login</h3>
                        <input onchange={onemployeeidChange} type="number" placeholder="Employee Id"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                        <input onchange={onpasswordChange} type="password" placeholder="Password"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                        <button type="button" class=" mt-3 pt-2 pb-2 btn btn-success forgotpassword-button">Login</button>
                        <button type="button" class=" mt-3 pt-2 pb-2 btn btn-outline-primary forgotpassword-button">Sign Up</button>
                    </div>
                </div>
            </div>
          </form>
      </div>
    )
}

export default Login;