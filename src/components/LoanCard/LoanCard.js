import React from 'react'
import './LoanCard.css' 

import { useState } from "react";
import { loanCardDetails } from '../api';

const LoanCard = () =>
{

    const [loanId , setloanId] = useState(null);
    const [loanType , setloanType] = useState("");
    const [duration , setduration] = useState(0);

    
    const onloanIdChange = (e) => {
        setloanId(e.target.value);
      };

      const onloanTypeChange = (e) => {
        setloanType(e.target.value);
      };

      const ondurationChange = (e) => {
        setduration(e.target.value);
      };


      const handleloanCard = async (e) => {
        e.preventDefault();
        const loanCard = {
            loanId,
            loanType,
            duration

        };

        await loanCardDetails(loanCard);
      };



    return(

        <div class="center">
        <h2>LoanCard Details</h2>
        <form method="post" onSubmit={handleloanCard}>
          <div class="txt_field">
            <input type="number" required onChange={setloanId}/>
            <span></span>
            <label>Loan Id</label>
          </div>
          <div class="txt_field">
            <input type="text" required onChange={setloanType}/>
            <span></span>
            <label>Loan type</label>
          </div>
          <div class="txt_field">
            <input type="number" required onChange={setduration}/>
            <span></span>
            <label>Duration in months</label>
          </div>
          <input type="submit" value="submit"/>
          <div class="signup_link">
           
          </div>
        </form>
      </div>
    )
}

export default LoanCard;