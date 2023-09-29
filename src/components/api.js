import axios from "axios";

const addEmployee = async (employee) => {
  console.log(employee)
  const response = await axios.post(
    "http://localhost:8080/api/employees/add",
    employee
  );
};

const deleteEmployeeData = async (id) => {
  const response = await axios.delete(`http://localhost:8080/api/employees/remove/${id}`);
  console.log("This is from get All", response.data);
  return response.data;
};

const updateEmployeeData = async (employee) => {
  const response = await axios.put(`http://localhost:8080/api/employees/update/${employee.employeeId}`,employee);
  // console.log("This is from get All", response.data);
  return response.data;
};

const loginData = async (loginCred) =>
{
  const response = await axios.post(
    "http://localhost:8080/api/logindata/add",
    loginCred
  );

  return response;
}

const loanCardDetails = async (loanCard) =>{
  const response = await axios.post(
    "http://localhost:8080/api/loanitem/add",
    loanCard
  );
}

const loanApplicationDetails = async (LoanApplication) =>{
  const response = await axios.post(
    "http://localhost:8080/api/loanitem/add",
    LoanApplication
  );
}


const getEmployeeList = async () => {
  const response = await axios.get("http://localhost:8080/api/employees/getAll");
  // console.log("This is from get All", response.data);
  return response.data;
};


const getLoanApplications = async () => {
  const response = await axios.get("http://localhost:8080/api/loanitem/getAll");
  console.log("This is from get All", response.data);
  return response.data;
};

const getMyApplications = async (id) => {
  const response = await axios.get(`http://localhost:8080/api/loanitem/${id}`);
  console.log("This is from getMyApplications", response.data);
  return response.data;
};



const updateLoanApplicationData = async (Loanapplication) => {
  const response = await axios.put(`http://localhost:8080/api/loanitem/update/${Loanapplication.loanId}`,Loanapplication);
  // console.log("This is from get All", response.data);
  return response.data;
};

const getLoginDataByUserName = async (userName) =>
{
  const response = await axios.get(`http://localhost:8080/api/logindata/${userName}`);
  console.log("This is from getLoginDataByUserName", response.data);
  return response.data;

}


const addItem = async(item)=>
{
 
  const response = await axios.post(
    "http://localhost:8080/api/itemdetails/add",
    item
  );
}

const updateItem = async(item)=>
{

  const response = await axios.put(`http://localhost:8080/api/itemdetails/update/${item.itemId}`,item);
   console.log("This is from updateItem", response.data);
  return response.data;

}

const deleteItem = async(itemId)=>
{
  const response = await axios.delete(`http://localhost:8080/api/itemdetails/remove/${itemId}`);
  console.log("This is from deleteItem", response.data);
  return response.data;
}

const getAllItems = async () =>
{
  const response = await axios.get("http://localhost:8080/api/itemdetails/getAll");
  console.log("This is from getAllitems", response.data);
  return response.data;

}



const updatePassword = async (updatedUser) => {
  const response = await axios.put(`http://localhost:8080/api/logindata/forgotpassword/${updatedUser.username}`,updatedUser);
  // console.log("This is from get All", response.data);
  return response.data;
};

const addNewUser = async(user)=>
{
 
  const response = await axios.post(
    "http://localhost:8080/auth/addNewUser",
    user
  );
  return response.data;
}

export {updatePassword,addNewUser, getAllItems, deleteItem, updateItem, addItem,  getLoginDataByUserName, updateLoanApplicationData, updateEmployeeData, deleteEmployeeData, addEmployee, getEmployeeList, loginData, loanCardDetails, loanApplicationDetails, getLoanApplications,  getMyApplications};
