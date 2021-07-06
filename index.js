const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  username: "aleu",
  password: "1234",
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
