import React, { useState } from 'react';
import './AddItemData.css';
import { addItem} from '../api';
import { useNavigate } from 'react-router-dom';

import AddItemDataImg from './AddItemDataImg.jpg'


const AddItemData = () =>
{

    const [itemId , setItemId] = useState("");
    const [itemCategory , setItemCategory] = useState("");
    const [itemMake , setItemMake] = useState("");
    const [itemValue , setItemValue] = useState("");
    const [itemDescription , setItemDescription] = useState("");
    const [itemStatus , setItemStatus] = useState("");

    const navigate = useNavigate();



    const onItemCategoryChange = (e) => {
      setItemCategory(e.target.value);
      };
      const onItemMakeChange = (e) => {
        setItemMake(e.target.value);
      };
      const onItemValueChange = (e) => {
        setItemValue(e.target.value);
      };
      const onItemDescriptionChange = (e) => {
        setItemDescription(e.target.value);
      };
      const onItemStatusChange = (e) => {
        setItemStatus(e.target.value);
      };
      const onItemIdChange = (e) => {
        setItemId(e.target.value);
      };
     

      const handleAddItem = async (e) => {
        e.preventDefault();
        const item = {
          itemId,
          itemCategory,
          itemMake,
          itemDescription,
          itemValue,
          itemStatus

        };

        console.log(item);

        await addItem(item);
        navigate("/admindashboard");

      };

    return (
        
      <div class="container text-center">
          <div class="row mb-5">
              <div class="col-lg-6 col-md-6 col-sm-12">
                  <img  className="forgotpasswordImg mt-5 mb-3" src={AddItemDataImg} alt="forgot password"/>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                  <div className='mt-5 pt-1'>
                    <form method="post" onSubmit={handleAddItem}>
                      <h3 className='text-dark  mt-4 mb-5  pb-2'>Add Items</h3>
                      <input required onChange={onItemIdChange} type="number" placeholder="Item Id"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <select  required onChange={onItemCategoryChange} className="custom-select  mt-2 mb-1" id="inputGroupSelect01">
                        <option defaultValue="Item Category">Item Category</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Crockery">Crockery</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Stationary">Stationary</option>
                        </select>
                      <select  required onChange={onItemMakeChange} className="custom-select  mt-2 mb-1" id="inputGroupSelect01">
                        <option defaultValue="Item Make">Item Make</option>
                        <option value="Wooden">Wooden</option>
                        <option value="Glass">Glass</option>
                        <option value="Plastic">Plastic</option>
                        <option value="Steel">Steel</option>
                        <option value="Marble">Marble</option>
                      </select>
                      {/* <input required onChange={onItemCategoryChange} type="text" placeholder="Item Category"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input> */}
                      {/* <input required onChange={onItemMakeChange} type="text" placeholder="Item Make"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input> */}
                      <input required onChange={onItemDescriptionChange} type="text" placeholder="Item Description"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input required onChange={onItemValueChange} type="number" placeholder="Item Value"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <select  required onChange={onItemStatusChange} className="custom-select  mt-2 mb-1" id="inputGroupSelect01">
                        <option defaultValue="Item Status">Item Status</option>
                        <option value="Available">Available</option>
                        <option value="Unavailable">Unavailable</option>
                      </select>
                      {/* <input required onChange={onItemStatusChange} type="text" placeholder="Item Status"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input> */}
                    
                      <input type="submit" value ="Add Item" class=" mt-3 pt-2 pb-2 btn btn-success forgotpassword-button"></input>
                      </form>
                  </div>
              </div>
          </div>
        
    </div>
    );
}

export default AddItemData;