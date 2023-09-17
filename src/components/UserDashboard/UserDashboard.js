import React from "react";
import './UserDashboard.css';
import applyforloan from './applyforloan.jpg'
import itemspurchased from './itemspurchased.jpg'
import showloans from './showloans.jpg'

const UserDashboard = () =>
{
    return (

        <div className="UserDashboard-container-fluid">
            <h1 classNameName="text-center pb-5">Welcome User</h1>
            <div className="row mt-5">
                <div className="col-md-6 col-lg-4 pt-3 pb-3">
                    <div className="card" style={{width : 18 + 'rem'}}>
                        <img src={applyforloan} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <button type="button" className="btn btn-outline-success">Apply for Loan</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 pt-3 pb-3">
                    <div className="card " style={{width : 18 + 'rem'}}>
                            <img src={showloans} className="card-img-top pt-5 pb-5" alt="..."/>
                            <div className="card-body">
                                 <button type="button" className="btn btn-outline-success">Show Loans</button>
                            </div>
                        </div>
                    </div>
                <div className="col-md-6 col-lg-4 pt-3 pb-3">
                    <div className="card" style={{width : 18 + 'rem'}}>
                            <img src={itemspurchased} className="card-img-top " alt="..."/>
                            <div className="card-body">
                                 <button type="button" className="btn btn-outline-success">Items Purchased</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default UserDashboard;