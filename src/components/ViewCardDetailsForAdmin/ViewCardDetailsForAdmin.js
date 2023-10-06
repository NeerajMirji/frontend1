import { useEffect, useState } from "react";
import { getLoanApplications, deleteLoanApplication} from "../api";
import { useNavigate } from "react-router-dom";


const ViewCardDetailsForAdmin = () => {



  const navigate = useNavigate();

  const [cardDetails,setcardDetails] = useState([]);


  const handleDelete = async (id) => {
    // await deleteCardData(id);
    // console.log("delete function called");
    await deleteLoanApplication(id);
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
              <h3 className="text-primary mt-5">Card Details</h3>
              <table className="table table-striped table-bordered mt-5">
                <thead>
                  <tr>
                    <th>Loan Id</th>
                    <th>Loan Category</th>
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
                        <button data-toggle="modal" data-target="#deleteModal" type="button" className="btn btn-danger ml-2">Delete</button>
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
                                      Are you sure you want to delete card  {cardDetail.loanId}
                                    </div>
                                    <div class="modal-footer">
                                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                      <button onClick={() => handleDelete(cardDetail.loanId)} data-dismiss="modal" type="button" class="btn btn-primary">Delete</button>
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

  export default ViewCardDetailsForAdmin;
