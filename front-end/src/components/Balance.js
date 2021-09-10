import React, { useState, useEffect } from "react";
import Row from "./Row";
import { HiArrowCircleUp } from "react-icons/hi";
import { HiArrowCircleDown } from "react-icons/hi";
import {
  functionBalance,
  functionTotalIncomes,
  functionTotalExpenses,
} from "./axios";

function Balance({
  listen,
  view,
  user,
  balance,
  setBalance,
  setTotalExpenses,
  totalExpenses,
  setTotalIncomes,
  totalIncomes,
}) {
  // const [balance, setBalance] = useState();
  // const [totalIncomes, setTotalIncomes] = useState();
  // const [totalExpenses, setTotalExpenses] = useState();

  // const functionBalance = (user) => {
  //   axios
  //     .get(`http://localhost:3001/get/balance?email=${user}`)
  //     .then((res) => setBalance(res.data))
  //     .catch((err) => console.log(err));
  // };
  // const functionTotalIncomes = (user, type) => {
  //   axios
  //     .get(`http://localhost:3001/get/amount?email=${user}&type=${type}`)
  //     .then((res) => setTotalIncomes(res.data.SumAmount))
  //     .catch((err) => console.log(err));
  // };
  // const functionTotalExpenses = (user, type) => {
  //   axios
  //     .get(`http://localhost:3001/get/amount?email=${user}&type=${type}`)
  //     .then((res) => setTotalExpenses(res.data.SumAmount))
  //     .catch((err) => console.log(err));
  // };

  useEffect(() => {
    functionBalance(user, setBalance);
    functionTotalIncomes(user, 1, setTotalIncomes);
    functionTotalExpenses(user, 2, setTotalExpenses);
  }, [user]);

  return (
    view && (
      <div className="balance">
        <div className="container_transaction grid_balance">
          <div>
            <p className="balance_title">Balance Available</p>
            <p className="balance_total">${totalIncomes - totalExpenses} USD</p>
          </div>
          <div className="flex_balance">
            <div>
              <p>
                Incomes <HiArrowCircleUp className="color_incomes" />
              </p>
              <p className="color_incomes color_incomes-font">
                ${totalIncomes} USD
              </p>
            </div>
            <div>
              <p>
                Expenses <HiArrowCircleDown className="color_expenses" />
              </p>
              <p className="color_expenses color_incomes-font">
                ${totalExpenses} USD
              </p>
            </div>
          </div>
        </div>

        <div className="container_transaction">
          <p className="last_moviments">Last Movements</p>
          {balance?.length > 0 ? (
            <Row
              data={balance}
              user={user}
              setBalance={setBalance}
              setTotalIncomes={setTotalIncomes}
              setTotalExpenses={setTotalExpenses}
            />
          ) : (
            <p className="no_operation">you dont have any movements yet</p>
          )}
        </div>
      </div>
    )
  );
}

export default Balance;
