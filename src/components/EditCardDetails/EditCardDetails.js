import React, { useState } from 'react';
import './EditCardDetails.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateLoanApplicationData } from '../api';

import login from "./login.jpg";

const EditCardDetails = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [loanId , setLoanId] = useState(location.state.cardData.loanId);
    const [loanCategory , setLoanCategory] = useState(location.state.cardData.itemCategory);
    const [loanDuration , setDuration] = useState(location.state.cardData.loanDuration);

    const onDurationChange = (e) =>
    {
        setDuration(e.target.value);
    }

    const handleEditCardDetails = async (e) => {

        e.preventDefault();
        location.state.cardData.loanDuration = loanDuration;

        await updateLoanApplicationData(location.state.cardData);
        navigate("/admindashboard");

      };


  return (
    <div class="container text-center">
    <form method="post" onSubmit={handleEditCardDetails}>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <img  className="forgotpasswordImg mt-3 mb-3" src={login} alt="forgot password"/>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div className='mt-5 pt-5'>
                    <h3 className='text-dark  mt-4 mb-5  pb-2'>Edit Card Data</h3>
                    <input  readOnly value = {loanId} type="number" placeholder="Loan Id"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                    <input readOnly value ={loanCategory} type="text" placeholder="Loan Category"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                    <input required value={loanDuration} onChange={onDurationChange} type="number" placeholder="Duration"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                    <button type="submit" class=" mt-3 pt-2 pb-2 btn btn-outline-primary forgotpassword-button">Submit</button>
                </div>
            </div>
        </div>
      </form>
  </div>
  )
}

export default EditCardDetails;