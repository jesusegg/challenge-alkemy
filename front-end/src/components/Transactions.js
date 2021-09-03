import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { HiArrowCircleUp, HiArrowCircleDown } from "react-icons/hi";
import { makeStyles } from "@mui/styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Row, { category } from "../components/Row";

const useStyles = makeStyles(() => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  // selectEmpty: {
  //   marginTop: theme.spacing(2),
  // },
  option: {
    fontSize: "14px",
  },
}));

function Transactions({ view, user, listen }) {
  const classes = useStyles();
  const [operation, setOperation] = useState(undefined);
  const ref = useRef();
  const [state, setState] = useState({
    category: undefined,
  });

  const functionOperationType = (user, type) => {
    axios
      .get(`http://localhost:3001/get/type?email=${user}&type=${type}`)
      .then((res) =>
        res.length === 0 ? setOperation(null) : setOperation(res.data)
      )
      .catch((err) => console.log(err));
  };

  const functionCategory = (user, category) => {
    axios
      .get(
        `http://localhost:3001/get/category?email=${user}&category=${category}`
      )
      .then((res) =>
        res.length === 0 ? setOperation(null) : setOperation(res.data)
      )
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    functionCategory(user, event.target.value);
  };

  useEffect(() => {
    if (operation === undefined && user) {
      functionOperationType(user, 1);
    }
  }, [user, operation]);

  return (
    view && (
      <div className="balance">
        <div className="container_transaction">
          <div className="transaction_buttons">
            <div className="transaction_buttons-operations">
              <div>
                <button
                  onClick={(e) => functionOperationType(user, e.target.value)}
                  className="button_banish"
                  value={1}
                >
                  incomes <HiArrowCircleUp className="color_incomes" />
                </button>
              </div>
              <div>
                <button
                  className="button_banish"
                  value={2}
                  onClick={(e) => functionOperationType(user, e.target.value)}
                >
                  expenses <HiArrowCircleDown className="color_expenses" />
                </button>
              </div>
            </div>
            <div>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel
                  htmlFor="outlined-age-native-simple"
                  className={classes.option}
                >
                  Category
                </InputLabel>
                <Select
                  native
                  value={state.category}
                  onChange={handleChange}
                  className={classes.option}
                  label="category"
                  inputProps={{
                    name: "category",
                    id: "outlined-age-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  {category.map((x, i) => (
                    <option key={i} className={classes.option} value={x.id}>
                      {x.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <Row data={operation} listen={listen} />
        </div>
      </div>
    )
  );
}

export default Transactions;
