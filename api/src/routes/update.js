const { Router } = require("express");
const { db } = require("../db");
const router = Router();

router.put("/update", (req, res) => {
  const { id, category, amount, date, concept } = req.body;
  //   "2021-10-29 10:00:00" format

  const sql_create = `UPDATE operation
     SET id_category = ${category},
     amount = ${amount},
     date = "${date}",
     concept = "${concept}"
     WHERE id = ${id};`;

  db.run(sql_create, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Successful updating operation");
  });
});

module.exports = router;
