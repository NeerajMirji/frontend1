import React from 'react'

import './LoanApplication.css'
import { useState } from "react";
import { loanApplicationDetails } from '../api';

const LoanApplication = () => {

    const [employeeId , setemployeeId] = useState(null);
    const [itemCategory , setitemCategory] = useState("");
    const [itemDescription , setitemDescription] = useState("");
    const [itemValue , setitemValue] = useState(null);
    const [loanDuration , setloanDuration] = useState(null);


    const onEmployeeIdChange = (e) => {
        setemployeeId(e.target.value);
      };
      const onItemCategoryChange = (e) => {
        setitemCategory(e.target.value);
      };
      const onItemDescriptionChange = (e) => {
        setitemDescription(e.target.value);
      };
      const onItemValueChange = (e) => {
        setitemValue(e.target.value);
      };
      const onLoanDurationChange = (e) => {
        setloanDuration(e.target.value);
      };
    

      const handleLoanApplication = async (e) => {
        e.preventDefault();employeeId
        const applicationDetails = {
            employeeId,
            itemCategory,
            itemDescription,
            itemValue,
            loanDuration
        };

        await loanApplicationDetails(applicationDetails);
      };
  

    return (

        <div class="center">
        <h2>Loan Application</h2>
        <form method="post" onSubmit={handleLoanApplication}>
          <div class="txt_field">
            <input type="number" required onChange={onEmployeeIdChange}/>
            <span></span>
            <label>Employee Id</label>
          </div>
          <div class="txt_field">
            <input type="text" required onChange={onItemCategoryChange}/>
            <span></span>
            <label>Item Category</label>
          </div>
          <div class="txt_field">
            <input type="text" required onChange={onItemDescriptionChange}/>
            <span></span>
            <label>Item Description</label>
          </div>
          <div class="txt_field">
            <input type="number" required onChange={onItemValueChange}/>
            <span></span>
            <label>Item Value</label>
          </div>
          <div class="txt_field">
            <input type="number" required onChange={onLoanDurationChange}/>
            <span></span>
            <label>Loan Duration</label>
          </div>
          <input type="submit" value="Add User"/>
          <div class="signup_link">
            
          </div>
        </form>
      </div>

        
        

    )
}

export default LoanApplication;



