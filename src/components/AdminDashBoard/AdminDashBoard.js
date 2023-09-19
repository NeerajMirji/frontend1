import React from "react";
import './AdminDashBoard.css';
import employeeData from './employeeData.jpg'
import itemdata from './itemdata.jpg'
import loancard from './loancard.jpg'
import { Link } from "react-router-dom";

const AdminDashBoard = () =>
{
    return (

        <div className="AdminDashBoard-container-fluid">
            <h1 classNameName="text-center pb-5">Welcome Admin</h1>
            <div className="row mt-5">
                <div className="col-md-6 col-lg-4 pt-3 pb-3">
                    <div className="card" style={{width : 18 + 'rem'}}>
                        <img src={employeeData} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Employee Data</h5>
                            <Link to="/addemployee" type="button" className="btn btn-outline-success mr-3 mt-2">Add</Link>
                            <Link to="/viewemployeedata" type="button" className="btn btn-outline-danger ml-3 mt-2">View</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 pt-3 pb-3">
                    <div className="card " style={{width : 18 + 'rem'}}>
                            <img src={itemdata} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Loan Applications</h5>
                                <Link to="/viewloanapplication" type="button" className="btn btn-outline-success mr-3 mt-2">Add</Link>
                                <Link to="/viewloanapplication" type="button" className="btn btn-outline-danger ml-3 mt-2">View</Link>
                            </div>
                        </div>
                    </div>
                <div className="col-md-6 col-lg-4 pt-3 pb-3">
                    <div className="card" style={{width : 18 + 'rem'}}>
                            <img src={loancard} className="card-img-top pt-5 pb-5" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Issue Card Details</h5>
                                <Link type="button" className="btn btn-outline-success mr-3 mt-2">Add</Link>
                                <Link type="button" className="btn btn-outline-danger ml-3 mt-2">View</Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AdminDashBoard;