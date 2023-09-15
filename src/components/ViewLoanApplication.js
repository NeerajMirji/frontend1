import { useEffect, useState } from "react";
import { getLoanApplications } from "./api";

const ViewLoanApplication = () => {

  const [Loanapplications, setLoanapplications] = useState([{
    loanId : 456,
    employeeId : 4567,
    itemCategory:"Furniture",
    itemDescription:"Chair",
    itemValue:555,
    loanDuration:2,
    loanStatus:"Pending"
  }]);

  useEffect(() => {
    return async () => {
      const response = await getLoanApplications();
      setLoanapplications(response);
      console.log("This is from useEffect", response);
    };
  }, []);

  return (
    <div className="container">
      <h3 className="text-primary">Loan Application List</h3>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Loan Id</th>
            <th>Employee Id</th>
            <th>Item Category</th>
            <th>Item Description</th>
            <th>Item Value</th>
            <th>Loan Duration</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Loanapplications.map((Loanapplication) => (
            <tr key={Loanapplication.loanId}>
              <td>{Loanapplication.loanId}</td>
              <td>{Loanapplication.employeeId}</td>
              <td>{Loanapplication.itemCategory}</td>
              <td>{Loanapplication.itemDescription}</td>
              <td>{Loanapplication.itemValue}</td>
              <td>{Loanapplication.loanDuration}</td>
              <td>{Loanapplication.loanStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewLoanApplication;
