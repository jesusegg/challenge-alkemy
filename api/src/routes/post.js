const { Router } = require("express");
const { db } = require("../db");
const router = Router();

router.post("/user", (req, res) => {
  const sql_create = `INSERT into users (id, email) values ("${req.body.user}","${req.body.user}");`;

  db.run(sql_create, (err) => {
    if (err) {
      return console.error(err.message);
    }
    return res.send("Successful creation of user");
  });
});

router.post("/operation", (req, res) => {
  const { email, idCategory, idOperationType, concept, amount, date } =
    req.body;
  //   "2021-10-29 10:00:00" format
  const sql_create = `INSERT into operation(id_user,id_category,id_operation_type,concept,amount,date_operation) VALUES("${email}",${idCategory},${idOperationType},"${concept}",${amount},"${date}");`;

  db.run(sql_create, (err) => {
    if (err) {
      return console.error(err.message);
    }
    return res.send("Successful creation of operation");
  });
});

module.exports = router;
