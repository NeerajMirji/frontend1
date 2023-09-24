import React, { useState } from 'react';
import './addItemData.css';
import { addItem} from '../api';
import { useNavigate } from 'react-router-dom';

import login from './login.jpg'


const addItemData = () =>
{


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
     

      const handleAddItem = async (e) => {
        e.preventDefault();
        const item = {
          itemCategory,
          itemMake,
          itemDescription,
          itemValue,
          itemStatus

        };

        await addItem(item);
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
                    <form method="post" onSubmit={handleAddItem}>
                      <h3 className='text-dark  mt-4 mb-5  pb-2'>Add Items</h3>
                      <input onChange={onItemCategoryChange} type="text" placeholder="Item Category"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input onChange={onItemMakeChange} type="text" placeholder="Item Make"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input onChange={onItemDescriptionChange} type="text" placeholder="Item Description"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input onChange={onItemValueChange} type="number" placeholder="Item Value"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                      <input onChange={onItemStatusChange} type="text" placeholder="Item Status"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                    
                      <input type="submit" value ="Add Item" class=" mt-3 pt-2 pb-2 btn btn-success forgotpassword-button"></input>
                      </form>
                  </div>
              </div>
          </div>
        
    </div>
    );
}

export default addItemData;