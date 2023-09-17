import axios from "axios";

const addEmployee = async (employee) => {
  const response = await axios.post(
    "http://localhost:8080/api/employees/add",
    employee
  );
};

const loginData = async (loginCred) =>
{
  const response = await axios.post(
    "http://localhost:8080/api/employees/login",
    loginCred
  );
}

const loanCardDetails = async (loanCard) =>{
  const response = await axios.post(
    "http://localhost:8080/api/employees/loanitem/add",
    loanCard
  );
}

const loanApplicationDetails = async (LoanApplication) =>{
  const response = await axios.post(
    "http://localhost:8080/api/employees/loanitem/add",
    LoanApplication
  );
}


const getEmployeeList = async () => {
  const response = await axios.get("http://localhost:8080/api/employees");
  console.log("This is from get All", response.data);
  return response.data;
};


const getLoanApplications = async () => {
  const response = await axios.get("http://localhost:8080/api/loanitem/getAll");
  console.log("This is from get All", response.data);
  return response.data;
};

const getMyApplications = async () => {
  const response = await axios.get("http://localhost:8080/api/loanitem/getAll");
  console.log("This is from get All", response.data);
  return response.data;
};

export { addEmployee, getEmployeeList, loginData, loanCardDetails, loanApplicationDetails, getLoanApplications,  getMyApplications};
