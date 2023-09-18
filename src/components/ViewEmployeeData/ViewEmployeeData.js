import { useEffect, useState } from "react";
import { getEmployeeList } from "../api";

const ViewEmployeeData = () => {
  const [employees, setEmployees] = useState([
    {
        id : 234,
        name : "fghj",
        gender : "M",
        age : 67,
        salary : 345678,
        email : "fgh@gmail.com",
        doj : "01-11-2023",
        mobile : 2345678888
    }
  ]);

  useEffect(() => {
    return async () => {
      const response = await getEmployeeList();
      setEmployees(response);
      console.log("This is from useEffect", response);
    };
  }, []);

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
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className ="pt-3" >{employee.id}</td>
              <td className ="pt-3" >{employee.name}</td>
              <td className ="pt-3" >{employee.gender}</td>
              <td className ="pt-3" >{employee.age}</td>
              <td className ="pt-3" >{employee.salary}</td>
              <td className ="pt-3" >{employee.email}</td>
              <td className ="pt-3" >{employee.doj}</td>
              <td className ="pt-3" >{employee.mobile}</td>
              <td className ="pt-3" >
                <button type="button" className="btn btn-warning mr-2">Update</button>
                <button type="button" className="btn btn-danger ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEmployeeData;
