import React from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@material-ui/core/TextField";
// import MaterialUIPickers from "./Calendary";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";

const useStyles = makeStyles(() => ({
  root: {
    "& > *": {
      //   margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function AddOperation() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="balance">
      <div className="container_transaction">
        <p>Add new transaction</p>
        <div>
          <button>Income</button>
          <button>Expense</button>
        </div>
        <div>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" />
          </form>
          {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider> */}
          {/* <MaterialUIPickers /> */}
        </div>
      </div>
    </div>
  );
}

export default AddOperation;
