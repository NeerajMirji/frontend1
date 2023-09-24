import { useEffect, useState } from "react";
import { getLoanApplications} from "../api";
import { useNavigate } from "react-router-dom";


const ViewCardDetailsForUser = () => {



  const navigate = useNavigate();

  const [cardDetails,setcardDetails] = useState([]);





    useEffect(() => {
      return async () => {
        const response = await getLoanApplications();
        setcardDetails(response);
        // console.log(response);

        console.log("This is from useEffect", response);
      };
    }, []);





    return (
      <div className="container">
              <h3 className="text-primary mt-5">Cards Availed</h3>
              <table className="table table-striped table-bordered mt-5">
                <thead>
                  <tr>
                    <th>Loan Id</th>
                    <th>Loan Type</th>
                    <th>Loan Duration</th>
                    <th>Issue Date</th>
                  </tr>
                </thead>
                <tbody>
                  {cardDetails?.map((cardDetail) => (
                    <tr key={cardDetail.issueId}>
                      <td className="pt-3" >{cardDetail.loanId}</td>
                      <td className="pt-3" >{cardDetail.loanType}</td>
                      <td className="pt-3" >{cardDetail.loanDuration}</td>
                      <td className="pt-3" >{cardDetail.issueDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
      </div>
    );
  };

  export default ViewCardDetailsForUser;
