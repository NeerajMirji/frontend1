import React from 'react' 
import { useNavigate } from 'react-router-dom';
import './Login.css'
import login from './login.jpg'

import { useState } from "react";
import { loginData, getLoginDataByUserName } from '../api';

const Login = ({isLoggedIn,setIsLoggedIn,role,setRole}) =>
{

    const [employeeid , setEmployeeid] = useState(0);
    const [password , setPassword] = useState("");
   

    const navigate = useNavigate();

    
    const onemployeeidChange = (e) => {
      setEmployeeid(e.target.value);
      };

      const onpasswordChange = (e) => {
        setPassword(e.target.value);
      };

      



      const handleForgotPassword = async (e) =>
      {
        e.preventDefault();
        navigate("/forgotpassword");
      }


      const handleloginData= async (e) => {
        e.preventDefault()
        const loginCred = {
            username : employeeid,
            password
        };

        // localStorage.setItem("loginCred",JSON.parse(loginCred));
        console.log(loginCred)
        
        const response = await loginData(loginCred);
        // console.log("login clicked");
        // console.log(response);
        if(response.data != "Authentication Failed"){
          setIsLoggedIn(true);
          const loginResponse = await getLoginDataByUserName(loginCred.username);
          // console.log("this is from loginResponse" , loginResponse.roles);
          localStorage.setItem("userName",loginCred.username);
          localStorage.setItem("Role",loginResponse.roles);
          localStorage.setItem("token",response.data);
          setRole(loginResponse.roles);


          
          if(loginResponse.roles == "User") navigate("/userdashboard");
          else navigate("/admindashboard");
          
        }else{
          setIsLoggedIn(false);
          alert("Invalid Credentials !");
          navigate("/login")
        }
        

        //  if(response.data.role == "user") {
        //   setIsLoggedIn(true);
        //   navigate("/userdashboard");
        //  }
        //  else if(response.data.role == "admin")
        //  {setIsLoggedIn(true);
        //    navigate("/admindashboard");
        //   }
        //  else navigate("/error");

       
        
      };



    return(

      <div class="container text-center">
        <form method='post' onSubmit={handleloginData}>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img  className="forgotpasswordImg mt-3 mb-3" src={login} alt="forgot password"/>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div className='mt-5 pt-5'>
                        <h3 className='text-dark  mt-4 mb-5  pb-2'>Login</h3>
                        <input required onChange={onemployeeidChange} type="number" placeholder="Employee Id"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                        <input required onChange={onpasswordChange} type="password" placeholder="Password"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                        <button type="submit" class=" mt-3 pt-2 pb-2 btn btn-success forgotpassword-button">Login</button>
                        <button type="button" onClick={handleForgotPassword} class=" mt-3 pt-2 pb-2 btn btn-outline-primary forgotpassword-button">Forgot Password</button>
                    </div>
                </div>
            </div>
          </form>
      </div>
    )
}

export default Login;