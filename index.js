const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "animales",
  dialect: "mysql",
  // logging: false,
});

/* sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((err) => {
    console.log("No me he podido conectar a la base de datos");
    console.log(err.message);
  }); */

module.exports = sequelize;
