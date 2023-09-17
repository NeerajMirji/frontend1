
import {  Link } from "react-router-dom";
import { useState } from "react";
import './MainNavbar.css'

const MainNavigation = () => {

     const [loginFlag , setloginFlag] = useState(false);
     

     
    const onloginFlagChange = (e) => {
      setloginFlag(true);
    };

     
    return (

      <div id="navbar-title">
        <div className="navbar-container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark pb-1 ">

            <Link className="navbar-brand " to="/">LoanSwift</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item pl-lg-5">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item pl-lg-5">
                  <Link className="nav-link" to="/aboutUs">About Us</Link>
                </li>
                <li className="nav-item pl-lg-5">
                  <Link className="nav-link" to="/team">Team</Link>
                </li>
                <li className="nav-item pl-lg-5">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

    );
  };
  
  export default MainNavigation;