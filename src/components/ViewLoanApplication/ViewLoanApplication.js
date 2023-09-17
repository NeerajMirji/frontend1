import { useEffect, useState } from "react";
import { getLoanApplications } from "../api";

const ViewLoanApplication = () => {

  const [Loanapplications, setLoanapplications] = useState([{
    loanId : 456,
    employeeId : 4567,
    itemCategory:"Furniture",
    itemDescription:"Chair",
    itemValue:555,
    loanDuration:2,
  },
  {
    loanId : 456,
    employeeId : 4567,
    itemCategory:"Furniture",
    itemDescription:"Chair",
    itemValue:555,
    loanDuration:2,
  }
]);

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
            <th>Loan Id</th>
            <th>Employee Id</th>
            <th>Item Category</th>
            <th>Item Description</th>
            <th>Item Value</th>
            <th>Loan Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Loanapplications.map((Loanapplication) => (
            <tr key={Loanapplication.loanId}>
              <td className ="pt-3">{Loanapplication.loanId}</td>
              <td className ="pt-3">{Loanapplication.employeeId}</td>
              <td className ="pt-3">{Loanapplication.itemCategory}</td>
              <td className ="pt-3">{Loanapplication.itemDescription}</td>
              <td className ="pt-3">{Loanapplication.itemValue}</td>
              <td className ="pt-3">{Loanapplication.loanDuration}</td>
              <td>
                <button type="button" className="btn btn-success mr-2">Approve</button>
                <button type="button" className="btn btn-danger ml-2">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewLoanApplication;
