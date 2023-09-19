import React, { useState } from 'react';
import './AddEmployee.css';
import { addEmployee } from '../api';
import { useNavigate } from 'react-router-dom';

import login from './login.jpg'


const AddEmployee = () =>
{

    // const[employee_id, setEmployeeid] = useState("");
    const [employee_name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [mobile , setMobile] = useState("");
    const [age , setAge] = useState("");
    const [doj , setDoj] = useState("");
    const [salary , setSalary] = useState("");
    const [gender , setGender] = useState("");
    const [employee_password , setPassword] = useState("");
    const navigate = useNavigate();

    // const onEmployeeIdChange = (e) =>
    // {
    //     setEmployeeid(e.target.value);
    // }

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

      const handleAddEmployee = async (e) => {
        e.preventDefault();
        const employee = {
          employee_name,
          employee_password,
          gender,
          age,
          salary,
          email,
          doj,
          mobile,
        };

        await addEmployee(employee);
        navigate("/admindashboard");

      };

    return (
        
      <div class="container text-center">
          <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                  <img  className="forgotpasswordImg mt-3 mb-3" src={login} alt="forgot password"/>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                  <div className='mt-5 pt-5'>
                    <form method="post" onSubmit={handleAddEmployee}>
                      <h3 className='text-dark  mt-4 mb-5  pb-2'>Add Employee</h3>
                      {/* <input onchange={onEmployeeIdChange} type="number" placeholder="Employee Id"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input> */}
                      <input onChange={onEmployeeNameChange} type="text" placeholder="User Name"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input onChange={onEmployeeEmailChange} type="email" placeholder="Email"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input onChange={onEmployeeMobileChange} type="text" placeholder="Mobile no"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input onChange={onEmployeeAgeChange} type="number" placeholder="Age"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input onChange={onEmployeeDojChange} type="date" placeholder="Doj"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input onChange={onEmployeeSalaryChange} type="number" placeholder="Salary"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input onChange={onEmployeeGenderChange} type="gender" placeholder="Gender"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input onChange={onEmployeePasswordChange} type="password" placeholder="Password"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input type="submit" value ="Add Employee" class=" mt-3 pt-2 pb-2 btn btn-success forgotpassword-button"></input>
                      </form>
                  </div>
              </div>
          </div>
        
    </div>
    );
}

export default AddEmployee;