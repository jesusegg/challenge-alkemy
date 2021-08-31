import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Balance from "./Balance";

function Main() {
  const { user } = useAuth0();
  const [active, setActive] = useState({
    home: true,
    transactions: false,
    addNew: false,
  });

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
  }, [user?.email]);

  return (
    <div>
      <div className="transaction_menu">
        <button className={active.home ? "button_underline" : undefined}>
          HOME
        </button>
        <button
          className={active.transactions ? "button_underline" : undefined}
        >
          TRANSACCIONS
        </button>
        <button className={active.addNew ? "button_underline" : undefined}>
          ADD NEW
        </button>
      </div>
      <Balance view={active.home} user={user?.email} />
    </div>
  );
}

export default Main;
