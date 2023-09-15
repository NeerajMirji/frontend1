import { Outlet } from "react-router-dom";
import MainNavbar from './MainNavbar/MainNavbar'
import ContactUs from "./ContactUs/ContactUs";
import './RootLayout.css';


const RootLayout = () => {
  return (
    <div className="rootBody">
      <MainNavbar />
  
      <Outlet />
    
      <ContactUs/>
    </div>
  );
};

export default RootLayout;