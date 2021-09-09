import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Balance from "./Balance";
import {
  functionBalance,
  functionTotalIncomes,
  functionTotalExpenses,
  functionOperationType,
} from "./axios";
import Transactions from "./Transactions";
import AddOperation from "./AddOperation";

export const handleDelete = (operationiId) => {
  axios
    .delete(`http://localhost:3001/delete/operation`, {
      data: { id: operationiId },
    })
    .then()
    .catch((err) => console.log(err));
};

function Main() {
  const { user, isAuthenticated } = useAuth0();
  const [listen, setListen] = useState();
  const [balance, setBalance] = useState();
  const [totalIncomes, setTotalIncomes] = useState();
  const [totalExpenses, setTotalExpenses] = useState();
  const [operation, setOperation] = useState(undefined);
  const [active, setActive] = useState({
    home: true,
    transactions: false,
    addNew: false,
  });
  const handleActive = (e) => {
    setActive({
      home: false,
      transactions: false,
      addNew: false,
      [e.target.name]: true,
    });
  };
  const handleHome = () => {
    functionBalance(user?.email, setBalance);
    functionTotalIncomes(user?.email, 1, setTotalIncomes);
    functionTotalExpenses(user?.email, 2, setTotalExpenses);
  };
  const handleTransaction = () => {
    functionOperationType(user?.email, 1, setOperation);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3001/get/?email=${user?.email}`)
      .then((res) => {
        if (res.data.length === 0) {
          axios
            .post(`http://localhost:3001/post/user`, { user: user?.email })
            .then();
        }
      })
      .catch((err) => console.log(err));

    axios.get(`http://localhost:3001/get/balance?email=${user?.email}`).then();
  }, [user?.email, listen]);

  return (
    isAuthenticated && (
      <div>
        <div className="transaction_menu">
          <button
            onClick={(e) => {
              handleActive(e);
              handleHome();
            }}
            className={active.home ? "button_underline" : undefined}
            name="home"
          >
            HOME
          </button>
          <button
            onClick={(e) => {
              handleActive(e);
              handleTransaction();
            }}
            name="transactions"
            className={active.transactions ? "button_underline" : undefined}
          >
            TRANSACTIONS
          </button>
          <button
            onClick={(e) => handleActive(e)}
            name="addNew"
            className={active.addNew ? "button_underline" : undefined}
          >
            ADD NEW
          </button>
        </div>
        <Balance
          view={active.home}
          user={user?.email}
          setTotalExpenses={setTotalExpenses}
          totalExpenses={totalExpenses}
          setTotalIncomes={setTotalIncomes}
          totalIncomes={totalIncomes}
          setBalance={setBalance}
          balance={balance}
        />
        <Transactions
          view={active.transactions}
          user={user?.email}
          listen={setListen}
          operation={operation}
          setOperation={setOperation}
        />
        <AddOperation view={active.addNew} user={user?.email} />
      </div>
    )
  );
}

export default Main;
