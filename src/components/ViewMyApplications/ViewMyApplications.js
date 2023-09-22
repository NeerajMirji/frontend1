import { useEffect, useState } from "react";
import { getMyApplications } from "../api";

const ViewMyApplications = () => {

  const userName = localStorage.getItem("userName");
  const [myApplications, setmyApplications] = useState([]);

  useEffect(() => {
    return async () => {
      const response = await getMyApplications(userName);
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
            <th>Application Date</th>
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
              <td>{myApplication.applyDate}</td>
              <td>{myApplication.itemCategory}</td>
              <td>{myApplication.itemDescription}</td>
              <td>{myApplication.itemValue}</td>
              <td>{myApplication.itemDuration}</td>
              <td>{myApplication.itemStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewMyApplications;
