import { useEffect, useState } from "react";
import { getAllItems, deleteItem, updateItem } from "../api";
import { useNavigate } from "react-router-dom";
import './ViewItemData.css';
const ViewItemData = () => {



  const navigate = useNavigate();

  const [items,setItems] = useState([]);



    const handleDelete = async (itemId) => {
      console.log("delete function called for item id" , itemId);
      await deleteItem(itemId);
     
    }

    const handleUpdate = async (item) => {
      // await updateEmployeeData(id);

      navigate('/edititemdetails',{state:{item}});
      console.log(item);
    }

    useEffect(() => {
      return async () => {
        const response = await getAllItems();
        setItems(response);
        // console.log(response);

        console.log("This is from useEffect", response);
      };
    }, [handleDelete, handleUpdate]);





    return (
      <div className="container">
              <h3 className="text-primary mt-5">Item List</h3>
              <table className="table table-striped table-bordered mt-5">
                <thead>
                  <tr>
                    <th>Item ID</th>
                    <th>Item Category</th>
                    <th>Item Make</th>
                    <th>Item Description</th>
                    <th>Item Value</th>
                    <th>Item Status</th>
                    <th>Action</th>

                  </tr>
                </thead>
                <tbody>
                  {items?.map((item) => (
                    <tr key={item.itemId}>
                      <td className="pt-3" >{item.itemId}</td>
                      <td className="pt-3" >{item.itemCategory}</td>
                      <td className="pt-3" >{item.itemMake}</td>
                      <td className="pt-3" >{item.itemDescription}</td>
                      <td className="pt-3" >{item.itemValue}</td>
                      <td className="pt-3" >{item.itemStatus}</td>
                      <td className="pt-3" >
                        <button onClick={() => handleUpdate(item)} type="button" className="btn btn-warning mr-2">Update</button>
                        <button  data-toggle="modal" data-target="#deleteModal" type="button" className="btn btn-danger ml-2">Delete</button>
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
                                      Are you sure you want to delete Item with Id {item.itemId}
                                    </div>
                                    <div class="modal-footer">
                                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                      <button onClick={() => handleDelete(item.itemId)} data-dismiss="modal" type="button" class="btn btn-primary">Delete</button>
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

  export default ViewItemData;
