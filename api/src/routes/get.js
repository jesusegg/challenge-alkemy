const { Router } = require("express");
const { db } = require("../db");
const router = Router();

router.get("/", (req, res) => {
  const { email } = req.query;

  const sql_create = `SELECT * from users where id = "${email}";`;

  db.all(sql_create, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(row);
    res.json(row);
  });
});

router.get("/balance", (req, res) => {
  const { email } = req.query;
  const sql_create = `SELECT 
            O.id, id_user as user,concept ,amount ,date_operation as date,T.type as operation,C.type as category
        FROM 
            operation O, operation_type T, category C 
        WHERE 
        O.id_user = "${email}" and O.id_operation_type = T.id and O.id_category = C.id
        ORDER by date_operation;`;

  db.all(sql_create, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(row);
    res.json(row);
  });
});

router.get("/category", (req, res) => {
  const { email, category } = req.query;
  const sql_create = `SELECT 
            O.id, id_user as user,concept ,amount ,date_operation as date,T.type as operation,C.type as category
        FROM 
            operation O, operation_type T, category C 
        WHERE 
        O.id_user = "${email}" and O.id_operation_type = T.id and O.id_category = C.id and O.id_category=${category};`;

  db.all(sql_create, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(row);
    res.json(row);
  });
});

router.get("/type", (req, res) => {
  const { email, type } = req.query;
  const sql_create = `SELECT 
              O.id, id_user as user,concept ,amount ,date_operation as date,T.type as operation,C.type as category
          FROM 
              operation O, operation_type T, category C 
          WHERE 
          O.id_user = "${email}" and O.id_operation_type = T.id and O.id_category = C.id and O.id_operation_type=${type};`;

  db.all(sql_create, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(row);
    res.json(row);
  });
});

router.get("/amount", (req, res) => {
  const { email, type } = req.query;
  const sql_create = `SELECT 
          id_user as user ,T.type as operation, sum(amount) as SumAmount
          FROM 
              operation O, operation_type T, category C 
          WHERE 
          O.id_user = "${email}" and O.id_operation_type = T.id  and O.id_category = C.id and O.id_operation_type = ${type};`;

  db.get(sql_create, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(row);
    res.json(row);
  });
});

module.exports = router;
