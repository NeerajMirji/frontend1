import React from 'react'

import './AddUser.css'
import { useState } from "react";
import { addEmployee } from '../api';

const AddUser = () => {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [mobile , setMobile] = useState("");
    const [age , setAge] = useState("");
    const [doj , setDoj] = useState("");
    const [salary , setSalary] = useState("");
    const [gender , setGender] = useState("male");
    const [password , setPassword] = useState("");

    const onNameChange = (e) => {
        setName(e.target.value);
      };
      const onGenderChange = (e) => {
        setGender(e.target.value);
      };
      const onAgeChange = (e) => {
        setAge(e.target.value);
      };
      const onSalaryChange = (e) => {
        setSalary(e.target.value);
      };
      const onEmailChange = (e) => {
        setEmail(e.target.value);
      };
      const onDojChange = (e) => {
        setDoj(e.target.value);
      };

      const onMobileChange = (e) => {
        setMobile(e.target.value);
      };

      const onPasswordChange = (e) => {
        setPassword(e.target.value);
      };

      const handleAddEmployee = async (e) => {
        e.preventDefault();
        const employee = {
          name,
          gender,
          age,
          salary,
          email,
          doj,
          mobile,
        };

        await addEmployee(employee);
      };
  

    return (

      //   <div class="center">
      //   <h2>Add User</h2>
      //   <form method="post" onSubmit={handleAddEmployee}>
      //     <div class="txt_field">
      //       <input type="text" required onChange={onNameChange}/>
      //       <span></span>
      //       <label>Username</label>
      //     </div>
      //     <div class="txt_field">
      //       <input type="email" required onChange={onEmailChange}/>
      //       <span></span>
      //       <label>Email</label>
      //     </div>
      //     <div class="txt_field">
      //       <input type="number" required onChange={onMobileChange}/>
      //       <span></span>
      //       <label>Mobile No</label>
      //     </div>
      //     <div class="txt_field">
      //       <input type="number" required onChange={onAgeChange}/>
      //       <span></span>
      //       <label>Age</label>
      //     </div>
      //     <div class="txt_field">
      //       <input type="date" required onChange={onDojChange}/>
      //       <span></span>
      //       {/* <label>dd-mm-yyyy</label> */}
      //     </div>
      //     <div class="txt_field">
      //       <input type="number" required onChange={onSalaryChange}/>
      //       <span></span>
      //       <label>Salary</label>
      //     </div>
      //     <div class="txt_field">
      //       <input type="gender" required onChange={onGenderChange}/>
      //       <span></span>
      //       <label>Gender</label>
      //     </div>
      //     <div class="txt_field">
      //       <input type="password" required onChange={onPasswordChange}/>
      //       <span></span>
      //       <label>Password</label>
      //     </div>
      //     <input type="submit" value="Add User"/>
      //     <div class="signup_link">
            
      //     </div>
      //   </form>
        
      // </div>

      // <div className='adduser template d-flex justify-content-center align-items-center 100-w vh-100 bg-danger bg-gradient'>
      
      <div className='adduser p-5  d-flex justify-content-center align-items-center  bg-danger bg-gradient'>
      <div className='form-container  p-5 rounded bg-white'>

      <form>
          <h3 className='text-center'>Add Employee</h3>
          <div className='mb-2 p-2'>
              <input type='text' placeholder='Enter Name' className='form-control' onChange={onNameChange}/>
          </div>
          <div className='mb-2 p-2'>
              <input type='email' placeholder='Enter Email' className='form-control' onChange={onEmailChange}/>
          </div>
          <div className='mb-2 p-2'>
              <input type='password' placeholder='Enter password' className='form-control' onChange={onPasswordChange}/>
          </div>
          <div className='mb-2 p-2'>
              <input type='number' placeholder='Enter Mobile No' className='form-control' onChange={onMobileChange}/>
          </div>
          <div className='mb-2 p-2'>
              <input type='number' placeholder='Enter Age' className='form-control' onChange={onAgeChange}/>
          </div>
          <div className='mb-2 p-2'>
              <input type='date' placeholder='Enter DOJ' className='form-control' onChange={onDojChange}/>
          </div>
          <div className='mb-2 p-2'>
                <input
                type="radio"
                id="male"
                name="choose"
                value="male"
                checked={gender === 'male'}
                onChange={onGenderChange}
              />
              <label htmlFor="male">Male</label>

              <input
                type="radio"
                id="female"
                name="choose"
                value="female"
                onChange={onGenderChange}
                checked={gender === 'female'}
              />
              <label htmlFor="male">Female</label>

              <input
                type="radio"
                id="others"
                name="choose"
                value="others"
                onChange={onGenderChange}
                checked={gender === 'others'}
              />
              <label htmlFor="others">Others</label>
          </div>
          <div className='d-grid'>
              <button className='btn btn-primary bg-danger bg-gradient'>Add Employee</button>
          </div>
      </form>
      </div>
  </div>
        

    )
}

export default AddUser;



