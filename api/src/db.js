// require("dotenv").config();
// const { Sequelize } = require("sequelize");
// const fs = require("fs");
// const path = require("path");
// const { Console } = require("console");
// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const db_name = path.join(__dirname, "challengeDb.db");
console.log(db_name);
export const db = new sqlite3.Database(db_name, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'apptest.db'");
});

// const sql_create = `INSERT into operation_type (id, type) values (3,"prueba");`;

// db.run(sql_create, (err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log("Successful creation of the 'Books' table");
// });
