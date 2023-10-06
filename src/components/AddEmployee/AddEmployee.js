import React, { useState } from 'react';
import './AddEmployee.css';
import { addEmployee, addNewUser } from '../api';
import { useNavigate } from 'react-router-dom';

import AddEmployeeImg from './AddEmployeeImg.jpg'


const AddEmployee = () =>
{

    const[employeeId, setEmployeeId] = useState(0);
    const [employeeName , setName] = useState("");
    const [email , setEmail] = useState("");
    const [mobile , setMobile] = useState("");
    const [age , setAge] = useState("");
    const [doj , setDoj] = useState("");
    const [salary , setSalary] = useState("");
    const [gender , setGender] = useState("");
    const [employeePassword , setPassword] = useState("");
    const navigate = useNavigate();

    const onEmployeeIdChange = (e) =>
    {
        setEmployeeId(e.target.value);
    }

    const onEmployeeNameChange = (e) => {
        setName(e.target.value);
      };
      const onEmployeeGenderChange = (e) => {
        setGender(e.target.value);
      };
      const onEmployeeAgeChange = (e) => {
        setAge(e.target.value);
      };
      const onEmployeeSalaryChange = (e) => {
        setSalary(e.target.value);
      };
      const onEmployeeEmailChange = (e) => {
        setEmail(e.target.value);
      };
      const onEmployeeDojChange = (e) => {
        setDoj(e.target.value);
      };

      const onEmployeeMobileChange = (e) => {
        setMobile(e.target.value);
      };

      const onEmployeePasswordChange = (e) => {
        setPassword(e.target.value);
      };
      const handleAddNewUser = async() => {
       
        const user = {
          username:employeeId,
          email:email,
          password:employeePassword,
          roles:"User"

        }
        console.log("add new user triggerd");
        console.log(user);
        // alert("New")
        await addNewUser(user);
        // navigate("/admindashboard");
      }


      const handleAddEmployee = async (e) => {
        e.preventDefault();
        
        let mobRegex = /^[9876]{1}[0-9]{9}$/;
        let genderRegex = /Male|male|female|Female|Other|other/;
        let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@$!%#*?&]{8,}$/;

        if(age<18 || age>65)
        {
          setAge("");
          alert("Age must be between 18 and 65");
        }
        else if(!mobRegex.test(mobile))
        {
          setMobile("");
          alert("enter a valid mobile number");
          
        }
        else if(!genderRegex.test(gender))
        {
          setGender("");
          alert("entre a valid gender");
        }
        else if(!passwordRegex.test(employeePassword))
        {
          setPassword("");
          alert("Password must contain  at least 1 capital letter, at least one special character, atleast one number , more thn 8 characters");
        }
        else if (salary<10000){
          alert("Salary should be greater than 10000");
        }
        else  
           {
                const employee = {
                  employeeId,
                  employeeName,
                  employeePassword,
                  gender,
                  age,
                  salary,
                  email,
                  doj,
                  mobile,
                };
              
                

                await addEmployee(employee);
                handleAddNewUser();
                navigate("/admindashboard");
           }

      };

    return (
        
      <div className="container text-center">
          <div className="row mb-5">
              <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                  <img  className="forgotpasswordImg mt-5 mb-3" src={AddEmployeeImg} alt="forgot password"/>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                  <div className='mt-5 pt-1'>
                    <form method="post" onSubmit={handleAddEmployee}>
                      <h3 className='text-dark  mt-4 mb-5  pb-2'>Add Employee</h3>
                      <input required onChange={onEmployeeIdChange} type="number" placeholder="Employee Id"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input required onChange={onEmployeeNameChange} type="text" placeholder="User Name"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input required onChange={onEmployeeEmailChange} type="email" placeholder="Email"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input required onChange={onEmployeeMobileChange} type="text" placeholder="Mobile no"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input required onChange={onEmployeeAgeChange} type="number" placeholder="Age"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input required onChange={onEmployeeDojChange} type="date" placeholder="Doj"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input required onChange={onEmployeeSalaryChange} type="number" placeholder="Salary"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input required onChange={onEmployeeGenderChange} type="gender" placeholder="Gender"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input required onChange={onEmployeePasswordChange} type="password" placeholder="Password"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input type="submit" value ="Add Employee" class=" mt-3 pt-2 pb-2 btn btn-success forgotpassword-button"></input>
                      </form>
                  </div>
              </div>
          </div>
        
    </div>
    );
}

export default AddEmployee;