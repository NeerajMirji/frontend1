import React, { useState } from 'react';
import './EditEmployee.css';
import { updateEmployeeData } from '../api';
import { useLocation, useNavigate } from 'react-router-dom';

import EditEmployeeImg from './EditEmployeeImg.jpg'


const EditEmployee = () =>
{

   const location = useLocation();

    const[employeeId, setEmployeeid] = useState(location.state.employee.employeeId);
    const [employeeName , setName] = useState(location.state.employee.employeeName);
    const [email , setEmail] = useState(location.state.employee.email);
    const [mobile , setMobile] = useState(location.state.employee.mobile);
    const [age , setAge] = useState(location.state.employee.age);
    const [doj , setDoj] = useState(location.state.employee.doj);
    const [salary , setSalary] = useState(location.state.employee.salary);
    const [gender , setGender] = useState(location.state.employee.gender);
    const [employeePassword , setPassword] = useState(location.state.employee.employeePassword);
    const navigate = useNavigate();

    const onEmployeeIdChange = (e) =>
    {
      alert("ID change")
        setEmployeeid(e.target.value);
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

      const handleUpdateEmployee = async (e) => {
        e.preventDefault();
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

        await updateEmployeeData(employee);
        navigate("/admindashboard");

      };

    return (
        
      <div class="container text-center">
          <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                  <img  className="forgotpasswordImg mt-3 mb-3" src={EditEmployeeImg} alt="forgot password"/>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                  <div className='mt-5 pt-5'>
                    <form method="post" onSubmit={handleUpdateEmployee}>
                      <h3 className='text-dark  mt-4 mb-5  pb-2'>Update Employee Data</h3>
                      <input onChange={onEmployeeIdChange} value={employeeId} type="number" placeholder="Employee Id"  aria-label="First name" className="mt-2 form-control forgotpassword-input" />
                      <input onChange={onEmployeeNameChange} value={employeeName} type="text" placeholder="User Name"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input onChange={onEmployeeEmailChange} value={email} type="email" placeholder="Email"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input onChange={onEmployeeMobileChange} value={mobile} type="text" placeholder="Mobile no"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input onChange={onEmployeeAgeChange} value={age} type="number" placeholder="Age"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input onChange={onEmployeeDojChange} value={doj} type="date" placeholder="Doj"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input onChange={onEmployeeSalaryChange} value={salary} type="number" placeholder="Salary"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input onChange={onEmployeeGenderChange} value={gender} type="gender" placeholder="Gender"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input onChange={onEmployeePasswordChange} value={employeePassword} type="password" placeholder="Password"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input type="submit" value ="Update" class=" mt-3 pt-2 pb-2 btn btn-success forgotpassword-button"></input>
                      </form>
                  </div>
              </div>
          </div>
        
    </div>
    );
}

export default EditEmployee;