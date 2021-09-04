import React, { useEffect } from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export function Calendary({ date, setDate }) {
  const [aux, setAux] = React.useState(false);

  const handleDateChange = (date) => {
    setDate(new Date(date).toISOString());
    setAux(true);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        margin="none"
        style={{ marginRight: "10px", marginLeft: "10px" }}
        id="date-picker-inline"
        label="Date"
        value={date}
        disableFuture={true}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
}

export default Calendary;
