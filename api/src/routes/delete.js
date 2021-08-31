const { Router } = require("express");
const { db } = require("../db");
const router = Router();

router.delete("/category", (req, res) => {
  const { id } = req.body;

  const sql_create = `DELETE FROM operation
     WHERE id=${id};`;

  db.run(sql_create, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    return res.send("Successful deleting operation");
  });
});
module.exports = router;
