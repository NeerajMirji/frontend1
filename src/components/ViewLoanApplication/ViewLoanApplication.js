import { useEffect, useState } from "react";
import { getLoanApplications, updateLoanApplicationData } from "../api";
import { useNavigate } from "react-router-dom";

const ViewLoanApplication = () => {

  const [Loanapplications, setLoanapplications,] = useState([]);

  const navigate = useNavigate();
  


  const handleApprove = async (Loanapplication) => {
    // await updateEmployeeData(id);
    

    // navigate('/editemployee',{state:{employee}});
    navigate("/addloancard" , {state:{Loanapplication}})
    // Loanapplication.itemStatus = "Approved";
    // await updateLoanApplicationData(Loanapplication);
   
    // console.log(Loanapplication);
  }

  const handleReject = async (Loanapplication) => {
    // await updateEmployeeData(id);

    // navigate('/editemployee',{state:{employee}});
    Loanapplication.itemStatus = "Rejected";
    await updateLoanApplicationData(Loanapplication);
    
    console.log(Loanapplication);
  }


  // const handleClick = async(e) =>{

  //   console.log(e);


  // }

  useEffect(() => {
    return async () => {
      const response = await getLoanApplications();
      setLoanapplications(response);
      console.log("This is from useEffect", response);
    };
  }, [handleApprove,handleReject]);

  return (
    <div className="container">
      <h3 className="text-primary mt-5">Loan Application List</h3>
      <table className="table table-striped table-bordered mt-5">
        <thead>
          <tr>
            <th>Loan Id</th>
            <th>Employee Id</th>
            <th>Item Category</th>
            <th>Item Description</th>
            <th>Item Make</th>
            <th>Item Value</th>
            <th>Loan Duration</th>
            <th>Loan Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Loanapplications.map((Loanapplication) => (
            <tr key={Loanapplication.loanId}>
              <td className="pt-3">{Loanapplication.loanId}</td>
              <td className="pt-3">{Loanapplication.employeeId}</td>
              <td className="pt-3">{Loanapplication.itemCategory}</td>
              <td className="pt-3">{Loanapplication.itemDescription}</td>
              <td className="pt-3">{Loanapplication.itemMake}</td>
              <td className="pt-3">{Loanapplication.itemValue}</td>
              <td className="pt-3">{Loanapplication.loanDuration}</td>
              <td className="pt-3">{Loanapplication.loanType}</td>
              <td>
                {
                  Loanapplication.loanStatus === "Pending" ? (
                    <>
                      <button onClick={() => handleApprove(Loanapplication)} type="button" className="btn btn-success mr-2">Approve</button>
                      <button onClick={() => handleReject(Loanapplication)} type="button" className="btn btn-danger ml-2">Reject</button></>
                  ) : (
                      <>
                      <span>  {Loanapplication.loanStatus}</span>
                   
                      </>
                  )
                }

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewLoanApplication;
