import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@mui/styles";
import Button from "@material-ui/core/Button";
import logo from "../img/logo-3d-png-9039.png";

const useStyles = makeStyles((theme) => ({
  root: {
    // "& > *": {
    //   margin: theme.spacing(1),
    // },
    backgroundColor: "#635DFF",
    color: "white",
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#413daf",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
    "&:hover": {
      backgroundColor: "#413daf",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    fontWeight: "bold",
    fontSize: "20px",
    padding: "4px 40px",
    borderRadius: "10px",
  },
}));

function Login() {
  const classButton = useStyles();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="login">
        <div className="container_login">
          <img src={logo} alt="logo" />
          <h1>My Funds App</h1>
          <Button
            className={classButton.root}
            onClick={() => loginWithRedirect()}
          >
            login
          </Button>
        </div>
      </div>
    )
  );
}

export default Login;
