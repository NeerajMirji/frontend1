import React from 'react';
import './ForgotPassword.css';
import forgotpassword from "./forgotPassword.jpg";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const ForgotPassword = () =>
{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const onEmailChange = (e) => {
        setEmail(e.target.value);
      };

      const onPasswordChange = (e) => {
        setPassword(e.target.value);
      };

      const onConfirmPassworChange = (e) => {
        setConfirmPassword(e.target.value);
      };

      const handleBackToLogin = async(e)=>{
        e.preventDefault();
        navigate('/login');
      }

      const handleResetPassword = async(e)=>
      {
        e.preventDefault();
        if(password !== confirmPassword) alert("password and confirm password doesn't match!");
        else{
            alert("Mail has been sent to reset password");
            navigate('/login');
        }

      }



    return(
        <div class="container text-center">
            <form method="post" onSubmit={handleResetPassword}>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <img  className="forgotpasswordImg mt-3 mb-3" src={forgotpassword} alt="forgot password"/>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div className='mt-5 pt-4'>
                            <h3 className='text-dark  mb-5  pb-2'> Forgot Your Password?</h3>
                            <input required type="email" placeholder="Email" onChange={onEmailChange} value={email} aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                            <input required type="password" placeholder="Password"  onChange={onPasswordChange} value={password} aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                            <input required type="password" placeholder="Confirm Password" onChange={onConfirmPassworChange} value={confirmPassword}  aria-label="First name" className="mt-2 mb-3 form-control forgotpassword-input" ></input>
                            <button type="submit" class=" mt-3 pt-2 pb-2 btn btn-primary forgotpassword-button">Reset Password</button>
                            <button type="button" onClick={handleBackToLogin} class=" mt-3 pt-2 pb-2 btn btn-outline-success forgotpassword-button">Back to Login</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default ForgotPassword;