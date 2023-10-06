import { useEffect, useState } from "react";
import { getEmployeeList, deleteEmployeeData, updateEmployeeData } from "../api";
import { useNavigate } from "react-router-dom";


const ViewEmployeeData = () => {



  const navigate = useNavigate();

  const [employees,setEmployees] = useState([]);
  const [curID , setCurID] = useState();
  const [name , setName] = useState();



  const handleCurID = async (employee) => {
    setCurID(employee.employeeId);
    setName(employee.employeeName);
    
  }
    const handleDelete = async () => {
      await deleteEmployeeData(curID);
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
                    <tr key={employee.employeeId}>
                      <td className="pt-3" >{employee.employeeId}</td>
                      <td className="pt-3" >{employee.employeeName}</td>
                      <td className="pt-3" >{employee.gender}</td>
                      <td className="pt-3" >{employee.age}</td>
                      <td className="pt-3" >{employee.salary}</td>
                      <td className="pt-3" >{employee.email}</td>
                      <td className="pt-3" >{employee.doj}</td>
                      <td className="pt-3" >{employee.mobile}</td>
                      <td className="pt-3" >
                        <button onClick={() => handleUpdate(employee)} type="button" className="btn btn-warning mr-2">Update</button>
                        <button  onClick={() => handleCurID(employee)} data-toggle="modal" data-target="#deleteModal" type="button" className="btn btn-danger ml-2">Delete</button>
                        <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title" id="exampleModalLabel">Delete Confirmation </h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                      Are you sure you want to delete Employee  {name}
                                    </div>
                                    <div class="modal-footer">
                                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                      <button onClick={() => handleDelete()} data-dismiss="modal" type="button" class="btn btn-primary">Delete</button>
                                    </div>
                                  </div>
                                </div>
                        </div>
                      
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
      </div>
    );
  };

  export default ViewEmployeeData;
