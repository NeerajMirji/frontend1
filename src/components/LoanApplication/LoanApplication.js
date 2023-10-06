import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";

import './LoanApplication.css'
import { useState ,useEffect} from "react";
import { getAllItems, loanApplicationDetails } from '../api';
import { useNavigate } from 'react-router-dom';

import LoanApplicationImg from './LoanApplicationImg.jpg';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

const LoanApplication = () => {

    const [employee_id , setEmployeeId] = useState(localStorage.getItem("userName"));
    // const [loan_id , setLoanId] = useState("");
    const [item_category , setItemCategory] = useState("");
    const [item_description , setItemDescription] = useState("");
    const [item_make , setItemMake] = useState("");
    const [item_value , setItemValue] = useState("");
    // const [item_duration , setItemDuration] = useState("");
    const [loan_type , setLoanType] = useState("");
    const [filteredByMakes,setFilteredByMakes] = useState([])
    const [itemMakes,setItemMakes] = useState([]);
    const [items,setItems] = useState([])


    const navigate = useNavigate();

    var cats = [];
    var makes = [];
    var filtered_items = []

   
    items.map(item=>{
      cats.push(item.itemCategory)
    })
    cats =  cats.filter((cat,pos)=>{
      return cats.indexOf(cat) == pos;
    })
  
    const onEmployeeIdChange = (e) => {
        setEmployeeId(e.target.value);
        console.log(employee_id)
      };




      const onItemCategoryChange = (e) => {

        setItemCategory(e.target.value);

                filtered_items =  items.filter(item=>{
                  return item.itemCategory == e.target.value;
                }) 
                console.log(filtered_items)

              
                filtered_items.map(item=>{
                  makes.push(item.itemMake)
                })
                console.log("makes")
                console.log(makes)
                makes =  makes.filter((make,pos)=>{
                  return makes.indexOf(make) == pos;
                })
                console.log(makes)
                setItemMakes(makes);
                console.log(e.target.value);
      };


      

      const onItemDescriptionChange = (e) => {
            setItemDescription(e.target.value);
            const final_item  =  filteredByMakes.filter(item=>{
              return item.itemDescription == e.target.value;
            }) 
            console.log(final_item[0].itemValue)
            setItemValue(final_item[0].itemValue)
      };


      const onItemMakeChange = (e) => {
            setItemMake(e.target.value);
            filtered_items =  items.filter(item=>{
              return item.itemMake == e.target.value;
            }) 
            setFilteredByMakes(filtered_items)
            console.log(filtered_items)

      };


      const onItemValueChange = (e) => {
        setItemValue(e.target.value);
      };


      const onLoanTypeChange = (e) => {
        setLoanType(e.target.value);
      };
    

      const handleLoanApplication = async (e) => {
        e.preventDefault();
        const applicationDetails = {
            employeeId :  employee_id,
            itemCategory : item_category,
            itemDescription : item_description,
            itemValue : item_value,
            itemMake:item_make,
            loanType:loan_type

        };
        console.log(applicationDetails)

        await loanApplicationDetails(applicationDetails);
        navigate("/userdashboard");
      };


    useEffect(() => {
      return async () => {
        const response = await getAllItems();
        console.log(response)
   
        setItems(response)
        console.log("from loan" , items);
     

      };
    }, []);
    


    return (

      <div class="container text-center mb-5">
      <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12">
              <img  className="forgotpasswordImg mt-5 pt-5 " src={LoanApplicationImg} alt="forgot password"/>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
              <div className='mt-5 pt-5'>
                <form  onSubmit={handleLoanApplication}>
                  <h3 className='text-dark   mb-5  pb-2'>Apply For Loan</h3>
               
                  {/* <input onchange={onEmployeeIdChange} type="number" placeholder="Employee Id"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input> */}
                  <input readOnly onChange={onEmployeeIdChange} value={employee_id} type="number" placeholder="Employee Id"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                  {/* <input onChange={onLoanIdChange} type="number" placeholder="Loan Id"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input> */}

                  <select required onChange={onItemCategoryChange} value={item_category} className="custom-select  mt-2 mb-1" id="inputGroupSelect01">
                  <option selected>Item Category</option>
                  {

                          cats.map((cat) => (
                            
                            <option key={cat} value={cat}>{cat}</option>

                          ))

                  }
                  </select>
                

                  <select  required onChange={onItemMakeChange} className="custom-select  mt-2 mb-1" id="inputGroupSelect01">
                        <option selected>Item Make</option>
                        {

                              itemMakes.map((item) => (
                                
                                <option key={item} value={item}>{item}</option>

                              ))

                              }
                  </select>

                  <select required onChange={onItemDescriptionChange} className="custom-select  mt-2 mb-1" id="inputGroupSelect01">
                        <option selected>Item Description</option>
                        {

                      filteredByMakes.map((item) => (
                              
                              <option key={item.itemId} value={item.itemDescription}>{item.itemDescription}</option>

                            ))

                            }
                  </select>

                  {/* <input onChange={onItemCategoryChange} type="text" placeholder="Item Category"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input> */}
                  {/* <input onChange={onItemDescriptionChange} type="text" placeholder="Item Description"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input> */}
                  <input onChange={onItemValueChange} type="number" placeholder="Item Value"  value={item_value} readOnly aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                  {/* <input onChange={onLoanDurationChange} type="number" placeholder="Item Duration"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input> */}
                  <input onChange={onLoanTypeChange} type="text" placeholder="Loan Type"  aria-label="First name" className="mt-2 form-control forgotpassword-input" ></input>
                  <input type="submit" value ="Apply" className=" mt-3 pt-2 pb-2 btn btn-success forgotpassword-button"></input>
                  </form>
              </div>
          </div>
      </div>
    
</div>

        
        

    )
}

export default LoanApplication;



