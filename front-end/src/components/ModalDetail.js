import React from "react";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const viewport = window.matchMedia("(max-width: 400px)");

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      position: "fixed",
      width: viewport.matches ? "80%" : "50%",
      height: "25em",
      right: "0",
      left: "0",
      marginRight: "auto",
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      overflow: "scroll",
      overflowX: "hidden",
      margin: "auto auto",
      "&::-webkit-scrollbar": {
        width: "8px" /* Tamaño del scroll en vertical */,
        height: "8px" /* Tamaño del scroll en horizontal */,
        display: "none" /* Ocultar scroll */,
      },
    },
    btnProperties: {
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
    },
    field: {
      width: "12rem",
      textAlign: "center",
      color: "red",
    },
    field2: {
      width: "90%",
      textAlign: "center",
      color: "red",
    },
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1),
        width: "80%",
      },
    },
  })
);

export default function ModalDetail({
  description,
  type,
  image,
  date,
  category,
  amount,
}) {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <button>regresa</button>
      <p>Transaction Detail</p>

      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            className={classes.field}
            id="standard-basic"
            label="Standard"
            value={type}
            type="text"
            inputProps={{ style: { textAlign: "center" } }}
          />
        </form>
        <div className="grid_modal">
          <div>
            <TextField
              className={classes.field2}
              id="standard-basic"
              label="Standard"
              value={amount + "$"}
              type="text"
              inputProps={{ style: { textAlign: "center" } }}
            />
            <TextField
              className={classes.field2}
              id="standard-basic"
              label="Standard"
              value={date}
              type="text"
              inputProps={{ style: { textAlign: "center" } }}
            />
          </div>
          <div>
            <p>Category</p>
            {image}
            <p>{category}</p>
          </div>
        </div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            className={classes.field}
            id="standard-basic"
            label="Standard"
            value={description}
            type="text"
            inputProps={{ style: { textAlign: "center" } }}
          />
        </form>
      </div>
    </div>
  );

  return (
    <div>
      <button
        className={classes.btnProperties}
        type="button"
        onClick={handleOpen}
      >
        {description}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
