import React, { useState } from 'react';
import './EditItemData.css';
import { updateItem} from '../api';
import { useLocation, useNavigate } from 'react-router-dom';

import login from './login.jpg'


const EditItemData = () =>
{

    const location = useLocation();
    const [itemId , setItemId] = useState(location.state.item.itemId);
    const [itemCategory , setItemCategory] = useState(location.state.item.itemCategory);
    const [itemMake , setItemMake] = useState(location.state.item.itemMake);
    const [itemValue , setItemValue] = useState(location.state.item.itemValue);
    const [itemDescription , setItemDescription] = useState(location.state.item.itemDescription);
    const [itemStatus , setItemStatus] = useState(location.state.item.itemStatus);

    const navigate = useNavigate();


    const onItemIdChange = (e) => {
      setItemId(e.target.value);
      };

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
     

      const handleUpdateItem = async (e) => {
        e.preventDefault();
        const item = {
          itemId,
          itemCategory,
          itemMake,
          itemDescription,
          itemValue,
          itemStatus

        };

        await updateItem(item);
        navigate("/admindashboard");

      };

    return (
        
      <div class="container text-center">
          <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                  <img  className="forgotpasswordImg mt-3 mb-3" src={login} alt="forgot password"/>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                  <div className='mt-5 pt-5'>
                    <form method="post" >
                      <h3 className='text-dark  mt-4 mb-5  pb-2'>Edit Item Data</h3>
                      <input value={itemId} onChange={onItemIdChange} type="text" placeholder="Item Category"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <select  required onChange={onItemCategoryChange} className="custom-select  mt-2 mb-1" id="inputGroupSelect01">
                        <option defaultValue={itemCategory}>{itemCategory}</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Crockery">Crockery</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Stationary">Stationary</option>
                        </select>
                      <select  required onChange={onItemMakeChange} className="custom-select  mt-2 mb-1" id="inputGroupSelect01">
                        <option defaultValue={itemMake}>{itemMake}e</option>
                        <option value="Wooden">Wooden</option>
                        <option value="Glass">Glass</option>
                        <option value="Plastic">Plastic</option>
                        <option value="Steel">Steel</option>
                        <option value="Marble">Marble</option>
                      </select>
                      
                      {/* <input value={itemCategory} onChange={onItemCategoryChange} type="text" placeholder="Item Category"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input> */}
                      {/* <input value={itemMake} onChange={onItemMakeChange} type="text" placeholder="Item Make"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input> */}
                      <input value={itemDescription} onChange={onItemDescriptionChange} type="text" placeholder="Item Description"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input value={itemValue} onChange={onItemValueChange} type="number" placeholder="Item Value"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <select  required onChange={onItemStatusChange} className="custom-select  mt-2 mb-1" id="inputGroupSelect01">
                        <option defaultValue={itemStatus}>{itemStatus}</option>
                        <option value="Available">Available</option>
                        <option value="Unavailable">Unavailable</option>
                      </select>
                      
                      {/* <input value={itemStatus} onChange={onItemStatusChange} type="text" placeholder="Item Status"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input> */}
                    
                      <input type="button" data-toggle="modal" data-target="#updateModal" value ="Update Item" class=" mt-3 pt-2 pb-2 btn btn-success forgotpassword-button"></input>
                      <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title" id="exampleModalLabel">Update Confirmation </h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                      Are you sure you want to Update Item with Id {itemId}
                                    </div>
                                    <div class="modal-footer">
                                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                      <button type="button" onClick={handleUpdateItem} data-dismiss="modal" class="btn btn-primary">Update</button>
                                    </div>
                                  </div>
                                </div>
                        </div>
                      </form>
                  </div>
              </div>
          </div>
        
    </div>
    );
}

export default EditItemData;