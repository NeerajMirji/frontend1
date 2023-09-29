import React from 'react';
import './ForgotPassword.css';
import forgotpassword from "./forgotPassword.jpg";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updatePassword} from "../api";



const ForgotPassword = () =>
{

    const [employeeId, setEmployeeId] = useState(localStorage.getItem("username"));
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const onEmployeeIdChange = (e) => {
      setEmployeeId(e.target.value);
      };

      const onPasswordChange = (e) => {
        setNewPassword(e.target.value);
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

        let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@$!%#*?&]{8,}$/;
        
        if(!passwordRegex.test(newPassword))
        {
          setNewPassword("");
          alert("Password must contain  at least 1 capital letter, at least one special character, atleast one number , more thn 8 characters");
        }
        else if(newPassword !== confirmPassword) alert("password and confirm password doesn't match!");
        else{
            const updatedUser = {
              username : employeeId,
              password : newPassword,
              roles : localStorage.getItem("Roles")
            }

            const response = await updatePassword(updatedUser);
            console.log(response);
            alert("Password updated successfully");
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
                            <input required type="number" placeholder="User Id" onChange={onEmployeeIdChange}  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                            <input required type="password" placeholder="New Password"  onChange={onPasswordChange}  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                            <input required type="password" placeholder="Confirm Password" onChange={onConfirmPassworChange}   aria-label="First name" className="mt-2 mb-3 form-control forgotpassword-input" ></input>
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