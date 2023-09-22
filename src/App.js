import React,{useState} from 'react';
import './App.css'
import { useNavigate } from 'react-router-dom';
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
import AddEmployee from './components/AddEmployee/AddEmployee';
import EditEmployee from './components/EditEmployee/EditEmployee';






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
 
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  
  return (
    <>
    <Router>

        <MainNavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
   
        <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/adduser" element={isLoggedIn ? <AddUser/> : <Home/>} />
          <Route path="/usersignup" element={isLoggedIn ? <UserSignUp/> : <Home/>} />
          <Route path="/ViewEmployeeData" element={isLoggedIn ? <ViewEmployeeData/> : <Home/>} />
          <Route path="/viewloanapplication" element={isLoggedIn ? <ViewLoanApplication/>: <Home/>} />
          <Route path="/viewmyapplications" element={isLoggedIn ? <ViewMyApplications/>: <Home/>} />
          <Route path="/loanapplications" element={isLoggedIn ? <LoanApplication/>: <Home/>} />
          <Route path="/userdashboard" element={isLoggedIn ? <UserDashBoard/>: <Home/>} />
          <Route path="/admindashboard" element={isLoggedIn ? <AdminDashBoard/>: <Home/>} />
          <Route path="/error" element={isLoggedIn ? <Error/>: <Home/>} />
          <Route path="/editcarddetails" element={isLoggedIn ? <EditCardDetails/>: <Home/>}/>
          <Route path="/addemployee" element={isLoggedIn ? <AddEmployee/>: <Home/>}/>
          <Route path="/editemployee" element={isLoggedIn ? <EditEmployee/>: <Home/>}/> 
    
          
       </Routes>
       <ContactUs/>
      
  

    </Router>
    </>
  )
}

export default App;
