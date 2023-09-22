import React from 'react'

import './LoanApplication.css'
import { useState } from "react";
import { loanApplicationDetails } from '../api';
import { useNavigate } from 'react-router-dom';

import login from './login.jpg';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

const LoanApplication = () => {

    const [employee_id , setEmployeeId] = useState(0);
    const [loan_id , setLoanId] = useState("");
    const [item_category , setItemCategory] = useState("");
    const [item_description , setItemDescription] = useState("");
    const [item_value , setItemValue] = useState("");
    const [item_duration , setItemDuration] = useState("");
    const [loan_type , setLoanType] = useState("");
    const navigate = useNavigate();



    const onEmployeeIdChange = (e) => {
        setEmployeeId(e.target.value);
        console.log(employee_id)
      };

      const onLoanIdChange = (e) =>
      {
        setLoanId(e.target.value);
      }

      const onItemCategoryChange = (e) => {
        setItemCategory(e.target.value);
      };
      const onItemDescriptionChange = (e) => {
        setItemDescription(e.target.value);
      };
      const onItemValueChange = (e) => {
        setItemValue(e.target.value);
      };
      const onLoanDurationChange = (e) => {
        setItemDuration(e.target.value);
      };
      const onLoanTypeChange = (e) => {
        setLoanType(e.target.value);
      };
    

      const handleLoanApplication = async (e) => {
        e.preventDefault();
        const applicationDetails = {
           employeeId :  employee_id,
           loanType :  loan_type,
            itemCategory : item_category,
            itemDescription : item_description,
            itemValue : item_value,
            itemDuration : item_duration
        };
        console.log(applicationDetails)

        await loanApplicationDetails(applicationDetails);
        navigate("/userdashboard");
      };
  

    return (

      <div class="container text-center">
      <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12">
              <img  className="forgotpasswordImg mt-3 mb-3" src={login} alt="forgot password"/>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
              <div className='mt-5 pt-5'>
                <form  onSubmit={handleLoanApplication}>
                  <h3 className='text-dark  mt-4 mb-5  pb-2'>Apply For Loan</h3>
                  {/* <input onchange={onEmployeeIdChange} type="number" placeholder="Employee Id"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input> */}
                  <input onChange={onEmployeeIdChange} type="number" placeholder="Employee Id"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                  <input onChange={onLoanIdChange} type="number" placeholder="Loan Id"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                  <input onChange={onItemCategoryChange} type="text" placeholder="Item Category"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                  <input onChange={onItemDescriptionChange} type="text" placeholder="Item Description"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                  <input onChange={onItemValueChange} type="number" placeholder="Item Value"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                  <input onChange={onLoanDurationChange} type="number" placeholder="Item Duration"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                  <input onChange={onLoanTypeChange} type="text" placeholder="Loan Type"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                  <input type="submit" value ="Apply" class=" mt-3 pt-2 pb-2 btn btn-success forgotpassword-button"></input>
                  </form>
              </div>
          </div>
      </div>
    
</div>

        
        

    )
}

export default LoanApplication;



