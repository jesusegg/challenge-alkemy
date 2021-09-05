import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MaterialUIPickers from "./Calendary";
import { categoryImage } from "./Row";
import { category } from "./Row";

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

function AddOperation({ view, user }) {
  const categoryFilter = category.map((x) => x.name);
  const classes = useStyles();
  const refButtons = useRef();

  const buttonIncome = () =>
    refButtons.current?.value === 1 ? "button_background" : "null";

  const buttonExpense = () =>
    refButtons.current?.value === 2 ? "button_background" : "null";

  const buttonCategory = (x) =>
    refCategory.current?.value === x ? "category_Selected-background" : "null";

  const refAmount = useRef();
  const refCategory = useRef();
  const refDate = useRef();
  const refInput = useRef();

  const [date, setDate] = React.useState(new Date());
  const [upgrade, setUpgrade] = useState(true);

  const handleSubmit = () => {
    if (
      refButtons.current?.value &&
      refCategory.current?.value &&
      date &&
      refInput.current?.value
    ) {
      const data = {
        email: user,
        idCategory: refCategory.current?.value,
        idOperationType: refButtons.current?.value,
        concept: refInput.current?.value,
        amount: refAmount.current?.value,
        date: date,
      };

      axios.post("http://localhost:3001/post/operation", data).then();
      setUpgrade(!upgrade);
      alert("funciona");
    } else {
      alert("faltan datos");
    }
  };

  useEffect(() => {}, [upgrade]);
  return (
    view && (
      <div className="balance">
        <div className="container_transaction">
          <p>Add new transaction</p>
          <div ref={refButtons} className="buttons_addOperation">
            <button
              onClick={() => {
                refButtons.current.value = 1;
                setUpgrade(!upgrade);
              }}
              className={buttonIncome()}
            >
              Income
            </button>
            <button
              onClick={() => {
                refButtons.current.value = 2;
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

            <MaterialUIPickers ref={refDate} date={date} setDate={setDate} />
          </div>
          <p className="category_title">Categories</p>
          <div ref={refCategory} className="grid_AddOperation">
            {category.map((x, i) => (
              <div
                onClick={() => {
                  setUpgrade(!upgrade);
                  refCategory.current.value = x.id;
                }}
                className={`div_AddOperation ${buttonCategory(x.id)}`}
                key={i}
              >
                {categoryImage(x.name)}
                <p>{x.name}</p>
              </div>
            ))}
          </div>
          <p className="category_title">Concept</p>
          <input
            ref={refInput}
            className="input_category"
            type="text"
            placeholder="insert concept"
          />
          <button onClick={handleSubmit}>Create Transaction</button>
        </div>
      </div>
    )
  );
}

export default AddOperation;
