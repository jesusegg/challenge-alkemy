import React, { useState } from "react";
import Balance from "./Balance";

function Main() {
  const [active, setActive] = useState({
    home: true,
    transactions: false,
    addNew: false,
  });

  return (
    <div>
      <div className="transaction_menu">
        <button className={active.home && "button_underline"}>HOME</button>
        <button className={active.transactions && "button_underline"}>
          TRANSACCIONS
        </button>
        <button className={active.addNew && "button_underline"}>ADD NEW</button>
      </div>
      <Balance view={active.home} />
    </div>
  );
}

export default Main;
