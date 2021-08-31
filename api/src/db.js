const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const db_name = path.join(__dirname, "challengeDb.db");

module.exports.db = new sqlite3.Database(db_name, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'apptest.db'");
});
