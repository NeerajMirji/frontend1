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
        e.preventDefault(); 
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

      
             <div className='loanapplication p-5  d-flex justify-content-center align-items-center  bg-danger bg-gradient'>
      <div className='form-container  p-5 rounded bg-white'>

        
        <form >
        <h3 className='text-center'>Loan Application</h3>
          <div className='mb-2 p-2'>
              <input type='number' placeholder='Employee Id' className='form-control' onChange={onEmployeeIdChange}/>
          </div>
          <div className='mb-2 p-2'>
              <input type='text' placeholder='Item Category' className='form-control' onChange={onItemCategoryChange}/>
          </div>
          <div className='mb-2 p-2'>
              <input type='text' placeholder='Item Description' className='form-control' onChange={onItemDescriptionChange}/>
          </div>
          <div className='mb-2 p-2'>
              <input type='number' placeholder='Item Value' className='form-control' onChange={onItemValueChange}/>
          </div>
          <div className='mb-2 p-2'>
              <input type='number' placeholder='Loan Duration' className='form-control' onChange={onLoanDurationChange}/>
          </div>
           <div className='d-grid'>
              <button className='btn btn-primary bg-danger bg-gradient' onClick={handleLoanApplication}> Submit</button>
           </div>
          <div class="signup_link">
            
          </div>
        </form>
      </div></div> 

        
        

    )
}

export default LoanApplication;



