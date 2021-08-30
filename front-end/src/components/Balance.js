import React from "react";
import { HiArrowCircleUp } from "react-icons/hi";
import { HiArrowCircleDown } from "react-icons/hi";
import Row from "./Row";

function Balance({ data, view }) {
  data = true;
  return (
    view && (
      <div className="balance">
        {data ? (
          <div className="container_transaction grid_balance">
            <div>
              <p className="balance_title">Balance Available</p>
              <p className="balance_total">$1,000 USD</p>
            </div>
            <div className="flex_balance">
              <div>
                <p>
                  Incomes <HiArrowCircleUp className="color_incomes" />
                </p>
                <p className="color_incomes color_incomes-font">$1,000 USD</p>
              </div>
              <div>
                <p>
                  Expenses <HiArrowCircleDown className="color_expenses " />
                </p>
                <p className="color_expenses color_incomes-font">$1,000 USD</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>aun no tienes registros mamon</p>
          </div>
        )}
        <div className="container_transaction">
          <p>Last Moviments</p>
          <Row />
        </div>
      </div>
    )
  );
}

export default Balance;
