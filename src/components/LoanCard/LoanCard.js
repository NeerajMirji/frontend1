import React from 'react'
import './LoanCard.css' 

import { useState } from "react";
import {  updateLoanApplicationData } from '../api';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import login from "./login.jpg";

const LoanCard = () =>
{
     
    const location = useLocation();
    const navigate = useNavigate();
    const [loanId , setLoanId] = useState(location.state.Loanapplication.loanId);
    const [loanCategory , setLoanCategory] = useState(location.state.Loanapplication.loanCategory);
    const [loanDuration , setLoanDuration] = useState(0);

    
    const onLoanIdChange = (e) => {
        setLoanId(e.target.value);
      };

      const onLoanCategoryChange = (e) => {
        setLoanCategory(e.target.value);
      };

      const onLoanDurationChange = (e) => {
        setLoanDuration(e.target.value);
      };


      const handleloanCard = async (e) => {
        e.preventDefault();

        location.state.Loanapplication.loanDuration = loanDuration;
        location.state.Loanapplication.issueDate =new Date().toISOString().slice(0,10);
        location.state.Loanapplication.loanStatus = "Approved";
        await updateLoanApplicationData(location.state.Loanapplication);
      
        // console.log(Loanapplication);
        navigate("/admindashboard");
      };



    return(
              <div class="container text-center">
              <form method="post" onSubmit={handleloanCard}>
                  <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12">
                          <img  className="forgotpasswordImg mt-3 mb-3" src={login} alt="forgot password"/>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                          <div className='mt-5 pt-5'>
                              <h3 className='text-dark  mt-4 mb-5  pb-2'>Add Card Details</h3>
                              <input  readOnly value={location.state.Loanapplication.loanId} onChange={onLoanIdChange} type="number" placeholder="Loan Id"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                              <input readOnly value={location.state.Loanapplication.itemCategory} onChange={onLoanCategoryChange} type="text" placeholder="Loan Category"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                              <input required  onChange={onLoanDurationChange} type="number" placeholder="Duration"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                              <button type="submit" class=" mt-3 pt-2 pb-2 btn btn-outline-primary forgotpassword-button">Create Card</button>
                          </div>
                      </div>
                  </div>
                </form>
              </div>
    )
}

export default LoanCard;