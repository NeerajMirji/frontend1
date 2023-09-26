import React,{useState} from 'react';
import './App.css'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";

import Home from './components/Home/Home.js';
import Login from './components/Login/Login';
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
import AddItemData from "./components/AddItemData/AddItemData";
import ViewItemData from './components/ViewItemData/ViewItemData'
import LoanCard from "./components/LoanCard/LoanCard"
import ViewCardDetailsForAdmin from './components/ViewCardDetailsForAdmin/ViewCardDetailsForAdmin'
import ViewCardDetailsForUser from './components/ViewCardDetailsForUser/ViewCardDetailsForUser'
import EditItemData from './components/EditItemData/EditItemData';


function App() {
 
  const [isLoggedIn,setIsLoggedIn] = useState(localStorage.getItem("token") !== null)
  const [role, setRole] = useState(localStorage.getItem("Role"));
  

  return (
    <>
    <Router>

        <MainNavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
   
        <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} role={role} setRole={setRole}/>} />
          <Route path="/adduser" element={role=="Admin" && isLoggedIn ? <AddEmployee/> : <Home/>} />
          <Route path="/ViewEmployeeData" element={role=="Admin" && isLoggedIn ? <ViewEmployeeData/> : <Home/>} />
          <Route path="/viewloanapplication" element={role=="Admin" && isLoggedIn ? <ViewLoanApplication/>: <Home/>} />
          <Route path="/viewmyapplications" element={ isLoggedIn ? <ViewMyApplications/>: <Home/>} />
          <Route path="/loanapplications" element={isLoggedIn ? <LoanApplication/>: <Home/>} />
          <Route path="/userdashboard" element={ isLoggedIn ? <UserDashBoard/>: <Home/>} />
          <Route path="/admindashboard" element={(role==="Admin" && isLoggedIn) ? <AdminDashBoard/>: <Home/>} />
          <Route path="/error" element={isLoggedIn ? <Error/>: <Home/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/editcarddetails" element={role=="Admin" && isLoggedIn ? <EditCardDetails/>: <Home/>}/>
          <Route path="/addemployee" element={role=="Admin" && isLoggedIn ? <AddEmployee/>: <Home/>}/>
          <Route path="/editemployee" element={role=="Admin" &&isLoggedIn ? <EditEmployee/>: <Home/>}/> 
          <Route path="/additemdata" element={role=="Admin" &&isLoggedIn ? <AddItemData/>: <Home/>}/> 
          <Route path="/viewitemdata" element={role=="Admin" &&isLoggedIn ? <ViewItemData/>: <Home/>}/> 
          <Route path="/addloancard" element={role=="Admin" &&isLoggedIn ? <LoanCard/>: <Home/>}/> 
          <Route path="/edititemdetails" element={role=="Admin" &&isLoggedIn ? <EditItemData/>: <Home/>}/> 
          <Route path="/viewcarddetailsforadmin" element={role=="Admin" &&isLoggedIn ? <ViewCardDetailsForAdmin/>: <Home/>}/>
          <Route path="/editcarddetails" element={role=="Admin" &&isLoggedIn ? <EditCardDetails/>: <Home/>}/>
          <Route path="/viewcarddetailsforuser" element={ isLoggedIn ? <ViewCardDetailsForUser/>: <Home/>} />
       </Routes>
       <ContactUs/>
      
  

    </Router>
    </>
  )
}

export default App;
