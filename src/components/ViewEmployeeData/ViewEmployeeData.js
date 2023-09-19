import { useEffect, useState } from "react";
import { getEmployeeList, deleteEmployeeData, updateEmployeeData } from "../api";
import { useNavigate } from "react-router-dom";


const ViewEmployeeData = () => {

  // const [employee_name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [age, setAge] = useState("");
  // const [doj, setDoj] = useState("");
  // const [salary, setSalary] = useState("");
  // const [gender, setGender] = useState("");
  // const [employee_password, setPassword] = useState("");

  const navigate = useNavigate();

  const [employees,setEmployees] = useState([]);

  // const onNameChange = (e) => {
  //   setName(e.target.value);
  // };
  // const onGenderChange = (e) => {
  //   setGender(e.target.value);
  // };
  // const onAgeChange = (e) => {
  //   setAge(e.target.value);
  // };
  // const onSalaryChange = (e) => {
  //   setSalary(e.target.value);
  // };
  // const onEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };
  // const onDojChange = (e) => {
  //   setDoj(e.target.value);
  // };

  // const onMobileChange = (e) => {
  //   setMobile(e.target.value);
  // };

  // const onPasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleAddEmployee = async (e) => {
  //   e.preventDefault();
  //   const employee = {
  //     employee_name,
  //     employee_password,
  //     gender,
  //     age,
  //     salary,
  //     email,
  //     doj,
  //     mobile,
  //   }

  // }


    const handleDelete = async (id) => {
      await deleteEmployeeData(id);
      console.log("delete function called");
    }

    const handleUpdate = async (employee) => {
      // await updateEmployeeData(id);

      navigate('/editemployee',{state:{employee}});
      console.log(employee);
    }

    useEffect(() => {
      return async () => {
        const response = await getEmployeeList();
        setEmployees(response);
        // console.log(response);

        console.log("This is from useEffect", response);
      };
    }, [handleDelete, handleUpdate]);





    return (
      <div className="container">
              <h3 className="text-primary mt-5">Employee List</h3>
              <table className="table table-striped table-bordered mt-5">
                <thead>
                  <tr>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Email</th>
                    <th>Date of Joining</th>
                    <th>Mobile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employees?.map((employee) => (
                    <tr key={employee.employee_id}>
                      <td className="pt-3" >{employee.employee_id}</td>
                      <td className="pt-3" >{employee.employee_name}</td>
                      <td className="pt-3" >{employee.gender}</td>
                      <td className="pt-3" >{employee.age}</td>
                      <td className="pt-3" >{employee.salary}</td>
                      <td className="pt-3" >{employee.email}</td>
                      <td className="pt-3" >{employee.doj}</td>
                      <td className="pt-3" >{employee.mobile}</td>
                      <td className="pt-3" >
                        <button onClick={() => handleUpdate(employee)} type="button" className="btn btn-warning mr-2">Update</button>
                        <button onClick={() => handleDelete(employee.employee_id)} type="button" className="btn btn-danger ml-2">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
      </div>
    );
  };

  export default ViewEmployeeData;
