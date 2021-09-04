import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MaterialUIPickers from "./Calendary";
import { categoryImage } from "./Row";
import { category } from "./Row";

const categoryFilter = category.map((x) => x.name);
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  field: {
    width: "12rem",
  },
}));

function AddOperation() {
  const classes = useStyles();
  const refButtons = useRef();

  const buttonIncome = () =>
    refButtons.current?.value === "income" ? "button_background" : "null";

  const buttonExpense = () =>
    refButtons.current?.value === "expense" ? "button_background" : "null";
  //  ? refButtons.current?.value === "income": "button_background" : "null";

  const refAmount = useRef();
  const refDate = useRef();
  console.log(refDate.current?.value);
  const [date, setDate] = React.useState(new Date());
  const [upgrade, setUpgrade] = useState(true);

  useEffect(() => {}, [upgrade]);
  return (
    <div className="balance">
      <div className="container_transaction">
        <p>Add new transaction</p>
        <div ref={refButtons} className="buttons_addOperation">
          <button
            onClick={() => {
              refButtons.current.value = "income";
              setUpgrade(!upgrade);
            }}
            className={buttonIncome()}
          >
            Income
          </button>
          <button
            onClick={() => {
              refButtons.current.value = "expense";
              setUpgrade(!upgrade);
            }}
            className={buttonExpense()}
          >
            Expense
          </button>
        </div>
        <div className="div_calendary">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              className={classes.field}
              id="standard-basic"
              label="Amount"
              type="number"
              inputRef={refAmount}
            />
          </form>

          <MaterialUIPickers date={date} setDate={setDate} />
        </div>
        {categoryFilter.map((x, i) => (
          <div key={i}>
            {categoryImage(x)}
            <p>{x}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddOperation;
