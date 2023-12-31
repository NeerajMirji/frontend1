import React, { useEffect } from "react";
import './UserDashboard.css';

import applyforloan from './applyforloan.jpg'
import itemspurchased from './itemspurchased.jpg'
import showloans from './showloans.jpg';
import loancard from './loancard.jpg'
import profileImg from './profileImg.jpg'
import { useNavigate, Link } from "react-router-dom";

const UserDashboard = () =>
{
    const navigate = useNavigate();
   
    
    const username = localStorage.getItem("username");
   
    const handleApplyForLoan = () => {
        navigate("/loanapplications")
    }

    const handleShowLoans = () => {
        navigate("/viewmyapplications")
    }



    useEffect(()=>{
        if(localStorage.getItem("Role") == "Admin"){
            navigate("/error");
        }
    })
    return (

        <div className="UserDashboard-container-fluid">
            <h1 classNameName="text-center pb-5">Welcome User</h1>
            <div className="row mt-5">
                <div className="col-md-6 col-lg-4 pt-3 pb-3">
                    <div className="card" style={{width : 18 + 'rem'}}>
                        <img src={applyforloan} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <button type="button" className="btn btn-outline-success" onClick={handleApplyForLoan}>Apply for Loan</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 pt-3 pb-3">
                    <div className="card " style={{width : 18 + 'rem'}}>
                            <img src={showloans} className="card-img-top pt-5 pb-5" alt="..."/>
                            <div className="card-body">
                                 <button type="button" className="btn btn-outline-success" onClick={handleShowLoans}>Show Loans</button>
                            </div>
                        </div>
                    </div>
                <div className="col-md-6 col-lg-4 pt-3 pb-3">
                    <div className="card" style={{width : 18 + 'rem'}}>
                            <img src={profileImg} className="card-img-top " alt="..."/>
                            <div className="card-body">
                                 <Link type="button" to='/myprofile' className="btn btn-outline-success" >My Profile</Link>
                            </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
            <div className="col-md-6 col-lg-4 pt-3 pb-3">
                    <div className="card" style={{width : 18 + 'rem'}}>
                            <img src={loancard} className="card-img-top pt-5 pb-5" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Loan Card Details</h5>
                                <Link type="button" to='/viewcarddetailsforuser' className="btn btn-outline-success ml-3 mt-2">View</Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default UserDashboard;