import React from 'react'
import './LoanCard.css' 

import { useState } from "react";
import {  updateLoanApplicationData } from '../api';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

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

        <div class="center">
        <h2>LoanCard Details</h2>
        <form method="post" onSubmit={handleloanCard}>
          <div class="txt_field">
            <input readOnly type="number" required value={location.state.Loanapplication.loanId} onChange={onLoanIdChange}/>
            <span></span>
            <label>Loan Id</label>
          </div>
          <div class="txt_field">
            <input readOnly type="text" required value={location.state.Loanapplication.itemCategory} onChange={onLoanCategoryChange}/>
            <span></span>
            <label>Loan Category</label>
          </div>
          <div class="txt_field">
            <input type="number" required onChange={onLoanDurationChange}/>
            <span></span>
            <label>Duration in months</label>
          </div>
          <input type="submit" value="Create Card"/>
          <div class="signup_link">
           
          </div>
        </form>
      </div>
    )
}

export default LoanCard;