import { useEffect, useState } from "react";
import { getLoanApplications} from "../api";
import { useNavigate } from "react-router-dom";


const ViewCardDetailsForAdmin = () => {



  const navigate = useNavigate();

  const [cardDetails,setcardDetails] = useState([]);


  const handleDelete = async (id) => {
    // await deleteCardData(id);
    // console.log("delete function called");
  }

  const handleUpdate = async (cardData) => {
    // await updateEmployeeData(id);

    navigate('/editcarddetails',{state:{cardData}});
    console.log(cardData);
  }





    useEffect(() => {
      return async () => {
        const response = await getLoanApplications();
        setcardDetails(response);
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
                      <td className="pt-3" >{cardDetail.itemCategory}</td>
                      <td className="pt-3" >{cardDetail.loanDuration}</td>
                      <td className="pt-3" >{cardDetail.issueDate}</td>
                      <td className="pt-3" >
                        <button onClick={() => handleUpdate(cardDetail)} type="button" className="btn btn-warning mr-2">Update</button>
                        <button onClick={() => handleDelete(cardDetail.loanId)} type="button" className="btn btn-danger ml-2">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
      </div>
    );
  };

  export default ViewCardDetailsForAdmin;
