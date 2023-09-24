import { useEffect, useState } from "react";
import { getAllItems, deleteItem, updateItem } from "../api";
import { useNavigate } from "react-router-dom";


const ViewItemData = () => {



  const navigate = useNavigate();

  const [items,setItems] = useState([]);



    const handleDelete = async (itemId) => {
      await deleteItem(itemId);
      console.log("delete function called");
    }

    const handleUpdate = async (item) => {
      // await updateEmployeeData(id);

      navigate('/edititem',{state:{item}});
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
                        <button onClick={() => handleDelete(item.itemId)} type="button" className="btn btn-danger ml-2">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
      </div>
    );
  };

  export default ViewItemData;
