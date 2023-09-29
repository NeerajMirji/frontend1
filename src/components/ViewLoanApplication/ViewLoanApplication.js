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
    Loanapplication.loanStatus = "Rejected";
   
    await updateLoanApplicationData(Loanapplication);
    
    console.log(Loanapplication);
  }




  useEffect(() => {
    return async () => {
      const response = await getLoanApplications();
      setLoanapplications(response);
      console.log("This is from useEffect", response);
    };
  }, []);

  return (
    <div className="container">
      <h3 className="text-primary mt-5">Loan Application List</h3>
      <table className="table table-striped table-bordered mt-5">
        <thead>
          <tr>
            <th className="pt-3 pb-3" >Loan Id</th>
            <th className="pt-3 pb-3" >Employee Id</th>
            <th className="pt-3 pb-3" >Item Category</th>
            <th className="pt-3 pb-3" >Item Description</th>
            <th className="pt-3 pb-3" >Item Make</th>
            <th className="pt-3 pb-3" >Item Value</th>
            <th className="pt-3 pb-3" >Loan Duration</th>
            <th className="pt-3 pb-3" >Loan Type</th>
            <th className="pt-3 pb-3" >Action</th>
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
              <td className="pt-3">
                {
                  Loanapplication.loanStatus === "Pending" ? (
                    <>
                      <button onClick={() => handleApprove(Loanapplication)} type="button" className="btn btn-success mr-2">Approve</button>
                      <button onClick={() => handleReject(Loanapplication)} type="button" className="btn btn-danger ml-2">Reject</button></>
                  ) : (
                      <>
                       {
                         Loanapplication.loanStatus === "Approved" ?
                          <span className=" text-success font-weight-bold">  Approved </span>
                          :
                          <span className="text-danger font-weight-bold"> Rejected </span>
                       }
                   
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
