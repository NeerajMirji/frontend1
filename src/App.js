import React from 'react';
import './App.css'
import { Container } from "@material-ui/core";

import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";

import Home from './components/Home/Home.js';
import UserSignUp from './components/UserSignUp/UserSignup';
import EmployeeList from './components/EmployeeList';
import Login from './components/Login/Login';
import LoanCard from './components/LoanCard/LoanCard'
import AddUser from './components/AddUser/AddUser'
import AdminDashBoard from './components/AdminDashBoard/AdminDashBoard';
import UserDashBoard from './components/UserDashboard/UserDashboard';
import ViewLoanApplication from './components/ViewLoanApplication/ViewLoanApplication';
import ViewMyApplications from './components/ViewMyApplications/ViewMyApplications';
import RootLayout from './components/RootLayout';
import ContactUs from './components/ContactUs/ContactUs';
import MainNavbar from './components/MainNavbar/MainNavbar';






// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/LoanCard", element: <LoanCard /> },
//       { path: "/Login", element: <Login /> },
//       { path: "/AddUser", element: <AddUser /> },
//       { path: "/UserSignUp", element: <UserSignUp /> },
//       { path: "/EmployeeList", element: <EmployeeList /> },
//       { path: "/ViewLoanApplication", element: <ViewLoanApplication /> },
//       { path: "/ViewMyApplications", element: <ViewMyApplications /> }

//     ],
//   },
// ]);

function App() {
  return (
    <>
    <Router>

        <MainNavbar/>
        <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/login" element={<ViewMyApplications/>} />
       </Routes>
       <ContactUs/>
      
  

    </Router>
    </>
  )
}

export default App;
