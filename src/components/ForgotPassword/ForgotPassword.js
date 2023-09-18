import React from 'react';
import './ForgotPassword.css';
import forgotpassword from "./forgotPassword.jpg";

const ForgotPassword = () =>
{
    return(
        <div class="container text-center">
            <form method="post">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <img  className="forgotpasswordImg mt-3 mb-3" src={forgotpassword} alt="forgot password"/>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div className='mt-5 pt-4'>
                            <h3 className='text-dark  mb-5  pb-2'> Forgot Your Password?</h3>
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

    );
}

export default ForgotPassword;