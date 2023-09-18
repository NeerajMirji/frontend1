import React from 'react';
import './App.css'


import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";

import Home from './components/Home/Home.js';
import UserSignUp from './components/UserSignUp/UserSignup';
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
import ViewEmployeeData from './components/ViewEmployeeData/ViewEmployeeData';
import Error from './components/Error/Error';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import LoanApplication from './components/LoanApplication/LoanApplication';
import EditCardDetails from './components/EditCardDetails/EditCardDetails';






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
          <Route path="/login" element={<Login/>} />
          <Route path="/adduser" element={<AddUser/>} />
          <Route path="/usersignup" element={<UserSignUp/>} />
          <Route path="/ViewEmployeeData" element={<ViewEmployeeData/>} />
          <Route path="/viewloanapplication" element={<ViewLoanApplication/>} />
          <Route path="/viewmyapplications" element={<ViewMyApplications/>} />
          <Route path="/loanapplications" element={<LoanApplication/>} />
          <Route path="/userdashboard" element={<UserDashBoard/>} />
          <Route path="/admindashboard" element={<AdminDashBoard/>} />
          <Route path="/error" element={<Error/>} />
          <Route path="/editcarddetails" element={<EditCardDetails/>}/>
       </Routes>
       <ContactUs/>
      
  

    </Router>
    </>
  )
}

export default App;
