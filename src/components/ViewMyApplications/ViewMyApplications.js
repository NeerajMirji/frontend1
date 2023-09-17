import { useEffect, useState } from "react";
import { getMyApplications } from "../api";

const ViewMyApplications = () => {

  const [myApplications, setmyApplications] = useState([{
    loanId : 12345,
    itemId : 3456,
    itemCategory:"Furniture",
    itemDescription:"Chair",
    itemValue:555,
    loanDuration:2,
    loanStatus:"Pending"
  },
]);

  useEffect(() => {
    return async () => {
      const response = await getMyApplications();
      setmyApplications(response);
      console.log("This is from useEffect", response);
    };
  }, []);

  return (
    <div className="container">
      <h3 className="text-primary mt-5">My Loan Applications </h3>
      <table className="table table-striped table-bordered mt-5">
        <thead>
          <tr>
            <th>Loan Id</th>
            <th>Item Id</th>
            <th>Item Category</th>
            <th>Item Description</th>
            <th>Item Value</th>
            <th>Loan Duration</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {myApplications.map((myApplication) => (
            <tr key={myApplication.loanId}>
              <td>{myApplication.loanId}</td>
              <td>{myApplication.itemId}</td>
              <td>{myApplication.itemCategory}</td>
              <td>{myApplication.itemDescription}</td>
              <td>{myApplication.itemValue}</td>
              <td>{myApplication.loanDuration}</td>
              <td>{myApplication.loanStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewMyApplications;
