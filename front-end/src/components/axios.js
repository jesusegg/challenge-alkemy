import axios from "axios";

export const functionBalance = (user, setFunction) => {
  axios
    .get(`http://localhost:3001/get/balance?email=${user}`)
    .then((res) => setFunction(res.data))
    .catch((err) => console.log(err));
};
export const functionTotalIncomes = (user, type, setFunction) => {
  axios
    .get(`http://localhost:3001/get/amount?email=${user}&type=${type}`)
    .then((res) => setFunction(res.data.SumAmount))
    .catch((err) => console.log(err));
};
export const functionTotalExpenses = (user, type, setFunction) => {
  axios
    .get(`http://localhost:3001/get/amount?email=${user}&type=${type}`)
    .then((res) => setFunction(res.data.SumAmount))
    .catch((err) => console.log(err));
};
export const functionOperationType = (user, type, setFunction) => {
  axios
    .get(`http://localhost:3001/get/type?email=${user}&type=${type}`)
    .then((res) =>
      res.length === 0 ? setFunction(null) : setFunction(res.data)
    )
    .catch((err) => console.log(err));
};

export const functionCategory = (user, category, setFunction) => {
  axios
    .get(
      `http://localhost:3001/get/category?email=${user}&category=${category}`
    )
    .then((res) =>
      res.length === 0 ? setFunction(null) : setFunction(res.data)
    )
    .catch((err) => console.log(err));
};
