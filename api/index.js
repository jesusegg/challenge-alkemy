const server = require("./src/app.js");
// const { conn } = require("./src/db.js");
// const fulldb = require("./src/db_function/index");
// const { Raza, Temperamento } = require("./src/db.js");
//console.log(Raza);

// Syncing all the models at once.
// conn
//   .sync({ force: true })
//   .then(() => {
server.listen(process.env.PORT || 3001, () => {
  // fulldb();
  console.log("%s listening at 3001"); // eslint-disable-line no-console
});
// })
// .catch((e) => console.error(e));
