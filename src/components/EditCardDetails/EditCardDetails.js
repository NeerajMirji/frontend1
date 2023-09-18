import React, { useState } from 'react';
import './EditCardDetails.css';

import login from "./login.jpg";

const EditCardDetails = () => {

    const [duration , setDuration] = useState(0);

    const onDurationChange = (e) =>
    {
        setDuration(e.target.value);
    }

    const handleEditCardDetails = async (e) => {
        // // e.preventDefault();
        // const editCardDetails = {
        //     loanid,
        //     itemid,
        //     duration
        // };

        // // await loanApplicationDetails(applicationDetails);
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
                    <input  value = "2345" type="number" placeholder="Loan Id"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                    <input value ="6789" type="number" placeholder="Item Id"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                    <input onchange={onDurationChange} type="number" placeholder="Duration"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                    <button type="button" class=" mt-3 pt-2 pb-2 btn btn-outline-primary forgotpassword-button">Submit</button>
                </div>
            </div>
        </div>
      </form>
  </div>
  )
}

export default EditCardDetails;